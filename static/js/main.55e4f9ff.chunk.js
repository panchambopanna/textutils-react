(this["webpackJsonpreact-workspace"]=this["webpackJsonpreact-workspace"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),a=c(4),o=c.n(a),i=(c(9),c(2)),s=(c(10),c(0));function r(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.logo}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#",children:e.about})})]}),Object(s.jsxs)("label",{htmlFor:"inlineRadioOptions",style:"light"===e.mode?{color:"black"}:{color:"white"},children:[Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,defaultChecked:!0,type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"primary"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio1",children:"Blue"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"secondary"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Gray"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"success"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Green"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"danger"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Red"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"warning"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Yellow"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.themeSelect,type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"info"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"inlineRadio2",children:"Aqua"})]})]}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:e.btnText})]})]})]})})}function d(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),l=c[0],a=c[1];return Object(s.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(s.jsx)("h1",{className:"my-3",children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:l,id:"myBox",rows:"5",placeholder:"Enter you text here",onChange:function(e){a(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"lightgray",color:"light"===e.mode?"black":"white"}})}),Object(s.jsx)("button",{className:"btn btn-".concat(e.color),onClick:function(){var t=l.toUpperCase();a(t),e.showAlert("Coverted to Upper Case","success")},children:"Convert to UPPERCASE"}),Object(s.jsx)("button",{className:"mx-1 btn btn-".concat(e.color),onClick:function(){var t=l.toLowerCase();a(t),e.showAlert("Coverted to Lower Case","success")},children:"Convert to lowercase"}),Object(s.jsx)("label",{htmlFor:"findText",children:"Find: "}),Object(s.jsx)("input",{className:"mx-1",type:"text",id:"findText"}),Object(s.jsx)("label",{htmlFor:"replaceText",children:"Replace By: "}),Object(s.jsx)("input",{className:"mx-1",type:"text",id:"replaceText"}),Object(s.jsx)("button",{className:"mx-1 btn btn-".concat(e.color),onClick:function(){var e=document.getElementById("findText").value,t=document.getElementById("replaceText").value;0===l.indexOf(e)?(e+=" ",t+=" ",console.log(l.indexOf(e)),console.log(e)):l.indexOf(e)===l.length-e.length?(e=" "+e,t=" "+t,console.log(l.indexOf(e)),console.log(e)):(e=" "+e+" ",t=" "+t+" ",console.log(l.indexOf(e)),console.log(e)),-1===l.indexOf(e)&&(console.log(l.indexOf(e)),alert("Word not found"));var c=l.replace(e,t);console.log(c),a(c)},children:"Replace"}),Object(s.jsx)("button",{className:"mx-1 btn btn-".concat(e.color),onClick:function(){var t=l.split(/[ ] + /);a(t.join(" ")),e.showAlert("Extra spaces has been removed","success")},children:"Remove Extra Space"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"mx-1 btn btn-".concat(e.color),onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text has been copied","success")},children:"Copy Text"}),Object(s.jsx)("button",{className:"mx-1 btn btn-".concat(e.color),onClick:function(){a("")},children:"Clear"}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Summary"}),Object(s.jsxs)("p",{children:["There are ",l.length>0?l.split(" ").length:l.split(" ").length-1," words and ",l.length," characters"]}),Object(s.jsxs)("p",{children:["This can be read in ",Math.round(.008*(l.split(" ").length-1)*60)," seconds "]}),Object(s.jsxs)("div",{style:l.length>0?{display:"block"}:{display:"none"},children:[Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:l})]})]})]})}function b(e){return e.alert&&Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),": "]}),e.alert.msg]})}r.defaultProps={logo:"Default Logo",about:"Insert title here",btnText:"Toggle Mode"},d.defaultProps={color:"primary"};var h=function(){var e=Object(n.useState)("light"),t=Object(i.a)(e,2),c=t[0],l=t[1],a=Object(n.useState)("Enable Dark Mode"),o=Object(i.a)(a,2),h=o[0],m=o[1],j=Object(n.useState)(null),u=Object(i.a)(j,2),x=u[0],p=u[1],O=Object(n.useState)("primary"),g=Object(i.a)(O,2),f=g[0],v=g[1],k=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(r,{logo:"TextUtils",about:"About",mode:c,toggleMode:function(){"light"===c?(l("dark"),document.body.style.backgroundColor="gray",m("Enable Light Mode"),k("Dark mode has been enabled","success")):(l("light"),document.body.style.backgroundColor="white",m("Enable Dark Mode"),k("Light mode has been enabled","success"))},btnText:h,showAlert:k,themeSelect:function(e){v(e.target.value),console.log(v)}}),Object(s.jsx)(b,{alert:x}),Object(s.jsx)(d,{heading:"Enter a text to analyze",mode:c,showAlert:k,color:f})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),l(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.55e4f9ff.chunk.js.map