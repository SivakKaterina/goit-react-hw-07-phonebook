(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,n,e){t.exports={form:"contactForm_form__3vEts",input:"contactForm_input__3Tn4i",span:"contactForm_span__2He4Y",button:"contactForm_button__2Ufna"}},27:function(t,n,e){t.exports={label:"filter_label__jhR6M",input:"filter_input__1rgLi"}},28:function(t,n,e){t.exports={sectionContainer:"section_sectionContainer__3avYe",title:"section_title__1V-9l"}},40:function(t,n,e){t.exports={button:"contactList_button__2oeDY"}},78:function(t,n,e){},80:function(t,n,e){"use strict";e.r(n);var c,a,r=e(0),o=e.n(r),u=e(16),i=e.n(u),s=e(9),b=e(42),l=e(19),j=e(20),f=e(23),d=e(21),h=e(5),m=e(13),O=e.n(m),p=e(26),v=e.n(p),x=e(22),C=e(4),_=e(3),g=Object(_.b)("contacts/fetchContactRequest"),y=Object(_.b)("contacts/fetchContactSuccess"),I=Object(_.b)("contacts/fetchContactError"),S=Object(_.b)("contacts/addContactRequest"),N=Object(_.b)("contacts/addContactSuccess"),k=Object(_.b)("contacts/addContactError"),w=Object(_.b)("contacts/deleteContactRequest"),A=Object(_.b)("contacts/deleteContactSuccess"),F=Object(_.b)("contacts/deleteContactError"),L=Object(_.b)("contacts/changeFilter"),D=Object(_.c)([],(c={},Object(h.a)(c,y,(function(t,n){return n.payload})),Object(h.a)(c,N,(function(t,n){var e=n.payload;return[].concat(Object(x.a)(t),[e])})),Object(h.a)(c,A,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),c)),T=Object(_.c)("",Object(h.a)({},L,(function(t,n){return n.payload}))),q=Object(_.c)(!1,(a={},Object(h.a)(a,g,(function(){return!0})),Object(h.a)(a,y,(function(){return!1})),Object(h.a)(a,I,(function(){return!1})),Object(h.a)(a,S,(function(){return!0})),Object(h.a)(a,N,(function(){return!1})),Object(h.a)(a,k,(function(){return!1})),Object(h.a)(a,w,(function(){return!0})),Object(h.a)(a,A,(function(){return!1})),Object(h.a)(a,F,(function(){return!1})),a)),z=Object(C.b)({items:D,filter:T,loading:q}),E=e(14),R=e.n(E);R.a.defaults.baseURL="http://localhost:4040";var M=e(18),J=function(t){return t.contacts.items},Y=function(t){return t.contacts.filter},Z=Object(M.a)([J,Y],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),B=e(1),H=function(t){Object(f.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(l.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.nameInputId=v.a.generate(),t.numberInputId=v.a.generate(),t.handleChange=function(n){t.setState(Object(h.a)({},n.currentTarget.name,n.currentTarget.value))},t.handleSubmit=function(n){var e=t.props,c=e.contacts,a=e.onSubmit,r=t.state,o=r.name,u=r.number;n.preventDefault(),c.some((function(t){return t.name===o}))?alert("This person ".concat(o," is already in contacts")):c.some((function(t){return t.number===u}))?alert("This number ".concat(u," is already in contacts")):a(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(j.a)(e,[{key:"render",value:function(){return Object(B.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(B.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(B.jsx)("input",{className:O.a.input,id:this.nameInputId,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.             \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(B.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(B.jsx)("input",{className:O.a.input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",required:!0}),Object(B.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),e}(r.Component),U=Object(s.b)((function(t){return{contacts:J(t)}}),(function(t){return{onSubmit:function(n,e){return t(function(t){var n=t.name,e=t.number;return function(t){var c={name:n,number:e};t(S()),R.a.post("/contacts",c).then((function(n){var e=n.data;return t(N(e))})).catch((function(n){return t(k(n))}))}}(n))}}}))(H),P=e(40),V=e.n(P),$=Object(s.b)((function(t){return{contacts:Z(t)}}),(function(t){return{onDeleteList:function(n){return t(function(t){return function(n){n(w()),R.a.delete("/contacts/".concat(t)).then((function(){return n(A(t))})).catch((function(t){return n(F(t))}))}}(n))}}}))((function(t){var n=t.contacts,e=t.onDeleteList;return Object(B.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(B.jsxs)("li",{children:[Object(B.jsx)("span",{children:c}),Object(B.jsx)("span",{children:a}),Object(B.jsx)("button",{className:V.a.button,onClick:function(){return e(n)},children:"Delete"})]},n)}))})})),G=e(27),K=e.n(G),Q=Object(s.b)((function(t){return{filter:Y(t)}}),(function(t){return{onChange:function(n){return t(L(n.target.value))}}}))((function(t){var n=t.filter,e=t.onChange;return Object(B.jsxs)("label",{className:K.a.label,children:["Find contacts by name",Object(B.jsx)("input",{className:K.a.input,type:"text",value:n,onChange:e})]})})),W=e(28),X=e.n(W),tt=function(t){var n=t.title,e=t.children;return Object(B.jsxs)("div",{className:X.a.sectionContainer,children:[Object(B.jsx)("h2",{className:X.a.title,children:n}),e]})},nt=function(t){Object(f.a)(e,t);var n=Object(d.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(j.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(tt,{title:"Phonebook",children:Object(B.jsx)(U,{onSubmit:this.formSubmitHandler})}),Object(B.jsxs)(tt,{title:"Contacts",children:[Object(B.jsx)(Q,{}),Object(B.jsx)($,{})]})]})}}]),e}(r.Component),et=Object(s.b)(null,(function(t){return{fetchContact:function(){return t((function(t){t(g()),R.a.get("/contacts").then((function(n){var e=n.data;return t(y(e))})).catch((function(n){return t(I(n))}))}))}}}))(nt),ct=e(41),at=e.n(ct),rt=e(10),ot=[].concat(Object(x.a)(Object(_.d)({serializableCheck:{ignoredActions:[rt.a,rt.f,rt.b,rt.c,rt.d,rt.e]}})),[at.a]),ut=Object(_.a)({reducer:{contacts:z},middleware:ot,devTools:!1});e(77),e(78);i.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(s.a,{store:ut,children:Object(B.jsx)(b.a,{children:Object(B.jsx)(et,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.064d2d42.chunk.js.map