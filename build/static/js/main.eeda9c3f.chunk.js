(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(10),c=a.n(s),o=(a(88),a(11)),l=a(1),r=function(e){return Object(l.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(l.jsxs)("div",{className:"navBarContainer",children:[Object(l.jsxs)("div",{className:"navbar-header",children:[Object(l.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(l.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(l.jsx)("span",{className:"icon-bar"})," ",Object(l.jsx)("span",{className:"icon-bar"})," ",Object(l.jsx)("span",{className:"icon-bar"})," "]}),Object(l.jsx)("div",{style:{textAlign:"left",maxWidth:"300px"},children:Object(l.jsx)("a",{href:"#page-top",className:"page-scroll",children:Object(l.jsx)("img",{alt:"logo",src:"./img/AspireFinalLOGO/png/AspireLogofinal619.svg",width:"28%",height:"auto"})})})]}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(l.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#page-top",className:"page-scroll",children:"Home"})}),"  ",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#services",className:"page-scroll",children:"Services"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#industries",className:"page-scroll",children:"Industries"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#partners",className:"page-scroll",children:"partners"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#about",className:"page-scroll",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contact",className:"page-scroll",children:"Contact"})})]})})]})})},d=a(163),m=a(165),j=a(166),u=a(154),b=a(155),h=a(153),p=a(149),x=a(156),f=a(167),g=a(162),O=a(43),v=a.n(O),y=Object(p.a)((function(e){return{root:{padding:"2px 0px 0px 24px","& h2":{fontSize:"21px",textTransform:"none"},"& p":{fontSize:"21px"}}}})),N=Object(p.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#7D8483"},"& .MuiInputLabel-outlined.Mui-focused":{color:"#8ca945"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#8ca945"}}}),w={name:"",email:"",message:""};function S(){var e=n.a.useState(966),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)(w),r=Object(o.a)(c,1)[0],p=r.name,O=r.email,S=r.message,A=n.a.useState(!1),I=Object(o.a)(A,2),C=I[0],T=I[1],k=y(),L=n.a.useState(""),M=Object(o.a)(L,2),E=M[0],D=M[1];var z=N();return Object(l.jsxs)("div",{style:{paddingTop:"2%"},children:[Object(l.jsx)(d.a,{variant:"contained",style:{background:"#8ca945",color:"#fff",fontSize:"1.3vw",fontWeight:500,textTransform:"none"},onClick:function(){T(!0)},children:"Test your product now"}),Object(l.jsxs)(j.a,{open:C,onClose:function(){T(!1)},"aria-labelledby":"form-dialog-title",size:"large",children:[Object(l.jsx)(h.a,{id:"form-dialog-title",className:k.root,children:"Send Request"}),Object(l.jsx)(u.a,{children:Object(l.jsxs)("form",{validate:!0,onSubmit:function(e){e.preventDefault(),console.log(p,O,S),s(966),v.a.sendForm("service_9he0ign","template_pfgid7i",e.target,"user_hcBBNwV6ugYcXmcME444y").then((function(t){console.log(t.text),e.target.reset()}),(function(e){console.log(e.text)}))},children:[Object(l.jsxs)(b.a,{style:{fontSize:"15px",fontWeight:500,color:"black"},children:["To ",Object(l.jsx)("span",{style:{fontWeight:"bold",color:"#8ca945"},children:"Test your product"})," , please fill this form here.Then We will send updates occasionally."]}),Object(l.jsxs)(x.a,{container:!0,spacing:1,children:[Object(l.jsx)(x.a,{item:!0,xs:6,children:Object(l.jsx)(m.a,{autoFocus:!0,required:!0,margin:"dense",id:"name",label:"Name",type:"name",variant:"outlined",fullWidth:!0,className:z.root,inputProps:{style:{fontSize:16}},InputLabelProps:{style:{fontSize:16}}})}),Object(l.jsx)(x.a,{item:!0,xs:6,children:Object(l.jsx)(m.a,{required:!0,inputProps:{style:{fontSize:16}},InputLabelProps:{style:{fontSize:16}},className:z.root,margin:"dense",id:"name",label:"Phone",type:"Phone",value:a,variant:"outlined",fullWidth:!0,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&s(e.target.value)}})}),Object(l.jsx)(x.a,{item:!0,xs:6,children:Object(l.jsx)(m.a,{required:!0,style:{borderColor:"#8ca945"},inputProps:{style:{fontSize:16,borderColor:"#8ca945"}},InputLabelProps:{style:{fontSize:16}},className:z.root,margin:"dense",id:"name",label:"Email Address",type:"email",variant:"outlined",fullWidth:!0})}),Object(l.jsx)(x.a,{item:!0,xs:6,children:Object(l.jsx)(m.a,{required:!0,color:"#8ca945",className:z.root,inputProps:{style:{fontSize:16}},InputLabelProps:{style:{fontSize:16}},margin:"dense",id:"name",label:"Company",variant:"outlined",type:"name ",fullWidth:!0})}),Object(l.jsx)(x.a,{item:!0,xs:12,children:Object(l.jsx)(f.a,{variant:"outlined",className:z.root,style:{margin:"0 auto",marginTop:10,width:"100%"},children:Object(l.jsxs)(g.a,{required:!0,native:!0,value:E,defaultValue:"",onChange:function(e){D(e.target.value)},label:"Service",style:{fontSize:"14.5px"},inputProps:{name:"service",id:"outlined-age-native-simple"},children:[Object(l.jsx)("option",{value:"default",children:"-Select the service-"}),Object(l.jsx)("option",{value:"Digital Assurance",children:"Digital Assurance"}),Object(l.jsx)("option",{value:"Quality Assurance",children:"Quality Assurance"}),Object(l.jsx)("option",{value:"Next Generation Testing",children:"Next Generation Testing"}),Object(l.jsx)("option",{value:"Project Management",children:"Project Management"}),Object(l.jsx)("option",{value:"Enterprise Application Services",children:"Enterprise Application Services"})]})})}),Object(l.jsx)(x.a,{item:!0,xs:12,children:Object(l.jsx)(m.a,{required:!0,multiline:!0,rows:6,rowsMax:8,color:"#8ca945",className:z.root,inputProps:{style:{fontSize:16}},InputLabelProps:{style:{fontSize:16}},margin:"dense",id:"name",label:"How Can Aspire Technologies Help?",variant:"outlined",type:"name ",fullWidth:!0})})]}),Object(l.jsx)(x.a,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",children:Object(l.jsx)(d.a,{type:"submit",style:{fontWeight:"bold",color:"#8ca945",fontSize:"13px",textTransform:"none"},children:"Send Request"})})]})})]})]})}a(53);var A=a(161),I=function(e){var t=n.a.useState(0),a=Object(o.a)(t,2),i=a[0],s=a[1],c=n.a.useState(!0),r=Object(o.a)(c,2),d=r[0],m=r[1];return n.a.useEffect((function(){function e(){var e=window.scrollY;m(e<i),s(e)}return window.addEventListener("scroll",e,!1),function(){window.removeEventListener("scroll",e,!1)}}),[i]),Object(l.jsxs)("div",{className:"intro",style:{paddingTop:"80px",paddingBottom:"5px"},children:[Object(l.jsx)(x.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"center",style:{position:"absolute",zIndex:"1"},children:Object(l.jsx)(x.a,{item:!0,xs:8,sm:8,md:8,lg:8,children:Object(l.jsxs)(A.a.div,{className:"intro-text",transition:{opacity:{duration:2},translateY:{duration:2}},animate:{opacity:d?1:0,translateY:"0px"},initial:{opacity:0,translateY:"-150px"},children:[Object(l.jsx)("img",{alt:"Header",className:"imageHeader",src:"./img/AspireFinalLOGO/png/AspireLogofinal619.svg",width:"52%",height:"auto"}),Object(l.jsx)("h1",{style:{fontSize:"4vw",color:"#fff"},children:e.data?e.data.title:"Loading"}),Object(l.jsxs)("p",{style:{fontSize:"1.1vw",color:"#fff"},children:["(an ",Object(l.jsx)("a",{href:"https://exeder.com/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("span",{style:{color:"#44849c",fontWeight:"bold"},children:"EXEDER"})})," company)"]}),Object(l.jsx)(S,{})]})})}),Object(l.jsx)("video",{id:"background-video",style:{borderRadius:"5px"},src:"/img/AspireFinalLOGO/png/video1.mp4",loop:!0,autoPlay:!0,muted:!0})]})},C=a(67),T=a.n(C),k=a(159),L=a(160),M=Object(p.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});var E=function(e){var t=M(),a=function(){var e=Object(i.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(i.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),n=Object(o.a)(a,1)[0];return Object(l.jsx)("div",{id:"about",style:{marginBottom:"5px",borderRadius:"5px"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)(x.a,{container:!0,justifyContent:"space-between",children:[Object(l.jsx)(x.a,{item:!0,xs:12,sm:12,md:6,children:Object(l.jsx)(k.a,{className:t.root,variant:"outlined",style:{background:"#133d47",borderRadius:"8px"},children:Object(l.jsx)(L.a,{children:Object(l.jsx)("div",{children:Object(l.jsx)(T.a,{width:"100%",style:{borderRadius:"10px",overflow:"hidden"},className:["img-responsive","react-player"],controls:!0,url:"https://youtu.be/_4CtkxqJKy8"})})})})}),Object(l.jsx)(x.a,{item:!0,xs:12,sm:12,md:6,children:n>1600?Object(l.jsx)(A.a.div,{whileHover:{scale:1.2},className:"col-xs-12 col-md-12",children:Object(l.jsx)("div",{className:"about-text",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)("p",{style:{color:"#000"},children:e.data?e.data.paragraph:"loading..."}),Object(l.jsx)("h3",{children:"Why Choose Us?"}),Object(l.jsx)("div",{className:"list-style",children:Object(l.jsx)("div",{className:"col-lg-12 col-sm-12 col-xs-10",children:Object(l.jsx)("ul",{className:"aboutUs",children:e.data?e.data.Why.map((function(e,t){return Object(l.jsx)("li",{style:{color:"#000"},children:e},"".concat(e,"-").concat(t))})):"loading"})})})]})})}):Object(l.jsx)(A.a.div,{className:"col-xs-12 col-md-12",children:Object(l.jsx)("div",{className:"about-text",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)("p",{style:{color:"#000"},children:e.data?e.data.paragraph:"loading..."}),Object(l.jsx)("h3",{children:"Why Choose Us?"}),Object(l.jsx)("div",{className:"list-style",children:Object(l.jsx)("div",{className:"col-lg-12 col-sm-12 col-xs-10",children:Object(l.jsx)("ul",{className:"aboutUs",children:e.data?e.data.Why.map((function(e,t){return Object(l.jsx)("li",{style:{color:"#000"},children:e},"".concat(e,"-").concat(t))})):"loading"})})})]})})})})]})})})})},D=Object(p.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}}),z=function(e){var t=D();return Object(l.jsx)("div",{id:"partners",style:{marginBottom:"150px",borderRadius:"5px"},children:Object(l.jsxs)("div",{children:[Object(l.jsx)("video",{id:"background-video2",style:{borderRadius:"5px",position:"absolute"},src:"/img/AspireFinalLOGO/png/video4.mp4",loop:!0,autoPlay:!0,muted:!0}),Object(l.jsx)("div",{className:"container",style:{left:"20%"},children:Object(l.jsx)("div",{style:{marginTop:"60px"},children:Object(l.jsx)(x.a,{container:!0,justifyContent:"center",children:Object(l.jsx)(x.a,{item:!0,xs:12,sm:8,md:8,children:Object(l.jsx)(k.a,{className:t.root,variant:"outlined",style:{borderRadius:"15px",opacity:"0.8"},children:Object(l.jsxs)(L.a,{children:[Object(l.jsx)("h2",{style:{textAlign:"center",margin:"0",textTransform:"none"},children:"Our Partners"}),Object(l.jsx)("h2",{className:"line",style:{margin:"2 auto"},children:" "}),Object(l.jsx)("span",{children:" "}),Object(l.jsx)("div",{style:{padding:"25px"},children:Object(l.jsxs)(x.a,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"center",children:[Object(l.jsx)(A.a.div,{whileHover:{scale:1.2},children:Object(l.jsx)("a",{href:"https://www.outsystems.com/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{alt:"Out system ",src:"./office/OutSystems-logo.png",style:{height:"64px",width:"auto",opacity:1}})})}),Object(l.jsx)(A.a.div,{whileHover:{scale:1.2},children:Object(l.jsx)("a",{href:"https://www.cigniti.com/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{alt:"cigniti ",src:"./office/cigniti.png",style:{height:"64px",width:"auto"}})})})]})})]})})})})})})]})})},P=function(e){var t=n.a.useState(!1),a=Object(o.a)(t,1)[0];return Object(l.jsx)("div",{id:"services",className:"text-center",style:{borderRadius:"5px",marginBottom:"5px"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"section-title",children:Object(l.jsx)("h2",{children:"Services"})}),Object(l.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,t){return Object(l.jsxs)(A.a.div,{whileHover:{y:-20},className:"col-md-4",children:[" ",Object(l.jsx)("i",{className:e.icon}),Object(l.jsxs)("div",{className:"service-desc",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)(A.a.p,{hidden:a,children:e.text})]})]},"".concat(e.name,"-").concat(t))})):"loading"})]})})},W=a(49),B=a(52),q={name:"",email:"",message:""},H=function(e){var t=Object(i.useState)(q),a=Object(o.a)(t,2),n=a[0],s=n.name,c=n.email,r=n.message,d=a[1],m=function(e){var t=e.target,a=t.name,i=t.value;d((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(W.a)({},a,i))}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"contact",style:{marginBottom:"5px",borderRadius:"5px"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"section-title",children:[Object(l.jsx)("h2",{children:"Get In Touch"}),Object(l.jsx)("p",{children:"Please fill out the form below to send us an email and we will get back to you as soon as possible."})]}),Object(l.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),console.log(s,c,r),v.a.sendForm("service_9he0ign","template_pfgid7i",e.target,"user_hcBBNwV6ugYcXmcME444y").then((function(t){console.log(t.text),e.target.reset()}),(function(e){console.log(e.text)}))},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Name",required:!0,style:{fontSize:"15px"},onChange:m}),Object(l.jsx)("p",{className:"help-block text-danger"})]})}),Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",{type:"email",id:"email",name:"email",style:{fontSize:"15px"},className:"form-control",placeholder:"Email",required:!0,onChange:m}),Object(l.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0,onChange:m}),Object(l.jsx)("p",{className:"help-block text-danger"})]}),Object(l.jsx)("div",{id:"success"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Send Message"})]})]})}),Object(l.jsxs)(A.a.div,{whileHover:{y:-10},className:"col-md-3 col-md-offset-1 contact-info",children:[Object(l.jsxs)("div",{className:"contact-item",children:[Object(l.jsx)("h3",{children:"Contact Info"}),Object(l.jsxs)("p",{className:"pInContactInfo",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fa fa-map-marker"})," Address"]}),e.data?e.data.address:"loading"]})]}),Object(l.jsx)("div",{className:"contact-item",children:Object(l.jsxs)("p",{className:"pInContactInfo",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fa fa-phone"})," Phone"]})," ",e.data?e.data.phone:"loading"]})}),Object(l.jsx)("div",{className:"contact-item",children:Object(l.jsxs)("p",{className:"pInContactInfo",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading"]})})]}),Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"social",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(A.a.li,{whileHover:{scale:1.4,y:-10},children:Object(l.jsx)("a",{href:e.data?e.data.facebook:"/",children:Object(l.jsx)("i",{className:"fa fa-facebook"})})}),Object(l.jsx)(A.a.li,{whileHover:{scale:1.4,y:-10},children:Object(l.jsx)("a",{href:e.data?e.data.twitter:"/",children:Object(l.jsx)("i",{className:"fa fa-twitter"})})}),Object(l.jsx)(A.a.li,{whileHover:{scale:1.4,y:-10},children:Object(l.jsx)("a",{href:e.data?e.data.youtube:"/",children:Object(l.jsx)("i",{className:"fa fa-youtube"})})})]})})})})]})}),Object(l.jsx)("div",{id:"footer",children:Object(l.jsx)("div",{className:"container text-center",children:Object(l.jsxs)("p",{children:["\xa9 2021 Aspire Technologies"," ",Object(l.jsx)("a",{href:"MDS",rel:"nofollow",children:"TemplateWire"})]})})})]})},R=a(68),F=a(69),J=function(e){return Object(l.jsx)("div",{id:"industries",className:"text-center",style:{borderRadius:"5px",marginBottom:"5px"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"section-title",children:Object(l.jsx)("h2",{children:"Industries "})}),Object(l.jsx)("div",{className:"rowForIndustries",children:e.data?e.data.map((function(e,t){return Object(l.jsxs)(A.a.div,{whileHover:{y:-40},className:"col-md-4",children:[" ",Object(l.jsx)("i",{className:e.icon}),Object(l.jsxs)("div",{className:"industries-desc",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.text})]})]},"".concat(e.name,"-").concat(t))})):"loading"})]})})},_=(new(a.n(F).a)('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(i.useState)({}),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){n(R)}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(r,{}),Object(l.jsx)(I,{data:a.Header}),Object(l.jsx)(P,{data:a.Services}),Object(l.jsx)(J,{data:a.Industries}),Object(l.jsx)(z,{}),Object(l.jsx)(E,{data:a.About}),Object(l.jsx)(H,{data:a.Contact})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e){e.exports=JSON.parse('{"Header":{"title":"Aspire Technologies"},"About":{"paragraph":"A privately held company with its operations spanning Saudi Arabia,United Arab Emirates, Canada, Bahrain and with Offshore Development Centre in India; specializes in Technology Consulting targeted at the Asia, Middle East & North American market with predominant understanding and proliferation in sectors like Banking & Finance, Insurance, Telecom, Manufacturing & Industries, Retail, Energy & Utilities etc. Aspire Technologies was established in late 2012, with an aim to grow; started its operations just like any other player in the world with a sole employee and is able to scale up to 75+ and counting strongly till date.","Why":["We help leading Banking and Financial Institutions in the Middle East on their various requirements with industry-demanding Tools from Microsoft, IBM, Oracle, HP among others.","Our PMP Certified consultants run project management as smooth as it can be without compromising process and quality.","One of the foremost areas of expertise for Exeder. We have exceptional Testing Consultants occupying a major chunk of a leading banking institution in the Middle East."],"Why2":["","","",""]},"Services":[{"icon":"fa fa-file-code-o","name":"Application Development","text":"Design, Coding & Architecture ,Business & GAP Analysis ,Onsite / Offshore Software Development,Release Management ."},{"icon":"fa fa-cloud-upload","name":"Customization & Implementation","text":" Banking Applications Implementation,Data Migration using tools and best practices. "},{"icon":"fa fa-envelope-o","name":"Support & Maintenance","text":"Support for Applications , Re-architecting of legacy apps ,Offshore / Onsite Support ,Data Management."},{"icon":"fa fa-cog","name":"Middleware Services","text":"EAI Development , EAI through Web-Services  , Integration to Enable STP ."},{"icon":"fa fa-user","name":"Quality Engineering & Assurance","text":"Functional Testing ,Performance Testing ,QC to ALM Testing ,Agile Testing ,Test Data Management,Blockchain Testing"},{"icon":"fa fa-calendar","name":"Project & Product Management","text":"project management methodologies without compromising time and budget. And  finding the best way in representing the smallest of the smallest information for our product "}],"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/04.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/05.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/06.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"}],"Industries":[{"icon":"fa fa-user-md","name":"Healthcare and Education","text":""},{"icon":"fa fa-link","name":"Telecommunications","text":""},{"icon":"fa fa-money","name":"Banking & Finance, Tax & Accounting","text":""},{"icon":"fa fa-shield","name":"Insurance","text":""},{"icon":"fa  fa-bolt","name":"Energy, and Oil & Gas","text":""},{"icon":"fa  fa-building","name":"Manufacturing & Industries","text":""},{"icon":"fa fa-pie-chart","name":"Retail & Utilities","text":""}],"Contact":{"address":"4321 RIYADH , Saudi Arabia, CA 12345 ","phone":"+1 123 456 1234","email":"info@aspiretechno.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-comments-o","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}]}')},88:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.eeda9c3f.chunk.js.map