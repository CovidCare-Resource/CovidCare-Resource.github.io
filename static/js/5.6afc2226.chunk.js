/*! For license information please see 5.6afc2226.chunk.js.LICENSE.txt */
(this["webpackJsonpcovid-resource"]=this["webpackJsonpcovid-resource"]||[]).push([[5],{106:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,r=t(0),o=(n=r)&&"object"===typeof n&&"default"in n?n.default:n,s=new(t(107)),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),d=s.getEngine(),u=s.getOS(),c=s.getUA(),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},w=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},f=function(e){var i=w();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,i){return(x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function E(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="mobile",C="tablet",S="smarttv",N="console",A="wearable",F=void 0,T={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},j={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},P={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},M=function(e,i,t,n){return function(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?g(t,!0).forEach((function(i){v(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}({},e,{vendor:m(i.vendor),model:m(i.model),os:m(t.name),osVersion:m(t.version),ua:m(n)})},L=function(e){switch(e){case k:return{isMobile:!0};case C:return{isTablet:!0};case S:return{isSmartTV:!0};case N:return{isConsole:!0};case A:return{isWearable:!0};case F:return{isBrowser:!0};default:return P}}(l.type);var W=function(){return"string"===typeof c&&-1!==c.indexOf("Edg/")},B=function(){return l.type===F},I=function(){return a.name===T.Edge},V=function(){return f("iPad")},_=l.type===S,z=l.type===N,R=l.type===A,D=a.name===T.MobileSafari||V(),q=a.name===T.Chromium,U=function(){switch(l.type){case k:case C:return!0;default:return!1}}()||V(),Y=l.type===k,X=l.type===C||V(),G=B(),H=B(),Z=u.name===j.Android,$=u.name===j.WindowsPhone,J=u.name===j.IOS||V(),K=a.name===T.Chrome,Q=a.name===T.Firefox,ee=a.name===T.Safari||a.name===T.MobileSafari,ie=a.name===T.Opera,te=a.name===T.InternetExplorer||a.name===T.Ie,ne=m(u.version),re=m(u.name),oe=m(a.version),se=m(a.major),ae=m(a.name),le=m(l.vendor),de=m(l.model),ue=m(d.name),ce=m(d.version),me=m(c),we=I()||W(),fe=a.name===T.Yandex,pe=m(l.type,"browser"),be=function(){var e=w();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),ve=V(),he=f("iPhone"),ge=f("iPod"),ye=function(){var e=w(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),xe=W(),Ee=I()&&!W(),Oe=u.name===j.Windows,ke=u.name===j.MAC_OS,Ce=a.name===T.MIUI,Se=a.name===T.SamsungBrowser;i.AndroidView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return Z?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.BrowserTypes=T,i.BrowserView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return G?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.ConsoleView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return z?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.CustomView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=e.condition,l=E(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},l),t):null},i.IEView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return te?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.IOSView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return J?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return Y?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.MobileView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return U?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.OsTypes=j,i.SmartTVView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return _?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.TabletView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return X?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.WearableView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return R?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,t=e.children,n=e.viewClassName,s=e.style,a=E(e,["renderWithFragment","children","viewClassName","style"]);return $?i?o.createElement(r.Fragment,null,t):o.createElement("div",h({className:n,style:s},a),t):null},i.browserName=ae,i.browserVersion=se,i.deviceDetect=function(){var e=L.isBrowser,i=L.isMobile,t=L.isTablet,n=L.isSmartTV,r=L.isConsole,o=L.isWearable;return e?function(e,i,t,n,r){return{isBrowser:e,browserMajorVersion:m(i.major),browserFullVersion:m(i.version),browserName:m(i.name),engineName:m(t.name),engineVersion:m(t.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(r)}}(e,a,d,u,c):n?function(e,i,t,n){return{isSmartTV:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(n)}}(n,d,u,c):r?function(e,i,t,n){return{isConsole:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(n)}}(r,d,u,c):i||t?M(L,l,u,c):o?function(e,i,t,n){return{isWearable:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(n)}}(o,d,u,c):void 0},i.deviceType=pe,i.engineName=ue,i.engineVersion=ce,i.fullBrowserVersion=oe,i.getUA=me,i.isAndroid=Z,i.isBrowser=G,i.isChrome=K,i.isChromium=q,i.isConsole=z,i.isDesktop=H,i.isEdge=we,i.isEdgeChromium=xe,i.isElectron=ye,i.isFirefox=Q,i.isIE=te,i.isIOS=J,i.isIOS13=be,i.isIPad13=ve,i.isIPhone13=he,i.isIPod13=ge,i.isLegacyEdge=Ee,i.isMIUI=Ce,i.isMacOs=ke,i.isMobile=U,i.isMobileOnly=Y,i.isMobileSafari=D,i.isOpera=ie,i.isSafari=ee,i.isSamsungBrowser=Se,i.isSmartTV=_,i.isTablet=X,i.isWearable=R,i.isWinPhone=$,i.isWindows=Oe,i.isYandex=fe,i.mobileModel=de,i.mobileVendor=le,i.osName=re,i.osVersion=ne,i.withOrientationChange=function(e){return function(i){function t(e){var i,n,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(i=!(r=y(t).call(this,e))||"object"!==typeof r&&"function"!==typeof r?O(n):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(O(i)),i.onOrientationChange=i.onOrientationChange.bind(O(i)),i.onPageLoad=i.onPageLoad.bind(O(i)),i.state={isLandscape:!1,isPortrait:!1},i}var n,r,s;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&x(e,i)}(t,i),n=t,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":p(window))&&U&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,h({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&b(n.prototype,r),s&&b(n,s),t}(o.Component)}},107:function(e,i,t){var n;!function(r,o){"use strict";var s="function",a="undefined",l="object",d="string",u="model",c="name",m="type",w="vendor",f="version",p="architecture",b="console",v="mobile",h="tablet",g="smarttv",y="wearable",x="embedded",E={extend:function(e,i){var t={};for(var n in e)i[n]&&i[n].length%2===0?t[n]=i[n].concat(e[n]):t[n]=e[n];return t},has:function(e,i){return typeof e===d&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===d?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===a?e:e.substring(0,255)}},O={rgx:function(e,i){for(var t,n,r,a,d,u,c=0;c<i.length&&!d;){var m=i[c],w=i[c+1];for(t=n=0;t<m.length&&!d;)if(d=m[t++].exec(e))for(r=0;r<w.length;r++)u=d[++n],typeof(a=w[r])===l&&a.length>0?2==a.length?typeof a[1]==s?this[a[0]]=a[1].call(this,u):this[a[0]]=a[1]:3==a.length?typeof a[1]!==s||a[1].exec&&a[1].test?this[a[0]]=u?u.replace(a[1],a[2]):o:this[a[0]]=u?a[1].call(this,u,a[2]):o:4==a.length&&(this[a[0]]=u?a[3].call(this,u.replace(a[1],a[2])):o):this[a]=u||o;c+=2}},str:function(e,i){for(var t in i)if(typeof i[t]===l&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(E.has(i[t][n],e))return"?"===t?o:t}else if(E.has(i[t],e))return"?"===t?o:t;return e}},k={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},C={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[c,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[f,[c,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[c,f],[/opios[\/\s]+([\w\.]+)/i],[f,[c,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[f,[c,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,f],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[f,[c,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[f,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[c,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[f,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[f,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure Browser"],f],[/focus\/([\w\.]+)/i],[f,[c,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[f,[c,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[f,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[c,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[f,[c,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[f,[c,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[c,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 Browser"],f],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],f],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[c,f],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[c],[/;fbav\/([\w\.]+);/i],[f,[c,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[c,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[c,f],[/\bgsa\/([\w\.]+)\s.*safari\//i],[f,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[f,[c,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[c,"Chrome WebView"],f],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[f,[c,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[c,f],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[f,[c,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[f,c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[c,[f,O.str,k.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[c,f],[/(navigator|netscape)\/([\w\.-]+)/i],[[c,"Netscape"],f],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[f,[c,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[c,f]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,E.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",E.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,E.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[u,[w,"Samsung"],[m,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[u,[w,"Samsung"],[m,v]],[/\((ip(?:hone|od)[\s\w]*);/i],[u,[w,"Apple"],[m,v]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[w,"Apple"],[m,h]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[u,[w,"Huawei"],[m,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[u,[w,"Huawei"],[m,v]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[u,/_/g," "],[w,"Xiaomi"],[m,v]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[u,/_/g," "],[w,"Xiaomi"],[m,h]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[u,[w,"OPPO"],[m,v]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[u,[w,"Vivo"],[m,v]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[u,[w,"Realme"],[m,v]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[u,[w,"Motorola"],[m,v]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[w,"Motorola"],[m,h]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[u,[w,"LG"],[m,h]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[u,[w,"LG"],[m,v]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[u,[w,"Lenovo"],[m,h]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[u,/_/g," "],[w,"Nokia"],[m,v]],[/droid.+;\s(pixel\sc)[\s)]/i],[u,[w,"Google"],[m,h]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[u,[w,"Google"],[m,v]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[w,"Sony"],[m,v]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[u,"Xperia Tablet"],[w,"Sony"],[m,h]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[u,[w,"OnePlus"],[m,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[u,[w,"Amazon"],[m,h]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[u,"Fire Phone"],[w,"Amazon"],[m,v]],[/\((playbook);[\w\s\),;-]+(rim)/i],[u,w,[m,h]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[u,[w,"BlackBerry"],[m,v]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[u,[w,"ASUS"],[m,h]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[u,[w,"ASUS"],[m,v]],[/(nexus\s9)/i],[u,[w,"HTC"],[m,h]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[w,[u,/_/g," "],[m,v]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[w,"Acer"],[m,h]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[u,[w,"Meizu"],[m,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[w,u,[m,v]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[w,u,[m,h]],[/\s(surface\sduo)\s/i],[u,[w,"Microsoft"],[m,h]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[u,[w,"Fairphone"],[m,v]],[/\s(u304aa)\sbuild/i],[u,[w,"AT&T"],[m,v]],[/sie-(\w*)/i],[u,[w,"Siemens"],[m,v]],[/[;\/]\s?(rct\w+)\sbuild/i],[u,[w,"RCA"],[m,h]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[u,[w,"Dell"],[m,h]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[u,[w,"Verizon"],[m,h]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[u,[w,"Barnes & Noble"],[m,h]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[u,[w,"NuVision"],[m,h]],[/;\s(k88)\sbuild/i],[u,[w,"ZTE"],[m,h]],[/;\s(nx\d{3}j)\sbuild/i],[u,[w,"ZTE"],[m,v]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[u,[w,"Swiss"],[m,v]],[/[;\/]\s?(zur\d{3})\sbuild/i],[u,[w,"Swiss"],[m,h]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[u,[w,"Zeki"],[m,h]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[w,"Dragon Touch"],u,[m,h]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[u,[w,"Insignia"],[m,h]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[u,[w,"NextBook"],[m,h]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[w,"Voice"],u,[m,v]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[w,"LvTel"],u,[m,v]],[/;\s(ph-1)\s/i],[u,[w,"Essential"],[m,v]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[u,[w,"Envizen"],[m,h]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[u,[w,"MachSpeed"],[m,h]],[/[;\/]\s?tu_(1491)\sbuild/i],[u,[w,"Rotor"],[m,h]],[/(shield[\w\s]+)\sbuild/i],[u,[w,"Nvidia"],[m,h]],[/(sprint)\s(\w+)/i],[w,u,[m,v]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[w,"Microsoft"],[m,v]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[w,"Zebra"],[m,h]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[w,"Zebra"],[m,v]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[w,u,[m,b]],[/droid.+;\s(shield)\sbuild/i],[u,[w,"Nvidia"],[m,b]],[/(playstation\s[345portablevi]+)/i],[u,[w,"Sony"],[m,b]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[u,[w,"Microsoft"],[m,b]],[/smart-tv.+(samsung)/i],[w,[m,g]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[w,"Samsung"],[m,g]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[w,"LG"],[m,g]],[/(apple)\s?tv/i],[w,[u,"Apple TV"],[m,g]],[/crkey/i],[[u,"Chromecast"],[w,"Google"],[m,g]],[/droid.+aft([\w])(\sbuild\/|\))/i],[u,[w,"Amazon"],[m,g]],[/\(dtv[\);].+(aquos)/i],[u,[w,"Sharp"],[m,g]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[w,E.trim],[u,E.trim],[m,g]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[m,g]],[/((pebble))app\/[\d\.]+\s/i],[w,u,[m,y]],[/droid.+;\s(glass)\s\d/i],[u,[w,"Google"],[m,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[u,[w,"Zebra"],[m,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[w,[m,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[u,[m,v]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[u,[m,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[m,E.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[w,"Generic"]],[/(phone)/i],[[m,v]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[f,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[c,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,c]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[c,f],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[c,[f,O.str,k.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[c,"Windows"],[f,O.str,k.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[c,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[c,"Mac OS"],[f,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[c,f],[/\(bb(10);/i],[f,[c,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[f,[c,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[c,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[f,[c,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[c,"Chromium OS"],f],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[c,f],[/(sunos)\s?([\w\.\d]*)/i],[[c,"Solaris"],f],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[c,f]]},S=function e(i,t){if("object"===typeof i&&(t=i,i=o),!(this instanceof e))return new e(i,t).getResult();var n=i||("undefined"!==typeof r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),s=t?E.extend(C,t):C;return this.getBrowser=function(){var e={name:o,version:o};return O.rgx.call(e,n,s.browser),e.major=E.major(e.version),e},this.getCPU=function(){var e={architecture:o};return O.rgx.call(e,n,s.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return O.rgx.call(e,n,s.device),e},this.getEngine=function(){var e={name:o,version:o};return O.rgx.call(e,n,s.engine),e},this.getOS=function(){var e={name:o,version:o};return O.rgx.call(e,n,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===d&&e.length>255?E.trim(e,255):e,this},this.setUA(n),this};S.VERSION="0.7.28",S.BROWSER={NAME:c,MAJOR:"major",VERSION:f},S.CPU={ARCHITECTURE:p},S.DEVICE={MODEL:u,VENDOR:w,TYPE:m,CONSOLE:b,MOBILE:v,SMARTTV:g,TABLET:h,WEARABLE:y,EMBEDDED:x},S.ENGINE={NAME:c,VERSION:f},S.OS={NAME:c,VERSION:f},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=S),i.UAParser=S):(n=function(){return S}.call(i,t,i,e))===o||(e.exports=n);var N="undefined"!==typeof r&&(r.jQuery||r.Zepto);if(N&&!N.ua){var A=new S;N.ua=A.getResult(),N.ua.get=function(){return A.getUA()},N.ua.set=function(e){A.setUA(e);var i=A.getResult();for(var t in i)N.ua[t]=i[t]}}}("object"===typeof window?window:this)},108:function(e,i,t){"use strict";var n=t(0),r=t.n(n),o=t(16),s=t.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,d={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},u=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],c=function(e,i,t,n,r){var o=r.offsetX,s=r.offsetY,a=n?8:0,l=t.split(" "),d=e.top+e.height/2,u=e.left+e.width/2,c=i.height,m=i.width,w=d-c/2,f=u-m/2,p="",b="0%",v="0%";switch(l[0]){case"top":w-=c/2+e.height/2+a,p="rotate(180deg)  translateX(50%)",b="100%",v="50%";break;case"bottom":w+=c/2+e.height/2+a,p="rotate(0deg) translateY(-100%) translateX(-50%)",v="50%";break;case"left":f-=m/2+e.width/2+a,p=" rotate(90deg)  translateY(50%) translateX(-25%)",v="100%",b="50%";break;case"right":f+=m/2+e.width/2+a,p="rotate(-90deg)  translateY(-150%) translateX(25%)",b="50%"}switch(l[1]){case"top":w=e.top,b=e.height/2+"px";break;case"bottom":w=e.top-c+e.height,b=c-e.height/2+"px";break;case"left":f=e.left,v=e.width/2+"px";break;case"right":f=e.left-m+e.width,v=m-e.width/2+"px"}return{top:w="top"===l[0]?w-s:w+s,left:f="left"===l[0]?f-o:f+o,transform:p,arrowLeft:v,arrowTop:b}},m=function(e,i,t,n,r,o){var s=r.offsetX,a=r.offsetY,l={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},d=0,m=function(e){var i={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if("string"===typeof e){var t=document.querySelector(e);null!==t&&(i=t.getBoundingClientRect())}return i}(o),w=Array.isArray(t)?t:[t];for((o||Array.isArray(t))&&(w=[].concat(w,u));d<w.length;){var f={top:(l=c(e,i,w[d],n,{offsetX:s,offsetY:a})).top,left:l.left,width:i.width,height:i.height};if(!(f.top<=m.top||f.left<=m.left||f.top+f.height>=m.top+m.height||f.left+f.width>=m.left+m.width))break;d++}return l},w=0,f=Object(n.forwardRef)((function(e,i){var t=e.trigger,o=void 0===t?null:t,u=e.onOpen,c=void 0===u?function(){}:u,f=e.onClose,p=void 0===f?function(){}:f,b=e.defaultOpen,v=void 0!==b&&b,h=e.open,g=void 0===h?void 0:h,y=e.disabled,x=void 0!==y&&y,E=e.nested,O=void 0!==E&&E,k=e.closeOnDocumentClick,C=void 0===k||k,S=e.repositionOnResize,N=void 0===S||S,A=e.closeOnEscape,F=void 0===A||A,T=e.on,j=void 0===T?["click"]:T,P=e.contentStyle,M=void 0===P?{}:P,L=e.arrowStyle,W=void 0===L?{}:L,B=e.overlayStyle,I=void 0===B?{}:B,V=e.className,_=void 0===V?"":V,z=e.position,R=void 0===z?"bottom center":z,D=e.modal,q=void 0!==D&&D,U=e.lockScroll,Y=void 0!==U&&U,X=e.arrow,G=void 0===X||X,H=e.offsetX,Z=void 0===H?0:H,$=e.offsetY,J=void 0===$?0:$,K=e.mouseEnterDelay,Q=void 0===K?100:K,ee=e.mouseLeaveDelay,ie=void 0===ee?100:ee,te=e.keepTooltipInside,ne=void 0!==te&&te,re=e.children,oe=Object(n.useState)(g||v),se=oe[0],ae=oe[1],le=Object(n.useRef)(null),de=Object(n.useRef)(null),ue=Object(n.useRef)(null),ce=Object(n.useRef)(null),me=Object(n.useRef)("popup-"+ ++w),we=!!q||!o,fe=Object(n.useRef)(0);l((function(){return se?(ce.current=document.activeElement,Se(),Oe(),xe()):Ee(),function(){clearTimeout(fe.current)}}),[se]),Object(n.useEffect)((function(){"boolean"===typeof g&&(g?pe():be())}),[g,x]);var pe=function(){se||x||(ae(!0),setTimeout(c,0))},be=function(){se&&!x&&(ae(!1),we&&ce.current.focus(),setTimeout(p,0))},ve=function(e){null===e||void 0===e||e.stopPropagation(),se?be():pe()},he=function(){clearTimeout(fe.current),fe.current=setTimeout(pe,Q)},ge=function(e){null===e||void 0===e||e.preventDefault(),ve()},ye=function(){clearTimeout(fe.current),fe.current=setTimeout(be,ie)},xe=function(){we&&Y&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},Ee=function(){we&&Y&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Oe=function(){var e,i=null===de||void 0===de||null===(e=de.current)||void 0===e?void 0:e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),t=Array.prototype.slice.call(i)[0];null===t||void 0===t||t.focus()};Object(n.useImperativeHandle)(i,(function(){return{open:function(){pe()},close:function(){be()},toggle:function(){ve()}}}));var ke,Ce,Se=function(){if(!we&&se&&(null===le||void 0===le?void 0:le.current)&&(null===le||void 0===le?void 0:le.current)&&(null===de||void 0===de?void 0:de.current)){var e,i,t=le.current.getBoundingClientRect(),n=de.current.getBoundingClientRect(),r=m(t,n,R,G,{offsetX:Z,offsetY:J},ne);if(de.current.style.top=r.top+window.scrollY+"px",de.current.style.left=r.left+window.scrollX+"px",G&&ue.current)ue.current.style.transform=r.transform,ue.current.style.setProperty("-ms-transform",r.transform),ue.current.style.setProperty("-webkit-transform",r.transform),ue.current.style.top=(null===(e=W.top)||void 0===e?void 0:e.toString())||r.arrowTop,ue.current.style.left=(null===(i=W.left)||void 0===i?void 0:i.toString())||r.arrowLeft}};ke=be,void 0===(Ce=F)&&(Ce=!0),Object(n.useEffect)((function(){if(Ce){var e=function(e){"Escape"===e.key&&ke()};return document.addEventListener("keyup",e),function(){Ce&&document.removeEventListener("keyup",e)}}}),[ke,Ce]),function(e,i){void 0===i&&(i=!0),Object(n.useEffect)((function(){if(i){var t=function(i){if(9===i.keyCode){var t,n=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),r=Array.prototype.slice.call(n);if(1===r.length)return void i.preventDefault();var o=r[0],s=r[r.length-1];i.shiftKey&&document.activeElement===o?(i.preventDefault(),s.focus()):document.activeElement===s&&(i.preventDefault(),o.focus())}};return document.addEventListener("keydown",t),function(){i&&document.removeEventListener("keydown",t)}}}),[e,i])}(de,se&&we),function(e,i){void 0===i&&(i=!0),Object(n.useEffect)((function(){if(i){var t=function(){e()};return window.addEventListener("resize",t),function(){i&&window.removeEventListener("resize",t)}}}),[e,i])}(Se,N),function(e,i,t){void 0===t&&(t=!0),Object(n.useEffect)((function(){if(t){var n=function(t){var n=Array.isArray(e)?e:[e],r=!1;n.forEach((function(e){e.current&&!e.current.contains(t.target)||(r=!0)})),t.stopPropagation(),r||i()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){t&&(document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n))}}}),[e,i,t])}(o?[de,le]:[de],be,C&&!O);var Ne=function(){return r.a.createElement("div",Object.assign({},function(){var e=we?d.popupContent.modal:d.popupContent.tooltip,i={className:"popup-content "+(""!==_?_.split(" ").map((function(e){return e+"-content"})).join(" "):""),style:a({},e,M,{pointerEvents:"auto"}),ref:de,onClick:function(e){e.stopPropagation()}};return!q&&j.indexOf("hover")>=0&&(i.onMouseEnter=he,i.onMouseLeave=ye),i}(),{key:"C",role:we?"dialog":"tooltip",id:me.current}),G&&!we&&r.a.createElement("div",{ref:ue,style:d.popupArrow},r.a.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==_?_.split(" ").map((function(e){return e+"-arrow"})).join(" "):""),viewBox:"0 0 32 16",style:a({position:"absolute"},W)},r.a.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),re&&"function"===typeof re?re(be,se):re)},Ae=!(j.indexOf("hover")>=0),Fe=we?d.overlay.modal:d.overlay.tooltip,Te=[Ae&&r.a.createElement("div",{key:"O","data-testid":"overlay","data-popup":we?"modal":"tooltip",className:"popup-overlay "+(""!==_?_.split(" ").map((function(e){return e+"-overlay"})).join(" "):""),style:a({},Fe,I,{pointerEvents:C&&O||we?"auto":"none"}),onClick:C&&O?be:void 0,tabIndex:-1},we&&Ne()),!we&&Ne()];return r.a.createElement(r.a.Fragment,null,function(){for(var e={key:"T",ref:le,"aria-describedby":me.current},i=Array.isArray(j)?j:[j],t=0,n=i.length;t<n;t++)switch(i[t]){case"click":e.onClick=ve;break;case"right-click":e.onContextMenu=ge;break;case"hover":e.onMouseEnter=he,e.onMouseLeave=ye;break;case"focus":e.onFocus=he,e.onBlur=ye}if("function"===typeof o){var s=o(se);return!!o&&r.a.cloneElement(s,e)}return!!o&&r.a.cloneElement(o,e)}(),se&&s.a.createPortal(Te,function(){var e=document.getElementById("popup-root");return null===e&&((e=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(e)),e}()))}));i.a=f},109:function(e,i,t){}}]);
//# sourceMappingURL=5.6afc2226.chunk.js.map