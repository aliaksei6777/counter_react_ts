(this.webpackJsonpcounter_react_ts=this.webpackJsonpcounter_react_ts||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(12),u=a.n(n),r=(a(19),a(4)),l=(a(20),a(1));function s(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:e.onClick,disabled:e.disabled,children:e.buttonTitle})})}var o=a(5),i=a.n(o);var j=function(e){var t="".concat(i.a.counterBlock," ").concat(e.counterValue===e.maxValue?i.a.red:""),a="".concat(e.startValue<0||e.maxValue<0||e.maxValue<=e.startValue?i.a.red:""),c="";return c=e.startValue<0||e.maxValue<0||e.maxValue<=e.startValue?"Incorrect value!":"enter values and press 'set'",Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:i.a.mainBlock,children:[Object(l.jsx)("div",{className:e.textMode?i.a.textMode:t,children:e.textMode?Object(l.jsx)("span",{className:a,children:c}):Object(l.jsx)("span",{children:e.counterValue})}),Object(l.jsxs)("div",{className:i.a.buttonBlock,children:[Object(l.jsx)(s,{onClick:e.onIncClickHandler,buttonTitle:"inc",disabled:e.counterValue===e.maxValue||e.textMode}),Object(l.jsx)(s,{onClick:e.onResetClickHandler,buttonTitle:"reset",disabled:e.counterValue===e.startValue})]})]})})},b=a(3),d=a.n(b);var x=function(e){var t=Object(c.useState)(!0),a=Object(r.a)(t,2),n=a[0],u=a[1],o=e.maxValue<0||e.maxValue<=e.startValue?d.a.errorInput:"",i=e.startValue<0||e.maxValue<=e.startValue?d.a.errorInput:"";return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:d.a.mainBlock,children:[Object(l.jsxs)("div",{className:d.a.counterBlock,children:[Object(l.jsxs)("div",{className:d.a.valueDisplay,children:[Object(l.jsx)("span",{children:"max value: "}),Object(l.jsx)("input",{className:o,value:e.maxValue,type:"number",onChange:function(t){e.setMaxValue(t.currentTarget.valueAsNumber),t.currentTarget.valueAsNumber<0||t.currentTarget.valueAsNumber<=e.startValue?u(!0):u(!1),e.setTextMode(!0)}})]}),Object(l.jsxs)("div",{className:d.a.valueDisplay,children:[Object(l.jsx)("span",{children:"start value: "}),Object(l.jsx)("input",{className:i,value:e.startValue,type:"number",onChange:function(t){e.setStartValue(t.currentTarget.valueAsNumber),t.currentTarget.valueAsNumber<0||t.currentTarget.valueAsNumber>=e.maxValue?u(!0):u(!1),e.setTextMode(!0)}})]})]}),Object(l.jsx)("div",{className:d.a.buttonBlock,children:Object(l.jsx)(s,{onClick:function(){e.setMaxValue(e.maxValue),e.setCounterValue(e.startValue),e.setTextMode(!1),u(!0)},buttonTitle:"set",disabled:n})})]})})};var m=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1],u=Object(c.useState)(5),s=Object(r.a)(u,2),o=s[0],i=s[1],b=Object(c.useState)(0),d=Object(r.a)(b,2),m=d[0],O=d[1],v=Object(c.useState)(!1),V=Object(r.a)(v,2),f=V[0],_=V[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("counterValue");if(e){var t=JSON.parse(e);n(t)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(a))}),[a]),Object(c.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);i(t)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(o))}),[o]),Object(c.useEffect)((function(){var e=localStorage.getItem("startValue");if(e){var t=JSON.parse(e);O(t)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("startValue",JSON.stringify(m))}),[m]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{maxValue:o,startValue:m,setCounterValue:n,setMaxValue:i,setTextMode:_,setStartValue:O}),Object(l.jsx)(j,{counterValue:a,maxValue:o,startValue:m,onIncClickHandler:function(){return n(a+1)},onResetClickHandler:function(){return n(m)},textMode:f})]}),Object(l.jsx)("div",{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,u=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),u(e),r(e)}))},v=a(14);u.a.render(Object(l.jsx)(v.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()},3:function(e,t,a){e.exports={mainBlock:"CounterSetup_mainBlock__2yLcG",counterBlock:"CounterSetup_counterBlock__23j3A",valueDisplay:"CounterSetup_valueDisplay__RfxrD",buttonBlock:"CounterSetup_buttonBlock__2csdq",red:"CounterSetup_red__3vK9H",errorInput:"CounterSetup_errorInput__2PkNE"}},5:function(e,t,a){e.exports={mainBlock:"Counter_mainBlock__QEiOF",counterBlock:"Counter_counterBlock__3JyRV",buttonBlock:"Counter_buttonBlock__3VRPo",red:"Counter_red__1vf0h",textMode:"Counter_textMode__3CKss"}}},[[27,1,2]]]);
//# sourceMappingURL=main.355dcf6e.chunk.js.map