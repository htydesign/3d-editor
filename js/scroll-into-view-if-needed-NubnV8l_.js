import{i as o}from"./compute-scroll-into-view-DCNUDwgY.js";function e(o){return o===Object(o)&&0!==Object.keys(o).length}function n(n,t){var r=n.isConnected||n.ownerDocument.documentElement.contains(n);if(e(t)&&"function"==typeof t.behavior)return t.behavior(r?o(n,t):[]);if(r){var i=function(o){return!1===o?{block:"end",inline:"nearest"}:e(o)?o:{block:"start",inline:"nearest"}}(t);return function(o,e){void 0===e&&(e="auto");var n="scrollBehavior"in document.body.style;o.forEach((function(o){var t=o.el,r=o.top,i=o.left;t.scroll&&n?t.scroll({top:r,left:i,behavior:e}):(t.scrollTop=r,t.scrollLeft=i)}))}(o(n,i),i.behavior)}}export{n as s};
