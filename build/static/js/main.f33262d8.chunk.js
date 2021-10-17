(this.webpackJsonppp=this.webpackJsonppp||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(15),n=c.n(r),o=c(10),l=c(9),i=c(0);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})})}),Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"bg-primary rounded mx-2",onClick:function(){e.toggleMode("primary")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(i.jsx)("div",{className:"bg-danger rounded mx-2",onClick:function(){e.toggleMode("danger")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(i.jsx)("div",{className:"bg-success rounded mx-2",onClick:function(){e.toggleMode("success")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(i.jsx)("div",{className:"bg-warning rounded mx-2",onClick:function(){e.toggleMode("warning")},style:{height:"30px",width:"30px",cursor:"pointer"}})]})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:function(){e.toggleMode(null)},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode Enabled"})]})]})})})}var b=c(2);function m(e){var t=Object(a.useState)("Enter Text Here"),c=Object(o.a)(t,2),s=c[0],r=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#42743"},children:Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{for:"exampleFormControlTextarea1 text-center",className:"form-label",children:Object(i.jsx)("strong",{className:"text-center mx-2",children:"Textarea:"})}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){console.log("Uppercase Clicked"),r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#42743"},id:"exampleFormControlTextarea1",rows:"8"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){console.log("Uppercase Clicked");var t=s.toUpperCase();r(t),e.showAlert("Converted to Uppercase!","Success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){console.log("LowerCase Clicked");var t=s.toLowerCase();r(t),e.showAlert("Converted to Lowercase","Success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){console.log("ExtraSpaces Clicked");var t=s.split(/[ ]+/);r(t.join(" ")),e.showAlert("Remove Extra Spaces","Success")},children:"Remove Exatra Spaces"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){console.log("CopyText Clicked"),navigator.clipboard.writeText(s),e.showAlert("Text Copied","Success")},children:"Copy Texts"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){console.log("Cleartext Clicked");r(""),e.showAlert("Text Cleared","Success")},children:"Clear Texts"})]})}),Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#42743"},children:[Object(i.jsx)("strong",{children:Object(i.jsx)("h4",{children:"Text Summary"})}),Object(i.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","Words and ",s.length," Characters"]})]})]})}var j=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type})," : ",e.alert.msg]})})};var x=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(null),n=Object(o.a)(r,2),x=n[0],h=n[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{title:"React Practice Project",mode:c,toggleMode:function(e){document.body.classList.remove("bg-light"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),document.body.classList.add("bg-"+e),"light"===c?(s("dark"),document.body.style.backgroundColor="#042743",u("Dark Mode Enabled","Success")):(s("light"),document.body.style.backgroundColor="white",u("Light Mode Enabled","Success"))}}),Object(i.jsx)(j,{alert:x}),Object(i.jsx)(b.c,{children:Object(i.jsx)(b.a,{exact:!0,path:"/",children:Object(i.jsx)(m,{mode:c,showAlert:u})})})]})})};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f33262d8.chunk.js.map