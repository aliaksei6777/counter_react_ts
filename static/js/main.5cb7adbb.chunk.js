(this.webpackJsonpcounter_react_ts=this.webpackJsonpcounter_react_ts||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(0);var c=n(7),r=n.n(c),u=(n(17),n(18),n(1)),a=function(e){var t=e.onClick,n=e.disabled,c=e.buttonTitle;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:t,disabled:n,children:c})})},s=n(5),o=n.n(s),l=n(3),i=n(2),b="SET-COUNTER-VALUE",j="SET-MAX-VALUE",d="SET-START-VALUE",O="SET-TEXT-MODE",v="SET-BUTTON-DISABLE",p="SET-SETUP-BLOCK",x=function(e){return{type:b,value:e}},m=function(e){return{type:j,value:e}},_=function(e){return{type:O,mode:e}},h=function(e){return{type:v,mode:e}},k={counterValue:0,maxValue:5,startValue:0,textMode:!1,buttonDisable:!0,setupBlock:!1},f=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.state})),n=t.maxValue,c=t.startValue,r=t.counterValue,s=t.textMode,i=c<0||n<0||n<=c,b="".concat(o.a.counterBlock," ").concat(r===n?o.a.red:""),j="".concat(i?o.a.red:""),d=i?"Incorrect value!":"enter values and press 'set'";return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:o.a.mainBlock,children:[Object(u.jsx)("div",{className:s?o.a.textMode:b,children:s?Object(u.jsx)("span",{className:j,children:d}):Object(u.jsx)("span",{children:r})}),Object(u.jsxs)("div",{className:o.a.buttonBlock,children:[Object(u.jsx)(a,{onClick:function(){return e(x(r+1))},buttonTitle:"inc",disabled:r===n||s}),Object(u.jsx)(a,{onClick:function(){return e(x(c))},buttonTitle:"reset",disabled:r===c||s}),Object(u.jsx)("div",{children:Object(u.jsx)(a,{onClick:function(){return e((n=!t.setupBlock,{type:p,mode:n}));var n},disabled:!1,buttonTitle:"setup"})})]})]})})},B=n(4),T=n.n(B),C=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.state})),n=t.maxValue,c=t.startValue,r=n<0||n<=c?T.a.errorInput:"",s=c<0||n<=c?T.a.errorInput:"";return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:T.a.mainBlock,children:[Object(u.jsxs)("div",{className:T.a.counterBlock,children:[Object(u.jsxs)("div",{className:T.a.valueDisplay,children:[Object(u.jsx)("span",{children:"max value: "}),Object(u.jsx)("input",{className:r,value:n,type:"number",onChange:function(t){e(m(t.currentTarget.valueAsNumber)),t.currentTarget.valueAsNumber<1||t.currentTarget.valueAsNumber<=c?e(h(!0)):e(h(!1)),e(_(!0))}})]}),Object(u.jsxs)("div",{className:T.a.valueDisplay,children:[Object(u.jsx)("span",{children:"start value: "}),Object(u.jsx)("input",{className:s,value:c,type:"number",onChange:function(t){var c;e((c=t.currentTarget.valueAsNumber,{type:d,value:c})),t.currentTarget.valueAsNumber<0||t.currentTarget.valueAsNumber>=n?e(h(!0)):e(h(!1)),e(_(!0))}})]})]}),Object(u.jsx)("div",{className:T.a.buttonBlock,children:Object(u.jsx)(a,{onClick:function(){e(m(n)),e(x(c)),e(_(!1)),e(h(!0))},buttonTitle:"set",disabled:t.buttonDisable})})]})})};var N=function(){var e=Object(l.c)((function(e){return e.state}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{children:Object(u.jsx)(f,{})}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:e.setupBlock&&Object(u.jsx)(C,{})})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,u=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),u(e),a(e)}))},g=n(6),y=Object(g.b)({state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{counterValue:t.value});case j:return Object(i.a)(Object(i.a)({},e),{},{maxValue:t.value});case d:return Object(i.a)(Object(i.a)({},e),{},{startValue:t.value});case O:return Object(i.a)(Object(i.a)({},e),{},{textMode:t.mode});case v:return Object(i.a)(Object(i.a)({},e),{},{buttonDisable:t.mode});case p:return Object(i.a)(Object(i.a)({},e),{},{setupBlock:t.mode});default:return e}return e}}),S=Object(g.c)(y);r.a.render(Object(u.jsx)(l.a,{store:S,children:Object(u.jsx)(N,{})}),document.getElementById("root")),E()},4:function(e,t,n){e.exports={mainBlock:"CounterSetup_mainBlock__2yLcG",counterBlock:"CounterSetup_counterBlock__23j3A",valueDisplay:"CounterSetup_valueDisplay__RfxrD",buttonBlock:"CounterSetup_buttonBlock__2csdq",red:"CounterSetup_red__3vK9H",errorInput:"CounterSetup_errorInput__2PkNE"}},5:function(e,t,n){e.exports={mainBlock:"Counter_mainBlock__QEiOF",counterBlock:"Counter_counterBlock__3JyRV",buttonBlock:"Counter_buttonBlock__3VRPo",red:"Counter_red__1vf0h",textMode:"Counter_textMode__3CKss",setupButton:"Counter_setupButton__omNmf"}}},[[26,1,2]]]);
//# sourceMappingURL=main.5cb7adbb.chunk.js.map