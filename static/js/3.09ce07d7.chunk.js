(this.webpackJsonpreactpro=this.webpackJsonpreactpro||[]).push([[3],{295:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a=s(96);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,r=!1,n=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(s.push(o.value),!e||s.length!==e);a=!0);}catch(c){r=!0,n=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(t,e,s){},301:function(t,e,s){t.exports={profileInformation:"profileInfo_profileInformation__1f_LF",avatar:"profileInfo_avatar__11C3x",aboutUser:"profileInfo_aboutUser__3wpoa",infoAboutUser:"profileInfo_infoAboutUser__JBuXS"}},302:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__1eqjM"}},303:function(t,e,s){t.exports={postsBlock:"MyPostsForm_postsBlock__22U-_"}},304:function(t,e,s){t.exports={item:"Post_item__26DLf",avatar:"Post_avatar__16YnX",message:"Post_message__2u7V7"}},307:function(t,e,s){"use strict";s.r(e);var a=s(5),r=s(90),n=s(91),o=s(93),i=s(92),c=(s(99),s(0)),u=s.n(c),l=s(14),j=s(7),b=s(95),d=(s(300),s(295)),f=s(301),p=s.n(f),h=s(89),O=s(82),m=s(1),x=function(t){var e=Object(c.useState)(t.status),s=Object(d.a)(e,2),a=s[0],r=s[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),i=o[0],u=o[1],j=Object(l.d)((function(t){return t.auth.id}));return Object(c.useEffect)((function(){r(t.status)}),[t.status]),Object(m.jsxs)("div",{children:[!i&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onDoubleClick:function(){u(!0)},children:t.status})}),i&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{onChange:function(t){r(t.currentTarget.value)},onFocus:function(t){t.target.select()},autoFocus:!0,value:a,onBlur:function(){u(!1),t.updateStatus(a).then((function(){t.getStatus(j)}))}})})]})},v=function(t){var e=Object(c.useState)(!0),s=Object(d.a)(e,1)[0];return t.userProfile?Object(m.jsxs)("div",{className:p.a.profileInformation,children:[Object(m.jsx)("div",{className:p.a.avatar,children:Object(m.jsx)("img",{src:null!=t.userProfile.photos.large?t.userProfile.photos.large:h.a})}),Object(m.jsxs)("div",{className:p.a.aboutUser,children:[Object(m.jsx)("div",{className:p.a.infoAboutUser,children:Object(m.jsxs)("span",{children:["\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f: ",t.userProfile.fullName]})}),Object(m.jsx)("div",{className:p.a.infoAboutUser,children:Object(m.jsxs)("span",{children:["\u041e\u0431\u043e \u043c\u043d\u0435: ",t.userProfile.aboutMe]})}),Object(m.jsx)("div",{className:p.a.infoAboutUser,children:Object(m.jsxs)("span",{children:["\u041c\u043e\u0439 instagram: ",t.userProfile.contacts.instagram]})}),Object(m.jsx)("div",{className:p.a.infoAboutUser,children:Object(m.jsxs)("span",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",t.userProfile.lookingForAJobDescription]})}),Object(m.jsx)("div",{children:Object(m.jsx)(x,{status:t.status,updateStatus:t.updateStatus,getStatus:t.getStatus})})]})]}):Object(m.jsx)(O.a,{isFetching:s})},g=s(131),_=s(302),S=s.n(_),P=s(130),y=s(58),k=s(94),N=s(303),A=s.n(N),U=Object(k.a)("textarea"),I=Object(y.a)(10),B=function(t){return Object(m.jsx)("div",{className:A.a.postsBlock,children:Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(P.a,{name:"text",component:U,placeholder:"enter your post",validate:[y.b,I]})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Add post"})})]})})},C=s(304),w=s.n(C),F=function(t){return Object(m.jsxs)("div",{className:w.a.item,children:[Object(m.jsx)("div",{className:w.a.avatar,children:Object(m.jsx)("img",{src:h.a})}),Object(m.jsxs)("div",{className:w.a.message,children:[Object(m.jsx)("div",{className:w.a.messageItem,children:t.message}),Object(m.jsx)("div",{className:w.a.likes,children:Object(m.jsx)("span",{children:"like: "+t.likeCount})})]})]})},M=Object(g.a)({form:"profilePost"})(B),D=function(t){var e=t.posts.map((function(t){return Object(m.jsx)(F,{message:t.post,likeCount:t.likeCount},t.id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:S.a.postsBlock,children:Object(m.jsx)("h3",{children:"myPosts"})}),Object(m.jsx)(M,{onSubmit:function(e){t.addPost(e.text)}}),Object(m.jsx)("div",{className:S.a.posts,children:e})]})},J=Object(l.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:b.a})(D),E=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{userProfile:t.userProfile,status:t.status,updateStatus:t.updateStatus,getStatus:t.getStatus}),Object(m.jsx)(J,{})]})},L=s(10),T=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(E,Object(a.a)(Object(a.a)({},this.props),{},{userProfile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus,getStatus:this.props.getStatus}))})}}]),s}(u.a.Component);e.default=Object(L.d)(Object(l.b)((function(t){return{userProfile:t.profilePage.userProfile,isAuth:t.auth.isAuth,id:t.auth.id,status:t.profilePage.status}}),{getUserProfile:b.d,getStatus:b.c,updateStatus:b.e}),j.f)(T)}}]);
//# sourceMappingURL=3.09ce07d7.chunk.js.map