(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(14),s=a.n(i),r=(a(163),a(48)),o=a(28),l=a(17),u=(a(164),a(165),a(349)),j=a(334),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(98),m=a.n(O),p=a(135),f=(a(172),a(173),a(338)),x=a(136),v=a.n(x),g=a(137),N=a.n(g),D=a(149),A=a(350),C=a.p+"static/media/couverture.2dc9ece9.webp";function y(e){e.id;var t=e.nom,a=e.couleur,n=e.datemodif,i=e.couverture,s=Object(c.useState)(null),r=Object(l.a)(s,2),o=r[0],u=r[1],j=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(f.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(v.a,{})}),Object(b.jsx)("img",{src:i||C,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",S(n)]})]}),Object(b.jsx)(f.a,{className:"modifier","aria-label":"modifier",size:"small","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(D.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:j,children:[Object(b.jsx)(A.a,{onClick:j,children:"Modifier"}),Object(b.jsx)(A.a,{onClick:j,children:"Supprimer"})]})]})}function S(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var I=a(138);a(296);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyDg9Y9_KlsPAThZZTHRb88R3xXTC0U9o3Q",authDomain:"pvt-h21.firebaseapp.com",databaseURL:"https://pvt-h21-default-rtdb.firebaseio.com",projectId:"pvt-h21",storageBucket:"pvt-h21.appspot.com",messagingSenderId:"424129836393",appId:"1:424129836393:web:7e74a91d073d91e2a2f9f8"});var k=new I.a.AuthUI(d.a.auth()),w=d.a.firestore();a(185);function R(){return Object(b.jsx)("article",{className:"DossierVide",children:Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:"Votre liste de dossiers est vide"}),Object(b.jsx)("h1",{children:";-("})]})})}function F(e){var t=e.utilisateur,a=e.etatDossiers,n=Object(l.a)(a,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,w.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),s(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.length?Object(b.jsx)("ul",{className:"ListeDossiers",children:i.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y,Object(r.a)({},e))},e.id)}))}):Object(b.jsx)(R,{})}var E=a(344),V=a(146),B=a.n(V);a(186),a(187);function P(){return Object(c.useEffect)((function(){return k.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var T=a(345),z=a(347),M=a(342),U=a(341),_=a(348),L=a(147),W=a(148),G=a(340),J=a(343),K=a(144),Y=a.n(K),Z=a(145),q=a.n(Z),H=Object(W.a)({palette:{primary:{main:Y.a[700]},secondary:{main:q.a[900]}}}),Q=Object(G.a)((function(e){return{root:{"& > *":{margin:e.spacing(1.5)}}}}));function X(e){var t=e.ouvert,a=e.setOuvert,n=e.gererAjout,i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],o=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(c.useState)("#537169"),p=Object(l.a)(m,2),f=p[0],x=p[1],v=Q();function g(){o(""),O(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(z.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(_.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(U.a,{children:[Object(b.jsx)(T.a,{autoFocus:!0,margin:"normal",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(T.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(L.a,{width:"100%",triangle:"hide",onChangeComplete:function(e,t){return x(e.hex)},color:f,colors:["#DBB1BC","#FF5733","#48A9A6","#1CD0B4","#D01CC7","#A3D9FF"]})]}),Object(b.jsx)(M.a,{className:v.root,children:Object(b.jsxs)(J.a,{theme:H,children:[Object(b.jsx)(j.a,{onClick:function(){a(!1),g()},variant:"contained",color:"secondary",children:"Annuler"}),Object(b.jsx)(j.a,{onClick:function(){""!==r&&n(r,h,f),g()},variant:"contained",color:"primary",children:"Ajouter"})]})})]})})}function $(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),u=s[0],j=s[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),p=m[0],f=m[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){n(e),e&&w.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(F,{utilisateur:a,etatDossiers:i}),Object(b.jsx)(X,{ouvert:p,setOuvert:f,gererAjout:function(e,t,c){var n={nom:e,couverture:t,couleur:c,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};w.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(n).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),f(!1)}))}}),Object(b.jsx)(E.a,{onClick:function(){return f(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(B.a,{})})]})]}):Object(b.jsx)(P,{})})}s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("racine"))}},[[294,1,2]]]);
//# sourceMappingURL=main.d94ecf75.chunk.js.map