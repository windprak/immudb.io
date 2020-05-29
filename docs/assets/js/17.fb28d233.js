(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{368:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immudb"}},[t._v("#")]),t._v(" immudb")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[t._v("Latest binaries")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[t._v("Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[t._v("Docker")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#run-immudb"}},[t._v("Run immudb")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#configuration"}},[t._v("Configuration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#immuadmin"}},[t._v("immuadmin")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#immudb-service"}},[t._v("immudb service")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#authentication"}},[t._v("Authentication")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#backup-and-restore"}},[t._v("Backup and Restore")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#clients"}},[t._v("Clients")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#auditors"}},[t._v("Auditors")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#architecture"}},[t._v("Architecture")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#consistency-checker"}},[t._v("Consistency Checker")])])]),t._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[t._v("#")]),t._v(" Latest binaries")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the latest builds"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("If you run macOS you can also use Homebrew:")]),t._v(" "),s("p",[s("code",[t._v("brew install immudb")])]),t._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),s("p",[t._v("clone the immudb repository locally")]),t._v(" "),s("p",[t._v("'git clone https://github.com/codenotary/immudb.git'")]),t._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immudb-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" MacOS")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immudb-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immudb-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[t._v("#")]),t._v(" build your own Docker container image")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker build -t myown/immudb:latest -f Dockerfile "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h3",{attrs:{id:"run-immugw-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw-in-a-container"}},[t._v("#")]),t._v(" run immugw in a container")]),t._v(" "),s("p",[t._v("Make sure to point to the immudb system using the environment variable IMMUGW_IMMUDB-ADDRESS")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -it -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immugw:latest\n")])])]),s("p",[t._v("or listen on all interfaces")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -it -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v(" codenotary/immudb\n")])])]),s("h2",{attrs:{id:"run-immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immudb"}},[t._v("#")]),t._v(" Run immudb")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run immudb in the foreground")]),t._v("\n./immudb\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run immudb in the background")]),t._v("\n./immudb -d\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("immudb can be configured using environment variables, flags or a config file.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("immudb --help")]),t._v(" shows you all available flags and environment variables.")]),t._v(" "),s("li",[s("code",[t._v("/etc/immudb/immudb.toml")]),t._v(" is used as a default configuration file")])]),t._v(" "),s("h3",{attrs:{id:"environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment variables")]),t._v(" "),s("p",[t._v("The environment variables are the most popular way to configure Docker container:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(".\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_NETWORK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_DBNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("immudb\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_PIDFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_LOGFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_MTLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_AUTH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_DETACHED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_CONSISTENCY_CHECK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_PKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/3_application/private/localhost.key.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/3_application/certs/localhost.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUDB_CLIENTCAS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n")])])]),s("h2",{attrs:{id:"immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuadmin"}},[t._v("#")]),t._v(" immuadmin")]),t._v(" "),s("p",[t._v("immuadmin can be used to install and manage the immudb service for Windows and Linux")]),t._v(" "),s("h3",{attrs:{id:"linux-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuadmin-static \n")])])]),s("h3",{attrs:{id:"windows-by-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-by-component"}},[t._v("#")]),t._v(" Windows (by component)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuadmin-static\n")])])]),s("h2",{attrs:{id:"immudb-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immudb-service"}},[t._v("#")]),t._v(" immudb service")]),t._v(" "),s("p",[t._v("Please make sure to build or download the immudb and immuadmin component and save them in the same work directory when installing the service.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immudb service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check current immudb service status")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stop immudb service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb stop\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start immudb service")]),t._v("\n./immuadmin "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immudb start\n")])])]),s("p",[t._v("The linux service is using the following defaults:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("File or configuration")]),t._v(" "),s("th",[t._v("location")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("all configuration files")]),t._v(" "),s("td",[t._v("/etc/immudb")])]),t._v(" "),s("tr",[s("td",[t._v("all data files")]),t._v(" "),s("td",[t._v("/var/lib/immudb")])]),t._v(" "),s("tr",[s("td",[t._v("pid file")]),t._v(" "),s("td",[t._v("/var/lib/immudb/immudb.pid")])]),t._v(" "),s("tr",[s("td",[t._v("log files")]),t._v(" "),s("td",[t._v("/var/log/immudb")])])])]),t._v(" "),s("h2",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),s("p",[t._v("immudb supports multiple user accounts that can have admin, read-only or read-write permission.\nAll permissions are stored in a different database and each gRPC call has an associated minimum permissions.")]),t._v(" "),s("p",[t._v("To enable authentication you need to change the configuration file "),s("code",[t._v("/etc/immudb/immudb.toml")])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("dir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/lib/immudb"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("network")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("dbname")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("pidfile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/lib/immudb/immudb.pid"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("logfile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/immudb/immudb.log"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("mtls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("detached")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("auth")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("pkey")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/immudb/mtls/3_application/private/localhost.key.pem"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("certificate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/immudb/mtls/3_application/certs/localhost.cert.pem"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("clientcas")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/immudb/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),t._v("\n")])])]),s("p",[t._v("The important lines to change are "),s("code",[t._v("auth = true")]),t._v(" and "),s("code",[t._v('address = "0.0.0.0"')]),t._v(" to enable authentication and listening on all interfaces.")]),t._v(" "),s("p",[t._v("Then restart/start immudb.")]),t._v(" "),s("h3",{attrs:{id:"get-the-admin-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-admin-credentials"}},[t._v("#")]),t._v(" Get the admin credentials")]),t._v(" "),s("p",[t._v("You need to run "),s("code",[t._v("immuadmin")]),t._v(" locally on the same system as immudb (for security reasons) and connect to immudb:")]),t._v(" "),s("p",[s("code",[t._v("immuadmin login immu")])]),t._v(" "),s("p",[t._v("You^ll receive the following message:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Using config file: /etc/immudb/immudb.toml\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nThis looks like the very first admin login attempt, hence the following credentials have been generated:\n---\nusername: immu\npassword: yourpassword\n---\nIMPORTANT: This is the only "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" they are shown, so "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" sure you remember them.\nNOTE: You have not been automatically logged in. To login please run the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immuadmin login immu'")]),t._v(" with the above-mentioned password. You can change your password at any "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" with one of your liking using the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immuadmin user change-password immu'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),s("p",[s("strong",[t._v("make sure to note that the password for the immu user as its your master password")])]),t._v(" "),s("h3",{attrs:{id:"user-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-management"}},[t._v("#")]),t._v(" User management")]),t._v(" "),s("p",[t._v("To manage user, run "),s("code",[t._v("immuadmin user")]),t._v(" after you logged in "),s("code",[t._v("immuadmin login immu")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Please specify a user action.\nUsage: immuadmin user list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("change-password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("set-permission"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("deactivate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("readwrite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nHelp "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" immuadmin user -h\n")])])]),s("h4",{attrs:{id:"list-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-user"}},[t._v("#")]),t._v(" List user")]),t._v(" "),s("p",[t._v("To get a list of all existing user including their permissions, run "),s("code",[t._v("immuadmin user list")])]),t._v(" "),s("h4",{attrs:{id:"add-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-user"}},[t._v("#")]),t._v(" Add user")]),t._v(" "),s("p",[t._v("Let's create a read-only user, called ro "),s("code",[t._v("immuadmin user create <username> read")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("immuadmin user create ro "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\nNOTE: password must have between "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" and "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" letters, digits and special characters of "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" at least "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" uppercase letter, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" digit and "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" special character.\nChoose a password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ro:\nConfirm password:\nUser ro created\n")])])]),s("p",[t._v("and a read-write user, called rw "),s("code",[t._v("immuadmin user create rw readwrite")])]),t._v(" "),s("h4",{attrs:{id:"change-user-permission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-user-permission"}},[t._v("#")]),t._v(" Change user permission")]),t._v(" "),s("p",[t._v("To change the ro user permission from read-only to read-write, run "),s("code",[t._v("immuadmin user set-permission ro readwrite")]),t._v("\nCheck the change, using "),s("code",[t._v("immuadmin user list")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("immuadmin user list\nUsing config file: /etc/immudb/immudb.toml\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n-  --------  ----    -----------\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  Username  Role    Permissions")]),t._v("\n-  --------  ----    -----------\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  immu      admin   admin\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  ro        client  readwrite\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  rw        client  readwrite\n-  --------  ----    -----------\n")])])]),s("h4",{attrs:{id:"deactivate-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-user"}},[t._v("#")]),t._v(" Deactivate user")]),t._v(" "),s("p",[t._v("To deactivate an existing user, run "),s("code",[t._v("immuadmin user deactivate ro")])]),t._v(" "),s("h4",{attrs:{id:"reactivate-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reactivate-user"}},[t._v("#")]),t._v(" Reactivate user")]),t._v(" "),s("p",[t._v("To reactivate a deactivated user account, you can simply set user permission again. Run "),s("code",[t._v("immuadmin user set-permission ro readwrite")])]),t._v(" "),s("h2",{attrs:{id:"backup-and-restore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore"}},[t._v("#")]),t._v(" Backup and Restore")]),t._v(" "),s("p",[t._v("work in progress")]),t._v(" "),s("h2",{attrs:{id:"clients"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[t._v("#")]),t._v(" Clients")]),t._v(" "),s("p",[t._v("Starting version 0.6.0 of immudb, you can use immugw (REST API), immuclient (interactive) or GoLang as immudb database clients.\nDepending on the user settings and permissions, you can have read-only and read-write clients.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/immudb/docs/apis-and-interfaces.html"}},[t._v("APIs and interfaces")]),t._v(" - API reference and code examples")],1),t._v(" "),s("p",[t._v("More driver libraries are coming soon (Java, Node.js, Python, .net aso.)")]),t._v(" "),s("h2",{attrs:{id:"auditors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auditors"}},[t._v("#")]),t._v(" Auditors")]),t._v(" "),s("p",[t._v("Auditors make sure that the data consistency is guaranteed inside immudb. They do a random key value verification and a interval-based Merkle-tree consistency check (5 minutes default). The immugw and the immuclient provide auditor functionality that runs as a daemon process. It is recommended to run immugw and immuclient on different machines than immudb, so any tampering on the immudb server is automatically detected.")]),t._v(" "),s("p",[t._v("The results of the auditors are provided by a Prometheus end point.")]),t._v(" "),s("h3",{attrs:{id:"immugw-auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw-auditor"}},[t._v("#")]),t._v(" immugw auditor")]),t._v(" "),s("p",[t._v("Start interactive:\n"),s("code",[t._v("immugw --audit")])]),t._v(" "),s("p",[t._v("Service configuration:\nTo enable auditor, you need to edit /etc/immudb/immugw.toml and add the following section:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("audit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# false is default")]),t._v("\naudit-interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5m"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# suffixes: "s", "m", "h", examples: 10s, 5m 1h')]),t._v("\naudit-username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# when immudb authentication is enabled, use read-only user credentials here")]),t._v("\naudit-password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and the password")]),t._v("\n")])])]),s("p",[t._v("Restart the immugw service afterwards - "),s("code",[t._v("immuadmin service immugw restart")])]),t._v(" "),s("p",[s("strong",[t._v("immugw Port: 9476 - http://immugw-auditor:9476/metrics")])]),t._v(" "),s("p",[t._v("example output:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immugw_audit_curr_root_per_server Current root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immugw_audit_curr_root_per_server gauge")]),t._v("\nimmugw_audit_curr_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immugw_audit_prev_root_per_server Previous root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immugw_audit_prev_root_per_server gauge")]),t._v("\nimmugw_audit_prev_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immugw_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immugw_audit_result_per_server gauge")]),t._v("\nimmugw_audit_result_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immugw_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immugw_audit_run_at_per_server gauge")]),t._v("\nimmugw_audit_run_at_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".590757033502689e+09\n")])])]),s("h3",{attrs:{id:"immuclient-auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuclient-auditor"}},[t._v("#")]),t._v(" immuclient auditor")]),t._v(" "),s("p",[t._v("Start interactive:\n"),s("code",[t._v("immuclient audit-mode")])]),t._v(" "),s("p",[t._v("Install service:\n"),s("code",[t._v("immuclient audit-mode install")])]),t._v(" "),s("p",[t._v("**immuclient Port: 9477 - http://immuclient-auditor:9477/metrics **")]),t._v(" "),s("p",[t._v("example output:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_curr_root_per_server Current root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_curr_root_per_server gauge")]),t._v("\nimmuclient_audit_curr_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_prev_root_per_server Previous root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_prev_root_per_server gauge")]),t._v("\nimmuclient_audit_prev_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_result_per_server gauge")]),t._v("\nimmuclient_audit_result_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_run_at_per_server gauge")]),t._v("\nimmuclient_audit_run_at_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".5907565337454605e+09\n")])])]),s("h2",{attrs:{id:"architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),s("p",[t._v("The different components of immudb are communicating as follows:\n"),s("img",{attrs:{src:"https://github.com/codenotary/immudb-docs/raw/master/src/docs/immudb/component-diagram.png",alt:"immudb component overview"}})]),t._v(" "),s("p",[t._v("Please check How it works, to learn more about the data structure and the Merkle-tree:")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/immudb/how-it-works.html"}},[t._v("How it works")])],1),t._v(" "),s("h2",{attrs:{id:"consistency-checker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-checker"}},[t._v("#")]),t._v(" Consistency checker")]),t._v(" "),s("h3",{attrs:{id:"how-do-you-run-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-you-run-it"}},[t._v("#")]),t._v(" How do you run it?")]),t._v(" "),s("p",[t._v("It is part of immudb, enabled by default and runs as a thread of immudb.\nThe routine can be disabled as follows:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./immudb --consistency-check"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n")])])]),s("h3",{attrs:{id:"what-does-it-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-check"}},[t._v("#")]),t._v(" What does it check?")]),t._v(" "),s("p",[t._v("Consistency checker runs in a loop and continuously checks if the elements stored inside the immudb Merkle-tree are also physically stored correctly on the disk (the digest of the disk elements is the same digest stored in the related Merkle-tree leaf)")]),t._v(" "),s("h3",{attrs:{id:"how-does-it-run-its-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-run-its-check"}},[t._v("#")]),t._v(" How does it run its check?")]),t._v(" "),s("p",[s("strong",[t._v("Steps:")])]),t._v(" "),s("ol",[s("li",[t._v("reading the last root and last index stored in immudb")]),t._v(" "),s("li",[t._v("generate a range between 0 and the length of the Merkle-tree level 0 (total number of elements stored)")]),t._v(" "),s("li",[t._v("shuffles the range to get a random scan list (to be unpredictable)")]),t._v(" "),s("li",[t._v("check if every element is correctly inserted in the Merkle-tree and if the Merkle-tree leaves correctly represent the elements stored on hard disk")]),t._v(" "),s("li",[t._v("after completing the loop, the process sleeps ten seconds and restarts from scratch with a new root and index")]),t._v(" "),s("li",[t._v("in case an element does not pass the check correctly, immudb is immediately stopped and prints out a log message")])]),t._v(" "),s("p",[t._v("In order to produce a corrupted entry that is only on disk and not in the Merkle-tree, stop the immudb process and use the "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/tools/nimmu/nimmu.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("nimmu"),s("OutboundLink")],1),t._v(" command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("go build tools/nimmu/nimmu.go \n./nimmu rawset key1 tamper\n")])])]),s("p",[t._v("Then restart immudb and should see the consistency check printing an error.")])])}),[],!1,null,null,null);a.default=r.exports}}]);