(this.webpackJsonpreactversion1=this.webpackJsonpreactversion1||[]).push([[0],{118:function(e,t,c){},129:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),n=c(35),r=c.n(n),a=(c(118),c(206)),j=c(188),h=c(205),l=c(203),o=c(213),d=c(208),x=c(200),b=c(187),O=c(209),g=c(97),m=c.n(g),p=c(212),u=c(207),v=c(202),y=c(33),f=c(210),w=c(2);const C=["\ud83d\udce2 Symposium","\u2764\ufe0f Signup","\u26f1\ufe0f Venue","\ud83d\udc69 People","\ud83d\udd51 Schedule","\ud83d\udcd6 Proceedings","\ud83c\udfc6 Prize","\ud83c\udf14 Festival","\ud83d\uddbc\ufe0f Gallery","\ud83d\udcf0 News","\ud83d\udd17 Links"];var k=function(e){const{window:t}=e,[c,s]=i.useState(!1),n=()=>{s((e=>!e))},r=Object(w.jsxs)(a.a,{onClick:n,sx:{textAlign:"center"},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{my:2},children:"MERSIVITY"}),Object(w.jsx)(h.a,{}),Object(w.jsx)(d.a,{children:C.map(((e,t)=>Object(w.jsx)(x.a,{disablePadding:!0,children:Object(w.jsx)(b.a,{component:y.b,to:"/".concat(e.replace(/\s+/g,"-").toLowerCase()),sx:{textAlign:"center"},children:Object(w.jsx)(O.a,{primary:e})})},t)))})]}),g=void 0!==t?()=>t().document.body:void 0;return Object(w.jsxs)(a.a,{sx:{display:"flex"},children:[Object(w.jsx)(j.a,{}),Object(w.jsx)(f.a,{component:"nav",children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(o.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,sx:{mr:2,display:{sm:"none"}},children:Object(w.jsx)(m.a,{})}),Object(w.jsx)(o.a,{color:"inherit",children:Object(w.jsx)(u.a,{variant:"h4",children:"MERSIVITY"})}),Object(w.jsx)(a.a,{sx:{display:{xs:"none",sm:"block"}},children:C.map(((e,t)=>Object(w.jsx)(v.a,{component:y.b,to:"/".concat(e.replace(/\s+/g,"-").toLowerCase()),sx:{color:"#fff"},children:e},t)))})]})}),Object(w.jsx)("nav",{children:Object(w.jsx)(l.a,{container:g,variant:"temporary",open:c,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:r})})]})},S=c(14),A=c(204),P=c(214),T=c.p+"static/media/pic1.e1d44097.png";function H(){return Object(w.jsxs)(a.a,{sx:{display:"flex",flexDirection:"column",height:"100vh"},children:[Object(w.jsx)(j.a,{}),Object(w.jsx)(k,{}),Object(w.jsx)(a.a,{sx:{marginTop:"80px",flexGrow:1,backgroundColor:"#f0f8ff"},children:Object(w.jsx)(P.a,{sx:{backgroundColor:"#ffffff",flexGrow:1},children:Object(w.jsxs)(A.a,{container:!0,spacing:2,children:[Object(w.jsx)(A.a,{item:!0,xs:12,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(a.a,{sx:{width:"100%"},children:Object(w.jsx)(u.a,{variant:"h4",children:"Mersivity = Sustainability + Technology + Society = a Sustainable Technology Society."})})}),Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(u.a,{variant:"h5",children:["We are live:",Object(w.jsx)(v.a,{children:"Click Here"})," "]})," "]})]})}),Object(w.jsx)(A.a,{item:!0,xs:12,children:Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(a.a,{sx:{border:1,borderColor:"grey.500",width:"100%",minHeight:100,padding:2},children:Object(w.jsx)(u.a,{variant:"h5",children:"Mersivity is our symbiosis with technology and our surrounding environment. It embodies the above six connections. It helps us: 1. touch and 2. be touched by Earth, water, air (our environment), helping us to 3. sense and 4. control technology that is itself 5. in-touch with, and 6. touches upon the environment. Many technologies fail in making one or more of these six fundamental connections. The aim of the Sustainable Technology Society (Mersivity) is to ensure that technology evolves to sustain all six of these important connections."})})})})}),Object(w.jsx)(A.a,{item:!0,xs:12,children:Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:"100%",minHeight:100,padding:2},children:[Object(w.jsx)(u.a,{variant:"h5",children:"Announcements"}),Object(w.jsx)(u.a,{variant:"body1",sx:{fontSize:"1.2rem"},children:"JUST RANDOM."}),Object(w.jsx)(u.a,{variant:"body1",sx:{fontSize:"1.2rem"},children:"JUST RANDOM"})]})})})}),Object(w.jsx)(A.a,{item:!0,xs:12,children:Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(a.a,{sx:{display:"flex",flexDirection:"row"},children:Object(w.jsx)("img",{src:T,className:"pic1-logo",alt:"pic1"})})})})})]})})}),Object(w.jsx)(a.a,{sx:{backgroundColor:"#2196f3",color:"#fff",p:2,textAlign:"center"},children:Object(w.jsx)(u.a,{variant:"body1",children:"Mete Build V1"})})]})}var R=c(198),M=c(192),D=c(194),I=c(195),E=c(196),N=c(215),L=c(197),J=c(193);class W extends i.Component{constructor(e){super(e),this.getDefaultState=()=>({text1:""}),this.clear=()=>{this.setState(this.getDefaultState())},this.submit=()=>{let e=this.state.text1;const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({names2:"first_inital_last_name_number",helpMe:e})};fetch("http://localhost:9000/TestAPI/toJSON",t).then((e=>e.text()))},this.onLoad=()=>{fetch("http://localhost:9000/TestAPI/fromJSON").then((e=>e.text())).then((e=>this.setState({apiResponse:JSON.parse(e)})))},this.state=this.getDefaultState(),this.state={apiResponse:[]}}render(){return Object(w.jsx)(a.a,{children:Object(w.jsxs)(A.a,{container:!0,spacing:1,children:[Object(w.jsx)(A.a,{item:!0,xs:.5,children:Object(w.jsx)(a.a,{sx:{bgcolor:"#bbdefb",height:"100vh"}})}),Object(w.jsx)(A.a,{item:!0,xs:11,children:Object(w.jsx)(P.a,{children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{align:"right",variant:"contained",children:"Back"})}),Object(w.jsx)(x.a,{children:Object(w.jsx)(u.a,{variant:"h2",children:"Comment Section"})}),Object(w.jsx)(h.a,{light:!0}),Object(w.jsx)(v.a,{label:"Submit",onClick:this.onLoad,children:"Retrieve Comments"}),Object(w.jsx)(M.a,{component:J.a,children:Object(w.jsxs)(D.a,{sx:{minWidth:650},"aria-label":"customized table",children:[Object(w.jsx)(I.a,{children:Object(w.jsxs)(E.a,{children:[Object(w.jsx)(N.a,{align:"right",children:"Name"}),Object(w.jsx)(N.a,{align:"right",children:"Comment"})]})}),Object(w.jsx)(L.a,{children:this.state.apiResponse.map(((e,t)=>Object(w.jsxs)(E.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(w.jsx)(N.a,{component:"th",scope:"row",children:this.state.apiResponse[t].name}),Object(w.jsx)(N.a,{align:"right",children:this.state.apiResponse[t].comment})]},t)))})]})}),Object(w.jsx)(h.a,{light:!0}),Object(w.jsx)(x.a,{children:Object(w.jsx)(R.a,{id:"comment-box",label:"Comment",multiline:!0,rows:4,style:{width:720},defaultValue:"",value:this.state.text1,onChange:e=>{this.setState({text1:e.target.value})}})}),Object(w.jsxs)(x.a,{children:[Object(w.jsx)(v.a,{label:"Submit",onClick:this.submit,children:"Submit"}),Object(w.jsx)(h.a,{orientation:"vertical",variant:"middle",flexItem:!0}),Object(w.jsx)(v.a,{label:"Clear",onClick:this.clear,children:"Cancel"})]})]})})}),Object(w.jsx)(A.a,{item:!0,xs:1,children:Object(w.jsx)(a.a,{})})]})})}}var z=W,B=c(4),F=c(211);Object(B.a)(F.a)((e=>{let{theme:t}=e;return{...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}}));function V(){const[e,t]=i.useState(!1);return Object(w.jsxs)(a.a,{children:[Object(w.jsx)(u.a,{variant:"h4",children:"Page 1"}),Object(w.jsxs)(A.a,{container:!0,spacing:1,children:[Object(w.jsx)(A.a,{item:!0,xs:.5,children:Object(w.jsx)(a.a,{sx:{bgcolor:"#bbdefb",height:"100vh"}})}),Object(w.jsx)(A.a,{item:!0,xs:11,children:Object(w.jsx)(P.a,{children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{align:"right",variant:"contained",href:"/Home",children:"Back"})}),Object(w.jsx)(h.a,{light:!0}),Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:300,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Week 1 Content"}),Object(w.jsx)(v.a,{style:{width:279},children:"Click Here to view week 1 content"})]}),Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:300,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Week 2 Content"}),Object(w.jsx)(v.a,{style:{width:279},children:"Click Here to view week 2 content"})]}),Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:300,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Week 3 Content"}),Object(w.jsx)(v.a,{style:{width:279},children:"Click Here to view week 3 content"})]}),Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:300,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Week 4 Content"}),Object(w.jsx)(v.a,{component:y.b,to:"/Pg2",style:{width:279},children:"Click Here to view week 4 content"})]})]})]})})})]})]})}var _=c(216),G=c(98),q=c.n(G);function U(){return Object(w.jsx)(a.a,{children:Object(w.jsxs)(A.a,{container:!0,spacing:1,children:[Object(w.jsx)(A.a,{item:!0,xs:.8,children:Object(w.jsx)(a.a,{sx:{height:"100vh"}})}),Object(w.jsx)(A.a,{item:!0,xs:11,children:Object(w.jsx)(a.a,{children:Object(w.jsxs)(A.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:1,md:3},children:[Object(w.jsxs)(A.a,{item:!0,xs:12,children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{align:"right",variant:"contained",href:"/Pg1",children:"Back"})}),Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:1305,height:200},children:[Object(w.jsx)(A.a,{item:!0,xs:.7,children:Object(w.jsx)(a.a,{sx:{height:"5vh"}})}),Object(w.jsx)(u.a,{xs:12,variant:"h5",sx:{textAlign:"center"},children:"Week 3: Requirements Elicitation & Analysis"}),Object(w.jsx)(A.a,{item:!0,xs:.7,children:Object(w.jsx)(a.a,{sx:{height:"3vh"}})}),Object(w.jsx)(a.a,{sx:{bgcolor:"#ffb851",height:"7vh"},children:Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{disablePadding:!0,children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(_.a,{children:Object(w.jsx)(q.a,{})}),Object(w.jsx)(O.a,{primary:"Live Session"})]})})})}),Object(w.jsx)(A.a,{item:!0,xs:.7,children:Object(w.jsx)(a.a,{sx:{height:"1vh"}})}),Object(w.jsx)(d.a,{children:Object(w.jsx)(x.a,{disablePadding:!0,children:Object(w.jsx)(b.a,{children:Object(w.jsx)(O.a,{primary:"Week3: Live Session"})})})})]})]}),Object(w.jsx)(A.a,{item:!0,xs:6,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"LEFT 1"}),Object(w.jsx)(v.a,{style:{width:279},href:"https://youtu.be/7ZT0fsEPKwc",children:"Click Here to view video 1 "})]})}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"LEFT 2"}),Object(w.jsx)(v.a,{style:{width:279},href:"https://youtu.be/k-mdPAvXgOI",children:"Click Here to view video 2"})]})}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Comments"}),Object(w.jsx)(v.a,{style:{width:279},component:y.b,to:"/Pg3",children:"Click Here to go to comments"})]})})]})}),Object(w.jsx)(A.a,{item:!0,xs:6,children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Right 2"}),Object(w.jsx)(v.a,{style:{width:279},href:"https://owl.uwo.ca/access/lessonbuilder/item/184399708/group/1f1aeaad-8d4c-4a5a-8278-c10ac654d774/06-RequirementsElicitation.pdf",children:"Click Here to view PDF content 2"})]})}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Right 2"}),Object(w.jsx)(v.a,{style:{width:279},href:"https://owl.uwo.ca/access/lessonbuilder/item/184399699/group/1f1aeaad-8d4c-4a5a-8278-c10ac654d774/06-SE2203b_DrOudasAnalysisPPT.pdf",children:"Click Here to view PDF content 2"})]})}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(a.a,{sx:{border:1,borderColor:"grey.500",width:600,height:300},children:[Object(w.jsx)(u.a,{variant:"h6",sx:{textAlign:"center"},children:"Right3"}),Object(w.jsx)(v.a,{style:{width:279},component:y.b,to:"/Pg3",children:"Click Here to go to comments"})]})})]})})]})})}),Object(w.jsx)(A.a,{item:!0,xs:1,children:Object(w.jsx)(a.a,{sx:{height:"100vh"}})})]})})}var Y=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(k,{}),Object(w.jsxs)(S.d,{children:[Object(w.jsx)(S.b,{exact:!0,path:"/",children:Object(w.jsx)(S.a,{to:"/Home"})}),Object(w.jsx)(S.b,{path:"/Home",component:H}),Object(w.jsx)(S.b,{path:"/Pg3",component:z}),Object(w.jsx)(S.b,{path:"/Pg1",component:V}),Object(w.jsx)(S.b,{path:"/Pg2",component:U})]})]})})};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(Y,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.194b9ace.chunk.js.map