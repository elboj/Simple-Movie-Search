(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{18:function(e,t,a){e.exports=a(63)},23:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),s=(a(23),a(4)),l=a.n(s),i=a(15),u=a(3),m=function(e){var t=e.movies;return r.a.createElement("div",null,t.map((function(e){try{var t=e.show,a=t.name,n=t.image,c=t.id;return r.a.createElement("img",{src:n.medium,alt:a,key:c})}catch(o){console.log(o)}})))},p=a(16),b=a.n(p),h=a(17),f=a.n(h);var v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),p=s[0],h=s[1],v=Object(n.useState)(!1),E=Object(u.a)(v,2),d=E[0],g=E[1],O=Object(n.useState)(!1),j=Object(u.a)(O,2),y=j[0],w=j[1],x=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,f.a.get("http://api.tvmaze.com/search/shows?q=".concat(t));case 3:if(!((a=e.sent).status>=200&&a.status<=299)){e.next=12;break}0===(n=a.data).length&&g(!0),h(n),c(""),w(!1),e.next=13;break;case 12:throw new Error(a.statusText);case 13:console.log(p.length);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"section-center"},r.a.createElement("h3",null,"Search for Movies and Series"),r.a.createElement("form",{className:"lorem-form",onSubmit:function(e){e.preventDefault(),console.log(a),x(a)}},r.a.createElement("input",{type:"text",name:"movie-title",id:"movie-title",value:a,required:!0,onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn"},"generate"),r.a.createElement("button",{type:"submit",className:"btn",onClick:function(){h([])}},"reset")),r.a.createElement("article",{className:"lorem-text"},r.a.createElement("h1",null,y&&r.a.createElement(b.a,{type:"Circles",color:"hsl(205, 78%, 60%)"})),r.a.createElement("h2",null,d&&"Oops, nothing to display"),r.a.createElement(m,{movies:p})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5454eac8.chunk.js.map