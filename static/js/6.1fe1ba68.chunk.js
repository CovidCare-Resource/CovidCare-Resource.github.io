(this["webpackJsonpcovid-resource"]=this["webpackJsonpcovid-resource"]||[]).push([[6],{105:function(e,t,s){},112:function(e,t,s){"use strict";s.r(t);var c=s(4),r=s(8),n=s(0),a=(s(105),s(7)),i=s(13),o=s(14),j=s(106),d=s(108),l=(s(109),s(31)),p=s(1),b=function(e){return Object(p.jsx)(p.Fragment,{children:e.data?e.data.map((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("a",{style:{color:"#779ff0",marginLeft:"35% "},children:[" ",l.a.StringUtils.subTypeIdToString(e)]}),Object(p.jsx)("hr",{})]})})):null})},x=s(110),h=s.n(x);t.default=function(e){var t=Object(n.useState)({oxygen:{present:!1,subType:[]},medicine:{present:!1,subType:[]},beds:{present:!1,subType:[]},doctor:{present:!1,subType:[]},food:{present:!1,subType:[]}}),s=Object(r.a)(t,2),l=s[0],x=s[1],O=Object(n.useState)([]),u=Object(r.a)(O,2),g=u[0],y=u[1];return Object(n.useEffect)((function(){var t=[],s=function(s){switch(s){case"1":x((function(t){return Object(c.a)(Object(c.a)({},t),{},{oxygen:{present:!0,subType:e.data.properties.resources[s]}})})),t.push("Oxygen Cylinder New/Refill");break;case"2":x((function(t){return Object(c.a)(Object(c.a)({},t),{},{medicine:{present:!0,subType:e.data.properties.resources[s]}})})),t.push("Corona Related Medicines");break;case"3":x((function(t){return Object(c.a)(Object(c.a)({},t),{},{beds:{present:!0,subType:e.data.properties.resources[s]}})})),t.push("Corona Beds");break;case"4":x((function(t){return Object(c.a)(Object(c.a)({},t),{},{doctor:{present:!0,subType:e.data.properties.resources[s]}})})),t.push("Doctors for Covid related queries");break;case"5":x((function(t){return Object(c.a)(Object(c.a)({},t),{},{food:{present:!0,subType:e.data.properties.resources[s]}})})),t.push("Fresh Food for People in Isolation")}};for(var r in e.data.properties.resources)s(r);y(t)}),[e]),Object(p.jsxs)(p.Fragment,{children:[console.log("am i called? 3",g),Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"column",children:Object(p.jsxs)("div",{class:"card",children:[Object(p.jsxs)(a.d,{children:[l.oxygen.present?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{trigger:Object(p.jsxs)(a.a,{color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Oxygen"]}),position:"top center",children:Object(p.jsx)(b,{data:l.oxygen.subType})}),"\xa0\xa0"]}):null,l.beds.present?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{trigger:Object(p.jsxs)(a.a,{color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Beds"]}),position:"top center",children:Object(p.jsx)(b,{data:l.beds.subType})}),"\xa0\xa0"]}):null,l.food.present?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{trigger:Object(p.jsxs)(a.a,{color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Food"]}),position:"top center",children:Object(p.jsx)(b,{data:l.food.subType})}),"\xa0\xa0"]}):null,l.medicine.present?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{trigger:Object(p.jsxs)(a.a,{color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Medicine"]}),position:"top center",children:Object(p.jsx)(b,{data:l.medicine.subType})}),"\xa0\xa0"]}):null,l.doctor.present?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{trigger:Object(p.jsxs)(a.a,{color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Doctor"]}),position:"top center",children:Object(p.jsx)(b,{data:l.doctor.subType})}),"\xa0\xa0"]}):null,Object(p.jsxs)(a.a,{disabled:!0,color:"#659a62",style:{minHeight:"24px",marginTop:"4px",padding:"5px 10px"},children:[Object(p.jsx)(i.a,{icon:o.b})," \xa0Ambulance"]})]}),Object(p.jsxs)(a.d,{children:[Object(p.jsx)(a.b,{children:Object(p.jsx)(a.e,{style:{margin:"10px 0"},bold:!0,children:e.data.properties.name?Object(p.jsx)(p.Fragment,{children:e.data.properties.name}):Object(p.jsx)(p.Fragment,{children:"Unnamed"})})}),e.mod?null:Object(p.jsx)(a.b,{width:"30%",children:Object(p.jsxs)("div",{style:{marginLeft:"100%"},children:[" ",Object(p.jsx)(a.e,{sub1:!0,style:{alignItems:"center",justifyContent:"center"},children:Object(p.jsx)("a",{target:"_blank",style:{color:"#779ff0",fontSize:"30px"},href:"http://www.google.com/maps/place/".concat(e.data.properties.lat,",").concat(e.data.properties.lng,"/@").concat(e.data.properties.lat,",").concat(e.data.properties.lng,",17z"),children:Object(p.jsx)(i.a,{icon:o.d})})})]})})]}),Object(p.jsx)(a.d,{children:Object(p.jsx)(a.b,{width:"50%",children:Object(p.jsx)(a.e,{style:{margin:"10px 0"},sub:!0,children:e.data.properties.address?Object(p.jsx)(p.Fragment,{children:e.data.properties.address}):null})})}),Object(p.jsx)(a.d,{children:Object(p.jsx)("p",{children:h()(e.data.createAt).format("ddd Do, MMM yyyy")})}),Object(p.jsx)("br",{}),Object(p.jsxs)(a.d,{style:{marginTop:"20px"},children:[Object(p.jsx)(a.b,{width:"20%",children:Object(p.jsxs)(a.e,{sub1:!0,style:{alignItems:"center",justifyContent:"center"},children:[Object(p.jsx)(i.a,{icon:o.i})," \xa0"," ",Object(p.jsx)("a",{href:e.data.properties.phone?"tel:".concat(e.data.properties.phone):null,style:{color:"#779ff0"},children:"Call"})]})}),"\xa0\xa0\xa0",Object(p.jsx)(a.b,{width:"20%",children:Object(p.jsxs)(a.e,{sub1:!0,style:{alignItems:"center",justifyContent:"center"},children:[Object(p.jsx)(i.a,{icon:e.mod?o.r:o.o})," ","\xa0"," ",e.mod?Object(p.jsxs)(d.a,{trigger:Object(p.jsx)("a",{style:{color:"#779ff0"},children:" Verify"}),position:"bottom center",children:[Object(p.jsxs)("a",{style:{color:"#779ff0"},children:[" ",Object(p.jsx)(i.a,{icon:o.c})," \xa0Verified"]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("a",{style:{color:"#779ff0"},children:[" ",Object(p.jsx)(i.a,{icon:o.j})," ","\xa0Unreachable"]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("a",{style:{color:"#779ff0"},children:[Object(p.jsx)(i.a,{icon:o.e})," \xa0Fake"]})]}):Object(p.jsx)("a",{href:j.isMobile?"whatsapp://send?text=Availability : ".concat(g.join()," at ").concat(e.data.properties.name,". Contact ").concat(e.data.properties.number," for further details. Courtesy https://sonusood-lite.org"):"https://web.whatsapp.com://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement",rel:"nofollow noopener",target:"_blank",className:"share-icon",style:{color:"#779ff0"},children:"Share"})]})})]})]})})})]})}}}]);
//# sourceMappingURL=6.1fe1ba68.chunk.js.map