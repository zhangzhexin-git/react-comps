!function e(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.BizComps=r(require("react")):t.BizComps=r(t.React)}(window,(function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./dist/",r(r.s=17)}([function(t,r){t.exports=e},function(e,t){function r(e){return e&&e.__esModule?e:{default:e}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(2).default;function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function e(o){return o?r:t})(e)}function i(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=u?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(i,a,l):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(){return e.exports=r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(11);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(2).default,n=r(21);function i(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(t){return t.__proto__||Object.getPrototypeOf(t)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(22);function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o,n;e.exports=r(23)()},function(e,t,r){var o=r(2).default,n=r(20);function i(e){var t=n(e,"string");return"symbol"===o(t)?t:String(t)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(26);function n(e,t){if(null==e)return{};var r=o(e,t),n,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)n=u[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o=r(11);function n(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var o,n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty,i="[native code]";function u(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var i=u.apply(null,o);i&&e.push(i)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)r.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):void 0===(n=function(){return u}.apply(t,o=[]))||(e.exports=n)}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=["16x16","20x20","24x24","30x30","36x36","40x40","48x48","50x50","60x30","60x60","60x90","70x70","70x1000","72x72","75x75","75x100","80x40","80x60","80x65","81x65","80x1000","88x88","90x45","90x60","90x90","90x135","96x54","100x50","100x75","100x100","100x150","100x1000","110x90","110x110","110x10000","115x100","120x0","120x60","120x97","120x90","120x160","121x75","125x125","128x128","130x130","135x240","140x70","140x100","140x140","140x10000","142x142","145x145","150x150","150x200","150x10000","157x280","160x0","160x80","160x90","160x130","160x180","160x240","165x5000","170x170","170x10000","170x120","180x90","180x180","180x230","190x43","190x190","196x196","200x0","200x100","200x200","200x162","210x140","210x210","210x1000","220x178","220x220","220x330","220x5000","220x10000","240x5000","230x87","230x230","230x10000","234x234","240x180","240x195","240x240","240x5000","240x10000","250x225","250x250","260x212","260x260","264x100","270x0","320x0","270x180","270x270","270x450","280x192","280x410","284x284","288x480","290x290","290x10000","292x292","294x430","300x1000","300x10000","310x310","312x312","300x300","315x315","320x260","320x320","320x480","320x5000","336x336","350x350","350x1000","354x354","360x234","360x360","360x10000","375x280","375x375","400x152","400x200","400x400","420x280","430x430","438x438","440x440","450x300","450x600","450x5000","450x10000","460x460","468x468","480x0","480x420","480x480","485x175","490x330","490x490","500x375","500x450","500x500","500x1000","540x540","560x370","560x560","560x840","568x568","570x570","570x10000","580x580","580x10000","600x600","600x800","620x10000","640x0","640x360","640x480","640x640","660x440","667x667","670x670","720x720","728x728","750x388","750x1000","760x760","790x420","790x10000","800x0","800x800","960x960","970x970","1080x0","1080x1800","1136x1136","1152x1920","1200x1200","1280x0","1280x960","1280x1280","2200x2200","10000x220","10000x340","10000x170","10000x500"];function n(e,t){var r=parseInt(window.devicePixelRatio,10)||1,n;return o.filter((function(o){var n=o.split("x"),i=parseInt(n[0],10),u=parseInt(n[1],10);return i>=e*r&&u>=t*r}))[0]||""}var i=function e(t){var r=t.width,o=t.height,i=t.quality,u=void 0===i?90:i;if(r=parseFloat(r),o=parseFloat(o),!r||!o)return"";var a=n(r,o);return a?"_".concat(a,"q").concat(u,".jpg"):""};t.default=i},function(e,t,r){"use strict";var o=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=o(r(19)).default;t.default=i},function(e,t,r){r(18),e.exports=r(28)},function(e,t,r){},function(e,t,r){"use strict";var o=r(3),n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(4)),u=n(r(5)),a=n(r(6)),l=n(r(7)),s=n(r(8)),f=n(r(9)),c=o(r(0)),p=n(r(10)),x=n(r(25)),d=n(r(27)),y=function(e){function t(e){var r;return(0,u.default)(this,t),(r=(0,l.default)(this,(0,s.default)(t).call(this,e))).handleImgLoadError=function(){r.props.errorImgSrc&&r.setState({src:r.props.errorImgSrc}),r.props.onError&&r.props.onError()},r.state={src:e.src},r}return(0,f.default)(t,e),(0,a.default)(t,[{key:"componentWillReceiveProps",value:function e(t){"src"in t&&this.setState({src:t.src})}},{key:"render",value:function e(){var t;return"contain"===this.props.type?c.default.createElement(d.default,(0,i.default)({},this.props,this.state,{onError:this.handleImgLoadError})):c.default.createElement(x.default,(0,i.default)({},this.props,this.state,{onError:this.handleImgLoadError}))}}]),t}(c.Component);t.default=y,y.displayName="Img",y.propTypes={type:p.default.oneOf(["cover","contain"]),src:p.default.string.isRequired,title:p.default.string,errorImgSrc:p.default.string,onError:p.default.func,width:p.default.number,height:p.default.number,alt:p.default.string,shape:p.default.string,enableAliCDNSuffix:p.default.bool},y.defaultProps={type:"cover",alt:"",title:"",errorImgSrc:"",className:"",shape:"sharp",enableAliCDNSuffix:!1}},function(e,t,r){var o=r(2).default;function n(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(t,r){return t.__proto__=r,t},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";var o=r(24);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,i,u){if(u!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},function(e,t,r){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o},function(e,t,r){"use strict";var o=r(3),n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(4)),u=n(r(12)),a=n(r(13)),l=n(r(5)),s=n(r(6)),f=n(r(7)),c=n(r(8)),p=n(r(9)),x=o(r(0)),d=n(r(10)),y=n(r(14)),b=n(r(15));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){function t(e){var r;return(0,l.default)(this,t),(r=(0,f.default)(this,(0,c.default)(t).call(this,e))).imgOnload=function(){r.setState({imgStyles:{display:"block",maxWidth:"none",wdith:"auto",height:"auto",opacity:0}},(function(){var e=r.refs.img,t=r.props,o=t.width,n=t.height,i=e.width,u=e.height,a=m(o,n,i,u);r.setState({imgStyles:v({},r.state.imgStyles,{},a,{opacity:1})})}))},r.state={imgStyles:{display:"block",maxWidth:"none",wdith:"auto",height:"auto",opacity:0}},r}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentWillReceiveProps",value:function e(t){t.width===this.props.width&&t.height===this.props.height||this.imgOnload()}},{key:"render",value:function e(){var t=this.props,r=t.alt,o=t.title,n=t.src,a=t.width,l=t.height,s=t.style,f=void 0===s?{}:s,c=t.className,p=t.onError,d=t.shape,h=t.enableAliCDNSuffix,g=t.errorImgSrc,m=t.type,O=(0,u.default)(t,["alt","title","src","width","height","style","className","onError","shape","enableAliCDNSuffix","errorImgSrc","type"]),j=v({},f,{display:"inline-block",overflow:"hidden",width:a,height:l}),_=this.state.imgStyles,w=h?n+(0,b.default)({width:a,height:l}):n,P=(0,y.default)("ice-img",d,c);return x.default.createElement("div",(0,i.default)({className:P,style:j},O),x.default.createElement("img",{style:_,onError:p,ref:"img",src:w,alt:r,title:o,onLoad:this.imgOnload}))}}]),t}(x.Component);t.default=g,g.displayName="Cover",g.propTypes={src:d.default.string.isRequired,width:d.default.number,height:d.default.number,alt:d.default.string,style:d.default.object,onError:d.default.func},g.defaultProps={onError:function e(){},alt:""};var m=function e(t,r,o,n){var i,u=o/n,a=0,l=0,s=0,f=0;return t/r>u?s=((l=(a=t)/u)-r)/2*-1:f=((a=(l=r)*u)-t)/2*-1,{height:l,width:a,marginLeft:f,marginTop:s}}},function(e,t){function r(e,t){if(null==e)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";var o=r(3),n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(4)),u=n(r(13)),a=n(r(12)),l=n(r(5)),s=n(r(6)),f=n(r(7)),c=n(r(8)),p=n(r(9)),x=o(r(0)),d=n(r(10)),y=n(r(14)),b=n(r(15));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){function t(){var e,r;(0,l.default)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(r=(0,f.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n)))).state={},r}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function e(){var t=this.props,r=t.alt,o=t.title,n=t.src,u=t.width,l=t.height,s=t.style,f=void 0===s?{}:s,c=t.className,p=t.onError,d=t.shape,h=t.enableAliCDNSuffix,g=t.errorImgSrc,m=t.type,O=(0,a.default)(t,["alt","title","src","width","height","style","className","onError","shape","enableAliCDNSuffix","errorImgSrc","type"]),j=v({},f,{display:"inline-block",width:u,height:l,overflow:"hidden"}),_={width:u,height:l,display:"table-cell",verticalAlign:"middle",textAlign:"center"},w={width:"auto",height:"auto",maxWidth:u,maxHeight:l},P=h?n+(0,b.default)({width:u,height:l}):n,S=(0,y.default)("ice-img",d,c);return x.default.createElement("div",(0,i.default)({className:S,style:j},O),x.default.createElement("div",{style:_},x.default.createElement("img",{style:w,onError:p,ref:"img",src:P,alt:r,title:o})))}}]),t}(x.Component);t.default=g,g.displayName="Contain",g.propTypes={src:d.default.string.isRequired,width:d.default.number,height:d.default.number,alt:d.default.string,onError:d.default.func,style:d.default.object,shape:d.default.string},g.defaultProps={onError:function e(){},alt:""}},function(e,t,r){"use strict";r.r(t),r.d(t,"GeneralImg",(function(){return h})),r.d(t,"bizCssPrefix",(function(){return v}));var o=r(0),n=r(16),i=r.n(n);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=["src","style"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=p(e,"string");return"symbol"===u(t)?t:String(t)}function p(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function x(e,t){if(null==e)return{};var r=d(e,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function d(e,t){if(null==e)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var y,b,h=function e(t){var r=t.src,n=void 0===r?"":r,u=t.style,l=void 0===u?{}:u,f,c=x(t,a)||{};return c.src=n,c.style=l,console.log("\ud83d\ude80 ~ file: general-img.tsx:18 ~ _otherProps",c),Object(o.createElement)(i.a,s({},c))},v="bizpack"}])}));
//# sourceMappingURL=BizComps.js.map