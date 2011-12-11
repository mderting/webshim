(function(e){if(!Modernizr.genericDOM){var h=document,k,j,m=/<([\w:]+)/,p={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};e.webshims.fixHTML5=function(e){if(typeof e!="string"||p[(m.exec(e)||["",""])[1].toLowerCase()])return e;if(!j){k=h.body;if(!k)return e;j=h.createElement("div");j.style.display="none"}var g=j.cloneNode(!1);k.appendChild(g);g.innerHTML=e;k.removeChild(g);return g.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(e,h,k,j,m){var p=h.modules,l=/\s*,\s*/,g={},v={},o={},C={},i={},w=e.fn.val,y=function(c,a,b,d,f){return f?w.call(e(c)):w.call(e(c),b)};e.fn.val=function(c){var a=this[0];arguments.length&&c==null&&(c="");if(!arguments.length)return!a||a.nodeType!==1?w.call(this):e.prop(a,"value",c,"val",!0);if(e.isArray(c))return w.apply(this,arguments);var b=e.isFunction(c);return this.each(function(d){a=this;a.nodeType===1&&(b?(d=c.call(a,d,e.prop(a,"value",m,"val",
!0)),d==null&&(d=""),e.prop(a,"value",d,"val")):e.prop(a,"value",c,"val"))})};var r="_webshimsLib"+Math.round(Math.random()*1E3),s=function(c,a,b){c=c.jquery?c[0]:c;if(!c)return b||{};var d=e.data(c,r);b!==m&&(d||(d=e.data(c,r,{})),a&&(d[a]=b));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){e.fn[c.name]=function(){return this.map(function(){var a=s(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){g[c]=e[c];e[c]=function(a,b,d,f,q){var A=f=="val",l=!A?g[c]:y;if(!a||!v[b]||a.nodeType!==1||!A&&f&&c=="attr"&&e.attrFn[b])return l(a,b,d,f,q);var t=(a.nodeName||"").toLowerCase(),h=o[t],x=c=="attr"&&(d===!1||d===null)?"removeAttr":c,j,n,k;h||(h=o["*"]);h&&(h=h[b]);h&&(j=h[x]);if(j){if(b=="value")n=j.isVal,j.isVal=A;if(x==="removeAttr")return j.value.call(a);else if(d===m)return j.get?j.get.call(a):j.value;
else j.set&&(c=="attr"&&d===!0&&(d=b),k=j.set.call(a,d));if(b=="value")j.isVal=n}else k=l(a,b,d,f,q);if((d!==m||x==="removeAttr")&&i[t]&&i[t][b]){var p;p=x=="removeAttr"?!1:x=="prop"?!!d:!0;i[t][b].forEach(function(b){if(!b.only||(b.only=c=="prop")||b.only=="attr"&&c!="prop")b.call(a,d,p,A?"val":x,c)})}return k};C[c]=function(a,b,d){o[a]||(o[a]={});o[a][b]||(o[a][b]={});var f=o[a][b][c],q=function(a,f,t){return f&&f[a]?f[a]:t&&t[a]?t[a]:c=="prop"&&b=="value"?function(a){return d.isVal?y(this,b,a,
!1,arguments.length===0):g[c](this,b,a)}:c=="prop"&&a=="value"&&d.value.apply?function(a){var d=g[c](this,b);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return g[c](this,b,a)}};o[a][b][c]=d;if(d.value===m){if(!d.set)d.set=d.writeable?q("set",d,f):h.cfg.useStrict&&b=="prop"?function(){throw b+" is readonly on "+a;}:e.noop;if(!d.get)d.get=q("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=q(a,f))})}});var u=!e.browser.msie||parseInt(e.browser.version,10)>8,B=
function(){var c=h.getPrototypeOf(j.createElement("foobar")),a=Object.prototype.hasOwnProperty;return function(b,d,f){var q=j.createElement(b),e=h.getPrototypeOf(q);if(u&&e&&c!==e&&(!q[d]||!a.call(q,d))){var l=q[d];f._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};e[d]=f.value}else f._supvalue=function(){var a=s(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},n.extendValue(b,d,f.value);f.value._supvalue=f._supvalue}}(),n=function(){var c={};h.addReady(function(a,
b){var d={},l=function(c){d[c]||(d[c]=e(a.getElementsByTagName(c)),b[0]&&e.nodeName(b[0],c)&&(d[c]=d[c].add(b)))};e.each(c,function(a,b){l(a);!b||!b.forEach?h.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var a,b=e([]),d=function(b,d){c[b]?c[b].push(d):c[b]=[d];e.isDOMReady&&(a||e(j.getElementsByTagName(b))).each(d)};return{createTmpCache:function(d){e.isDOMReady&&(a=a||e(j.getElementsByTagName(d)));return a||b},flushTmpCache:function(){a=null},content:function(a,
b){d(a,function(){e(this).filter("["+b+"]").attr(b,function(a,b){return b})})},createElement:function(a,b){d(a,b)},extendValue:function(a,b,c){d(a,function(){e(this).each(function(){s(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),z=function(c,a){if(c.defaultValue===m)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}}};e.extend(h,{getID:function(){var c=(new Date).getTime();return function(a){var a=e(a),
b=a.attr("id");b||(c++,b="ID-"+c,a.attr("id",b));return b}}(),extendUNDEFProp:function(c,a){e.each(a,function(a,d){a in c||(c[a]=d)})},createPropDefault:z,data:s,moveToFirstEvent:function(){var c=e._data?"_data":"data";return function(a,b,d){if((a=(e[c](a,"events")||{})[b])&&a.length>1)b=a.pop(),d||(d="bind"),d=="bind"&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(c,a,b){b=b||{};c.jquery&&(c=c[0]);a.jquery&&(a=a[0]);if(!b.shadowFocusElement)b.shadowFocusElement=
a;var d=e.data(c,r)||e.data(c,r,{}),f=e.data(a,r)||e.data(a,r,{});d.hasShadow=a;f.nativeElement=c;f.shadowData=d.shadowData={nativeElement:c,shadowElement:a,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){s(this,"shadowData",f.shadowData)});if(b.data)d.shadowData.data=b.data,f.shadowData.data=b.data;b=null},propTypes:{standard:function(c){z(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},
"boolean":function(c){z(c);if(!c.prop)c.prop={set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return c.attr.get.call(this)!=null}}}},reflectProperties:function(c,a){typeof a=="string"&&(a=a.split(l));a.forEach(function(a){h.defineNodeNamesProperty(c,a,{prop:{set:function(d){e.attr(this,a,d)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(c,a,b){v[a]=!0;if(b.reflect)h.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(d){var f=
b[d];f&&(f=d==="prop"?e.extend({writeable:!0},f):e.extend({},f,{writeable:!0}),C[d](c,a,f),c!="*"&&h.cfg.extendNative&&d=="prop"&&f.value&&e.isFunction(f.value)&&B(c,a,f),b[d]=f)});b.initAttr&&n.content(c,a);return b},defineNodeNameProperties:function(c,a,b,d){for(var f in a)!d&&a[f].initAttr&&n.createTmpCache(c),b&&(a[f][b]?h.log("override: "+c+"["+f+"] for "+b):(a[f][b]={},["value","set","get"].forEach(function(d){d in a[f]&&(a[f][b][d]=a[f][d],delete a[f][d])}))),a[f]=h.defineNodeNameProperty(c,
f,a[f]);d||n.flushTmpCache();return a},createElement:function(c,a,b){var d;e.isFunction(a)&&(a={after:a});n.createTmpCache(c);a.before&&n.createElement(c,a.before);b&&(d=h.defineNodeNameProperties(c,b,!1,!0));a.after&&n.createElement(c,a.after);n.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,a,b,d){typeof c=="string"&&(c=c.split(l));e.isFunction(b)&&(b={set:b});c.forEach(function(c){i[c]||(i[c]={});typeof a=="string"&&(a=a.split(l));b.initAttr&&n.createTmpCache(c);a.forEach(function(a){i[c][a]||
(i[c][a]=[],v[a]=!0);if(b.set){if(d)b.set.only=d;i[c][a].push(b.set)}b.initAttr&&n.content(c,a)});n.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,a,b){b||(b={});if(e.isFunction(b))b.set=b;h.defineNodeNamesProperty(c,a,{attr:{set:function(d){this.setAttribute(a,d);b.set&&b.set.call(this,!0)},get:function(){return this.getAttribute(a)==null?m:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},
contentAttr:function(c,a,b){if(c.nodeName){if(b===m)return b=(c.attributes[a]||{}).value,b==null?m:b;typeof b=="boolean"?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var c=[],a={},b,d,f=/:\/\/|^\.*\//,l=function(a,b,d){return b&&d&&e.inArray(b,d.availabeLangs||[])!==-1?(a.loading=!0,d=d.langSrc,f.test(d)||(d=h.cfg.basePath+d),h.loader.loadScript(d+b+".js",function(){a.langObj[b]?(a.loading=!1,i(a,!0)):e(function(){a.langObj[b]&&i(a,!0);a.loading=!1})}),!0):
!1},g=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},i=function(a,c){if(a.activeLang!=b&&a.activeLang!==d){var f=p[a.module].options;if(a.langObj[b]||d&&a.langObj[d])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[d],b),g(a.module);else if(!c&&!l(a,b,f)&&!l(a,d,f)&&a.langObj[""]&&a.activeLang!=="")a.activeLang="",a.callback(a.langObj[""],b),g(a.module)}};return function(f){if(typeof f=="string"&&f!==b)b=f,d=b.split("-")[0],b==d&&(d=!1),e.each(c,function(a,b){i(b)});else if(typeof f==
"object")if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";c.push(f);i(f)}return b}}()});e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){h[c]=function(b,d,c,e){typeof b=="string"&&(b=b.split(l));var g={};b.forEach(function(b){g[b]=h[a](b,d,c,e)});return g}});h.isReady("webshimLocalization",!0)});
(function(e,h){var k=e.webshims.browserVersion;if(!(e.browser.mozilla&&k>5)&&(!e.browser.msie||k<12&&k>7)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(e,l){e.getAttribute("role")||e.setAttribute("role",l)};e.webshims.addReady(function(k,l){e.each(j,function(g,i){for(var h=e(g,k).add(l.filter(g)),j=0,o=h.length;j<o;j++)m(h[j],i)});if(k===h){var g=h.getElementsByTagName("header")[0],v=h.getElementsByTagName("footer"),o=v.length;
g&&!e(g).closest("section, article")[0]&&m(g,"banner");o&&(g=v[o-1],e(g).closest("section, article")[0]||m(g,"contentinfo"))}})}})(jQuery,document);
(function(e,h,k){var j=h.audio&&h.video,m=!1;if(j){var p=document.createElement("video");h.videoBuffered="buffered"in p;m="loop"in p;k.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));h.videoBuffered||(k.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:h.videoBuffered,dependencies:["dom-support"]}),k.reTest("mediaelement-native-fix"))}e.webshims.ready("dom-support swfobject",function(e,g,h,k,p){var i=g.mediaelement,
w=g.cfg.mediaelement,y=function(a,b){var a=e(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var c=a.attr("type");if(c)d.type=c,d.container=e.trim(c.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),b=="source"&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),c=i.getTypeForSrc(d.src,b))d.type=c,d.container=c,g.warn("you should always provide a proper mime-type using the source element. "+d.src+" detected as: "+c),e.nodeName(a[0],"source")&&
a.attr("type",c);if(c=a.attr("media"))d.media=c;return d},r=swfobject.hasFlashPlayerVersion("9.0.115"),s=function(){g.ready("mediaelement-swf",function(){if(!i.createSWF)g.modules["mediaelement-swf"].test=e.noop,g.reTest(["mediaelement-swf"],j)})};r&&g.ready("WINDOWLOAD",s);i.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};i.mimeTypes.source=e.extend({},i.mimeTypes.audio,i.mimeTypes.video);i.getTypeForSrc=function(a,b){if(a.indexOf("youtube.com/watch?")!=
-1)return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;e.each(i.mimeTypes[b],function(b,c){if(c.indexOf(a)!==-1)return d=b,!1});return d};i.srces=function(a,b){a=e(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(b)||(b=[b]),b.forEach(function(b){var d=k.createElement("source");typeof b=="string"&&(b={src:b});d.setAttribute("src",b.src);b.type&&d.setAttribute("type",b.type);b.media&&d.setAttribute("media",b.media);a.append(d)});else{var b=[],d=
a[0].nodeName.toLowerCase(),c=y(a,d);c.src?b.push(c):e("source",a).each(function(){c=y(this,d);c.src&&b.push(c)});return b}};e.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==p&&(e(this).removeAttr("poster"),b&&e.attr(this,"poster",b));i.srces(this,a);e(this).mediaLoad()})};i.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
i.canSwfPlaySrces=function(a,b){var d="";r&&(a=e(a),b=b||i.srces(a),e.each(b,function(a,b){if(b.container&&b.src&&i.swfMimeTypes.indexOf(b.container)!=-1)return d=b,!1}));return d};var u={};i.canNativePlaySrces=function(a,b){var d="";if(j){var a=e(a),c=(a[0].nodeName||"").toLowerCase();if(!u[c])return d;b=b||i.srces(a);e.each(b,function(b,e){if(e.type&&u[c].prop._supvalue.call(a[0],e.type))return d=e,!1})}return d};i.setError=function(a,b){b||(b="can't play sources");e(a).pause().data("mediaerror",
b);g.warn("mediaelementError: "+b);setTimeout(function(){e(a).data("mediaerror")&&e(a).trigger("mediaerror")},1)};var B=function(){var a;return function(b,d,c){g.ready("mediaelement-swf",function(){i.createSWF?i.createSWF(b,d,c):a||(a=!0,s(),B(b,d,c))})}}(),n=function(a,b,d,c,e){d||d!==!1&&b&&b.isActive=="flash"?(d=i.canSwfPlaySrces(a,c))?B(a,d,b):e?i.setError(a,!1):n(a,b,!1,c,!0):(d=i.canNativePlaySrces(a,c))?b&&b.isActive=="flash"&&i.setActive(a,"html5",b):e?(i.setError(a,!1),b&&b.isActive=="flash"&&
i.setActive(a,"html5",b)):n(a,b,!0,c,!0)},z=/^(?:embed|object)$/i,c=function(a,b){var d=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{}),c=i.srces(a),h=a.parentNode;clearTimeout(d.loadTimer);e.data(a,"mediaerror",!1);if(c.length&&h&&!z.test(h.nodeName||""))b=b||g.data(a,"mediaelement"),n(a,b,w.preferFlash||p,c)};e(k).bind("ended",function(a){var b=g.data(a.target,"mediaelement");(!m||b&&b.isActive!="html5"||e.prop(a.target,"loop"))&&setTimeout(function(){!e.prop(a.target,"paused")&&e.prop(a.target,
"loop")&&e(a.target).prop("currentTime",0).play()},1)});m||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=g.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");c(this,a);j&&(!a||a.isActive=="html5")&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});u[a]=g.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(b){var c="";j&&u[a].prop._supvalue&&(c=u[a].prop._supvalue.call(this,b),c=="no"&&
(c=""));!c&&r&&(b=e.trim((b||"").split(";")[0]),i.swfMimeTypes.indexOf(b)!=-1&&(c="maybe"));return c}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){c(a);a=null},9)}});j&&g.isReady("mediaelement-core",!0);g.addReady(function(a,b){e("video, audio",a).add(b.filter("video, audio")).each(function(){e.browser.msie&&g.browserVersion>
8&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')?e(this).prop("preload","metadata").mediaLoad():c(this);if(j){var a,b,h=this,i=function(){var a=e.prop(h,"buffered");if(a){for(var b="",c=0,d=a.length;c<d;c++)b+=a.end(c);return b}},k=function(){var a=i();a!=b&&(b=a,e(h).triggerHandler("progress"))};e(this).bind("play loadstart progress",function(c){c.type=="progress"&&(b=i());clearTimeout(a);a=setTimeout(k,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){c.type=="emptied"&&(b=!1);clearTimeout(a)})}})});j||g.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);