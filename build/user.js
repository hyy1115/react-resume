webpackJsonp([1],{393:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(3),l=o(c),f=n(147),p=o(f),s=[{title:"github",content:'我热爱开源：<a href="https://github.com/hyy1115" target="_blank">https://github.com/hyy1115</a>'},{title:"segmentfault",content:'我热爱写博客：<a href="https://segmentfault.com/u/hyy1115" target="_blank">https://segmentfault.com/u/hyy1115</a>'},{title:"知乎",content:'我热爱看各类有趣的话题：<a href="https://www.zhihu.com/people/er-yue-shi-xiong/activities" target="_blank">https://www.zhihu.com/people/er-yue-shi-xiong/activities</a>'}],h=function(t){function e(){return r(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.default.createElement("div",null,s.map(function(t,e){return l.default.createElement(p.default,{key:e,title:t.title,content:t.content})}))}}]),e}(l.default.Component);e.default=h}});
//# sourceMappingURL=user.js.map