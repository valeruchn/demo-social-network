(this.webpackJsonpreactpro=this.webpackJsonpreactpro||[]).push([[0],{12:function(A,e,n){A.exports={nav:"Navbar_nav__182Sm",item:"Navbar_item__3HZmc",active:"Navbar_active__cmGFp",friendsBar:"Navbar_friendsBar__39NNe",text:"Navbar_text__gN7do"}},128:function(A,e,n){"use strict";n.d(e,"a",(function(){return a}));var t=n(35),s=n(5),r="ADD-DIALOG",c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Egor"},{id:5,name:"Max"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"Yo"},{id:4,message:"How are you?"},{id:5,message:"Thank`s I`m fine :)"}],newMessage:""},a=function(A){return{type:r,message:A}};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r:var n={id:A.messagesData.length+1,message:e.message};return Object(s.a)(Object(s.a)({},A),{},{messagesData:[].concat(Object(t.a)(A.messagesData),[n])});default:return A}}},129:function(A,e,n){"use strict";n.d(e,"c",(function(){return x})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return b}));var t=n(35),s=n(5),r=n(20),c="FOLLOW",a="UNFOLLOW",i="SET_USERS",g="SET_CURRENT_PAGE",C="SET_TOTAL_USERS_COUNT",o="TOGGLE_IS_FETCHING",u="TOGGLE_IS_FOLLOWING_PROGRESS",I={users:[],pageSize:5,totalUsersCount:20,currentPage:1,isFetching:!1,followingInProgress:[]},d=function(A){return{type:o,isFetching:A}},l=function(A,e){return{type:u,followingInProgress:A,userId:e}},x=function(A,e){return function(n){n(function(A){return{type:g,currentPage:A}}(A)),n(d(!0)),r.c.getUsers(A,e).then((function(A){var e,t;n(d(!1)),n((e=A.items,{type:i,users:e})),n((t=A.totalCount,{type:C,usersCount:t}))}))}},j=function(A){return function(e){e(l(!0,A)),r.c.unfollowRequest(A).then((function(n){0==n.resultCode&&e(function(A){return{type:a,userId:A}}(A)),e(l(!1,A))}))}},b=function(A){return function(e){e(l(!0,A)),r.c.followRequest(A).then((function(n){0==n.resultCode&&e(function(A){return{type:c,userId:A}}(A)),e(l(!1,A))}))}};e.a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return Object(s.a)(Object(s.a)({},A),{},{users:A.users.map((function(A){return A.id===e.userId?Object(s.a)(Object(s.a)({},A),{},{followed:!0}):A}))});case a:return Object(s.a)(Object(s.a)({},A),{},{users:A.users.map((function(A){return A.id===e.userId?Object(s.a)(Object(s.a)({},A),{},{followed:!1}):A}))});case i:return Object(s.a)(Object(s.a)({},A),{},{users:e.users});case g:return Object(s.a)(Object(s.a)({},A),{},{currentPage:e.currentPage});case C:return Object(s.a)(Object(s.a)({},A),{},{totalUsersCount:e.usersCount});case o:return Object(s.a)(Object(s.a)({},A),{},{isFetching:e.isFetching});case u:return Object(s.a)(Object(s.a)({},A),{},{followingInProgress:e.followingInProgress?[].concat(Object(t.a)(A.followingInProgress),[e.userId]):A.followingInProgress.filter((function(A){return A!=e.userId}))});default:return A}}},135:function(A,e,n){},136:function(A,e,n){A.exports={formSummaryError:"LoginForm_formSummaryError__2o1eT"}},171:function(A,e,n){},20:function(A,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return a}));var t=n(99),s=n.n(t).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b5154164-ee74-4e2c-80dc-8b3c2d97d06f"}}),r={getUsers:function(A,e){return s.get("users?page=".concat(A,"&count=").concat(e)).then((function(A){return A.data}))},unfollowRequest:function(A){return s.delete("follow/".concat(A)).then((function(A){return A.data}))},followRequest:function(A){return s.post("follow/".concat(A)).then((function(A){return A.data}))}},c={authMe:function(){return s.get("auth/me").then((function(A){return A.data}))},login:function(A,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:A,password:e,rememberMe:n}).then((function(A){return A.data}))},logout:function(){return s.delete("auth/login").then((function(A){return A.data}))}},a={getProfile:function(A){return s.get("profile/"+A).then((function(A){return A.data}))},getStatus:function(A){return s.get("profile/status/"+A).then((function(A){return A.data}))},updateStatus:function(A){return s.put("/profile/status",{status:A}).then((function(A){return A.data}))}}},291:function(A,e,n){},292:function(A,e,n){},293:function(A,e,n){},294:function(A,e,n){"use strict";n.r(e);n(97);var t=function(A){A&&A instanceof Function&&n.e(6).then(n.bind(null,306)).then((function(e){var n=e.getCLS,t=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;n(A),t(A),s(A),r(A),c(A)}))},s=n(0),r=n.n(s),c=n(57),a=n.n(c),i=n(14),g=n(7),C=(n(171),n(82)),o=n(5),u=n(90),I=n(91),d=n(93),l=n(92),x=n(11),j=n.n(x),b=n(25),w=n(39),f=n(20),m="SET_USER_DATA",F={id:null,email:null,login:null,isAuth:!1},p=function(A,e,n,t){return{type:m,data:{id:A,email:e,login:n,isAuth:t}}},B=function(){return function(){var A=Object(b.a)(j.a.mark((function A(e){var n,t,s,r,c;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,f.a.authMe();case 2:0===(n=A.sent).resultCode&&(t=n.data,s=t.id,r=t.email,c=t.login,e(p(s,r,c,!0)));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},O=function(){return function(){var A=Object(b.a)(j.a.mark((function A(e){return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,f.a.logout();case 2:0===A.sent.resultCode&&e(p(null,null,null,!1));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},D=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(o.a)(Object(o.a)({},A),e.data);default:return A}},z=n(61),h=n.n(z),U=n.p+"static/media/four_five_big_logo.480a5ba5.png",M=n(17),v=n(1),S=function(A){return Object(v.jsxs)("header",{className:h.a.header,children:[Object(v.jsx)("div",{className:h.a.logoImg,children:Object(v.jsx)("img",{src:U})}),Object(v.jsx)("div",{className:h.a.loginBlock,children:A.isAuth?Object(v.jsxs)("div",{children:[A.login," ",Object(v.jsx)("button",{onClick:A.logout,children:"Logout"})]}):Object(v.jsx)(M.b,{to:"/login",children:"Login"})})]})},R=function(A){Object(d.a)(n,A);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(v.jsx)(S,Object(o.a)({},this.props))}}]),n}(r.a.Component),P=Object(i.b)((function(A){return{isAuth:A.auth.isAuth,login:A.auth.login}}),{logout:O})(R),N=n(131),E=n(135),G=n.n(E),y=n(130),J=n(58),T=n(94),L=n(136),k=n.n(L),Z=Object(T.a)("input"),Y=Object(J.a)(50),Q=function(A){var e=A.handleSubmit,n=A.error;return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:e,children:[Object(v.jsx)("div",{children:Object(v.jsx)(y.a,{placeholder:"Email",name:"email",component:Z,validate:[J.b,Y]})}),Object(v.jsx)("div",{children:Object(v.jsx)(y.a,{placeholder:"Password",name:"password",component:Z,validate:[J.b,Y]})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y.a,{type:"checkbox",name:"rememberMy",component:Z})," Remember me"]}),n&&Object(v.jsx)("div",{className:k.a.formSummaryError,children:n}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{children:"Login"})})]})})},H=Object(N.a)({form:"login"})(Q),V=Object(i.b)((function(A){return{isAuth:A.auth.isAuth}}),{login:function(A,e,n){return function(){var t=Object(b.a)(j.a.mark((function t(s){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.login(A,e,n);case 2:0===(r=t.sent).resultCode?s(B()):(c=r.messages.length>0?r.messages[0]:"Some error",s(Object(w.a)("login",{_error:c})));case 4:case"end":return t.stop()}}),t)})));return function(A){return t.apply(this,arguments)}}()},logout:O})((function(A){return A.isAuth?Object(v.jsx)(g.a,{to:"/profile"}):Object(v.jsxs)("div",{className:G.a.LoginForm,children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsx)(H,{onSubmit:function(e){A.login(e.email,e.password,e.rememberMe)}})]})})),K=n(63),W=n.n(K),q=n.p+"static/media/four_five_shapka_removebg.0f0bfbaf.png",X=function(){return Object(v.jsx)("div",{className:W.a.contentImg,children:Object(v.jsxs)("div",{className:W.a.bgFon,children:[Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB3sAAAJZCAYAAACgB1/oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAR6aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjEtMDMtMDc8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+YjI1ODg0M2ItZDNlNy00NWYyLWFmNGItNmE4Nzk1MzEyZmNjPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPkZPVVIgRklWRTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj7QktCw0LvQtdGA0LjQuSDQndC+0LLQuNC60L7QsjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PhAuoCQAABcGSURBVHhe7dkxDcAwEMDAb/gj6FqpNJMlJCzdLQbh5/2/PQAAAAAAAACkrFsAAAAAAAAAQsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAAAIMnsBAAAAAAAAgsxeAAAAAAAAgCCzFwAAAAAAACDI7AUAAAAAAADImTnSPgeUhZrlhAAAAABJRU5ErkJggg=="}),Object(v.jsx)("div",{className:W.a.bgText,children:Object(v.jsx)("img",{src:q})})]})})},_=(n(291),function(A){return Object(v.jsx)("div",{children:"Music"})}),$=n(64),AA=n.n($),eA=n(89),nA=function(A){var e="/dialogs/"+A.id;return Object(v.jsxs)("div",{className:AA.a.friendsBar,children:[Object(v.jsx)("div",{className:AA.a.friendsItem,children:Object(v.jsx)("img",{src:eA.a})}),Object(v.jsx)("div",{className:AA.a.friendName,children:Object(v.jsx)(M.b,{to:e,children:A.name})})]})},tA=n(12),sA=n.n(tA),rA=function(A){var e=A.state.friends.map((function(A){return Object(v.jsx)(nA,{id:A.id,name:A.name},A.id)}));return Object(v.jsxs)("nav",{className:sA.a.nav,children:[Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/profile",activeClassName:sA.a.active,children:"Profile"})}),Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/dialogs",activeClassName:sA.a.active,children:"Messages"})}),Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/users",activeClassName:sA.a.active,children:"Users"})}),Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/news",activeClassName:sA.a.active,children:"News"})}),Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/music",activeClassName:sA.a.active,children:"Music"})}),Object(v.jsx)("div",{className:sA.a.item,children:Object(v.jsx)(M.b,{to:"/settings",activeClassName:sA.a.active,children:"Settings"})}),Object(v.jsxs)("div",{className:sA.a.friendsBar,children:[Object(v.jsx)("div",{className:sA.a.text,children:"friends"}),Object(v.jsx)("div",{className:sA.a.friendsItem,children:e})]})]})},cA=Object(i.b)((function(A){return{state:A.navbar}}))(rA),aA=(n(292),function(A){return Object(v.jsx)("div",{children:"News"})}),iA=(n(293),function(A){return Object(v.jsx)("div",{children:"Settings"})}),gA="INITIALISED_SUCCESS",CA={initialized:!1},oA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:CA,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case gA:return Object(o.a)(Object(o.a)({},A),{},{initialized:!0});default:return A}},uA=n(10),IA=n(138),dA=n(95),lA=n(128),xA={friends:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Egor"}]},jA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xA;return A},bA=n(129),wA=n(132),fA=Object(uA.c)({profilePage:dA.b,dialogsPage:lA.b,navbar:jA,usersPage:bA.a,auth:D,form:wA.a,app:oA}),mA=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||uA.d,FA=Object(uA.e)(fA,mA(Object(uA.a)(IA.a))),pA=r.a.lazy((function(){return n.e(4).then(n.bind(null,308))})),BA=r.a.lazy((function(){return n.e(3).then(n.bind(null,307))})),OA=r.a.lazy((function(){return n.e(5).then(n.bind(null,309))})),DA=function(A){var e=Object(i.d)((function(A){return A.app.initialized})),n=Object(i.c)();return Object(s.useEffect)((function(){n(function(){var A=Object(b.a)(j.a.mark((function A(e){return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e(B());case 2:e({type:gA});case 3:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}())}),[n]),e?Object(v.jsxs)("div",{className:"app-wrapper",children:[Object(v.jsx)(P,{}),Object(v.jsx)(cA,{}),Object(v.jsxs)("div",{className:"app-wrapper-content",children:[Object(v.jsx)(X,{}),Object(v.jsxs)(s.Suspense,{fallback:Object(v.jsx)(C.a,{isFetching:!0}),children:[Object(v.jsx)(g.b,{path:"/users",render:function(){return Object(v.jsx)(OA,{})}}),Object(v.jsx)(g.b,{path:"/dialogs",render:function(){return Object(v.jsx)(pA,{})}}),Object(v.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(v.jsx)(BA,{})}})]}),Object(v.jsx)(g.b,{path:"/news",component:aA}),Object(v.jsx)(g.b,{path:"/music",component:_}),Object(v.jsx)(g.b,{path:"/settings",component:iA}),Object(v.jsx)(g.b,{path:"/login",render:function(){return Object(v.jsx)(V,{})}})]})]}):Object(v.jsx)(C.a,{isFetching:!0})},zA=function(A){return Object(v.jsx)(M.a,{children:Object(v.jsx)(i.a,{store:FA,children:Object(v.jsx)(DA,{})})})};a.a.render(Object(v.jsx)(zA,{}),document.getElementById("root")),t()},58:function(A,e,n){"use strict";n.d(e,"b",(function(){return t})),n.d(e,"a",(function(){return s}));var t=function(A){if(!A)return"Field is required"},s=function(A){return function(e){if(e.length>A)return"To long message. Max length is ".concat(A," char")}}},61:function(A,e,n){A.exports={header:"Header_header__3_AQP",logoImg:"Header_logoImg__1VQ1o",loginBlock:"Header_loginBlock__2gXQM"}},63:function(A,e,n){A.exports={bgFon:"LogoImage_bgFon__2qzpn",bgText:"LogoImage_bgText__3VHfM"}},64:function(A,e,n){A.exports={friendsBar:"Friends_friendsBar__Upay8",friendsItem:"Friends_friendsItem__2Dss5",friendName:"Friends_friendName__3b8ek"}},82:function(A,e,n){"use strict";n(0);var t=n.p+"static/media/loader.756c7bc0.svg",s=n(1);e.a=function(A){return Object(s.jsx)("div",{children:A.isFetching?Object(s.jsx)("img",{src:t}):null})}},86:function(A,e,n){A.exports={formControl:"FormControls_formControl__3bfgQ",error:"FormControls_error__3-r7u",formSummaryError:"FormControls_formSummaryError__rlwMG"}},89:function(A,e,n){"use strict";e.a="data:image/png;base64,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"},94:function(A,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n(5),s=n(133),r=(n(0),n(86)),c=n.n(r),a=n(1),i=function(A){return function(e){var n=e.input,r=e.meta,i=Object(s.a)(e,["input","meta"]),g=r.touched&&r.error;return Object(a.jsxs)("div",{className:c.a.formControl+" "+(g?c.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)(A,Object(t.a)(Object(t.a)({},n),i))}),Object(a.jsx)("div",{children:g&&Object(a.jsx)("span",{children:r.error})})]})}}},95:function(A,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return j})),n.d(e,"e",(function(){return b}));var t=n(11),s=n.n(t),r=n(25),c=n(35),a=n(5),i=n(20),g="ADD-POST",C="SET_USER_PROFILE",o="SET_STATUS",u="DELETE_POST",I={posts:[{id:1,post:"first :)",likeCount:25},{id:2,post:"second :)",likeCount:5},{id:3,post:"Yo",likeCount:10},{id:4,post:"How are you?",likeCount:7},{id:5,post:"Thank`s I`m fine :)",likeCount:11}],userProfile:null,status:""},d=function(A){return{type:g,text:A}},l=function(A){return{type:o,status:A}},x=function(A){return function(){var e=Object(r.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getProfile(A);case 2:t=e.sent,n({type:C,profile:t});case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},j=function(A){return function(){var e=Object(r.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getStatus(A);case 2:t=e.sent,n(l(t));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},b=function(A){return function(){var e=Object(r.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.updateStatus(A);case 2:0===(t=e.sent).resultcode&&n(l(t));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:var n={id:A.posts.length+1,post:e.text,likeCount:0};return Object(a.a)(Object(a.a)({},A),{},{posts:[].concat(Object(c.a)(A.posts),[n])});case C:return Object(a.a)(Object(a.a)({},A),{},{userProfile:e.profile});case o:return Object(a.a)(Object(a.a)({},A),{},{status:e.status});case u:return Object(a.a)(Object(a.a)({},A),{},{posts:A.posts.filter((function(A){return A.id!=e.postId}))});default:return A}}},97:function(A,e,n){}},[[294,1,2]]]);
//# sourceMappingURL=main.8ba280f1.chunk.js.map