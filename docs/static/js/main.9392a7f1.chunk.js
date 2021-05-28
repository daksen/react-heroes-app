(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{47:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(11),i=Object(t.createContext)(),l=r(4),o="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},d=r(9),u=r(2),b=r(0),m=function(){var e=Object(t.useContext)(i),a=e.user,r=e.dispatch,c=Object(u.g)();return Object(b.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(d.b,{className:"navbar-brand h1 mb-0",to:"/",children:"HEROES-APP"}),Object(b.jsxs)("div",{className:"navbar-collapse",children:[Object(b.jsxs)("div",{className:"navbar-nav me-auto",children:[Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(b.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]}),Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)("span",{className:"nav-item nav-link text-info m-0",children:a.username}),Object(b.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:h}),c.replace("/login")},children:"Logout"})]})]})]})})},p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance;return Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"row g-4",children:[Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img-top",alt:r})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:r}),Object(b.jsx)("p",{className:"card-text mb-1",children:t}),Object(b.jsx)("p",{className:"card-text mb-3",children:Object(b.jsx)("small",{className:"text-muted",children:c})}),Object(b.jsx)(d.b,{to:"./hero/".concat(a),children:"Leer m\xe1s..."})]})})]})})})},v=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no valido'));return p.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(b.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4 animate__animated animate__fadeIn",children:r.map((function(e){return Object(b.jsx)(O,Object(l.a)({},e),e.id)}))})},x=function(){return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Marvel Comics"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"Marvel Comics"})]})},f=function(){return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"DC Comics"}),Object(b.jsx)("hr",{}),Object(b.jsx)(v,{publisher:"DC Comics"})]})},g=r(23),C=r.n(g),_=r(12),N=function(){var e=Object(u.g)(),a=Object(u.h)(),r=C.a.parse(a.search).q,c=void 0===r?"":r,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(_.a)({},a.name,a.value)))},function(){s(e)}]}({search:c}),i=Object(n.a)(s,2),o=i[0].search,h=i[1],j=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),p.filter((function(a){return a.superhero.toLowerCase().includes(e)})))}(c)}),[c]);return Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-12 col-md-5 mb-4 mb-md-0",children:[Object(b.jsx)("h4",{children:"Search Form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e.push("?q=".concat(o))},className:"animate__animated animate__fadeIn",children:[Object(b.jsx)("input",{type:"text",name:"search",placeholder:"Find your hero...",autoComplete:"off",className:"form-control",value:o,onChange:h}),Object(b.jsx)("div",{className:"d-grid",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-outline-success mt-2",children:"Search"})})]})]}),Object(b.jsxs)("div",{className:"col-12 col-md-7",children:[Object(b.jsx)("h4",{children:"Results"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[""===c&&Object(b.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==c&&0===j.length&&Object(b.jsxs)("div",{className:"alert alert-danger",children:['There ir no a hero with "',c,'"']}),j.map((function(e){return Object(b.jsx)(O,Object(l.a)({},e),e.id)}))]})]})]})})},y=function(){var e=Object(u.g)(),a=Object(u.i)().id,r=Object(t.useMemo)((function(){return function(e){return p.find((function(a){return a.id===e}))}(a)}),[a]);if(!r)return Object(b.jsx)(u.a,{to:"/"});var c=r.superhero,s=r.publisher,n=r.alter_ego,i=r.first_appearance,l=r.characters;return Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"row animate__animated animate__fadeIn",children:[Object(b.jsx)("div",{className:"col-4",children:Object(b.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),className:"img-thumbnail",alt:c})}),Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)("h3",{children:c}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Alter ego:"})," ",n]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"Publisher:"})," ",s]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("b",{children:"First appearance:"})," ",i]})]}),Object(b.jsx)("h5",{className:"mt-3",children:"Characters:"}),Object(b.jsx)("p",{children:l}),Object(b.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){e.length<=2?e.push("/"):e.goBack()},children:"Return"})]})]})})},S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/marvel",children:Object(b.jsx)(x,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/dc",children:Object(b.jsx)(f,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/search",children:Object(b.jsx)(N,{})}),Object(b.jsx)(u.b,{exact:!0,path:"/hero/:id",children:Object(b.jsx)(y,{})}),Object(b.jsx)(u.a,{to:"/marvel"})]})]})})},k=r(13),M=r(8),D=r.n(M),w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return Object(b.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(b.jsx)(u.a,{to:"/"}):Object(b.jsx)(r,Object(l.a)({},e))}}))};w.protoTypes={isAuthenticated:D.a.bool.isRequired,component:D.a.func.isRequired};var A=function(e){var a=e.isAuthenticated,r=e.component,t=Object(k.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(b.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(b.jsx)(r,Object(l.a)({},e)):Object(b.jsx)(u.a,{to:"/login"})}}))};A.protoTypes={isAuthenticated:D.a.bool.isRequired,component:D.a.func.isRequired};var B=function(){var e=Object(u.g)(),a=Object(t.useContext)(i).dispatch;return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"LoginScreen"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){var r=localStorage.getItem("lastPath")||"/";a({type:o,payload:{username:"DakSen"}}),e.replace(r)},children:"Login"})]})},J=function(){var e=Object(t.useContext)(i).user;return Object(b.jsx)(d.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(w,{exact:!0,path:"/login",component:B,isAuthenticated:e.logged}),Object(b.jsx)(A,{path:"/",component:S,isAuthenticated:e.logged})]})})})},R=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},T=function(){var e=Object(t.useReducer)(j,{},R),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(b.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(b.jsx)(J,{})})};s.a.render(Object(b.jsx)(T,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9392a7f1.chunk.js.map