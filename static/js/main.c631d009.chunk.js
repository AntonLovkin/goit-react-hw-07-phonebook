(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{33:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),s=(n(33),n(6)),u=n(2),i=Object(u.b)("contacts/fetchContactsRequest"),l=Object(u.b)("contacts/fetchContactsSuccess"),b=Object(u.b)("contacts/fetchContactsError"),j=Object(u.b)("contacts/addContactRequest"),d=Object(u.b)("contacts/addContactSuccess"),f=Object(u.b)("contacts/addContactError"),h=Object(u.b)("contacts/deleteContactRequest"),m=Object(u.b)("contacts/deleteContactSuccess"),O=Object(u.b)("contacts/deleteContactError"),p=Object(u.b)("contacts/changeFilter"),v=n(1),C=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(p(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(v.jsx)("div",{className:"filter",children:Object(v.jsxs)("label",{className:"label",children:["Find contacts by name:",Object(v.jsx)("input",{className:"input",type:"text",value:e,onChange:n})]})})})),x=n(13),g=n.n(x),N=n(23),y=n(8),S=n.n(y);S.a.defaults.baseURL="http://localhost:4040";var k,w=function(t,e){return function(n){var c={name:t,number:e};n(j()),S.a.post("/contacts",c).then((function(t){var e=t.data;return n(d(e))})).catch((function(t){return n(f(t))}))}},F=function(t){return function(e){e(h()),S.a.delete("/contacts/".concat(t)).then((function(){return e(m(t))})).catch((function(t){return e(O(t))}))}},A=function(){return function(){var t=Object(N.a)(g.a.mark((function t(e){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i()),t.prev=1,t.next=4,S.a.get("/contacts");case 4:n=t.sent,c=n.data,e(l(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(b(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},q=(n(60),function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}),D=Object(s.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{filteredContacts:q(n,c)}}),(function(t){return{onDeleteContact:function(e){return t(F(e))}}}))((function(t){var e=t.filteredContacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(v.jsxs)("li",{className:"contact-item",children:[Object(v.jsxs)("span",{className:"contact-name",children:[e," : "]}),Object(v.jsxs)("span",{className:"contact-number",children:[" ",c]}),Object(v.jsx)("button",{className:"button contact-item__button",onClick:function(){return n(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))})})),L=n(5),z=n(24),E=n(25),R=n(28),P=n(27),T=(n(61),n(62),function(t){Object(R.a)(n,t);var e=Object(P.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(L.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;t.props.onSubmit(c,a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(v.jsxs)("form",{className:"contacts-form",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{className:"label",children:["Name",Object(v.jsx)("input",{className:"input",value:this.state.name,onChange:this.handleChange,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:" ",required:!0})]}),Object(v.jsxs)("label",{className:"label",children:["Number",Object(v.jsx)("input",{className:"input",value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{className:"button add",type:"submit",children:"Add contact"})]})}}]),n}(c.Component)),Z=Object(s.b)(null,(function(t){return{onSubmit:function(e,n){return t(w(e,n))},fetchContacts:function(){return t(A())}}}))(T),B=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(Z,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(C,{}),Object(v.jsx)(D,{})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},J=n(10),M=n(26),_=n.n(M),U=n(7),$=n(3),G=Object(u.c)([],(k={},Object(L.a)(k,l,(function(t,e){return e.payload})),Object(L.a)(k,d,(function(t,e){var n=e.payload;return t.map((function(t){return t.name})).includes(n.name)?(alert("".concat(n.name," is already in contacts")),void console.log(n.name)):[n].concat(Object(J.a)(t))})),Object(L.a)(k,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),k)),H=Object(u.c)("",Object(L.a)({},p,(function(t,e){return e.payload}))),K=Object(u.c)(null,{}),Q=Object($.b)({items:G,filter:H,error:K}),V=[].concat(Object(J.a)(Object(u.d)({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}})),[_.a]),W=Object(u.a)({reducer:{contacts:Q},middleware:V,devTools:!1});o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(s.a,{store:W,children:Object(v.jsx)(B,{})})}),document.getElementById("root")),I()}},[[64,1,2]]]);
//# sourceMappingURL=main.c631d009.chunk.js.map