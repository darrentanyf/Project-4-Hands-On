(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(23),n=c.n(r),l=(c(54),c(5)),i=c(24),o=c(8),d=(c(55),a.a.createContext(null)),j=c(14),u=c.n(j),b=function(){var e=Object(s.useContext)(d),t=Object(s.useState)(null),c=Object(l.a)(t,2),a=c[0],r=c[1];Object(s.useEffect)((function(){u.a.post("/api/users/authenticate",{token:localStorage.getItem("token")}).then((function(e){console.log("RESPONSE",e),r({authenticated:e.data.authenticated,userInfo:e.data.userInfo})}))}),[]),e.setUser(a)},h=c(0),O=function(){var e,t=Object(s.useContext)(d);b();var c=null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.authenticated;console.log("CONTEXT 2",t);return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{class:"navbar navbar-light bg-light justify-content-between",children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"left"},children:[Object(h.jsx)("a",{class:"nav-link",href:"/guides",children:"Discover"}),Object(h.jsx)("a",{class:"nav-link",href:"/guides/new",children:"Start a guide"})]}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)("a",{class:"navbar-brand",href:"/",children:"HandsOn"})}),!0===c?Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"right"},children:[Object(h.jsx)("a",{class:"nav-link",href:"/Account",children:"My Account"}),Object(h.jsx)("a",{class:"nav-link",href:"/",onClick:function(){console.log("HELLO ARE YOU WORKING"),localStorage.clear()},children:"Logout"})]}):Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"right"},children:[Object(h.jsx)("a",{class:"nav-link",href:"/login",children:"Login"}),Object(h.jsx)("a",{class:"nav-link",href:"/signup",children:"Sign Up"})]})]})})})},x=c(16),g=c.n(x),p=c(21),v=c(35),f=c(9),m=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/guides",e.next=3,u.a.get("/api/guides");case 3:t=e.sent,console.log("DATA",t.data),console.log(t.data.length),a([t.data[0],t.data[1],t.data[2]]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(f.a,{style:{padding:20},children:Object(h.jsx)(v.a,{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(h.jsxs)(v.a.Item,{children:[Object(h.jsx)("img",{className:"d-block w-100",src:c[t].guides_img,alt:"First slide",height:"480px"}),Object(h.jsx)(v.a.Caption,{children:Object(h.jsx)("h5",{children:c[t].name})})]})}))})})})},y=c(28),S=c(25),I=c(7),T=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/guides",e.next=3,u.a.get("/api/guides");case 3:t=e.sent,console.log("DATA",t.data),console.log(t.data.length),a(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("GUIDES",c),Object(h.jsxs)("div",{children:[Object(h.jsx)(f.a,{children:null===c||void 0===c?void 0:c.map((function(e,t){var s,a,r,n;return Object(h.jsx)(I.a,{style:{display:"flex",justifyContent:"center"},children:Object(h.jsxs)(y.a,{bg:"light",text:"dark",style:{width:"19rem"},children:[Object(h.jsx)(y.a.Img,{variant:"top",src:null===(s=c[t])||void 0===s?void 0:s.guides_img,height:"180px"}),Object(h.jsxs)(y.a.Body,{children:[Object(h.jsx)(y.a.Title,{children:null===(a=c[t])||void 0===a?void 0:a.name}),Object(h.jsx)(y.a.Text,{children:(null===(r=c[t])||void 0===r?void 0:r.description.slice(0,99))+"..."}),Object(h.jsx)("a",{href:"/guides/".concat(null===(n=c[t])||void 0===n?void 0:n.guides_id),children:Object(h.jsx)(S.a,{variant:"outline-dark",children:"Check it out"})})]})]})})}))}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{style:{"border-top":"1px solid lightgrey",margin:15},children:"Hello"})]})},w=c(11),E=function(){return Object(h.jsx)(w.a,{children:Object(h.jsxs)(f.a,{style:{border:"1px solid ",padding:20,margin:25,"box-shadow":"1px 2px lightgrey","border-radius":5},children:[Object(h.jsxs)(I.a,{children:["25K ",Object(h.jsx)("br",{}),"Steps Created"]}),Object(h.jsxs)(I.a,{children:["8000 ",Object(h.jsx)("br",{})," Reviews"]}),Object(h.jsxs)(I.a,{children:["11K ",Object(h.jsx)("br",{}),"Successes"]})]})})},k=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(O,{})}),Object(h.jsxs)(w.a,{children:[Object(h.jsxs)("h3",{style:{margin:20},children:["Giving everyone the ability to be creative ",Object(h.jsx)("br",{})," with their hands!"]}),Object(h.jsx)(m,{})]}),Object(h.jsx)(w.a,{children:Object(h.jsx)(E,{})}),Object(h.jsx)(w.a,{children:Object(h.jsx)(T,{})})]})};function C(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"About"})})}function N(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("div",{class:"container col-md-4",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("USERNAME",e.currentTarget.username.value),console.log("Password",e.currentTarget.password.value),u.a.post("/api/users/login",{username:e.currentTarget.username.value,password:e.currentTarget.password.value}).then((function(e){console.log(e.data.authenticated),console.log(e.data.message),a(e.data.authenticated),e.data.authenticated&&(window.localStorage.setItem("token",e.data.token),setTimeout((function(){window.location.replace("/")}),1300))}))},children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"username",children:"Username"}),Object(h.jsx)("input",{type:"username",class:"form-control",id:"username",placeholder:"Enter Username"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control ",id:"password",placeholder:"Enter Password"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"}),Object(h.jsx)("br",{})]}),0===c?Object(h.jsx)("br",{}):!0===c?Object(h.jsx)("div",{class:"alert alert-success",role:"alert",children:"Login is successful!"}):Object(h.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Username or Password is invalid."})]})]})}function L(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(null),n=Object(l.a)(r,2),i=n[0],o=n[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsxs)("div",{class:"container col-md-4",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("USERNAME",e.currentTarget.username.value),console.log("EMAIL",e.currentTarget.email.value),console.log("Password",e.currentTarget.password.value),console.log("profileimg",e.currentTarget.profileimg.value),u.a.post("/api/users/signup",{username:e.currentTarget.username.value,email:e.currentTarget.email.value,password:e.currentTarget.password.value,profileimg:e.currentTarget.profileimg.value}).then((function(e){console.log("Auth",e.data.authenticated),console.log("Message",e.data.message),e.data.authenticated?(window.localStorage.setItem("token",e.data.token),a(e.data.authenticated),setTimeout((function(){window.location.replace("/")}),1300)):(a(e.data.authenticated),o(e.data.message))}))},children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"username",children:"Username"}),Object(h.jsx)("input",{type:"username",class:"form-control",id:"username",placeholder:"Enter Username"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter Email"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control ",id:"password",placeholder:"Enter Password"})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"profileimg",children:"Profile Image"}),Object(h.jsx)("input",{type:"text",class:"form-control",id:"profileimg",placeholder:"Upload Profile Image"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"}),Object(h.jsx)("br",{})]}),0===c?Object(h.jsx)("br",{}):!0===c?Object(h.jsx)("div",{class:"alert alert-success",role:"alert",children:"Sign Up is successful!"}):Object(h.jsx)("div",{class:"alert alert-danger",role:"alert",children:i})]})]})}function D(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(w.a,{children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("p",{children:"All Categories"})}),Object(h.jsx)(f.a,{children:Object(h.jsx)("p",{children:"All Listings"})}),Object(h.jsx)(f.a,{children:Object(h.jsx)("p",{children:"Highest Ratings"})}),Object(h.jsx)(f.a,{children:Object(h.jsx)("p",{children:"Most Success"})})]})]})}var P=function(){var e,t=Object(s.useContext)(d),c=Object(o.f)();b();var a=null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.authenticated;return console.log("CONTEXT 2",t),console.log("CONTEXT 3",a),!1===a?(console.log("IM NOT LOGGED IN"),c("/login")):console.log("IM LOGGED IN"),Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(w.a,{children:Object(h.jsx)(f.a,{})})]})},R=c(39),G=c(30),A=c(12),U=c(10),_=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{children:Object(h.jsxs)(U.a,{onSubmit:function(t){t.preventDefault(),console.log(t.currentTarget),console.log(t.currentTarget.rating.value),console.log(t.currentTarget.clarity.value),console.log(t.currentTarget.success.value),console.log(t.currentTarget.comment.value),console.log(t.currentTarget.difficulties.value),u.a.post("/api/reviews",{users_id:e.user,guides_id:e.guide,rating:t.currentTarget.rating.value,clarity:t.currentTarget.clarity.value,success:t.currentTarget.success.value,comment:t.currentTarget.comment.value,difficulties:t.currentTarget.difficulties.value})},children:[Object(h.jsxs)(f.a,{className:"g-2-center",children:[Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"rating",label:"Works with selects",children:Object(h.jsxs)(U.a.Select,{"aria-label":"Floating label select example",required:!0,children:[Object(h.jsx)("option",{selected:!0,disabled:!0,value:"",children:"How good was the guide?"}),Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"})]})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"clarity",label:"Works with selects",children:Object(h.jsxs)(U.a.Select,{"aria-label":"Floating label select example",required:!0,children:[Object(h.jsx)("option",{selected:!0,disabled:!0,value:"",children:"How clear was the guide?"}),Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"})]})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"success",label:"Works with selects",children:Object(h.jsxs)(U.a.Control,{required:!0,as:"select",children:[Object(h.jsx)("option",{selected:!0,disabled:!0,value:"",children:"Was it a success?"}),Object(h.jsx)("option",{value:"true",children:"Yes"}),Object(h.jsx)("option",{value:"false",children:"No"})]})})})]}),Object(h.jsx)("br",{}),Object(h.jsxs)(f.a,{className:"g-2",children:[Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"comment",label:"Comments",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"difficulties",label:"Difficulties Faced",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})},q=function(){var e,t,c=Object(o.g)().id,a=Object(s.useState)(null),r=Object(l.a)(a,2),n=r[0],i=r[1],j=Object(s.useState)(null),x=Object(l.a)(j,2),v=x[0],m=x[1],y=Object(s.useState)([]),S=Object(l.a)(y,2),T=S[0],E=S[1];console.log("ID OF GUIDE",c);var k=Object(s.useContext)(d);b();var C=null===k||void 0===k||null===(e=k.user)||void 0===e?void 0:e.authenticated,N=null===k||void 0===k||null===(t=k.user)||void 0===t?void 0:t.userInfo;return Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(g.a.mark((function e(t){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="/api/guides/".concat(t),e.next=3,u.a.get(c);case 3:s=e.sent,console.log("GUIDE and STEPS DATA",s),i(s.data.guideData),m(s.data.stepData),E(s.data.reviewData);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(c)}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(w.a,{children:Object(h.jsx)(f.a,{children:Object(h.jsx)("img",{src:null===n||void 0===n?void 0:n.guides_img,alt:"",style:{height:400,margin:20},fluid:!0})})}),Object(h.jsx)(w.a,{children:Object(h.jsxs)(f.a,{style:{border:"1px solid lightgrey",padding:20,margin:25},children:[Object(h.jsxs)(I.a,{children:[null===n||void 0===n?void 0:n.difficulty,"/5 ",Object(h.jsx)("br",{}),Object(h.jsx)("h5",{children:"Difficulty Level"})]}),Object(h.jsxs)(I.a,{children:[null===n||void 0===n?void 0:n.time_taken," Hour ",Object(h.jsx)("br",{}),Object(h.jsx)("h5",{children:"Time Taken"})]}),Object(h.jsxs)(I.a,{children:["4/5",Object(h.jsx)("br",{}),Object(h.jsx)("h5",{children:"Overall Rating"})]})]})}),v?v.map((function(e){return Object(h.jsx)(w.a,{children:Object(h.jsxs)(f.a,{style:{margin:20,padding:20},className:"bg-light border",children:[Object(h.jsxs)("h5",{children:["Step ",null===e||void 0===e?void 0:e.step]}),Object(h.jsx)(I.a,{lg:"5",children:Object(h.jsx)(G.a,{src:null===e||void 0===e?void 0:e.steps_img,alt:"",style:{height:200,width:200}})}),Object(h.jsx)(I.a,{lg:"6",style:{display:"flex",justifyContent:"center"},children:Object(h.jsxs)(R.a,{gap:4,style:{margin:20},children:[Object(h.jsxs)("div",{children:["TITLE: ",null===e||void 0===e?void 0:e.title]}),Object(h.jsxs)("div",{children:["DESCRIPTION: ",null===e||void 0===e?void 0:e.description]})]})})]})})})):console.log("MISSING"),Object(h.jsx)("h5",{children:"Reviews and Feedback"}),T.map((function(e,t){return Object(h.jsxs)(w.a,{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("h6",{children:["Review ",t+1]}),Object(h.jsxs)(f.a,{className:"g-2",style:{border:"2px solid lightgreen",padding:20,margin:25,display:"flex",justifyContent:"center"},children:[Object(h.jsxs)(I.a,{md:!0,children:[T[t].rating,"/5 ",Object(h.jsx)("br",{})," Rating"]}),Object(h.jsxs)(I.a,{md:!0,children:[T[t].clarity,"/5 ",Object(h.jsx)("br",{})," Clarity"]}),Object(h.jsxs)(I.a,{md:!0,children:[T[t].success," ",Object(h.jsx)("br",{})," Succeed"]})]}),Object(h.jsxs)(f.a,{className:"g-2",style:{border:"2px solid lightgreen",padding:20,margin:25,display:"flex",justifyContent:"center"},children:[Object(h.jsx)(I.a,{md:!0,children:T[t].comment}),Object(h.jsx)(I.a,{md:!0,children:T[t].difficulties})]})]})})),Object(h.jsx)(w.a,{children:!0===C?Object(h.jsxs)(w.a,{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h6",{children:"Your Review"}),Object(h.jsx)("br",{}),Object(h.jsx)(_,{user:N,guide:c})]}):Object(h.jsx)("p",{children:"Need to be logged in to give feedback"})})]})};c(78).config();var F=function(){var e,t,c=Object(s.useContext)(d),a=Object(o.f)(),r=Object(s.useState)([1]),n=Object(l.a)(r,2),i=n[0],j=n[1],x=Object(s.useState)([]),v=Object(l.a)(x,2),m=v[0],y=v[1],T=Object(s.useState)([]),E=Object(l.a)(T,2),k=E[0],C=E[1],N=Object(s.useState)([]),L=Object(l.a)(N,2),D=L[0],P=L[1],R=Object(s.useState)(),_=Object(l.a)(R,2),q=_[0],F=_[1],H=Object(s.useState)(),M=Object(l.a)(H,2),W=(M[0],M[1]);b();var B=null===c||void 0===c||null===(e=c.user)||void 0===e?void 0:e.authenticated,K=null===c||void 0===c||null===(t=c.user)||void 0===t?void 0:t.userInfo;console.log("userId",K),!1===B?(console.log("IM NOT LOGGED IN"),a("/login")):console.log("IM LOGGED IN");var Y=function(){var e=Object(p.a)(g.a.mark((function e(t){var c,s,r,n,l,o,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=t.currentTarget,console.log("LENGTH OF IMAGES",m.image1),console.log("LENGTH OF IMAGES",m.image2),s=1;case 5:if(!(s<i.length+2)){e.next=23;break}return r="image"+s,n="title"+s,l="description"+s,console.log("STEPS STEP","STEP "+s),console.log("STEPS IMAGE",m[r]),e.next=13,X(k[r]);case 13:o=e.sent,console.log("IS THIS THE CLOUDINARY LINK?",o),console.log("STEPS TITLE",c[n].value),console.log("STEPS DESCRIPTION",c[l].value),D.push({step:s,title:c[n].value,description:c[l].value,steps_img:o}),P(D),console.log("STEPS SENT",D);case 20:s++,e.next=5;break;case 23:return console.log("IS THIS THE GUIDE IMAGE",k.guideImage),e.next=26,X(k.guideImage);case 26:d=e.sent,F({users_id:K,name:c.guideTitle.value,description:c.guideDescription.value,tools_required:c.guideToolsRequired.value,parts_required:c.guidePartsRequired.value,difficulty:c.guideDifficulty.value,time_taken:c.guideTimeTaken.value,guides_img:d}),a("/");case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/guides/new",e.next=3,u.a.post("/api/guides/new",{newGuide:q,newSteps:D});case 3:t=e.sent,console.log("RESPONSE GUIDE NEW",t),W(t.data.newGuideId);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[q]);var V=function(e){var t,c,s;e.preventDefault(),console.log("IS THIS THE BLOB?",null===(t=e.target)||void 0===t?void 0:t.files[0]),console.log(e.target.id);var a=URL.createObjectURL(null===(c=e.target)||void 0===c?void 0:c.files[0]);m[e.target.id]=a,k[e.target.id]=null===(s=e.target)||void 0===s?void 0:s.files[0],y(m),C(k),console.log("PREVIEW",m),console.log(" IMAGEFILE PREVIEW",k)},X=function(){var e=Object(p.a)(g.a.mark((function e(t){var c,s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new FormData,console.log("IS THIS FILE A BLOB",t),s.append("file",t),s.append("upload_preset",null!==(c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CLOUDINARY_API)&&void 0!==c?c:"qncyjvkz"),e.next=6,u.a.post("https://api.cloudinary.com/v1_1/desertkrieg/image/upload",s);case 6:return a=e.sent,e.abrupt("return",a.data.secure_url);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(w.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(w.a,{"mb-2":!0,children:Object(h.jsx)(f.a,{children:Object(h.jsxs)(U.a,{onSubmit:Y,children:[Object(h.jsx)("br",{}),Object(h.jsx)("h4",{children:"Start your new guide "}),Object(h.jsx)(f.a,{className:"g-2",style:{margin:20,display:"flex",justifycontent:"center"},children:Object(h.jsx)(I.a,{md:!0,children:Object(h.jsxs)(U.a.Group,{controlId:"guideImage",className:"",onChange:V,children:[Object(h.jsx)(G.a,{src:m.guideImage,alt:"",style:{height:400,width:1100,margin:20}}),Object(h.jsx)(U.a.Control,{type:"file",style:{width:300}})]})})}),Object(h.jsxs)(f.a,{className:"g-2",style:{margin:20,display:"flex",justifycontent:"center"},children:[Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guideTitle",label:"Guide Title",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guideDescription",label:"Guide Desription",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})})]}),Object(h.jsxs)(f.a,{className:"g-2",style:{margin:20,display:"flex",justifycontent:"center"},children:[Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guideDifficulty",label:"Works with selects",required:!0,children:Object(h.jsxs)(U.a.Select,{"aria-label":"Floating label select example",required:!0,children:[Object(h.jsx)("option",{selected:!0,disabled:!0,value:"",children:"How difficult is this guide?"}),Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"})]})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guideTimeTaken",label:"Works with selects",children:Object(h.jsxs)(U.a.Select,{"aria-label":"Floating label select example",required:!0,children:[Object(h.jsx)("option",{selected:!0,disabled:!0,value:"",children:"How long did you take?"}),Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"}),Object(h.jsx)("option",{value:"6",children:"6"}),Object(h.jsx)("option",{value:"7",children:"7"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"9",children:"9"}),Object(h.jsx)("option",{value:"10",children:"10"})]})})})]}),Object(h.jsxs)(f.a,{className:"g-2",style:{margin:20,display:"flex",justifycontent:"center"},children:[Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guideToolsRequired",label:"Tools Required",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",required:!0})})}),Object(h.jsx)(I.a,{md:!0,children:Object(h.jsx)(A.a,{controlId:"guidePartsRequired",label:"Parts Required",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",required:!0})})})]}),Object(h.jsx)("h5",{children:"Step 1"}),Object(h.jsxs)(f.a,{className:"g-2",style:{margin:20,padding:40,"background-color":"#F7F7F7","border-radius":"3%"},children:[Object(h.jsxs)(I.a,{md:!0,children:[Object(h.jsxs)(U.a.Group,{controlId:"image1",className:"mb-3",onChange:V,children:[Object(h.jsx)(U.a.Label,{children:"Upload your image"}),Object(h.jsx)(U.a.Control,{type:"file"})]}),Object(h.jsx)(G.a,{src:m.image1,alt:"",style:{height:140,width:250}})]}),Object(h.jsxs)(I.a,{md:!0,children:[Object(h.jsx)(A.a,{controlId:"title1",label:"Title",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})}),Object(h.jsx)("br",{}),Object(h.jsx)(A.a,{controlId:"description1",label:"Description",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})]})]}),i.map((function(e,t){return Object(h.jsxs)(f.a,{className:"g-2",style:{margin:20,padding:40,"background-color":"#F7F7F7","border-radius":"3%"},children:[Object(h.jsxs)("h5",{children:["Step ",parseInt(t)+2]}),Object(h.jsxs)(I.a,{md:!0,children:[Object(h.jsxs)(U.a.Group,{controlId:"image"+(parseInt(t)+2),className:"mb-3",onChange:V,children:[Object(h.jsx)(U.a.Label,{children:"Upload your image"}),Object(h.jsx)(U.a.Control,{type:"file"})]}),Object(h.jsx)("img",{src:m["image"+(parseInt(t)+2)],alt:"",style:{height:140,width:250}})]}),Object(h.jsxs)(I.a,{md:!0,children:[Object(h.jsx)(A.a,{controlId:"title"+(parseInt(t)+2),label:"Title",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})}),Object(h.jsx)("br",{}),Object(h.jsx)(A.a,{controlId:"description"+(parseInt(t)+2),label:"Description",children:Object(h.jsx)(U.a.Control,{as:"textarea",placeholder:"Leave your feedback here",style:{height:"100px"},required:!0})})]})]})})),Object(h.jsx)("br",{}),Object(h.jsx)(S.a,{onClick:function(){i.push(1),j(i)},style:{height:50,width:200},variant:"outline-success",children:"Add Steps"}),Object(h.jsx)(S.a,{onClick:function(){i.pop(),j(i)},style:{height:50,width:200},variant:"outline-success",children:"Minus Steps"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",style:{height:50,width:200},children:"Submit"})]})})})]})};var H=function(){var e=Object(s.useState)({authenticated:!1,userInfo:{}}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(h.jsx)(d.Provider,{value:{user:c,setUser:a},children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(i.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(k,{})}),Object(h.jsx)(o.a,{path:"/login",element:Object(h.jsx)(N,{})}),Object(h.jsx)(o.a,{path:"/about",element:Object(h.jsx)(C,{})}),Object(h.jsx)(o.a,{path:"/signup",element:Object(h.jsx)(L,{})}),Object(h.jsx)(o.a,{path:"/guides",element:Object(h.jsx)(D,{})}),Object(h.jsx)(o.a,{path:"/guides/new",element:Object(h.jsx)(F,{})}),Object(h.jsx)(o.a,{path:"/guides/:id",element:Object(h.jsx)(q,{})}),Object(h.jsx)(o.a,{path:"/account",element:Object(h.jsx)(P,{})})]})})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),M()}},[[81,1,2]]]);
//# sourceMappingURL=main.01f8f33e.chunk.js.map