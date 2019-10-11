(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{224:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("By default, the "),n("code",[e._v("vcn")]),e._v(" command line stores its config file ("),n("code",[e._v("config.json")]),e._v(") in a directory called "),n("code",[e._v(".vcn")]),e._v(" within your "),n("code",[e._v("$HOME")]),e._v(" directory.")]),e._v(" "),n("blockquote",[n("p",[e._v("If the "),n("code",[e._v("STAGE")]),e._v(" environment variable has been set, the default configuration directory can be different. See "),n("router-link",{attrs:{to:"/vcn/user-guide/environments.html"}},[e._v("environments")]),e._v(".")],1)]),e._v(" "),n("p",[e._v("However, you can specify a different location for the config file via the "),n("code",[e._v("--config")]),e._v(" command line option. For example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("vcn --config /path/to/your/config.json\n")])])]),e._v(" "),n("h2",{attrs:{id:"config-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Config file")]),e._v(" "),n("h3",{attrs:{id:"example-of-config-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-of-config-json","aria-hidden":"true"}},[e._v("#")]),e._v(" Example of "),n("code",[e._v("config.json")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "currentcontext": "example@example.net",\n  "users": [\n    {\n      "email": "example@example.net",\n      "token": "<authentication_bearer_token>"\n      ]\n    }\n  ]\n}\n')])])]),n("h3",{attrs:{id:"breakdown-of-config-json-s-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#breakdown-of-config-json-s-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Breakdown of "),n("code",[e._v("config.json")]),e._v("'s components")]),e._v(" "),n("h4",{attrs:{id:"currentcontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#currentcontext","aria-hidden":"true"}},[e._v("#")]),e._v(" currentcontext")]),e._v(" "),n("p",[e._v("The property "),n("code",[e._v("currentcontext")]),e._v(" holds the reference (user's email) to the current authenticated user.")]),e._v(" "),n("h4",{attrs:{id:"users"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#users","aria-hidden":"true"}},[e._v("#")]),e._v(" users")]),e._v(" "),n("p",[e._v("The property "),n("code",[e._v("users")]),e._v(" is an array of objects (one entry per user). Each object holds:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("email")]),e._v(" the email address that identifies a specific user")]),e._v(" "),n("li",[n("code",[e._v("token")]),e._v(" a bearer token used obtained by using "),n("code",[e._v("vcn login")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);