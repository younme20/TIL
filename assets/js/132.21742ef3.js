(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{585:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"enhanced-ecommerce-in-tagmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-ecommerce-in-tagmanager"}},[t._v("#")]),t._v(" Enhanced ecommerce in tagmanager")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/tag-manager/enhanced-ecommerce",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"enhanced-ecommerce-작동시키기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-ecommerce-작동시키기"}},[t._v("#")]),t._v(" Enhanced Ecommerce 작동시키기")]),t._v(" "),a("p",[t._v("두 가지 방법이 있다.")]),t._v(" "),a("ol",[a("li",[t._v("Data Layer로 넣기 (권장됨)")]),t._v(" "),a("li",[t._v("커스텀 자바스크립트 매크로로 넣기")])]),t._v(" "),a("h2",{attrs:{id:"제품-impression-측정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제품-impression-측정"}},[t._v("#")]),t._v(" 제품 Impression 측정")]),t._v(" "),a("ul",[a("li",[t._v("측정: impressions")]),t._v(" "),a("li",[t._v("데이터타입: "),a("code",[t._v("impressionFieldObjects")]),t._v("의 배열")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Measures product impressions and also tracks a standard")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pageview for the tag configuration.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Product impressions are sent by pushing an impressions object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// containing one or more impressionFieldObjects.")]),t._v("\ndataLayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ecommerce'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'currencyCode'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EUR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Local currency is optional.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'impressions'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Triblend Android T-Shirt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Name or ID is required.")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15.25'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brand'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'variant'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gray'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Results'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Donut Friday Scented T-Shirt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'67890'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'33.75'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brand'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'variant'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Results'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'position'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://youtu.be/GM2L4tp6wd4?list=PLXIUlXaKkxrx_--L98C11vErhnW8AB5XB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Magento Google Tag Manager Add To Cart Tag"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.simoahava.com/analytics/ecommerce-tips-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecommerce tips google tag-manager"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://www.simoahava.com/analytics/persist-datalayer-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("persist-datalayer-google-tag-manager"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);