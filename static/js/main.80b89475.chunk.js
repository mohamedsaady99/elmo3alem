(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(22),a=c.n(r),i=(c(70),c(57)),j=c(12),o=c(13),l=c(15),d=c(14),b=c(10),h=c(9),O=(c(71),c(32)),x=c.n(O),m=c(35),u=c(23),p=c(125),v=c(59),y=(c(73),c.p+"static/media/logo.9203f6c5.svg"),g=(c(74),c(2)),f=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"footer ",children:[Object(g.jsxs)("div",{className:"row no-gutters",children:[Object(g.jsxs)("div",{className:" col-md-6  col-sm-12 col-12",children:[Object(g.jsx)("img",{src:y,alt:"Logo image"}),Object(g.jsx)("span",{className:"logo",children:" \u0627\u0644\u0645\u064f\u0639\u064e\u0644\u0651\u0650\u0645"})]}),Object(g.jsxs)("div",{className:"col-md-6  col-sm-12 col-12",children:[Object(g.jsx)("p",{children:"mr.mohammed@science.com "}),Object(g.jsx)("p",{children:"01099899899"})]})]}),Object(g.jsx)("div",{className:"social",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"http://www.facebook.com",children:[Object(g.jsx)("i",{className:"fab fa-facebook-f"})," "]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"http://www.twitter.com",children:[Object(g.jsx)("i",{className:"fab fa-twitter"})," "]})}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)("a",{href:"http://www.youtube.com",children:Object(g.jsx)("i",{className:"fab fa-youtube"})})]})]})}),Object(g.jsx)("div",{className:"copy-writes",children:"\u062c\u0645\u064a\u0639 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u062d\u062a\u0648\u064a\u0627\u062a \u0645\u062d\u0641\u0648\u0638\u0629 \u0644\u0644\u0623\u0633\u062a\u0627\u0630 \u0645\u062d\u0645\u062f \u0623\u062d\u0645\u062f 2021 - 2022"})]})}}]),c}(s.Component),w=(c(76),c(58)),N=c.n(w),C=c(21),k=c.n(C),L=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={fullName:"",password:"",mobile:0,fatherMobile:0,fatherJob:"",gender:0,userName:"",state:"",stateId:1,email:"",city:"",classRoom:"",companyId:74,branchId:176,schoolStagesId:1},e.handleChange=function(t){e.setState(Object(u.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=Object(m.a)(x.a.mark((function t(c){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,N.a.post("Enter URL HERE ",e.state).then((function(t){"fail"==t.data.msgType?alert(t.data.msg):e.props.history.replace("/")}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(c,[{key:"render",value:function(){var e;this.props.students;return Object(g.jsxs)("div",{className:"signUp",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f "}),Object(g.jsxs)("h6",{children:[" \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629 ",Object(g.jsx)("span",{children:"*"})]})]}),Object(g.jsxs)(p.a,{className:"container",onSubmit:this.handleSubmit,children:[Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"city",children:[Object(g.jsx)(p.a.Label,{children:"\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0629  "}),Object(g.jsx)(p.a.Control,{as:"select",custom:!0,name:"city",value:this.state.city,onChange:this.handleChange,required:!0,children:["","\u0627\u0644\u0642\u0627\u0647\u0631\u0629","\u0627\u0644\u062c\u064a\u0632\u0629","\u0627\u0644\u0625\u0633\u0643\u0646\u062f\u0631\u064a\u0629","\u0623\u0633\u0648\u0627\u0646","\u0628\u0648\u0631\u0633\u0639\u064a\u062f","\u0627\u0644\u0625\u0633\u0645\u0627\u0639\u064a\u0644\u064a\u0629","\u0627\u0644\u0633\u0648\u064a\u0633","\u0627\u0644\u0634\u0631\u0642\u064a\u0629","\u0634\u0645\u0627\u0644 \u0633\u064a\u0646\u0627\u0621","\u062c\u0646\u0648\u0628 \u0633\u064a\u0646\u0627\u0621","\u0623\u0633\u064a\u0648\u0637","\u0627\u0644\u0623\u0642\u0635\u0631","\u0627\u0644\u0648\u0627\u062f\u064a \u0627\u0644\u062c\u062f\u064a\u062f","\u0627\u0644\u0645\u0646\u064a\u0627","\u0627\u0644\u0645\u0646\u0648\u0641\u064a\u0629","\u0645\u0637\u0631\u0648\u062d","\u0642\u0646\u0627","\u0643\u0641\u0631 \u0627\u0644\u0634\u064a\u062e","\u0627\u0644\u0642\u0644\u064a\u0648\u0628\u064a\u0629","\u0627\u0644\u0641\u064a\u0648\u0645","\u0627\u0644\u063a\u0631\u0628\u064a\u0629","\u0633\u0648\u0647\u0627\u062c","\u062f\u0645\u064a\u0627\u0637","\u0627\u0644\u062f\u0642\u0647\u0644\u064a\u0629","\u0628\u0646\u064a \u0633\u0648\u064a\u0641","\u0627\u0644\u0628\u062d\u064a\u0631\u0629","\u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0623\u062d\u0645\u0631"].map((function(e){return Object(g.jsxs)("option",{children:[" ",e]},Math.random())}))})]})}),Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"fullName",children:[Object(g.jsx)(p.a.Label,{children:"   \u0627\u0644\u0627\u0633\u0645 "}),Object(g.jsx)(p.a.Control,{type:"text",name:"fullName",value:this.state.fullName,onChange:this.handleChange,required:!0})]})})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"state",children:[Object(g.jsx)(p.a.Label,{children:"\u0627\u0644\u0645\u0631\u0643\u0632  "}),Object(g.jsx)(p.a.Control,{list:"browsers",type:"text",name:"state",value:this.state.state,onChange:this.handleChange,required:!0}),Object(g.jsx)("datalist",{id:"browsers",children:["\u062f\u0633\u0648\u0642","\u0641\u0648\u0647 "," \u0645\u0637\u0648\u0628\u0633","\u0642\u0644\u064a\u0646 "," \u0633\u064a\u062f\u0649 \u0633\u0627\u0644\u0645"," \u0627\u0644\u0631\u064a\u0627\u0636","\u0628\u064a\u0644\u0627 ","\u0627\u0644\u062d\u0627\u0645\u0648\u0644 ","\u0627\u0644\u0628\u0631\u0644\u0633 "," \u0627\u0644\u0645\u0639\u0627\u062f\u0649","\u0627\u0644\u0642\u0627\u0647\u0631\u0629","\u0627\u0644\u062c\u064a\u0632\u0629","\u0627\u0644\u0625\u0633\u0643\u0646\u062f\u0631\u064a\u0629","\u0623\u0633\u0648\u0627\u0646","\u0628\u0648\u0631\u0633\u0639\u064a\u062f","\u0627\u0644\u0625\u0633\u0645\u0627\u0639\u064a\u0644\u064a\u0629","\u0627\u0644\u0633\u0648\u064a\u0633","\u0627\u0644\u0634\u0631\u0642\u064a\u0629","\u0634\u0645\u0627\u0644 \u0633\u064a\u0646\u0627\u0621","\u062c\u0646\u0648\u0628 \u0633\u064a\u0646\u0627\u0621","\u0623\u0633\u064a\u0648\u0637","\u0627\u0644\u0623\u0642\u0635\u0631","\u0627\u0644\u0648\u0627\u062f\u064a \u0627\u0644\u062c\u062f\u064a\u062f","\u0627\u0644\u0645\u0646\u064a\u0627","\u0627\u0644\u0645\u0646\u0648\u0641\u064a\u0629","\u0645\u0637\u0631\u0648\u062d","\u0642\u0646\u0627","\u0643\u0641\u0631 \u0627\u0644\u0634\u064a\u062e","\u0627\u0644\u0642\u0644\u064a\u0648\u0628\u064a\u0629","\u0627\u0644\u0641\u064a\u0648\u0645","\u0627\u0644\u063a\u0631\u0628\u064a\u0629","\u0633\u0648\u0647\u0627\u062c","\u062f\u0645\u064a\u0627\u0637","\u0627\u0644\u062f\u0642\u0647\u0644\u064a\u0629","\u0628\u0646\u064a \u0633\u0648\u064a\u0641","\u0627\u0644\u0628\u062d\u064a\u0631\u0629","\u0627\u0644\u0628\u062d\u0631 \u0627\u0644\u0623\u062d\u0645\u0631"].map((function(e){return Object(g.jsx)("option",{value:e},Math.random())}))})]})}),Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"email",children:[Object(g.jsx)(p.a.Label,{children:"  \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u0649"}),Object(g.jsx)(p.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0})]})})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"gender",children:[Object(g.jsx)(p.a.Label,{children:" \u0627\u0644\u0646\u0648\u0639   "}),Object(g.jsxs)(p.a.Control,{as:"select",name:"gender",value:this.state.gender,onChange:this.handleChange,custom:!0,required:!0,children:[Object(g.jsx)("option",{children:" "}),Object(g.jsx)("option",{value:"1",children:"\u0630\u0643\u0631 "}),Object(g.jsx)("option",{value:"2",children:"  \u0623\u0646\u062b\u0649  "})]})]})}),Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"mobile",children:[Object(g.jsx)(p.a.Label,{children:"\u062a\u0644\u064a\u0641\u0648\u0646 \u0627\u0644\u0637\u0627\u0644\u0628 "}),Object(g.jsx)(p.a.Control,{type:"int",name:"mobile",value:this.state.mobile,onChange:this.handleChange,required:!0})]})})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"classRoom",children:[Object(g.jsx)(p.a.Label,{children:"\u0627\u0644\u0635\u0641 \u0627\u0644\u062f\u0631\u0627\u0633\u0649   "}),Object(g.jsxs)(p.a.Control,{as:"select",name:"classRoom",value:this.state.classRoom,onChange:this.handleChange,custom:!0,required:!0,children:[Object(g.jsx)("option",{children:"   "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u0623\u0648\u0644 \u0627\u0644\u0627\u0639\u062f\u0627\u062f\u0649 "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u062b\u0627\u0646\u0649 \u0627\u0644\u0627\u0639\u062f\u0627\u062f\u0649 "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0627\u0644\u0627\u0639\u062f\u0627\u062f\u0649 "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u0623\u0648\u0644 \u0627\u0644\u062b\u0627\u0646\u0648\u0649 "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u062b\u0627\u0646\u0649 \u0627\u0644\u062b\u0627\u0646\u0648\u0649 "}),Object(g.jsx)("option",{children:" \u0627\u0644\u0635\u0641 \u0627\u0644\u062b\u0627\u0644\u062b \u0627\u0644\u062b\u0627\u0646\u0648\u0649 "})]})]})}),Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"fatherMobile",children:[Object(g.jsx)(p.a.Label,{children:"\u062a\u0644\u064a\u0641\u0648\u0646 \u0648\u0644\u0649 \u0627\u0644\u0623\u0645\u0631 "}),Object(g.jsx)(p.a.Control,{type:"text",name:"fatherMobile",value:this.state.fatherMobile,onChange:this.handleChange,required:!0})]})})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"userName",children:[Object(g.jsx)(p.a.Label,{children:"  \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "}),Object(g.jsx)(p.a.Control,{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,required:!0})]})}),Object(g.jsx)(v.a,{xs:12,sm:6,children:Object(g.jsxs)(p.a.Group,{controlId:"fatherJob",children:[Object(g.jsx)(p.a.Label,{children:"\u0648\u0638\u064a\u0641\u0629 \u0648\u0644\u0649 \u0627\u0644\u0623\u0645\u0631 "}),Object(g.jsx)(p.a.Control,{type:"text",name:"fatherJob",value:this.state.fatherJob,onChange:this.handleChange,required:!0})]})})]}),Object(g.jsxs)(p.a.Row,{children:[Object(g.jsx)(v.a,(e={xs:{order:2}},Object(u.a)(e,"xs",12),Object(u.a)(e,"md",{order:2}),Object(u.a)(e,"sm",12),Object(u.a)(e,"children",Object(g.jsxs)(p.a.Group,{controlId:"password",children:[Object(g.jsx)(p.a.Label,{children:"  \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u0649 "}),Object(g.jsx)(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})]})),e)),Object(g.jsx)(v.a,{xs:{order:1},sm:12,md:{order:1},className:"mb-5",children:Object(g.jsx)(p.a.Group,{children:Object(g.jsx)(p.a.Control,{type:"submit",className:"submit-btn",value:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 "})})})]})]}),Object(g.jsx)(f,{})]})}}]),c}(s.Component),I=(c(98),c(124)),_=c(126),B=c(28),G=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(I.a,{collapseOnSelect:!0,expand:"lg",bg:"light",className:"container",children:[Object(g.jsx)(I.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(I.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(_.a,{children:[Object(g.jsx)(B.LinkContainer,{to:"/sign-up",children:Object(g.jsx)(_.a.Link,{id:"signUp",className:"nav-link signUp underline-from-center",children:" \u062a\u0633\u062c\u064a\u0644 \u062c\u062f\u064a\u062f"})}),Object(g.jsx)(B.LinkContainer,{to:"/sign-in",children:Object(g.jsx)(_.a.Link,{id:"signIn",className:"nav-link  underline-from-center",children:" \u062a\u0633\u062c\u064a\u0644 \u062f\u062e\u0648\u0644"})}),Object(g.jsx)(B.LinkContainer,{to:"/free-videos",children:Object(g.jsx)(_.a.Link,{className:"nav-link third-nav underline-from-center",children:"  \u0645\u062d\u0627\u0636\u0631\u0627\u062a \u0645\u062c\u0627\u0646\u064a\u0629"})}),Object(g.jsx)(B.LinkContainer,{to:"/explanation-lectures",children:Object(g.jsx)(_.a.Link,{className:"nav-link second-nav underline-from-center",children:"\u0645\u062d\u0627\u0636\u0631\u0627\u062a \u0627\u0644\u0634\u0631\u062d"})}),Object(g.jsx)(B.LinkContainer,{to:"/",children:Object(g.jsx)(_.a.Link,{className:"nav-link first-nav  underline-from-center ",children:" \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"})})]})}),Object(g.jsx)(B.LinkContainer,{to:"/",children:Object(g.jsxs)(I.a.Brand,{children:[Object(g.jsx)("img",{src:y}),"\u0627\u0644\u0645\u064f\u0639\u064e\u0644\u0651\u0650\u0645"]})})]})})}}]),c}(s.Component),T=(c(102),c(103),c.p+"static/media/video1.262614b8.png"),q=c.p+"static/media/video2.e18e699e.png",R=c.p+"static/media/video3.c48ac724.png",S=c.p+"static/media/video.5bbe05c9.webm",A=c(121),M=c(127),J=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){k()("#myvideo1,#myvideo2,#myvideo3").hover((function(e){k()("#myvideo1,#myvideo2,#myvideo3").css("cursor","pointer"),"mouseenter"===e.type?k()(this).attr("controls",""):"mouseleave"===e.type&&k()(this).removeAttr("controls")}))}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:" free-videos ",children:[Object(g.jsxs)("div",{className:" container",children:[Object(g.jsx)("h3",{children:"\u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0645\u062c\u0627\u0646\u064a\u0629"}),Object(g.jsx)("hr",{}),Object(g.jsxs)(A.a,{className:"container m-auto",children:[Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:T,id:"myvideo1",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:q,id:"myvideo2",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0627\u0644\u062f\u0639\u0627\u0645\u0629 \u0641\u0649 \u0627\u0644\u0627\u0646\u0633\u0627\u0646 / \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u0649"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:R,id:"myvideo3",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]})]}),Object(g.jsx)(b.NavLink,{className:"btn btn-link",to:"/free-videos",children:" \u0643\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"})]}),Object(g.jsx)(f,{})]})}}]),c}(s.Component),E=(c(104),function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleChange=function(t){e.setState(Object(u.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(o.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"sign-In",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"  \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 "}),Object(g.jsxs)("h6",{children:[" \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629 ",Object(g.jsx)("span",{children:"*"})]})]}),Object(g.jsx)(p.a,{className:"container",onSubmit:this.handleSubmit,children:Object(g.jsxs)(v.a,{lg:6,xl:6,className:"m-auto",children:[Object(g.jsxs)(p.a.Group,{controlId:"email",children:[Object(g.jsx)(p.a.Label,{children:"  \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u0649"}),Object(g.jsx)(p.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,required:!0})]}),Object(g.jsxs)(p.a.Group,{controlId:"password",children:[Object(g.jsx)(p.a.Label,{children:"  \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u0649 "}),Object(g.jsx)(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})]}),Object(g.jsx)(p.a.Group,{controlId:"userName",children:Object(g.jsx)(p.a.Control,{type:"submit",className:"submit mb-5",value:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 "})})]})}),Object(g.jsx)(f,{})]})}}]),c}(s.Component)),U=(c(105),c(106),c.p+"static/media/about.a29a39fd.png"),D=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"container about",children:[Object(g.jsx)("h3",{children:"\u0639\u0646 \u0627\u0644\u0623\u0633\u062a\u0627\u0630 \u0645\u062d\u0645\u062f \u0623\u062d\u0645\u062f "}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"row no-gutters",children:[Object(g.jsx)("div",{className:" col-md-3 col-sm-12 col-12 first",children:Object(g.jsx)("img",{src:U})}),Object(g.jsx)("div",{className:" col-md-9  col-sm-12 col-12",children:Object(g.jsxs)("p",{children:["\u0647\u0646\u0627\u0643 ",Object(g.jsx)("b",{children:"\u062d\u0642\u064a\u0642\u0629"})," \u0645\u062b\u0628\u062a\u0629 \u0645\u0646\u0630 \u0632\u0645\u0646 \u0637\u0648\u064a\u0644 \u0648\u0647\u064a \u0623\u0646 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0635\u0641\u062d\u0629 \u0645\u0627 \u0633\u064a\u0644\u0647\u064a \u0627\u0644\u0642\u0627\u0631\u0626 \u0639\u0646 \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u062e\u0627\u0631\u062c\u064a \u0644\u0644\u0646\u0635 \u0623\u0648 \u0634\u0643\u0644 \u062a\u0648\u0636\u0639 \u0627\u0644\u0641\u0642\u0631\u0627\u062a \u0641\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u064a \u064a\u0642\u0631\u0623\u0647\u0627. \u0648\u0644\u0630\u0644\u0643 \u064a\u062a\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0637\u0631\u064a\u0642\u0629 \u0644\u0648\u0631\u064a\u0645  ",Object(g.jsx)("b",{children:"\u0625\u064a\u0628\u0633\u0648\u0645"}),' \u0644\u0623\u0646\u0647\u0627 \u062a\u0639\u0637\u064a \u062a\u0648\u0632\u064a\u0639\u0627\u064e \u0637\u0628\u064a\u0639\u064a\u0627\u064e -\u0625\u0644\u0649 \u062d\u062f \u0645\u0627- \u0644\u0644\u0623\u062d\u0631\u0641 \u0639\u0648\u0636\u0627\u064b \u0639\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 "\u0647\u0646\u0627 \u064a\u0648\u062c\u062f \u0645\u062d\u062a\u0648\u0649 \u0646\u0635\u064a\u060c \u0647\u0646\u0627 \u064a\u0648\u062c\u062f \u0645\u062d\u062a\u0648\u0649 \u0646\u0635\u064a" \u0641\u062a\u062c\u0639\u0644\u0647\u0627 \u062a\u0628\u062f\u0648 (\u0623\u064a \u0627\u0644\u0623\u062d\u0631\u0641) \u0648\u0643\u0623\u0646\u0647\u0627 \u0646\u0635 ',Object(g.jsx)("b",{children:"\u0645\u0642\u0631\u0648\u0621"}),"."]})})]})]})}}]),c}(s.Component),z=c(122),F=c(123),H=c.p+"static/media/slider.bac32b70.png",K=c(17),P=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(K.c,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1 ",children:Object(g.jsxs)(K.e,{children:[Object(g.jsxs)(K.f,{itemId:"1",children:[Object(g.jsxs)(K.m,{children:[Object(g.jsx)("img",{className:"d-block w-100",src:H,alt:"First slide"}),Object(g.jsx)(K.i,{overlay:"black-strong"})]}),Object(g.jsx)(K.d,{children:Object(g.jsx)("h3",{className:"h3-responsive",children:"\u0627\u062f\u0631\u0633 \u0639\u0644\u0648\u0645 \u0627\u0648\u0646\u0644\u0627\u064a\u0646 \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0627\u0630 \u0645\u062d\u0645\u062f \u0623\u062d\u0645\u062f"})})]}),Object(g.jsxs)(K.f,{itemId:"2",children:[Object(g.jsxs)(K.m,{children:[Object(g.jsx)("img",{className:"d-block w-100",src:H,alt:"Second slide"}),Object(g.jsx)(K.i,{overlay:"black-strong"})]}),Object(g.jsx)(K.d,{children:Object(g.jsx)("h3",{className:"h3-responsive",children:"\u0627\u062f\u0631\u0633 \u0639\u0644\u0648\u0645 \u0627\u0648\u0646\u0644\u0627\u064a\u0646 \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0627\u0630 \u0645\u062d\u0645\u062f \u0623\u062d\u0645\u062f"})})]}),Object(g.jsxs)(K.f,{itemId:"3",children:[Object(g.jsxs)(K.m,{children:[Object(g.jsx)("img",{className:"d-block w-100",src:H,alt:"Third slide"}),Object(g.jsx)(K.i,{overlay:"black-strong"})]}),Object(g.jsx)(K.d,{children:Object(g.jsx)("h3",{className:"h3-responsive",children:"\u0627\u062f\u0631\u0633 \u0639\u0644\u0648\u0645 \u0627\u0648\u0646\u0644\u0627\u064a\u0646 \u0645\u0639 \u0627\u0644\u0627\u0633\u062a\u0627\u0630 \u0645\u062d\u0645\u062f \u0623\u062d\u0645\u062f"})})]})]})}),Object(g.jsx)("div",{className:"sign",children:Object(g.jsxs)(z.a,{"aria-label":"Basic example",children:[Object(g.jsx)(F.a,{variant:"secondary",className:"sign-in",children:Object(g.jsxs)(b.NavLink,{to:"/sign-in",children:["  \u0633\u062c\u0644 \u062f\u062e\u0648\u0644\u0643 \u0627\u0644\u0622\u0646 ",Object(g.jsx)("i",{className:"fas fa-sign-in-alt"})]})}),Object(g.jsx)(F.a,{variant:"secondary",className:"sign-up",children:Object(g.jsxs)(b.NavLink,{to:"/sign-up",children:[" \u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f ",Object(g.jsx)("i",{className:"fas fa-user-plus"})]})})]})}),Object(g.jsx)(D,{}),Object(g.jsx)(J,{})]})}}]),c}(s.Component);var Q=function(){return Object(s.useEffect)((function(){k()("#myvideo1,#myvideo2,#myvideo3").hover((function(e){k()("#myvideo1,#myvideo2,#myvideo3").css("cursor","pointer"),"mouseenter"===e.type?k()(this).attr("controls",""):"mouseleave"===e.type&&k()(this).removeAttr("controls")}))}),[]),Object(g.jsxs)("div",{className:" free-videos ",children:[Object(g.jsxs)("div",{className:" container",children:[Object(g.jsx)("h3",{children:"\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a \u0627\u0644\u0634\u0631\u062d"}),Object(g.jsx)("hr",{}),Object(g.jsxs)(A.a,{className:"container m-auto",children:[Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:T,id:"myvideo1",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:q,id:"myvideo2",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0627\u0644\u062f\u0639\u0627\u0645\u0629 \u0641\u0649 \u0627\u0644\u0627\u0646\u0633\u0627\u0646 / \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u0649"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:R,id:"myvideo3",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]})]}),Object(g.jsx)("br",{}),Object(g.jsxs)(A.a,{className:"container m-auto",children:[Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:T,id:"myvideo1",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:q,id:"myvideo2",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0627\u0644\u062f\u0639\u0627\u0645\u0629 \u0641\u0649 \u0627\u0644\u0627\u0646\u0633\u0627\u0646 / \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u0649"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:R,id:"myvideo3",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]})]}),Object(g.jsx)("br",{}),Object(g.jsxs)(A.a,{className:"container m-auto",children:[Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:T,id:"myvideo1",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:q,id:"myvideo2",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0627\u0644\u062f\u0639\u0627\u0645\u0629 \u0641\u0649 \u0627\u0644\u0627\u0646\u0633\u0627\u0646 / \u0627\u0644\u0639\u0645\u0648\u062f \u0627\u0644\u0641\u0642\u0631\u0649"})})]}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)("video",{width:"100%",height:"240",poster:R,id:"myvideo3",children:[Object(g.jsx)("source",{src:S,type:"video/webm"}),Object(g.jsx)("source",{src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",type:"video/mp4"})]}),"    ",Object(g.jsx)(M.a.Body,{children:Object(g.jsx)(M.a.Title,{children:"\u0622\u0644\u064a\u0629 \u0639\u0645\u0644 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062f\u0631\u0627\u0633\u0649 \u0627\u0644\u062c\u062f\u064a\u062f"})})]})]}),Object(g.jsx)(b.NavLink,{className:"btn btn-link",to:"/free-videos",children:" \u0643\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"})]}),Object(g.jsx)(f,{})]})},V=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={students:[]},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(b.BrowserRouter,{children:[Object(g.jsx)(G,{}),Object(g.jsx)(h.d,{exact:!0,path:"/",component:P}),Object(g.jsx)(h.d,{path:"/sign-up",render:function(t){return Object(g.jsx)(L,Object(i.a)({students:e.students},t))}}),Object(g.jsx)(h.d,{path:"/sign-in",component:E}),Object(g.jsx)(h.d,{path:"/free-videos",component:J}),Object(g.jsx)(h.d,{path:"/explanation-lectures",component:Q})]})}}]),c}(s.Component);a.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))},70:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){},98:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.80b89475.chunk.js.map