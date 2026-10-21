import { createServer } from "node:http"
import { createReadStream, existsSync, statSync, watch } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import { extname, isAbsolute, join, relative, resolve, sep } from "node:path"
import { spawn } from "node:child_process"

const root = resolve(new URL("..", import.meta.url).pathname)
const srcRoot = join(root, "src")
const outputRoot = join(root, "_site")
const port = Number(process.env.PORT || 6173)
const host = process.env.HOST || "127.0.0.1"

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".ttf", "font/ttf"],
])

let building = false
let queued = false
const watchers = new Map()

function isInsideRoot(filePath) {
  const path = relative(outputRoot, filePath)
  return path !== ".." && !path.startsWith(`..${sep}`) && !isAbsolute(path)
}

function runBuild(reason = "initial") {
  if (building) {
    queued = true
    return
  }

  building = true
  console.log(`[dev] building static site (${reason})`)

  const child = spawn("npm", ["run", "build"], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  })

  child.on("exit", (code) => {
    building = false
    if (code === 0) {
      console.log("[dev] build complete")
    } else {
      console.log(`[dev] build failed with exit code ${code}`)
    }

    if (queued) {
      queued = false
      runBuild("queued change")
    }
  })
}

async function watchDirectory(dir) {
  if (watchers.has(dir)) {
    return
  }

  watchers.set(
    dir,
    watch(dir, async (_event, filename) => {
      if (filename) {
        const changedPath = join(dir, filename.toString())
        if (existsSync(changedPath)) {
          const changedStat = await stat(changedPath).catch(() => null)
          if (changedStat?.isDirectory()) {
            await watchTree(changedPath)
          }
        }
      }

      runBuild(filename ? filename.toString() : "file change")
    }),
  )
}

async function watchTree(dir) {
  await watchDirectory(dir)
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])

  await Promise.all(entries.filter((entry) => entry.isDirectory()).map((entry) => watchTree(join(dir, entry.name))))
}

function serveFile(req, res) {
  const url = new URL(req.url || "/", `http://${host}:${port}`)
  let pathname
  try {
    pathname = decodeURIComponent(url.pathname)
  } catch {
    res.writeHead(400, { "content-type": "text/plain; charset=utf-8" })
    res.end("Bad request")
    return
  }
  const requested = pathname === "/" ? "index.html" : pathname.slice(1)
  let filePath = resolve(outputRoot, requested)

  if (!isInsideRoot(filePath) || !existsSync(filePath)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
    res.end("Not found")
    return
  }

  if (statSync(filePath).isDirectory()) {
    if (!url.pathname.endsWith("/")) {
      res.writeHead(301, { location: url.pathname + "/" + url.search })
      res.end()
      return
    }
    filePath = join(filePath, "index.html")
    if (!existsSync(filePath)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
      res.end("Not found")
      return
    }
  }

  const contentType = types.get(extname(filePath).toLowerCase()) || "application/octet-stream"
  res.writeHead(200, { "content-type": contentType })
  createReadStream(filePath).pipe(res)
}

runBuild()
await watchTree(srcRoot)

const server = createServer(serveFile)

server.on("error", (error) => {
  console.error(`[dev] server failed: ${error.message}`)
  process.exit(1)
})

server.listen(port, host, () => {
  console.log(`[dev] serving static site at http://${host}:${port}/`)
  console.log("[dev] watching src/ for rebuilds")
})
