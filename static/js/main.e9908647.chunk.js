(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),l=a(104),i=a(106),o=(a(52),a(6)),m=a(7),u=a(9),d=a(8),p=a(10),h=a(15),v=a(105),g=a(24),E=(a(61),a(103)),b=a(44),f=a(45),N=a.n(f),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"checkActive",value:function(e){return e===this.props.page?"active":void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Navbar"},r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top",id:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{onClick:function(){return e.props.handleLinkClick("homepage")},to:"/scp-react/"},r.a.createElement("div",{className:"d-inline-flex flex-row"},r.a.createElement("div",{className:"p-2 no-padding"},r.a.createElement("img",{className:"navbar-icon",src:N.a,alt:"SCP Foundation"})),r.a.createElement("div",{className:"p-2 no-padding text-left"},r.a.createElement("h1",{className:"navbar-brand no-margin no-padding"},"SCP Foundation"),r.a.createElement("br",null),r.a.createElement("h3",{className:"navbar-brand no-margin no-padding"},"Secure, Contain, Protect")))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},b.map(function(e){var t=this;return r.a.createElement("li",{className:"nav-item",key:e.id},r.a.createElement(E.a,{className:"nav-link "+this.checkActive(e.target),to:"/scp-react/"+e.target,onClick:function(){return t.props.handleLinkClick(e.target)}},e.name))},this))))),r.a.createElement("div",{className:"navbar-margin"}))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Homepage"},r.a.createElement("h3",null,"WARNING: THE FOUNDATION DATABASE IS"),r.a.createElement("h1",null,"CLASSIFIED"),r.a.createElement("h4",null,"ACCESS BY UNAUTHORIZED PERSONNEL IS",r.a.createElement("br",null),"STRICTLY PROHIBITED"),r.a.createElement("h4",null,"PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED"))}}]),t}(n.Component),y=a(13),O=a.n(y),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={thousands:"",hundreds:0,scips:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateView(0,0)}},{key:"updateThousands",value:function(e){this.setState({thousands:e}),console.log(e.toString()+" "+this.state.hundreds.toString()),this.updateView(e,this.state.hundreds)}},{key:"updateHundreds",value:function(e){this.setState({hundreds:e}),console.log(this.state.thousands.toString()+" "+e.toString()),this.updateView(this.state.thousands,e)}},{key:"updateView",value:function(e,t){var a=this,n=e.toString()+t.toString()+"00",r=e.toString()+t.toString()+"99";O.a.get(this.props.db_address+"pages?first_scip_index="+n+"&last_scip_index="+r,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(e){a.setState({scips:e.data}),console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"MainlistView row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Mainlist Articles")),r.a.createElement("div",{className:"col-3"},r.a.createElement("h3",null,"Series:"),r.a.createElement("ul",{className:"list-group"},["",1,2,3,4].map(function(t){return r.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return e.updateThousands(t)}},t,"000")}))),r.a.createElement("div",{className:"col-3"},r.a.createElement("h3",null,"Centile:"),r.a.createElement("ul",{className:"list-group"},[0,1,2,3,4,5,6,7,8,9].map(function(t){return r.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return e.updateHundreds(t)}},t,"00")}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",null,"SCiP:"),r.a.createElement("ul",{className:"list-group page-limited set-height"},this.state.scips.map(function(e){if(null!==e){var t=e.url.substr(28),a=encodeURIComponent(e.url);return r.a.createElement(E.a,{to:"/scp-react/page/"+a,key:t},r.a.createElement("li",{className:"list-group-item"},"SCP-",t))}}))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={canons:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(this.props.db_address+"pages?tag=hub",{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(t){e.setState({canons:t.data}),console.log(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"MainlistView row"},r.a.createElement("div",{className:"col-12 mx-auto"},r.a.createElement("h1",null,"Canons"),r.a.createElement("ul",{className:"list-group"},this.state.canons.map(function(e){if(null!==e){var t=encodeURIComponent(e.url);return r.a.createElement(E.a,{to:"/page/"+t,key:t},r.a.createElement("li",{className:"list-group-item"},e.url))}}))))}}]),t}(n.Component),w=a(25),T=a.n(w),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={innerHTML:"",pageTags:[]},console.log(a.props.url),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.url),O.a.get(this.props.db_address+"pages?url="+this.props.url,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(t){e.setState({innerHTML:t.data[0].html,pageTags:t.data[1]}),console.log(t);var a=document.getElementsByClassName("yui-navset");if(null!==a)for(var n,r,s,c,l=0;l<a.length;l++){(r=(n=a[l]).getElementsByClassName("yui-nav")[0]).className="yui-nav nav navbar-nav",s=r.children,c=n.getElementsByClassName("yui-content")[0].children;for(var i=0;i<s.length;i++)s[i].onclick=function(t){e.updateTabs(t)},s[i].id="nav-"+l.toString()+"-"+i.toString(),s[i].innerHTML=s[i].textContent,c[i].id="content-"+l.toString()+"-"+i.toString()}}).catch(function(t){e.setState({innerHTML:"ERROR 404: Page not found."}),console.log(t)})}},{key:"updateTabs",value:function(e){var t,a,n,r=((e=e||window.event).target||e.srcElement).id.split("-"),s=r[1],c=r[2];a=(t=document.getElementsByClassName("yui-navset")[s]).getElementsByClassName("yui-nav nav navbar-nav")[0].children,n=t.getElementsByClassName("yui-content")[0].children;for(var l=!1,i=-1;!1===l;)"selected"===a[i+=1].className&&(l=!0);var o=a[i],m=a[c],u=n[i],d=n[c];o.className="",m.className="selected",u.style="display:none",d.style=""}},{key:"render",value:function(){var e={url:this.props.url,identifier:this.props.url,title:this.props.url};return r.a.createElement("div",{className:"Page"},r.a.createElement("div",{className:"Page-html col-12",dangerouslySetInnerHTML:{__html:this.state.innerHTML}}),r.a.createElement("div",{className:"Page-footer"},r.a.createElement("div",{className:"d-flex flex-wrap btn btn-secondary justify-content-around"},this.state.pageTags.map(function(e){return r.a.createElement("div",{className:"pd-2",key:e.id},e.name)})),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"p-2"},"Discuss"),r.a.createElement("div",{className:"p-2"},"Rate"),r.a.createElement("div",{className:"p-2"},"Edit")),r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement(T.a.CommentCount,{shortname:"example",config:e},"Comments"),r.a.createElement(T.a.DiscussionEmbed,{shortname:"example",config:e})),r.a.createElement("div",{className:"d-flex justify-content-around App"},r.a.createElement("div",{className:"p-2"},"Unless otherwise stated, the content of this page is licensed under ",r.a.createElement("br",null),r.a.createElement("a",{href:"http://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noopener noreferrer"},"Creative Commons Attribution-ShareAlike 3.0 License")))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={db_address:"https://scp-rails-api.herokuapp.com/",page:"homepage"},a.handleLinkClick=a.handleLinkClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleLinkClick",value:function(e){this.setState({page:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(k,{page:this.state.page,handleLinkClick:this.handleLinkClick}),r.a.createElement(i.a,{render:function(t){var a=t.location;return r.a.createElement(g.TransitionGroup,{className:"Content container"},r.a.createElement(g.CSSTransition,{key:a.key,timeout:500,classNames:"fade"},r.a.createElement(v.a,{location:a},r.a.createElement(i.a,{exact:!0,path:"/scp-react/",render:function(e){return r.a.createElement("div",{className:"page"},r.a.createElement(C,null))}}),r.a.createElement(i.a,{exact:!0,path:"/scp-react/mainlist",render:function(t){return r.a.createElement("div",{className:"page"},r.a.createElement(S,{db_address:e.state.db_address}))}}),r.a.createElement(i.a,{exact:!0,path:"/scp-react/hubs",render:function(t){return r.a.createElement("div",{className:"page"},r.a.createElement(j,{db_address:e.state.db_address}))}}),r.a.createElement(i.a,{exact:!0,path:"/scp-react/page/:url",render:function(t){return r.a.createElement("div",{className:"page"},r.a.createElement(A,{db_address:e.state.db_address,url:t.match.params.url}))}}))))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",component:x})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e){e.exports=[{id:0,name:"Mainlist",target:"mainlist"},{id:1,name:"Hubs",target:"hubs"}]},45:function(e,t,a){e.exports=a.p+"static/media/foundation_brand.850b91ef.png"},47:function(e,t,a){e.exports=a(102)},52:function(e,t,a){},61:function(e,t,a){}},[[47,2,1]]]);
//# sourceMappingURL=main.e9908647.chunk.js.map