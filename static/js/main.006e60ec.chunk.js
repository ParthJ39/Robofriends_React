(this.webpackJsonpfirstreactproject=this.webpackJsonpfirstreactproject||[]).push([[0],{424:function(e,t,r){},426:function(e,t,r){"use strict";r.r(t);var n=r(16),a=r.n(n),c=r(79),s=r.n(c),i=(r(85),r(12)),o=r.n(i),l=r(80),h=r(33),u=r(34),b=r(36),d=r(35),j=r(7),f=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},p=function(e){var t=e.name,r=e.email,n=e.id;return Object(j.jsxs)("div",{className:"bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(n,"?set=set2&size=300x300"),alt:"robots"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{children:r})]})]})},v=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,r){return Object(j.jsx)(p,{id:t[r].id,name:t[r].name,email:t[r].email},t[r].id)}))})},m=function(e){Object(b.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={hasError:!1},n}return Object(u.a)(r,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h1",{children:"Sorry for the Error. Fixing it in Sometime...."}):this.props.children}}]),r}(n.Component),O=function(e){e.searchfield;var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},x=r(49),g=r.n(x),y=(r(424),{particles:{number:{value:300,density:{enable:!0,value_area:1e3}},color:{value:"#fff"},opacity:{value:.4,anim:{enable:!0}},size:{value:7,random:!0,anim:{enable:!0,speed:3}},line_linked:{enable:!1},move:{speed:.3}}}),C=function(e){Object(b.a)(r,e);var t=Object(d.a)(r);function r(){var e;return Object(h.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,this.setState({robots:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Sorry for the Error",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return t.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)(g.a,{className:"particles",params:y}),Object(j.jsx)("h1",{className:"f1",children:" Friends for All"}),Object(j.jsx)(O,{searchChange:this.onSearchChange}),Object(j.jsx)(f,{children:Object(j.jsx)(m,{children:Object(j.jsx)(v,{robots:n})})})]}):Object(j.jsx)("h1",{children:"Loading"})}}]),r}(n.Component),k=C,w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,427)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};r(425);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),w()},85:function(e,t,r){}},[[426,1,2]]]);
//# sourceMappingURL=main.006e60ec.chunk.js.map