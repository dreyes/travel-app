var Client=function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t),a.d(t,"runRequests",(function(){return d})),a.d(t,"calculateDifference",(function(){return b}));let n={},r={};const d=async()=>{i().then((function(){o().then(async()=>await y(r)).then(async()=>await l()).then((function(){p(r)}))}))},i=async()=>{u();const e=await fetch("/url");try{n=await e.json()}catch(e){console.log("error",e)}},o=async()=>{const e=await fetch(n.baseGeonames+r.city+n.keyGeonames);try{const t=await e.json();r.country=t.geonames[0].countryName,r.latitude=t.geonames[0].lat,r.longitude=t.geonames[0].lng,console.log(t),console.log(r.country),console.log(r.latitude),console.log(r.longitude)}catch(e){console.log("error",e)}},l=async()=>{let e,t=Client.calculateDifference();r.tripLength=t.tripLength,t.daysDiff<8?(r.weatherTitle="Current Weather:",e=await s()):(r.weatherTitle="Weather Forecast:",e=await c());let a=r.city.replace(/ /g,"+"),n=await g(a).then(async e=>{console.log("::: IMAGE DATA :::");let t=e.total;console.log("Results: "+t),0==t?n=await g(r.country).then(e=>{console.log(e),r.image=e.hits[0].largeImageURL,console.log(r)}):(r.image=e.hits[0].largeImageURL,console.log(r))});return[e,n]},s=async()=>{console.log(n.baseCurrent+n.lat+r.latitude+n.lon+r.longitude+n.keyWeatherbit);const e=await fetch(n.baseCurrent+n.lat+r.latitude+n.lon+r.longitude+n.keyWeatherbit);try{const t=await e.json();r.temp=t.data[0].temp,r.temp=parseInt(r.temp,10),r.icon=t.data[0].weather.icon,r.icon=r.icon.slice(-1),r.weatherCode=t.data[0].weather.code,r.weatherDescription=t.data[0].weather.description}catch(e){console.log("error",e)}},c=async()=>{console.log(n.baseForecast+n.lat+r.latitude+n.lon+r.longitude+n.keyWeatherbit);const e=await fetch(n.baseForecast+n.lat+r.latitude+n.lon+r.longitude+n.keyWeatherbit);try{const t=await e.json();r.max=t.data[0].max_temp,r.max=parseInt(r.max,10),r.min=t.data[0].min_temp,r.min=parseInt(r.min,10)}catch(e){console.log("error",e)}},g=async(e="")=>{console.log(n.basePixabay+n.keyPixabay+n.query+e+n.imageType);const t=await fetch(n.basePixabay+n.keyPixabay+n.query+e+n.imageType);try{return await t.json()}catch(e){console.log("error",e)}},u=()=>{r.city=document.getElementById("city").value,r.city=v(r.city),r.departure=document.getElementById("start").value,r.return=document.getElementById("end").value,r.flights=document.getElementById("flights").value,r.notes=document.getElementById("notes").value},p=e=>{console.log("CHECKING DATA"),console.log(e),e.departure=m(e.departure),e.return=m(e.return),h(),console.log(e.image);let t=document.createElement("div");t.classList.add("expanded-card");let a=document.createElement("div");a.classList.add("card");let n=document.createElement("div");n.classList.add("additional-elements");let r=document.createElement("div");r.classList.add("image"),r.style.backgroundImage=`url(${e.image})`;let d=document.createElement("div");d.classList.add("info");let i="";if(""===e.notes)i="+ add notes";else{i="- remove notes";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("notes"),t.innerHTML=`<h3 class="inner-h3">notes: </h3>\n<textarea class="inner-ta">${e.notes}</textarea>\n`,n.appendChild(t)}let o="";o="Current Weather:"===e.weatherTitle?`<div class="weather-data-current">\n<div class="weather-title">\n<h3>${e.weatherTitle}</h3>\n</div>\n<div class="weather-temp">\n<div class="temp">${e.temp}</div>\n<div class="celsius">  °C</div>\n</div>\n<div class="weather-img" style="background-image: ${e.weatherImg}"></div>\n</div>\n`:`<div class="weather-data-forecast">\n<div class="weather-title">\n<h3>${e.weatherTitle}</h3>\n</div>\n<div class="min-temp">\n<div class="temp">min: ${e.min}</div>\n<div class="celsius"> °C</div>\n</div>\n<div class="max-temp">\n<div class="temp">max: ${e.max}</div>\n<div class="celsius"> °C</div>\n</div>\n</div>\n`,d.innerHTML=`<div class="card-heading">\n<h2>${e.city}, ${e.country}</h2>\n<div class="delete-btn"></div>\n</div>\n<div class="card-subheading">\n<h4>${e.departure} - ${e.return}</h4>\n<h4>Trip Length: ${e.tripLength} days</h4>\n</div>\n<div class="card-data">\n`+o+'<div class="trip-data">\n<div class="mixed-text">\n<h3 class="inner-h3">flight info: </h3>\n'+`<textarea class="inner-ta">${e.flights}</textarea>\n</div>\n<div class="mixed-text">\n<h3 class="inner-h3">country info: </h3>\n`+`<textarea class="inner-ta">Region: ${e.region}\nLanguage: ${e.language}\nCurrency: ${e.currency}\nPopulation: ${e.population}</textarea>\n</div>\n</div>\n</div>\n<div class="card-btns">\n<div class="card-btn" id="lodging-btn">+ add lodging info</div>\n<div class="card-btn" id="packing-btn">+ add packing list</div>\n`+`<div class="card-btn" id="notes-btn">${i}</div>\n</div>\n`,a.appendChild(r),a.appendChild(d),t.appendChild(a),t.appendChild(n),document.getElementById("app").appendChild(t)},m=e=>{let t=(e=new Date(e)).getDate()+1;return`${e.getMonth()+1}/${t}/${e.getFullYear()%100}`},h=()=>{document.getElementsByClassName("weather-img")[0];const e=r.weatherCode;switch(!0){case e<300:r.weatherImg="url('media/thunderstorm.png')";break;case e<600:r.weatherImg="url('media/rainy.png')";break;case e<700:r.weatherImg="url('media/snowy.png')";break;case e<800:r.weatherImg="url('media/mist.png')";break;case e<801:"d"===r.icon?r.weatherImg="url('media/clear_d.png')":r.weatherImg="url('media/clear_n.png')";break;case e<802:"d"===r.icon?r.weatherImg="url('media/partially_cloudy_d.png')":r.weatherImg="url('media/partially_cloudy_n.png')";break;case e>801:r.weatherImg="url('media/cloudy.png')"}},v=e=>e.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.substring(1)).join(" "),y=async e=>{const t=await fetch("https://restcountries.eu/rest/v2/name/"+r.country);try{const a=await t.json();return console.log("::: COUNTRY DATA :::"),console.log(a),e.currency=a[0].currencies[0].name,e.language=a[0].languages[0].name,e.population=a[0].population,e.population=e.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),e.region=a[0].region,a}catch(e){console.log("error",e)}};let f=new Date,w=f.getFullYear()+"-"+("00"+(f.getMonth()+1)).slice(-2)+"-"+("00"+f.getDate()).slice(-2);document.getElementById("start").defaultValue=w;let N=new Date(f);N.setDate(N.getDate()+1),N=N.getFullYear()+"-"+("00"+(N.getMonth()+1)).slice(-2)+"-"+("00"+N.getDate()).slice(-2),document.getElementById("end").defaultValue=N;const b=()=>{let e=new Date(document.getElementById("start").value),t=new Date(document.getElementById("end").value),a=L(e,t);e.setDate(e.getDate()+1);let n=e.getTime()-f.getTime(),r=Math.round(n/864e5);return console.log("Difference: "+r),{daysDiff:r,tripLength:a}},L=(e,t)=>{let a=t.getTime()-e.getTime();return Math.round(a/864e5)};a(0);document.getElementById("trip-btn").addEventListener("click",()=>{Client.runRequests()}),document.getElementById("app").addEventListener("click",(function(e){if(e.target&&e.target.matches("div.delete-btn")&&e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode),e.target&&e.target.matches("div#notes-btn"))if("+ add notes"===e.target.innerHTML){e.target.innerHTML="- remove notes";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("notes"),t.innerHTML='<h3>notes: </h3>\n<textarea class="inner-ta" placeholder="add some notes here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add notes",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".notes"));if(e.target&&e.target.matches("div#lodging-btn"))if("+ add lodging info"===e.target.innerHTML){e.target.innerHTML="- remove lodging";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("lodging"),t.innerHTML='<h3>lodging info: </h3>\n<textarea class="inner-ta" placeholder="add some lodging info here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add lodging info",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".lodging"));if(e.target&&e.target.matches("div#packing-btn"))if("+ add packing list"===e.target.innerHTML){e.target.innerHTML="- remove list";let t=document.createElement("div");t.classList.add("additional"),t.classList.add("packing"),t.innerHTML='<h3>packing info: </h3>\n<textarea class="inner-ta" placeholder="add some packing info here..."></textarea>\n',e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].appendChild(t)}else e.target.innerHTML="+ add packing list",e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].removeChild(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".packing"))})),document.getElementById("start").addEventListener("change",()=>{let e=document.getElementById("start").value;e=new Date(e),e.setDate(e.getDate()+1);let t=new Date(e);t.setDate(t.getDate()+1),t=t.getFullYear()+"-"+("00"+(t.getMonth()+1)).slice(-2)+"-"+("00"+t.getDate()).slice(-2),document.getElementById("end").defaultValue=t})}]);