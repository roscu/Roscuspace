(this.webpackJsonproscuspace=this.webpackJsonproscuspace||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},31:function(e){e.exports=JSON.parse('{"skill":[{"name":"Python","description":"Data Cleaning, data Processing, Modeling, machine leanrign"},{"name":"SQL","description":"database access, CRUD process"},{"name":"Tableu+","description":"Data Viz"},{"name":"Java","description":"This is what i do with this skill"},{"name":"Excel","description":"This is what i do with this skill"},{"name":"Tensorflow, pandas, pytorch,pyplot, matplot","description":"This is what i do with this skill"}]}')},32:function(e){e.exports=JSON.parse('{"link":"https://github.com/rafaelh852","project":[{"title":"Project 1","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"},{"title":"Project 2","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"},{"title":"Project 3","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"}]}')},33:function(e){e.exports=JSON.parse('{"link":"medium link","articlesNav":[],"article":[{"title":" Article on Project 1","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"},{"title":" Article on Project 2","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"},{"title":" Article on Project 3","link":"#","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores ducimus, facere cumque id delectus hic animi consequuntur libero blanditiis!"}]}')},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),r=a.n(i),l=(a(25),a(10)),o=a(1),s=a(6),m=function(e){var t=e.navs,a=(e.navNames,"nav-item nav-link text-center hover "),i=Object(n.useState)(!1),r=Object(s.a)(i,2),o=r[0],m=r[1],u=Object(n.useState)(0),d=Object(s.a)(u,2),p=d[0],E=d[1];return c.a.createElement("nav",{id:"nav",className:"bg-dark  container-fluid p-0 sticky-top py-2 "},c.a.createElement("div",{className:" container-fluid p-0 "},c.a.createElement("a",{href:"/.",className:a},"Home"),Object.entries(t[p]).map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];if("string"===typeof i)return c.a.createElement("a",{href:i,className:a},n);if(typeof i===typeof{}){var r=Object.entries(i),l=c.a.createElement("a",{href:"#".concat(n),id:"P-".concat(n),onClick:function(){return function(e,t){m(!o);var a=document.getElementById("P-".concat(t));e.map((function(e){var t=Object(s.a)(e,1)[0],n=document.getElementById(t);o?(n.classList.add("vanish"),a.classList.remove("bggrad")):(n.classList.remove("vanish"),a.classList.add("bggrad"))}))}(r,n)},className:a+"text-primary dropdown-toggle"},n),u=r.map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return c.a.createElement("a",{id:n,href:i,className:a+"vanish dc"},n)}));return[l].concat(u)}})),c.a.createElement(l.b,{href:"#",id:"",className:a+" dropdown-toggle",onClick:function(){var e=t.length;E(p+1>=e?0:p+1)}})))},u=(a(9).media,a(9).meta),d=function(){return c.a.createElement("header",{id:"Header",className:" row container-fluid  align-items-center p-0 m-0 headerheight bg-light textgradlight "},c.a.createElement("div",{className:"container  "},c.a.createElement("h2",{className:" col "},u.name),c.a.createElement("h4",{className:"col "},u.slogan)))},p=a(9).meta,E=function(){return c.a.createElement("section",{id:"About",className:"container-fluid  p-5  align-content-end  "},c.a.createElement("h5",{className:" pb-3 container"},"About"),c.a.createElement("div",{className:"container "},c.a.createElement("h3",{className:""},p.name),c.a.createElement("div",{className:"overflow-auto"},c.a.createElement("span",{className:"pr-2 font-weight-bold"},"Contact:"),c.a.createElement("a",{href:""},c.a.createElement("strong",null,p.email))),c.a.createElement("p",null,p.description)))},f=a(31).skill,h=function(){return c.a.createElement("section",{id:"Skills",className:"container-fluid p-5 bg-light textgradlight"},c.a.createElement("h3",{className:" pb-3 container "},"Skills"),c.a.createElement("div",{className:"container p-0 "},f.map((function(e){return c.a.createElement("div",{className:" d-inline-block col-12 col-md-6 col-lg-4 col-xl-4 "},c.a.createElement("h4",{className:"card-title "},e.name),c.a.createElement("p",{className:"card-text "},e.description))}))))},b=a(32),g=b.project,N=(b.link,function(){return c.a.createElement("section",{id:"Projects",className:"container-fluid p-5 bg-light textgradlight "},c.a.createElement("h3",{className:" pb-3 container "},"Projects"),c.a.createElement("div",{className:" container p-0 "},g.map((function(e){return c.a.createElement("div",{className:"  d-inline-block col-12 col-lg-6 col-xl-4  pb-3"},c.a.createElement("h4",{className:"card-title"},e.title," "),c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:"#",alt:"gif of project 1"})),c.a.createElement("p",{className:"card-text"},e.description))}))))}),v=a(33),k=v.article,j=(v.link,function(){return c.a.createElement("section",{id:"Articles",className:"p-5 container-fluid"},c.a.createElement("h3",{className:"container pb-3 d-block"}," Articles "),c.a.createElement("div",{className:"container p-0"},k.map((function(e){return c.a.createElement("div",{className:"d-inline-block col-12 col-lg-6 col-xl-4 pb-3"},c.a.createElement("a",{href:e.link},c.a.createElement("h4",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.description)))}))))});var x=function(){return c.a.createElement("form",{action:"",className:"container col-12 col-sm-12 col-md-7 col-xl-6"},c.a.createElement("div",{className:"formgroup"},c.a.createElement("label",{for:"inputName"},"Your Name (required)"),c.a.createElement("input",{type:"text",class:"form-control mb-3",id:"inputName",placeholder:"Name",required:!0})),c.a.createElement("div",{className:"formgroup"},c.a.createElement("label",{for:"inputEmail"},"Your Email (required)"),c.a.createElement("input",{type:"email",class:"form-control mb-3",id:"inputEmail",placeholder:"Email",required:!0})),c.a.createElement("div",{className:"formgroup"},c.a.createElement("label",{for:"inputName"},"Subject"),c.a.createElement("input",{type:"text",className:"form-control mb-2",id:"inputSubject"})),c.a.createElement("div",{className:"formgroup"},c.a.createElement("label",{for:"inputName"},"Your Message"),c.a.createElement("textarea",{name:"inputMessage",id:"Message",cols:"30",rows:"10",className:"form-control mb-4",placeholder:"Message"})),c.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Send"))},y=function(){return c.a.createElement("section",{id:"Contact",className:"container-fluid p-5 text-primary "},c.a.createElement("h3",{className:"container pb-3"},"Contact"),c.a.createElement(x,null))},w=a(9),q=w.HomeNav,A=w.mediaNav,P=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(m,{navs:[q,A],navNames:["Media",""]}),c.a.createElement("div",{id:"content",className:"container-fluid p-0 bg-dark text-primary "},c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(j,null),c.a.createElement(h,null),c.a.createElement(y,null)))},S=function(e){var t=e.style,a=function(){return c.a.createElement("div",null,"prok")};return c.a.createElement(n.Fragment,null,c.a.createElement(m,{nav:[{}]}),c.a.createElement("section",{className:t.section},a))},O=function(e){var t=e.style,a=function(){return c.a.createElement("div",null,"prok")};return c.a.createElement(n.Fragment,null,c.a.createElement(m,{nav:[{}]}),c.a.createElement("section",{className:t.section},a))},L=function(e){var t=e.style,a=function(){return c.a.createElement("div",null,"nov")};return c.a.createElement(n.Fragment,null,c.a.createElement(m,{nav:[{}]}),c.a.createElement("section",{className:t.section},a))},F=function(){var e=function(){return c.a.createElement(P,null)};return c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:e}),c.a.createElement(o.a,{exact:!0,path:"/index",component:e}),c.a.createElement(o.a,{exact:!0,path:"/about",component:function(){return c.a.createElement(S,null)}}),c.a.createElement(o.a,{exact:!0,path:"/projects",component:function(){return c.a.createElement(O,null)}}),c.a.createElement(o.a,{exact:!0,path:"/articles",component:function(){return c.a.createElement(L,null)}}),c.a.createElement(o.a,{exact:!0,path:"/contact",component:function(){return c.a.createElement(x,null)}}))))};r.a.render(c.a.createElement(F,null),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"meta":{"abre":"RH","name":"Rafael Hernandez","title":"Rafael H.","url":"https://rafaelhernandez.dev/","email":"Rafael.Hernandez852@gmail.com","slogan":"Data Scientist with a passion for teaching","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quaerat perspiciatis reprehenderit neque illo aspernatur, incidunt dignissimos. Architecto, accusantium. Enim."},"mediaNav":{"github":"https://github.com/rafaelh852","linkedin":"https://www.linkedin.com/in/rafael-hernandez-54a667102/","twitter":"https://twitter.com/rafaelh852"},"HomeNav":{"About":"#About","Projects":{"Project1":"#proj1","Project2":"#proj2","Project3":"#proj3"},"Articles":{"Art1":"#Art1","Art2":"#Art2","Art3":"#Art3"},"Skills":"#Skills","Contact":"#Contact"}}')}},[[20,1,2]]]);
//# sourceMappingURL=main.75085f5a.chunk.js.map