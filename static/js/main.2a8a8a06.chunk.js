(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{11:function(r,n,e){},13:function(r,n,e){},14:function(r,n,e){"use strict";e.r(n);var t=e(1),o=e.n(t),a=e(4),i=e.n(a),c=(e(11),e(6)),u=e(3),f=e(0);function d(r){var n=r.number;return Object(f.jsx)("div",{className:"board__row__cell board__row__cell__".concat(n),children:Object(f.jsx)("p",{children:0===n?"":n})})}function s(r){var n=r.row;return Object(f.jsx)("div",{className:"board__row",children:n.map((function(r,n){return Object(f.jsx)(d,{number:r},"cell-".concat(n+1))}))})}var x=e(5);function p(r){var n=r.board,e=r.handleSwipeLeft,t=r.handleSwipeRight,o=r.handleSwipeUp,a=r.handleSwipeDown,i=Object(x.useSwipeable)({onSwipedLeft:function(){return e()},onSwipedRight:function(){return t()},onSwipedUp:function(){return o()},onSwipedDown:function(){return a()},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(f.jsx)("div",Object(u.a)(Object(u.a)({className:"board"},i),{},{children:n.map((function(r,n){return Object(f.jsx)(s,{row:r},"row-".concat(n+1))}))}))}function y(r){var n=JSON.parse(JSON.stringify(r)),e=Math.floor(4*Math.random()),t=Math.floor(4*Math.random());return 0===n[e][t]?n[e][t]=Math.random()>.8?4:2:n=y(r),n}function S(r){var n=r.board,e=r.pos,t=r.diference,o=JSON.parse(JSON.stringify(n));return 0===o[e.x][e.y]&&0!==o[e.x+t.x][e.y+t.y]&&(o[e.x][e.y]=o[e.x+t.x][e.y+t.y],o[e.x+t.x][e.y+t.y]=0),0!==o[e.x][e.y]&&o[e.x+t.x][e.y+t.y]===o[e.x][e.y]?(o[e.x][e.y]=2*o[e.x][e.y],o[e.x+t.x][e.y+t.y]=0):0===o[e.x+t.x][e.y+t.y]&&(t.x=b(e.x,t.x),t.y=b(e.y,t.y),0===t.x&&0===t.y||(o=S({board:o,pos:e,diference:t}))),o}function b(r,n){var e=[0,2,3];return n>0&&r+n<3?e[n]:n<0&&r+n>0?-1*e[-1*n]:0}e(13);var l=function(){var r=Object(t.useState)(y([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])),n=Object(c.a)(r,2),e=n[0],o=n[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p,{board:e,handleSwipeLeft:function(){var r=function(r){for(var n=JSON.parse(JSON.stringify(r)),e=0;e<4;e++)for(var t=0;t<3;t++)n=S({board:n,pos:{x:e,y:t},diference:{x:0,y:1}});return n}(e);e.toString()!==r.toString()&&(r=y(r),o(r))},handleSwipeRight:function(){var r=function(r){for(var n=JSON.parse(JSON.stringify(r)),e=0;e<4;e++)for(var t=3;t>0;t--)n=S({board:n,pos:{x:e,y:t},diference:{x:0,y:-1}});return n}(e);e.toString()!==r.toString()&&(r=y(r),o(r))},handleSwipeUp:function(){var r=function(r){for(var n=JSON.parse(JSON.stringify(r)),e=0;e<4;e++)for(var t=0;t<3;t++)n=S({board:n,pos:{x:t,y:e},diference:{x:1,y:0}});return n}(e);e.toString()!==r.toString()&&(r=y(r),o(r))},handleSwipeDown:function(){var r=function(r){for(var n=JSON.parse(JSON.stringify(r)),e=0;e<4;e++)for(var t=3;t>0;t--)n=S({board:n,pos:{x:t,y:e},diference:{x:-1,y:0}});return n}(e);e.toString()!==r.toString()&&(r=y(r),o(r))}})})};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2a8a8a06.chunk.js.map