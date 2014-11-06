/*
PluginDetect v0.8.8
www.pinlady.net/PluginDetect/license/
[ Java Flash ]
[ isMinVersion getVersion hasMimeType onDetectionDone ]
[ ]

Copyright © 2014  Eric Gerds,  http://www.pinlady.net/PluginDetect/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*
PluginDetect v0.8.8
www.pinlady.net/PluginDetect/license/
[ QuickTime Java Flash Silverlight ]
[ isMinVersion getVersion hasMimeType onDetectionDone ]
[ ShowMessage BetterIE ]
*/
/*
PluginDetect v0.8.8
www.pinlady.net/PluginDetect/license/
[ QuickTime Java Flash Silverlight ]
[ isMinVersion getVersion hasMimeType onDetectionDone ]
[ BetterIE ]
*/
(function(){var a={version:"0.8.8",name:"PluginDetect",addPlugin:function(b,c){b&&a.isString(b)&&c&&a.isFunc(c.getVersion)&&(b=b.replace(/\s/g,"").toLowerCase(),a.Plugins[b]=c,a.isDefined(c.getVersionDone)||(c.installed=null,c.version=null,c.version0=null,c.getVersionDone=null,c.pluginName=b))},openTag:"<",hasOwnProperty:{}.constructor.prototype.hasOwnProperty,hasOwn:function(b,c){var d;try{d=a.hasOwnProperty.call(b,c)}catch(e){}return!!d},rgx:{str:/string/i,num:/number/i,fun:/function/i,arr:/array/i},toString:{}.constructor.prototype.toString,isDefined:function(a){return"undefined"!=typeof a},isArray:function(b){return a.rgx.arr.test(a.toString.call(b))},isString:function(b){return a.rgx.str.test(a.toString.call(b))},isNum:function(b){return a.rgx.num.test(a.toString.call(b))},isStrNum:function(b){return a.isString(b)&&/\d/.test(b)},isFunc:function(b){return a.rgx.fun.test(a.toString.call(b))},getNumRegx:/[\d][\d\.\_,\-]*/,splitNumRegx:/[\.\_,\-]/g,getNum:function(b,c){var d=a.isStrNum(b)?(a.isDefined(c)?RegExp(c):a.getNumRegx).exec(b):null;return d?d[0]:null},compareNums:function(b,c,d){var e=parseInt;if(a.isStrNum(b)&&a.isStrNum(c)){if(a.isDefined(d)&&d.compareNums)return d.compareNums(b,c);b=b.split(a.splitNumRegx);c=c.split(a.splitNumRegx);for(d=0;d<Math.min(b.length,c.length);d++){if(e(b[d],10)>e(c[d],10))return 1;if(e(b[d],10)<e(c[d],10))return-1}}return 0},formatNum:function(b,c){var d,e;if(!a.isStrNum(b))return null;a.isNum(c)||(c=4);c--;e=b.replace(/\s/g,"").split(a.splitNumRegx).concat(["0","0","0","0"]);for(d=0;4>d;d++)if(/^(0+)(.+)$/.test(e[d])&&(e[d]=RegExp.$2),d>c||!/\d/.test(e[d]))e[d]="0";return e.slice(0,4).join(",")},pd:{getPROP:function(b,c,d){try{b&&(d=b[c])}catch(e){}return d},findNavPlugin:function(b){if(b.dbug)return b.dbug;if(window.navigator){var c={Find:a.isString(b.find)?RegExp(b.find,"i"):b.find,Find2:a.isString(b.find2)?RegExp(b.find2,"i"):b.find2,Avoid:b.avoid?a.isString(b.avoid)?RegExp(b.avoid,"i"):b.avoid:0,Num:b.num?/\d/:0},d,e,f,g=navigator.mimeTypes,h=navigator.plugins,l=null;if(b.mimes&&g)for(f=a.isArray(b.mimes)?[].concat(b.mimes):a.isString(b.mimes)?[b.mimes]:[],d=0;d<f.length;d++){e=0;try{a.isString(f[d])&&/[^\s]/.test(f[d])&&(e=g[f[d]].enabledPlugin)}catch(n){}if(e&&(e=this.findNavPlugin_(e,c),e.obj&&(l=e.obj),l&&!a.dbug))return l}if(b.plugins&&h){b=a.isArray(b.plugins)?[].concat(b.plugins):a.isString(b.plugins)?[b.plugins]:[];for(d=0;d<b.length;d++){e=0;try{b[d]&&a.isString(b[d])&&(e=h[b[d]])}catch(p){}if(e&&(e=this.findNavPlugin_(e,c),e.obj&&(l=e.obj),l&&!a.dbug))return l}b=h.length;if(a.isNum(b))for(d=0;d<b;d++){e=0;try{e=h[d]}catch(m){}if(e&&(e=this.findNavPlugin_(e,c),e.obj&&(l=e.obj),l&&!a.dbug))break}}}return l},findNavPlugin_:function(a,c){var d=a.description||"",e=a.name||"",f={};if(c.Find.test(d)&&!(c.Find2&&!c.Find2.test(e)||c.Num&&!c.Num.test(RegExp.leftContext+RegExp.rightContext))||c.Find.test(e)&&!(c.Find2&&!c.Find2.test(d)||c.Num&&!c.Num.test(RegExp.leftContext+RegExp.rightContext)))c.Avoid&&(c.Avoid.test(d)||c.Avoid.test(e))||(f.obj=a);return f},getVersionDelimiter:",",findPlugin:function(b){var c,d={status:-3,plugin:0};if(!a.isString(b))return d;if(1==b.length)return this.getVersionDelimiter=b,d;b=b.toLowerCase().replace(/\s/g,"");c=a.Plugins[b];if(!c||!c.getVersion)return d;d.plugin=c;d.status=1;return d}},getPluginFileVersion:function(b,c){var d,e,f,g,h=-1;if(!b)return c;b.version&&(d=a.getNum(b.version+""));if(!d||!c)return c||d||null;d=a.formatNum(d);c=a.formatNum(c);e=c.split(a.splitNumRegx);f=d.split(a.splitNumRegx);for(g=0;g<e.length;g++)if(-1<h&&g>h&&"0"!=e[g]||f[g]!=e[g]&&(-1==h&&(h=g),"0"!=e[g]))return c;return d},AXO:function(){var a;try{a=new window.ActiveXObject}catch(c){}return a?null:window.ActiveXObject}(),getAXO:function(b){var c=null;try{c=new a.AXO(b)}catch(d){}c&&(a.browser.ActiveXEnabled=!0);return c},betterIE:function(){var b=a.browser,c=document;b.verIEtrue=null;b.docModeIE=null;if(b.isIE){var d,e=c.createElement("div"),f=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];try{e.style.behavior="url(#default#clientcaps)"}catch(g){}for(d=0;d<f.length;d++){try{b.verIEtrue=e.getComponentVersion(f[d],"componentid").replace(/,/g,".")}catch(h){}if(b.verIEtrue&&!a.dbug)break}d=parseFloat(b.verIEtrue||"0",10);b.docModeIE=c.documentMode||(/back/i.test(c.compatMode||"")?5:d)||b.verIE;b.verIE=d||b.docModeIE;}},browser:{},INIT:function(){a.init.library()},init:{hasRun:0,detectIE:function(){var b=a.browser,c=document,d,e=window.navigator?navigator.userAgent||"":"",f,g;b.ActiveXFilteringEnabled=!1;b.ActiveXEnabled=!1;try{b.ActiveXFilteringEnabled=!!window.external.msActiveXFilteringEnabled()}catch(h){}g=["WMPlayer.OCX","ShockwaveFlash.ShockwaveFlash","AgControl.AgControl"];f="Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM TDCCtl.TDCCtl Shell.UIHelper HtmlDlgSafeHelper.HtmlDlgSafeHelper Scripting.Dictionary".split(" ").concat(g);for(d=0;d<f.length&&(!a.getAXO(f[d])||a.dbug);d++);if(b.ActiveXEnabled&&b.ActiveXFilteringEnabled)for(d=0;d<g.length;d++)if(a.getAXO(g[d])){b.ActiveXFilteringEnabled=!1;break}d=c.documentMode;try{c.documentMode=""}catch(l){}b.isIE=b.ActiveXEnabled||a.isNum(c.documentMode)||eval("/*@cc_on!@*/!1");try{c.documentMode=d}catch(n){}b.verIE=null;b.isIE&&(b.verIE=(a.isNum(c.documentMode)&&7<=c.documentMode?c.documentMode:0)||(/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i.test(e)?parseFloat(RegExp.$1,10):7));a.betterIE();},detectNonIE:function(){var b=a.browser,c=window.navigator?navigator:{},d=b.isIE?"":c.userAgent||"",e=c.vendor||"",c=c.product||"";b.isGecko=/Gecko/i.test(c)&&/Gecko\s*\/\s*\d/i.test(d);b.verGecko=b.isGecko?a.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(d)?RegExp.$1:"0.9"):null;b.isOpera=/(OPR\s*\/|Opera\s*\/\s*\d.*\s*Version\s*\/|Opera\s*[\/]?)\s*(\d+[\.,\d]*)/i.test(d);b.verOpera=b.isOpera?a.formatNum(RegExp.$2):null;b.isChrome=!b.isOpera&&/(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i.test(d);b.verChrome=b.isChrome?a.formatNum(RegExp.$2):null;b.isSafari=!b.isOpera&&!b.isChrome&&(/Apple/i.test(e)||!e)&&/Safari\s*\/\s*(\d[\d\.]*)/i.test(d);b.verSafari=b.isSafari&&/Version\s*\/\s*(\d[\d\.]*)/i.test(d)?a.formatNum(RegExp.$1):null;},detectPlatform:function(){var b,c=window.navigator?navigator.platform||"":"";a.OS=100;if(c){var d=["Win",1,"Mac",2,"Linux",3,"FreeBSD",4,"iPhone",21.1,"iPod",21.2,"iPad",21.3,"Win.*CE",22.1,"Win.*Mobile",22.2,"Pocket\\s*PC",22.3,"",100];for(b=d.length-2;0<=b;b-=2)if(d[b]&&RegExp(d[b],"i").test(c)){a.OS=d[b+1];break}}},library:function(){var b=document;a.win.init();a.head=b.getElementsByTagName("head")[0]||b.getElementsByTagName("body")[0]||b.body||null;this.detectPlatform();this.detectIE();this.detectNonIE();this.hasRun=1;}},ev:{handler:function(a,c,d,e){return function(){a(c,d,e)}},fPush:function(b,c){a.isArray(c)&&(a.isFunc(b)||a.isArray(b)&&0<b.length&&a.isFunc(b[0]))&&c.push(b)},call0:function(b){var c=a.isArray(b)?b.length:-1;0<c&&a.isFunc(b[0])?(b[0](a,1<c?b[1]:0,2<c?b[2]:0,3<c?b[3]:0)):a.isFunc(b)&&(b(a));},callArray0:function(b){var c;if(a.isArray(b))for(;b.length;)c=b[0],b.splice(0,1),this.call0(c)},call:function(a){this.call0(a);this.ifDetectDoneCallHndlrs()},callArray:function(a){this.callArray0(a);this.ifDetectDoneCallHndlrs()},allDoneHndlrs:[],ifDetectDoneCallHndlrs:function(){var b,c;if(this.allDoneHndlrs.length&&(!a.win||a.win.loaded&&!a.win.loadPrvtHndlrs.length&&!a.win.loadPblcHndlrs.length)){if(a.Plugins)for(b in a.Plugins)if(c=a.Plugins[b],a.hasOwn(a.Plugins,b)&&c&&a.isFunc(c.getVersion)&&(3==c.OTF||c.DoneHndlrs&&c.DoneHndlrs.length))return;this.callArray0(this.allDoneHndlrs);}}},isMinVersion:function(b,c,d,e){var f=a.pd.findPlugin(b),g=-1;if(0>f.status)return f.status;f=f.plugin;c=a.formatNum(a.isNum(c)?c.toString():a.isStrNum(c)?a.getNum(c):"0");1!=f.getVersionDone&&(f.getVersion(c,d,e),null===f.getVersionDone&&(f.getVersionDone=1));null!==f.installed&&(g=0.5>=f.installed?f.installed:0.7==f.installed?1:null===f.version?0:0<=a.compareNums(f.version,c,f)?1:-0.1);return g},getVersion:function(b,c,d){var e=a.pd.findPlugin(b);if(0>e.status)return null;e=e.plugin;1!=e.getVersionDone&&(e.getVersion(null,c,d),null===e.getVersionDone&&(e.getVersionDone=1));e=(e=e.version||e.version0)?e.replace(a.splitNumRegx,a.pd.getVersionDelimiter):e;return e},hasMimeType:function(b){if(b&&window.navigator&&navigator.mimeTypes){var c,d,e,f=navigator.mimeTypes,g=a.isArray(b)?[].concat(b):a.isString(b)?[b]:[];e=g.length;for(d=0;d<e;d++){b=0;try{a.isString(g[d])&&/[^\s]/.test(g[d])&&(b=f[g[d]])}catch(h){}if((c=b?b.enabledPlugin:0)&&(c.name||c.description))return b}}return null},onDetectionDone:function(b,c,d,e){var f=a.pd.findPlugin(b);if(-3==f.status)return-1;f=f.plugin;a.isArray(f.DoneHndlrs)||(f.DoneHndlrs=[]);1!=f.getVersionDone&&(a.getVersion?a.getVersion(b,d,e):a.isMinVersion(b,"0",d,e));if(-0.5!=f.installed&&0.5!=f.installed)return a.ev.call(c),1;a.ev.fPush(c,f.DoneHndlrs);return 0},codebase:{isDisabled:function(){return a.browser.ActiveXEnabled&&a.isDefined(a.pd.getPROP(document.createElement("object"),"object"))?0:1},pluginMayBeHanging:function(b){return!this.isDisabled()&&b&&a.isDefined(a.pd.getPROP(b,"readyState"))&&a.pd.getPROP(b.firstChild,"object")&&(b=a.pd.getPROP(b.firstChild,"readyState"),a.isNum(b)&&4!=b)?(1):0},emptyNode:function(a){try{a.innerHTML=""}catch(c){}},emptyGarbage:function(){var b,c=this.HTML,d=0;if(c.length){for(b=c.length-1;b>=this.len;b--)c[b]&&c[b].span&&this.pluginMayBeHanging(c[b].span)&&(this.emptyNode(c[b].span),c[b].span=null,d=1);this.len=c.length;if(d){try{window.CollectGarbage()}catch(e){}}}},HTML:[],len:0,onDone:function(a,c){var d,e=c.HTML;for(d=0;d<e.length;d++)e[d]&&e[d].span&&(c.emptyNode(e[d].span),e[d].span=null)},init:function(b){if(!b.init){b.init=1;var c;a.ev.fPush([this.onDone,this],a.win.unloadHndlrs);b.tagA='<object width="1" height="1" style="display:none;" codebase="#version=';c=b.classID||b.$$.classID||"";b.tagB='" '+(/clsid\s*:/i.test(c)?'classid="':'type="')+c+'">'+a.openTag+"/object>";for(c=0;c<b.Lower.length;c++)b.Lower[c]=a.formatNum(b.Lower[c]),b.Upper[c]=a.formatNum(b.Upper[c]);}},isActiveXObject:function(b,c){var d=0,e=b.$$,f=document.createElement("span");if(b.min&&0>=a.compareNums(c,b.min))return 1;if(b.max&&0<=a.compareNums(c,b.max))return 0;f.innerHTML=b.tagA+c+b.tagB;a.pd.getPROP(f.firstChild,"object")&&(d=1);d?(b.min=c,this.HTML.push({span:f})):(b.max=c,f.innerHTML="");return d},convert_:function(b,c,d,e){return(b=b.convert[c])?a.isFunc(b)?a.formatNum(b(d.split(a.splitNumRegx),e).join(",")):d:b},convert:function(b,c,d){var e,f,g;c=a.formatNum(c);f={v:c,x:-1};if(c)for(e=0;e<b.Lower.length;e++)if((g=this.convert_(b,e,b.Lower[e]))&&0<=a.compareNums(c,d?g:b.Lower[e])&&(!e||0>a.compareNums(c,d?this.convert_(b,e,b.Upper[e]):b.Upper[e]))){f.v=this.convert_(b,e,c,d);f.x=e;break}return f},isMin:function(b,c){var d,e=0;if(!a.isStrNum(c)||this.isDisabled())return e;this.init(b);if(!b.L)for(b.L={},d=0;d<b.Lower.length;d++)if(this.isActiveXObject(b,b.Lower[d])){b.L=this.convert(b,b.Lower[d]);break}b.L.v&&(d=this.convert(b,c,1),0<=d.x&&(e=(b.L.x==d.x?this.isActiveXObject(b,d.v):0>=a.compareNums(c,b.L.v))?1:-1));return e},search:function(b){var c=this,d=b.$$,e=0,f;f=b.searchHasRun||c.isDisabled()?1:0;b.searchHasRun=1;if(f)return b.version||null;c.init(b);var g,h=function(d,f){var g=[].concat(m);g[d]=f;g=c.isActiveXObject(b,g.join(","));g?(e=1,m[d]=f):k[d]=f;return g},l=b.DIGITMAX,n,p,m=[0,0,0,0],k=[0,0,0,0];for(f=0;f<k.length;f++){m[f]=Math.floor(b.DIGITMIN[f])||0;n=m.join(",");p=m.slice(0,f).concat([99999999,99999999,99999999,99999999]).slice(0,m.length).join(",");for(g=0;g<l.length;g++)a.isArray(l[g])&&(l[g].push(0),l[g][f]>k[f]&&0<=a.compareNums(p,b.Lower[g])&&0>a.compareNums(n,b.Upper[g])&&(k[f]=Math.floor(l[g][f])));for(g=0;30>g;g++){if(16>=k[f]-m[f]){for(g=k[f];g>=m[f]+(f?1:0)&&!h(f,g);g--);break}h(f,Math.round((k[f]+m[f])/2))}if(!e)break;k[f]=m[f];}e&&(b.version=c.convert(b,m.join(",")).v);return b.version||null}},win:{loaded:!1,hasRun:0,init:function(){this.hasRun||(this.hasRun=1,this.addEvent("load",this.onLoad),this.addEvent("unload",this.onUnload))},addEvent:function(b,c){var d=window;a.isFunc(c)&&(d.addEventListener?d.addEventListener(b,c,!1):d.attachEvent?d.attachEvent("on"+b,c):d["on"+b]=this.concatFn(c,d["on"+b]))},concatFn:function(a,c){return function(){a();"function"==typeof c&&c()}},loadPrvtHndlrs:[],loadPblcHndlrs:[],unloadHndlrs:[],onUnload:function(){if(a&&a.win){a.ev.callArray(a.win.unloadHndlrs);for(var b in a)a[b]=0;a=0}},count:0,countMax:1,intervalLength:10,onLoad:function(){if(a&&a.win&&!a.win.loaded){var b=a.win;b.count<b.countMax&&b.loadPrvtHndlrs.length?(setTimeout(b.onLoad,b.intervalLength)):(b.loaded=!0,a.ev.callArray(b.loadPrvtHndlrs),a.ev.callArray(b.loadPblcHndlrs));b.count++}}},DOM:{isEnabled:{objectTag:function(){return a.browser.isIE?a.browser.ActiveXEnabled:1},objectTagUsingActiveX:function(){return a.browser.ActiveXEnabled},objectProperty:function(){return a.browser.ActiveXEnabled&&a.isDefined(a.pd.getPROP(document.createElement("object"),"object"))?1:0}},div:null,divID:"plugindetect",divWidth:300,getDiv:function(){return this.div||document.getElementById(this.divID)||null},initDiv:function(){var b;this.div||((b=this.getDiv())?(this.div=b):(this.div=document.createElement("div"),this.div.id=this.divID,this.setStyle(this.div,this.getStyle.div()),this.insertDivInBody(this.div)),a.ev.fPush([this.onWinUnloadEmptyDiv,this],a.win.unloadHndlrs))},pluginSize:1,altHTML:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",emptyNode:function(b){if(b&&/div|span/i.test(b.tagName||"")){a.browser.isIE&&this.setStyle(b,["display","none"]);try{b.innerHTML=""}catch(c){}}},onWinUnloadEmptyDiv:function(a,c){var d=c.getDiv(),e,f;if(d){if(d.childNodes){for(e=d.childNodes.length-1;0<=e;e--)f=d.childNodes[e],c.emptyNode(f);try{d.innerHTML=""}catch(g){}}if(d.parentNode){try{d.parentNode.removeChild(d)}catch(h){}c.div=null}}},width:function(){var b=this.span,c;c=b&&a.isNum(b.scrollWidth)?b.scrollWidth:-1;b=b&&a.isNum(b.offsetWidth)?b.offsetWidth:-1;return 0<b?b:0<c?c:Math.max(b,c)},obj:function(a){return(a=this.span)&&a.firstChild?a.firstChild:null},readyState:function(){return a.browser.isIE&&a.isDefined(a.pd.getPROP(this.span,"readyState"))?a.pd.getPROP(this.obj(),"readyState"):this.undefined},objectProperty:function(){var b;this.DOM.isEnabled.objectProperty()&&(b=a.pd.getPROP(this.obj(),"object"));return b},getTagStatus:function(b,c,d,e,f,g){if(!b||!b.span)return-2;var h=b.width(),l=b.readyState(),n=b.objectProperty();if(n)return 1.5;var k=/clsid\s*\:/i,m=d&&k.test(d.outerHTML||"")?d:e&&k.test(e.outerHTML||"")?e:0;d=d&&!k.test(d.outerHTML||"")?d:e&&!k.test(e.outerHTML||"")?e:0;k=b&&k.test(b.outerHTML||"")?m:d;if(!(c&&c.span&&k&&k.span))return 0;m=k.width();c=c.width();d=k.readyState();if(0>h||0>m||c<=this.pluginSize)return 0;g&&!b.pi&&a.isDefined(n)&&a.browser.isIE&&b.tagName==k.tagName&&b.time<=k.time&&h===m&&0===l&&0!==d&&(b.pi=1);if(m<c)return b.pi?-0.1:0;if(h>=c&&(!b.winLoaded&&a.win.loaded||a.isNum(f)&&(a.isNum(b.count2)||(b.count2=f),0<f-b.count2)))return b.pi?-0.5:-1;try{if(h==this.pluginSize&&(!a.browser.isIE||4===l)&&(!b.winLoaded&&a.win.loaded||b.winLoaded&&a.isNum(f)&&(a.isNum(b.count)||(b.count=f),5<=f-b.count)))return 1}catch(q){}return b.pi?-0.1:0},setStyle:function(a,c){var d=a.style,e;if(d&&c)for(e=0;e<c.length;e+=2)try{d[c[e]]=c[e+1]}catch(f){}},getStyle:{span:function(){var b=a.DOM;return[].concat(this.Default).concat(["display","inline","fontSize",b.pluginSize+3+"px","lineHeight",b.pluginSize+3+"px"])},div:function(){var b=a.DOM;return[].concat(this.Default).concat(["display","block","width",b.divWidth+"px","height",b.pluginSize+3+"px","fontSize",b.pluginSize+3+"px","lineHeight",b.pluginSize+3+"px","position","absolute","right","9999px","top","-9999px"])},plugin:function(b){var c=a.DOM;return"background-color:transparent;background-image:none;vertical-align:baseline;outline-style:none;border-style:none;padding:0px;margin:0px;visibility:"+(b?"hidden;":"visible;")+"display:inline;font-size:"+(c.pluginSize+3)+"px;line-height:"+(c.pluginSize+3)+"px;"},Default:"backgroundColor transparent backgroundImage none verticalAlign baseline outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(" ")},insertDivInBody:function(b,c){var d=null,e=c?window.top.document:window.document,f=e.getElementsByTagName("body")[0]||e.body;if(!f)try{e.write('<div id="pd33993399">.'+a.openTag+"/div>"),d=e.getElementById("pd33993399")}catch(g){}if(f=e.getElementsByTagName("body")[0]||e.body)f.insertBefore(b,f.firstChild),d&&f.removeChild(d)},insert:function(b,c,d,e,f,g,h){var l,k=document.createElement("span");a.isDefined(e)||(e="");if(a.isString(b)&&/[^\s]/.test(b)){b=b.toLowerCase().replace(/\s/g,"");l=a.openTag+b+" ";l+='style="'+this.getStyle.plugin(g)+'" ';var p=1,m=1;for(g=0;g<c.length;g+=2)/[^\s]/.test(c[g+1])&&(l+=c[g]+'="'+c[g+1]+'" '),/width/i.test(c[g])&&(p=0),/height/i.test(c[g])&&(m=0);l+=(p?'width="'+this.pluginSize+'" ':"")+(m?'height="'+this.pluginSize+'" ':"");l+=">";for(g=0;g<d.length;g+=2)/[^\s]/.test(d[g+1])&&(l+=a.openTag+'param name="'+d[g]+'" value="'+d[g+1]+'" />');l+=e+a.openTag+"/"+b+">"}else b="",l=e;h||this.initDiv();c=h||this.getDiv();b={span:null,winLoaded:a.win.loaded,tagName:b,outerHTML:l,DOM:this,time:(new Date).getTime(),width:this.width,obj:this.obj,readyState:this.readyState,objectProperty:this.objectProperty};if(c&&c.parentNode){this.setStyle(k,this.getStyle.span());c.appendChild(k);try{k.innerHTML=l}catch(q){}b.span=k;b.winLoaded=a.win.loaded}return b}},file:{any:"fileStorageAny999",valid:"fileStorageValid999",save:function(b,c,d){b&&a.isDefined(d)&&(b[this.any]||(b[this.any]=[]),b[this.valid]||(b[this.valid]=[]),b[this.any].push(d),(c=this.split(c,d))&&b[this.valid].push(c))},getValidLength:function(a){return a&&a[this.valid]?a[this.valid].length:0},getAnyLength:function(a){return a&&a[this.any]?a[this.any].length:0},getValid:function(a,c){return a&&a[this.valid]?this.get(a[this.valid],c):null},getAny:function(a,c){return a&&a[this.any]?this.get(a[this.any],c):null},get:function(b,c){var d=b.length-1,e=a.isNum(c)?c:d;return 0>e||e>d?null:b[e]},split:function(b,c){var d=null,e;b=b?b.replace(".","\\."):"";e=RegExp("^(.*[^\\/])("+b+"\\s*)$");a.isString(c)&&e.test(c)&&(e=RegExp.$1.split("/"),d={name:e[e.length-1],ext:RegExp.$2,full:c},e[e.length-1]="",d.path=e.join("/"));return d}},Plugins:{}};window[a.name]=a;a.INIT();var w={setPluginStatus:function(b,c,d){this.installed=c?1:d?0<d?0.7:-0.1:b?0:-1;c&&(this.version=a.formatNum(c,3));this.getVersionDone=0.7==this.installed||-0.1==this.installed?0:1;a.codebase.emptyGarbage();},getVersion:function(b){var c=null,d=0;d&&!a.dbug||!this.nav.query().installed||(d=1);c&&!a.dbug||!this.nav.query().version||(c=this.nav.version);if(b=c?0:this.codebase.isMin(b))this.setPluginStatus(0,0,b);else{if(!c||a.dbug)if(b=this.codebase.search())d=1,c=b;d&&!a.dbug||!this.axo.query().installed||(d=1);c&&!a.dbug||!this.axo.query().version||(c=this.axo.version);this.setPluginStatus(d,c)}},nav:{hasRun:0,installed:0,version:null,mimeType:"video/quicktime application/x-quicktimeplayer image/x-macpaint image/x-quicktime application/x-rtsp application/x-sdp application/sdp audio/vnd.qcelp video/sd-video audio/mpeg video/mp4 video/3gpp2 application/x-mpeg audio/x-m4b audio/x-aac video/flc".split(" "),find:"QuickTime.*Plug-?in",find2:"QuickTime",avoid:"Totem|VLC|RealPlayer|Helix",plugins:"QuickTime Plug-in",query:function(){var b,c;c=this.hasRun||!a.hasMimeType(this.mimeType);this.hasRun=1;if(c)return this;if(c=a.pd.findNavPlugin({find:this.find,find2:this.find2,avoid:this.avoid,mimes:this.mimeType,plugins:this.plugins}))this.installed=1,c.name&&(b=a.getNum(c.name+"")),b&&(this.version=b);return this}},codebase:{classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",isMin:function(b){var c=0;this.$$=w;a.isStrNum(b)&&(b=b.split(a.splitNumRegx),3<b.length&&0<parseInt(b[3],10)&&(b[3]="9999"),b=b.join(","),c=a.codebase.isMin(this,b));return c},search:function(){this.$$=w;return a.codebase.search(this)},DIGITMAX:[[12,11,11],[7,60],[7,11,11],0,[7,11,11]],DIGITMIN:[5,0,0,0],Upper:["999","7,60","7,50","7,6","7,5"],Lower:["7,60","7,50","7,6","7,5","0"],convert:[1,function(a,c){return c?[a[0],a[1]+a[2],a[3],"0"]:[a[0],a[1].charAt(0),a[1].charAt(1),a[2]]},1,0,1]},axo:{hasRun:0,installed:0,version:null,progID:["QuickTimeCheckObject.QuickTimeCheck","QuickTimeCheckObject.QuickTimeCheck.1"],progID0:"QuickTime.QuickTime",query:function(){var b,c;b=this.hasRun||!a.browser.ActiveXEnabled;this.hasRun=1;if(b)return this;for(c=0;c<this.progID.length;c++)if(b=a.getAXO(this.progID[c]))if(this.installed=1,(tmp=a.pd.getPROP(b,"QuickTimeVersion"))&&tmp.toString&&(tmp=tmp.toString(16),this.version=parseInt(tmp.charAt(0)||"0",16)+"."+parseInt(tmp.charAt(1)||"0",16)+"."+parseInt(tmp.charAt(2)||"0",16),!a.dbug))break;return this}}};a.addPlugin("quicktime",w);var k={mimeType:["application/x-java-applet","application/x-java-vm","application/x-java-bean"],mimeType_dummy:"application/dummymimejavaapplet",classID:"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",classID_dummy:"clsid:8AD9C840-044E-11D1-B3E9-BA9876543210",navigator:{init:function(){var b=k;try{this.a=window.navigator.javaEnabled()}catch(c){}if(this.mimeObj=a.hasMimeType(b.mimeType))this.pluginObj=this.mimeObj.enabledPlugin},a:!0,javaEnabled:function(){return this.a},mimeObj:0,pluginObj:0},OTF:null,getVerifyTagsDefault:function(){return[1,this.applet.isDisabled.VerifyTagsDefault_1()?0:1,1]},getVersion:function(b,c,d){var e=this.applet,f=this.verify,g=this.navigator,h=null,l=null,k=null;null===this.getVersionDone&&(this.OTF=0,g.init(),f&&f.init());e.setVerifyTagsArray(d);a.file.save(this,".jar",c);0===this.getVersionDone?e.should_Insert_Query_Any()&&(c=e.insert_Query_Any(b),this.setPluginStatus(c[0],c[1],h,b)):(h&&!a.dbug||!this.navMime.query().version||(h=this.navMime.version),h&&!a.dbug||!this.navPlugin.query().version||(h=this.navPlugin.version),h&&!a.dbug||!this.DTK.query().version||(h=this.DTK.version),this.nonAppletDetectionOk(h)&&(k=h),this.setPluginStatus(k,l,h,b),e.should_Insert_Query_Any()&&(c=e.insert_Query_Any(b),c[0]&&(k=c[0],l=c[1])),this.setPluginStatus(k,l,h,b))},nonAppletDetectionOk:function(b){var c=this.navigator,d=a.browser,e=1;if(!b||!c.javaEnabled()||!d.isIE&&!c.mimeObj||d.isIE&&!d.ActiveXEnabled)e=0;return e},setPluginStatus:function(b,c,d,e){var f,g=0,h=this.applet;d=d||this.version0;if(f=h.isRange(b))h.setRange(f,e)==b&&(g=f),b=0;3>this.OTF&&(this.installed=g?0<g?0.7:-0.1:b?1:d?-0.2:-1);2==this.OTF&&this.NOTF&&!this.applet.getResult()[0]&&(this.installed=d?-0.2:-1);3==this.OTF&&-0.5!=this.installed&&0.5!=this.installed&&(this.installed=1<=this.NOTF.isJavaActive(1)?0.5:-0.5);4!=this.OTF||-0.5!=this.installed&&0.5!=this.installed||(b?this.installed=1:g?this.installed=0<g?0.7:-0.1:1<=this.NOTF.isJavaActive(1)?d?(this.installed=1,b=d):this.installed=0:this.installed=d?-0.2:-1);d&&(this.version0=a.formatNum(a.getNum(d)));b&&!g&&(this.version=a.formatNum(a.getNum(b)));c&&a.isString(c)&&(this.vendor=c);this.vendor||(this.vendor="");this.verify&&this.verify.isEnabled()?this.getVersionDone=0:1!=this.getVersionDone&&(this.getVersionDone=2>this.OTF?0:this.applet.can_Insert_Query_Any()?0:1);a.codebase.emptyGarbage();},DTK:{hasRun:0,status:null,VERSIONS:[],version:"",HTML:null,Plugin2Status:null,classID:["clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA","clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA"],mimeType:["application/java-deployment-toolkit","application/npruntime-scriptable-plugin;DeploymentToolkit"],isDisabled:function(b){return this.HTML?1:b||a.dbug?0:this.hasRun||!a.DOM.isEnabled.objectTagUsingActiveX()?1:0},query:function(b){var c=k,d,e,f=a.DOM.altHTML,g,h=null,l=null;b=this.isDisabled(b);this.hasRun=1;if(b)return this;this.status=0;if(a.DOM.isEnabled.objectTagUsingActiveX())for(d=0;d<this.classID.length;d++){this.HTML=a.DOM.insert("object",["classid",this.classID[d]],[],f);h=this.HTML.obj();if(a.pd.getPROP(h,"jvms"))break;}else(e=a.hasMimeType(this.mimeType))&&e.type&&(this.HTML=a.DOM.insert("object",["type",e.type],[],f),h=this.HTML.obj());if(h){try{if(g=a.pd.getPROP(h,"jvms"))if(l=g.getLength(),a.isNum(l))for(this.status=0<l?1:-1,d=0;d<l;d++)if(e=a.getNum(g.get(l-1-d).version))this.VERSIONS.push(e),a.formatNum(e)}catch(p){}this.VERSIONS.length&&(this.version=a.formatNum(this.VERSIONS[0]))}return this}},navMime:{hasRun:0,mimetype:"",version:"",mimeObj:0,pluginObj:0,regexJPI:/^\s*application\/x-java-applet;jpi-version\s*=\s*(\d.*)$/i,isDisabled:function(){var a=k;return this.hasRun||!a.navigator.mimeObj?1:0},update:function(b){var c=b?b.enabledPlugin:0,d=b&&this.regexJPI.test(b.type||"")?a.formatNum(a.getNum(RegExp.$1)):0;d&&c&&(c.description||c.name)&&(0<a.compareNums(d,this.version||a.formatNum("0"))&&(this.version=d,this.mimeObj=b,this.pluginObj=c,this.mimetype=b.type))},query:function(){var b=k,c,d,e,f,g,h=navigator.mimeTypes;c=this.isDisabled();this.hasRun=1;if(c)return this;g=h.length;if(a.isNum(g))for(c=0;c<g;c++){d=0;try{d=h[c]}catch(l){}this.update(d)}if(!this.version||a.dbug)for(f=a.isArray(b.mimeType)?b.mimeType:[b.mimeType],c=0;c<f.length;c++){d=0;try{d=h[f[c]]}catch(n){}g=(e=d?d.enabledPlugin:0)?e.length:null;if(a.isNum(g))for(b=0;b<g;b++){d=0;try{d=e[b]}catch(p){}this.update(d)}}return this}},navPlugin:{hasRun:0,version:"",getPlatformNum:function(){var b=0,c=/Java.*TM.*Platform[^\d]*(\d+)[\.,_]?(\d*)\s*U?(?:pdate)?\s*(\d*)/i,d=a.pd.findNavPlugin({find:c,mimes:k.mimeType,plugins:1});d&&(c.test(d.name||"")||c.test(d.description||""))&&5<=parseInt(RegExp.$1,10)&&(b="1,"+RegExp.$1+","+(RegExp.$2?RegExp.$2:"0")+","+(RegExp.$3?RegExp.$3:"0"));return b},getPluginNum:function(){var b=k,c=0,d,e;d=/Java[^\d]*Plug-in/i;if(e=a.pd.findNavPlugin({find:d,num:1,mimes:b.mimeType,plugins:1,dbug:0}))c=this.checkPluginNum(e.description,d),d=this.checkPluginNum(e.name,d),c=c&&d?0<a.compareNums(c,d)?c:d:c||d;!c&&(d=/Java.*\d.*Plug-in/i,e=a.pd.findNavPlugin({find:d,mimes:b.mimeType,plugins:1,dbug:0}))&&(c=this.checkPluginNum(e.description,d),d=this.checkPluginNum(e.name,d),c=c&&d?0<a.compareNums(c,d)?c:d:c||d);return c},checkPluginNum:function(b,c){var d;(d=c.test(b)?a.formatNum(a.getNum(b)):0)&&0<=a.compareNums(d,a.formatNum("10"))&&(d=d.split(a.splitNumRegx),d=a.formatNum("1,"+(parseInt(d[0],10)-3)+",0,"+d[1]));d&&(0>a.compareNums(d,a.formatNum("1,3"))||0<=a.compareNums(d,a.formatNum("2")))&&(d=0);return d},query:function(){var b=k,c=0,b=this.hasRun||!b.navigator.mimeObj;this.hasRun=1;if(b)return this;(!c||a.dbug)&&(b=this.getPlatformNum())&&(c=b);(!c||a.dbug)&&(b=this.getPluginNum())&&(c=b);c&&(this.version=a.formatNum(c));return this}},applet:{codebase:{isMin:function(b){this.$$=k;return a.codebase.isMin(this,b)},search:function(){this.$$=k;return a.codebase.search(this)},DIGITMAX:[[15,128],[6,0,512],0,[1,5,2,256],0,[1,4,1,1],[1,4,0,64],[1,3,2,32]],DIGITMIN:[1,0,0,0],Upper:"999 10 5,0,20 1,5,0,20 1,4,1,20 1,4,1,2 1,4,1 1,4".split(" "),Lower:"10 5,0,20 1,5,0,20 1,4,1,20 1,4,1,2 1,4,1 1,4 0".split(" "),convert:[function(a,c){return c?[1<parseInt(a[0],10)?"99":parseInt(a[1],10)+3+"",a[3],"0","0"]:["1",parseInt(a[0],10)-3+"","0",a[1]]},function(a,c){return c?[a[1],a[2],a[3]+"0","0"]:["1",a[0],a[1],a[2].substring(0,a[2].length-1||1)]},0,function(a,c){return c?[a[0],a[1],a[2],a[3]+"0"]:[a[0],a[1],a[2],a[3].substring(0,a[3].length-1||1)]},0,1,function(a,c){return c?[a[0],a[1],a[2],a[3]+"0"]:[a[0],a[1],a[2],a[3].substring(0,a[3].length-1||1)]},1]},results:[[null,null],[null,null],[null,null],[null,null]],getResult:function(){var a=this.results,c,d=[];for(c=a.length-1;0<=c&&(d=a[c],!d[0]);c--);return d=[].concat(d)},DummySpanTagHTML:0,HTML:[0,0,0,0],active:[0,0,0,0],DummyObjTagHTML:0,DummyObjTagHTML2:0,allowed:[1,1,1,1],VerifyTagsHas:function(a){var c;for(c=0;c<this.allowed.length;c++)if(this.allowed[c]===a)return 1;return 0},saveAsVerifyTagsArray:function(b){var c;if(a.isArray(b)){for(c=1;c<this.allowed.length;c++)b.length>c-1&&a.isNum(b[c-1])&&(0>b[c-1]&&(b[c-1]=0),3<b[c-1]&&(b[c-1]=3),this.allowed[c]=b[c-1]);this.allowed[0]=this.allowed[3];}},setVerifyTagsArray:function(b){var c=k;null===c.getVersionDone&&this.saveAsVerifyTagsArray(c.getVerifyTagsDefault());a.dbug?this.saveAsVerifyTagsArray([3,3,3]):b&&this.saveAsVerifyTagsArray(b)},isDisabled:{single:function(b){if(this.all())return 1;if(0==b)return a.codebase.isDisabled();if(1==b)return!a.DOM.isEnabled.objectTag();if(2==b)return this.AppletTag();if(3==b)return!a.DOM.isEnabled.objectTagUsingActiveX()},all_:null,all:function(){var b=k.navigator,c=a.browser;null===this.all_&&(b=c.isOpera&&0>a.compareNums(c.verOpera,"13,0,0,0")&&!b.javaEnabled()||this.AppletTag()&&!a.DOM.isEnabled.objectTag()||!b.mimeObj&&!c.isIE?1:0,this.all_=b);return this.all_},AppletTag:function(){var b=k.navigator;return a.browser.isIE?!b.javaEnabled():0},VerifyTagsDefault_1:function(){var b=a.browser;return b.isIE&&(9>b.verIE||!b.ActiveXEnabled)||b.verGecko&&0>a.compareNums(b.verGecko,a.formatNum("2"))||b.isSafari&&(!b.verSafari||0>a.compareNums(b.verSafari,a.formatNum("4")))||b.isOpera&&0>a.compareNums(b.verOpera,a.formatNum("11"))?0:1}},can_Insert_Query:function(a){var c=this.results[0][0],d=this.getResult()[0];return this.HTML[a]||0==a&&null!==c&&!this.isRange(c)||0==a&&d&&!this.isRange(d)?0:!this.isDisabled.single(a)},can_Insert_Query_Any:function(){var a;for(a=0;a<this.results.length;a++)if(this.can_Insert_Query(a))return 1;return 0},should_Insert_Query:function(a){var c=this.allowed,d=k,e=this.getResult()[0],e=e&&(0<a||!this.isRange(e));return this.can_Insert_Query(a)&&0!==c[a]?3==c[a]||2.8==c[a]&&!e||!d.nonAppletDetectionOk(d.version0)&&(2==c[a]||1==c[a]&&!e)?1:0:0},should_Insert_Query_Any:function(){var a;for(a=0;a<this.allowed.length;a++)if(this.should_Insert_Query(a))return 1;return 0},query:function(b){var c=k,d=null,e=null,f=this.results,g,h=this.HTML[b];if(h&&h.obj()&&!(f[b][0]||c.bridgeDisabled||a.dbug&&3>c.OTF)){c=h.obj();g=h.readyState();try{d=a.getNum(c.getVersion()+""),e=c.getVendor()+"",c.statusbar(" ")}catch(l){}d&&a.isStrNum(d)&&(f[b]=[d,e],this.active[b]=2);}},isRange:function(a){return/^[<>]/.test(a||"")?">"==a.charAt(0)?1:-1:0},setRange:function(b,c){return(b?0<b?">":"<":"")+(a.isString(c)?c:"")},insertJavaTag:function(b,c,d,e,f){var g=k,h=a.file.getValid(g),l=h.path,h=["archive",h.name+h.ext,"code","A.class"];e=(e?["width",e]:[]).concat(f?["height",f]:[]);f=["mayscript","true"];var n=["scriptable","true","codebase_lookup","false"].concat(f),p=g.navigator,p=!a.browser.isIE&&p.mimeObj&&p.mimeObj.type?p.mimeObj.type:g.mimeType[0];if(1==b)return a.DOM.insert("object",["type",p].concat(e),["codebase",l].concat(h).concat(n),d,g,0,c);if(2==b)return a.browser.isIE?a.DOM.insert("applet",["alt",d].concat(f).concat(h).concat(e),["codebase",l].concat(n),d,g,0,c):a.DOM.insert("applet",["codebase",l,"alt",d].concat(f).concat(h).concat(e),[].concat(n),d,g,0,c);if(3==b)return a.browser.isIE?a.DOM.insert("object",["classid",g.classID].concat(e),["codebase",l].concat(h).concat(n),d,g,0,c):a.DOM.insert();if(4==b)return a.DOM.insert("embed",["codebase",l].concat(h).concat(["type",p]).concat(n).concat(e),[],d,g,0,c)},insert_Query_Any:function(b){var c=k,d=this.results,e=this.HTML,f=a.DOM.altHTML,g,h=a.file.getValid(c);this.should_Insert_Query(0)&&(2>c.OTF&&(c.OTF=2),d[0]=[0,0],(g=b?this.codebase.isMin(b):this.codebase.search())&&(d[0][0]=b?this.setRange(g,b):g),this.active[0]=g?1.5:-1);if(!h)return this.getResult();this.DummySpanTagHTML||(this.DummySpanTagHTML=a.DOM.insert("",[],[],f));this.should_Insert_Query(1)&&(2>c.OTF&&(c.OTF=2),e[1]=this.insertJavaTag(1,0,f),d[1]=[0,0],this.query(1));this.should_Insert_Query(2)&&(2>c.OTF&&(c.OTF=2),e[2]=this.insertJavaTag(2,0,f),d[2]=[0,0],this.query(2));this.should_Insert_Query(3)&&(2>c.OTF&&(c.OTF=2),e[3]=this.insertJavaTag(3,0,f),d[3]=[0,0],this.query(3));a.DOM.isEnabled.objectTag()&&(this.DummyObjTagHTML||!e[1]&&!e[2]||(this.DummyObjTagHTML=a.DOM.insert("object",["type",c.mimeType_dummy],[],f)),!this.DummyObjTagHTML2&&e[3]&&(this.DummyObjTagHTML2=a.DOM.insert("object",["classid",c.classID_dummy],[],f)));c.NOTF.init();return this.getResult()}},NOTF:{count:0,countMax:25,intervalLength:250,init:function(){var b=k;3>b.OTF&&this.shouldContinueQuery()&&(b.OTF=3,this.onIntervalQuery=a.ev.handler(this.$$onIntervalQuery,this),a.win.loaded||a.win.loadPrvtHndlrs.push([this.onWinLoadQuery,this]),setTimeout(this.onIntervalQuery,this.intervalLength))},shouldContinueQuery:function(){var b=k.applet,c,d=0;if(a.win.loaded&&this.count>this.countMax)return 0;for(c=0;c<b.results.length;c++)if(b.HTML[c]&&(!a.win.loaded&&this.count>this.countMax&&a.codebase.pluginMayBeHanging(b.HTML[c].span)&&(d=1,b.HTML[c].DELETE=1),!d&&!b.results[c][0]&&(2<=b.allowed[c]||1==b.allowed[c]&&!b.getResult()[0])&&0<=this.isAppletActive(c)))return 1;return 0},isJavaActive:function(a){var c=k,d,e,f=-9;for(d=0;d<c.applet.HTML.length;d++)e=this.isAppletActive(d,a),e>f&&(f=e);return f},isAppletActive:function(b,c){var d=k,e=d.navigator,f=d.applet,g=f.HTML[b],h=f.active,l=0,n;n=h[b];if(c||1.5<=n||!g||!g.span)return n;n=a.DOM.getTagStatus(g,f.DummySpanTagHTML,f.DummyObjTagHTML,f.DummyObjTagHTML2,this.count);for(f=0;f<h.length;f++)0<h[f]&&(l=1);n=1!=n?n:a.browser.isIE||d.version0&&e.javaEnabled()&&e.mimeObj&&("object"==g.tagName||l)?1:0;return h[b]=n},onWinLoadQuery:function(a,c){var d;3==k.OTF&&(d=c.queryAllApplets(),c.queryCompleted(d))},$$onIntervalQuery:function(a){var c=k,d;3==c.OTF&&(d=a.queryAllApplets(),a.shouldContinueQuery()||a.queryCompleted(d));a.count++;3==c.OTF&&setTimeout(a.onIntervalQuery,a.intervalLength)},queryAllApplets:function(){var b=k.applet,c;for(c=0;c<b.results.length;c++)b.query(c);b=b.getResult();return b},queryCompleted:function(b){var c=k,d=c.applet,e;if(!(4<=c.OTF)){c.OTF=4;this.isJavaActive();for(e=0;e<d.HTML.length;e++)d.HTML[e]&&d.HTML[e].DELETE&&(a.DOM.emptyNode(d.HTML[e].span),d.HTML[e].span=null);c.setPluginStatus(b[0],b[1],0);a.onDetectionDone&&c.DoneHndlrs&&(a.ev.callArray(c.DoneHndlrs))}}},zz:0};a.addPlugin("java",k);var t={mimeType:"application/x-shockwave-flash",setPluginStatus:function(b,c){this.installed=c?1:b?0:-1;this.version=a.formatNum(c);this.getVersionDone=-1==this.installed||this.axo.version||this.instance.version?1:0},getVersion:function(b,c){var d=null,e=0;e&&!a.dbug||!this.navPlugin.query().installed||(e=1);d&&!a.dbug||!this.navPlugin.query().version||(d=this.navPlugin.version);e&&!a.dbug||!this.axo.query().installed||(e=1);d&&!a.dbug||!this.axo.query().version||(d=this.axo.version);(!e&&!d||c||a.dbug)&&this.instance.query().version&&(e=1,d=this.instance.version);this.setPluginStatus(e,d)},navPlugin:{hasRun:0,installed:0,version:null,getNum:function(a){return a?(a=/[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a))?a[0].replace(/[rRdD\.]/g,",").replace(/\s/g,""):null:null},query:function(){var b=t,c,d=this.hasRun||!a.hasMimeType(b.mimeType);this.hasRun=1;if(d)return this;if(b=a.pd.findNavPlugin({find:"Shockwave.*Flash",mimes:b.mimeType,plugins:["Shockwave Flash"]}))this.installed=1,b.description&&(c=this.getNum(b.description));c&&(c=a.getPluginFileVersion(b,c));c&&(this.version=c);return this}},axo:{hasRun:0,installed:0,version:null,progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",query:function(){var b,c,d;b=this.hasRun;this.hasRun=1;if(b)return this;for(c=0;10>c;c++)if(d=a.getAXO(this.progID+(c?"."+c:""))){this.installed=1;b=0;try{b=a.getNum(d.GetVariable("$version")+"")}catch(e){}if(b&&(this.version=b,!a.dbug))break}return this}},instance:{hasRun:0,version:null,HTML:null,isEnabled:function(){var b=t,c=1;if(this.hasRun||a.DOM.isEnabled.objectTagUsingActiveX()||!a.hasMimeType(b.mimeType))c=0;return c},query:function(){var b=t,c=this.isEnabled();this.hasRun=1;if(c){this.HTML=a.DOM.insert("object",["type",b.mimeType],["play","false","menu","false"],"",b);try{this.version=a.getNum(this.HTML.obj().GetVariable("$version")+"")}catch(d){}}return this}}};a.addPlugin("flash",t);a.addPlugin("silverlight",{getVersion:function(){var b=null,c=0;c&&!a.dbug||!this.nav.query().installed||(c=1);b&&!a.dbug||!this.nav.query().version||(b=this.nav.version);c&&!a.dbug||!this.axo.query().installed||(c=1);b&&!a.dbug||!this.axo.query().version||(b=this.axo.version);this.version=a.formatNum(b);this.installed=b?1:c?0:-1},nav:{hasRun:0,installed:0,version:null,mimeType:["application/x-silverlight","application/x-silverlight-2"],query:function(){var b,c;c=this.hasRun||!a.hasMimeType(this.mimeType);this.hasRun=1;if(c)return this;if(c=a.pd.findNavPlugin({find:"Silverlight.*Plug-?in",mimes:this.mimeType,plugins:"Silverlight Plug-In"}))this.installed=1;c&&c.description&&(b=a.formatNum(a.getNum(c.description+"")));b&&(b=b.split(a.splitNumRegx),2>parseInt(b[0],10)&&30226<=parseInt(b[2],10)&&(b[0]="2"),b=b.join(","));b&&(this.version=b);return this}},axo:{hasRun:0,installed:0,version:null,progID:"AgControl.AgControl",maxdigit:[20,10,10,100,100,10],mindigit:[0,0,0,0,0,0],IsVersionSupported:function(b,c){try{return this.testVersion?0<=a.compareNums(a.formatNum(this.testVersion.join(",")),a.formatNum(c.join(","))):b.IsVersionSupported(this.format(c))}catch(d){}return 0},format:function(a){return a[0]+"."+a[1]+"."+a[2]+this.make2digits(a[3])+this.make2digits(a[4])+"."+a[5]},make2digits:function(a){return(10>a?"0":"")+a+""},query:function(){var b,c;b=this.hasRun;this.hasRun=1;if(b)return this;if(c=a.getAXO(this.progID))this.installed=1;if(c&&this.IsVersionSupported(c,this.mindigit)){var d=[].concat(this.mindigit),e,f=0;for(b=0;b<this.maxdigit.length;b++){for(e=0;1<this.maxdigit[b]-this.mindigit[b]&&20>e;)e++,f++,d[b]=Math.round((this.maxdigit[b]+this.mindigit[b])/2),this.IsVersionSupported(c,d)?this.mindigit[b]=d[b]:this.maxdigit[b]=d[b];d[b]=this.mindigit[b]}this.version=this.format(d);}return this}}});})();