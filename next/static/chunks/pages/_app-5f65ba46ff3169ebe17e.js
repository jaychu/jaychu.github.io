(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,j=e.replace,g=e.shallow,v=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,b=s.useIntersection({rootMargin:"200px"}),w=r(b,2),y=w[0],_=w[1],O=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);a.default.useEffect((function(){var e=_&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,d,h,{locale:t})}),[h,d,_,m,n,o]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,o,d,h,j,g,v,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof m?m:o&&o.locale,N=o&&o.isLocaleDomain&&i.getDomainLocale(h,M,o&&o.locales,o&&o.domainLocales);k.href=N||i.addBasePath(i.addLocale(h,M,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},7968:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(2809),o=n(9008),a=n(1664),i=n(1191),c=n.n(i),s=n(5893);function l(){return(0,s.jsx)("nav",{className:c().navigation,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/about",children:"About"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/portfolio",children:"Portfolio"})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"/blog",children:"Blog"})})]})})}var u=n(1425),f=n.n(u);function d(){return(0,s.jsxs)("footer",{className:f().footer,children:[(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"https://github.com/jaychu",children:(0,s.jsx)("a",{className:"socialMediaButton",target:"_blank",children:(0,s.jsx)("i",{className:"icon-github"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"https://twitter.com/jayxchu",children:(0,s.jsx)("a",{className:"socialMediaButton",target:"_blank",children:(0,s.jsx)("i",{className:"icon-twitter"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"https://www.linkedin.com/in/justin-chu-4b230747",children:(0,s.jsx)("a",{className:"socialMediaButton",target:"_blank",children:(0,s.jsx)("i",{className:"icon-linkedin"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(a.default,{href:"https://www.instagram.com/justinxchu/",children:(0,s.jsx)("a",{className:"socialMediaButton",target:"_blank",children:(0,s.jsx)("i",{className:"icon-instagram"})})})})]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"This website was created with Strapi & NextJS hosted on Github Pages"})})]})}function h(e){var t=e.children;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.default,{children:[(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,s.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway:ital,wght@0,100;0,400;1,600&display=swap",rel:"stylesheet"}),(0,s.jsx)("meta",{name:"google-site-verification",content:"GvG19kjMdMHfaYVDoD-sFlrGhbNBDfGU8e4XqhG8Yv8"}),(0,s.jsx)("meta",{name:"robots",content:"index,follow"}),(0,s.jsx)("meta",{name:"province",content:"ON"}),(0,s.jsx)("meta",{name:"language",content:"en"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:type",content:"blog"}),(0,s.jsx)("meta",{property:"og:image",content:"/jaychu.github.io//uploads/medium_background_b32452d4af.jpg"}),(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-0TL56Q7J3Q"}),(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-0TL56Q7J3Q', {\n              page_path: window.location.pathname,\n            });\n          "}})]}),(0,s.jsx)(l,{}),(0,s.jsx)("main",{children:t}),(0,s.jsx)(d,{})]})}n(3146);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.Component,n=e.pageProps;return(0,s.jsx)(h,{children:(0,s.jsx)(t,j({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7968)}])},1425:function(e){e.exports={footer:"footer_footer__2I8Xl"}},1191:function(e){e.exports={navigation:"nav_navigation__3dBEB"}},3146:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);