(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{360:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title-frontmatter-emoji"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title-frontmatter-emoji"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title+""+a.$frontmatter.emoji))]),a._v(" "),t("p",[t("img",{attrs:{src:"/illustrations/mysql/mysql-logo.png",alt:'Обложка статьи "MySQL: установка на Ubuntu, настройка и основы работы из терминала"'}})]),a._v(" "),t("p",[t("strong",[a._v("MySQL (MariaDB)")]),a._v(" — одна из самых популярных баз данных. Разберемся, как установить ее в Ubuntu, произвести базовую настройку, а так же познакомимся с основами работы с MySQL из терминала.")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#так-mysql-иnи-mariadb"}},[a._v("Так MySQL или MariaDB?")])]),t("li",[t("a",{attrs:{href:"#установка-mysql-mariadb"}},[a._v("Установка MySQL/MariaDB")])]),t("li",[t("a",{attrs:{href:"#первичная-настройка-mysql-mariadb"}},[a._v("Первичная настройка MySQL/MariaDB")])]),t("li",[t("a",{attrs:{href:"#создание-поnьзоватеnя-администратора"}},[a._v("Создание пользователя-администратора")])]),t("li",[t("a",{attrs:{href:"#подкnючение-к-mysql-mariadb-через-gui-кnиент"}},[a._v("Подключение к MySQL/MariaDB через GUI-клиент")])]),t("li",[t("a",{attrs:{href:"#создание-поnьзоватеnя-дnя-испоnьзования-в-коде-приnожения"}},[a._v("Создание пользователя для использования в коде приложения")])]),t("li",[t("a",{attrs:{href:"#комментарии"}},[a._v("Комментарии")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"так-mysql-иnи-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#так-mysql-иnи-mariadb"}},[a._v("#")]),a._v(" Так MySQL или MariaDB?")]),a._v(" "),t("p",[a._v("Если быть до конца откровенным, то "),t("strong",[a._v("речь в этой статьей пойдет о СУБД MariaDB, а не о MySQL")]),a._v(". Однако, важно понимать, что отличия этих систем управления базами данных не так значительны, как Вы могли подумать. "),t("strong",[a._v("В подавляющем большинстве случаев Вы даже не заметите разницы между этими СУБД")]),a._v(", т.к. MariaDB реализует полностью идентичный MySQL интерфейс.")]),a._v(" "),t("p",[a._v("Это значит, что почти любой "),t("strong",[a._v("проект использующий MySQL может быть перенесен на MariaDB вообще без каких либо изменений")]),a._v(". Если вы работаете с БД из терминала, то здесь вас тоже не будет ждать никаких сюрпризов, т.к. используемые команды и принципы работы ничем не отличаются. То же можно сказать и о GUI-интерфейсах, здесь вы просто подключаетесь к MariaDB, как к MySQL.")]),a._v(" "),t("p",[a._v("MariaDB — это форк проекта MySQL, разрабатываемый полностью открыто сообществом энтузиастов. По заверению разработчиков все технологии, существующие в закрытой версии MySQL 5.5 Enterprise Edition, в полном объеме представлены и в MariaDB. "),t("strong",[a._v("MariaDB развивается быстрее и имеет больше возможностей")]),a._v(", чем MySQL, касающихся оптимизации, улучшения работы с памятью, и многого другого. Обычно, со временем, эти возможности реализуют и в MySQL. Например, поддержка библиотеки GIS для работы с геоточками, полигонами и маршрутами появилась в MariaDB раньше, чем в MySQL. Также сообщения об ошибках и проблемы уязвимостей в MariaDB обычно закрываются гораздо оперативнее, чем в MySQL.")]),a._v(" "),t("p",[a._v("По большинству параметров MariaDB намного лучше, чем MySQL. С более полным перечнем различий MySQL и MariaDB можно ознакомиться в официальной документации здесь - "),t("a",{attrs:{href:"https://mariadb.com/kb/ru/mariadb-vs-mysql-features/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MariaDB в сравнении с MySQL - Особенности"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"установка-mysql-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#установка-mysql-mariadb"}},[a._v("#")]),a._v(" Установка MySQL/MariaDB")]),a._v(" "),t("p",[a._v("Установка MySQL или MariaDB в операционной системе Ubuntu или любом другой Debian-based дистрибутиве Linux не будет проблемой даже для новичка. Дла того, чтобы получить рабочую систему на своем компьютере, достаточно просто выполнить пару команд в терминале и пользоваться готовой к бою СУБД без каких либо проблем.")]),a._v(" "),t("p",[a._v("Для того, чтобы установить MariaDB на компьютер выполните в терминале следующую команду:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb-server mariadb-client\n")])])]),t("p",[a._v("Проверить установленную версию можно так")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mysql --version\n")])])]),t("p",[a._v("Как видите, к установленной MariaDB мы даже обращаемся ровно так, как если бы это было оригинальная MySQL!")]),a._v(" "),t("p",[a._v('В подавляющем большинстве случаев сразу после установки ваша база данных полностью готова "к бою". Проблема с запуском службы у меня возникла всего один раз. Если Вас постигла та же участь и при попытке подключения к БД Вы все-таки получаете ошибку, то '),t("strong",[a._v("проверьте запущена ли служба")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("systemctl status mysql\n")])])]),t("p",[a._v("Если все нормально, Вы должны увидеть в терминале зелененькую надпись "),t("strong",[a._v("active")]),a._v(" "),t("img",{attrs:{src:"/illustrations/mysql/active.png",alt:"Служба MySQL - статус active",title:"Служба MySQL - статус active"}})]),a._v(" "),t("p",[a._v("Если в вашем случае статус другой, попробуйте перезапустить службу при помощи команды restart")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart mysql\n")])])]),t("h2",{attrs:{id:"первичная-настройка-mysql-mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#первичная-настройка-mysql-mariadb"}},[a._v("#")]),a._v(" Первичная настройка MySQL/MariaDB")]),a._v(" "),t("p",[a._v("Для первичной настройки безопасности MySQL или MariaDB существует специальный скрипт "),t("code",[a._v("mysql_secure_installation")]),a._v(". Он в автоматическом режиме удаляет анонимных пользователей, запрещает удаленный доступ к базе данных и обновляет привилегии. Для того, чтобы запустить его, выполните в терминале следующую команду")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mysql_secure_installation\n")])])]),t("p",[a._v("После запуска скрипт задаст Вам несколько вопросов. Вам следует ответить на них положительно: "),t("code",[a._v("y")]),a._v(" или "),t("code",[a._v("Y")]),a._v(". Можно также просто нажимать "),t("code",[a._v("Enter")]),a._v(".")]),a._v(" "),t("p",[a._v("Если по завершении работы скрипта в выводе появится "),t("em",[a._v('"All done!"')]),a._v(", значит все прошло успешно. Можно двигаться дальше!")]),a._v(" "),t("h2",{attrs:{id:"создание-поnьзоватеnя-администратора"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#создание-поnьзоватеnя-администратора"}},[a._v("#")]),a._v(" Создание пользователя-администратора")]),a._v(" "),t("p",[a._v("Для того, чтобы подключаться к серверу базы данных, необходимо создать пользователя.")]),a._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[a._v("Внимание!")]),a._v(" "),t("p",[a._v("В этом разделе мы создадим пользователя с очень высокими привилегиями, поэтому "),t("strong",[a._v("использовать его для подключения из разрабатываемых вами приложений не следует")]),a._v("!")]),a._v(" "),t("p",[a._v("Создание пользователей для подключения к БД непосредственно из кода приложения рассмотрено ниже - "),t("a",{attrs:{href:"#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BEn%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5n%D1%8F-%D0%B4n%D1%8F-%D0%B8%D1%81%D0%BF%D0%BEn%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BA%D0%BE%D0%B4%D0%B5-%D0%BF%D1%80%D0%B8n%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F"}},[a._v("Создание пользователя для использования в коде")])])]),a._v(" "),t("p",[a._v("Для создания пользователей мы будем пользоваться интерфейсом командной строки. Чтобы попасть в него, откройте терминал и введите")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mysql\n")])])]),t("p",[a._v("Эта команда запустить MySQL или MariaDB в интерактивном режиме, то есть Вы выполнять SQL-запросы прямо из терминала. Для создания пользователя напишите следующий запрос и нажмите Enter.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<Имя пользователя>'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<Пароль>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Разумеется, вместо "),t("code",[a._v("<Имя пользователя>")]),a._v(" и "),t("code",[a._v("<Пароль>")]),a._v(" необходимо ввести свои имя пользователя и пароль. В качестве имени пользователя Вы можете, например, использовать "),t("strong",[a._v('"admin"')]),a._v(" (без кавычек).")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("Обратите внимание")]),a._v(" "),t("p",[a._v("Каждый запрос должен оканчиваться символом "),t("code",[a._v(";")]),a._v(" (точка с запятой).")]),a._v(" "),t("p",[a._v("Пока точка с запятой не будет введена, MySQL будет считать, что запрос не закончен и ожидать его продолжения даже если вы нажмете "),t("code",[a._v("Enter")])])]),a._v(" "),t("p",[a._v("Далее необходимо расшарить админу доступ ко всем базам данных и таблицам, а также выдать права на названчение привилегий другим пользователям. Далем это при помощи выполнения запроса")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<Имя пользователя>'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("OPTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("После того, как права выданы, активируем изменения в привилегиях пользователей")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("После этого можем спокойно покидать CLI, не забыв напоследок умилиться тем, как вежливо он попрощается с Вами 😃 Для этого вводим "),t("code",[a._v("exit")]),a._v(" и нажимаем "),t("code",[a._v("Enter")])]),a._v(" "),t("p",[a._v("Отлично! Пользователь создан и наделен особыми правами по управлению любыми базами и таблицами и выдачи прав другим пользователям.")]),a._v(" "),t("p",[a._v("Для того, чтобы теперь войти в интерактивный режим MySQL из терминала, используя только что созданного пользователя, воспользуйтесь командой (угловые скобки в начале и конце имени пользователя ставить не надо)")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mysql -u "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Имя пользователя"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("После этого MySQL запросит у Вас пароль пользователя и вы снова окажетесь в интерактивной оболочке, где сможете создавать новые базы данных, пользователей и любые другие запросы к БД.")]),a._v(" "),t("h2",{attrs:{id:"подкnючение-к-mysql-mariadb-через-gui-кnиент"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#подкnючение-к-mysql-mariadb-через-gui-кnиент"}},[a._v("#")]),a._v(" Подключение к MySQL/MariaDB через GUI-клиент")]),a._v(" "),t("p",[a._v("Не каждый пользователь чувствует себя комфортно и уверенно, выполняя запросы к БД вручную из терминала. Да и это не всегда быстро и удобно. Именно поэтому человечество изобрело графический интерфейс.")]),a._v(" "),t("p",[a._v("Существует большое количество GUI-программ, позволяющих просматривать таблицы и выполнять другие действия по щелчку мыши в удобном человеко-ориентированном виде. Подключение к ним осуществляется через те же данные и настройки, которые Вы используете для подключения к БД из кода.")]),a._v(" "),t("p",[a._v("Выглядят такие программы по-разному, но принцип подключения у всех одинаковый. Я покажу стандартные настройки на примере программы Beekeeper Studio.")]),a._v(" "),t("p",[t("img",{attrs:{src:"/illustrations/mysql/beekeeper_connection.png",alt:"Настройки подключения к MySQL в Beekeeper Studio",title:"Настройки подключения к MySQL в Beekeeper Studio"}})]),a._v(" "),t("p",[a._v("Для подключения Вам необходимо:")]),a._v(" "),t("ol",[t("li",[a._v("выбрать тип базы данных "),t("code",[a._v("MySQL")]),a._v(" или "),t("code",[a._v("MariaDB")]),a._v(";")]),a._v(" "),t("li",[a._v("в поле host или сервер ввести значение "),t("code",[a._v("localhost")]),a._v(" или "),t("code",[a._v("127.0.0.1")]),a._v(";")]),a._v(" "),t("li",[a._v("настроить порт для подключения. Стандартный порт - "),t("code",[a._v("3306")]),a._v(" (если Вы не меняли его в настройках)")]),a._v(" "),t("li",[a._v("ввести имя пользователя и пароль;")]),a._v(" "),t("li",[a._v("нажать кнопку для подключения к БД.")])]),a._v(" "),t("p",[a._v("Вот и все. Программа готова, можно творить свои чудеса инженерной мысли!")]),a._v(" "),t("h2",{attrs:{id:"создание-поnьзоватеnя-дnя-испоnьзования-в-коде-приnожения"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#создание-поnьзоватеnя-дnя-испоnьзования-в-коде-приnожения"}},[a._v("#")]),a._v(" Создание пользователя для использования в коде приложения")]),a._v(" "),t("p",[a._v("Зачастую СУБД управляет более, чем одной базой данных. Например, у вас на одной машине вполне могут хоститься несколько разных проектов, использующих разные базы в рамках одной СУБД. Именно поэтому использование в коде приложения пользователя с полным глобальным доступом ко всем базам данных — не очень хорошая идея.")]),a._v(" "),t("p",[a._v("Гораздо лучше создавать отдельных пользователей с минимально необходимым уровнем доступа для каждого приложения, использующего СУБД. Давайте рассмотрим, как это сделать на примере создания одной базы данных, пользователя для нее и соответствующей настройки.")]),a._v(" "),t("p",[a._v("Начнем с создания базы данных. Для этого необходимо открыть терминал и перейти в интерактивную оболочку MySQL")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mysql\n")])])]),t("p",[a._v("Далее в рамках интерактивной оболочки выполним запрос на создание новой базы данных, которая на моем примере будет называться best_app_db. Разумеется, у Вас она может называться как угодно.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" best_app_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Не забываем про точки с запятыми в конце каждого запроса")])]),a._v(" "),t("p",[a._v("БД создана. Теперь создадим пользователя "),t("code",[a._v("best_app_user")]),a._v(" с паролем "),t("code",[a._v("123qwe")])]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'best_app_user'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),a._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123qwe'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Выдадим полные права доступа ко всем таблицам, но только в пределах базы "),t("code",[a._v("best_app_db")])]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" best_app_db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'best_app_user'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Обратите внимание, что в отличие от создания пользователя-админа мы не включили в запрос оператор "),t("code",[a._v("WITH GRANT OPTION")]),a._v(". Это значит, что пользователь "),t("code",[a._v("best_app_user")]),a._v(" сможет делать с таблицами в пределах БД все, что захочет, однако выдать такие привилегии кому-то еще у него не получится.")]),a._v(" "),t("p",[a._v("Далее обновляем привилегии и покидаем интерактивную оболочку с чувством выполненного долга")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exit")]),a._v("\n")])])]),t("p",[a._v("Осталось только прописать только что созданного пользователя в настройках подключения вашего приложения и дело сделано! Надеюсь, эта статья помогла Вам разобраться в теме. В случае обнаружения ошибок или недочетов не стесняйтесь писать в комментарии.")]),a._v(" "),t("h2",{attrs:{id:"комментарии"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#комментарии"}},[a._v("#")]),a._v(" Комментарии")]),a._v(" "),t("Comments")],1)}),[],!1,null,null,null);s.default=r.exports}}]);