(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(18),s=n.n(i),r=(n(25),n(26),n(12)),o=n(0);var l=function(e){var t=e.label,n=e.uri;return Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:n,children:t})})};n(36);var d=function(){var e=[{label:"Home",uri:"/"},{label:"Todo's",uri:"/todos"},{label:"Login",uri:"/login"}].map((function(e,t){return Object(o.jsx)(l,{label:e.label,uri:e.uri},t)}));return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:e})})};var u=function(e){var t=e.title;return Object(o.jsx)("h1",{children:t})};n(37);var j=function(e){return e.children,Object(o.jsxs)("header",{children:[Object(o.jsx)(u,{title:"Oasis Makeup"}),Object(o.jsx)(d,{})]})},m=n(10),b=n(6),x=n(13);var p=function(e){var t=e.children;return Object(o.jsx)("form",{children:t})};var h=function(e){var t=e.caption,n=e.onClick;return Object(o.jsx)("button",{onClick:n,className:["w-full","flex","items-center","justify-center","px-8","py-1","my-6","border","border-transparent","text-base","font-medium","rounded-lg","bg-pink-700","text-white","hover:bg-pink-100","hover:text-black","md:py-4","md:text-lg","md:px-10"].join(" "),children:t})},f=n(20);var O=function(e){var t=e.type,n=e.id,a=e.fname,c=e.onChange,i=e.caption,s=e.value,r=e.error,l=e.labelClassName,d=e.containerClassName,u=Object(f.a)(e,["type","id","fname","onChange","caption","value","error","labelClassName","containerClassName"]);return Object(o.jsxs)("section",{className:d,children:[Object(o.jsx)("label",{className:l,children:i}),Object(o.jsx)("input",Object(b.a)({className:"mt-1 block px-10 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-pink-100 focus:bg-pink-100 focus:ring-0",type:t,id:n,name:a,onChange:c,value:s},u)),r?Object(o.jsx)("section",{children:r}):null]})};var v=function(){var e=Object(a.useState)({username:"",password:"",usernameError:"",passwordError:""}),t=Object(x.a)(e,2),n=t[0],c=t[1],i=function(e){var t,a=e.currentTarget,i=a.name,s=a.value,r=null;"password"===i&&(r=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(s)?null:"Contrase\xf1a Inv\xe1lida"),c(Object(b.a)(Object(b.a)({},n),{},(t={},Object(m.a)(t,i,s),Object(m.a)(t,i+"Error",r),t)))};return Object(o.jsx)("section",{className:" bg-pink-200 flex border justify-center items-center rounded-lg  w-2/4 h-96 md:h-96 md:w-1/3 sm:w-full shadow-lg",children:Object(o.jsxs)("section",{className:"flex flex-col justify-center sm:m-11 md:m-16 items-center justify-items-center",children:[Object(o.jsx)("div",{className:"mb-10 flex justify-center items-center justify-items-center",children:Object(o.jsx)("h2",{className:"text-center text-lg",children:"INICIO DE SESI\xd3N"})}),Object(o.jsxs)(p,{children:[Object(o.jsx)(O,{type:"text",id:"username",fname:"username",onChange:i,caption:"Correo Electr\xf3nico",value:n.username,error:n.usernameError,placeholder:"example15@mcsf.com"}),Object(o.jsx)(O,{type:"password",id:"password",fname:"password",onChange:i,caption:"Contrase\xf1a",value:n.password,error:n.passwordError,placeholder:"Pretty_Fish1234"}),Object(o.jsx)(h,{caption:"Enviar",onClick:function(e){e.preventDefault(),e.stopPropagation();var t=n.username,a=n.password;alert("Usuario:".concat(t," Psswd:").concat(a))}})]}),Object(o.jsx)("section",{class:"flex mt-2 items-center text-center",children:Object(o.jsx)("a",{href:"#",class:"block font-medium \ttext-decoration: underline font-serif text-sm text-black w-full",children:"\xbfYa tienes una cuenta?"})})]})})};var g=function(){return Object(o.jsx)("section",{className:"flex mt-28 justify-center items-center justify-items-center",children:Object(o.jsx)(v,{})})};n(38);var w=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("section",{class:"conocenos",children:Object(o.jsx)("div",{class:"about-section",children:Object(o.jsxs)("div",{class:"inner-container",children:[Object(o.jsx)("h1",{children:"Con\xf3cenos"}),Object(o.jsx)("p",{class:"text",children:"Culpa anim ullamco aliquip consectetur ex. Dolore laboris occaecat sunt magna nisi labore consequat qui voluptate aute est Lorem. Magna labore Lorem et pariatur cillum velit sunt sit quis pariatur sunt commodo ex velit. Pariatur labore ex ullamco do irure aliquip ex amet sit est dolore. Ullamco fugiat qui ad occaecat laborum ut ipsum fugiat. Reprehenderit magna eu nostrud non dolor magna reprehenderit aliquip laborum excepteur. Et laboris eiusmod pariatur laborum. Nisi ipsum voluptate exercitation nisi dolor voluptate laborum in ea est cupidatat aliquip excepteur enim."}),Object(o.jsx)("p",{class:"text",children:"Incididunt culpa duis id et anim et. Proident aliqua duis et cillum officia velit. Lorem elit qui incididunt ipsum sint aliqua sit enim. Cupidatat sint fugiat ipsum occaecat veniam quis aliquip quis. Exercitation cupidatat non labore consectetur esse non ex magna velit ipsum quis eiusmod. Cillum qui dolor incididunt ullamco mollit non duis culpa pariatur consequat."}),Object(o.jsxs)("div",{class:"skills",children:[Object(o.jsx)("span",{children:"Maquillaje"}),Object(o.jsx)("span",{children:"Cabello"}),Object(o.jsx)("span",{children:"Cuidado personal"}),Object(o.jsx)("span",{children:"Tips"}),Object(o.jsx)("span",{children:"Tips"})]})]})})}),Object(o.jsx)("section",{class:"paralax",children:Object(o.jsx)("h2",{children:"\xa1La sonrisa es el mejor maquillaje de una mujer!"})})]})},C=n(11);var N=function(e){var t=e.onChange,n=e.value,a=e.onAddNew;return Object(o.jsx)("section",{className:"TodoAddNew",children:Object(o.jsxs)("section",{className:"flex justify-between w-screen items-end px-8 border align-middle bg-pink-50 bg-opacity-100 shadow-md rounded-lg max-w-lg m-auto",children:[Object(o.jsx)(O,{type:"text",id:"txtNTodo",fname:"txtNTodo",onChange:t,value:n,caption:"Nuevo Todo",className:"flex text-sm p-2 ml-16 m-2 w-max bg-white mt-1 border-none h-11 rounded-xl shadow-lg hover:bg-pink-100 focus:bg-pink-100 focus:ring-0",labelClassName:"flex w-5/6 mt-3",containerClassName:"flex",placeholder:"Realizar compras...",onKeyUp:function(e){13==e.keyCode&&a(e)}}),Object(o.jsx)(C.a,{size:"3rem",onClick:a})]})})};function y(e){var t=e.descripcion,n=e.id,a=e.completed,c=e.doneHandler,i=e.deleteHandler,s=a?"striked":"";return Object(o.jsx)("section",{className:"flex justify-between max-w-lg w-screen items-center px-8 border bg-pink-50 bg-opacity-100 shadow-md rounded-lg m-auto",children:Object(o.jsxs)("li",{className:"flex text-md justify-items-center h-16 items-center ",children:[Object(o.jsx)("span",{className:s,children:t}),Object(o.jsx)(C.c,{size:"2rem",onClick:function(e){c(n)}}),Object(o.jsx)(C.b,{size:"2rem",onClick:function(e){i(n)}})]})})}var k=function(e){var t=e.todos,n=e.doneHandler,a=e.deleteHandler,c=t.map((function(e){return Object(o.jsx)(y,{descripcion:e.description,id:e.id,completed:e.completed,doneHandler:n,deleteHandler:a},e.doneHandler)}));return Object(o.jsx)("section",{className:"TodoList ",children:Object(o.jsx)("ul",{children:c})})};n(39);var q=function(){var e=Object(a.useState)({todos:[],newTodo:""}),t=Object(x.a)(e,2),n=t[0],c=t[1];return n.todos.map((function(e){return JSON.stringify(e)})).join(" | "),Object(o.jsxs)("section",{className:"bg-gray-50",children:[Object(o.jsx)(N,{onChange:function(e){var t=e.currentTarget,a=(t.name,t.value);c(Object(b.a)(Object(b.a)({},n),{},{newTodo:a}))},value:n.newTodo,onAddNew:function(e){var t={description:n.newTodo,completed:!1,id:(new Date).getTime()},a=n.todos;a.push(t),c({todos:a,newTodo:""})}}),Object(o.jsx)(k,{todos:n.todos,doneHandler:function(e){var t=n.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}));c(Object(b.a)(Object(b.a)({},n),{},{todos:t}))},deleteHandler:function(e){var t=n.todos.filter((function(t){return t.id!==e}));c(Object(b.a)(Object(b.a)({},n),{},{todos:t}))}})]})},T=n(2);var E=function(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)("section",{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(T.c,{children:[Object(o.jsx)(T.a,{path:"/",exact:!0,children:Object(o.jsx)(w,{})}),Object(o.jsx)(T.a,{path:"/login",exact:!0,children:Object(o.jsx)(g,{})}),Object(o.jsx)(T.a,{path:"/todos",exact:!0,children:Object(o.jsx)(q,{})})]})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),H()}},[[40,1,2]]]);
//# sourceMappingURL=main.d53b5b15.chunk.js.map