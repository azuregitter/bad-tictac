(this.webpackJsonpriegoreact=this.webpackJsonpriegoreact||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(42)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/ataks.94bc0ad6.gif"},function(e,t,a){e.exports=a.p+"static/media/0.1ac0cdf4.png"},function(e,t,a){e.exports=a.p+"static/media/1.51886f7c.png"},function(e,t,a){e.exports=a.p+"static/media/2.68c4a936.png"},function(e,t,a){e.exports=a.p+"static/media/3.c6600fef.png"},function(e,t,a){e.exports=a.p+"static/media/4.20dcf4ff.png"},function(e,t,a){e.exports=a.p+"static/media/5.90ca2505.png"},function(e,t,a){e.exports=a.p+"static/media/6.074a6db1.png"},function(e,t,a){e.exports=a.p+"static/media/7.df4a512e.png"},function(e,t,a){e.exports=a.p+"static/media/8.aa6af18b.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(17),a(5)),s=a(6),u=a(8),o=a(7),m=a(21);function h(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],l=n[1],c=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return e[r]}return null}var E=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,moveNumber:0},n}return Object(s.a)(a,[{key:"jumpTo",value:function(e){this.setState({moveNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.moveNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({squares:a,history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext,moveNumber:t.length}))}},{key:"render",value:function(){var e,t=this,a="Move Number: "+this.state.moveNumber,n=this.state.history,l=n[this.state.moveNumber],c=p(l.squares),i=n.map((function(e,a){var n=a?"Go to move #"+a:"Go to game Start";return r.a.createElement("li",{key:a},r.a.createElement("button",{className:"history",onClick:function(){return t.jumpTo(a)}},n))}));return e=c?"Winner "+c:9===this.state.moveNumber?"Tie":"Next Player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"box"},r.a.createElement("h2",{style:{marginBottom:"-40px"}},"Tictactoe React Tutorial"),r.a.createElement("div",null,r.a.createElement("div",{className:"tictac"},r.a.createElement("div",{className:"intic"},r.a.createElement("h2",null,e),r.a.createElement("p",null,a),r.a.createElement("div",{className:"game1"},r.a.createElement(d,{squares:l.squares,onClick:function(e){return t.handleClick(e)}}))),r.a.createElement("div",{className:"intic"},r.a.createElement("h3",null,"History:"),r.a.createElement("ol",null,i)))))}}]),a}(r.a.Component),v=a(10),g=a(1),f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={growText:!0,imgx:"640px",imgy:"480px"},a}return Object(s.a)(n,[{key:"handleClick",value:function(){var e=this;this.setState((function(t){return{imgx:e.state.growText?"320px":"640px",imgy:e.state.growText?"240px":"480px",growText:!t.growText}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,"Larong ginawa ko saa RPG Maker"),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/rpg"},r.a.createElement("div",{className:"button"},"Play Game!")),r.a.createElement("div",{className:"button",onClick:function(){return e.handleClick()}},this.state.growText?"Shrink Gif":"Grow Gif")),r.a.createElement("div",null,r.a.createElement("img",{alt:"RPG Gif",src:a(32),id:"gif",width:this.state.imgx,height:this.state.imgy})))}}]),n}(r.a.Component),b=function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"title"},"Keyboard Controls:"),r.a.createElement("h3",null,"Enter - Confirm | X - Cancel | Shift - Run"),r.a.createElement("h2",{className:"title"},"Mobile Controls:"),r.a.createElement("h3",null," Touch - Confirm | Two Finger Touch - Cancel "))},x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rpg"},r.a.createElement("h2",null,"Lockdown at Lilac"),r.a.createElement("iframe",{title:"Lockdown at Lilac RPG Game",src:"https://azuregitter.github.io/Lilac/",className:"game"}),r.a.createElement("div",{className:"changeOrientation"},r.a.createElement("h1",null,"Change to Landscape"),r.a.createElement("a",{href:"https://azuregitter.github.io/Lilac/"},"Or click this to play fullscreen")),r.a.createElement(b,null))}}]),a}(r.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"box"},r.a.createElement("div",null,r.a.createElement("h1",null,"Gallery")),r.a.createElement(N,null))}}]),a}(r.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var l;return Object(i.a)(this,n),(l=t.call(this,e)).loop=function(){return l.state.gallery.map((function(e,t){return r.a.createElement("div",{key:t,onClick:function(){return l.handleClick(t)}},l.renderImg(t))}))},l.state={imgid:0,gallery:[a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(40),a(41)]},l}return Object(s.a)(n,[{key:"renderImg",value:function(e){return r.a.createElement("img",{src:this.state.gallery[e],id:[e],value:[e],className:"maingallery",width:"680px",height:"380px",alt:"Sub Img"})}},{key:"renderMainImg",value:function(){var e=this.state.imgid;return r.a.createElement("img",{src:this.state.gallery[e],id:[e],value:[e],className:"maingallery",width:"680px",height:"380px",alt:"Main Img"})}},{key:"handleClick",value:function(e){this.setState({imgid:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.renderMainImg()),r.a.createElement("div",{className:"subgallery"},this.loop()))}}]),n}(r.a.Component),k=y,O=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Riego Page"),r.a.createElement(v.b,{to:"/riegoreactpage"},r.a.createElement("span",{className:"button"},"Home")),r.a.createElement(v.b,{to:"/tictactoe"},r.a.createElement("span",{className:"button"},"TicTacToe")),r.a.createElement(v.b,{to:"/rpg"},r.a.createElement("span",{className:"button"},"RPG")),r.a.createElement(v.b,{to:"/gallery"},r.a.createElement("span",{className:"button"},"Gallery"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"mainbody"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/riegoreactpage"},r.a.createElement(f,null)),r.a.createElement(g.a,{path:"/tictactoe"},r.a.createElement(E,null)),r.a.createElement(g.a,{path:"/rpg"},r.a.createElement(x,null)),r.a.createElement(g.a,{path:"/gallery"},r.a.createElement(k,null)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Ginawa gamit ",r.a.createElement("br",null),"React")),r.a.createElement("div",null,r.a.createElement("p",null,"OL157 ",r.a.createElement("br",null)," ICT-121")),r.a.createElement("div",null,r.a.createElement("p",null,"Gerome Justin ",r.a.createElement("br",null)," Riego"))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(v.a,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9dd3b22d.chunk.js.map