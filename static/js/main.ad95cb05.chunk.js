(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),c=t.n(r),s=t(32),i=t.n(s),l=t(11),o=t(2),d=t(7),u=t(3),b=t(4);function j(){var e=Object(u.a)(["\n  a.leftNavbarBrand {\n    display: flex;\n    align-items: center;\n  }\n  span.title {\n    font-size: 24px;\n  }\n"]);return j=function(){return e},e}var m=b.a.nav(j()),p=function(){var e=Object(r.useState)(0),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(a.jsxs)(m,{className:"navbar navbar-expand-sm navbar-light bg-light px-4",children:[Object(a.jsxs)(l.b,{to:"/",className:"navbar-brand leftNavbarBrand",children:[Object(a.jsx)("i",{className:"fab fa-github fa-2x"}),Object(a.jsx)("span",{className:"ml-2 title",children:"Github finder"})]}),Object(a.jsx)("div",{className:"collapse navbar-collapse",children:Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Contact Us",to:"/contact-us"}].map((function(e,n){return Object(a.jsx)("li",{className:"nav-item ".concat(t===n?"active":""),onClick:function(){return c(n)},children:Object(a.jsx)(l.b,{className:"nav-link",to:e.to,children:e.name})},n)}))})})]})},h=t(21),x=t.n(h),f=t(36),O=t(13),v=t.n(O),g=t.p+"static/media/NoDataFound.68e289d1.png";function N(){var e=Object(u.a)(['\n  input[name="searchInput"] {\n    width: 75%;\n  }\n']);return N=function(){return e},e}var y=b.a.form(N()),w=function(e){var n=e.textInputHandler,t=Object(r.useState)(""),c=Object(d.a)(t,2),s=c[0],i=c[1];return Object(a.jsxs)(y,{className:"form-inline mt-2",onSubmit:function(e){e.preventDefault(),s.length>0&&n(s)},children:[Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Enter your favorite user name","aria-label":"Search",name:"searchInput",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("button",{className:"btn btn-outline-secondary my-2 my-sm-0",type:"submit",children:"Search"})]})};function S(){var e=Object(u.a)(["\n  background: ",";\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 4px;\n"]);return S=function(){return e},e}function k(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n"]);return k=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #6c757d;\n"]);return I=function(){return e},e}function _(){var e=Object(u.a)(["\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  img {\n    border-radius: 50%;\n    width: 100px;\n  }\n  :hover {\n    transform: scale(1.02);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  p.descriptionInfo {\n    display: -webkit-box;\n    height: 40px;\n    overflow: hidden;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    font-size: 12px;\n    margin-bottom: 5px;\n  }\n"]);return _=function(){return e},e}function D(){var e=Object(u.a)(["\n  display: grid;\n  gap: 1rem;\n  padding: 10px 20px 30px;\n\n  // Small devices (mobiles)\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  // Medium devices (tablets)\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  // Large devices (Desktop)\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  // Extra large devices (Large desktop)\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(u.a)(["\n  font-size: 16px;\n  font-weight: normal;\n  color: #6c757d;\n"]);return C=function(){return e},e}function H(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  img {\n    width: 250px;\n    border-radius: 50%;\n  }\n"]);return H=function(){return e},e}function F(){var e=Object(u.a)(["\n  text-align: center;\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  img {\n    border-radius: 50%;\n    width: 100px;\n  }\n  :hover {\n    transform: scale(1.02);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n"]);return F=function(){return e},e}function L(){var e=Object(u.a)(["\n  display: grid;\n  gap: 1rem;\n  padding-bottom: 30px;\n\n  // Small devices (mobiles)\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  // Medium devices (tablets)\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  // Large devices (Desktop)\n  @media (min-width: 992px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  // Extra large devices (Large desktop)\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"]);return L=function(){return e},e}function P(){var e=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n  margin: 10px 15px;\n  justify-content: space-between;\n"]);return P=function(){return e},e}var R=b.a.div(P()),B=b.a.div(L()),E=b.a.div(F()),M=b.a.div(H()),T=b.a.span(C()),z=b.a.div(D()),G=b.a.div(_()),A=b.a.div(I()),J=b.a.div(k()),U=b.a.span(S(),(function(e){return e.color})),q=function(e){var n=e.user,t=n.login,r=n.avatar_url;return Object(a.jsx)(E,{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:t}),Object(a.jsx)("img",{src:r,alt:t,className:"img-thumbnail"}),Object(a.jsx)("div",{children:Object(a.jsx)(l.b,{to:"/user/".concat(t),className:"btn btn-sm btn-outline-secondary py-0 my-2",children:"More"})})]})})};function V(){var e=Object(u.a)(["\n  height: 35vh;\n"]);return V=function(){return e},e}var K=b.a.div(V()),Q=function(){return Object(a.jsx)(K,{className:"d-flex justify-content-center align-items-center",children:Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})},W=function(e){var n=e.users,t=e.loader,r=e.searchText,c=e.clearSearchResultsHandler;return t?Object(a.jsx)(Q,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(R,{className:"my-2",children:[r&&Object(a.jsxs)("h6",{className:"mx-2",children:["Search keyword: ",Object(a.jsx)("span",{className:"lead",children:r})]}),n.length>0&&Object(a.jsx)("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return c()},children:"Clear Results"})]}),Object(a.jsx)(B,{className:"container-fluid",children:n.map((function(e,n){return Object(a.jsx)(q,{user:e},n)}))})]})};function X(){var e=Object(u.a)(["\n  display: block;\n  margin: auto;\n"]);return X=function(){return e},e}var Y=b.a.img(X()),Z=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],s=Object(r.useState)(!1),i=Object(d.a)(s,2),l=i[0],o=i[1],u=Object(r.useState)(null),b=Object(d.a)(u,2),j=b[0],m=b[1],p=Object(r.useState)(!1),h=Object(d.a)(p,2),O=h[0],N=h[1],y=function(){var e=Object(f.a)(x.a.mark((function e(n){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(n),o(!0),N(!1),e.next=5,v.a.get("https://api.github.com/search/users?q=".concat(n));case 5:0===(t=e.sent).data.items.length&&N(!0),c(t.data.items),o(!1);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("span",{className:"h2",children:"Find your favorite github users"}),Object(a.jsx)(w,{textInputHandler:y})]})}),Object(a.jsx)(W,{users:t,loader:l,searchText:j,clearSearchResultsHandler:function(){c([]),m(null)}}),O&&Object(a.jsx)(Y,{className:"img-fluid",src:g,alt:"No data found"})]})},$=function(e){var n=function(e){switch(e){case"JavaScript":return"#f1e05a";case"TypeScript":return"#2b7489";case"Python":return"#3572A5";case"Objective-C":return"#438eff";case"Ruby":return"#701516";case"HTML":return"#e34c26";case"CSS":return"#563d7c";case"PHP":return"#4F5D95";default:return"#6c757d"}}(e);return Object(a.jsx)(U,{color:n})},ee=function(e){var n=Number.parseInt((Date.parse(new Date)-Date.parse(e))/864e5);if(n<=31)return"".concat(n," days ago");var t=new Date(e).toString().split(" ");return"".concat(t[2]+" "+t[1]+" "+t[3])},ne=function(e){var n=e.repoInfo,t=n.name,r=n.html_url,c=n.description,s=n.language,i=n.updated_at;return Object(a.jsx)(G,{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("h6",{children:t})}),Object(a.jsx)("p",{className:"descriptionInfo text-muted",children:c}),Object(a.jsxs)(A,{children:[s?Object(a.jsxs)(J,{children:[$(s),s]}):null,Object(a.jsxs)(J,{children:["Updated on ",ee(i)]})]})]})})},te=function(e){var n=e.repos;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"text-secondary text-center",children:"Top 10 Repositories"}),Object(a.jsx)(z,{children:n.map((function(e,n){return Object(a.jsx)(ne,{repoInfo:e},n)}))})]})},ae=function(e){var n=Object(r.useState)([]),t=Object(d.a)(n,2),c=t[0],s=t[1],i=Object(r.useState)([]),o=Object(d.a)(i,2),u=o[0],b=o[1],j=Object(r.useState)(!1),m=Object(d.a)(j,2),p=m[0],h=m[1];if(Object(r.useEffect)((function(){var n=e.match.params.username;h(!0);var t=[v.a.get("https://api.github.com/users/".concat(n)),v.a.get("https://api.github.com/users/".concat(n,"/repos?per_page=10&sort=created:asc"))];v.a.all(t).then(v.a.spread((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.log(n);var a=n[0],r=n[1];a.data&&s(a.data),r.data&&b(r.data),h(!1)})))}),[e.match.params]),p)return Object(a.jsx)(Q,{});var x=c.login,f=c.name,O=c.location,g=c.avatar_url,N=c.bio,y=c.company,w=c.html_url,S=c.following,k=c.followers,I=c.public_gists,_=c.public_repos;return Object(a.jsxs)("div",{className:"container-fluid mt-4 mb-4",children:[Object(a.jsx)(l.b,{to:"/",className:"btn btn-outline-secondary btn-sm mx-4",children:"Back to Home"}),Object(a.jsxs)("div",{className:"row m-4 p-4 border rounded",children:[Object(a.jsxs)(M,{className:"col-md-4",children:[Object(a.jsx)("img",{src:g,alt:f,className:"img-thumbnail"}),Object(a.jsxs)("h1",{children:[" ",f," "]}),Object(a.jsxs)("p",{children:["Location: ",Object(a.jsxs)(T,{children:[" ",O," "]})]})]}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("h5",{children:["User Name: ",Object(a.jsx)(T,{children:x})," "]})}),N&&Object(a.jsx)("li",{children:Object(a.jsxs)("h5",{children:["Bio: ",Object(a.jsx)(T,{children:N})," "]})}),y&&Object(a.jsx)("li",{children:Object(a.jsxs)("h5",{children:["Company: ",Object(a.jsx)(T,{children:y})," "]})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:w,className:"btn btn-outline-secondary my-2 my-sm-0",target:"_blank",rel:"noopener noreferrer",children:"Visit Github Profile"})}),Object(a.jsxs)("li",{className:"mt-2",children:[Object(a.jsxs)("div",{className:"btn btn-secondary",children:["Followers: ",k]}),Object(a.jsxs)("div",{className:"btn btn-secondary m-2",children:["Following: ",S]}),Object(a.jsxs)("div",{className:"btn btn-secondary m-2",children:["Public Repos: ",_]}),Object(a.jsxs)("div",{className:"btn btn-secondary m-2",children:["Public Gists: ",I]})]})]})})]}),Object(a.jsx)(te,{repos:u})]})},re=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h3",{className:"lead container-fluid my-2",children:"Github finder application on searching user name, will provide details of each user along with top repositories."})})},ce=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:Z}),Object(a.jsx)(o.a,{exact:!0,path:"/user/:username",component:ae}),Object(a.jsx)(o.a,{exact:!0,path:"/about",component:re})]})]})},se=function(){return Object(a.jsx)(ce,{})};t(64);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ad95cb05.chunk.js.map