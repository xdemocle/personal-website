!function(e){"use strict";var t=function(e,t){if("undefined"!=typeof XMLHttpRequest){var n;n=new XMLHttpRequest,n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.open("GET",e,!0),n.send()}};e.callAjax=t}(this),function(e){"use strict";var t=function(){return confirm("After all these bullshits, you still wanna hire me?")},n=function(){var t=e.document.getElementById("shittyVersion");e.callAjax("/manifest.json",function(e){t.innerHTML="v"+JSON.parse(e).version})},a=function(n){n.addEventListener("click",function(n){if(n.preventDefault(),"hire-me"===n.target.className&&!t())return!1;var a=-1!==n.target.protocol.search("http")&&!0;return a&&n.target.host!==e.location.hostname?e.open(n.target.href,"_blank"):void(e.location.href=n.target.href)},!1)},o=function(){var t=e.document.getElementById("yearsOld"),n=(new Date).getFullYear()-1982;t.innerHTML=n},r=function(){for(var t=e.document.getElementsByTagName("a"),n=0;n<t.length;n++)a(t[n])},s=function(t){var n=e.document.getElementsByTagName("html")[0];n.className=n.className.replace("no-js",""),t&&(n.className=n.className+" "+t)},c=function(){s(),o(),r(),n()};e.addEventListener?e.document.addEventListener("DOMContentLoaded",c,!1):e.attachEvent&&e.document.attachEvent("onDOMContentLoaded",c)}(this);