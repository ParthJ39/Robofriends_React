(this.webpackJsonpfirstreactproject=this.webpackJsonpfirstreactproject||[]).push([[0],{14:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(8),a=r.n(s),o=(r(14),r(7)),i=r.n(o),h=r(9),l=r(2),u=r(3),j=r(5),b=r(4),d=r(0),f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},p=function(e){var t=e.name,r=e.email,n=e.id;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(n,"?set=set2&size=300x300"),alt:"robots"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:r})]})]})},O=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,r){return Object(d.jsx)(p,{id:t[r].id,name:t[r].name,email:t[r].email},t[r].id)}))})},x=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Sorry for the Error. Fixing it in Sometime...."}):this.props.children}}]),r}(n.Component),v=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},g=(r(17),function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.setState({robots:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Sorry for the Error",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(d.jsx)(v,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(x,{children:Object(d.jsx)(O,{robots:n})})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),r}(n.Component)),m=g,C=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};r(18);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.ead1dfdc.chunk.js.map