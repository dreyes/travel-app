var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,a=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,i=function(e){return r.test(e)||a.test(e)};function o(e,t){var n=e.createElement("style");return n.type="text/css",n.appendChild(window.document.createTextNode(t)),n}function c(e,t){var n=e.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href=t,n}function s(e){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),e.appendChild(t),t}t.createStyle=o,t.createLinkStyle=c,t.createIFrame=s;var d={parent:window.document.body,headElements:[],bodyElements:[]},l=function(){function e(e){this.isLoading=!1,this.hasEvents=!1,this.opts=[d,e||{}].reduce((function(e,t){return Object.keys(t).forEach((function(n){return e[n]=t[n]})),e}),{}),this.iframe=s(this.opts.parent)}return e.prototype.getIFrame=function(){return this.iframe},e.prototype.print=function(e,t,n,r){if(!this.isLoading){var a=this.iframe,s=a.contentDocument,d=a.contentWindow;if(s&&d&&(this.iframe.src="about:blank",this.elCopy=e.cloneNode(!0),this.elCopy)){this.isLoading=!0,this.callback=r;var l=d.document;l.open(),l.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var u=this.opts,h=u.headElements,p=u.bodyElements;Array.isArray(h)&&h.forEach((function(e){return l.head.appendChild(e)})),Array.isArray(p)&&p.forEach((function(e){return l.body.appendChild(e)})),Array.isArray(t)&&t.forEach((function(e){e&&l.head.appendChild(i(e)?c(l,e):o(l,e))})),l.body.appendChild(this.elCopy),Array.isArray(n)&&n.forEach((function(e){if(e){var t=l.createElement("script");i(e)?t.src=e:t.innerText=e,l.body.appendChild(t)}})),l.close()}}},e.prototype.printURL=function(e,t){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=t,this.iframe.src=e)},e.prototype.launchPrint=function(e){e.document.execCommand("print",!1,void 0)||e.print()},e.prototype.addEvents=function(){var e=this;this.hasEvents||(this.hasEvents=!0,this.iframe.addEventListener("load",(function(){return e.onLoad()}),!1))},e.prototype.onLoad=function(){var e=this;if(this.iframe){this.isLoading=!1;var t=this.iframe,n=t.contentDocument,r=t.contentWindow;if(!n||!r)return;this.callback?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return e.launchPrint(r)}}):this.launchPrint(r)}},e}();t.Printd=l,t.default=l},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,n,r){var a=t&&t.prototype instanceof l?t:l,i=Object.create(a.prototype),o=new E(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return N()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=w(o,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d={};function l(){}function u(){}function h(){}var p={};p[a]=function(){return this};var g=Object.getPrototypeOf,f=g&&g(g(x([])));f&&f!==t&&n.call(f,a)&&(p=f);var m=h.prototype=l.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var r;this._invoke=function(a,i){function o(){return new t((function(r,o){!function r(a,i,o,c){var d=s(e[a],e,i);if("throw"!==d.type){var l=d.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,c)}))}c(d.arg)}(a,i,r,o)}))}return r=r?r.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return u.prototype=m.constructor=h,h.constructor=u,h[o]=u.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(v.prototype),v.prototype[i]=function(){return this},e.AsyncIterator=v,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new v(c(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(m),m[o]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"runRequests",(function(){return i})),n.d(t,"calculateDifference",(function(){return L}));n(1);let r={},a={};const i=async()=>{o().then((function(){c().then(async()=>await y(a)).then(async()=>await s()).then((function(){p(a)}))}))},o=async()=>{h();const e=await fetch("/url");try{r=await e.json()}catch(e){console.log("error",e)}},c=async()=>{const e=await fetch(r.baseGeonames+a.city+r.keyGeonames);try{const t=await e.json();a.country=t.geonames[0].countryName,a.latitude=t.geonames[0].lat,a.longitude=t.geonames[0].lng,console.log(t),console.log(a.country),console.log(a.latitude),console.log(a.longitude)}catch(e){console.log("error",e)}},s=async()=>{let e,t=Client.calculateDifference();a.tripLength=t.tripLength,t.daysDiff<8?(a.weatherTitle="Current Weather:",e=await d()):(a.weatherTitle="Weather Forecast:",e=await l());let n=a.city.replace(/ /g,"+"),r=await u(n).then(async e=>{console.log("::: IMAGE DATA :::");let t=e.total;console.log("Results: "+t),0==t?r=await u(a.country).then(e=>{console.log(e),a.image=e.hits[0].largeImageURL,console.log(a)}):(a.image=e.hits[0].largeImageURL,console.log(a))});return[e,r]},d=async()=>{console.log(r.baseCurrent+r.lat+a.latitude+r.lon+a.longitude+r.keyWeatherbit);const e=await fetch(r.baseCurrent+r.lat+a.latitude+r.lon+a.longitude+r.keyWeatherbit);try{const t=await e.json();a.temp=t.data[0].temp,a.temp=parseInt(a.temp,10),a.icon=t.data[0].weather.icon,a.icon=a.icon.slice(-1),a.weatherCode=t.data[0].weather.code,a.weatherDescription=t.data[0].weather.description}catch(e){console.log("error",e)}},l=async()=>{console.log(r.baseForecast+r.lat+a.latitude+r.lon+a.longitude+r.keyWeatherbit);const e=await fetch(r.baseForecast+r.lat+a.latitude+r.lon+a.longitude+r.keyWeatherbit);try{const t=await e.json();a.max=t.data[0].max_temp,a.max=parseInt(a.max,10),a.min=t.data[0].min_temp,a.min=parseInt(a.min,10)}catch(e){console.log("error",e)}},u=async(e="")=>{console.log(r.basePixabay+r.keyPixabay+r.query+e+r.imageType);const t=await fetch(r.basePixabay+r.keyPixabay+r.query+e+r.imageType);try{return await t.json()}catch(e){console.log("error",e)}},h=()=>{a.city=document.getElementById("city").value,a.city=m(a.city),a.departure=document.getElementById("start").value,a.return=document.getElementById("end").value,a.flights=document.getElementById("flights").value,a.notes=document.getElementById("notes").value},p=e=>{console.log("CHECKING DATA"),console.log(e),e.departure=g(e.departure),e.return=g(e.return),f(),console.log(e.image);let t=document.createElement("div");t.classList.add("expanded-card");let n=document.createElement("div");n.classList.add("card");let r=document.createElement("div");r.classList.add("additional-elements");let a=document.createElement("div");a.classList.add("image"),a.style.backgroundImage=`url(${e.image})`;let i=document.createElement("div");i.classList.add("info");let o="";if(""===e.notes)o="+ add notes";else{o="- remove notes";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("notes"),t.innerHTML=`<h3 class="inner-h3">notes: </h3>\n<textarea class="inner-ta">${e.notes}</textarea>\n`,r.appendChild(t)}let c="";c="Current Weather:"===e.weatherTitle?`<div class="weather-data-current">\n<div class="weather-title">\n<h3>${e.weatherTitle}</h3>\n</div>\n<div class="weather-temp">\n<div class="temp">${e.temp}</div>\n<div class="celsius">  °C</div>\n</div>\n<div class="weather-img" style="background-image: ${e.weatherImg}"></div>\n</div>\n`:`<div class="weather-data-forecast">\n<div class="weather-title">\n<h3>${e.weatherTitle}</h3>\n</div>\n<div class="min-temp">\n<div class="temp">min: ${e.min}</div>\n<div class="celsius"> °C</div>\n</div>\n<div class="max-temp">\n<div class="temp">max: ${e.max}</div>\n<div class="celsius"> °C</div>\n</div>\n</div>\n`,i.innerHTML=`<div class="card-heading">\n<h2>${e.city}, ${e.country}</h2>\n<div class="delete-btn"></div>\n</div>\n<div class="card-subheading">\n<h4>${e.departure} - ${e.return}</h4>\n<h4>Trip Length: ${e.tripLength} days</h4>\n</div>\n<div class="card-data">\n`+c+'<div class="trip-data">\n<div class="mixed-text">\n<h3 class="inner-h3">flight info: </h3>\n'+`<textarea class="inner-ta">${e.flights}</textarea>\n</div>\n<div class="mixed-text">\n<h3 class="inner-h3">country info: </h3>\n`+`<textarea class="inner-ta">Region: ${e.region}\nLanguage: ${e.language}\nCurrency: ${e.currency}\nPopulation: ${e.population}</textarea>\n</div>\n</div>\n</div>\n<div class="card-btns">\n<div class="card-btn" id="lodging-btn">+ add lodging info</div>\n<div class="card-btn" id="packing-btn">+ add packing list</div>\n`+`<div class="card-btn" id="notes-btn">${o}</div>\n</div>\n`,n.appendChild(a),n.appendChild(i),t.appendChild(n),t.appendChild(r),document.getElementById("app").appendChild(t)},g=e=>{let t=(e=new Date(e)).getDate()+1;return`${e.getMonth()+1}/${t}/${e.getFullYear()%100}`},f=()=>{document.getElementsByClassName("weather-img")[0];const e=a.weatherCode;switch(!0){case e<300:a.weatherImg="url('media/thunderstorm.png')";break;case e<600:a.weatherImg="url('media/rainy.png')";break;case e<700:a.weatherImg="url('media/snowy.png')";break;case e<800:a.weatherImg="url('media/mist.png')";break;case e<801:"d"===a.icon?a.weatherImg="url('media/clear_d.png')":a.weatherImg="url('media/clear_n.png')";break;case e<802:"d"===a.icon?a.weatherImg="url('media/partially_cloudy_d.png')":a.weatherImg="url('media/partially_cloudy_n.png')";break;case e>801:a.weatherImg="url('media/cloudy.png')"}},m=e=>e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.substring(1)).join(" "),y=async e=>{const t=await fetch("https://restcountries.eu/rest/v2/name/"+a.country);try{const n=await t.json();return console.log("::: COUNTRY DATA :::"),console.log(n),e.currency=n[0].currencies[0].name,e.language=n[0].languages[0].name,e.population=n[0].population,e.population=e.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),e.region=n[0].region,n}catch(e){console.log("error",e)}};let v=new Date,w=v.getFullYear()+"-"+("00"+(v.getMonth()+1)).slice(-2)+"-"+("00"+v.getDate()).slice(-2);document.getElementById("start").defaultValue=w;let b=new Date(v);b.setDate(b.getDate()+1),b=b.getFullYear()+"-"+("00"+(b.getMonth()+1)).slice(-2)+"-"+("00"+b.getDate()).slice(-2),document.getElementById("end").defaultValue=b;const L=()=>{let e=new Date(document.getElementById("start").value),t=new Date(document.getElementById("end").value),n=E(e,t);e.setDate(e.getDate()+1);let r=e.getTime()-v.getTime(),a=Math.round(r/864e5);return console.log("Difference: "+a),{daysDiff:a,tripLength:n}},E=(e,t)=>{let n=t.getTime()-e.getTime();return Math.round(n/864e5)};var x=n(0);n(2);document.getElementById("trip-btn").addEventListener("click",()=>{Client.runRequests()}),document.getElementById("print-btn").addEventListener("click",()=>{(new x.Printd).print(document.getElementById("app"),["./main.css","#app {\n    margin-left: 0;\n  }\n  \n  .card, .additional {\n    background: #2D355F;\n  }"],"",({launchPrint:e})=>e())}),document.getElementById("app").addEventListener("click",(function(e){if(e.target&&e.target.matches("div.delete-btn")&&e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode),e.target&&e.target.matches("div#notes-btn"))if("+ add notes"===e.target.innerHTML){e.target.innerHTML="- remove notes";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("notes"),t.innerHTML='<h3>notes: </h3>\n<textarea class="inner-ta" placeholder="add some notes here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add notes",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".notes"));if(e.target&&e.target.matches("div#lodging-btn"))if("+ add lodging info"===e.target.innerHTML){e.target.innerHTML="- remove lodging";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("lodging"),t.innerHTML='<h3>lodging info: </h3>\n<textarea class="inner-ta" placeholder="add some lodging info here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add lodging info",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".lodging"));if(e.target&&e.target.matches("div#packing-btn"))if("+ add packing list"===e.target.innerHTML){e.target.innerHTML="- remove list";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("packing"),t.innerHTML='<h3>packing info: </h3>\n<textarea class="inner-ta" placeholder="add some packing info here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add packing list",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".packing"))})),document.getElementById("start").addEventListener("change",()=>{let e=document.getElementById("start").value;e=new Date(e),e.setDate(e.getDate()+1);let t=new Date(e);t.setDate(t.getDate()+1),t=t.getFullYear()+"-"+("00"+(t.getMonth()+1)).slice(-2)+"-"+("00"+t.getDate()).slice(-2),document.getElementById("end").defaultValue=t})}]);