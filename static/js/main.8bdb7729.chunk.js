(this["webpackJsonpcovid-resource"]=this["webpackJsonpcovid-resource"]||[]).push([[2],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(16),a=n.n(o),l=(n(69),n(54)),i=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))},s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(1);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l.b,{})}),document.getElementById("root")),i(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):u(t,e)}))}}()},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c="https://fh5qxme0dg.execute-api.us-east-1.amazonaws.com/dev",r={endpoints:{getOrPostResources:"".concat(c,"/resource"),getResourcesListNearMe:"".concat(c,"/resource/near-me")},StringUtils:{subTypeIdToString:function(e){switch(e){case"1.1":return"Refill";case"1.2":return"New Cylinder";case"2.1":return"Remedisvir";case"2.2":return"Gelusil";case"2.3":return"ENO";case"3.1":return"ICU";case"3.2":return"ICCU";case"3.3":return"Oxygen Bed";case"3.4":return"Normal Bed";case"4.1":return"General";case"4.2":return"Haturi";case"4.3":return"Daami";case"5.1":return"Veg";case"5.2":return"Non-Veg";case"5.3":return"Vegan";default:return""}}}}},35:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n(8),o=n(0),a=n(37),l=n(13),i=n(14),s=n(1);t.default=function(e){var t=Object(o.useState)(null),n=Object(r.a)(t,2),u=n[0],d=n[1],b=Object(o.useState)({lat:"",lng:"",address:""}),j=Object(r.a)(b,2),f=j[0],O=j[1];return Object(o.useEffect)((function(){u&&Object(a.b)(u.value.description).then((function(e){return Object(a.c)(e[0])})).then((function(e){var t=e.lat,n=e.lng;O((function(e){return Object(c.a)(Object(c.a)({},e),{},{lat:t.toString(),lng:n.toString(),address:u.label})}))}))}),[u]),Object(o.useEffect)((function(){(f.lat.length>0||f.lng.length>0)&&e.getCoordinates(f.lat,f.lng,f.address)}),[f]),Object(s.jsx)(a.a,{style:{backgroundColor:"red"},apiKey:"AIzaSyDWJ8cC97oQYX2itSwNl1tb8Dr4T7P3AI4",selectProps:{value:u,onChange:d,placeholder:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l.a,{icon:i.n})," \xa0Search a location..."]}),styles:{input:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"#bbbfc8"})},singleValue:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"#bbbfc8"})},control:function(e){return Object(c.a)(Object(c.a)({},e),{},{background:"#2c3942",paddingLeft:"10px",border:"0 !important",boxShadow:"0 !important","&:hover":{border:"0 !important"}})}}}})}},49:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var c=n(4),r=n(8),o=n(0),a=n.n(o),l=(n(70),n(22)),i=n(6),s=n(63),u=n(23),d=(n(71),n(36)),b=n.n(d),j=n(45),f=n(35),O=(n(84),n(62)),h=n(7),g=n(47),p=(n(85),n(31)),x=n(1),v=function(){var e={1:[{value:"1.1",label:"Refill",typeId:"1",color:"#05849b"},{value:"1.2",label:"New Cylinder",typeId:"1",color:"#05849b"}],2:[{value:"2.1",label:"Remedisvir",typeId:"2",color:"#e9e50e"},{value:"2.2",label:"Gelusil",typeId:"2",color:"#e9e50e"},{value:"2.3",label:"ENO",typeId:"2",color:"#e9e50e"}],3:[{value:"3.1",label:"ICU",typeId:"3",color:"#049440"},{value:"3.2",label:"ICCU",typeId:"3",color:"#049440"},{value:"3.3",label:"Oxygen Bed",typeId:"3",color:"#049440"},{value:"3.4",label:"Normal Bed",typeId:"3",color:"#049440"}],4:[{value:"4.1",label:"General",typeId:"4",color:"#dd127e"},{value:"4.2",label:"Haturi",typeId:"4",color:"#dd127e"},{value:"4.3",label:"Daami",typeId:"4",color:"#dd127e"}],5:[{value:"5.1",label:"Veg",typeId:"5",color:"#cc3000"},{value:"5.2",label:"Non-Veg",typeId:"5",color:"#cc3000"},{value:"5.3",label:"Vegan",typeId:"5",color:"#cc3000"},{value:"5.4",label:"Veg/Non-Veg",typeId:"5",color:"#cc3000"}]},t=Object(o.useState)([]),n=Object(r.a)(t,2),a=n[0],l=n[1],i=Object(o.useState)(!0),d=Object(r.a)(i,2),v=(d[0],d[1]),m=Object(o.useState)({type:{value:null,label:null},subType:{value:"",label:"Select sub-type"}}),y=Object(r.a)(m,2),S=(y[0],y[1],Object(o.useState)({lat:"",lng:"",phone:"",address:"",resources:{},name:""})),w=Object(r.a)(S,2),C=w[0],k=w[1],I=Object(o.useState)({}),N=Object(r.a)(I,2),R=N[0],E=N[1],T={control:function(e){var t;return Object(c.a)(Object(c.a)({},e),{},(t={width:"100%",background:"#2c3942"},Object(u.a)(t,"background","#2c3942"),Object(u.a)(t,"border","0 !important"),Object(u.a)(t,"boxShadow","0 !important"),Object(u.a)(t,"&:hover",{border:"0 !important"}),t))},input:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"red"})},singleValue:function(e){return Object(c.a)(Object(c.a)({},e),{},{color:"#bbbfc8"})},option:function(e,t){var n=t.data,r=t.isDisabled,o=t.isFocused,a=t.isSelected,l=b()(n.color);return Object(c.a)(Object(c.a)({},e),{},{backgroundColor:r?null:a?n.color:o?l.alpha(.1).css():null,color:r?"#ccc":a?b.a.contrast(l,"white")>2?"white":"black":n.color,cursor:r?"not-allowed":"default",":active":Object(c.a)(Object(c.a)({},e[":active"]),{},{backgroundColor:!r&&(a?n.color:l.alpha(.3).css())})})},multiValue:function(e,t){var n=t.data,r=b()(n.color);return Object(c.a)(Object(c.a)({},e),{},{backgroundColor:r.alpha(.1).css()})},multiValueLabel:function(e,t){var n=t.data;return Object(c.a)(Object(c.a)({},e),{},{color:n.color})},multiValueRemove:function(e,t){var n=t.data;return Object(c.a)(Object(c.a)({},e),{},{color:n.color,":hover":{backgroundColor:n.color,color:"white"}})}},L=function(){var e=C;e.resources=R,console.log("i am submitting",e);var t={method:"POST",redirect:"follow",body:JSON.stringify(e)};fetch(p.a.endpoints.getOrPostResources,t).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),k({lat:"",lng:"",phone:"",address:"",resources:{},name:""}),v(!0),g.b.success("Resource added successfully!")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g.a,{}),Object(x.jsxs)("div",{className:"form",children:[Object(x.jsx)(h.d,{children:Object(x.jsx)(h.e,{children:"Add your Resource"})}),Object(x.jsx)(f.default,{styles:T,getCoordinates:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k((function(r){return Object(c.a)(Object(c.a)({},r),{},{lat:e,lng:t,address:n})}))}}),Object(x.jsx)("br",{}),Object(x.jsx)(j.a,{options:[{value:"1",label:"Oxygen",color:"#05849b"},{value:"2",label:"Medicine",color:"#e9e50e"},{value:"3",label:"Beds",color:"#049440"},{value:"4",label:"Doctor",color:"#dd127e"},{value:"5",label:"Food",color:"#cc3000"}],placeholder:"Select type",styles:T,onChange:function(t){return function(t){var n=R,c=[];t.forEach((function(t){n[t.value]||(n[t.value]=[]),c.push.apply(c,Object(s.a)(e[t.value]))})),E(n),l(c)}(t)},defaultValue:null,isSearchable:!1,isMulti:!0,closeMenuOnSelect:!1}),Object(x.jsx)("br",{}),Object(x.jsx)(j.a,{options:a,placeholder:"Select sub-type",styles:T,onChange:function(e){return function(e){var t=R;for(var n in t)t[n]=[];e.forEach((function(e){t[e.typeId].push(e.value)})),E(t)}(e)},defaultValue:null,isSearchable:!1,isMulti:!0,closeMenuOnSelect:!1}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{placeholder:"Enter phone number",value:C.phone,country:"IND",onChange:function(e){return function(e){k((function(t){return Object(c.a)(Object(c.a)({},t),{},{phone:e})}))}(e)},styles:T}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"contact-name",type:"name",placeholder:"Enter Contact Name",value:C.name,onChange:function(e){return function(e){k((function(t){return Object(c.a)(Object(c.a)({},t),{},{name:e.target.value})}))}(e)}}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"submit",onClick:function(){return L()},children:"Submit"})]})]})},m=n(14),y=n(13),S=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,111))})),w=Object(o.lazy)((function(){return Promise.resolve().then(n.bind(null,35))})),C=Object(o.lazy)((function(){return n.e(0).then(n.bind(null,112))})),k=function(){var e=Object(o.useContext)(J);Object(o.useEffect)((function(){console.log("data",e)}));var t=Object(o.useState)({lat:"",lng:"",address:"",fetchedUserLocation:!1}),n=Object(r.a)(t,2),a=n[0],l=n[1];Object(o.useEffect)((function(){console.log("i am superman"),(a.lat.length>0||a.lng.length>0)&&e.getNearbyResourcesList(a.lat,a.lng)}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"column",children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(x.Fragment,{}),children:Object(x.jsx)(w,{getCoordinates:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";l((function(e){return Object(c.a)(Object(c.a)({},e),{},{lat:t,lng:n,address:r,fetchedUserLocation:!0})})),e.getNearbyResourcesList(t,n)}})})})}),Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"column",children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(x.Fragment,{}),children:Object(x.jsx)(C,{})})})}),Object(x.jsx)("div",{class:"row",style:{float:"right"},children:Object(x.jsx)("div",{class:"column",style:{marginBottom:"-1%"},children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(x.Fragment,{}),children:Object(x.jsxs)(h.a,{color:"#2c3942",children:[Object(x.jsx)(y.a,{icon:m.q})," \xa0Sort"]})})})}),Object(x.jsx)("div",{class:"row mb-0",children:Object(x.jsx)("div",{class:"column",children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(x.Fragment,{}),children:Object(x.jsx)(S,{mod:!1})})})})]})})},I=n(24),N=(n(86),n(49),n(60)),R=function(e){var t=e.remainingTime;return 0===t?Object(x.jsx)("div",{className:"timerDiv",children:"Too lale..."}):Object(x.jsxs)("div",{className:"timerDiv",children:[Object(x.jsx)("div",{className:"text",children:"Refresh in"}),Object(x.jsx)("div",{className:"value",children:t}),Object(x.jsx)("div",{className:"text",children:"seconds"})]})},E=function(){return Object(x.jsx)(N.CountdownCircleTimer,{isPlaying:!0,duration:100,colors:[["#F7B801",.33],["#A30000",.33]],size:100,strokeWidth:5,isLinearGradient:!0,children:R})},T=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,111))})),L=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{class:"row",children:Object(x.jsx)("div",{class:"timer",children:Object(x.jsx)(E,{})})}),Object(x.jsx)("div",{class:"row mb-0",children:Object(x.jsx)("div",{class:"column",children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(x.Fragment,{}),children:Object(x.jsx)(T,{mod:!0})})})})]})})};function F(){var e=new I.a.auth.GoogleAuthProvider,t=Object(o.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1],i=Object(o.useState)({state:"initial"}),s=Object(r.a)(i,2),u=s[0],d=s[1],b=Object(o.useState)({}),j=Object(r.a)(b,2),f=j[0],O=j[1];return Object(x.jsx)("div",{className:"App",children:!1===c?Object(x.jsxs)(a.a.Fragment,{children:["initial"===u.state&&Object(x.jsx)(h.c,{children:Object(x.jsx)("div",{class:"g_body",children:Object(x.jsxs)("button",{class:"g-button",onClick:function(){d((function(e){return{state:"started"}})),I.a.auth().signInWithPopup(e).then((function(e){var t=e.credential;t.accessToken,e.user;O({token:t.accessToken,userName:e.user.displayName}),l(!0),d((function(e){return{state:"done"}}))})).catch((function(e){console.log(e);e.code,e.message,e.email,e.credential}))},children:[Object(x.jsx)("img",{class:"g-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png",alt:"Google Logo"}),Object(x.jsx)("p",{class:"g-text",children:"Sign in with Google"})]})})}),"started"===u.state&&Object(x.jsx)(h.c,{flex:"all-center",children:Object(x.jsx)(h.e,{children:"Processing"})})]}):Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsxs)("p",{children:["Welcome ",f.userName]}),Object(x.jsx)(L,{})]})})}var A=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.c,{children:Object(x.jsx)(i.a,{path:"/add-availability",render:function(e){return Object(x.jsx)(v,Object(c.a)({},e))}})}),Object(x.jsx)(i.c,{children:Object(x.jsx)(i.a,{path:"/verify-volunteer",render:function(e){return Object(x.jsx)(F,Object(c.a)({},e))}})}),Object(x.jsx)(i.c,{children:Object(x.jsx)(i.a,{exact:!0,path:"/",render:function(e){return Object(x.jsx)(k,Object(c.a)(Object(c.a)({},e),{},{mod:!1}))}})})]})},U=(n(89),function(){var e=function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"};return Object(o.useEffect)((function(){}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"topnav",id:"myTopnav",children:[Object(x.jsxs)(l.b,{to:"/",children:[Object(x.jsx)(y.a,{icon:m.p})," \xa0 Home"]}),Object(x.jsxs)(l.b,{onClick:e,to:"/add-availability",children:[Object(x.jsx)(y.a,{icon:m.l})," \xa0Add Resource"]}),Object(x.jsxs)(l.b,{onClick:e,to:"/verify-volunteer",children:[Object(x.jsx)(y.a,{icon:m.l})," \xa0Verification Volunteer"]}),Object(x.jsx)("a",{href:"javascript:void(0);",className:"icon",onClick:e,children:Object(x.jsx)("i",{className:"fa fa-bars"})})]})})}),_=function(e){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(U,{}),Object(x.jsx)(i.c,{className:"App-content",children:Object(x.jsx)(i.a,{path:"/",render:function(){return Object(x.jsx)(A,{})}})})]})})},P=(n(16),n(61)),D=n.n(P),V=n(30),z=n.n(V),B=(n(100),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-28%",transform:"translate(-50%, -50%)",background:"#2d313a",border:"0px",width:"80%"},overlay:{backgroundColor:"#1c1f28"}}),G=function(e){var t=Object(o.useState)({lat:"",lng:"",address:"",fetchedUserLocation:!1}),n=Object(r.a)(t,2),l=n[0],i=n[1];z.a.setApiKey("AIzaSyDWJ8cC97oQYX2itSwNl1tb8Dr4T7P3AI4"),z.a.setLocationType("ROOFTOP"),z.a.enableDebug();Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){i((function(t){return Object(c.a)(Object(c.a)({},t),{},{lat:e.coords.latitude,lng:e.coords.longitude})})),z.a.fromLatLng(e.coords.latitude.toString(),e.coords.longitude.toString()).then((function(e){var t=e.results[0].formatted_address;i((function(e){return Object(c.a)(Object(c.a)({},e),{},{address:t,fetchedUserLocation:!0})}))}),(function(e){console.error(e)}))}))}),[]);var s=a.a.useState(!0),u=Object(r.a)(s,2),d=u[0];u[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(D.a,{isOpen:d,style:B,contentLabel:"Example Modal",children:[l.address.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(h.d,{children:[Object(x.jsx)(h.e,{sub1:!0,children:"Your current location is"}),Object(x.jsx)("br",{})]}),Object(x.jsx)(h.d,{mTop:"-37px",children:Object(x.jsxs)(h.e,{children:[Object(x.jsx)(y.a,{icon:m.h})," \xa0",l.address]})})]}):Object(x.jsx)(h.c,{flex:"all-center",children:Object(x.jsxs)(h.e,{fontSize:"medium",children:[Object(x.jsx)(y.a,{icon:m.f})," \xa0Fetching Current Location..."]})}),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{class:"fade_rule"}),Object(x.jsx)(h.c,{flex:"all-center",children:Object(x.jsx)(h.e,{fontSize:"medium",children:"Or Search your location manually"})})]}),Object(x.jsx)("div",{style:{margin:"20px 0"},children:Object(x.jsx)(f.default,{getCoordinates:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i((function(r){return Object(c.a)(Object(c.a)({},r),{},{lat:e,lng:t,address:n,fetchedUserLocation:!0})}))}})}),Object(x.jsx)(h.c,{flex:"all-center",children:Object(x.jsx)(h.a,{disabled:!l.fetchedUserLocation,onClick:function(){l.fetchedUserLocation&&e.enableRedirect(l)},color:"#6f95ed",children:"Continue"})})]})})},W={apiKey:"AIzaSyCVivoOcEBNdHroJcI6MAcayW6gKZU3rd0",authDomain:"covid-care-e91a2.firebaseapp.com",projectId:"covid-care-e91a2",storageBucket:"covid-care-e91a2.appspot.com",messagingSenderId:"292844100910",appId:"1:292844100910:web:e6ed3b5cdc6ad3c0e82ebf",measurementId:"G-E8ZDTS2B2Z"},M={loading:!0,error:"",data:[]},H=function(e,t){switch(t.type){case"FETCH_SUCCESS_RESOURCES_LIST_DATA":return{loading:!1,data:t.payload,error:""};case"FETCH_ERROR_RESOURCES_LIST_DATA":return{loading:!1,data:{},error:"Error in fetching resources"};default:return e}},J=a.a.createContext();t.b=function(){var e=Object(o.useState)({fetchedUserLocation:!1,lat:"",lng:"",address:"",distance:"50000",perPage:"50",page:"1",sortBy:"createdAt",sortOrder:"asc"}),t=Object(r.a)(e,2),n=t[0],a=t[1],l=Object(o.useReducer)(H,M),i=Object(r.a)(l,2),s=i[0],u=i[1],d=function(e,t){fetch("".concat(p.a.endpoints.getResourcesListNearMe,"?page=").concat(n.page,"&perPage=").concat(n.perPage,"&lat=").concat(e,"&lng=").concat(t,"&distance=").concat(n.distance),{method:"GET",redirect:"follow"}).then((function(e){return console.log("response",e),e.json()})).then((function(e){console.log("boom",e),u({type:"FETCH_SUCCESS_RESOURCES_LIST_DATA",payload:e})})).catch((function(e){u({type:"FETCH_ERROR_RESOURCES_LIST_DATA"})}))};return I.a.apps.length?I.a.app():I.a.initializeApp(W),Object(x.jsx)(x.Fragment,{children:n.fetchedUserLocation?Object(x.jsx)(J.Provider,{value:{resourcesListState:s,getNearbyResourcesList:d},children:Object(x.jsx)(_,{})}):Object(x.jsx)(G,{enableRedirect:function(e){a((function(t){return Object(c.a)(Object(c.a)({},t),{},{fetchedUserLocation:e.fetchedUserLocation,lat:e.lat,lng:e.lng,address:e.address})})),d(e.lat,e.lng)}})})}},69:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return f}));var c,r,o,a,l,i=n(25),s=n(26),u=s.a.div(c||(c=Object(i.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n  flex-flow: ",";\n  width: 100%;\n  margin-top: ",";\n"])),(function(e){return e.justifyContent||"flex-start"}),(function(e){return e.flexFlow||null}),(function(e){return e.mTop?e.mTop:"6px"})),d=s.a.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex-flow: column;\n  width: ",";\n  justify-content: center;\n  margin-right: ",";\n  /* border: ","; */\n  border-radius: ",";\n  padding-left: ",";\n  /* padding-right: ","; */\n  /* margin-top: ","; */\n  transition: ",";\n  &:hover {\n    background-color: ",";\n    /* color: white; */\n  }\n  @media (max-width: 710px) {\n    width: ",";\n  }\n"])),(function(e){return e.width||"40%"}),(function(e){return e.marginRight||null}),(function(e){return e.border?"1px solid #ddd":null}),(function(e){return e.border?"10px":null}),(function(e){return e.border?"5%":null}),(function(e){return e.border?"5%":null}),(function(e){return e.border?"7%":null}),(function(e){return e.border?"box-shadow .3s":null}),(function(e){return e.border?"rgba(33,33,33,.2)":null}),(function(e){return"50%"==e.width?"100%":"40%"})),b=s.a.p(o||(o=Object(i.a)(["\n  font-size: ",";\n  font-weight: ",";\n  float: left;\n  display: block;\n  ","\n  font-size: ","\n"])),(function(e){return e.sub?"10px":e.sub1?"20px":"24px"}),(function(e){return e.bold?"bold":e.sub||e.sub1?"light":"none"}),(function(e){return e.sub&&{marginRight:"50%",marginTop:"-1%",color:"#696969"}}),(function(e){return"medium"===e.fontSize?"16px":"18px"})),j=s.a.button(a||(a=Object(i.a)(["\n  padding: '10px 20px';\n  background-color: ",";\n  /* border: 1px solid #ddd; */\n  border-radius: 20px;\n  color: #e9edf0;\n  height: 10px;\n\n  &:hover {\n    background-color: ",";\n    /* color: white; */\n  }\n"])),(function(e){return e.color||"dodgerblue"}),(function(e){return e.color||"dodgerblue"})),f=s.a.div(l||(l=Object(i.a)(["\n  ","\n"])),(function(e){return"all-center"===e.flex&&{display:"flex",alignItems:"center",justifyContent:"center"}}))},70:function(e,t,n){},71:function(e,t,n){},89:function(e,t,n){}},[[101,3,4]]]);
//# sourceMappingURL=main.8bdb7729.chunk.js.map