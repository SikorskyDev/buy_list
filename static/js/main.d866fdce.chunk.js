(this.webpackJsonpbuylist=this.webpackJsonpbuylist||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),l=(n(14),n(7)),s=n(9),u=n(5),o=n(0),h=function(e){var t=e.title;return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:t})})};h.defaultProps={title:"Default Title"};var j=h,d=function(e){var t=e.search,n=e.setSearch;return Object(o.jsxs)("form",{className:"searchForm",onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Search"}),Object(o.jsx)("input",{id:"search",type:"text",role:"searchbox",placeholder:"\u041f\u043e\u0448\u0443\u043a \u0442\u043e\u0432\u0430\u0440\u0443",value:t,onChange:function(e){return n(e.target.value)}})]})},b=n(4),m=function(e){var t=e.newItem,n=e.setNewItem,r=e.handleSubmit,a=Object(c.useRef)();return Object(o.jsxs)("form",{className:"addForm",onSubmit:r,children:[Object(o.jsx)("label",{htmlFor:"addItem",children:"Add Item"}),Object(o.jsx)("input",{autoFocus:!0,ref:a,id:"addItem",type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0442\u043e\u0432\u0430\u0440",required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("button",{type:"submit","aria-label":"Add Item",onClick:function(){return a.current.focus()},children:Object(o.jsx)(b.a,{})})]})},O=function(e){var t=e.item,n=e.handleCheck,c=e.handleDelete;return Object(o.jsxs)("li",{className:"item",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(){return n(t.id)},checked:t.checked}),Object(o.jsx)("label",{style:t.checked?{textDecoration:"line-through"}:null,onDoubleClick:function(){return n(t.id)},children:t.item}),Object(o.jsx)(b.b,{onClick:function(){return c(t.id)},role:"button",tabIndex:"0","aria-label":"Delete ".concat(t.item)})]})},f=function(e){var t=e.items,n=e.handleCheck,c=e.handleDelete;return Object(o.jsx)("ul",{children:t.map((function(e){return Object(o.jsx)(O,{item:e,handleCheck:n,handleDelete:c},e.id)}))})},x=function(e){var t=e.items,n=e.handleCheck,c=e.handleDelete;return Object(o.jsx)("main",{children:t.length?Object(o.jsx)(f,{items:t,handleCheck:n,handleDelete:c}):Object(o.jsx)("p",{style:{marginTop:"2rem"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442\u0438\u0439."})})},p=function(e){var t=e.length;return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{children:[t," ",1===t?"\u0442\u043e\u0432\u0430\u0440":0===t?"\u0442\u043e\u0432\u0430\u0440\u0456\u0432":"\u0442\u043e\u0432\u0430\u0440\u0438"]})})};var v=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("shoppinglist"))||[]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),h=i[0],b=i[1],O=Object(c.useState)(""),f=Object(u.a)(O,2),v=f[0],g=f[1];return Object(c.useEffect)((function(){localStorage.setItem("shoppinglist",JSON.stringify(n))}),[n]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a"}),Object(o.jsx)(m,{newItem:h,setNewItem:b,handleSubmit:function(e){e.preventDefault(),h&&(!function(e){var t={id:n.length?n[n.length-1].id+1:1,checked:!1,item:e},c=[].concat(Object(s.a)(n),[t]);r(c)}(h),b(""))}}),Object(o.jsx)(d,{search:v,setSearch:g}),Object(o.jsx)(x,{items:n.filter((function(e){return e.item.toLowerCase().includes(v.toLowerCase())})),handleCheck:function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{checked:!t.checked}):t}));r(t)},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}}),Object(o.jsx)(p,{length:n.length})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d866fdce.chunk.js.map