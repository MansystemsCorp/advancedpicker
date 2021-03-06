require({
	packages: [{
		name: "jquery110",
		location: "../../widgets/jQueryLib", main: "jquery-110-min" 
	}]
},

["jquery110"], function(jQuery110) {

(function(b){function m(a,c){function n(a){return b.isArray(f.readonly)?(a=b(".dwwl",r).index(a),f.readonly[a]):f.readonly}function o(a){var b="",c=f.height,o;for(o in M[a])b+='<li class="dw-v" data-val="'+o+'" style="height:'+c+"px;line-height:"+c+'px;">'+M[a][o]+"</li>";return b}function y(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,a.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight)}function m(a){h=b("li.dw-v",a).eq(0).index();d=b("li.dw-v",a).eq(-1).index();
x=b("ul",r).index(a);e=f.height;l=g}function u(a){var b=f.headerText;return b?"function"==typeof b?b.call(C,a):b.replace(/{value}/i,a):""}function P(){g.temp=J&&null!==g.val&&g.val!=a.val()||null===g.values?f.parseValue(a.val()?a.val():"",g):g.values.slice(0);g.setValue(!0)}function E(a,c,o,d,y){f.validate.call(C,r,o,a);b(".dww ul",r).each(function(f){var d=b(this),e=b('li[data-val="'+g.temp[f]+'"]',d),d=e.index();if(!e.hasClass("dw-v")){for(var j=e,h=0,k=0;j.prev().length&&!j.hasClass("dw-v");)j=
j.prev(),h++;for(;e.next().length&&!e.hasClass("dw-v");)e=e.next(),k++;(k<h&&k&&1==!y||!h||!j.hasClass("dw-v")||1==y)&&e.hasClass("dw-v")?d+=k:(e=j,d-=h);g.temp[f]=e.attr("data-val")}e=f==o||void 0===o;g.scroll(b(this),d,e?a:0.2,c,f)});g.change(d)}function D(){function c(){b(".dwc",r).each(function(){"none"!=b(this).css("display")&&(k=b(this).outerWidth(!0),d+=k,o=k>o?k:o)});k=d>e?o:d;k=b(".dwwr",r).width(k+1).outerWidth();l=h.outerHeight()}if("inline"!=f.display){var d=0,o=0,e=b(window).width(),
g=window.innerHeight,j=b(window).scrollTop(),h=b(".dw",r),k,i,n,l,p,t={},z,s=void 0===f.anchor?a:f.anchor,g=g?g:b(window).height();if("modal"==f.display)c(),n=(e-k)/2,i=j+(g-l)/2;else if("bubble"==f.display){c();var m=s.offset(),w=b(".dw-arr",r),q=b(".dw-arrw-i",r),u=h.outerWidth();p=s.outerWidth();n=m.left-(h.outerWidth(!0)-p)/2;n=n>e-u?e-(u+20):n;n=0<=n?n:20;i=m.top-(h.outerHeight()+3);i<j||m.top>j+g?(h.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"),i=m.top+s.outerHeight()+3,z=i+h.outerHeight(!0)>
j+g||m.top>j+g):h.removeClass("dw-bubble-bottom").addClass("dw-bubble-top");i=i>=j?i:j;j=m.left+p/2-(n+(u-q.outerWidth())/2);j>q.outerWidth()&&(j=q.outerWidth());w.css({left:j})}else t.width="100%","top"==f.display?i=j:"bottom"==f.display&&(i=j+g-h.outerHeight(),i=0<=i?i:0);t.top=i;t.left=n;h.css(t);b(".dwo, .dw-persp").height(0).height(y());z&&b(window).scrollTop(i+h.outerHeight(!0)-g)}}function T(a){var b=+a.data("pos")+1;t(a,b>d?h:b,1)}function U(a){var b=+a.data("pos")-1;t(a,b<h?d:b,2)}var g=
this,C=a,a=b(C),O,Q,f=b.extend({},G),R,r,M=[],N={},J=a.is("input"),K=!1;g.enable=function(){f.disabled=!1;J&&a.prop("disabled",!1)};g.disable=function(){f.disabled=!0;J&&a.prop("disabled",!0)};g.scroll=function(a,b,c,d,o){var e=(R-b)*f.height;a.attr("style",(c?I+"-transition:all "+c.toFixed(1)+"s ease-out;":"")+(L?I+"-transform:translate3d(0,"+e+"px,0);":"top:"+e+"px;"));clearInterval(N[o]);if(c&&void 0!==d){var g=0;N[o]=setInterval(function(){g+=0.1;a.data("pos",Math.round((b-d)*Math.sin(g/c*(Math.PI/
2))+d));g>=c&&(clearInterval(N[o]),a.data("pos",b).closest(".dwwl").removeClass("dwa"))},100)}else a.data("pos",b)};g.setValue=function(b,c,d,o){o||(g.values=g.temp.slice(0));K&&b&&E(d);c&&(b=f.formatResult(g.temp),g.val=b,J&&a.val(b).trigger("change"))};g.validate=function(a,b,c,d){E(a,b,c,!0,d)};g.change=function(a){var c=f.formatResult(g.temp);"inline"==f.display?g.setValue(!1,a):b(".dwv",r).html(u(c));a&&f.onChange.call(C,c,g)};g.hide=function(c){if(!1===f.onClose.call(C,g.val,g))return!1;b(".dwtd").prop("disabled",
!1).removeClass("dwtd");a.blur();r&&("inline"!=f.display&&f.animate&&!c?(b(".dw",r).addClass("dw-"+f.animate+" dw-out"),setTimeout(function(){r.remove();r=null},350)):(r.remove(),r=null),K=!1,b(window).unbind(".dw"))};g.changeWheel=function(){if(r){var a=0,c=arguments.length,d;for(d in f.wheels)for(var e in f.wheels[d]){if(-1<b.inArray(a,arguments)&&(M[a]=f.wheels[d][e],b("ul",r).eq(a).html(o(a)),!--c)){D();E();return}a++}}};g.show=function(c){if(f.disabled||K)return!1;"top"==f.display&&(f.animate=
"slidedown");"bottom"==f.display&&(f.animate="slideup");P();f.onBeforeShow.call(C,r,g);var d=0,e=f.height,y="",h="",k="";f.animate&&!c&&(h='<div class="dw-persp">',k="</div>",y="dw-"+f.animate+" dw-in");c='<div class="'+f.theme+" dw-"+f.display+'">'+("inline"==f.display?'<div class="dw dwbg dwi"><div class="dwwr">':h+'<div class="dwo"></div><div class="dw dwbg '+y+'"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr">'+(f.headerText?'<div class="dwv"></div>':
""));for(y=0;y<f.wheels.length;y++){var c=c+('<div class="dwc'+("scroller"!=f.mode?" dwpm":" dwsc")+(f.showLabel?"":" dwhl")+'"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>'),l;for(l in f.wheels[y])M[d]=f.wheels[y][l],c+='<td><div class="dwwl dwrc dwwl'+d+'">'+("scroller"!=f.mode?'<div class="dwwb dwwbp" style="height:'+e+"px;line-height:"+e+'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:'+e+"px;line-height:"+e+'px;"><span>&ndash;</span></div>':"")+'<div class="dwl">'+
l+'</div><div class="dww dwrc" style="height:'+f.rows*e+"px;min-width:"+f.width+'px;"><ul>',c+=o(d),c+='</ul><div class="dwwo"></div></div><div class="dwwol"></div></div></td>',d++;c+="</tr></table></div></div>"}c+=("inline"!=f.display?'<div class="dwbc'+(f.button3?" dwbc-p":"")+'"><span class="dwbw dwb-s"><span class="dwb">'+f.setText+"</span></span>"+(f.button3?'<span class="dwbw dwb-n"><span class="dwb">'+f.button3Text+"</span></span>":"")+'<span class="dwbw dwb-c"><span class="dwb">'+f.cancelText+
"</span></span></div>"+k:'<div class="dwcc"></div>')+"</div></div></div>";r=b(c);E();"inline"!=f.display?r.appendTo("body"):a.is("div")?a.html(r):r.insertAfter(a);K=!0;"inline"!=f.display&&(b(".dwb-s span",r).click(function(){g.hide();g.setValue(false,true);f.onSelect.call(C,g.val,g);return false}),b(".dwb-c span",r).click(function(){g.hide();f.onCancel.call(C,g.val,g);return false}),f.button3&&b(".dwb-n span",r).click(f.button3),f.scrollLock&&r.bind("touchmove",function(a){a.preventDefault()}),b("input,select").each(function(){b(this).prop("disabled")||
b(this).addClass("dwtd")}),b("input,select").prop("disabled",!0),D(),b(window).bind("resize.dw",D));r.delegate(".dwwl","DOMMouseScroll mousewheel",function(a){if(!n(this)){a.preventDefault();var a=a.originalEvent,a=a.wheelDelta?a.wheelDelta/120:a.detail?-a.detail/3:0,c=b("ul",this),d=+c.data("pos"),d=Math.round(d-a);m(c);t(c,d,a<0?1:2)}}).delegate(".dwb, .dwwb",H,function(){b(this).addClass("dwb-a")}).delegate(".dwwb",H,function(a){var c=b(this).closest(".dwwl");if(!n(c)&&!c.hasClass("dwa")){a.preventDefault();
a.stopPropagation();var d=c.find("ul"),o=b(this).hasClass("dwwbp")?T:U;s=true;m(d);clearInterval(i);i=setInterval(function(){o(d)},f.delay);o(d)}}).delegate(".dwwl",H,function(a){a.preventDefault();if(!n(this)&&!s&&f.mode!="clickpick"){j=true;w=b("ul",this);w.closest(".dwwl").addClass("dwa");z=+w.data("pos");m(w);clearInterval(N[x]);B=p(a);A=new Date;v=B;g.scroll(w,z)}});f.onShow.call(C,r,g);O.init(r,g)};g.init=function(d){O=b.extend({defaults:{},init:q},b.scroller.themes[d.theme?d.theme:f.theme]);
Q=b.scroller.i18n[d.lang?d.lang:f.lang];b.extend(f,O.defaults,Q,c,d);g.settings=f;R=Math.floor(f.rows/2);var o=b.scroller.presets[f.preset];a.unbind(".dw");o&&(o=o.call(C,g),b.extend(f,o,c,d),b.extend(F,o.methods));void 0!==a.data("dwro")&&(C.readOnly=k(a.data("dwro")));K&&g.hide();"inline"==f.display?g.show():(P(),J&&f.showOnFocus&&(a.data("dwro",C.readOnly),C.readOnly=!0,a.bind("focus.dw",function(){g.show()})))};g.values=null;g.val=null;g.temp=null;g.init(c)}function D(a){for(var b in a)if(void 0!==
E[a[b]])return!0;return!1}function p(a){return a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches?a.originalEvent?a.originalEvent.changedTouches[0].pageY:a.changedTouches[0].pageY:a.pageY}function k(a){return!0===a||"true"==a}function t(a,c,e,o,y){c=c>d?d:c;c=c<h?h:c;a=b("li",a).eq(c);l.temp[x]=a.attr("data-val");l.validate(o?c==y?0.1:Math.abs(0.1*(c-y)):0,y,x,e)}var n={},i,q=function(){},e,h,d,l,u=(new Date).getTime(),j,s,w,x,B,v,A,z,E=document.createElement("modernizr").style,L=D(["perspectiveProperty",
"WebkitPerspective","MozPerspective","OPerspective","msPerspective"])&&"webkitPerspective"in document.documentElement.style,I=function(){var a=["Webkit","Moz","O","ms"],b;for(b in a)if(D([a[b]+"Transform"]))return"-"+a[b].toLowerCase();return""}(),H="touchstart mousedown",G={width:70,height:40,rows:3,delay:300,disabled:!1,readonly:!1,showOnFocus:!0,showLabel:!0,wheels:[],theme:"",headerText:"{value}",display:"modal",mode:"scroller",preset:"",lang:"en-US",setText:"Set",cancelText:"Cancel",scrollLock:!0,
onBeforeShow:q,onShow:q,onClose:q,onSelect:q,onCancel:q,onChange:q,formatResult:function(a){for(var b="",d=0;d<a.length;d++)b+=(0<d?" ":"")+a[d];return b},parseValue:function(a,b){for(var d=b.settings.wheels,a=a.split(" "),o=[],e=0,j=0;j<d.length;j++)for(var h in d[j]){if(void 0!==d[j][h][a[e]])o.push(a[e]);else for(var k in d[j][h]){o.push(k);break}e++}return o},validate:q},F={init:function(a){void 0===a&&(a={});return this.each(function(){this.id||(u+=1,this.id="scoller"+u);n[this.id]=new m(this,
a)})},enable:function(){return this.each(function(){var a=n[this.id];a&&a.enable()})},disable:function(){return this.each(function(){var a=n[this.id];a&&a.disable()})},isDisabled:function(){var a=n[this[0].id];if(a)return a.settings.disabled},option:function(a,b){return this.each(function(){var d=n[this.id];if(d){var o={};"object"===typeof a?o=a:o[a]=b;d.init(o)}})},setValue:function(a,b,d,o){return this.each(function(){var e=n[this.id];e&&(e.temp=a,e.setValue(!0,b,d,o))})},getInst:function(){return n[this[0].id]},
getValue:function(){var a=n[this[0].id];if(a)return a.values},show:function(){var a=n[this[0].id];if(a)return a.show()},hide:function(){return this.each(function(){var a=n[this.id];a&&a.hide()})},destroy:function(){return this.each(function(){var a=n[this.id];a&&(a.hide(),b(this).unbind(".dw"),delete n[this.id],b(this).is("input")&&(this.readOnly=k(b(this).data("dwro"))))})}};b(document).bind("touchmove mousemove",function(a){j&&(a.preventDefault(),v=p(a),a=z+(B-v)/e,a=a>d+1?d+1:a,a=a<h-1?h-1:a,l.scroll(w,
a))});b(document).bind("touchend mouseup",function(a){if(j){a.preventDefault();var c=new Date-A,a=z+(B-v)/e,a=a>d+1?d+1:a,a=a<h-1?h-1:a;300>c?(c=(v-B)/c,c=c*c/0.0012,0>v-B&&(c=-c)):c=v-B;t(w,Math.round(z-c/e),0,!0,Math.round(a));j=!1;w=null}s&&(clearInterval(i),s=!1);b(".dwb-a").removeClass("dwb-a")});b.fn.scroller=function(a){if(F[a])return F[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return F.init.apply(this,arguments);b.error("Unknown method")};b.scroller=
{setDefaults:function(a){b.extend(G,a)},presets:{},themes:{},i18n:{}}})(jQuery110);(function(b){var m=new Date,D={dateFormat:"mm/dd/yy",dateOrder:"mmddy",timeWheels:"hhiiA",timeFormat:"hh:ii A",startYear:m.getFullYear()-100,endYear:m.getFullYear()+1,monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),shortYearCutoff:"+10",
monthText:"Month",dayText:"Day",yearText:"Year",hourText:"Hours",minuteText:"Minutes",secText:"Seconds",ampmText:"&nbsp;",nowText:"Now",showNow:!1,stepHour:1,stepMinute:1,stepSecond:1,separator:" "},m=function(p){function k(a,b,d){return void 0!==j[b]?+a[j[b]]:void 0!==d?d:E[s[b]]?E[s[b]]():s[b](E)}function m(a,b){return Math.floor(a/b)*b}function n(a){var b=k(a,"h",0);return new Date(k(a,"y"),k(a,"m"),k(a,"d",1),k(a,"ap")?b+12:b,k(a,"i",0),k(a,"s",0))}var i=b(this),q={},e;if(i.is("input")){switch(i.attr("type")){case "date":e=
"yy-mm-dd";break;case "datetime":e="yy-mm-ddTHH:ii:ssZ";break;case "datetime-local":e="yy-mm-ddTHH:ii:ss";break;case "month":e="yy-mm";q.dateOrder="mmyy";break;case "time":e="HH:ii:ss"}var h=i.attr("min"),i=i.attr("max");h&&(q.minDate=b.scroller.parseDate(e,h));i&&(q.maxDate=b.scroller.parseDate(e,i))}var d=b.extend({},D,q,p.settings),l=0,q=[],u=[],j={},s={y:"getFullYear",m:"getMonth",d:"getDate",h:function(a){a=a.getHours();a=A&&12<=a?a-12:a;return m(a,L)},i:function(a){return m(a.getMinutes(),I)},
s:function(a){return m(a.getSeconds(),H)},ap:function(a){return v&&11<a.getHours()?1:0}},i=d.preset,w=d.dateOrder,x=d.timeWheels,B=w.match(/D/),v=x.match(/a/i),A=x.match(/h/),z="datetime"==i?d.dateFormat+d.separator+d.timeFormat:"time"==i?d.timeFormat:d.dateFormat,E=new Date,L=d.stepHour,I=d.stepMinute,H=d.stepSecond,G=d.minDate?d.minDate:new Date(d.startYear,0,1),F=d.maxDate?d.maxDate:new Date(d.endYear,11,31,23,59,59);e=e?e:z;if(i.match(/date/i)){b.each(["y","m","d"],function(a,b){a=w.search(RegExp(b,
"i"));-1<a&&u.push({o:a,v:b})});u.sort(function(a,b){return a.o>b.o?1:-1});b.each(u,function(a,b){j[b.v]=a});for(var h={},a=0;3>a;a++)if(a==j.y){l++;h[d.yearText]={};for(var c=G.getFullYear(),S=F.getFullYear();c<=S;c++)h[d.yearText][c]=w.match(/yy/i)?c:(c+"").substr(2,2)}else if(a==j.m){l++;h[d.monthText]={};for(c=0;12>c;c++)h[d.monthText][c]=w.match(/MM/)?d.monthNames[c]:w.match(/M/)?d.monthNamesShort[c]:w.match(/mm/)&&9>c?"0"+(c+1):c+1}else if(a==j.d){l++;h[d.dayText]={};for(c=1;32>c;c++)h[d.dayText][c]=
w.match(/dd/i)&&10>c?"0"+c:c}q.push(h)}if(i.match(/time/i)){u=[];b.each(["h","i","s"],function(a,b){a=x.search(RegExp(b,"i"));-1<a&&u.push({o:a,v:b})});u.sort(function(a,b){return a.o>b.o?1:-1});b.each(u,function(a,b){j[b.v]=l+a});h={};for(a=l;a<l+3;a++)if(a==j.h){l++;h[d.hourText]={};for(c=0;c<(A?12:24);c+=L)h[d.hourText][c]=A&&0==c?12:x.match(/hh/i)&&10>c?"0"+c:c}else if(a==j.i){l++;h[d.minuteText]={};for(c=0;60>c;c+=I)h[d.minuteText][c]=x.match(/ii/)&&10>c?"0"+c:c}else if(a==j.s){l++;h[d.secText]=
{};for(c=0;60>c;c+=H)h[d.secText][c]=x.match(/ss/)&&10>c?"0"+c:c}v&&(j.ap=l++,i=x.match(/A/),h[d.ampmText]={"0":i?"AM":"am",1:i?"PM":"pm"});q.push(h)}p.setDate=function(a,b,d,c){for(var e in j)this.temp[j[e]]=a[s[e]]?a[s[e]]():s[e](a);this.setValue(!0,b,d,c)};p.getDate=function(a){return n(a)};return{button3Text:d.showNow?d.nowText:void 0,button3:d.showNow?function(){p.setDate(new Date,!1,0.3,!0)}:void 0,wheels:q,headerText:function(){return b.scroller.formatDate(z,n(p.temp),d)},formatResult:function(a){return b.scroller.formatDate(e,
n(a),d)},parseValue:function(a){var c=new Date,h=[];try{c=b.scroller.parseDate(e,a,d)}catch(k){}for(var i in j)h[j[i]]=c[s[i]]?c[s[i]]():s[i](c);return h},validate:function(a){var c=p.temp,e={y:G.getFullYear(),m:0,d:1,h:0,i:0,s:0,ap:0},h={y:F.getFullYear(),m:11,d:31,h:m(A?11:23,L),i:m(59,I),s:m(59,H),ap:1},i=!0,n=!0;b.each("y,m,d,ap,h,i,s".split(","),function(m,l){if(j[l]!==void 0){var p=e[l],g=h[l],z=31,q=k(c,l),t=b("ul",a).eq(j[l]),f,u;if(l=="d"){f=k(c,"y");u=k(c,"m");g=z=32-(new Date(f,u,32)).getDate();
B&&b("li",t).each(function(){var a=b(this),c=a.data("val"),e=(new Date(f,u,c)).getDay(),c=w.replace(/[my]/gi,"").replace(/dd/,c<10?"0"+c:c).replace(/d/,c);a.html(c.match(/DD/)?c.replace(/DD/,d.dayNames[e]):c.replace(/D/,d.dayNamesShort[e]))})}i&&G&&(p=G[s[l]]?G[s[l]]():s[l](G));n&&F&&(g=F[s[l]]?F[s[l]]():s[l](F));if(l!="y"){var r=b('li[data-val="'+p+'"]',t).index(),x=b('li[data-val="'+g+'"]',t).index();b("li",t).removeClass("dw-v").slice(r,x+1).addClass("dw-v");l=="d"&&b("li",t).removeClass("dw-h").slice(z).addClass("dw-h")}q<
p&&(q=p);q>g&&(q=g);i&&(i=q==p);n&&(n=q==g);if(d.invalid&&l=="d"){var v=[];d.invalid.dates&&b.each(d.invalid.dates,function(a,b){b.getFullYear()==f&&b.getMonth()==u&&v.push(b.getDate()-1)});if(d.invalid.daysOfWeek){var E=(new Date(f,u,1)).getDay();b.each(d.invalid.daysOfWeek,function(a,b){for(var c=b-E;c<z;c=c+7)c>=0&&v.push(c)})}d.invalid.daysOfMonth&&b.each(d.invalid.daysOfMonth,function(a,b){b=(b+"").split("/");b[1]?b[0]-1==u&&v.push(b[1]-1):v.push(b[0]-1)});b.each(v,function(a,c){b("li",t).eq(c).removeClass("dw-v")})}c[j[l]]=
q}})},methods:{getDate:function(a){var c=b(this).scroller("getInst");if(c)return c.getDate(a?c.temp:c.values)},setDate:function(a,c,d,e){void 0==c&&(c=!1);return this.each(function(){var j=b(this).scroller("getInst");j&&j.setDate(a,c,d,e)})}}}};b.scroller.presets.date=m;b.scroller.presets.datetime=m;b.scroller.presets.time=m;b.scroller.formatDate=function(p,k,m){if(!k)return null;for(var m=b.extend({},D,m),n=function(b){for(var e=0;d+1<p.length&&p.charAt(d+1)==b;)e++,d++;return e},i=function(b,d,
e){d=""+d;if(n(b))for(;d.length<e;)d="0"+d;return d},q=function(b,d,e,h){return n(b)?h[d]:e[d]},e="",h=!1,d=0;d<p.length;d++)if(h)"'"==p.charAt(d)&&!n("'")?h=!1:e+=p.charAt(d);else switch(p.charAt(d)){case "d":e+=i("d",k.getDate(),2);break;case "D":e+=q("D",k.getDay(),m.dayNamesShort,m.dayNames);break;case "o":e+=i("o",(k.getTime()-(new Date(k.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":e+=i("m",k.getMonth()+1,2);break;case "M":e+=q("M",k.getMonth(),m.monthNamesShort,m.monthNames);break;
case "y":e+=n("y")?k.getFullYear():(10>k.getYear()%100?"0":"")+k.getYear()%100;break;case "h":var l=k.getHours(),e=e+i("h",12<l?l-12:0==l?12:l,2);break;case "H":e+=i("H",k.getHours(),2);break;case "i":e+=i("i",k.getMinutes(),2);break;case "s":e+=i("s",k.getSeconds(),2);break;case "a":e+=11<k.getHours()?"pm":"am";break;case "A":e+=11<k.getHours()?"PM":"AM";break;case "'":n("'")?e+="'":h=!0;break;default:e+=p.charAt(d)}return e};b.scroller.parseDate=function(m,k,t){var n=new Date;if(!m||!k)return n;
for(var k="object"==typeof k?k.toString():k+"",i=b.extend({},D,t),q=i.shortYearCutoff,t=n.getFullYear(),e=n.getMonth()+1,h=n.getDate(),d=-1,l=n.getHours(),n=n.getMinutes(),u=0,j=-1,s=!1,w=function(b){(b=A+1<m.length&&m.charAt(A+1)==b)&&A++;return b},x=function(b){w(b);b=k.substr(v).match(RegExp("^\\d{1,"+("@"==b?14:"!"==b?20:"y"==b?4:"o"==b?3:2)+"}"));if(!b)return 0;v+=b[0].length;return parseInt(b[0],10)},B=function(b,d,e){b=w(b)?e:d;for(d=0;d<b.length;d++)if(k.substr(v,b[d].length).toLowerCase()==
b[d].toLowerCase())return v+=b[d].length,d+1;return 0},v=0,A=0;A<m.length;A++)if(s)"'"==m.charAt(A)&&!w("'")?s=!1:v++;else switch(m.charAt(A)){case "d":h=x("d");break;case "D":B("D",i.dayNamesShort,i.dayNames);break;case "o":d=x("o");break;case "m":e=x("m");break;case "M":e=B("M",i.monthNamesShort,i.monthNames);break;case "y":t=x("y");break;case "H":l=x("H");break;case "h":l=x("h");break;case "i":n=x("i");break;case "s":u=x("s");break;case "a":j=B("a",["am","pm"],["am","pm"])-1;break;case "A":j=B("A",
["am","pm"],["am","pm"])-1;break;case "'":w("'")?v++:s=!0;break;default:v++}100>t&&(t+=(new Date).getFullYear()-(new Date).getFullYear()%100+(t<=("string"!=typeof q?q:(new Date).getFullYear()%100+parseInt(q,10))?0:-100));if(-1<d){e=1;h=d;do{i=32-(new Date(t,e-1,32)).getDate();if(h<=i)break;e++;h-=i}while(1)}l=new Date(t,e-1,h,-1==j?l:j&&12>l?l+12:!j&&12==l?0:l,n,u);if(l.getFullYear()!=t||l.getMonth()+1!=e||l.getDate()!=h)throw"Invalid date";return l}})(jQuery110);(function(b){b.scroller.themes.jqm={defaults:{jqmBody:"c",jqmHeader:"b",jqmWheel:"d",jqmClickPick:"c",jqmSet:"b",jqmCancel:"c"},init:function(m,D){var p=D.settings;b(".dw",m).removeClass("dwbg").addClass("ui-overlay-shadow ui-corner-all ui-body-a");b(".dwb-s span",m).attr("data-role","button").attr("data-theme",p.jqmSet);b(".dwb-n span",m).attr("data-role","button").attr("data-theme",p.jqmCancel);b(".dwb-c span",m).attr("data-role","button").attr("data-theme",p.jqmCancel);b(".dwwb",m).attr("data-role",
"button").attr("data-theme",p.jqmClickPick);b(".dwv",m).addClass("ui-header ui-bar-"+p.jqmHeader);b(".dwwr",m).addClass("ui-body-"+p.jqmBody);b(".dwpm .dww",m).addClass("ui-body-"+p.jqmWheel);"inline"!=p.display&&b(".dw",m).addClass("pop in");m.trigger("create");b(".dwo",m).click(function(){D.hide()})}}})(jQuery110);(function(b){b.scroller.themes.ios={defaults:{dateOrder:"MMdyy",rows:5,height:30,width:55,headerText:!1,showLabel:!1}}})(jQuery110);(function(b){var m={defaults:{dateOrder:"Mddyy",mode:"mixed",rows:5,width:70,height:36,showLabel:!1}};b.scroller.themes["android-ics"]=m;b.scroller.themes["android-ics light"]=m})(jQuery110);(function(b){b.scroller.themes.android={defaults:{dateOrder:"Mddyy",mode:"clickpick",height:50}}})(jQuery110);


dojo.provide("advancedpicker.MobiScroll");
dojo.declare("advancedpicker.MobiScroll", mobile.widget._Widget, {
    dateAttr     : "",

    //
    // mobiscroll attributes
    //

    theme         : "",     // "default", "android", "sense-ui", "ios"
    mode          : "",     // "scroller", "clickpick"
    preset        : "",     // "time", "datetime"
    timeWheels    : "",
    setText       : "",
    cancelText    : "",
    showPreview   : true,
    timeFormat    : "",
    dateFormat    : "",
    dateOrder     : "",
    defaultDate   : "",
    onChangeMF    : "",
    startYear     : 1910,
    endYear       : 2050,
    editable      : false,
    emptyText     : "",
    
    display: "", // "modal", "inline", "bubble", "top", "bottom"

    _mxObject     : null,
    _inputNode    : null,
    _readNode     : null,
    _input        : null,

	_validationHandle: null,

    buildRendering : function() {
        logger.debug(this.id + ".buildRendering");

        if (this.theme == "senseui") {
            this.theme = "sense-ui";
        }

        this.startYear = parseInt(this.startYear, 10);
        this.endYear   = parseInt(this.endYear, 10);

        this.editable    = /true/.test(this.editable);
        this.showPreview = /true/.test(this.showPreview);

        var $ = mobile.dom.create;

        this.domNode = $("div", {
                "class" : "advancedpickerMobiScroll" 
            },
            this._inputNode = $("input", {
                type     : "text",
                value    : "",
                class    : "form-control"
            })
        );

        this._readNode = $("label", {
            type     : "text",
            disabled : true
        }, "");

        var getNames = dojo.date.locale.getNames;

        this._input = jQuery110(this._inputNode);

        this._input.scroller({
            mode            : this.mode,
            theme           : this.theme,
            preset          : this.preset,
            timeWheels      : this.timeWheels,
            timeFormat      : this.timeFormat,
            dateFormat      : this.dateFormat,
            dateOrder       : this.dateOrder,
            startYear       : this.startYear,
            endYear         : this.endYear,
            disabled        : this.get("disabled"),
            headerText      : this.showPreview ? '{value}' : false,
            setText         : this.setText,
            cancelText      : this.cancelText,
            onShow          : dojo.hitch(this, "eventOnShow"),
            onSelect        : dojo.hitch(this, "eventOnSelect"),
            onCancel        : dojo.hitch(this, "eventOnCancel"),
            dayNames        : getNames("days", "wide"),
            dayNamesShort   : getNames("days", "abbr"),
            monthNames      : getNames("months", "wide"),
            monthNamesShort : getNames("months", "abbr"),
            
            display: this.display
        });

        this.setupEventHandlers();

        jQuery110(".ui-loader").hide();
    },

    startup : function() {
        logger.debug(this.id + ".startup");
        
        this.set("disabled", this.readonly || !this.editable);
    },

    enable : function() {
        logger.debug(this.name + ".enable");

        this.domNode.replaceChild(this._inputNode, this._readNode);
        this._input.scroller("enable");
    },

    disable : function() {
        logger.debug(this.name + ".disable");

        this.domNode.replaceChild(this._readNode, this._inputNode);
        this._input.scroller("disable");
    },

    resume : function() {
        logger.debug(this.id + ".resume");

        this.refresh();
    },

    createUI : function() {
        logger.debug(this.id + ".createUI");

    },

    setupEventHandlers : function() {
        logger.debug(this.id + ".setupEventHandlers");

        this._input.bind("change", dojo.hitch(this, "eventInputChanged"));
        this._input.bind("focus", dojo.hitch( this, function() {
        	dojo.query( "#" + dojo.attr( this.domNode, "id" ) + " + .alert" ).forEach( dojo.destroy );
        }));
    },

    eventInputChanged : function() {
        logger.debug(this.id + ".eventInputChanged");

        if (this.onChangeMF) {
            mx.ui.action(this.onChangeMF, {
                context  : this.mxcontext,
                caller   : this.mxform
            });
        }
    },

    eventOnShow : function() {
        logger.debug(this.id + ".eventOnShow");

        if (this._mxObject) {
            var date    = parseInt(this._mxObject.get(this.dateAttr), 10),
                invalid = (typeof(date) != "number" || isNaN(date) || date === 0);

            if (invalid && this.defaultDate) {
                date = new Date(this.defaultDate);
                this._input.scroller("setDate", date, true);
            }
        }
    },

    eventOnCancel : function() {
        logger.debug(this.id + ".eventOnCancel");
        
        this.refresh();
    },

    eventOnSelect : function() {
        logger.debug(this.id + ".eventOnSelect");

        if (! this.get("disabled")) {
            this._mxObject.set(
                this.dateAttr,
                +this._input.scroller("getDate")
            );
        }
    },

    update : function(obj, callback) {
        logger.debug(this.id + ".update");

        this._mxObject = obj;

        this.set("disabled", obj ? false : true);

		this._validationHandle = mx.data.subscribe({
			
			guid: this._mxObject,
			val: true,
			
			
			callback: dojo.hitch( this, function( _validations_ ){
				
				_validations_.forEach( function( validation, index, array ){
							
					var message = validation.getErrorReason( this.dateAttr );
							
					if( message ){
						
						dojo.query( "#" + dojo.attr( this.domNode, "id" ) + " + .alert" ).forEach( dojo.destroy );
						dojo.place( "<div class='alert alert-danger'>" + message + "</div>", this.domNode, "after" );
						
						validation.removeAttribute( this.dateAttr );	
					}
					
				}, this );
				
			})			
			
		});

        this.refresh(callback);
    },

    refresh : function(callback) {
        logger.debug(this.id + ".refresh");

        if (this._mxObject) {
            var date = parseInt(this._mxObject.get(this.dateAttr), 10);

            if (typeof(date) == "number" && !isNaN(date) && date !== 0) {
                dojo.removeClass(this.domNode, "advancedpickerMobiScroll_unset");

                date = new Date(date);
                this._input.scroller("setDate", date, true);
                this._setCaption(this._inputNode.value);
            } else {
                dojo.addClass(this.domNode, "advancedpickerMobiScroll_unset");
                this._setCaption(this.emptyText);
            }
        } else {
            dojo.addClass(this.domNode, "advancedpickerMobiScroll_unset");
            this._setCaption(this.emptyText);
        }

        mendix.lang.nullExec(callback);
    },

    uninitialize : function() {
        logger.debug(this.id + ".uninitialize");

		this._validationHandle && mx.data.unsubscribe( this._validationHandle );

        this._input.scroller("destroy");
    },

    _setCaption : function(text) {
        this._inputNode.value = text;
        dojo.attr(this._inputNode, "placeholder", text);
        this._readNode.innerHTML = text ? mobile.dom.escapeString(text) : "&nbsp;";
    },

    _setDisabledAttr : function(value) {
        if (this.readonly || !this.editable ||
            !this._mxObject || this._mxObject.isReadonlyAttr(this.dateAttr)) {
            value = true; 
        }

        return this.inherited(arguments, [ value ]);
    }
});

});


