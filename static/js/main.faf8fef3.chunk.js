(this["webpackJsonpcalculator-for-tobias"]=this["webpackJsonpcalculator-for-tobias"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),l=a(5),i=a(6),s=a(8),h=a(7),m=a(1),u=a(9),d=a(2),v=a.n(d),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value,checkValid:v()("text-right","form-control",{"is-invalid":!1})})},a.randomise=function(){a.setState({one1:Math.floor(20*Math.random())+10,one2:Math.floor(10*Math.random())+10,value:""})},a.state={one1:Math.floor(10*Math.random())+20,one2:Math.floor(10*Math.random())+10,score:parseInt(0),value:"",checkValid:v()("text-right","form-control",{"is-invalid":!1})},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){parseInt(this.state.value)===parseInt(this.state.one1+this.state.one2)?(this.setState({score:this.state.score+1,checkValid:v()("text-right","form-control",{"is-invalid":!1})}),this.randomise()):this.setState({checkValid:v()("text-right","form-control",{"is-invalid":!0})}),e.preventDefault()}},{key:"render",value:function(){return this.state.score>2?o.a.createElement("h1",{className:"text-center"},"Yay"):o.a.createElement("div",null,o.a.createElement("div",{className:"alert alert-primary"},o.a.createElement("p",{className:"text-center"},"Score"),o.a.createElement("h1",{className:"text-center"},this.state.score)),o.a.createElement("div",null,o.a.createElement("h1",{className:"text-right"},this.state.one1),o.a.createElement("h1",{className:"text-right"}," + ",this.state.one2)),o.a.createElement("div",{className:"form-row text-right"},o.a.createElement("form",{action:"",autocomplete:"off"},o.a.createElement("input",{name:"result",className:this.state.checkValid,type:"number",value:this.state.value,onChange:this.handleChange,autocomplete:"off"}),o.a.createElement("button",{className:"btn btn-primary btn-block mt-2",type:"button",onClick:this.handleSubmit,disabled:!this.state.value},"Submit"))))}}]),t}(o.a.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row vh-100 justify-content-center align-items-center"},o.a.createElement("div",{className:"col col-md-2 col-6"},o.a.createElement(f,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15),a(16);c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.faf8fef3.chunk.js.map