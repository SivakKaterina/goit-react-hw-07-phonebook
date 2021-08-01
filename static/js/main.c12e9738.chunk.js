(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,n,e){t.exports={form:"contactForm_form__3vEts",input:"contactForm_input__3Tn4i",span:"contactForm_span__2He4Y",button:"contactForm_button__2Ufna"}},27:function(t,n,e){t.exports={label:"filter_label__jhR6M",input:"filter_input__1rgLi"}},28:function(t,n,e){t.exports={sectionContainer:"section_sectionContainer__3avYe",title:"section_title__1V-9l"}},40:function(t,n,e){t.exports={button:"contactList_button__2oeDY"}},78:function(t,n,e){},80:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(16),o=e.n(r),u=e(9),i=e(42),s=e(19),b=e(20),l=e(23),j=e(21),f=e(5),d=e(13),h=e.n(d),m=e(26),O=e.n(m),p=e(14),v=e.n(p),x=e(3),C=Object(x.b)("contacts/fetchContactRequest"),_=Object(x.b)("contacts/fetchContactSuccess"),g=Object(x.b)("contacts/fetchContactError"),y=Object(x.b)("contacts/addContactRequest"),I=Object(x.b)("contacts/addContactSuccess"),S=Object(x.b)("contacts/addContactError"),N=Object(x.b)("contacts/deleteContactRequest"),k=Object(x.b)("contacts/deleteContactSuccess"),w=Object(x.b)("contacts/deleteContactError"),A=Object(x.b)("contacts/changeFilter");v.a.defaults.baseURL="http://localhost:4040";var F,L,D=e(18),T=function(t){return t.contacts.items},q=function(t){return t.contacts.filter},z=Object(D.a)([T,q],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),E=e(1),R=function(t){Object(l.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(s.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.nameInputId=O.a.generate(),t.numberInputId=O.a.generate(),t.handleChange=function(n){t.setState(Object(f.a)({},n.currentTarget.name,n.currentTarget.value))},t.handleSubmit=function(n){var e=t.props,c=e.contacts,a=e.onSubmit,r=t.state,o=r.name,u=r.number;n.preventDefault(),c.some((function(t){return t.name===o}))?alert("This person ".concat(o," is already in contacts")):c.some((function(t){return t.number===u}))?alert("This number ".concat(u," is already in contacts")):a(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(e,[{key:"render",value:function(){return Object(E.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(E.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(E.jsx)("input",{className:h.a.input,id:this.nameInputId,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.             \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(E.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(E.jsx)("input",{className:h.a.input,id:this.numberInputId,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",required:!0}),Object(E.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})}}]),e}(c.Component),M=Object(u.b)((function(t){return{contacts:T(t)}}),(function(t){return{onSubmit:function(n,e){return t(function(t){var n=t.name,e=t.number;return function(t){var c={name:n,number:e};t(y()),v.a.post("/contacts",c).then((function(n){var e=n.data;return t(I(e))})).catch((function(n){return t(S(n))}))}}(n))}}}))(R),J=e(40),Y=e.n(J),Z=Object(u.b)((function(t){return{contacts:z(t)}}),(function(t){return{onDeleteList:function(n){return t(function(t){return function(n){n(N()),v.a.delete("/contacts/".concat(t)).then((function(){return n(k(t))})).catch((function(t){return n(w(t))}))}}(n))}}}))((function(t){var n=t.contacts,e=t.onDeleteList;return Object(E.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(E.jsxs)("li",{children:[Object(E.jsx)("span",{children:c}),Object(E.jsx)("span",{children:a}),Object(E.jsx)("button",{className:Y.a.button,onClick:function(){return e(n)},children:"Delete"})]},n)}))})})),B=e(27),H=e.n(B),U=Object(u.b)((function(t){return{filter:q(t)}}),(function(t){return{onChange:function(n){return t(A(n.target.value))}}}))((function(t){var n=t.filter,e=t.onChange;return Object(E.jsxs)("label",{className:H.a.label,children:["Find contacts by name",Object(E.jsx)("input",{className:H.a.input,type:"text",value:n,onChange:e})]})})),P=e(28),V=e.n(P),$=function(t){var n=t.title,e=t.children;return Object(E.jsxs)("div",{className:V.a.sectionContainer,children:[Object(E.jsx)("h2",{className:V.a.title,children:n}),e]})},G=function(t){Object(l.a)(e,t);var n=Object(j.a)(e);function e(){return Object(s.a)(this,e),n.apply(this,arguments)}return Object(b.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)($,{title:"Phonebook",children:Object(E.jsx)(M,{onSubmit:this.formSubmitHandler})}),Object(E.jsxs)($,{title:"Contacts",children:[Object(E.jsx)(U,{}),Object(E.jsx)(Z,{})]})]})}}]),e}(c.Component),K=Object(u.b)(null,(function(t){return{fetchContact:function(){return t((function(t){t(C()),v.a.get("/contacts").then((function(n){var e=n.data;return t(_(e))})).catch((function(n){return t(g(n))}))}))}}}))(G),Q=e(22),W=e(4),X=Object(x.c)([],(F={},Object(f.a)(F,_,(function(t,n){return n.payload})),Object(f.a)(F,I,(function(t,n){var e=n.payload;return[].concat(Object(Q.a)(t),[e])})),Object(f.a)(F,k,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),F)),tt=Object(x.c)("",Object(f.a)({},A,(function(t,n){return n.payload}))),nt=Object(x.c)(!1,(L={},Object(f.a)(L,C,(function(){return!0})),Object(f.a)(L,_,(function(){return!1})),Object(f.a)(L,g,(function(){return!1})),Object(f.a)(L,y,(function(){return!0})),Object(f.a)(L,I,(function(){return!1})),Object(f.a)(L,S,(function(){return!1})),Object(f.a)(L,N,(function(){return!0})),Object(f.a)(L,k,(function(){return!1})),Object(f.a)(L,w,(function(){return!1})),L)),et=Object(W.b)({items:X,filter:tt,loading:nt}),ct=e(41),at=e.n(ct),rt=e(10),ot=[].concat(Object(Q.a)(Object(x.d)({serializableCheck:{ignoredActions:[rt.a,rt.f,rt.b,rt.c,rt.d,rt.e]}})),[at.a]),ut=Object(x.a)({reducer:{contacts:et},middleware:ot,devTools:!1});e(77),e(78);o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(u.a,{store:ut,children:Object(E.jsx)(i.a,{children:Object(E.jsx)(K,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.c12e9738.chunk.js.map