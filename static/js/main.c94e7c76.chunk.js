(this["webpackJsonpcalculator-for-tobias"]=this["webpackJsonpcalculator-for-tobias"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=a(1),m=a(2),s=a.n(m),i=function(e){return c.a.createElement("h1",{className:"text-right"},e.num)},u=function(){var e={randomNum1:Math.floor(10*Math.random())+20,randomNum2:Math.floor(19*Math.random())+1,score:parseInt(0),checkValid:""},t=Object(n.useState)(e.randomNum1),a=Object(l.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(e.randomNum2),u=Object(l.a)(m,2),d=u[0],b=u[1],f=Object(n.useState)(e.score),h=Object(l.a)(f,2),E=h[0],N=h[1],v=Object(n.useState)(""),p=Object(l.a)(v,2),k=p[0],g=p[1],j=Object(n.useState)(e.checkValid),w=Object(l.a)(j,2),O=w[0],y=w[1],S=function(){o(e.randomNum1),b(e.randomNum2),g("")},x=function(t){parseInt(k)===parseInt(r+d)?(N(E+1),y(e.checkValid),S(),y(s()({"tada animated fast":!0}))):y(s()({"shake animated fast":!0})),t.preventDefault()};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"alert alert-primary ".concat(O)},c.a.createElement("p",{className:"text-center"},"Score"),c.a.createElement("h1",{className:"text-center"},E)),c.a.createElement("div",{className:"questionContainer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col d-flex align-items-end"},c.a.createElement("h1",null,"+")),c.a.createElement("div",{className:"col"},c.a.createElement(i,{num:r}),c.a.createElement(i,{num:d}))))),c.a.createElement("div",{className:"form-row text-right"},c.a.createElement("form",{action:"",autoComplete:"off",onSubmit:function(e){x(e)}},c.a.createElement("input",{name:"result",className:"text-right form-control",type:"number",value:k,onChange:function(t){!function(t){g(t.target.value),y(e.checkValid)}(t)},autoComplete:"off"}),c.a.createElement("button",{className:"btn btn-primary btn-block mt-2",type:"button",onClick:function(e){x(e)},disabled:!k},"Submit")),c.a.createElement("button",{className:"btn btn-link btn-block mt-4",type:"button",onClick:function(){S(),N(e.score)}},"Reset")))};var d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row vh-100 justify-content-center align-items-center"},c.a.createElement("div",{className:"col col-md-3 col-6"},c.a.createElement(u,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(10),a(11),a(12);o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports=a(13)}},[[5,1,2]]]);
//# sourceMappingURL=main.c94e7c76.chunk.js.map