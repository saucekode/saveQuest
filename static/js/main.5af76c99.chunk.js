(this["webpackJsonpsave-quest"]=this["webpackJsonpsave-quest"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),r=a(8),c=a.n(r),n=a(3),j=a(9),l=a(6),m=a(2),b=a(0),O=function(){var e=Object(i.useState)({firstName:"",lastName:"",email:"",tierType:"",amount:"",interest:""}),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)({firstName:"",lastName:"",email:"",tierType:""}),c=Object(n.a)(r,2),O=c[0],o=c[1],u=Object(i.useState)([]),d=Object(n.a)(u,2),h=d[0],x=d[1],p=function(e){var t=e.target,i=t.name,r=t.value,c=Object(m.a)({},a);"tier_1"===r?c=Object(m.a)(Object(m.a)({},c),{},{amount:"10000",interest:500}):"tier_2"===r?c=Object(m.a)(Object(m.a)({},c),{},{amount:"20000",interest:2e3}):"tier_3"===r&&(c=Object(m.a)(Object(m.a)({},c),{},{amount:"30000",interest:6e3})),c[i]=r,s(c),o((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(l.a)({},i,""))}))};return Object(i.useEffect)((function(){localStorage.setItem("users",JSON.stringify(h))})),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=!0,i=Object(m.a)({},O);""===a.firstName.trim()&&(t=!1,i.firstName="First name is required"),""===a.lastName.trim()&&(t=!1,i.lastName="Last name is required"),""===a.email.trim()?(t=!1,i.email="Email is required"):/\S+@\S+\.\S+/.test(a.email)||(t=!1,i.email="Invalid email format"),""===a.tierType.trim()&&(t=!1,i.tierType="Tier type is required"),o(i),t&&(localStorage.setItem("formData",JSON.stringify(a)),x((function(e){return[].concat(Object(j.a)(e),[a])})),s({firstName:"",lastName:"",email:"",tierType:""}))},children:[Object(b.jsxs)("div",{children:[O.firstName&&Object(b.jsx)("div",{className:"error",children:O.firstName}),Object(b.jsxs)("label",{children:["First Name",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"firstName",value:a.firstName,onChange:p})]})]}),Object(b.jsxs)("div",{children:[O.lastName&&Object(b.jsx)("div",{className:"error",children:O.lastName}),Object(b.jsxs)("label",{children:["Last Name",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"lastName",value:a.lastName,onChange:p})]})]}),Object(b.jsxs)("div",{children:[O.email&&Object(b.jsx)("div",{className:"error",children:O.email}),Object(b.jsxs)("label",{children:["Email",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"email",name:"email",value:a.email,onChange:p})]})]}),Object(b.jsxs)("div",{children:[O.tierType&&Object(b.jsx)("div",{className:"error",children:O.tierType}),Object(b.jsxs)("label",{children:["Select tier",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{name:"tierType",value:a.tierType,onChange:p,children:[Object(b.jsx)("option",{value:"",children:"Select a savings tier"}),Object(b.jsx)("option",{value:"tier_1",children:"Tier 1"}),Object(b.jsx)("option",{value:"tier_2",children:"Tier 2"}),Object(b.jsx)("option",{value:"tier_3",children:"Tier 3"})]})]})]}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})},o=(a(15),function(){var e=Object(i.useState)(),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(b.jsxs)("div",{className:"App",children:[!a&&Object(b.jsxs)("div",{className:"p-top center",children:[Object(b.jsx)("p",{className:"heading",children:"Welcome to SaveQuest"}),Object(b.jsx)("p",{className:"sub-heading",children:"SaveQuest is a savings application that earns you profit in a week period."}),Object(b.jsx)("buton",{className:"save-btn",onClick:function(){s(!0)},children:"Start Saving Now"})]}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"center form-heading",children:"Savings form"}),Object(b.jsx)("div",{className:"form",children:Object(b.jsx)(O,{})})]})]})});c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5af76c99.chunk.js.map