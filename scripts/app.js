!function(e){"use strict";var t=e.document,n=function(e,t){if("undefined"!=typeof XMLHttpRequest){var n;n=new XMLHttpRequest,n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.open("GET",e,!0),n.send()}},a=function(e,n){function a(e){return t.createElement(e)}function o(e){var o=a("div"),r=a("div"),i=a("p"),s=a("div"),c="modal "+n;o.setAttribute("class",c),r.setAttribute("class","text"),i.innerHTML=e,r.appendChild(i),o.appendChild(r),"confirm"===n&&(s.setAttribute("class","confirmBox"),s.innerHTML='<div><a href="#">Okay</a><a href="#">Nope</a></div>',o.appendChild(s)),console.log(o),t.body.appendChild(o)}n=n||"alert",o(e)};e.callAjax=n,e.simpleModal=a}(this),function(e){"use strict";var t=function(){return confirm("Are you sure?")},n=function(){var t=e.document.getElementById("shittyVersion");e.callAjax("/manifest.json",function(e){t.innerHTML="v"+JSON.parse(e).version})},a=function(n){n.addEventListener("click",function(n){if(n.preventDefault(),"hire-me"===n.target.className&&!t())return!1;var a=-1!==n.target.protocol.search("http")&&!0;return a&&n.target.host!==e.location.hostname?e.open(n.target.href,"_blank"):void(e.location.href=n.target.href)},!1)},o=function(){var t=e.document.getElementById("yearsOld"),n=(new Date).getFullYear()-1982;t.innerHTML=n},r=function(){for(var t=e.document.getElementsByTagName("a"),n=0;n<t.length;n++)a(t[n])},i=function(t){var n=e.document.getElementsByTagName("html")[0];n.className=n.className.replace("no-js",""),t&&(n.className=n.className+" "+t)},s=function(){i(),o(),r(),n()};e.addEventListener?e.document.addEventListener("DOMContentLoaded",s,!1):e.attachEvent&&e.document.attachEvent("onDOMContentLoaded",s)}(this);