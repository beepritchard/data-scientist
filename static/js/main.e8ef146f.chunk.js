(this["webpackJsonpclicky-space"]=this["webpackJsonpclicky-space"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Aircraft","image":"./img/aircraft.jpg"},{"id":2,"name":"Alien-Ufo","image":"./img/Alien-Ufo.jpg"},{"id":3,"name":"Forward-Ufo","image":"./img/forward-Ufo.jpg"},{"id":4,"name":"Interstellar","image":"./img/interstellar.jpg"},{"id":5,"name":"Mars","image":"./img/mars.jpg"},{"id":6,"name":"Millenium-falcon","image":"./img/millenium-falcon.jpg"},{"id":7,"name":"Raumgleiter","image":"../img/Raumgleiter.jpg"},{"id":8,"name":"Spacex","image":"./img/spacex.jpg"},{"id":9,"name":"Ship-fantacy","image":"./img/ship-fantacy.png"},{"id":10,"name":"Spaceship-Earth","image":"./img/spaceship-Earth.jpg"},{"id":11,"name":"SpaceTravel","image":"./img/spaceTravel.jpg"},{"id":12,"name":"Ufo-aircraft","image":"./img/ufo-aircraft.jpg"}]')},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),s=(a(29),a(16)),l=a(17),o=a(10),m=a(20),p=a(21),g=a(55),u=function(e){return i.a.createElement(g.a,e,e.children)},d=a(38),h=function(e){return i.a.createElement(d.a,null,e.children)},f=(a(33),function(e){e.id,e.name,e.image,e.handlePicked}),E=(a(34),function(e){return i.a.createElement("div",{className:"score"},e.type,": ",e.score)}),S=(a(35),function(e){return i.a.createElement("div",{className:"default",style:e.style},e.message?i.a.createElement("p",null,e.message):i.a.createElement("p",{className:"default-msg black"},"Click an image to begin!"))}),k=a(56),y=a(57),v=a(58),j=function(e){return i.a.createElement("div",null,i.a.createElement(k.a,Object.assign({position:"static"},e),i.a.createElement(y.a,null,i.a.createElement(v.a,{variant:"headline",color:"inherit",align:"center"},"Clicky Game"))))},b=a(59),O=(a(36),function(e){return i.a.createElement(b.a,e,e.children)}),x=a(19),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={spaceships:x,pickedShips:[],topScore:0,alertMessage:""},e.handlePicked=function(t){var a=t.target.attributes.getNamedItem("name").value;e.shuffleShips(),e.checkGuess(a,e.updateTopScore)},e.shuffleShips=function(){e.setState(e.state.spaceships=e.shuffleArray(e.state.spaceships))},e.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},e.checkGuess=function(t,a){var n=Object(s.a)({},e.state);n.pickedShips.includes(t)?(n.alertMessage='YOU ALREADY PICKED "'.concat(t.toUpperCase(),'"!'),n.pickedShips=[],e.setState(e.state=n)):(n.pickedShips.push(t),n.alertMessage="GOOD CHOICE!",e.setState(e.state=n)),a(n,e.alertWinner)},e.updateTopScore=function(t,a){t.pickedShips.length>t.topScore&&(t.topScore++,e.setState(e.state=t)),a(t)},e.alertWinner=function(t){12===t.pickedShips.length&&(t.alertMessage="CHAMPION!",t.pickedShips=[],e.setState(e.state=t))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(j,{style:{background:"#313133",marginBottom:"5px"}}),i.a.createElement(u,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},i.a.createElement(u,{item:!0,lg:12},i.a.createElement(h,null,"GOOD CHOICE!"===this.state.alertMessage?i.a.createElement(S,{message:this.state.alertMessage,style:{color:"green"}}):i.a.createElement(S,{message:this.state.alertMessage,style:{color:"red"}}))),i.a.createElement(u,{container:!0,justify:"space-between"},i.a.createElement(u,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(h,null,i.a.createElement(E,{type:"Score",score:this.state.pickedShips.length}))),i.a.createElement(u,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(h,null,i.a.createElement(E,{type:"Top Score",score:this.state.topScore}))))),i.a.createElement(u,{container:!0,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.spaceships.map((function(t){return i.a.createElement(u,{key:t.id,item:!0,lg:3,md:3,sm:4,xs:6},i.a.createElement(f,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))),i.a.createElement(O,{style:{background:"#313133",marginTop:"17.5px",paddingTop:"15px",borderTop:"2.5px solid slategray"}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e8ef146f.chunk.js.map