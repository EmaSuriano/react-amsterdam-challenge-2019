(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(359)},151:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),i=n.n(r),c=(n(151),n(145)),l=n(34),s=n(82),u=n(144),m=n.n(u),g={lat:null,lng:null},p=Object(l.withScriptjs)(Object(l.withGoogleMap)(function(e){var t=e.center,n=e.currentPosition;return o.a.createElement(l.GoogleMap,{defaultZoom:12,center:t},o.a.createElement(l.Marker,{position:n}))})),d="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAeIJCDWHDaBCa_qmvSi0cGRKiOAl2HApw","&v=3.exp&libraries=geometry,drawing,places"),h=function(){var e=Object(s.a)(),t=e.position,n=e.error,r=function(){var e=Object(s.b)(60),t=e.x,n=e.y,a=window;return{x:(a.innerWidth/2-t)/12,y:(a.innerHeight/2-n)/12}}(),i=r.x,l=r.y,u=Object(a.useState)(g),h=Object(c.a)(u,2),w=h[0],v=h[1];Object(a.useEffect)(function(){v({lat:f+l/1e3,lng:O-i/1e3})},[i,l]);var E=n&&o.a.createElement("p",null,"There was an error: ",n.message),y=t.coords||{},b=y.latitude,f=void 0===b?0:b,j=y.longitude,O=void 0===j?0:j,k=f&&O,x={lat:f,lng:O},A=w!==g?w:x;return o.a.createElement(m.a,{active:!k,spinner:!k||!!E,text:E&&k?E:"Getting your location"},o.a.createElement(p,{center:A,currentPosition:x,googleMapURL:d,loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100vh"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.5ed39a9d.chunk.js.map