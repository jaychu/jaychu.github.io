(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2172:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r={},i={},u="en",s={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["AM","PM"]},o={YYYY:function(e){return("000"+e.getFullYear()).slice(-4)},YY:function(e){return("0"+e.getFullYear()).slice(-2)},Y:function(e){return""+e.getFullYear()},MMMM:function(e){return this.res.MMMM[e.getMonth()]},MMM:function(e){return this.res.MMM[e.getMonth()]},MM:function(e){return("0"+(e.getMonth()+1)).slice(-2)},M:function(e){return""+(e.getMonth()+1)},DD:function(e){return("0"+e.getDate()).slice(-2)},D:function(e){return""+e.getDate()},HH:function(e){return("0"+e.getHours()).slice(-2)},H:function(e){return""+e.getHours()},A:function(e){return this.res.A[e.getHours()>11|0]},hh:function(e){return("0"+(e.getHours()%12||12)).slice(-2)},h:function(e){return""+(e.getHours()%12||12)},mm:function(e){return("0"+e.getMinutes()).slice(-2)},m:function(e){return""+e.getMinutes()},ss:function(e){return("0"+e.getSeconds()).slice(-2)},s:function(e){return""+e.getSeconds()},SSS:function(e){return("00"+e.getMilliseconds()).slice(-3)},SS:function(e){return("0"+(e.getMilliseconds()/10|0)).slice(-2)},S:function(e){return""+(e.getMilliseconds()/100|0)},dddd:function(e){return this.res.dddd[e.getDay()]},ddd:function(e){return this.res.ddd[e.getDay()]},dd:function(e){return this.res.dd[e.getDay()]},Z:function(e){var t=e.getTimezoneOffset()/.6|0;return(t>0?"-":"+")+("000"+Math.abs(t-(t%100*.4|0))).slice(-4)},post:function(e){return e},res:s},c={YYYY:function(e){return this.exec(/^\d{4}/,e)},Y:function(e){return this.exec(/^\d{1,4}/,e)},MMMM:function(e){var t=this.find(this.res.MMMM,e);return t.value++,t},MMM:function(e){var t=this.find(this.res.MMM,e);return t.value++,t},MM:function(e){return this.exec(/^\d\d/,e)},M:function(e){return this.exec(/^\d\d?/,e)},DD:function(e){return this.exec(/^\d\d/,e)},D:function(e){return this.exec(/^\d\d?/,e)},HH:function(e){return this.exec(/^\d\d/,e)},H:function(e){return this.exec(/^\d\d?/,e)},A:function(e){return this.find(this.res.A,e)},hh:function(e){return this.exec(/^\d\d/,e)},h:function(e){return this.exec(/^\d\d?/,e)},mm:function(e){return this.exec(/^\d\d/,e)},m:function(e){return this.exec(/^\d\d?/,e)},ss:function(e){return this.exec(/^\d\d/,e)},s:function(e){return this.exec(/^\d\d?/,e)},SSS:function(e){return this.exec(/^\d{1,3}/,e)},SS:function(e){var t=this.exec(/^\d\d?/,e);return t.value*=10,t},S:function(e){var t=this.exec(/^\d/,e);return t.value*=100,t},Z:function(e){var t=this.exec(/^[\+-]\d{2}[0-5]\d/,e);return t.value=-60*(t.value/100|0)-t.value%100,t},h12:function(e,t){return(12===e?0:e)+12*t},exec:function(e,t){var n=(e.exec(t)||[""])[0];return{value:0|n,length:n.length}},find:function(e,t){for(var n,r=-1,i=0,u=0,s=e.length;u<s;u++)n=e[u],!t.indexOf(n)&&n.length>i&&(r=u,i=n.length);return{value:r,length:i}},pre:function(e){return e},res:s},a=function(e,t,n,r){var i,u={};for(i in e)u[i]=e[i];for(i in t||{})!!n^!!u[i]||(u[i]=t[i]);return r&&(u.res=r),u},d={_formatter:o,_parser:c,compile:function(e){for(var t,n=/\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,r=[e];t=n.exec(e);)r[r.length]=t[0];return r},format:function(e,t,n){var r="string"===typeof t?this.compile(t):t,i=e.getTimezoneOffset(),u=this.addMinutes(e,n?i:0),s=this._formatter,o="";u.getTimezoneOffset=function(){return n?0:i};for(var c,a=1,d=r.length;a<d;a++)o+=s[c=r[a]]?s.post(s[c](u,r[0])):c.replace(/\[(.*)]/,"$1");return o},preparse:function(e,t){var n="string"===typeof t?this.compile(t):t,r={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,Z:0,_index:0,_length:0,_match:0},i=/\[(.*)]/,u=this._parser,s=0;e=u.pre(e);for(var o,c,a=1,d=n.length;a<d;a++)if(u[o=n[a]]){if(!(c=u[o](e.slice(s),n[0])).length)break;s+=c.length,r[c.token||o.charAt(0)]=c.value,r._match++}else if(o===e.charAt(s)||" "===o)s++;else{if(!i.test(o)||e.slice(s).indexOf(i.exec(o)[1])){if("..."===o){s=e.length;break}break}s+=o.length-2}return r.H=r.H||u.h12(r.h,r.A),r._index=s,r._length=e.length,r},parse:function(e,t,n){var r=this.preparse(e,t);return this.isValid(r)?(r.M-=r.Y<100?22801:1,n||r.Z?new Date(Date.UTC(r.Y,r.M,r.D,r.H,r.m+r.Z,r.s,r.S)):new Date(r.Y,r.M,r.D,r.H,r.m,r.s,r.S)):new Date(NaN)},isValid:function(e,t){var n="string"===typeof e?this.preparse(e,t):e,r=[31,28+this.isLeapYear(n.Y)|0,31,30,31,30,31,31,30,31,30,31][n.M-1];return!(n._index<1||n._length<1||n._index-n._length||n._match<1||n.Y<1||n.Y>9999||n.M<1||n.M>12||n.D<1||n.D>r||n.H<0||n.H>23||n.m<0||n.m>59||n.s<0||n.s>59||n.S<0||n.S>999||n.Z<-720||n.Z>840)},transform:function(e,t,n,r){return this.format(this.parse(e,t),n,r)},addYears:function(e,t){return this.addMonths(e,12*t)},addMonths:function(e,t){var n=new Date(e.getTime());return n.setMonth(n.getMonth()+t),n},addDays:function(e,t){var n=new Date(e.getTime());return n.setDate(n.getDate()+t),n},addHours:function(e,t){return this.addMinutes(e,60*t)},addMinutes:function(e,t){return this.addSeconds(e,60*t)},addSeconds:function(e,t){return this.addMilliseconds(e,1e3*t)},addMilliseconds:function(e,t){return new Date(e.getTime()+t)},subtract:function(e,t){var n=e.getTime()-t.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3},toMinutes:function(){return n/6e4},toHours:function(){return n/36e5},toDays:function(){return n/864e5}}},isLeapYear:function(e){return!(e%4)&&!!(e%100)||!(e%400)},isSameDay:function(e,t){return e.toDateString()===t.toDateString()},locale:function(e,t){r[e]||(r[e]=t)},plugin:function(e,t){i[e]||(i[e]=t)}},f=a(d),l=a(d);l.locale=function(e){var t="function"===typeof e?e:l.locale[e];if(!t)return u;u=t(d);var n=r[u]||{},h=a(s,n.res,!0),g=a(o,n.formatter,!0,h),M=a(c,n.parser,!0,h);for(var _ in l._formatter=f._formatter=g,l._parser=f._parser=M,i)l.extend(i[_]);return u},l.extend=function(e){var t=a(l._parser.res,e.res),n=e.extender||{};for(var r in l._formatter=a(l._formatter,e.formatter,!1,t),l._parser=a(l._parser,e.parser,!1,t),n)l[r]||(l[r]=n[r])},l.plugin=function(e){var t="function"===typeof e?e:l.plugin[e];t&&l.extend(i[t(d,f)]||{})}},2120:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return a}});var r=n(9008),i=n(2172),u=n(5729),s=n.n(u),o=n(5893),c=!0;function a(e){var t=e.blog,n=e.blogPosts;return(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(r.default,{children:(0,o.jsxs)("title",{children:["Justin Chu | Full Stack Web Developer | ",t.Title]})}),(0,o.jsx)("h1",{children:t.Title}),(0,o.jsx)("div",{className:s().blog,children:n.map((function(e,t){return(0,o.jsx)("div",{children:(0,o.jsxs)("a",{className:s().blogPost,href:"blog/"+e.Slug,children:[(0,o.jsx)("img",{src:"http://localhost:1337"+e.MainImage.url}),(0,o.jsx)("div",{className:s().blogPostImgBG,children:(0,o.jsxs)("div",{className:s().blogPostTitle,children:[(0,o.jsx)("h2",{children:e.Title}),(0,o.jsx)("span",{children:e.Subtitle}),(0,o.jsx)("span",{children:i.Z.format(new Date(e.updated_at),"MM/DD/YYYY").toString()})]})})]})},"blogpost_"+t)}))})]})}},677:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(2120)}])},5729:function(e){e.exports={blog:"blog_blog__2Z63y",blogPost:"blog_blogPost__39OP9",blogPostImgBG:"blog_blogPostImgBG__3EPYs",blogPostTitle:"blog_blogPostTitle__19bcc"}}},function(e){e.O(0,[774,888,179],(function(){return t=677,e(e.s=t);var t}));var t=e.O();_N_E=t}]);