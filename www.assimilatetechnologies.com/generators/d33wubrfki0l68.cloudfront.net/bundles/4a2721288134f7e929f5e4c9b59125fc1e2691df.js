/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],(function(t){return e(function(){try{return t("moment")}catch(t){}}())})):(t=t||self).Chart=e(t.moment)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[e[i]]=i);var a=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var r in a)if(a.hasOwnProperty(r)){if(!("channels"in a[r]))throw new Error("missing channels property: "+r);if(!("labels"in a[r]))throw new Error("missing channel labels property: "+r);if(a[r].labels.length!==a[r].channels)throw new Error("channel and label counts mismatch: "+r);var o=a[r].channels,s=a[r].labels;delete a[r].channels,delete a[r].labels,Object.defineProperty(a[r],"channels",{value:o}),Object.defineProperty(a[r],"labels",{value:s})}a.rgb.hsl=function(t){var e,n,i=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(i,a,r),s=Math.max(i,a,r),l=s-o;return s===o?e=0:i===s?e=(a-r)/l:a===s?e=2+(r-i)/l:r===s&&(e=4+(i-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(o+s)/2,[e,100*(s===o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]},a.rgb.hsv=function(t){var e,n,i,a,r,o=t[0]/255,s=t[1]/255,l=t[2]/255,u=Math.max(o,s,l),d=u-Math.min(o,s,l),h=function(t){return(u-t)/6/d+.5};return 0===d?a=r=0:(r=d/u,e=h(o),n=h(s),i=h(l),o===u?a=i-n:s===u?a=1/3+e-i:l===u&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*r,100*u]},a.rgb.hwb=function(t){var e=t[0],n=t[1],i=t[2];return[a.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(n,i))),100*(i=1-1/255*Math.max(e,Math.max(n,i)))]},a.rgb.cmyk=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-i,1-a)))/(1-e)||0),100*((1-i-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},a.rgb.keyword=function(t){var i=n[t];if(i)return i;var a,r,o,s=1/0;for(var l in e)if(e.hasOwnProperty(l)){var u=e[l],d=(r=t,o=u,Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)+Math.pow(r[2]-o[2],2));d<s&&(s=d,a=l)}return a},a.keyword.rgb=function(t){return e[t]},a.rgb.xyz=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]},a.rgb.lab=function(t){var e=a.rgb.xyz(t),n=e[0],i=e[1],r=e[2];return i/=100,r/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},a.hsl.rgb=function(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0===s)return[r=255*l,r,r];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(i=o+1/3*-(u-1))<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a},a.hsl.hsv=function(t){var e=t[0],n=t[1]/100,i=t[2]/100,a=n,r=Math.max(i,.01);return n*=(i*=2)<=1?i:2-i,a*=r<=1?r:2-r,[e,100*(0===i?2*a/(r+a):2*n/(i+n)),100*((i+n)/2)]},a.hsv.rgb=function(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r));switch(i*=255,a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}},a.hsv.hsl=function(t){var e,n,i,a=t[0],r=t[1]/100,o=t[2]/100,s=Math.max(o,.01);return i=(2-r)*o,n=r*s,[a,100*(n=(n/=(e=(2-r)*s)<=1?e:2-e)||0),100*(i/=2)]},a.hwb.rgb=function(t){var e,n,i,a,r,o,s,l=t[0]/360,u=t[1]/100,d=t[2]/100,h=u+d;switch(h>1&&(u/=h,d/=h),i=6*l-(e=Math.floor(6*l)),0!=(1&e)&&(i=1-i),a=u+i*((n=1-d)-u),e){default:case 6:case 0:r=n,o=a,s=u;break;case 1:r=a,o=n,s=u;break;case 2:r=u,o=n,s=a;break;case 3:r=u,o=a,s=n;break;case 4:r=a,o=u,s=n;break;case 5:r=n,o=u,s=a}return[255*r,255*o,255*s]},a.cmyk.rgb=function(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},a.xyz.rgb=function(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return n=-.9689*a+1.8758*r+.0415*o,i=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1))]},a.xyz.lab=function(t){var e=t[0],n=t[1],i=t[2];return n/=100,i/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.lab.xyz=function(t){var e,n,i,a=t[0];e=t[1]/500+(n=(a+16)/116),i=n-t[2]/200;var r=Math.pow(n,3),o=Math.pow(e,3),s=Math.pow(i,3);return n=r>.008856?r:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,[e*=95.047,n*=100,i*=108.883]},a.lab.lch=function(t){var e,n=t[0],i=t[1],a=t[2];return(e=360*Math.atan2(a,i)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(i*i+a*a),e]},a.lch.lab=function(t){var e,n=t[0],i=t[1];return e=t[2]/360*2*Math.PI,[n,i*Math.cos(e),i*Math.sin(e)]},a.rgb.ansi16=function(t){var e=t[0],n=t[1],i=t[2],r=1 in arguments?arguments[1]:a.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var o=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===r&&(o+=60),o},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){var e=t[0],n=t[1],i=t[2];return e===n&&n===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},a.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},a.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var n;return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},a.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map((function(t){return t+t})).join(""));var i=parseInt(n,16);return[i>>16&255,i>>8&255,255&i]},a.rgb.hcg=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255,r=Math.max(Math.max(n,i),a),o=Math.min(Math.min(n,i),a),s=r-o;return e=s<=0?0:r===n?(i-a)/s%6:r===i?2+(a-n)/s:4+(n-i)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},a.hsl.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=1,a=0;return(i=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*i)/(1-i)),[t[0],100*i,100*a]},a.hsv.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=e*n,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.hcg.rgb=function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100;if(0===n)return[255*i,255*i,255*i];var a,r=[0,0,0],o=e%1*6,s=o%1,l=1-s;switch(Math.floor(o)){case 0:r[0]=1,r[1]=s,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=s;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=s,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return a=(1-n)*i,[255*(n*r[0]+a),255*(n*r[1]+a),255*(n*r[2]+a)]},a.hcg.hsv=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e),i=0;return n>0&&(i=e/n),[t[0],100*i,100*n]},a.hcg.hsl=function(t){var e=t[1]/100,n=t[2]/100*(1-e)+.5*e,i=0;return n>0&&n<.5?i=e/(2*n):n>=.5&&n<1&&(i=e/(2*(1-n))),[t[0],100*i,100*n]},a.hcg.hwb=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},a.hwb.hcg=function(t){var e=t[1]/100,n=1-t[2]/100,i=n-e,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=a.gray.hsv=function(t){return[0,0,t[0]]},a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}}));n.rgb,n.hsl,n.hsv,n.hwb,n.cmyk,n.xyz,n.lab,n.lch,n.hex,n.keyword,n.ansi16,n.ansi256,n.hcg,n.apple,n.gray;function i(t){var e=function(){for(var t={},e=Object.keys(n),i=e.length,a=0;a<i;a++)t[e[a]]={distance:-1,parent:null};return t}(),i=[t];for(e[t].distance=0;i.length;)for(var a=i.pop(),r=Object.keys(n[a]),o=r.length,s=0;s<o;s++){var l=r[s],u=e[l];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,i.unshift(l))}return e}function a(t,e){return function(n){return e(t(n))}}function r(t,e){for(var i=[e[t].parent,t],r=n[e[t].parent][t],o=e[t].parent;e[o].parent;)i.unshift(e[o].parent),r=a(n[e[o].parent][o],r),o=e[o].parent;return r.conversion=i,r}var o={};Object.keys(n).forEach((function(t){o[t]={},Object.defineProperty(o[t],"channels",{value:n[t].channels}),Object.defineProperty(o[t],"labels",{value:n[t].labels});var e=function(t){for(var e=i(t),n={},a=Object.keys(e),o=a.length,s=0;s<o;s++){var l=a[s];null!==e[l].parent&&(n[l]=r(l,e))}return n}(t);Object.keys(e).forEach((function(n){var i=e[n];o[t][n]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var n=t(e);if("object"==typeof n)for(var i=n.length,a=0;a<i;a++)n[a]=Math.round(n[a]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}(i),o[t][n].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}));var s=o,l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},u={getRgba:d,getHsla:h,getRgb:function(t){var e=d(t);return e&&e.slice(0,3)},getHsl:function(t){var e=h(t);return e&&e.slice(0,3)},getHwb:c,getAlpha:function(t){var e=d(t);if(e)return e[3];if(e=h(t))return e[3];if(e=c(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+v(t[0])+v(t[1])+v(t[2])+(e>=0&&e<1?v(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:f,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return g(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"},percentaString:g,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return p(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:p,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return b[t.slice(0,3)]}};function d(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(i){a=(i=i[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(i[r]+i[r],16);a&&(n=Math.round(parseInt(a+a,16)/255*100)/100)}else if(i=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=i[2],i=i[1];for(r=0;r<e.length;r++)e[r]=parseInt(i.slice(2*r,2*r+2),16);a&&(n=Math.round(parseInt(a,16)/255*100)/100)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(i[r+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(i[r+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=l[i[1]]))return}for(r=0;r<e.length;r++)e[r]=m(e[r],0,255);return n=n||0==n?m(n,0,1):1,e[3]=n,e}}function h(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function c(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function f(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function g(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e,n){return Math.min(Math.max(e,t),n)}function v(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var b={};for(var x in l)b[l[x]]=x;var y=function(t){return t instanceof y?t:this instanceof y?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=u.getRgba(t))?this.setValues("rgb",e):(e=u.getHsla(t))?this.setValues("hsl",e):(e=u.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new y(t);var e};y.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return u.hexString(this.values.rgb)},rgbString:function(){return u.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return u.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return u.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return u.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return u.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return u.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return u.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,i=void 0===e?.5:e,a=2*i-1,r=this.alpha()-n.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*n.red(),o*this.green()+s*n.green(),o*this.blue()+s*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new y,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},y.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},y.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},y.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},y.prototype.setValues=function(t,e){var n,i,a=this.values,r=this.spaces,o=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[r[t][0]]){var u=r[t];for(n=0;n<t.length;n++)a[t][n]=e[u[n]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(i);for(var d in r)d!==t&&(a[d]=s[t][d](a[t]));return!0},y.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},y.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=y);var _,k=y,w={noop:function(){},uid:(_=0,function(){return _++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return w.valueOrDefault(w.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,i){var a,r,o;if(w.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if(w.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(n,t[o[a]],o[a])},arrayEquals:function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!w.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(w.isArray(t))return t.map(w.clone);if(w.isObject(t)){for(var e={},n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=w.clone(t[n[a]]);return e}return t},_merger:function(t,e,n,i){var a=e[t],r=n[t];w.isObject(a)&&w.isObject(r)?w.merge(a,r,i):e[t]=w.clone(r)},_mergerIf:function(t,e,n){var i=e[t],a=n[t];w.isObject(i)&&w.isObject(a)?w.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=w.clone(a))},merge:function(t,e,n){var i,a,r,o,s,l=w.isArray(e)?e:[e],u=l.length;if(!w.isObject(t))return t;for(i=(n=n||{}).merger||w._merger,a=0;a<u;++a)if(e=l[a],w.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)i(r[s],t,e,n);return t},mergeIf:function(t,e){return w.merge(t,e,{merger:w._mergerIf})},extend:Object.assign||function(t){return w.merge(t,[].slice.call(arguments,1),{merger:function(t,e,n){e[t]=n[t]}})},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=w.inherits,t&&w.extend(n.prototype,t),n.__super__=e.prototype,n},_deprecated:function(t,e,n,i){void 0!==e&&console.warn(t+': "'+n+'" is deprecated. Please use "'+i+'" instead')}},M=w;w.callCallback=w.callback,w.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},w.getValueOrDefault=w.valueOrDefault,w.getValueAtIndexOrDefault=w.valueAtIndexOrDefault;var S={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-S.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*S.easeInBounce(2*t):.5*S.easeOutBounce(2*t-1)+.5}},C={effects:S};M.easingEffects=S;var P=Math.PI,A=P/180,D=2*P,T=P/2,I=P/4,F=2*P/3,L={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,r){if(r){var o=Math.min(r,a/2,i/2),s=e+o,l=n+o,u=e+i-o,d=n+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-P,-T),t.arc(u,l,o,-T,0),t.arc(u,d,o,0,T),t.arc(s,d,o,T,P)):s<u?(t.moveTo(s,n),t.arc(u,l,o,-T,T),t.arc(s,l,o,T,P+T)):l<d?(t.arc(s,l,o,-P,0),t.arc(s,d,o,0,P)):t.arc(s,l,o,-P,P),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a,r){var o,s,l,u,d,h=(r||0)*A;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(n)||n<=0)){switch(t.beginPath(),e){default:t.arc(i,a,n,0,D),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=F,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=F,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),t.closePath();break;case"rectRounded":u=n-(d=.516*n),s=Math.cos(h+I)*u,l=Math.sin(h+I)*u,t.arc(i-s,a-l,d,h-P,h-T),t.arc(i+l,a-s,d,h-T,h),t.arc(i+s,a+l,d,h,h+T),t.arc(i-l,a+s,d,h+T,h+P),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*n,t.rect(i-u,a-u,2*u,2*u);break}h+=I;case"rectRot":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+l,a-s),t.lineTo(i+s,a+l),t.lineTo(i-l,a+s),t.closePath();break;case"crossRot":h+=I;case"cross":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"star":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s),h+=I,s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"line":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l);break;case"dash":t.moveTo(i,a),t.lineTo(i+Math.cos(h)*n,a+Math.sin(h)*n)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){var a=n.steppedLine;if(a){if("middle"===a){var r=(e.x+n.x)/2;t.lineTo(r,i?n.y:e.y),t.lineTo(r,i?e.y:n.y)}else"after"===a&&!i||"after"!==a&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}else n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}},O=L;M.clear=L.clear,M.drawRoundedRectangle=function(t){t.beginPath(),L.roundedRect.apply(L,arguments)};var R={_set:function(t,e){return M.merge(this[t]||(this[t]={}),e)}};R._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var z=R,N=M.valueOrDefault;var B={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,a;return M.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},_parseFont:function(t){var e=z.global,n=N(t.fontSize,e.defaultFontSize),i={family:N(t.fontFamily,e.defaultFontFamily),lineHeight:M.options.toLineHeight(N(t.lineHeight,e.defaultLineHeight),n),size:n,style:N(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return i.string=function(t){return!t||M.isNullOrUndef(t.size)||M.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i},resolve:function(t,e,n,i){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==n&&M.isArray(o)&&(o=o[n],s=!1),void 0!==o))return i&&!s&&(i.cacheable=!1),o}},E={_factorize:function(t){var e,n=[],i=Math.sqrt(t);for(e=1;e<i;e++)t%e==0&&(n.push(e),n.push(t/e));return i===(0|i)&&n.push(i),n.sort((function(t,e){return t-e})).pop(),n},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e}},W=E;M.log10=E.log10;var V=M,H=C,j=O,q=B,U=W,Y={getRtlAdapter:function(t,e,n){return t?function(t,e){return{x:function(n){return t+t+e-n},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,n):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var n,i;"ltr"!==e&&"rtl"!==e||(i=[(n=t.canvas.style).getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};V.easing=H,V.canvas=j,V.options=q,V.math=U,V.rtl=Y;var G=function(t){V.extend(this,t),this.initialize.apply(this,arguments)};V.extend(G.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=V.extend({},t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f=Object.keys(n);for(a=0,r=f.length;a<r;++a)if(u=n[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=k(l)).valid&&(c=k(u)).valid){e[o]=c.mix(h,i).rgbString();continue}}else if(V.isFinite(l)&&V.isFinite(u)){e[o]=l+(u-l)*i;continue}e[o]=u}}(i,a,n,t),e):(e._view=V.extend({},n),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return V.isNumber(this._model.x)&&V.isNumber(this._model.y)}}),G.extend=V.inherits;var X=G,K=X.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),Z=K;Object.defineProperty(K.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(K.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),z._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:V.noop,onComplete:V.noop}});var $={animations:[],request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=n,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=V.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=V.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,n,i,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,n=t.numSteps,i=Math.floor((Date.now()-t.startTime)/t.duration*n)+1,t.currentStep=Math.min(i,n),V.callback(t.render,[e,t],e),V.callback(t.onAnimationProgress,[t],e),t.currentStep>=n?(V.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},J=V.options.resolve,Q=["push","pop","shift","splice","unshift"];function tt(t,e){var n=t._chartjs;if(n){var i=n.listeners,a=i.indexOf(e);-1!==a&&i.splice(a,1),i.length>0||(Q.forEach((function(e){delete t[e]})),delete t._chartjs)}}var et=function(t,e){this.initialize(t,e)};V.extend(et.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements(),n._type=n.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,n=e.scales,i=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in n&&!i.xAxisID||(t.xAxisID=i.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in n&&!i.yAxisID||(t.yAxisID=i.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&tt(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),i=this.getDataset().data||[],a=n.data;for(t=0,e=i.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,n=this,i=n.getDataset(),a=i.data||(i.data=[]);n._data!==a&&(n._data&&tt(n._data,n),a&&Object.isExtensible(a)&&(e=n,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Q.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e);return V.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),a}})})))),n._data=a),n.resyncElements()},_configure:function(){this._config=V.merge({},[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,n){"_meta"!==t&&"data"!==t&&V._merger(t,e,n)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:V.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},getStyle:function(t){var e,n=this.getMeta(),i=n.dataset;return this._configure(),i&&void 0===t?e=this._resolveDatasetElementOptions(i||{}):(t=t||0,e=this._resolveDataElementOptions(n.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor=e.borderColor),e},_resolveDatasetElementOptions:function(t,e){var n,i,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(n=0,i=h.length;n<i;++n)a=h[n],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=J([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var n=this,i=t&&t.custom,a=n._cachedDataOpts;if(a&&!i)return a;var r,o,s,l,u=n.chart,d=n._config,h=u.options.elements[n.dataElementType.prototype._type]||{},c=n._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:n.getDataset(),datasetIndex:n.index},p={cacheable:!i};if(i=i||{},V.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=J([i[l],d[l],h[l]],g,e,p);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=J([i[l],d[c[l]],d[l],h[l]],g,e,p);return p.cacheable&&(n._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){V.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=V.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=J([i.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,n),a.borderColor=J([i.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,n),a.borderWidth=J([i.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,n)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,n,i,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(i=Object.keys(a)).length;t<e;++t)s[n=i[t]]=r[n],r[n]=a[n];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,i=e.length;i<n?t.data.splice(i,n-i):i>n&&this.insertElements(n,i-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),et.extend=V.inherits;var nt=et,it=2*Math.PI;function at(t,e){var n=e.startAngle,i=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,n-r,i+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,i+r,n-r,!0)):t.arc(o,s,a,i+Math.PI/2,n-Math.PI/2),t.closePath(),t.clip()}function rt(t,e,n){var i="inner"===e.borderAlign;i?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),n.fullCircles&&function(t,e,n,i){var a,r=n.endAngle;for(i&&(n.endAngle=n.startAngle+it,at(t,n),n.endAngle=r,n.endAngle===n.startAngle&&n.fullCircles&&(n.endAngle+=it,n.fullCircles--)),t.beginPath(),t.arc(n.x,n.y,n.innerRadius,n.startAngle+it,n.startAngle,!0),a=0;a<n.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.startAngle+it),a=0;a<n.fullCircles;++a)t.stroke()}(t,e,n,i),i&&at(t,n),t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.endAngle),t.arc(n.x,n.y,n.innerRadius,n.endAngle,n.startAngle,!0),t.closePath(),t.stroke()}z._set("global",{elements:{arc:{backgroundColor:z.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var ot=X.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var i=V.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,o=n.startAngle,s=n.endAngle;s<o;)s+=it;for(;a>s;)a-=it;for(;a<o;)a+=it;var l=a>=o&&a<=s,u=r>=n.innerRadius&&r<=n.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t,e=this._chart.ctx,n=this._view,i="inner"===n.borderAlign?.33:0,a={x:n.x,y:n.y,innerRadius:n.innerRadius,outerRadius:Math.max(n.outerRadius-i,0),pixelMargin:i,startAngle:n.startAngle,endAngle:n.endAngle,fullCircles:Math.floor(n.circumference/it)};if(e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+it,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+n.circumference%it}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),n.borderWidth&&rt(e,n,a),e.restore()}}),st=V.valueOrDefault,lt=z.global.defaultColor;z._set("global",{elements:{line:{tension:.4,backgroundColor:lt,borderWidth:3,borderColor:lt,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var ut=X.extend({_type:"line",draw:function(){var t,e,n,i=this,a=i._view,r=i._chart.ctx,o=a.spanGaps,s=i._children.slice(),l=z.global,u=l.elements.line,d=-1,h=i._loop;if(s.length){if(i._loop){for(t=0;t<s.length;++t)if(e=V.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=st(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=st(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(n=s[0]._view).skip||(r.moveTo(n.x,n.y),d=0),t=1;t<s.length;++t)n=s[t]._view,e=-1===d?V.previousItem(s,t):s[d],n.skip||(d!==t-1&&!o||-1===d?r.moveTo(n.x,n.y):V.canvas.lineTo(r,e._view,n),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),dt=V.valueOrDefault,ht=z.global.defaultColor;function ct(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}z._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:ht,borderColor:ht,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var ft=X.extend({_type:"point",inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:ct,inXRange:ct,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._chart.ctx,i=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=z.global,u=l.defaultColor;e.skip||(void 0===t||V.canvas._isPointInArea(e,t))&&(n.strokeStyle=e.borderColor||u,n.lineWidth=dt(e.borderWidth,l.elements.point.borderWidth),n.fillStyle=e.backgroundColor||u,V.canvas.drawPoint(n,i,r,o,s,a))}}),gt=z.global.defaultColor;function pt(t){return t&&void 0!==t.width}function mt(t){var e,n,i,a,r;return pt(t)?(r=t.width/2,e=t.x-r,n=t.x+r,i=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),n=Math.max(t.x,t.base),i=t.y-r,a=t.y+r),{left:e,top:i,right:n,bottom:a}}function vt(t,e,n){return t===e?n:t===n?e:t}function bt(t,e,n){var i,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,n={};return e?(t.horizontal?t.base>t.x&&(e=vt(e,"left","right")):t.base<t.y&&(e=vt(e,"bottom","top")),n[e]=!0,n):n}(t);return V.isObject(s)?(i=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):i=a=r=o=+s||0,{t:l.top||i<0?0:i>n?n:i,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>n?n:r,l:l.left||o<0?0:o>e?e:o}}function xt(t,e,n){var i=null===e,a=null===n,r=!(!t||i&&a)&&mt(t);return r&&(i||e>=r.left&&e<=r.right)&&(a||n>=r.top&&n<=r.bottom)}z._set("global",{elements:{rectangle:{backgroundColor:gt,borderColor:gt,borderSkipped:"bottom",borderWidth:0}}});var yt=X.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,n=function(t){var e=mt(t),n=e.right-e.left,i=e.bottom-e.top,a=bt(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i},inner:{x:e.left+a.l,y:e.top+a.t,w:n-a.l-a.r,h:i-a.t-a.b}}}(e),i=n.outer,a=n.inner;t.fillStyle=e.backgroundColor,t.fillRect(i.x,i.y,i.w,i.h),i.w===a.w&&i.h===a.h||(t.save(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return xt(this._view,t,e)},inLabelRange:function(t,e){var n=this._view;return pt(n)?xt(n,t,null):xt(n,null,e)},inXRange:function(t){return xt(this._view,t,null)},inYRange:function(t){return xt(this._view,null,t)},getCenterPoint:function(){var t,e,n=this._view;return pt(n)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return pt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),_t={},kt=ot,wt=ut,Mt=ft,St=yt;_t.Arc=kt,_t.Line=wt,_t.Point=Mt,_t.Rectangle=St;var Ct=V._deprecated,Pt=V.valueOrDefault;function At(t,e,n){var i,a,r=n.barThickness,o=e.stackCount,s=e.pixels[t],l=V.isNullOrUndef(r)?function(t,e){var n,i,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)i=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(i-n)):o,n=i;return o}(e.scale,e.pixels):-1;return V.isNullOrUndef(r)?(i=l*n.categoryPercentage,a=n.barPercentage):(i=r*o,a=1),{chunk:i/o,ratio:a,start:s-i/2}}z._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),z._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var Dt=nt.extend({dataElementType:_t.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,n=this;nt.prototype.initialize.apply(n,arguments),(t=n.getMeta()).stack=n.getDataset().stack,t.bar=!0,e=n._getIndexScale().options,Ct("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),Ct("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),Ct("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),Ct("bar chart",n._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),Ct("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,n,i=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=i.length;e<n;++e)this.updateElement(i[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=i.getDataset(),o=i._resolveDataElementOptions(t,e);t._xScale=i.getScaleForId(a.xAxisID),t._yScale=i.getScaleForId(a.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:i.chart.data.labels[e]},V.isArray(r.data[e])&&(t._model.borderSkipped=null),i._updateElementGeometry(t,e,n,o),t.pivot()},_updateElementGeometry:function(t,e,n,i){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,i),h=a.calculateBarIndexPixels(a.index,e,u,i);r.horizontal=l,r.base=n?s:d.base,r.x=l?n?s:d.head:h.center,r.y=l?h.center:n?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,n,i=this._getIndexScale(),a=i._getMatchingVisibleMetas(this._type),r=i.options.stacked,o=a.length,s=[];for(e=0;e<o&&(n=a[e],(!1===r||-1===s.indexOf(n.stack)||void 0===r&&void 0===n.stack)&&s.push(n.stack),n.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),i=void 0!==e?n.indexOf(e):-1;return-1===i?n.length-1:i},getRuler:function(){var t,e,n=this._getIndexScale(),i=[];for(t=0,e=this.getMeta().data.length;t<e;++t)i.push(n.getPixelForValue(null,t,this.index));return{pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this.getStackCount(),scale:n}},calculateBarValuePixels:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),p=h._parseValue(f[t].data[e]),m=n.minBarLength,v=h.options.stacked,b=this.getMeta().stack,x=void 0===p.start?0:p.max>=0&&p.min>=0?p.min:p.max,y=void 0===p.start?p.end:p.max>=0&&p.min>=0?p.max-p.min:p.min-p.max,_=g.length;if(v||void 0===v&&void 0!==b)for(i=0;i<_&&(a=g[i]).index!==t;++i)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(p.min<0&&r<0||p.max>=0&&r>0)&&(x+=r));return o=h.getPixelForValue(x),l=(s=h.getPixelForValue(x+y))-o,void 0!==m&&Math.abs(l)<m&&(l=m,s=y>=0&&!c||y<0&&c?o-m:o+m),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,n,i){var a="flex"===i.barThickness?function(t,e,n){var i,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=n.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),i=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:n.barPercentage,start:i}}(e,n,i):At(e,n,i),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(Pt(i.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),n=this.getMeta().data,i=this.getDataset(),a=n.length,r=0;for(V.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(i.data[r]);isNaN(o.min)||isNaN(o.max)||n[r].draw()}V.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=V.extend({},nt.prototype._resolveDataElementOptions.apply(t,arguments)),n=t._getIndexScale().options,i=t._getValueScale().options;return e.barPercentage=Pt(n.barPercentage,e.barPercentage),e.barThickness=Pt(n.barThickness,e.barThickness),e.categoryPercentage=Pt(n.categoryPercentage,e.categoryPercentage),e.maxBarThickness=Pt(n.maxBarThickness,e.maxBarThickness),e.minBarLength=Pt(i.minBarLength,e.minBarLength),e}}),Tt=V.valueOrDefault,It=V.options.resolve;z._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}});var Ft=nt.extend({dataElementType:_t.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,n=e.getMeta().data;V.each(n,(function(n,i){e.updateElement(n,i,t)}))},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=t.custom||{},o=i.getScaleForId(a.xAxisID),s=i.getScaleForId(a.yAxisID),l=i._resolveDataElementOptions(t,e),u=i.getDataset().data[e],d=i.index,h=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=n?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:n?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Tt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Tt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Tt(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveDataElementOptions:function(t,e){var n=this,i=n.chart,a=n.getDataset(),r=t.custom||{},o=a.data[e]||{},s=nt.prototype._resolveDataElementOptions.apply(n,arguments),l={chart:i,dataIndex:e,dataset:a,datasetIndex:n.index};return n._cachedDataOpts===s&&(s=V.extend({},s)),s.radius=It([r.radius,o.r,n._config.radius,i.options.elements.point.radius],l,e),s}}),Lt=V.valueOrDefault,Ot=Math.PI,Rt=2*Ot,zt=Ot/2;z._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-zt,circumference:Rt,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index];return V.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}});var Nt=nt.extend({dataElementType:_t.Arc,linkScales:V.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e,n,i,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,p=l.cutoutPercentage/100||0,m=l.circumference,v=r._getRingWeight(r.index);if(m<Rt){var b=l.rotation%Rt,x=(b+=b>=Ot?-Rt:b<-Ot?Rt:0)+m,y=Math.cos(b),_=Math.sin(b),k=Math.cos(x),w=Math.sin(x),M=b<=0&&x>=0||x>=Rt,S=b<=zt&&x>=zt||x>=Rt+zt,C=b<=-zt&&x>=-zt||x>=Ot+zt,P=b===-Ot||x>=Ot?-1:Math.min(y,y*p,k,k*p),A=C?-1:Math.min(_,_*p,w,w*p),D=M?1:Math.max(y,y*p,k,k*p),T=S?1:Math.max(_,_*p,w,w*p);u=(D-P)/2,d=(T-A)/2,h=-(D+P)/2,c=-(T+A)/2}for(i=0,a=g.length;i<a;++i)g[i]._options=r._resolveDataElementOptions(g[i],i);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,n=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,n)/2,0),o.innerRadius=Math.max(o.outerRadius*p,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),i=0,a=g.length;i<a;++i)r.updateElement(g[i],i,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=i.getDataset(),f=n&&s.animateRotate?0:t.hidden?0:i.calculateCircumference(c.data[e])*(o.circumference/Rt),g=n&&s.animateScale?0:i.innerRadius,p=n&&s.animateScale?0:i.outerRadius,m=t._options||{};V.extend(t,{_datasetIndex:i.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:V.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;n&&s.animateRotate||(v.startAngle=0===e?o.rotation:i.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0;return V.each(n.data,(function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))})),i},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?Rt*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,n,i,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,n=d.data.datasets.length;e<n;++e)if(d.isDatasetVisible(e)){t=(i=d.getDatasetMeta(e)).data,e!==this.index&&(r=i.controller);break}if(!t)return 0;for(e=0,n=t.length;e<n;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Lt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Lt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Lt(n.hoverBorderWidth,n.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e},_getRingWeight:function(t){return Math.max(Lt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});z._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),z._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var Bt=Dt.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Et=V.valueOrDefault,Wt=V.options.resolve,Vt=V.canvas._isPointInArea;function Ht(t,e){var n=t&&t.options.ticks||{},i=n.reverse,a=void 0===n.min?e:0,r=void 0===n.max?e:0;return{start:i?r:a,end:i?a:r}}function jt(t,e,n){var i=n/2,a=Ht(t,i),r=Ht(e,i);return{top:r.end,right:a.end,bottom:r.start,left:a.start}}function qt(t){var e,n,i,a;return V.isObject(t)?(e=t.top,n=t.right,i=t.bottom,a=t.left):e=n=i=a=t,{top:e,right:n,bottom:i,left:a}}z._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var Ut=nt.extend({datasetElementType:_t.Line,dataElementType:_t.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.options,l=i._config,u=i._showLine=Et(l.showLine,s.showLines);for(i._xScale=i.getScaleForId(a.xAxisID),i._yScale=i.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=i._yScale,r._datasetIndex=i.index,r._children=o,r._model=i._resolveDatasetElementOptions(r),r.pivot()),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);i=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=n?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Et(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,n=e._config,i=t.custom||{},a=e.chart.options,r=a.elements.line,o=nt.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=Et(n.spanGaps,a.spanGaps),o.tension=Et(n.lineTension,r.tension),o.steppedLine=Wt([i.steppedLine,n.steppedLine,r.stepped]),o.clip=qt(Et(n.clip,jt(e._xScale,e._yScale,o.borderWidth))),o},calculatePointY:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._yScale,c=0,f=0;if(h.options.stacked){for(s=+h.getRightValue(t),u=(l=d._getSortedVisibleDatasetMetas()).length,i=0;i<u&&(r=l[i]).index!==n;++i)a=d.data.datasets[r.index],"line"===r.type&&r.yAxisID===h.id&&((o=+h.getRightValue(a.data[e]))<0?f+=o||0:c+=o||0);return s<0?h.getPixelForValue(f+s):h.getPixelForValue(c+s)}return h.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,i,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,n){return Math.max(Math.min(t,n),e)}if(o.spanGaps&&(l=l.filter((function(t){return!t._model.skip}))),"monotone"===o.cubicInterpolationMode)V.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)n=l[t]._model,i=V.splineCurve(V.previousItem(l,t)._model,n,V.nextItem(l,t)._model,o.tension),n.controlPointPreviousX=i.previous.x,n.controlPointPreviousY=i.previous.y,n.controlPointNextX=i.next.x,n.controlPointNextY=i.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)n=l[t]._model,Vt(n,s)&&(t>0&&Vt(l[t-1]._model,s)&&(n.controlPointPreviousX=u(n.controlPointPreviousX,s.left,s.right),n.controlPointPreviousY=u(n.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&Vt(l[t+1]._model,s)&&(n.controlPointNextX=u(n.controlPointNextX,s.left,s.right),n.controlPointNextY=u(n.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,n=this.getMeta(),i=n.data||[],a=e.chartArea,r=e.canvas,o=0,s=i.length;for(this._showLine&&(t=n.dataset._model.clip,V.canvas.clipArea(e.ctx,{left:!1===t.left?0:a.left-t.left,right:!1===t.right?r.width:a.right+t.right,top:!1===t.top?0:a.top-t.top,bottom:!1===t.bottom?r.height:a.bottom+t.bottom}),n.dataset.draw(),V.canvas.unclipArea(e.ctx));o<s;++o)i[o].draw(a)},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Et(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Et(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Et(n.hoverBorderWidth,n.borderWidth),e.radius=Et(n.hoverRadius,n.radius)}}),Yt=V.options.resolve;z._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var Gt=nt.extend({dataElementType:_t.Arc,linkScales:V.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,n=r.data.length;e<n;e++)l[e]=s,i=a._computeAngle(e),u[e]=i,s+=i;for(e=0,n=d.length;e<n;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,i=e.options,a=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(i.cutoutPercentage?e.outerRadius/100*i.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=i._starts[e],p=g+(t.hidden?0:i._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};V.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:n?m:f,startAngle:n&&s.animateRotate?c:g,endAngle:n&&s.animateRotate?c:p,label:V.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return V.each(e.data,(function(e,i){isNaN(t.data[i])||e.hidden||n++})),n},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor,a=V.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=a(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=a(n.hoverBorderWidth,n.borderWidth)},_computeAngle:function(t){var e=this,n=this.getMeta().count,i=e.getDataset(),a=e.getMeta();if(isNaN(i.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:i,datasetIndex:e.index};return Yt([e.chart.options.elements.arc.angle,2*Math.PI/n],r,t)}});z._set("pie",V.clone(z.doughnut)),z._set("pie",{cutoutPercentage:0});var Xt=Nt,Kt=V.valueOrDefault;z._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{fill:"start",tension:0}}});var Zt=nt.extend({datasetElementType:_t.Line,dataElementType:_t.Point,linkScales:V.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.scale,l=i._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=i.index,r._children=o,r._loop=!0,r._model=i._resolveDatasetElementOptions(r),r.pivot(),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),o=i.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=i._resolveDataElementOptions(t,e),u=i.getMeta().dataset._model,d=n?o.xCenter:s.x,h=n?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=i.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:Kt(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,n=t.chart.options,i=nt.prototype._resolveDatasetElementOptions.apply(t,arguments);return i.spanGaps=Kt(e.spanGaps,n.spanGaps),i.tension=Kt(e.lineTension,n.elements.line.tension),i},updateBezierControlPoints:function(){var t,e,n,i,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,n){return Math.max(Math.min(t,n),e)}for(a.dataset._model.spanGaps&&(o=o.filter((function(t){return!t._model.skip}))),t=0,e=o.length;t<e;++t)n=o[t]._model,i=V.splineCurve(V.previousItem(o,t,!0)._model,n,V.nextItem(o,t,!0)._model,n.tension),n.controlPointPreviousX=s(i.previous.x,r.left,r.right),n.controlPointPreviousY=s(i.previous.y,r.top,r.bottom),n.controlPointNextX=s(i.next.x,r.left,r.right),n.controlPointNextY=s(i.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,n=t._options,i=V.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Kt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Kt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Kt(n.hoverBorderWidth,n.borderWidth),e.radius=Kt(n.hoverRadius,n.radius)}});z._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),z._set("global",{datasets:{scatter:{showLine:!1}}});var $t={bar:Dt,bubble:Ft,doughnut:Nt,horizontalBar:Bt,line:Ut,polarArea:Gt,pie:Xt,radar:Zt,scatter:Ut};function Jt(t,e){return t.native?{x:t.x,y:t.y}:V.getRelativePosition(t,e)}function Qt(t,e){var n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(i=0,r=l.length;i<r;++i)for(a=0,o=(n=l[i].data).length;a<o;++a)(s=n[a])._view.skip||e(s)}function te(t,e){var n=[];return Qt(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function ee(t,e,n,i){var a=Number.POSITIVE_INFINITY,r=[];return Qt(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=i(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}})),r}function ne(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){var a=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function ie(t,e,n){var i=Jt(e,t);n.axis=n.axis||"x";var a=ne(n.axis),r=n.intersect?te(t,i):ee(t,i,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach((function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)})),o):[]}var ae={modes:{single:function(t,e){var n=Jt(e,t),i=[];return Qt(t,(function(t){if(t.inRange(n.x,n.y))return i.push(t),i})),i.slice(0,1)},label:ie,index:ie,dataset:function(t,e,n){var i=Jt(e,t);n.axis=n.axis||"xy";var a=ne(n.axis),r=n.intersect?te(t,i):ee(t,i,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return ie(t,e,{intersect:!1})},point:function(t,e){return te(t,Jt(e,t))},nearest:function(t,e,n){var i=Jt(e,t);n.axis=n.axis||"xy";var a=ne(n.axis);return ee(t,i,n.intersect,a)},x:function(t,e,n){var i=Jt(e,t),a=[],r=!1;return Qt(t,(function(t){t.inXRange(i.x)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a},y:function(t,e,n){var i=Jt(e,t),a=[],r=!1;return Qt(t,(function(t){t.inYRange(i.y)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a}}},re=V.extend;function oe(t,e){return V.where(t,(function(t){return t.pos===e}))}function se(t,e){return t.sort((function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight}))}function le(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ue(t,e,n){var i,a,r=n.box,o=t.maxPadding;if(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?r.height:r.width,t[n.pos]+=n.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(i=e.outerWidth-le(o,t,"left","right"),a=e.outerHeight-le(o,t,"top","bottom"),i!==t.w||a!==t.h)return t.w=i,t.h=a,n.horizontal?i!==t.w:a!==t.h}function de(t,e){var n=e.maxPadding;function i(t){var i={left:0,top:0,right:0,bottom:0};return t.forEach((function(t){i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function he(t,e,n){var i,a,r,o,s,l,u=[];for(i=0,a=t.length;i<a;++i)(o=(r=t[i]).box).update(r.width||e.w,r.height||e.h,de(r.horizontal,e)),ue(e,n,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&he(u,e,n)||l}function ce(t,e,n){var i,a,r,o,s=n.padding,l=e.x,u=e.y;for(i=0,a=t.length;i<a;++i)o=(r=t[i]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?n.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}z._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var fe,ge={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,e,n){if(t){var i=t.options.layout||{},a=V.options.toPadding(i.padding),r=e-a.width,o=n-a.height,s=function(t){var e=function(t){var e,n,i,a=[];for(e=0,n=(t||[]).length;e<n;++e)i=t[e],a.push({index:e,box:i,pos:i.position,horizontal:i.isHorizontal(),weight:i.weight});return a}(t),n=se(oe(e,"left"),!0),i=se(oe(e,"right")),a=se(oe(e,"top"),!0),r=se(oe(e,"bottom"));return{leftAndTop:n.concat(a),rightAndBottom:i.concat(r),chartArea:oe(e,"chartArea"),vertical:n.concat(i),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:n,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=re({maxPadding:re({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var n,i,a;for(n=0,i=t.length;n<i;++n)(a=t[n]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),he(l,h,d),he(u,h,d)&&he(l,h,d),function(t){var e=t.maxPadding;function n(n){var i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(h),ce(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,ce(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},V.each(s.chartArea,(function(e){var n=e.box;re(n,t.chartArea),n.update(h.w,h.h)}))}}},pe=(fe=Object.freeze({__proto__:null,default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&fe.default||fe,me="$chartjs",ve="chartjs-size-monitor",be="chartjs-render-monitor",xe="chartjs-render-animation",ye=["animationstart","webkitAnimationStart"],_e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function ke(t,e){var n=V.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var we=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Me(t,e,n){t.addEventListener(e,n,we)}function Se(t,e,n){t.removeEventListener(e,n,we)}function Ce(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function Pe(t){var e=document.createElement("div");return e.className=t||"",e}function Ae(t,e,n){var i,a,r,o,s=t[me]||(t[me]={}),l=s.resizer=function(t){var e=Pe(ve),n=Pe(ve+"-expand"),i=Pe(ve+"-shrink");n.appendChild(Pe()),i.appendChild(Pe()),e.appendChild(n),e.appendChild(i),e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,i.scrollLeft=1e6,i.scrollTop=1e6};var a=function(){e._reset(),t()};return Me(n,"scroll",a.bind(n,"expand")),Me(i,"scroll",a.bind(i,"shrink")),e}((i=function(){if(s.resizer){var i=n.options.maintainAspectRatio&&t.parentNode,a=i?i.clientWidth:0;e(Ce("resize",n)),i&&i.clientWidth<a&&n.canvas&&e(Ce("resize",n))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,V.requestAnimFrame.call(window,(function(){r=!1,i.apply(a,o)})))}));!function(t,e){var n=t[me]||(t[me]={}),i=n.renderProxy=function(t){t.animationName===xe&&e()};V.each(ye,(function(e){Me(t,e,i)})),n.reflow=!!t.offsetParent,t.classList.add(be)}(t,(function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}}))}function De(t){var e=t[me]||{},n=e.resizer;delete e.resizer,function(t){var e=t[me]||{},n=e.renderProxy;n&&(V.each(ye,(function(e){Se(t,e,n)})),delete e.renderProxy),t.classList.remove(be)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}var Te={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode?t.getRootNode():document;!function(t,e){var n=t[me]||(t[me]={});if(!n.containsStyles){n.containsStyles=!0,e="/* Chart.js */\n"+e;var i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(e)),t.appendChild(i)}}(e.host?e:document.head,pe)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(this._ensureLoaded(t),function(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width");if(t[me]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===a||""===a){var r=ke(t,"width");void 0!==r&&(t.width=r)}if(null===i||""===i)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=ke(t,"height");void 0!==r&&(t.height=o)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[me]){var n=e[me].initial;["height","width"].forEach((function(t){var i=n[t];V.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),V.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[me]}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=n[me]||(n[me]={});Me(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=_e[t.type]||t.type,i=V.getRelativePosition(t,e);return Ce(n,e,i.x,i.y,t)}(e,t))})}else Ae(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=((n[me]||{}).proxies||{})[t.id+"_"+e];a&&Se(i,e,a)}else De(i)}};V.addEvent=Me,V.removeEvent=Se;var Ie=Te._enabled?Te:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Fe=V.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Ie);z._set("global",{plugins:{}});var Le={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if("function"==typeof(s=(r=(a=l[i]).plugin)[e])&&((o=[t].concat(n||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],i=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=V.clone(z.global.plugins[e])),n.push(t),i.push({plugin:t,options:a||{}}))}})),e.descriptors=i,e.id=this._cacheId,i},_invalidate:function(t){delete t.$plugins}},Oe={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=V.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?V.merge({},[z.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=V.extend(this.defaults[t],e))},addScalesToLayout:function(t){V.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,ge.addBox(t,e)}))}},Re=V.valueOrDefault,ze=V.rtl.getRtlAdapter;z._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:V.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.label?n=r.label:r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:V.noop,beforeBody:V.noop,beforeLabel:V.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),V.isNullOrUndef(t.value)?n+=t.yLabel:n+=t.value,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:V.noop,afterBody:V.noop,beforeFooter:V.noop,footer:V.noop,afterFooter:V.noop}}});var Ne={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:i/r,y:a/r}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){var l=t[n];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=V.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function Be(t,e){return e&&(V.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ee(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function We(t){var e=z.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:Re(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:Re(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:Re(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:Re(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:Re(t.titleFontStyle,e.defaultFontStyle),titleFontSize:Re(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:Re(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:Re(t.footerFontStyle,e.defaultFontStyle),footerFontSize:Re(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function Ve(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function He(t){return Be([],Ee(t))}var je=X.extend({initialize:function(){this._model=We(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,i=n.beforeTitle.apply(t,arguments),a=n.title.apply(t,arguments),r=n.afterTitle.apply(t,arguments),o=[];return o=Be(o,Ee(i)),o=Be(o,Ee(a)),o=Be(o,Ee(r))},getBeforeBody:function(){return He(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,i=n._options.callbacks,a=[];return V.each(t,(function(t){var r={before:[],lines:[],after:[]};Be(r.before,Ee(i.beforeLabel.call(n,t,e))),Be(r.lines,i.label.call(n,t,e)),Be(r.after,Ee(i.afterLabel.call(n,t,e))),a.push(r)})),a},getAfterBody:function(){return He(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=Be(r,Ee(n)),r=Be(r,Ee(i)),r=Be(r,Ee(a))},update:function(t){var e,n,i,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=We(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var _=[],k=[];y=Ne[c.position].call(h,p,h._eventPosition);var w=[];for(e=0,n=p.length;e<n;++e)w.push((i=p[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=i._xScale,r=i._yScale||i._scale,o=i._index,s=i._datasetIndex,l=i._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:i._model.x,y:i._model.y}));c.filter&&(w=w.filter((function(t){return c.filter(t,m)}))),c.itemSort&&(w=w.sort((function(t,e){return c.itemSort(t,e,m)}))),V.each(w,(function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),k.push(c.callbacks.labelTextColor.call(h,t,h._chart))})),g.title=h.getTitle(w,m),g.beforeBody=h.getBeforeBody(w,m),g.body=h.getBody(w,m),g.afterBody=h.getAfterBody(w,m),g.footer=h.getFooter(w,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=k,g.dataPoints=w,x=function(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;i+=s*u,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*d,i+=o?(o-1)*e.bodySpacing:0,i+=l?e.footerMarginTop:0,i+=l*h,i+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,n.measureText(t).width+c)};return n.font=V.fontString(u,e._titleFontStyle,e._titleFontFamily),V.each(e.title,f),n.font=V.fontString(d,e._bodyFontStyle,e._bodyFontFamily),V.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,V.each(r,(function(t){V.each(t.before,f),V.each(t.lines,f),V.each(t.after,f)})),c=0,n.font=V.fontString(h,e._footerFontStyle,e._footerFontFamily),V.each(e.footer,f),{width:a+=2*e.xPadding,height:i}}(this,g),b=function(t,e,n,i){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,d=n.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>i.width&&(a=i.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,x,v=function(t,e){var n,i,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(n=function(t){return t<=c},i=function(t){return t>c}):(n=function(t){return t<=e.width/2},i=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},n(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):i(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,h=n.xAlign,c=n.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(i=f)-u,r=i,o=s+u,l=s-u):(a=(i=f+p)+u,r=i,o=s-u,l=s+u);else if("left"===h?(i=(a=f+d+u)-u,r=a+u):"right"===h?(i=(a=f+p-d-u)-u,r=a+u):(i=(a=n.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+m)+u,l=o;var v=r;r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,n){var i,a,r,o=e.title,s=o.length;if(s){var l=ze(e.rtl,e.x,e.width);for(t.x=Ve(e,e._titleAlign),n.textAlign=l.textAlign(e._titleAlign),n.textBaseline="middle",i=e.titleFontSize,a=e.titleSpacing,n.fillStyle=e.titleFontColor,n.font=V.fontString(i,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)n.fillText(o[r],l.x(t.x),t.y+i/2),t.y+=i+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,n){var i,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,p=e.displayColors,m=0,v=p?Ve(e,"left"):0,b=ze(e.rtl,e.x,e.width),x=function(e){n.fillText(e,b.x(t.x+m),t.y+h/2),t.y+=h+c},y=b.textAlign(f);for(n.textAlign=f,n.textBaseline="middle",n.font=V.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=Ve(e,y),n.fillStyle=e.bodyFontColor,V.each(e.beforeBody,x),m=p&&"right"!==y?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(i=g[s],a=e.labelTextColors[s],r=e.labelColors[s],n.fillStyle=a,V.each(i.before,x),l=0,d=(o=i.lines).length;l<d;++l){if(p){var _=b.x(v);n.fillStyle=e.legendColorBackground,n.fillRect(b.leftForLtr(_,h),t.y,h,h),n.lineWidth=1,n.strokeStyle=r.borderColor,n.strokeRect(b.leftForLtr(_,h),t.y,h,h),n.fillStyle=r.backgroundColor,n.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),n.fillStyle=a}x(o[l])}V.each(i.after,x)}m=0,V.each(e.afterBody,x),t.y-=c},drawFooter:function(t,e,n){var i,a,r=e.footer,o=r.length;if(o){var s=ze(e.rtl,e.x,e.width);for(t.x=Ve(e,e._footerAlign),t.y+=e.footerMarginTop,n.textAlign=s.textAlign(e._footerAlign),n.textBaseline="middle",i=e.footerFontSize,n.fillStyle=e.footerFontColor,n.font=V.fontString(i,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)n.fillText(r[a],s.x(t.x),t.y+i/2),t.y+=i+e.footerSpacing}},drawBackground:function(t,e,n,i){n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,n.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=i.width,u=i.height,d=e.cornerRadius;n.beginPath(),n.moveTo(o+d,s),"top"===r&&this.drawCaret(t,i),n.lineTo(o+l-d,s),n.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,i),n.lineTo(o+l,s+u-d),n.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,i),n.lineTo(o+d,s+u),n.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,i),n.lineTo(o,s+d),n.quadraticCurveTo(o,s,o+d,s),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(i,e,t,n),i.y+=e.yPadding,V.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),V.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,n=this,i=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:(n._active=n._chart.getElementsAtEventForMode(t,i.mode,i),i.reverse&&n._active.reverse()),(e=!V.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}}),qe=Ne,Ue=je;Ue.positioners=qe;var Ye=V.valueOrDefault;function Ge(){return V.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){if("xAxes"===t||"yAxes"===t){var a,r,o,s=n[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=n[t][a],r=Ye(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?V.merge(e[t][a],[Oe.getScaleDefaults(r),o]):V.merge(e[t][a],o)}else V._merger(t,e,n,i)}})}function Xe(){return V.merge({},[].slice.call(arguments),{merger:function(t,e,n,i){var a=e[t]||{},r=n[t];"scales"===t?e[t]=Ge(a,r):"scale"===t?e[t]=V.merge(a,[Oe.getScaleDefaults(r.type),r]):V._merger(t,e,n,i)}})}function Ke(t){var e=t.options;V.each(t.scales,(function(e){ge.removeBox(t,e)})),e=Xe(z.global,z[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function Ze(t,e,n){var i,a=function(t){return t.id===i};do{i=e+n++}while(V.findIndex(t,a)>=0);return i}function $e(t){return"top"===t||"bottom"===t}function Je(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}z._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var Qe=function(t,e){return this.construct(t,e),this};V.extend(Qe.prototype,{construct:function(t,e){var n=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=Xe(z.global,z[t.type],t.options||{}),t}(e);var i=Fe.acquireContext(t,e),a=i&&i.canvas,r=a&&a.height,o=a&&a.width;n.id=V.uid(),n.ctx=i,n.canvas=a,n.config=e,n.width=o,n.height=r,n.aspectRatio=r?o/r:null,n.options=e.options,n._bufferedRender=!1,n._layers=[],n.chart=n,n.controller=n,Qe.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),i&&a?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Le.notify(t,"beforeInit"),V.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),Le.notify(t,"afterInit"),t},clear:function(){return V.canvas.clear(this),this},stop:function(){return $.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(V.getMaximumWidth(i))),o=Math.max(0,Math.floor(a?r/a:V.getMaximumHeight(i)));if((e.width!==r||e.height!==o)&&(i.width=e.width=r,i.height=e.height=o,i.style.width=r+"px",i.style.height=o+"px",V.retinaScale(e,n.devicePixelRatio),!t)){var s={width:r,height:o};Le.notify(e,"resize",[s]),n.onResize&&n.onResize(e,s),e.stop(),e.update({duration:n.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;V.each(e.xAxes,(function(t,n){t.id||(t.id=Ze(e.xAxes,"x-axis-",n))})),V.each(e.yAxes,(function(t,n){t.id||(t.id=Ze(e.yAxes,"y-axis-",n))})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,n=t.scales||{},i=[],a=Object.keys(n).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),V.each(i,(function(e){var i=e.options,r=i.id,o=Ye(i.type,e.dtype);$e(i.position)!==$e(e.dposition)&&(i.position=e.dposition),a[r]=!0;var s=null;if(r in n&&n[r].type===o)(s=n[r]).options=i,s.ctx=t.ctx,s.chart=t;else{var l=Oe.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:i,ctx:t.ctx,chart:t}),n[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)})),V.each(a,(function(t,e){t||delete n[e]})),t.scales=n,Oe.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,n=this,i=[],a=n.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=n.getDatasetMeta(t),s=r.type||n.config.type;if(o.type&&o.type!==s&&(n.destroyDatasetMeta(t),o=n.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=$t[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(n,t),i.push(o.controller)}}return i},resetElements:function(){var t=this;V.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,n,i=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),Ke(i),Le._invalidate(i),!1!==Le.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var a=i.buildOrUpdateControllers();for(e=0,n=i.data.datasets.length;e<n;e++)i.getDatasetMeta(e).controller.buildOrUpdateElements();i.updateLayout(),i.options.animation&&i.options.animation.duration&&V.each(a,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Le.notify(i,"afterUpdate"),i._layers.sort(Je("z","_idx")),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){var t=this;!1!==Le.notify(t,"beforeLayout")&&(ge.update(this,this.width,this.height),t._layers=[],V.each(t.boxes,(function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())}),t),t._layers.forEach((function(t,e){t._idx=e})),Le.notify(t,"afterScaleUpdate"),Le.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==Le.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Le.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==Le.notify(this,"beforeDatasetUpdate",[n])&&(e.controller._update(),Le.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var n=e.options.animation,i=Ye(t.duration,n&&n.duration),a=t.lazy;if(!1!==Le.notify(e,"beforeRender")){var r=function(t){Le.notify(e,"afterRender"),V.callback(n&&n.onComplete,[t],e)};if(n&&i){var o=new Z({numSteps:i/16.66,easing:t.easing||n.easing,render:function(t,e){var n=V.easing.effects[e.easing],i=e.currentStep,a=i/e.numSteps;t.draw(n(a),a,i)},onAnimationProgress:n.onProgress,onAnimationComplete:r});$.addAnimation(e,o,i,a)}else e.draw(),r(new Z({numSteps:0,chart:e}));return e}},draw:function(t){var e,n,i=this;if(i.clear(),V.isNullOrUndef(t)&&(t=1),i.transition(t),!(i.width<=0||i.height<=0)&&!1!==Le.notify(i,"beforeDraw",[t])){for(n=i._layers,e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(i.chartArea);for(i.drawDatasets(t);e<n.length;++e)n[e].draw(i.chartArea);i._drawTooltip(t),Le.notify(i,"afterDraw",[t])}},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,n,i=[];for(e=0,n=(this.data.datasets||[]).length;e<n;++e)t&&!this.isDatasetVisible(e)||i.push(this.getDatasetMeta(e));return i.sort(Je("order","index")),i},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,n;if(!1!==Le.notify(this,"beforeDatasetsDraw",[t])){for(n=(e=this._getSortedVisibleDatasetMetas()).length-1;n>=0;--n)this.drawDataset(e[n],t);Le.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n={meta:t,index:t.index,easingValue:e};!1!==Le.notify(this,"beforeDatasetDraw",[n])&&(t.controller.draw(e),Le.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==Le.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),Le.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return ae.modes.single(this,t)},getElementsAtEvent:function(t){return ae.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return ae.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=ae.modes[e];return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return ae.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e];i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var t,e,n=this,i=n.canvas;for(n.stop(),t=0,e=n.data.datasets.length;t<e;++t)n.destroyDatasetMeta(t);i&&(n.unbindEvents(),V.canvas.clear(n),Fe.releaseContext(n.ctx),n.canvas=null,n.ctx=null),Le.notify(n,"destroy"),delete Qe.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Ue({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};V.each(t.options.events,(function(i){Fe.addEventListener(t,i,n),e[i]=n})),t.options.responsive&&(n=function(){t.resize()},Fe.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,V.each(e,(function(e,n){Fe.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"set":"remove";for(a=0,r=t.length;a<r;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[o+"HoverStyle"](i);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==Le.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);n&&(i=n._start?n.handleEvent(t):i|n.handleEvent(t)),Le.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):i&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,i=n.options||{},a=i.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,a.mode,a),V.callback(i.onHover||i.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||i.onClick&&i.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,a.mode,!1),n.active.length&&a.mode&&n.updateHoverStyle(n.active,a.mode,!0),e=!V.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),Qe.instances={};var tn=Qe;Qe.Controller=Qe,Qe.types={},V.configMerge=Xe,V.scaleMerge=Ge;function en(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function nn(t){this.options=t||{}}V.extend(nn.prototype,{formats:en,parse:en,format:en,add:en,diff:en,startOf:en,endOf:en,_create:function(t){return t}}),nn.override=function(t){V.extend(nn.prototype,t)};var an={_date:nn},rn={formatters:{values:function(t){return V.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var a=V.log10(Math.abs(i)),r="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var o=V.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(V.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}},on=V.isArray,sn=V.isNullOrUndef,ln=V.valueOrDefault,un=V.valueAtIndexOrDefault;function dn(t,e,n){var i,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(n&&(i=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?i:-i)<s-1e-6||o>l+1e-6)))return o}function hn(t,e,n,i){var a,r,o,s,l,u,d,h,c,f,g,p,m,v=n.length,b=[],x=[],y=[];for(a=0;a<v;++a){if(s=n[a].label,l=n[a].major?e.major:e.minor,t.font=u=l.string,d=i[u]=i[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,sn(s)||on(s)){if(on(s))for(r=0,o=s.length;r<o;++r)g=s[r],sn(g)||on(g)||(c=V.measureText(t,d.data,d.gc,c,g),f+=h)}else c=V.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),x.push(f),y.push(h/2)}function _(t){return{width:b[t]||0,height:x[t]||0,offset:y[t]||0}}return function(t,e){V.each(t,(function(t){var n,i=t.gc,a=i.length/2;if(a>e){for(n=0;n<a;++n)delete t.data[i[n]];i.splice(0,a)}}))}(i,v),p=b.indexOf(Math.max.apply(null,b)),m=x.indexOf(Math.max.apply(null,x)),{first:_(0),last:_(v-1),widest:_(p),highest:_(m)}}function cn(t){return t.drawTicks?t.tickMarkLength:0}function fn(t){var e,n;return t.display?(e=V.options._parseFont(t),n=V.options.toPadding(t.padding),e.lineHeight+n.height):0}function gn(t,e){return V.extend(V.options._parseFont({fontFamily:ln(e.fontFamily,t.fontFamily),fontSize:ln(e.fontSize,t.fontSize),fontStyle:ln(e.fontStyle,t.fontStyle),lineHeight:ln(e.lineHeight,t.lineHeight)}),{color:V.options.resolve([e.fontColor,t.fontColor,z.global.defaultFontColor])})}function pn(t){var e=gn(t,t.minor);return{minor:e,major:t.major.enabled?gn(t,t.major):e}}function mn(t){var e,n,i,a=[];for(n=0,i=t.length;n<i;++n)void 0!==(e=t[n])._index&&a.push(e);return a}function vn(t,e,n,i){var a,r,o,s,l=ln(n,0),u=Math.min(ln(i,t.length),t.length),d=0;for(e=Math.ceil(e),i&&(e=(a=i-n)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}z._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:rn.formatters.values,minor:{},major:{}}});var bn=X.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]},mergeTicksOptions:function(){},beforeUpdate:function(){V.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=V.extend({left:0,right:0,top:0,bottom:0},n),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],i=0,a=l.ticks.length;i<a;++i)o.push({value:l.ticks[i],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var n=[],i=t.length/e,a=0,r=t.length;a<r;a+=i)n.push(t[Math.floor(a)]);return n}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,n=this,i=n.options.ticks.reverse;n.isHorizontal()?(t=n.left,e=n.right):(t=n.top,e=n.bottom,i=!i),n._startPixel=t,n._endPixel=e,n._reversePixels=i,n._length=e-t},afterUpdate:function(){V.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){V.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){V.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){V.callback(this.options.beforeDataLimits,[this])},determineDataLimits:V.noop,afterDataLimits:function(){V.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){V.callback(this.options.beforeBuildTicks,[this])},buildTicks:V.noop,afterBuildTicks:function(t){var e=this;return on(t)&&t.length?V.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=V.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){V.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){V.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){V.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,n,i,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,n=t.highest.height-t.highest.offset,i=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:i/(d-1))&&(a=i/(d-(l.offset?.5:1)),r=s.maxHeight-cn(l.gridLines)-u.padding-fn(l.scaleLabel),o=Math.sqrt(e*e+n*n),f=V.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(n/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){V.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){V.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=t.chart,i=t.options,a=i.ticks,r=i.scaleLabel,o=i.gridLines,s=t._isVisible(),l="bottom"===i.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=cn(o)+fn(r)),u?s&&(e.height=cn(o)+fn(r)):e.height=t.maxHeight,a.display&&s){var d=pn(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,p=h.highest,m=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,x=V.toRadians(t.labelRotation),y=Math.cos(x),_=Math.sin(x),k=_*g.width+y*(p.height-(b?p.offset:0))+(b?0:m);e.height=Math.min(t.maxHeight,e.height+k+v);var w,M,S=t.getPixelForTick(0)-t.left,C=t.right-t.getPixelForTick(t.getTicks().length-1);b?(w=l?y*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):y*f.width+_*f.offset):(w=c.width/2,M=f.width/2),t.paddingLeft=Math.max((w-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-C)*t.width/(t.width-C),0)+3}else{var P=a.mirror?0:g.width+v+m;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=n.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){V.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(sn(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,n,i,a=this;for(a.ticks=t.map((function(t){return t.value})),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),n=0,i=t.length;n<i;++n)t[n].label=e[n];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=hn(t.ctx,pn(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,n,i,a;return on(t)?(e=+this.getRightValue(t[0]),n=+this.getRightValue(t[1]),i=Math.min(e,n),a=Math.max(e,n)):(e=void 0,n=t=+this.getRightValue(t),i=t,a=t),{min:i,max:a,start:e,end:n}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:V.noop,getPixelForValue:V.noop,getValueForPixel:V.noop,getPixelForTick:function(t){var e=this.options.offset,n=this._ticks.length,i=1/Math.max(n-(e?0:1),1);return t<0||t>n-1?null:this.getPixelForDecimal(t*i+(e?i/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,i,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,n,i=[];for(e=0,n=t.length;e<n;e++)t[e].major&&i.push(e);return i}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,n){var i,a,r=0,o=e[0];for(n=Math.ceil(n),i=0;i<t.length;i++)a=t[i],i===o?(a._index=i,o=e[++r*n]):delete a.label}(t,l,u/s),mn(t);if(i=function(t,e,n,i){var a,r,o,s,l=function(t){var e,n,i=t.length;if(i<2)return!1;for(n=t[0],e=1;e<i;++e)if(t[e]-t[e-1]!==n)return!1;return n}(t),u=(e.length-1)/i;if(!l)return Math.max(u,1);for(o=0,s=(a=V.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,n=u-1;e<n;e++)vn(t,i,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,vn(t,i,V.isNullOrUndef(a)?0:d-a,d),vn(t,i,h,V.isNullOrUndef(a)?t.length:h+a),mn(t)}return vn(t,i),mn(t)},_tickSize:function(){var t=this.options.ticks,e=V.toRadians(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*n>o*i?o/n:s/i:s*i<o*n?s/n:o/i},_isVisible:function(){var t,e,n,i=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=i.data.datasets.length;t<e;++t)if(i.isDatasetVisible(t)&&((n=i.getDatasetMeta(t)).xAxisID===this.id||n.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,n,i,a,r,o,s,l,u,d,h,c,f,g,p,m,v,b=this,x=b.chart,y=b.options,_=y.gridLines,k=y.position,w=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,C=S.length+(w?1:0),P=cn(_),A=[],D=_.drawBorder?un(_.lineWidth,0,0):0,T=D/2,I=V._alignPixel,F=function(t){return I(x,t,D)};for("top"===k?(e=F(b.bottom),s=b.bottom-P,u=e-T,h=F(t.top)+T,f=t.bottom):"bottom"===k?(e=F(b.top),h=t.top,f=F(t.bottom)-T,s=e+T,u=b.top+P):"left"===k?(e=F(b.right),o=b.right-P,l=e-T,d=F(t.left)+T,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-T,o=e+T,l=b.left+P),n=0;n<C;++n)i=S[n]||{},sn(i.label)&&n<S.length||(n===b.zeroLineIndex&&y.offset===w?(g=_.zeroLineWidth,p=_.zeroLineColor,m=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=un(_.lineWidth,n,1),p=un(_.color,n,"rgba(0,0,0,0.1)"),m=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=dn(b,i._index||n,w))&&(r=I(x,a,g),M?o=l=d=c=r:s=u=h=f=r,A.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:p,borderDash:m,borderDashOffset:v})));return A.ticksLength=C,A.borderValue=e,A},_computeLabelItems:function(){var t,e,n,i,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,p=f.position,m=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,x=pn(g),y=g.padding,_=cn(f.gridLines),k=-V.toRadians(c.labelRotation),w=[];for("top"===p?(r=c.bottom-_-y,o=k?"left":"center"):"bottom"===p?(r=c.top+_+y,o=k?"right":"center"):"left"===p?(a=c.right-(m?0:_)-y,o=m?"left":"right"):(a=c.left+(m?0:_)+y,o=m?"right":"left"),t=0,e=b.length;t<e;++t)i=(n=b[t]).label,sn(i)||(s=c.getPixelForTick(n._index||t)+g.labelOffset,u=(l=n.major?x.major:x.minor).lineHeight,d=on(i)?i.length:1,v?(a=s,h="top"===p?((k?1:.5)-d)*u:(k?0:.5)*u):(r=s,h=(1-d)*u/2),w.push({x:a,y:r,rotation:k,label:i,font:l,textOffset:h,textAlign:o}));return w},_drawGrid:function(t){var e=this,n=e.options.gridLines;if(n.display){var i,a,r,o,s,l=e.ctx,u=e.chart,d=V._alignPixel,h=n.drawBorder?un(n.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)i=(s=c[r]).width,a=s.color,i&&a&&(l.save(),l.lineWidth=i,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),n.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),n.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,p,m,v=h,b=un(n.lineWidth,c.ticksLength-1,1),x=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,p=m=x):(p=d(u,e.top,v)-v/2,m=d(u,e.bottom,b)+b/2,f=g=x),l.lineWidth=h,l.strokeStyle=un(n.color,0),l.beginPath(),l.moveTo(f,p),l.lineTo(g,m),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,n,i,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,i=d.length;e<i;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,on(s))for(n=0,a=s.length;n<a;++n)u.fillText(""+s[n],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,n=t.options,i=n.scaleLabel;if(i.display){var a,r,o=ln(i.fontColor,z.global.defaultFontColor),s=V.options._parseFont(i),l=V.options.toPadding(i.padding),u=s.lineHeight/2,d=n.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(i.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&n!==i&&t.draw===t._draw?[{z:i,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:n,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:n,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,n=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter((function(i){return(!t||i.type===t)&&(n?i.xAxisID===e.id:i.yAxisID===e.id)}))}});bn.prototype._draw=bn.prototype.draw;var xn=bn,yn=V.isNullOrUndef,_n=xn.extend({determineDataLimits:function(){var t,e=this,n=e._getLabels(),i=e.options.ticks,a=i.min,r=i.max,o=0,s=n.length-1;void 0!==a&&(t=n.indexOf(a))>=0&&(o=t),void 0!==r&&(t=n.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=n[o],e.max=n[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,n=this.maxIndex;this.ticks=0===e&&n===t.length-1?t:t.slice(e,n+1)},getLabelForIndex:function(t,e){var n=this.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(n.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,n=t.ticks;xn.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),n&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(n.length-(e?0:1),1))},getPixelForValue:function(t,e,n){var i,a,r,o=this;return yn(e)||yn(n)||(t=o.chart.data.datasets[n].data[e]),yn(t)||(i=o.isHorizontal()?t.x:t.y),(void 0!==i||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=V.valueOrDefault(i,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),kn={position:"bottom"};_n._defaults=kn;var wn=V.noop,Mn=V.isNullOrUndef;var Sn=xn.extend({getRightValue:function(t){return"string"==typeof t?+t:xn.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=V.sign(t.min),i=V.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,n=e.stepSize,i=e.maxTicksLimit;return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this._computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:wn,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:V.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var n,i,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=V.niceNum((g-f)/u/l)*l;if(p<1e-14&&Mn(d)&&Mn(h))return[f,g];(r=Math.ceil(g/p)-Math.floor(f/p))>u&&(p=V.niceNum(r*p/u/l)*l),s||Mn(c)?n=Math.pow(10,V._decimalPlaces(p)):(n=Math.pow(10,c),p=Math.ceil(p*n)/n),i=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!Mn(d)&&V.almostWhole(d/p,p/1e3)&&(i=d),!Mn(h)&&V.almostWhole(h/p,p/1e3)&&(a=h)),r=(a-i)/p,r=V.almostEquals(r,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),i=Math.round(i*n)/n,a=Math.round(a*n)/n,o.push(Mn(d)?i:d);for(var m=1;m<r;++m)o.push(Math.round((i+m*p)*n)/n);return o.push(Mn(h)?a:h),o}(i,t);t.handleDirectionalChanges(),t.max=V.max(a),t.min=V.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),xn.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,n=e.getTicks(),i=e.min,a=e.max;xn.prototype._configure.call(e),e.options.offset&&n.length&&(i-=t=(a-i)/Math.max(n.length-1,1)/2,a+=t),e._startValue=i,e._endValue=a,e._valueRange=a-i}}),Cn={position:"left",ticks:{callback:rn.formatters.linear}};function Pn(t,e,n,i){var a,r,o=t.options,s=function(t,e,n){var i=[n.type,void 0===e&&void 0===n.stack?n.index:"",n.stack].join(".");return void 0===t[i]&&(t[i]={pos:[],neg:[]}),t[i]}(e,o.stacked,n),l=s.pos,u=s.neg,d=i.length;for(a=0;a<d;++a)r=t._parseValue(i[a]),isNaN(r.min)||isNaN(r.max)||n.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function An(t,e,n){var i,a,r=n.length;for(i=0;i<r;++i)a=t._parseValue(n[i]),isNaN(a.min)||isNaN(a.max)||e.data[i].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var Dn=Sn.extend({determineDataLimits:function(){var t,e,n,i,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)n=o[(e=s[t]).index].data,l?Pn(a,u,e,n):An(a,e,n);V.each(u,(function(t){i=t.pos.concat(t.neg),a.min=Math.min(a.min,V.min(i)),a.max=Math.max(a.max,V.max(i))})),a.min=V.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=V.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=V.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),Tn=Cn;Dn._defaults=Tn;var In=V.valueOrDefault,Fn=V.math.log10;var Ln={position:"left",ticks:{callback:rn.formatters.logarithmic}};function On(t,e){return V.isFinite(t)&&t>=0?t:e}var Rn=xn.extend({determineDataLimits:function(){var t,e,n,i,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(i=u[t].data).length;a<r;a++){var p=f[g];n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(p[a]=p[a]||0,p[a]+=n.max)}}V.each(f,(function(t){if(t.length>0){var e=V.min(t),n=V.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,n)}}))}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(i=u[t].data).length;a<r;a++)n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(o.min=Math.min(n.min,o.min),o.max=Math.max(n.max,o.max),0!==n.min&&(o.minNotZero=Math.min(n.min,o.minNotZero)));o.min=V.isFinite(o.min)?o.min:null,o.max=V.isFinite(o.max)?o.max:null,o.minNotZero=V.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=On(e.min,t.min),t.max=On(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(Fn(t.min))-1),t.max=Math.pow(10,Math.floor(Fn(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(Fn(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(Fn(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(Fn(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:On(e.min),max:On(e.max)},a=t.ticks=function(t,e){var n,i,a=[],r=In(t.min,Math.pow(10,Math.floor(Fn(e.min)))),o=Math.floor(Fn(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(n=Math.floor(Fn(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(r),r=i*Math.pow(10,n)):(n=Math.floor(Fn(r)),i=Math.floor(r/Math.pow(10,n)));var l=n<0?Math.pow(10,Math.abs(n)):1;do{a.push(r),10===++i&&(i=1,l=++n>=0?1:l),r=Math.round(i*Math.pow(10,n)*l)/l}while(n<o||n===o&&i<s);var u=In(t.max,r);return a.push(u),a}(i,t);t.max=V.max(a),t.min=V.min(a),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),xn.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(Fn(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,n=0;xn.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),n=In(t.options.ticks.fontSize,z.global.defaultFontSize)/t._length),t._startValue=Fn(e),t._valueOffset=n,t._valueRange=(Fn(t.max)-Fn(e))/(1-n)},getPixelForValue:function(t){var e=this,n=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(n=(Fn(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(n)},getValueForPixel:function(t){var e=this,n=e.getDecimalForPixel(t);return 0===n&&0===e.min?0:Math.pow(10,e._startValue+(n-e._valueOffset)*e._valueRange)}}),zn=Ln;Rn._defaults=zn;var Nn=V.valueOrDefault,Bn=V.valueAtIndexOrDefault,En=V.options.resolve,Wn={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:rn.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Vn(t){var e=t.ticks;return e.display&&t.display?Nn(e.fontSize,z.global.defaultFontSize)+2*e.backdropPaddingY:0}function Hn(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n,end:e}:{start:e,end:e+n}}function jn(t){return 0===t||180===t?"center":t<180?"left":"right"}function qn(t,e,n,i){var a,r,o=n.y+i/2;if(V.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],n.x,o),o+=i;else t.fillText(e,n.x,o)}function Un(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function Yn(t){return V.isNumber(t)?t:0}var Gn=Sn.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Vn(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;V.each(e.data.datasets,(function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);V.each(a.data,(function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Vn(this.options))},convertTicksToLabels:function(){var t=this;Sn.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map((function(){var e=V.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""}))},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,n,i,a=V.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){i=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],n=V.isArray(u)?{w:V.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=n;var h=t.getIndexAngle(e),c=V.toDegrees(h)%360,f=Hn(c,i.x,n.w,0,180),g=Hn(c,i.y,n.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b);a=Yn(a),r=Yn(r),o=Yn(o),s=Yn(s),i.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-a.paddingTop-i-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,n=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(n<0?n+360:n)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(V.isNullOrUndef(t))return NaN;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,n=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},_drawGrid:function(){var t,e,n,i=this,a=i.ctx,r=i.options,o=r.gridLines,s=r.angleLines,l=Nn(s.lineWidth,o.lineWidth),u=Nn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,n=t.options,i=n.pointLabels,a=Vn(n),r=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),o=V.options._parseFont(i);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=Bn(i.fontColor,s,z.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=V.toDegrees(h);e.textAlign=jn(c),Un(c,t._pointLabelSizes[s],u),qn(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(i),o.display&&V.each(i.ticks,(function(t,n){0!==n&&(e=i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]),function(t,e,n,i){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=Bn(e.color,i-1),u=Bn(e.lineWidth,i-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI);else{a=t.getPointPosition(0,n),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,n),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(i,o,e,n))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(En([s.borderDash,o.borderDash,[]])),a.lineDashOffset=En([s.borderDashOffset,o.borderDashOffset,0])),t=i.chart.data.labels.length-1;t>=0;t--)e=i.getDistanceFromCenterForValue(r.ticks.reverse?i.min:i.max),n=i.getPointPosition(t,e),a.beginPath(),a.moveTo(i.xCenter,i.yCenter),a.lineTo(n.x,n.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,n=t.options.ticks;if(n.display){var i,a,r=t.getIndexAngle(0),o=V.options._parseFont(n),s=Nn(n.fontColor,z.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",V.each(t.ticks,(function(r,l){(0!==l||n.reverse)&&(i=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),n.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=n.backdropColor,e.fillRect(-a/2-n.backdropPaddingX,-i-o.size/2-n.backdropPaddingY,a+2*n.backdropPaddingX,o.size+2*n.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-i))})),e.restore()}},_drawTitle:V.noop}),Xn=Wn;Gn._defaults=Xn;var Kn=V._deprecated,Zn=V.options.resolve,$n=V.valueOrDefault,Jn=Number.MIN_SAFE_INTEGER||-9007199254740991,Qn=Number.MAX_SAFE_INTEGER||9007199254740991,ti={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ei=Object.keys(ti);function ni(t,e){return t-e}function ii(t){return V.valueOrDefault(t.time.min,t.ticks.min)}function ai(t){return V.valueOrDefault(t.time.max,t.ticks.max)}function ri(t,e,n,i){var a=function(t,e,n){for(var i,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(i=o+s>>1)-1]||null,r=t[i],!a)return{lo:null,hi:r};if(r[e]<n)o=i+1;else{if(!(a[e]>n))return{lo:a,hi:r};s=i-1}}return{lo:r,hi:null}}(t,e,n),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(n-r[e])/s:0,u=(o[i]-r[i])*l;return r[i]+u}function oi(t,e){var n=t._adapter,i=t.options.time,a=i.parser,r=a||i.format,o=e;return"function"==typeof a&&(o=a(o)),V.isFinite(o)||(o="string"==typeof r?n.parse(o,r):n.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),V.isFinite(o)||(o=n.parse(o))),o)}function si(t,e){if(V.isNullOrUndef(e))return null;var n=t.options.time,i=oi(t,t.getRightValue(e));return null===i?i:(n.round&&(i=+t._adapter.startOf(i,n.round)),i)}function li(t,e,n,i){var a,r,o,s=ei.length;for(a=ei.indexOf(t);a<s-1;++a)if(o=(r=ti[ei[a]]).steps?r.steps:Qn,r.common&&Math.ceil((n-e)/(o*r.size))<=i)return ei[a];return ei[s-1]}function ui(t,e,n){var i,a,r=[],o={},s=e.length;for(i=0;i<s;++i)o[a=e[i]]=i,r.push({value:a,major:!1});return 0!==s&&n?function(t,e,n,i){var a,r,o=t._adapter,s=+o.startOf(e[0].value,i),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,i))(r=n[a])>=0&&(e[r].major=!0);return e}(t,r,o,n):r}var di=xn.extend({initialize:function(){this.mergeTicksOptions(),xn.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,n=e.time||(e.time={}),i=t._adapter=new an._date(e.adapters.date);return Kn("time scale",n.format,"time.format","time.parser"),Kn("time scale",n.min,"time.min","ticks.min"),Kn("time scale",n.max,"time.max","ticks.max"),V.mergeIf(n.displayFormats,i.formats()),xn.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),xn.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=Qn,f=Jn,g=[],p=[],m=[],v=s._getLabels();for(t=0,n=v.length;t<n;++t)m.push(si(s,v[t]));for(t=0,n=(l.data.datasets||[]).length;t<n;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,V.isObject(a[0]))for(p[t]=[],e=0,i=a.length;e<i;++e)r=si(s,a[e]),g.push(r),p[t][e]=r;else p[t]=m.slice(0),o||(g=g.concat(m),o=!0);else p[t]=[];m.length&&(c=Math.min(c,m[0]),f=Math.max(f,m[m.length-1])),g.length&&(g=n>1?function(t){var e,n,i,a={},r=[];for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,r.push(i));return r}(g).sort(ni):g.sort(ni),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=si(s,ii(d))||c,f=si(s,ai(d))||f,c=c===Qn?+u.startOf(Date.now(),h):c,f=f===Jn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:p,labels:m}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,o=i.options,s=o.ticks,l=o.time,u=i._timestamps,d=[],h=i.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,n,i){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||li(s.minUnit,e,n,i),u=Zn([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(n,e,l)>1e5*u)throw e+" and "+n+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<n;a=+r.add(a,u,l))c.push(a);return a!==n&&"ticks"!==o.bounds||c.push(a),c}(i,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=si(i,ii(o))||a,r=si(i,ai(o))||r,t=0,e=u.length;t<e;++t)(n=u[t])>=a&&n<=r&&d.push(n);return i.min=a,i.max=r,i._unit=l.unit||(s.autoSkip?li(l.minUnit,i.min,i.max,h):function(t,e,n,i,a){var r,o;for(r=ei.length-1;r>=ei.indexOf(n);r--)if(o=ei[r],ti[o].common&&t._adapter.diff(a,i,o)>=e-1)return o;return ei[n?ei.indexOf(n):0]}(i,d.length,l.minUnit,i.min,i.max)),i._majorUnit=s.major.enabled&&"year"!==i._unit?function(t){for(var e=ei.indexOf(t)+1,n=ei.length;e<n;++e)if(ti[ei[e]].common)return ei[e]}(i._unit):void 0,i._table=function(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<n&&d.push(s);for(d.push(n),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(i._timestamps.data,a,r,f),i._offsets=function(t,e,n,i,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=ri(t,"time",e[0],"pos"),s=1===e.length?1-r:(ri(t,"time",e[1],"pos")-r)/2,o=ri(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-ri(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(i._table,d,0,0,o),s.reverse&&d.reverse(),ui(i,d,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n._adapter,a=n.chart.data,r=n.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return V.isObject(s)&&(o=n.getRightValue(s)),r.tooltipFormat?i.format(oi(n,o),r.tooltipFormat):"string"==typeof o?o:i.format(oi(n,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,n,i){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=n[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,i||(c?u:s)),g=c?h.major:h.minor,p=Zn([g.callback,g.userCallback,h.callback,h.userCallback]);return p?p(f,e,n):f},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(t[e].value,e,t));return i},getPixelForOffset:function(t){var e=this._offsets,n=ri(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+n)*e.factor)},getPixelForValue:function(t,e,n){var i=null;if(void 0!==e&&void 0!==n&&(i=this._timestamps.datasets[n][e]),null===i&&(i=si(this,t)),null!==i)return this.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end,i=ri(this._table,"pos",n,"time");return this._adapter._create(i)},_getLabelSize:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,i=V.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),r=Math.sin(i),o=$n(e.fontSize,z.global.defaultFontSize);return{w:n*a+o*r,h:n*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,n=e.options.time,i=n.displayFormats,a=i[n.unit]||i.millisecond,r=e.tickFormatFunction(t,0,ui(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),hi={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};di._defaults=hi;var ci={category:_n,linear:Dn,logarithmic:Rn,radialLinear:Gn,time:di},fi={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};an._date.override("function"==typeof t?{_id:"moment",formats:function(){return fi},parse:function(e,n){return"string"==typeof e&&"string"==typeof n?e=t(e,n):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,n){return t(e).format(n)},add:function(e,n,i){return t(e).add(n,i).valueOf()},diff:function(e,n,i){return t(e).diff(t(n),i)},startOf:function(e,n,i){return e=t(e),"isoWeek"===n?e.isoWeekday(i).valueOf():e.startOf(n).valueOf()},endOf:function(e,n){return t(e).endOf(n).valueOf()},_create:function(e){return t(e)}}:{}),z._set("global",{plugins:{filler:{propagate:!0}}});var gi={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return V.isArray(e)?function(t,n){return e[n]}:function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};function pi(t,e,n){var i,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function mi(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,n,i,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,n=s.ticks.reverse?o.min:o.max,i=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:n):o.getBasePosition(a),s.gridLines.circular&&(r.cx=i.x,r.cy=i.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePixel&&(r=i.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(V.isFinite(r))return{x:(e=i.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function vi(t,e,n){var i,a=t[e].fill,r=[e];if(!n)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(i=t[a]))return!1;if(i.visible)return a;r.push(a),a=i.fill}return!1}function bi(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),gi[n](t))}function xi(t){return t&&!t.skip}function yi(t,e,n,i,a){var r,o,s,l;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)V.canvas.lineTo(t,e[r-1],e[r]);if(void 0===n[0].angle)for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)V.canvas.lineTo(t,n[r],n[r-1],!0);else for(o=n[0].cx,s=n[0].cy,l=Math.sqrt(Math.pow(n[0].x-o,2)+Math.pow(n[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,n[r].angle,n[r-1].angle,!0)}}function _i(t,e,n,i,a,r){var o,s,l,u,d,h,c,f,g=e.length,p=i.spanGaps,m=[],v=[],b=0,x=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=n(u=e[l=o%g]._view,l,i),h=xi(u),c=xi(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=m.push(u),x=v.push(d)):b&&x&&(p?(h&&m.push(u),c&&v.push(d)):(yi(t,m,v,b,x),b=x=0,m=[],v=[]));yi(t,m,v,b,x),t.closePath(),t.fillStyle=a,t.fill()}var ki={id:"filler",afterDatasetsUpdate:function(t,e){var n,i,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(i=0;i<o;++i)r=null,(a=(n=t.getDatasetMeta(i)).dataset)&&a._model&&a instanceof _t.Line&&(r={visible:t.isDatasetVisible(i),fill:pi(a,i,o),chart:t,el:a}),n.$filler=r,l.push(r);for(i=0;i<o;++i)(r=l[i])&&(r.fill=vi(l,i,s),r.boundary=mi(r),r.mapper=bi(r))},beforeDatasetsDraw:function(t){var e,n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(n=l.length-1;n>=0;--n)(e=l[n].$filler)&&e.visible&&(a=(i=e.el)._view,r=i._children||[],o=e.mapper,s=a.backgroundColor||z.global.defaultColor,o&&s&&r.length&&(V.canvas.clipArea(u,t.chartArea),_i(u,r,o,a,s,i._loop),V.canvas.unclipArea(u)))}},wi=V.rtl.getRtlAdapter,Mi=V.noop,Si=V.valueOrDefault;function Ci(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}z._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,n=t.options.legend||{},i=n.labels&&n.labels.usePointStyle;return t._getSortedDatasetMetas().map((function(n){var a=n.controller.getStyle(i?0:void 0);return{text:e[n.index].label,fillStyle:a.backgroundColor,hidden:!t.isDatasetVisible(n.index),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,pointStyle:a.pointStyle,rotation:a.rotation,datasetIndex:n.index}}),this)}}},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,n=r.length;e<n;e++)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&i.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Pi=X.extend({initialize:function(t){V.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Mi,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Mi,beforeSetDimensions:Mi,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Mi,beforeBuildLabels:Mi,buildLabels:function(){var t=this,e=t.options.labels||{},n=V.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:Mi,beforeFit:Mi,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,r=V.options._parseFont(n),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",V.each(t.legendItems,(function(t,e){var i=Ci(n,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+i+2*n.padding>l.width)&&(h+=o+n.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:i,height:o},d[d.length-1]+=i+n.padding})),l.height+=h}else{var c=n.padding,f=t.columnWidths=[],g=t.columnHeights=[],p=n.padding,m=0,v=0;V.each(t.legendItems,(function(t,e){var i=Ci(n,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(p+=m+n.padding,f.push(m),g.push(v),m=0,v=0),m=Math.max(m,i),v+=o+c,s[e]={left:0,top:0,width:i,height:o}})),p+=m,f.push(m),g.push(v),l.width+=p}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Mi,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=z.global,a=i.defaultColor,r=i.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=wi(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Si(n.fontColor,i.defaultFontColor),g=V.options._parseFont(n),p=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var m=Ci(n,p),v=t.legendHitBoxes,b=function(t,i){switch(e.align){case"start":return n.padding;case"end":return t-i;default:return(t-i+n.padding)/2}},x=t.isHorizontal();d=x?{x:t.left+b(l,u[0]),y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+b(o,s[0]),line:0},V.rtl.overrideTextDirection(t.ctx,e.textDirection);var y=p+n.padding;V.each(t.legendItems,(function(e,i){var f=c.measureText(e.text).width,g=m+p/2+f,_=d.x,k=d.y;h.setWidth(t.minSize.width),x?i>0&&_+g+n.padding>t.left+t.minSize.width&&(k=d.y+=y,d.line++,_=d.x=t.left+b(l,u[d.line])):i>0&&k+y>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+n.padding,d.line++,k=d.y=t.top+b(o,s[d.line]));var w=h.x(_);!function(t,e,i){if(!(isNaN(m)||m<=0)){c.save();var o=Si(i.lineWidth,r.borderWidth);if(c.fillStyle=Si(i.fillStyle,a),c.lineCap=Si(i.lineCap,r.borderCapStyle),c.lineDashOffset=Si(i.lineDashOffset,r.borderDashOffset),c.lineJoin=Si(i.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Si(i.strokeStyle,a),c.setLineDash&&c.setLineDash(Si(i.lineDash,r.borderDash)),n&&n.usePointStyle){var s=m*Math.SQRT2/2,l=h.xPlus(t,m/2),u=e+p/2;V.canvas.drawPoint(c,i.pointStyle,s,l,u,i.rotation)}else c.fillRect(h.leftForLtr(t,m),e,m,p),0!==o&&c.strokeRect(h.leftForLtr(t,m),e,m,p);c.restore()}}(w,k,e),v[i].left=h.leftForLtr(w,v[i].width),v[i].top=k,function(t,e,n,i){var a=p/2,r=h.xPlus(t,m+a),o=e+a;c.fillText(n.text,r,o),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,i),o),c.stroke())}(w,k,e,f),x?d.x+=g+n.padding:d.y+=y})),V.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var n,i,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,n=0;n<a.length;++n)if(t>=(i=a[n]).left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height)return r.legendItems[n];return null},handleEvent:function(t){var e,n=this,i=n.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!i.onHover&&!i.onLeave)return}else{if("click"!==a)return;if(!i.onClick)return}e=n._getLegendItemAt(t.x,t.y),"click"===a?e&&i.onClick&&i.onClick.call(n,t.native,e):(i.onLeave&&e!==n._hoveredItem&&(n._hoveredItem&&i.onLeave.call(n,t.native,n._hoveredItem),n._hoveredItem=e),i.onHover&&e&&i.onHover.call(n,t.native,e))}});function Ai(t,e){var n=new Pi({ctx:t.ctx,options:e,chart:t});ge.configure(t,n,e),ge.addBox(t,n),t.legend=n}var Di={id:"legend",_element:Pi,beforeInit:function(t){var e=t.options.legend;e&&Ai(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(V.mergeIf(e,z.global.legend),n?(ge.configure(t,n,e),n.options=e):Ai(t,e)):n&&(ge.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}},Ti=V.noop;z._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Ii=X.extend({initialize:function(t){V.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Ti,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Ti,beforeSetDimensions:Ti,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Ti,beforeBuildLabels:Ti,buildLabels:Ti,afterBuildLabels:Ti,beforeFit:Ti,fit:function(){var t,e=this,n=e.options,i=e.minSize={},a=e.isHorizontal();n.display?(t=(V.isArray(n.text)?n.text.length:1)*V.options._parseFont(n).lineHeight+2*n.padding,e.width=i.width=a?e.maxWidth:t,e.height=i.height=a?t:e.maxHeight):e.width=i.width=e.height=i.height=0},afterFit:Ti,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=t.options;if(n.display){var i,a,r,o=V.options._parseFont(n),s=o.lineHeight,l=s/2+n.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=V.valueOrDefault(n.fontColor,z.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,i=f-h):(a="left"===n.position?h+l:f-l,r=d+(c-d)/2,i=c-d,u=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=n.text;if(V.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,i),p+=s;else e.fillText(g,0,0,i);e.restore()}}});function Fi(t,e){var n=new Ii({ctx:t.ctx,options:e,chart:t});ge.configure(t,n,e),ge.addBox(t,n),t.titleBlock=n}var Li={},Oi=ki,Ri=Di,zi={id:"title",_element:Ii,beforeInit:function(t){var e=t.options.title;e&&Fi(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(V.mergeIf(e,z.global.title),n?(ge.configure(t,n,e),n.options=e):Fi(t,e)):n&&(ge.removeBox(t,n),delete t.titleBlock)}};for(var Ni in Li.filler=Oi,Li.legend=Ri,Li.title=zi,tn.helpers=V,function(){function t(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function e(t){return null!=t&&"none"!==t}function n(n,i,a){var r=document.defaultView,o=V._getParentNode(n),s=r.getComputedStyle(n)[i],l=r.getComputedStyle(o)[i],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,n,a):h,d?t(l,o,a):h):"none"}V.where=function(t,e){if(V.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return V.each(t,(function(t){e(t)&&n.push(t)})),n},V.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},V.findNextWhere=function(t,e,n){V.isNullOrUndef(n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},V.findPreviousWhere=function(t,e,n){V.isNullOrUndef(n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},V.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},V.almostEquals=function(t,e,n){return Math.abs(t-e)<n},V.almostWhole=function(t,e){var n=Math.round(t);return n-e<=t&&n+e>=t},V.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},V.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},V.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},V.toRadians=function(t){return t*(Math.PI/180)},V.toDegrees=function(t){return t*(180/Math.PI)},V._decimalPlaces=function(t){if(V.isFinite(t)){for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}},V.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},V.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},V.aliasPixel=function(t){return t%2==0?0:.5},V._alignPixel=function(t,e,n){var i=t.currentDevicePixelRatio,a=n/2;return Math.round((e-a)*i)/i+a},V.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=i*(u=isNaN(u)?0:u),c=i*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},V.EPSILON=Number.EPSILON||1e-14,V.splineCurveMonotone=function(t){var e,n,i,a,r,o,s,l,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length;for(e=0;e<h;++e)if(!(i=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-i.model.x;i.deltaK=0!==c?(a.model.y-i.model.y)/c:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}for(e=0;e<h-1;++e)i=d[e],a=d[e+1],i.model.skip||a.model.skip||(V.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(r=i.mK/i.deltaK,o=a.mK/i.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),i.mK=r*s*i.deltaK,a.mK=o*s*i.deltaK)));for(e=0;e<h;++e)(i=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-u,i.model.controlPointPreviousY=i.model.y-u*i.mK),a&&!a.model.skip&&(u=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+u,i.model.controlPointNextY=i.model.y+u*i.mK))},V.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},V.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},V.niceNum=function(t,e){var n=Math.floor(V.log10(t)),i=t/Math.pow(10,n);return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},V.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},V.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var l=parseFloat(V.getStyle(r,"padding-left")),u=parseFloat(V.getStyle(r,"padding-top")),d=parseFloat(V.getStyle(r,"padding-right")),h=parseFloat(V.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:n=Math.round((n-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:i=Math.round((i-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},V.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},V.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},V._calculatePadding=function(t,e,n){return(e=V.getStyle(t,e)).indexOf("%")>-1?n*parseInt(e,10)/100:parseInt(e,10)},V._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},V.getMaximumWidth=function(t){var e=V._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,i=n-V._calculatePadding(e,"padding-left",n)-V._calculatePadding(e,"padding-right",n),a=V.getConstraintWidth(t);return isNaN(a)?i:Math.min(i,a)},V.getMaximumHeight=function(t){var e=V._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,i=n-V._calculatePadding(e,"padding-top",n)-V._calculatePadding(e,"padding-bottom",n),a=V.getConstraintHeight(t);return isNaN(a)?i:Math.min(i,a)},V.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},V.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var i=t.canvas,a=t.height,r=t.width;i.height=a*n,i.width=r*n,t.ctx.scale(n,n),i.style.height||i.style.width||(i.style.height=a+"px",i.style.width=r+"px")}},V.fontString=function(t,e,n){return e+" "+t+"px "+n},V.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var o,s,l,u,d,h=0,c=n.length;for(o=0;o<c;o++)if(null!=(u=n[o])&&!0!==V.isArray(u))h=V.measureText(t,a,r,h,u);else if(V.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||V.isArray(d)||(h=V.measureText(t,a,r,h,d));var f=r.length/2;if(f>n.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},V.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},V.numberOfLabelLines=function(t){var e=1;return V.each(t,(function(t){V.isArray(t)&&t.length>e&&(e=t.length)})),e},V.color=k?function(t){return t instanceof CanvasGradient&&(t=z.global.defaultColor),k(t)}:function(t){return console.error("Color.js not found!"),t},V.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:V.color(t).saturate(.5).darken(.1).rgbString()}}(),tn._adapters=an,tn.Animation=Z,tn.animationService=$,tn.controllers=$t,tn.DatasetController=nt,tn.defaults=z,tn.Element=X,tn.elements=_t,tn.Interaction=ae,tn.layouts=ge,tn.platform=Fe,tn.plugins=Le,tn.Scale=xn,tn.scaleService=Oe,tn.Ticks=rn,tn.Tooltip=Ue,tn.helpers.each(ci,(function(t,e){tn.scaleService.registerScaleType(e,t,t._defaults)})),Li)Li.hasOwnProperty(Ni)&&tn.plugins.register(Li[Ni]);tn.platform.initialize();var Bi=tn;return"undefined"!=typeof window&&(window.Chart=tn),tn.Chart=tn,tn.Legend=Li.legend._element,tn.Title=Li.title._element,tn.pluginService=tn.plugins,tn.PluginBase=tn.Element.extend({}),tn.canvasHelpers=tn.helpers.canvas,tn.layoutService=tn.layouts,tn.LinearScaleBase=Sn,tn.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],(function(t){tn[t]=function(e,n){return new tn(e,tn.helpers.merge(n||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}})),Bi}));;
/**
 * Represents a fakeProgress
 * @constructor
 * @param {object} options - options of the contructor
 * @param {object} [options.timeConstant=1000] - the timeConstant in milliseconds (see https://en.wikipedia.org/wiki/Time_constant)
 * @param {object} [options.autoStart=false] - if true then the progress auto start
 */

const FakeProgress = function (opts) {
	if (!opts) {
		opts = {};
	}

	this.timeConstant = opts.timeConstant || 1000;
	this.progress = 0;
	this._running = false;
	this._intervalFrequency = 100;
	this.autoStart = opts.autoStart || false;
	this.parent = opts.parent;
	this.parentStart = opts.parentStart;
	this.parentEnd = opts.parentEnd;
	if (this.autoStart) {
		this.start();
	}
};

/**
 * Start fakeProgress instance
 * @method
 */

FakeProgress.prototype.start = function () {
	this._time = 0;
	this._intervalId = setInterval(this._onInterval.bind(this), this._intervalFrequency);
};

FakeProgress.prototype._onInterval = function () {
	this._time += this._intervalFrequency;
	this.setProgress(1 - Math.exp(-1 * this._time / this.timeConstant));
};

/**
 * Stop fakeProgress instance and set progress to 1
 * @method
 */

FakeProgress.prototype.end = function () {
	this.stop();
	this.setProgress(1);
};

/**
 * Stop fakeProgress instance
 * @method
 */

FakeProgress.prototype.stop = function () {
	clearInterval(this._intervalId);
	this._intervalId = null;
};

/**
 * Create a sub progress bar under the first progres
 * @method
 * @param {object} options - options of the FakeProgress contructor
 * @param {object} [options.end=1] - the progress in the parent that correspond of 100% of the child
 * @param {object} [options.start=fakeprogress.progress] - the progress in the parent that correspond of 0% of the child
 */

FakeProgress.prototype.createSubProgress = function (opts) {
	const parentStart = opts.start || this.progress;
	const parentEnd = opts.end || 1;
	const options = Object.assign({}, opts, {
		parent: this,
		parentStart: parentStart,
		parentEnd: parentEnd,
		start: null,
		end: null
	});

	const subProgress = new FakeProgress(options);
	return subProgress;
};

/**
 * SetProgress of the fakeProgress instance and updtae the parent
 * @method
 * @param {number} progress - the progress
 */

FakeProgress.prototype.setProgress = function (progress) {
	this.progress = progress;
	if (this.parent) {
		this.parent.setProgress(((this.parentEnd - this.parentStart) * this.progress) + this.parentStart);
	}
};

if (typeof exports === 'object' && typeof module === 'object') {
	module.exports = FakeProgress;
};
//
// strftime
// github.com/samsonjs/strftime
// @_sjs
//
// Copyright 2010 - 2016 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

;(function() {

    var Locales = {
        de_DE: {
            days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d.%m.%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        en_CA: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        en_US: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%m/%d/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        es_MX: {
            days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            shortDays: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre',' diciembre'],
            shortMonths: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        fr_FR: {
            days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            shortDays: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            shortMonths: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        it_IT: {
            days: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
            shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
            shortMonths: ['pr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        nl_NL: {
            days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            shortDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
            months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
            shortMonths: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        pt_BR: {
            days: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
            shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        ru_RU: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            shortMonths: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X',
                D: '%d.%m.%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        tr_TR: {
            days: ['Pazar', 'Pazartesi', 'Salı','Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
            shortDays: ['Paz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cts'],
            months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            AM: 'ÖÖ',
            PM: 'ÖS',
            am: 'ÖÖ',
            pm: 'ÖS',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        // By michaeljayt<michaeljayt@gmail.com>
        // https://github.com/michaeljayt/strftime/commit/bcb4c12743811d51e568175aa7bff3fd2a77cef3
        zh_CN: {
            days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            shortDays: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'],
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            AM: '上午',
            PM: '下午',
            am: '上午',
            pm: '下午',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        }
    };

    var DefaultLocale = Locales['en_US'],
        defaultStrftime = new Strftime(DefaultLocale, 0, false),
        isCommonJS = typeof module !== 'undefined',
        namespace;

    // CommonJS / Node module
    if (isCommonJS) {
        namespace = module.exports = defaultStrftime;
    }
    // Browsers and other environments
    else {
        // Get the global object. Works in ES3, ES5, and ES5 strict mode.
        namespace = (function() { return this || (1,eval)('this'); }());
        namespace.strftime = defaultStrftime;
    }

    // Polyfill Date.now for old browsers.
    if (typeof Date.now !== 'function') {
        Date.now = function() {
          return +new Date();
        };
    }

    function Strftime(locale, customTimezoneOffset, useUtcTimezone) {
        var _locale = locale || DefaultLocale,
            _customTimezoneOffset = customTimezoneOffset || 0,
            _useUtcBasedDate = useUtcTimezone || false,

            // we store unix timestamp value here to not create new Date() each iteration (each millisecond)
            // Date.now() is 2 times faster than new Date()
            // while millisecond precise is enough here
            // this could be very helpful when strftime triggered a lot of times one by one
            _cachedDateTimestamp = 0,
            _cachedDate;

        function _strftime(format, date) {
            var timestamp;

            if (!date) {
                var currentTimestamp = Date.now();
                if (currentTimestamp > _cachedDateTimestamp) {
                    _cachedDateTimestamp = currentTimestamp;
                    _cachedDate = new Date(_cachedDateTimestamp);

                    timestamp = _cachedDateTimestamp;

                    if (_useUtcBasedDate) {
                        // how to avoid duplication of date instantiation for utc here?
                        // we tied to getTimezoneOffset of the current date
                        _cachedDate = new Date(_cachedDateTimestamp + getTimestampToUtcOffsetFor(_cachedDate) + _customTimezoneOffset);
                    }
                }
                else {
                  timestamp = _cachedDateTimestamp;
                }
                date = _cachedDate;
            }
            else {
                timestamp = date.getTime();

                if (_useUtcBasedDate) {
                    var utcOffset = getTimestampToUtcOffsetFor(date);
                    date = new Date(timestamp + utcOffset + _customTimezoneOffset);
                    // If we've crossed a DST boundary with this calculation we need to
                    // adjust the new date accordingly or it will be off by an hour in UTC.
                    if (getTimestampToUtcOffsetFor(date) !== utcOffset) {
                        var newUTCOffset = getTimestampToUtcOffsetFor(date);
                        date = new Date(timestamp + newUTCOffset + _customTimezoneOffset);
                    }
                }
            }

            return _processFormat(format, date, _locale, timestamp);
        }

        function _processFormat(format, date, locale, timestamp) {
            var resultString = '',
                padding = null,
                isInScope = false,
                length = format.length,
                extendedTZ = false;

            for (var i = 0; i < length; i++) {

                var currentCharCode = format.charCodeAt(i);

                if (isInScope === true) {
                    // '-'
                    if (currentCharCode === 45) {
                        padding = '';
                        continue;
                    }
                    // '_'
                    else if (currentCharCode === 95) {
                        padding = ' ';
                        continue;
                    }
                    // '0'
                    else if (currentCharCode === 48) {
                        padding = '0';
                        continue;
                    }
                    // ':'
                    else if (currentCharCode === 58) {
                      if (extendedTZ) {
                          warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime");
                      }
                      extendedTZ = true;
                      continue;
                    }

                    switch (currentCharCode) {

                        // Examples for new Date(0) in GMT

                        // '%'
                        // case '%':
                        case 37:
                            resultString += '%';
                            break;

                        // 'Thursday'
                        // case 'A':
                        case 65:
                            resultString += locale.days[date.getDay()];
                            break;

                        // 'January'
                        // case 'B':
                        case 66:
                            resultString += locale.months[date.getMonth()];
                            break;

                        // '19'
                        // case 'C':
                        case 67:
                            resultString += padTill2(Math.floor(date.getFullYear() / 100), padding);
                            break;

                        // '01/01/70'
                        // case 'D':
                        case 68:
                            resultString += _processFormat(locale.formats.D, date, locale, timestamp);
                            break;

                        // '1970-01-01'
                        // case 'F':
                        case 70:
                            resultString += _processFormat(locale.formats.F, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'H':
                        case 72:
                            resultString += padTill2(date.getHours(), padding);
                            break;

                        // '12'
                        // case 'I':
                        case 73:
                            resultString += padTill2(hours12(date.getHours()), padding);
                            break;

                        // '000'
                        // case 'L':
                        case 76:
                            resultString += padTill3(Math.floor(timestamp % 1000));
                            break;

                        // '00'
                        // case 'M':
                        case 77:
                            resultString += padTill2(date.getMinutes(), padding);
                            break;

                        // 'am'
                        // case 'P':
                        case 80:
                            resultString += date.getHours() < 12 ? locale.am : locale.pm;
                            break;

                        // '00:00'
                        // case 'R':
                        case 82:
                            resultString += _processFormat(locale.formats.R, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'S':
                        case 83:
                            resultString += padTill2(date.getSeconds(), padding);
                            break;

                        // '00:00:00'
                        // case 'T':
                        case 84:
                            resultString += _processFormat(locale.formats.T, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'U':
                        case 85:
                            resultString += padTill2(weekNumber(date, 'sunday'), padding);
                            break;

                        // '00'
                        // case 'W':
                        case 87:
                            resultString += padTill2(weekNumber(date, 'monday'), padding);
                            break;

                        // '16:00:00'
                        // case 'X':
                        case 88:
                            resultString += _processFormat(locale.formats.X, date, locale, timestamp);
                            break;

                        // '1970'
                        // case 'Y':
                        case 89:
                            resultString += date.getFullYear();
                            break;

                        // 'GMT'
                        // case 'Z':
                        case 90:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += "GMT";
                            }
                            else {
                                // fixme optimize
                                var tzString = date.toString().match(/\(([\w\s]+)\)/);
                                resultString += tzString && tzString[1] || '';
                            }
                            break;

                        // 'Thu'
                        // case 'a':
                        case 97:
                            resultString += locale.shortDays[date.getDay()];
                            break;

                        // 'Jan'
                        // case 'b':
                        case 98:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // ''
                        // case 'c':
                        case 99:
                            resultString += _processFormat(locale.formats.c, date, locale, timestamp);
                            break;

                        // '01'
                        // case 'd':
                        case 100:
                            resultString += padTill2(date.getDate(), padding);
                            break;

                        // ' 1'
                        // case 'e':
                        case 101:
                            resultString += padTill2(date.getDate(), padding == null ? ' ' : padding);
                            break;

                        // 'Jan'
                        // case 'h':
                        case 104:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // '000'
                        // case 'j':
                        case 106:
                            var y = new Date(date.getFullYear(), 0, 1);
                            var day = Math.ceil((date.getTime() - y.getTime()) / (1000 * 60 * 60 * 24));
                            resultString += padTill3(day);
                            break;

                        // ' 0'
                        // case 'k':
                        case 107:
                            resultString += padTill2(date.getHours(), padding == null ? ' ' : padding);
                            break;

                        // '12'
                        // case 'l':
                        case 108:
                            resultString += padTill2(hours12(date.getHours()), padding == null ? ' ' : padding);
                            break;

                        // '01'
                        // case 'm':
                        case 109:
                            resultString += padTill2(date.getMonth() + 1, padding);
                            break;

                        // '\n'
                        // case 'n':
                        case 110:
                            resultString += '\n';
                            break;

                        // '1st'
                        // case 'o':
                        case 111:
                            // Try to use an ordinal suffix from the locale, but fall back to using the old
                            // function for compatibility with old locales that lack them.
                            var day = date.getDate();
                            if (locale.ordinalSuffixes) {
                                resultString += String(day) + (locale.ordinalSuffixes[day - 1] || ordinal(day));
                            }
                            else {
                                resultString += String(day) + ordinal(day);
                            }
                            break;

                        // 'AM'
                        // case 'p':
                        case 112:
                            resultString += date.getHours() < 12 ? locale.AM : locale.PM;
                            break;

                        // '12:00:00 AM'
                        // case 'r':
                        case 114:
                            resultString += _processFormat(locale.formats.r, date, locale, timestamp);
                            break;

                        // '0'
                        // case 's':
                        case 115:
                            resultString += Math.floor(timestamp / 1000);
                            break;

                        // '\t'
                        // case 't':
                        case 116:
                            resultString += '\t';
                            break;

                        // '4'
                        // case 'u':
                        case 117:
                            var day = date.getDay();
                            resultString += day === 0 ? 7 : day;
                            break; // 1 - 7, Monday is first day of the week

                        // ' 1-Jan-1970'
                        // case 'v':
                        case 118:
                            resultString += _processFormat(locale.formats.v, date, locale, timestamp);
                            break;

                        // '4'
                        // case 'w':
                        case 119:
                            resultString += date.getDay();
                            break; // 0 - 6, Sunday is first day of the week

                        // '12/31/69'
                        // case 'x':
                        case 120:
                            resultString += _processFormat(locale.formats.x, date, locale, timestamp);
                            break;

                        // '70'
                        // case 'y':
                        case 121:
                            resultString += ('' + date.getFullYear()).slice(2);
                            break;

                        // '+0000'
                        // case 'z':
                        case 122:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += extendedTZ ? "+00:00" : "+0000";
                            }
                            else {
                                var off;
                                if (_customTimezoneOffset !== 0) {
                                    off = _customTimezoneOffset / (60 * 1000);
                                }
                                else {
                                    off = -date.getTimezoneOffset();
                                }
                                var sign = off < 0 ? '-' : '+';
                                var sep = extendedTZ ? ':' : '';
                                var hours = Math.floor(Math.abs(off / 60));
                                var mins = Math.abs(off % 60);
                                resultString += sign + padTill2(hours) + sep + padTill2(mins);
                            }
                            break;

                        default:
                            if (isInScope) {
                                resultString += '%';
                            }
                            resultString += format[i];
                            break;
                    }

                    padding = null;
                    isInScope = false;
                    continue;
                }

                // '%'
                if (currentCharCode === 37) {
                    isInScope = true;
                    continue;
                }

                resultString += format[i];
            }

            return resultString;
        }

        var strftime = _strftime;

        strftime.localize = function(locale) {
            return new Strftime(locale || _locale, _customTimezoneOffset, _useUtcBasedDate);
        };

        strftime.localizeByIdentifier = function(localeIdentifier) {
            var locale = Locales[localeIdentifier];
            if (!locale) {
                warn('[WARNING] No locale found with identifier "' + localeIdentifier + '".');
                return strftime;
            }
            return strftime.localize(locale);
        };

        strftime.timezone = function(timezone) {
            var customTimezoneOffset = _customTimezoneOffset;
            var useUtcBasedDate = _useUtcBasedDate;

            var timezoneType = typeof timezone;
            if (timezoneType === 'number' || timezoneType === 'string') {
                useUtcBasedDate = true;

                // ISO 8601 format timezone string, [-+]HHMM
                if (timezoneType === 'string') {
                    var sign = timezone[0] === '-' ? -1 : 1,
                        hours = parseInt(timezone.slice(1, 3), 10),
                        minutes = parseInt(timezone.slice(3, 5), 10);

                    customTimezoneOffset = sign * ((60 * hours) + minutes) * 60 * 1000;
                    // in minutes: 420
                }
                else if (timezoneType === 'number') {
                    customTimezoneOffset = timezone * 60 * 1000;
                }
            }

            return new Strftime(_locale, customTimezoneOffset, useUtcBasedDate);
        };

        strftime.utc = function() {
            return new Strftime(_locale, _customTimezoneOffset, true);
        };

        return strftime;
    }

    function padTill2(numberToPad, paddingChar) {
        if (paddingChar === '' || numberToPad > 9) {
            return numberToPad;
        }
        if (paddingChar == null) {
            paddingChar = '0';
        }
        return paddingChar + numberToPad;
    }

    function padTill3(numberToPad) {
        if (numberToPad > 99) {
            return numberToPad;
        }
        if (numberToPad > 9) {
            return '0' + numberToPad;
        }
        return '00' + numberToPad;
    }

    function hours12(hour) {
        if (hour === 0) {
            return 12;
        }
        else if (hour > 12) {
            return hour - 12;
        }
        return hour;
    }

    // firstWeekday: 'sunday' or 'monday', default is 'sunday'
    //
    // Pilfered & ported from Ruby's strftime implementation.
    function weekNumber(date, firstWeekday) {
        firstWeekday = firstWeekday || 'sunday';

        // This works by shifting the weekday back by one day if we
        // are treating Monday as the first day of the week.
        var weekday = date.getDay();
        if (firstWeekday === 'monday') {
            if (weekday === 0) // Sunday
                weekday = 6;
            else
                weekday--;
        }

        var firstDayOfYearUtc = Date.UTC(date.getFullYear(), 0, 1),
            dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
            yday = Math.floor((dateUtc - firstDayOfYearUtc) / 86400000),
            weekNum = (yday + 7 - weekday) / 7;

        return Math.floor(weekNum);
    }

    // Get the ordinal suffix for a number: st, nd, rd, or th
    function ordinal(number) {
        var i = number % 10;
        var ii = number % 100;

        if ((ii >= 11 && ii <= 13) || i === 0 || i >= 4) {
            return 'th';
        }
        switch (i) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
        }
    }

    function getTimestampToUtcOffsetFor(date) {
        return (date.getTimezoneOffset() || 0) * 60000;
    }

    function warn(message) {
        if (typeof console !== 'undefined' && typeof console.warn == 'function') {
            console.warn(message)
        }
    }

}());;
/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/canvas-confetti@1.2.0/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){!function t(e,n,o,a){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function r(){}function l(t){var o=n.exports.Promise,a=void 0!==o?o:e.Promise;return"function"==typeof a?new a(t):(t(r,r),null)}var c,s,u,h,d,f=(u=Math.floor(1e3/60),h={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return h[e]=requestAnimationFrame(function n(o){d===o||d+u-1<o?(d=o,delete h[e],t()):h[e]=requestAnimationFrame(n)}),e},s=function(t){h[t]&&cancelAnimationFrame(h[t])}):(c=function(t){return setTimeout(t,u)},s=function(t){return clearTimeout(t)}),{frame:c,cancel:s}),g=function(){var e,n,a={};return function(){if(e)return e;if(!o&&i){var r=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([r])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Count not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(o,i,r){if(n)return e(o,null),n;var c=Math.random().toString(36).slice(2);return n=l(function(i){function l(e){e.data.callback===c&&(delete a[c],t.removeEventListener("message",l),n=null,r(),i())}t.addEventListener("message",l),e(o,c),a[c]=l.bind(null,{data:{callback:c}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),a)a[e](),delete a[e]}}(e)}return e}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1};function b(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:m[e],n)}function v(t){return parseInt(t,16)}function y(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function p(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function M(t,e,n,i,r){var c,s,u=e.slice(),h=t.getContext("2d"),d=l(function(e){function l(){c=s=null,h.clearRect(0,0,i.width,i.height),r(),e()}c=f.frame(function e(){!o||i.width===a.width&&i.height===a.height||(i.width=t.width=a.width,i.height=t.height=a.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),h.clearRect(0,0,i.width,i.height),(u=u.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*Math.cos(e.wobble),e.wobbleY=e.y+10*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,a=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-o)*e.ovalScalar,Math.abs(r-a)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,o,a,i,r,l,c){t.save(),t.translate(e,n),t.rotate(i),t.scale(o,a),t.arc(0,0,1,r,l,c),t.restore()}(t,e.x,e.y,Math.abs(i-o)*e.ovalScalar,Math.abs(r-a)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(a)),t.lineTo(Math.floor(i),Math.floor(r)),t.lineTo(Math.floor(o),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(h,t)})).length?c=f.frame(e):l()}),s=l});return{addFettis:function(t){return u=u.concat(t),d},canvas:t,promise:d,reset:function(){c&&f.cancel(c),s&&s()}}}function w(t,n){var o,a=!t,r=!!b(n||{},"resize"),c=b(n,"disableForReducedMotion",Boolean),s=i&&!!b(n||{},"useWorker")?g():null,u=a?y:p,h=!(!t||!s)&&!!t.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(e,n,a){for(var i,r,l,c,s,h,d,f=b(e,"particleCount",Math.floor),g=b(e,"angle",Number),m=b(e,"spread",Number),y=b(e,"startVelocity",Number),p=b(e,"decay",Number),w=b(e,"gravity",Number),x=b(e,"colors"),C=b(e,"ticks",Number),k=b(e,"shapes"),I=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),T=f,E=[],S=t.width*I.x,F=t.height*I.y;T--;)E.push((i={x:S,y:F,angle:g,spread:m,startVelocity:y,color:x[T%x.length],shape:k[(h=0,d=k.length,Math.floor(Math.random()*(d-h))+h)],ticks:C,decay:p,gravity:w},r=void 0,l=void 0,c=void 0,s=void 0,c=i.angle*(Math.PI/180),s=i.spread*(Math.PI/180),{x:i.x,y:i.y,wobble:10*Math.random(),velocity:.5*i.startVelocity+Math.random()*i.startVelocity,angle2D:-c+(.5*s-Math.random()*s),tiltAngle:Math.random()*Math.PI,color:(r=i.color,l=String(r).replace(/[^0-9a-f]/gi,""),l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:v(l.substring(0,2)),g:v(l.substring(2,4)),b:v(l.substring(4,6))}),shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*i.gravity,ovalScalar:.6}));return o?o.addFettis(E):(o=M(t,E,u,n,a)).promise}function m(n){var i=c||b(n,"disableForReducedMotion",Boolean),g=b(n,"zIndex",Number);if(i&&d)return l(function(t){t()});a&&o?t=o.canvas:a&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(g),document.body.appendChild(t)),r&&!h&&u(t);var m={width:t.width,height:t.height};function v(){if(s){var e={getBoundingClientRect:function(){if(!a)return t.getBoundingClientRect()}};return u(e),void s.postMessage({resize:{width:e.width,height:e.height}})}m.width=m.height=null}function y(){o=null,r&&e.removeEventListener("resize",v),a&&t&&(document.body.removeChild(t),t=null,h=!1)}return s&&!h&&s.init(t),h=!0,s&&(t.__confetti_initialized=!0),r&&e.addEventListener("resize",v,!1),s?s.fire(n,m,y):f(n,m,y)}return m.reset=function(){s&&s.reset(),o&&o.reset()},m}n.exports=w(null,{useWorker:!0,resize:!0}),n.exports.create=w}(function(){return void 0!==t?t:"undefined"!=typeof self?self:this}(),e,!1),t.confetti=e.exports}(window,{});
;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});;
/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});
;
function ChangelogBadge() {}

ChangelogBadge.prototype.fetch = function(){
  var check = true
  var last_checked = localStorage.getItem('bannerbear_changelog_last_checked')
  var interval = 86400
  if (last_checked) {
    var time_now = Math.round((new Date()).getTime() / 1000);
    if (localStorage.getItem('bannerbear_changelog_items') && (time_now - parseInt(last_checked)) < interval) {
      //skip check of changelog
      new ChangelogBadge().parse()
      return
    }
  }

  console.log('Fetching changelog...')
  var url = "https://www.bannerbear.com/changelog/feed.json"
  fetch(url)
  .then(response => response.json())
  .then(function(items){
    localStorage.setItem('bannerbear_changelog_items', JSON.stringify(items))
    localStorage.setItem('bannerbear_changelog_last_checked', time_now)
    console.log(items)
    new ChangelogBadge().parse()
  })

}

ChangelogBadge.prototype.viewed = function(){
  var now = parseInt(new Date().getTime() / 1000)
  // localStorage.setItem('bannerbear_changelog_last_viewed', now)
  var domain = "domain=.bannerbear.com;"
  if (location.hostname.includes("localhost") || location.hostname.includes("bblocal")) {
    domain = ""
  }

  document.cookie = `bannerbear_changelog_viewed=${now}; ${domain} path=/; max-age=${60 * 60 * 24 * 14};`;

  setTimeout(function(){
    var badges = document.querySelectorAll(".changelog-unseen-items-count")
    if (badges.length > 0) {
      badges.forEach(b => b.parentNode.removeChild(b))
    }
  },1000)
}

function getTheCookie (name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

ChangelogBadge.prototype.parse = function(element_id){
  // console.log("Building changelog dropdown")
  // var last_viewed = localStorage.getItem('bannerbear_changelog_last_viewed')

  var last_viewed = getTheCookie('bannerbear_changelog_viewed')

  var items = JSON.parse(localStorage.getItem('bannerbear_changelog_items'))
  var dropdown_content = document.createElement("div")
  var unseen_items = 0
  dropdown_content.className = "dropdown-content"

  var wMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  var dropdown_item = document.createElement("div")
  dropdown_item.className = "dropdown-item"
  dropdown_item.innerHTML = `<b>Bannerbear Updates</b>`
  dropdown_content.appendChild(dropdown_item)

  var dropdown_divider = document.createElement("div")
  dropdown_divider.className = "dropdown-divider"
  dropdown_content.appendChild(dropdown_divider)

  for (i in items) {
    var dropdown_item = document.createElement("div")
    dropdown_item.className = "dropdown-item"
    var date = new Date(items[i].date)

    var day = parseInt(date.getUTCDate())
    var month = wMonths[parseInt(date.getUTCMonth())]
    var year = date.getUTCFullYear().toString()

    //viewed?
    // if (last_viewed) {
    //   //last_checked is a unix time stamp
    //   var unixdate = Math.round(new Date(items[i].date).getTime() / 1000)
    //   if (parseInt(last_viewed) < unixdate) {
    //     dropdown_item.setAttribute('data-new', true)
    //     unseen_items++
    //   }
    // } else {
    //   dropdown_item.setAttribute('data-new', true)
    //   unseen_items++
    // }

    dropdown_item.innerHTML = `<b>${day} ${month} ${year}</b>`
    dropdown_content.appendChild(dropdown_item)

    var dropdown_item = document.createElement("div")
    dropdown_item.className = "dropdown-item"
    dropdown_item.innerHTML = items[i].body.replaceAll("a href", "a target='_blank' href")
    dropdown_item.setAttribute('data-date', items[i].date)
    dropdown_content.appendChild(dropdown_item)

    var dropdown_divider = document.createElement("div")
    dropdown_divider.className = "dropdown-divider"
    dropdown_content.appendChild(dropdown_divider)


    if (i >= 2) {
      var dropdown_item = document.createElement("div")
      dropdown_item.className = "dropdown-item"
      dropdown_item.innerHTML = '<a href="https://www.bannerbear.com/changelog/" target="_blank">View More</a>'
      dropdown_content.appendChild(dropdown_item)
      break
    }

  }

  var elements = document.querySelectorAll(".changelog-items")

  if (elements.length > 0) {
    elements.forEach(e => e.appendChild(dropdown_content))
  }

  if (unseen_items > 0) {
    var badge = document.createElement("div")
    badge.className = "changelog-unseen-items-count"
    badge.innerHTML = unseen_items
    var trigger = document.querySelector('.changelog-items-trigger')
    trigger.appendChild(badge)
  }

};
(function(a){function d(e){0<e.clientY||(b&&clearTimeout(b),0>=a.exitIntent.settings.sensitivity?a.event.trigger("exitintent"):b=setTimeout(function(){b=null;a.event.trigger("exitintent")},a.exitIntent.settings.sensitivity))}function c(){b&&(clearTimeout(b),b=null)}var b;a.exitIntent=function(b,f){a.exitIntent.settings=a.extend(a.exitIntent.settings,f);if("enable"==b)a(window).mouseleave(d),a(window).mouseenter(c);else if("disable"==b)c(),a(window).unbind("mouseleave",d),a(window).unbind("mouseenter",
c);else throw"Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";};a.exitIntent.settings={sensitivity:300}})(jQuery);
;
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();;
function construct_mobile_menu() {
	$('.main_navigation .dropdown').each(function(){
		// if ($(this).hasClass('notmobile')) {
		// 	return
		// }
		$('<div/>',{
			text: $(this).find('.dropdown-trigger').text(),
			class: 'dropdown-item dropdown-heading'
		}).appendTo('.mobile_dropdown_menu')
		$(this).find('a, strong').each(function(){
			var item = $(this).clone().addClass('dropdown-item').appendTo('.mobile_dropdown_menu')
		})
		$('<div/>',{
			class: 'dropdown-divider'
		}).appendTo('.mobile_dropdown_menu')
	})
	$('<a/>',{
		class: 'dropdown-item',
		text: 'Pricing'
	}).attr('href', '/pricing/').appendTo('.mobile_dropdown_menu')
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function dollarify(cents) {
	if (cents == 0) {
		return "$0"
	}
	return "$" + numberWithCommas(cents / 100).split(".")[0]
}

function load_stats() {
	$('#monthly_metrics_global_container').html('<marquee style="opacity: 0.5; max-width: 500px; margin: 0 auto; display: block;">Loading data... and yes this is a marquee tag</marquee>')

	// $.getJSON('https://simpleanalytics.com/bannerbear.com.json')
	// 	.done( function(response) {
	// 		$('#traffic_chart').css('background', '#FFF')
	// 		var ctx = document.getElementById('traffic_chart').getContext('2d');
	// 		var chart = new Chart(ctx, {
	// 		    // The type of chart we want to create
	// 		    type: 'line',

	// 		    // The data for our dataset
	// 		    data: {
	// 		        labels: response.visits.map(function(day){
	// 		        	return day.date
	// 		        }),
	// 		        datasets: [{
	// 		            backgroundColor: '#9ECCED',
	// 		            borderColor: '#1B80B6',
	// 		            lineTension: 0,
	// 		            data: response.visits.map(function(day){
	// 		            	return day.pageviews
	// 		            })
	// 		        }]
	// 		    },

	// 		    // Configuration options go here
	// 		    options: {
	// 		    	maintainAspectRatio: false,
	// 		    	legend: {
	// 						display: false
	// 					},
	// 		    }
	// 		});

	// 	})

	var common_annotations = [
		{
			type: 'line',
			mode: 'vertical',
			scaleID: 'x-axis-0',
			value: '2019-11',
			borderColor: '#000',
			borderWidth: 1,
			label: {
        backgroundColor: "#000",
        content: "MVP",
        enabled: true
      },
		},
		{
			type: 'line',
			mode: 'vertical',
			scaleID: 'x-axis-0',
			value: '2020-01',
			borderColor: '#000',
			borderWidth: 1,
			label: {
        backgroundColor: "#000",
        content: "Launch",
        enabled: true
      },
		},
		{
			type: 'line',
			mode: 'vertical',
			scaleID: 'x-axis-0',
			value: '2020-03',
			borderColor: '#000',
			borderWidth: 1,
			label: {
        backgroundColor: "#000",
        content: "API",
        enabled: true
      },
		},
	]

	var subscription_data = null
	var subscriber_data = null

	function combine_sub_sub_data() {
		if (!subscription_data) {
			console.log("Subscription data not yet loaded")
			return
		}
		if (!subscriber_data) {
			console.log("Subscriber data not yet loaded")
			return
		}
		console.log("Constructing combined data")
		console.log(subscription_data)
		console.log(subscriber_data)
		$('#monthly_metrics_global_container').html('')
		for (i in subscription_data) {
			var month = $('.monthly_metrics_container_clone_this').not('.cloned').first().clone().show().addClass('cloned')
			var date = subscription_data[i].date.split("-")
			date = date[0] + "-" + date[1]
			month.find('p.what').prepend(date + " ")

			var new_customers = subscription_data[i].customer_count
			var trial_in_progress = subscription_data[i].in_trial
			var new_users = subscriber_data[i][1]

			var conversion = Math.round((new_customers / new_users) * 100)

			month.find('.trial_in_progress').hide()

			month.find('.metric_num.upgrades').text(new_customers)
			month.find('.metric_num.signups').text(new_users)
			month.find('.metric_num.conversion_rate').text(conversion + "%")

			if (trial_in_progress > 0) {
				month.find('.trial_in_progress').show()
				month.find('.metric_num.trials').text(trial_in_progress)
			}

			$('#monthly_metrics_global_container').append(month)
		}

		$('#monthly_metrics_global_container > .monthly_metrics_container_clone_this.cloned').slice(0,subscription_data.length-6).remove()
	}

	$.getJSON('https://app.bannerbear.com/api/v1/open/users')
			.done( function(response) {
				//total signups
				var dates = []
				var nums = []
				var total = 0
				for (var i = 0; i < response.signups.length; i++) { 
					dates.push(response.signups[i][0])
					total = total + response.signups[i][1]
					nums.push(total)
				}

				subscriber_data = response.signups
				subscription_data = response.new_customers
				combine_sub_sub_data()

	});

	$.getJSON('https://app.bannerbear.com/api/v1/open/revenue')
		.done( function(response) {
			var otps = 0
			for (var i = 0; i < response.one_time_payments.length; i++) { 
				otps = otps + response.one_time_payments[i][1]
			}
			var otp_dollar_value = 4900
			// $('#otp_revenue').text(dollarify(otp_dollar_value * otps))			
			// $('#otp_num').text(otps)			


			arr = response.chartmogul.entries[response.chartmogul.entries.length-1].arr
			mrr = response.chartmogul.entries[response.chartmogul.entries.length-1].mrr
			arpu = response.chartmogul.entries[response.chartmogul.entries.length-1].arpa
			subs = response.chartmogul.entries[response.chartmogul.entries.length-1].customers

			// subscription_data = response.chartmogul.entries
			// combine_sub_sub_data()

			$('#arr').text(dollarify(arr))			
			$('#mrr').text(dollarify(mrr))			
			// $('#arpu').text(dollarify(arpu))		
			$('#subs').text(subs)			
			$('#growth').text(response.chartmogul.summary['mrr-percentage-change'] + "%")			
			$('#churn').text(response.chartmogul.summary['current-mrr-churn-rate'] + "%")			

			// var progress = 100 * (arr / 10000000)
			// $('#arr_progress_bar').css('width', progress + '%')

			// var tenk_progress = 100 * (arr / 12000000)
			// $('#tenk_progress_bar').css('width', tenk_progress + '%')


			// var tenk_progress = 100 * (arr / 24000000)
			// $('#twentyk_mrr_bar').css('width', tenk_progress + '%')

			// var salary_progress = 100 * (arr / 18000000)
			// $('#salary_progress_bar').css('width', salary_progress + '%')

			// var triumph_price = 1500000
			// var ducati_price = 1200000

			// var honda_price = 590000
			// var kawasaki_price = 570000

			// var bike_progress_luxe = 100 * (mrr / (triumph_price))
			// $('.braap_progress_bar.luxe').css('width', bike_progress_luxe + '%')
			// $('span.moto_label.luxe').css('left', bike_progress_luxe + '%').text(Math.round(bike_progress_luxe) + '%')

// 			var bike_progress_bootstrap = 100 * (arr / (honda_price + kawasaki_price))
// 			$('.braap_progress_bar.bootstrap').css('width', bike_progress_bootstrap + '%')
// 			$('span.moto_label.bootstrap').css('left', bike_progress_bootstrap + '%').text(Math.round(bike_progress_bootstrap) + '%')
// 

			
			$('.moto_meter_bike').each(function(){
				var price = parseInt($(this).attr('data-price')) * 100
				var percent = (mrr / price) * 100
				if (percent > 100) {
					var unlocked = $('<span />').addClass('unlocked').text('Unlocked')
					$(this).find('.bike_price span.the_price').after(unlocked)
					$(this).addClass('unlocked')
				}
				$(this).find('.bike_progress span').css('width', percent + "%")
				$(this).find('.the_price').text("USD "+dollarify(price))
			})

			$('#revenue_chart').css('background', '#FFF')

			var ctx = document.getElementById('revenue_chart').getContext('2d');
			var chart = new Chart(ctx, {
			    // The type of chart we want to create
			    type: 'line',

			    // The data for our dataset
			    data: {
			        labels: response.chartmogul.entries.map(function(month){
			        	s = month.date.split("-")
			        	return s[0] + "-" + s[1]
			        }),
			        datasets: [{
			            backgroundColor: '#9ECCED',
			            borderColor: '#1B80B6',
			            lineTension: 0,
			            data: response.chartmogul.entries.map(function(month){

			            	return parseInt(month.mrr / 100)
			            })
			        }]
			    },

			    // Configuration options go here
			    options: {
			    	maintainAspectRatio: false,
			    	legend: {
							display: false
						},
						// annotation: {
						// 	annotations: common_annotations
						// }
			    }
			});
// 			$('#otp_chart').css('background', '#FFF')
// 
// 			var ctx = document.getElementById('otp_chart').getContext('2d');
// 			var chart = new Chart(ctx, {
// 			    // The type of chart we want to create
// 			    type: 'line',
// 
// 			    // The data for our dataset
// 			    data: {
// 			        labels: response.one_time_payments.map(function(day){
// 			        	s = day[0].split("T")
// 			        	return s[0]
// 			        }),
// 			        datasets: [{
// 			            backgroundColor: '#9ECCED',
// 			            borderColor: '#1B80B6',
// 			            lineTension: 0,
// 			            data: response.one_time_payments.map(function(day){
// 
// 			            	return parseInt((day[1] * otp_dollar_value) / 100)
// 			            })
// 			        }]
// 			    },
// 
// 			    // Configuration options go here
// 			    options: {
// 			    	maintainAspectRatio: false,
// 			    	legend: {
// 							display: false
// 						},
// 			    }
// 			});

		});


	

}

// $(document).on('turbolinks:before-cache', function(){
// 	//reset certain stuff
// 	$('.dropdown').removeClass('is-active')
// 	$('.blog_table_of_contents').removeClass('fixed')
// 	$('.blog_share_links').removeClass('fixed')
// 	Waypoint.refreshAll()
// })

$(document).ready(function() {

	function fire_confetti() {
		confetti({
		  spread: 180
		});
		return
	}

	var clog = new ChangelogBadge()
	clog.fetch()

	if ("ontouchstart" in document.documentElement)
	{
	  var isTouch = true;
	}
	else
	{
		var isTouch = false;
	}

	if (isTouch) {
		$('.dropdown.is-hoverable').removeClass('is-hoverable')
	}

	// resize_banners()
	// animate_visual()
	// resize_key_visual()
	construct_mobile_menu()

	if ($('.api_calculator_layer').length) {
		function calculate_recommended_plan() {
			var total = parseInt($('.api_calc_result').text().replace(/\D/g, ""))
			$('.plan_note').hide()
			if (total <= 1000) {
				$('.recommended_plan').hide()
				$('.recommended_plan.automate').show()
			}
			if (total > 1000 && total < 50000) {
				$('.recommended_plan').hide()
				$('.recommended_plan.scale').show()
			}
			// if (total > 10000 && total <= 50000) {
			// 	$('.recommended_plan').hide()
			// 	$('.recommended_plan.business').show()
			// }
			if (total >= 50000) {
				$('.recommended_plan').hide()
				$('.plan_note.enterprise').show()
				$('.recommended_plan.enterprise').show()
			}
			// if (total > 2000000) {
			// 	$('.recommended_plan').hide()
			// 	$('.plan_note.contact').show()
			// 	$('.recommended_plan.contact').show()
			// }
		}
		function calculate_api_usage() {
			var total = 0
			$('.api_calculator_layer input.slider').each(function(){
				var val = $(this).val()
				var prepend = ""
				if (val >= 10000) {
					prepend = "> "
				}
				$(this).siblings('.api_calc_number').text(prepend + numberWithCommas(val))
			})
			$('.api_calculator_layer').not('.exclude').each(function(){
				if (!$(this).is("[data-api]") && !$(this).is("[data-value]")) {
					total += parseInt($(this).find('input').val())
				}
				if ($(this).is("[data-value]")) {
					total += (parseInt($(this).find('input').val()) * parseInt($(this).attr('data-value')))
				}
				if ($(this).is("[data-api]") && $(this).attr('data-api') == "gifs") {
					total += (parseInt($(this).find('input').first().val()) * parseInt($(this).find('input').last().val()))
				}
				if ($(this).is("[data-api]") && $(this).attr('data-api') == "videos") {
					var length = parseInt($(this).find('input').last().val())
					// length = 5.0*Math.ceil(length/5.0)
					length = Math.round(length/5.0)
					var volume = parseInt($(this).find('input').first().val())
					total += volume * (length+1) //+1 is a watermark
				}
				if ($(this).is("[data-api]") && $(this).attr('data-api') == "movies") {
					var length = parseInt($(this).find('input').last().val())
					// length = 5.0*Math.ceil(length/5.0)
					length = Math.round(length/5.0)
					var volume = parseInt($(this).find('input').first().val())
					total += volume * (length)
				}
			})
			var prepend = ""
			if (total >= 10000) {
				prepend = "> "
			}

			$('.api_calc_result').text(prepend + numberWithCommas(total))
			calculate_recommended_plan()

		}
		$('.api_calculator_layer input.slider').on('input', function(){
			calculate_api_usage()
		})
		calculate_api_usage()
	}

	if ($('.massive_carousel').length) {
		$('.massive_carousel').slick({
		  variableWidth: true,
		  centerMode: true,
		  arrows: false,
		  focusOnSelect: true,
		  dots: true,
		})
		$('.big_chart').each(function(){
			if (!$(this).attr('id')) {
				return
			}
			if ($(window).width() < 768) {
				$('.massive_slide_inner').height(.8 * $(window).height())
			}
			var data = $(this).attr('data-the-data').split(",")
			var highest = Math.max.apply(Math, data)
			$(this).siblings('.slide_label').prepend(`<span>$${numberWithCommas(parseInt(highest))} MRR</span>`)
			var ctx = document.getElementById($(this).attr('id')).getContext('2d');
			var chart = new Chart(ctx, {
			    type: 'line',
			    data: {
			    	labels: data.map(function(n,i){
			    		return i+1
			    	}),
		        datasets: [{
		            backgroundColor: '#9ECCED',
		            borderColor: '#1B80B6',
		            lineTension: 0,
		            data: data.map(function(n){
					    		return parseInt(n)
					    	})
		        }]
			    },
			    // Configuration options go here
			    options: {
			    	scales: {
    	        yAxes: [{
  	            ticks: {
  	              display: false
  	            },
  	            gridLines: {
                  display:false,
                  tickMarkLength: 0
                }
    	        }],
    	        xAxes: [{
  	            ticks: {
  	              display: false
  	            },
  	            gridLines: {
                  display:false,
                  tickMarkLength: 0
                }  	            
    	        }]
	    	    },
			    	maintainAspectRatio: false,
			    	layout: {
			    		padding: 0,
			    	},
			    	legend: {
							display: false
						},
			    }
			})
		})
	}

	if ($('.million_progress').length) {
		$.getJSON('https://app.bannerbear.com/api/v1/open/revenue')
			.done( function(response) {
				arr = response.chartmogul.entries[response.chartmogul.entries.length-1].arr
				var goal = 100000000
				var percent = 100*(arr/goal)
				$('.million_progress span').css('width', `${percent}%`)
				$('#arr').text(dollarify(arr))	
			})		
	}

	if ($('.integromat_step.dotdotdot').length) {
		function animate_dots() {
			var dot_i = 0
			$('.integromat_step.dotdotdot .dot').each(function(){
				$(this).delay( (dot_i*200) ).hide().fadeIn( 100 )
				dot_i++
			})
		}
	}

	$('.blog_subnav img.search_icon').on('click tap', function(){
		$('.blog_search.blog input').val('')
		$('.blog_search.blog').toggle()
		if ($('.blog_search.blog').is(':visible')) {
			$('.blog_search.blog input').focus()
		}
	})

	if ($('.instant_search_results').length) {
		//reset for turbolinks
		$('.helpdesk_container, .helpdesk_collection, section.section.two_column.alt').removeClass('fade')
		$('.instant_search_results').hide()

		let timeoutID = null;

		function findArticle(str) {
		  console.log('search: ' + str)
		  var json_file = "/help/articles.json"
		  if ($('.blog_search.blog').length || $('.blog_search.blog_grid').length) {
		  	json_file = "/blog/search.json"
		  }
		  str = str.toLowerCase()
		  if (str == "") {
		  	$('.helpdesk_container, .helpdesk_collection, section.section.two_column.alt').removeClass('fade')
		  	$('.instant_search_results').hide()
		  }
		  if (str != "") {
		  	var google_search_url = `${$('.instant_search_results li.default').attr('data-url')} ${str}`
		  	$('.instant_search_results li.default a').attr('href', google_search_url)
  			$.ajax({
  				url: json_file,
  				type: 'GET',
  		    dataType: 'json'
  		  }).done(function(data){
  		  	var articles = data
  		  	.map(function(article) {
  		  		var text = (article['name'] + " " + article['summary']).toLowerCase().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s{2,}/g, ' ')
  		  		article['score'] = (text.match(new RegExp(str, "g")) || []).length
  		  		return article
  		  	})
  		  	.filter(function(article){
  		  		if (article['score'] > 0) {
  		  			return article
  		  		}
	        })
	        .sort(function(a, b) {
	          return a['score'] - b['score']
	        }).slice(0, 8)
	        $('.helpdesk_container, .helpdesk_collection, section.section.two_column.alt').addClass('fade')
	        $('.instant_search_results').show()
	        console.log(articles)
	        $('.instant_search_results ul li:not(.default)').remove()
	        if (articles.length == 0) {
	        	$('.helpdesk_container, .helpdesk_collection, section.section.two_column.alt').removeClass('fade')
	        	$('.instant_search_results').hide()
	        }
	        for (i in articles) {
	        	var li = $('<li />')
	        	var href = `/help/articles/${articles[i]['number']}-${articles[i]['slug']}/`
	        	if ($('.blog_search.blog').length || $('.blog_search.blog_grid').length) {
	        		var slug = articles[i]['slug'].split("-")
	        		slug = slug.slice(3,slug.length).join("-").replace(".html.markdown", "/")
	        		href = `/blog/${slug}`
	        	}
	        	var a = $('<a />').attr('href', href)
	        	a.text(articles[i]['name'])
	        	li.append(a)
	        	$('.instant_search_results ul').prepend(li)
	        }
  		  })
		  }
		}

		$('.blog_search input, input.instant_kb_search').on('keyup search', function(e) {
		  clearTimeout(timeoutID);
		  const value = e.target.value
		  timeoutID = setTimeout(() => findArticle(value), 500)
		});
	}

	if ($('body.help_articles').length) {
		var remote_url = window.location.pathname
		remote_url = "https://bannerbear.helpscoutdocs.com" + remote_url.replace("/help/articles/", "/article/")
		// $.ajax({
		// 	url: remote_url,
		// 	type: 'GET'
		// })
	}

	if ($('.airtable_animated').length) {
		function animate_airtable() {
			var row_i = 0
			$('.airtable_animated').find('td.success span, img.airtable_attachment.result').hide()
			$('.airtable_animated tbody tr').each(function(){
				$(this).find('td.success span').delay( 500 + (row_i*500) ).fadeIn( 0 )
				$(this).find('img.airtable_attachment.result').delay( 900 + (row_i*500) ).fadeIn( 0 )
				row_i++
			})
			setTimeout(function(){
				animate_airtable()
			},3000)
		}
		animate_airtable()
	}

	//remove zapier CTA auto-added from embeds
	if ($('.blog_body').length) {
		setTimeout(function(){
			console.log("Tweaking shadow root")
			$(".blog_body .hydrated").each(function(){
				var sr = $(this)[0].shadowRoot
				$(sr).find(".scratch").hide()
				$(sr).find(".scroll").css('margin-bottom', '30px')
			})
		},1000)
	}


	if ($('.blog_body').length) {
		if ($('blockquote[data-blockquote-image-url]').length) {
			$('blockquote[data-blockquote-image-url]').each(function(){
				var url = $(this).attr('data-blockquote-image-url')
				$(this).find('p').hide()
				var text = $(this).find('p').text()
				var img = $('<img />').attr('src', url).attr('alt', text)
				// var a = $('<a />').attr('href', 'https://twitter.com/intent/tweet?url=' + encodeURI(url)).attr('target', '_blank')
				$(this).append(img)
			})
		}
	}

	if ($('body.tools_shot').length) {
		let r = Math.random().toString(36).substring(3);
		$('.hashstamp').text(r)
	}

	if ($('.blog_body h2').length) {
		$('.blog_body h2, .blog_body h3').each(function(){
			var a = $('<a />')
			a.text($(this).text())
			a.attr('href', '#' + $(this).attr('id')).addClass('dropdown-item')
			if ($(this).prop("tagName") == "H3") {
				a.addClass('indented')
			}
			$('.toc_bar .dropdown-content').append(a)

			var b = a.clone()
			var li = $('<li />')
			li.append(b.removeClass('dropdown-item'))

			if ($(this).prop("tagName") == "H3") {
				li.addClass('indented')
			}

			$('.blog_body .toc ul').append(li)

		})
		$('.toc_bar .dropdown-content a').on('click tap', function(){
			$('.toc_bar .dropdown').removeClass('is-active')
		})
	}

	if ($('.blog_container').length) {
		//highlight external links
		$('.blog_body a').each(function(){
			if ($(this).parents('.blog_is_finished').length) {
				return
			}
			if (!$(this).attr('href')) {
				return
			}
			var url = $(this).attr('href')
			if (url[0] == "#" || url[0] == "/") {
				return
			}
			console.log(url)
			var external = false
			let domain = (new URL(url)).hostname
			if (domain.indexOf('bannerbear.com') == -1) {
				external = true
			}
			if (external == true) {
				console.log("External link found: " + url)
				$(this).attr('target', '_blank')
				$(this).text(`${$(this).text()} ↗`)
			}
		})

		var waypoints = $('.blog_container').waypoint({
		  handler: function(direction) {
		  	if (direction == "down") {
		  		$('.toc_bar').show().addClass('animated slideInUp')
		  	}
		  	if (direction == "up") {
		  		$('.toc_bar').hide().removeClass('animated slideInUp')
		  	}
		  }
		})

		var waypoints = $('.blog_body h2, .blog_body h3').waypoint({
			handler: function(direction) {
				var title = this.element.innerText
				$('.toc_bar .current_section').text(title)
				$('.toc_bar .dropdown-content a').removeClass('current')
				$('.toc_bar .dropdown-content a[href="#'+this.element.id+'"]').addClass('current')
			}
		})
	}

	// $('.blog_body img').on('load',function(){
	// 	console.log("Lazy loaded...")
	// 	Waypoint.refreshAll()
	// })

	$('img.generator_selection_item').on('click tap', function(){
		$('img.generator_selection_item').removeClass('selected')
		$(this).addClass('selected')
		var form_id = $(this).attr('data-form-id')
		var current = $('iframe').attr('src')
		var new_src = current.split("/forms/")[0] + "/forms/" + form_id
		$('iframe').attr('src', new_src)
		$([document.documentElement, document.body]).animate({
        scrollTop: $('#generator_iframe_step').offset().top
    }, 1000);
	})

	$('.new_pricing_dropdown select').on('change', function(){
		var base = parseInt($(this).parents('.new_pricing_dropdown').attr('data-base'))
		var additional = parseInt($(this).parents('.new_pricing_dropdown').attr('data-additional'))
		var num = parseInt($(this).val())
		var plan = $(this).parents('.new_pricing_dropdown').attr('data-plan')
		var new_price = (base + (additional * num))
		$(`.plan_price[data-plan=${plan}]`).find('.the_dollar_sign').removeClass('adjust')
		if (new_price.toString()[0] == "4") {
			$(`.plan_price[data-plan=${plan}]`).find('.the_dollar_sign').addClass('adjust')
		}
		$(`.plan_price[data-plan=${plan}]`).find('.the_number').text(new_price)
	})

	// $('.custom_price_slider').on('input', function(){
	// 	var base_price = 399
	// 	var base_credits = 100000
	// 	var additional_credits = 100000
	// 	var additional_price = 49
	// 	var quantity = $(this).val() - 1
	// 	var the_credits = base_credits + (additional_credits*quantity)
	// 	$('.the_credits').text(numberWithCommas(the_credits) + " API credits")
	// 	var the_price = base_price + (additional_price*(quantity))
	// 	$('.the_price').text(dollarify(the_price * 100) + " / month")
	// })


	$('.blog_table_of_contents a').on('click tap', function(){
		var current = $(this)
		setTimeout(function(){
			$('.blog_table_of_contents a').removeClass('current')
			current.addClass('current')
		},50)
	})

	if ($('.modal').length) {
		$('.modal').each(function(){
			$('body').append($(this))
		})
	}

	if ($('[data-modal]').length) {
		$('[data-modal]').on('click tap', function(){
			$('.modal#' + $(this).attr('data-modal')).addClass('is-active')
		})
	}



	function open_pricing_modal_for(string) {
		var classname = string.toLowerCase().replaceAll("&","").replaceAll(" ", "-").replace(/[()]/g, '')
		console.log(classname)
		$('#pricing_page_modal p.modal-card-title').text(string)
		$('.pricing_page_modal_info').hide()
		$('.pricing_page_modal_info.' + classname).show()
		$('#pricing_page_modal').addClass('is-active')
	}

	function init_google_search() {
		var query = $('.blog_search input').val()
		if ($('input.instant_kb_search').length) {
			query = $('input.instant_kb_search').val()
		}
		if (query != "") {
			if ($('.blog_search.kb').length || $('input.instant_kb_search').length) {
				var url = "http://google.com/search?q=site:bannerbear.com/help/articles"
			} else {
				var url = "http://google.com/search?q=site:bannerbear.com/blog"
			}
			window.open(url + ' ' + query, '_blank');
		}
	}

	$('.blog_search input, input.instant_kb_search').on('keypress',function(e) {
    if(e.which == 13) {
      init_google_search()
    }
	});

	$('.blog_search button').off('click tap').on('click tap', function(){
		init_google_search()
	})

	$('#pricing_page_modal .modal-background').off('click tap').on('click tap', function(){
		$('#pricing_page_modal').removeClass('is-active')
	})

	$('td.feature_title em, td.feature_title img').off('click tap').on('click tap', function(){
		text = $(this).parents('td.feature_title').find('em').text()
		open_pricing_modal_for(text)
	})


	$('.tiny_explainer .general_modal_link').off('click tap').on('click tap', function(){
		text = $(this).attr('data-modal')
		open_pricing_modal_for(text)
	})

	$('.general_new_slice span.info, ul.closing_thoughts span.info').off('click tap').on('click tap', function(){
		var id = $(this).attr('data-id')
		$('#journey_page_modal p.modal-card-title').text(id)
		$('#journey_page_modal').find('.journey_page_modal_info').hide()
		$('#journey_page_modal').find('.journey_page_modal_info[data-id="'+id+'"]').show()
		$('#journey_page_modal').addClass('is-active')
	})

	$('#journey_page_modal .modal-background, #journey_page_modal .delete').off('click tap').on('click tap', function(){
		$('#journey_page_modal').removeClass('is-active')
	})

	$('.global_container').css('min-height', $(window).height() - $('.footer_container').height())

	$('.image_output_single.video_player, .column.image_grid.collection.videos .video_player, .video_story .video_player, .image_preview.video_player.fullwidth').off('click tap').on('click tap', function(){
		console.log("Video player")
		var video = $(this).find('video')[0]
		if (!$(this).hasClass('is_playing')) {
			video.play()
			$(this).addClass('is_playing')
		} else {
			video.pause();
			video.currentTime = 0;
			$(this).removeClass('is_playing')
		}
	})

	if ($('.team_members').length) {
		var t = 0
		$('.team_member').each(function(){
			var face = $(this).css('visibility', 'hidden')
			var anims = ["fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp"]
			setTimeout(function(){
				face.css('visibility', 'visible').addClass('animated').addClass(anims[Math.floor(Math.random() * anims.length)])
			}, t * 200)
			t++
		})
		$('.team_timeline_event').css('visibility', 'hidden')
		$('.team_timeline_event').first().css('visibility', 'visible')

		var waypoints = $('.team_timeline_event').waypoint({
		  handler: function(direction) {
		  	if (direction == "down") {
		  		var index = parseInt(this.key.split("-")[1])
		  		if ($('.team_timeline_event').eq(index).css('visibility') == "hidden") {
		  			$('.team_timeline_event').eq(index).css('visibility', 'visible').addClass('animated bounceIn')
		  			this.destroy()
		  		}
		  	}
		  },
			offset: '70%'
			
		})

	}

	// var changelog = new ChangelogBadge('#changelog-container');
	// changelog.fetch();

	$('.tweet_colorpicker').each(function(){
		$(this).css({backgroundColor: $(this).attr('data-color')})
	})

	$('.tweet_colorpicker').off('click tap').on('click tap', function(){
		$('.tweet_colorpicker').removeClass('selected')
		$(this).addClass('selected')
	})

	$('.tweetagram-generate').off('click tap').on('click tap', function(){
		var tweet_url = $('[name=tweet_url]').val()
		if (tweet_url == "") {
			return false
		}

		$([document.documentElement, document.body]).animate({
        scrollTop: $('.tweetagram-generate').offset().top - 50
    }, 1000);
		$('.image_output_demo').show()

		$(this).addClass('is-loading')
		$('p.status').show()
		$('p.status span').hide()
		$('p.status span.stage_1').show()
		$('[name=tweet_url]').attr('disabled', 'disabled')
		$('.tweetagram_examples').css('opacity', 0.5)
		//basic validation (there's more validation server side!)

		var p = new FakeProgress({
			timeConstant : 10000,
			autoStart : true
		});
		$('.image_output_progress .progress_bar').css({width: 0})
		$('.image_output_progress').show()
		$('span.help').hide()
		$('#image_result').html('')
		$('#image_result').hide()

		var tweet_id = tweet_url.split("?")[0].split("/").slice(-1)[0] 
		if (!tweet_id) {
			alert("Please enter a tweet URL")
			return false
		}

		var serverless_url = "https://oohuzinyb7.execute-api.us-east-1.amazonaws.com/" + "?tweet_id=" + tweet_id

		var myInterval = setInterval(function(){
			percent = (p.progress*100).toFixed(1) + '%'
			$('.image_output_progress .progress_bar').animate({width: percent}, 500)
		},1000)

		console.log(serverless_url)

		$.ajax({
			url: serverless_url,
			type: 'GET',
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
	  }).done(function(data){

	  	$('p.status span').hide()
	  	$('p.status span.stage_2').show()

  	  var img = new Image();
  	  img.onload = function() {

  	  	clearInterval(myInterval)
  	  	$('#image_result').show()
	  	  fire_confetti()
	  	  $('.image_output_progress').hide()
	  	  $('#image_result').find('.column').height($('#image_result').find('img').first().width())

	  		$('.image_output_demo').hide()
	  		$('.button').removeClass('is-loading')
	  		$('[name=tweet_url]').removeAttr('disabled')
	  		$('[name=tweet_url]').val('')
	  		// location.hash = "#image_result";
	  		$('p.status').hide()

	  		$('.share_this').show()
	  		var share_url = "https://www.bannerbear.com/demos/tweetagram?tweet_id=" + encodeURI(tweet_id)
	  		$('.share_url').text(share_url).attr('href', share_url)

  	  }
  	  img.src = data[0];

	  	for (let n in data){
	  		if (n == 0 || n % 2 == 0) {
	  			//new row!
	  			var new_column = $('<div class="columns" />')
	  			$('#image_result').append(new_column)
	  		}
	      let image = data[n]
	      var img = $('<img />').attr('src', image)
	      var column = $('<div class="column" />').append(img)
	      $('#image_result').find('.columns').last().append(column)
	    }


		}).fail(function(data){
			alert("Error fetching tweet data")
			$('.button').removeClass('is-loading')
			$('[name=tweet_url]').removeAttr('disabled')
			$('[name=tweet_url]').val('')
			$('.image_output_progress').hide()
			$('p.status').hide()
			$('span.help').show()

		})

	})

	$('.github-generate').off('click tap').on('click tap', function(){
		var repo = $('[name=github_repo]').val()
		if (repo == "") {
			return false
		}

		$([document.documentElement, document.body]).animate({
        scrollTop: $('.github-generate').offset().top - 50
    }, 1000);
		$('.image_output_demo').show()

		$(this).addClass('is-loading')
		$('p.status').show()
		$('p.status span').hide()
		$('p.status span.stage_1').show()
		$('[name=github_repo]').attr('disabled', 'disabled')
		$('.tweetagram_examples').css('opacity', 0.5)
		//basic validation (there's more validation server side!)

		var p = new FakeProgress({
			timeConstant : 10000,
			autoStart : true
		});
		$('.image_output_progress .progress_bar').css({width: 0})
		$('.image_output_progress').show()
		$('span.help').hide()
		$('#image_result').html('')
		$('#image_result').hide()

		var serverless_url = "https://lpf64gdwdb.execute-api.us-east-1.amazonaws.com/" + "?repo=" + repo

		var myInterval = setInterval(function(){
			percent = (p.progress*100).toFixed(1) + '%'
			$('.image_output_progress .progress_bar').animate({width: percent}, 500)
		},1000)
		$('#image_result').html('')

		console.log(serverless_url)

		$.ajax({
			url: serverless_url,
			type: 'GET',
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
	  }).done(function(data){

	  	$('p.status span').hide()
	  	$('p.status span.stage_2').show()

  	  var img = new Image();
  	  img.onload = function() {

  	  	clearInterval(myInterval)
  	  	$('#image_result').show()
	  	  fire_confetti()
	  	  $('.image_output_progress').hide()
	  	  var height = $('#image_result').find('img').first().width() / 2
	  	  $('#image_result').find('.column').height(height)

	  		$('.image_output_demo').hide()
	  		$('.button').removeClass('is-loading')
	  		$('[name=github_repo]').removeAttr('disabled')
	  		$('[name=github_repo]').val('')
	  		// location.hash = "#image_result";
	  		$('p.status').hide()

	  		$('.share_this').show()
	  		var share_url = "https://www.bannerbear.com/demos/github-social-preview-generator-tool?repo=" + encodeURI(repo)
	  		$('.share_url').text(share_url).attr('href', share_url)

  	  }
  	  img.src = data[0];

	  	for (let n in data){
	  		if (n == 0 || n % 2 == 0) {
	  			//new row!
	  			var new_column = $('<div class="columns" />')
	  			$('#image_result').append(new_column)
	  		}
	      let image = data[n]
	      var img = $('<img />').attr('src', image)
	      var column = $('<div class="column" />').append(img)
	      $('#image_result').find('.columns').last().append(column)
	    }


		}).fail(function(data){
			alert("Could not find repository!")
			$('.button').removeClass('is-loading')
			$('[name=github_repo]').removeAttr('disabled')
			$('[name=github_repo]').val('')
			$('.image_output_progress').hide()
			$('p.status').hide()
			$('span.help').show()

		})

	})

	$('#try_example_repo').off('click tap').on('click tap', function(){
		var url = "https://github.com/sindresorhus/awesome"
		$('[name=github_repo]').val(url)
		$('.github-generate').click()
	})

	$('#try_example_tweet').off('click tap').on('click tap', function(){
		var url = "https://twitter.com/paulg/status/1075675559865270273?s=20"
		$('[name=tweet_url]').val(url)
		$('.tweetagram-generate').click()
	})


	if ($('.tweetagram_container').length) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		if (urlParams.has('tweet_id')) {
			var tweet_url = "https://twitter.com/user/status/" + urlParams.get('tweet_id')
			$('input[name=tweet_url]').val(tweet_url)
			$('.tweetagram-generate').click()
		}
		if (urlParams.has('repo')) {
			$('input[name=github_repo]').val(urlParams.get('repo'))
			$('.github-generate').click()
		}
	}




	if ($('#api_partial').length) {
		var api_partial = ace.edit('api_partial', {useWorker: false});
		var this_json = {"created_at":"2020-03-06T11:33:24.914Z","status":"pending","self":"https://api.bannerbear.com/v2/images/90367b867f10c7ad3b67","uid":"90367b867f10c7ad3b67","image_url":null,"template":"96da27a99b561","modifications":[{"name":"image_container_rectangle_0","image_url":"https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"},{"name":"greeting","text":"Lorem ipsum dolor sit amed"},{"name":"avatar","image_url":"https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"}],"webhook_url":null}
		api_partial.setValue(JSON.stringify(this_json, null, '  '))
		api_partial.setReadOnly(true)
		api_partial.setOption('highlightActiveLine', false)
		api_partial.renderer.$cursorLayer.element.style.display = "none"
		api_partial.session.setMode("ace/mode/javascript");
		api_partial.setFontSize("14px");
		api_partial.getSession().selection.clearSelection();
	}

	if ($('#api_demo_editor').length) {
		var api_editor = ace.edit('api_demo_editor', {useWorker: false});
		var this_json = {
		  "template": "197xPQmDnvDG3E82YX",
		  "modifications": [
		    {
		      "name": "background",
		      "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
		    },
		    {
		      "name": "title",
		      "text": "Lorem ipsum dolor sit amed"
		    }
		  ]
		}
		api_editor.setValue(JSON.stringify(this_json, null, '  '))
		api_editor.session.setMode("ace/mode/javascript");
		api_editor.setFontSize("14px");
		api_editor.getSession().selection.clearSelection();
	}

	if ($('#api_demo_response').length) {
		var api_response = ace.edit('api_demo_response', {useWorker: false});
		api_response.setOption('highlightActiveLine', false)
		api_response.setReadOnly(true)
		api_response.renderer.$cursorLayer.element.style.display = "none"
		api_response.session.setMode("ace/mode/javascript");
		api_response.setFontSize("14px");
		api_response.getSession().selection.clearSelection();
	}

	$('#collections_demo_form button, #images_demo_form button, #videos_demo_form button').off('click tap').on('click tap', function(){

		//yes, the API key is here for you to see!
		//all you can do with it is make requests to the demo template... which is the purpose of the demo :)
		var api_key = "y0bn1wAEiFgBXKQfyaK0Dgtt"

		if ($(this).parents('section.section').attr('data-api-key')) {
			var api_key = $(this).parents('section.section').attr('data-api-key')
		}

		if ($(this).hasClass('is-loading')) {
			alert('Wait for your previous request to finish first before sending another one')
			return false
		}
		var p = new FakeProgress({
			timeConstant : 2000,
			autoStart : true
		});
		$('.image_output_progress .progress_bar').css({width: 0})
		$('.image_output_progress').show()
		$('.image_output_demo p.demo_instructions').remove()
		$(this).attr('disabled', 'disabled').addClass('is-loading')
		$('.image_output_demo').addClass('in_progress')

		if ($(this).parents('#images_demo_form').length) {
			var url = "https://api.bannerbear.com/v2/images"
			var data = {
				template: "ok0l2K5mv4YD3j1Yxg",
				"modifications": [
			    {
			      "name": "photo",
			      "image_url": $('#collection_bg_value').val()
			    },
			    {
			      "name": "text",
			      "fit": true,
			      "font_family": $('#collection_font_value').val(),
			      "text": $('#collection_text_value').val()
			    },
			    {
			      "name": "avatar",
			      "image_url": $('#collection_face_value').val()
			    }
			  ],
			}
		} 

		if ($(this).parents('#collections_demo_form').length) {
			var url = "https://api.bannerbear.com/v2/collections"
			var data = {
				template_set: "mMadQ7Xzy9z8KD09Ne",
				"modifications": [
			    {
			      "name": "photo",
			      "image_url": $('#collection_bg_value').val()
			    },
			    {
			      "name": "text",
			      "fit": true,
			      "font_family": $('#collection_font_value').val(),
			      "text": $('#collection_text_value').val()
			    },
			    {
			      "name": "avatar",
			      "image_url": $('#collection_face_value').val()
			    }
			  ],
			}

			$([document.documentElement, document.body]).animate({
	        scrollTop: $('#collections_demo_form').offset().top - 10
	    }, 1000);
		}

		if ($(this).parents('#videos_demo_form').length) {
			var url = "https://api.bannerbear.com/v2/videos"
			var day_name = new Date().toLocaleString('en-us', {weekday:'long'})
			var data = {
				video_template: "3Jg8PBvbraA9RpkYlD",
				input_media_url: $('#video_media_url_value').val(),
				trim_to_length_in_seconds: 5,
				"modifications": [
			    {
			      "name": "date",
			      "text": "Today is " + day_name
			    },
			    {
			      "name": "text",
			      "text": $('#video_text_value').val()
			    },
			    {
			      "name": "avatar",
			      "image_url": $('#video_face_value').val()
			    }
			  ],
			}
		} 


		var time_start


		function update_collection_results(json) {
			console.log(data)
			if (json.status && json.status == "failed") {
				alert("This operation failed! Sorry about that...")
				return false
			}
			$('.image_output_demo').removeClass('animated rubberBand')
			if (json.status && (json.status == "pending" || json.status == "rendering")) {
				if (json.hasOwnProperty('percent_rendered')) {
					percent = parseInt(json.percent_rendered)
					if (percent < 51) {
						percent = (p.progress*50).toFixed(1) + '%'
					} else {
						percent = percent + '%'
					}
					//get current and nudge if necessary
					// var current_percent = parseInt($('.image_output_progress .progress_bar').attr('style').replace(/\D/g,''))
					// console.log(current_percent)
					// if (current_percent == percent) {
					// 	percent = percent + 5
					// }

				} else {
					percent = (p.progress*100).toFixed(1) + '%'
				}
				$('.image_output_progress .progress_bar').animate({width: percent}, 500)

				setTimeout(function(){
					$.ajax({
						url: json.self,
						type: 'GET',
				    beforeSend: function (xhr){ 
			      	xhr.setRequestHeader('Authorization', "Bearer " + api_key); 
			      },
				    contentType: 'application/json; charset=utf-8',
				    dataType: 'json'
				  }).done(function(data){
						update_collection_results(data)
					}).fail(function(data){
						update_collection_results(data)
					})
				},500)
			}
			//completed
			if (json.status && json.status == "completed") {
				time_end = performance.now()
				console.log("Rendered in " + (time_end - time_start)/1000 + " seconds")
				$('.image_output_progress').hide()

				fire_confetti()

				$('#collections_demo_form button, #images_demo_form button, #videos_demo_form button').removeClass('is-loading').removeAttr('disabled')
				$('.image_output_demo').removeClass('in_progress')
				if (json.image_url) {
					$('#collection_image_landscape').attr('src', json.image_url_jpg)
				}
				if (json.video_url) {
					$('.image_output_demo .image_output_single').html('')
					var video = $('<video />').attr('controls', true).attr('src',json.video_url)
					$('.image_output_demo .image_output_single').html(video)
				}
				if (json.images) {
					for (let n in json.images){
				    let image = json.images[n];
				    if(image['template'] == "7wpnPQZzV4yZdOgxoX"){
				    	$('#collection_image_square').attr('src', image['image_url_jpg'])
				    }
				    if(image['template'] == 'j14WwV5Vw3nDa7XrBx'){
				    	$('#collection_image_portrait').attr('src', image['image_url_jpg'])
				    }
				    if(image['template'] == 'ok0l2K5mv4YD3j1Yxg'){
				    	$('#collection_image_landscape').attr('src', image['image_url_jpg'])
				    }
					}
				}
				$('.image_output_demo').addClass('animated rubberBand')
			}
		}

		$('#collection_image_square').attr('src', "/images/samples/square_blank.png")
		$('#collection_image_portrait').attr('src', "/images/samples/pinterest_pin_blank.png")
		$('#collection_image_landscape').attr('src', "/images/samples/open_graph_blank.png")

		$.ajax({
			url: url,
			type: 'POST',
	    data: JSON.stringify(data),
	    beforeSend: function (xhr){ 
      	xhr.setRequestHeader('Authorization', "Bearer " + api_key); 
      },
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
	  }).done(function(data){
	  	time_start = performance.now()
			update_collection_results(data)
		}).fail(function(data){
			update_collection_results(data)
		})


	})

	$('.api_submit .button').off('click tap').on('click tap', function(){
		//yes, the API key is here for you to see!
		//all you can do with it is make requests to the demo template... which is the purpose of the demo :)
		var api_key = "y0bn1wAEiFgBXKQfyaK0Dgtt"

		if ($('.api_submit .button').attr('data-pending')) {
			alert('Wait for your previous request to finish first before sending another one')
			return false
		}
		$(this).addClass('is-loading')
		//check for errors
		var annotations = api_editor.getSession().getAnnotations()
		if (annotations.length > 0) {
			for (var i = 0; i < annotations.length; i++) { 
				if (annotations[i].type == "error") {
					alert("There is an error in your request JSON - please fix before submitting")
					$('.api_submit .button').removeClass('is-loading')
					return false
				}
			}
		}
		var url = "https://api.bannerbear.com/v2/images"
		var json = api_editor.getValue()
		if (json.trim() == "") {
			$('.api_submit .button').removeClass('is-loading')
			return false
		}

		function update_api_console(data) {
			var json = data
			api_response.setValue(JSON.stringify(json, null, '  '))
			api_response.getSession().selection.clearSelection();
			$('.api_submit .button').removeClass('is-loading').attr('disabled', true)
			$('.api_test_default').hide()
			if (json.status && json.status == "pending") {
				$('.api_loading_indicator').show()
				$('.api_image_result').hide()
				$('.api_submit .button').attr('data-pending', true)
				setTimeout(function(){
					$.ajax({
						url: json.self,
						type: 'GET',
				    beforeSend: function (xhr){ 
			      	xhr.setRequestHeader('Authorization', "Bearer " + api_key); 
			      },
				    contentType: 'application/json; charset=utf-8',
				    dataType: 'json'
				  }).done(function(data){
						update_api_console(data)
					}).fail(function(data){
						update_api_console(data)
					})
				},500)
			}
			if (json.status && json.status == "completed") {
				var img = $('<img />')
				img.attr('src', json.image_url)
				$('.api_loading_indicator').hide()
				$('.api_image_result').html('').append(img).show()
				$('.api_submit .button').removeAttr('data-pending').removeAttr('disabled')
			}
			if (json.status == 400) {
				$('.api_submit .button').removeAttr('data-pending').removeAttr('disabled')

			}

		}

		var data = JSON.parse(json)

		$.ajax({
			url: url,
			type: 'POST',
	    data: JSON.stringify(data),
	    beforeSend: function (xhr){ 
      	xhr.setRequestHeader('Authorization', "Bearer " + api_key); 
      },
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
	  }).done(function(data){
			update_api_console(data)
		}).fail(function(data){
			update_api_console(data)
		})
	})

	if ($('.blog_global_container pre code').length) {
		document.querySelectorAll('pre code').forEach((block) => {
			$(block).parents('pre').removeClass('plaintext')
		  hljs.highlightElement(block);
		});
	}



	// if ($('.code_container').length) {
	// 	document.querySelectorAll('pre code').forEach((block) => {
	// 	  hljs.highlightBlock(block);
	// 	});
	// 	code_height = $('.code_container').height()
	// 	$('.key_visual.api').css({
	// 		height: code_height + 'px',
	// 		marginTop: (-1*code_height) + 20 + 'px'
	// 	})
	// }

	if ($('body.open').length) {
		load_stats()
	}

	if ($('.subscribe_modal').length) {
		$.exitIntent('enable');
		$(document).bind('exitintent',
	  function() {
	  	if (!Cookies.get('modal_seen')) {
	  		$('.subscribe_modal').addClass('is-active')
	  	}
	  });
		$('button.modal-close').off('click tap').on('click tap', function(){
			$('.modal').removeClass('is-active')
			if (!$('body').hasClass('subscribe')) {
				Cookies.set('modal_seen', 'true', { expires: 7 })
			}
		})
	}

	// $('section.section h1 span em').transition({width: '100%'},500)
	if ($('section.section.journey_section.closing').length) {
		$('.columns.twitter_testimonals blockquote').each(function(){
			$(this).addClass('twitter-tweet').attr('data-dnt', true).attr('data-cards', 'hidden')
		})
	}

	if ($('#wall_of_love').length) {
		var element = $('#wall_of_love').prevAll('section.section').first()
		var waypoint = new Waypoint({
			element: element[0],
			handler: function(direction) {
				if (direction == "down") {
					$('.columns.twitter_testimonals blockquote').each(function(){
						$(this).addClass('twitter-tweet').attr('data-dnt', true).attr('data-cards', 'hidden')
					})
					waypoint.destroy()
				}
			}
		})
	}

	if ($('.key_visual:not(.api)').length) {
		var waypoint = new Waypoint({
		  element: $('.key_visual')[0],
		  offset: '100%',
		  handler: function(direction) {
		  	if (direction == "down") {
		  		setTimeout(function(){
		  			animate_key_visual()
		  		},500)
		  		waypoint.destroy()
		  	}
		  }
		})
	}

	// if ($('.bear_facts').length) {
	// 	var bear_facts_waypoint = new Waypoint({
	// 	  element: $('.bear_facts')[0],
	// 	  offset: '100%',
	// 	  handler: function(direction) {
	// 	  	if (direction == "down") {
	// 	  		$('.metric_num').each(function(){
	// 	  			var num = $(this).attr('data-num')
	// 	  			$(this).animateNumber({ 
	// 	  				number: num,
	// 	  				numberStep: function(now, tween) {
	// 	  					target = $(tween.elem);
	// 	  					var floored_number = Math.floor(now)
	// 	  					target.text(floored_number + '%');
	// 	  				}
	// 	  			},2000)
	// 	  		})
	// 	  		bear_facts_waypoint.destroy()
	// 	  	}
	// 	  }
	// 	})
	// }

	// var resizeId;
	// window.addEventListener('resize', function() {
	//   clearTimeout(resizeId);
	//   resizeId = setTimeout(function(){
	//     resize_key_visual()
	//   }, 10);
	// });

	// if ($('#typed').length) {
	// 	var typed = new Typed('#typed', {
	//     stringsElement: '#typed-strings',
	//     typeSpeed: 60,
	//     startDelay: 0,
	//     loop: true,
	//     loopCount: Infinity,
	//     showCursor: false,
	//     autoInsertCss: false,
	//     backDelay: 2000,
	//   });
	// }

	// if ($('body').hasClass('the-free-plan')) {
	// 	setInterval(function(){
	// 		var num = parseInt($('.free_pages_num span').text())
	// 		if (num >= 50) {
	// 			num = 10
	// 		}
	// 		var new_num = num + 1
	// 		$('.free_pages').removeClass('animated rubberBand')
	// 		setTimeout(function(){
	// 			$('.free_pages_num span').text(new_num)
	// 			$('.free_pages').addClass('animated rubberBand')
	// 		},100)
	// 	}, 2000)
	// }

// 	if ($('#myImageCompare').length) {
// 		var compare = $('#myImageCompare').imagesCompare({
// 			initVisibleRatio: 1,
// 	    animationDuration: 4000,
// 	    // animationEasing: "linear"
// 		}).data('imagesCompare');
// 		var waypoint = new Waypoint({
// 		  element: $('#myImageCompare')[0],
// 		  offset: '100%',
// 		  handler: function(direction) {
// 		  	if (direction == "down") {
// 		  		compare.setValue(0.1, true);
// 		  		waypoint.destroy()
// 		  	}
// 		  }
// 		})
// 
// 		// var hammertime = new Hammer($('#myImageCompare')[0]);
// 		// hammertime.on('panstart', function() {
// 		// 	console.log('preventing horizontal scroll')
// 		// 	$('html, body').css({
// 		// 	    overflow: 'hidden',
// 		// 	    // height: '100%'
// 		// 	});
// 		// })
// 		// hammertime.on('panend', function() {
// 		// 	console.log('restoring horizontal scroll')
// 		// 	$('html, body').css({
// 		// 	    overflow: 'auto',
// 		// 	    // height: 'auto'
// 		// 	});
// 		// })
// 	}

	// if ($('.banner_collection').length) {
	// 	resize_banners()
	// }

	// if ($('body').hasClass('resources_faq')) {
	// 	var hash = $(location).attr('hash')
	// 	console.log(hash)
	// 	if (hash) {
	// 		$(hash).find('.answer').toggle()
	// 		if (hash == "#cannot_auto_detect") {
	// 			$(hash).next('.faq_item').find('.answer').toggle()
	// 		}
	// 	}
	// }
	
	$('.dropdown-trigger').off('click tap').on('click tap', function(){
		///only mobile
		if (!isTouch && !$(this).hasClass('must_click')) {
			return false
		}
		$('.dropdown').not($(this).parents('.dropdown')).removeClass('is-active')
		$(this).parents('.dropdown').toggleClass('is-active')
	})

	$('.dropdown-trigger.changelog-items-trigger').off('click tap').on('click tap', function(){
		$(this).parents('.dropdown').toggleClass('is-active')
		new ChangelogBadge().viewed()
	})

	$('.pricing .toggle_switch input').off('click tap').on('click tap', function(){
		toggle_pricing()
			// $('.planprice').each(function(){
			// 	var num = $(this).attr('data-price')
			// 	$(this).animateNumber({ 
			// 		number: num,
			// 		numberStep: function(now, tween) {
			// 			target = $(tween.elem);
			// 			var floored_number = Math.floor(now)
			// 			target.text('$' + floored_number);
			// 		}
			// 	})
			// })
	})

	// $('.cocoen').cocoen();
	if ($('.socialShareBtn').length) {
		$('.socialShareBtn').simpleSocialShare();
	}

	// $('.run_code a').off('click tap').on('click tap', function(){
	// 	if ($('.code_container').hasClass('fade')) {
	// 		$('.code_container').removeClass('fade')
	// 		$('.key_visual.api').hide()
	// 		$('.key_visual.api .key_visual_banner_container').removeClass('animated fadeInRight fadeInLeft fadeOut rubberBand tada heartBeat fadeIn bounceInLeft bounceInRight').css({visibility: 'hidden'})
	// 	}
	// 	$(this).addClass('is-loading')
	// 	var run_code = $(this).parents('.run_code')
	// 	$('.key_visual.api').show()
	// 	animate_key_visual()
	// 	setTimeout(function(){
	// 		// run_code.hide()
	// 		$('.code_container').addClass('fade')
	// 		run_code.find('a').removeClass('is-loading')
	// 		// animate_key_visual()
	// 	},2000)
	// })

	function toggle_pricing() {
		$('.toggle_switch, .pricingtable').removeClass('monthly annual')
		$('.toggle_switch .monthly span, .toggle_switch .annual span').removeClass('selected')
		if ($('.toggle_switch input').prop("checked") == true) {
			$('.toggle_switch, .pricingtable').addClass('annual')
			$('.toggle_switch .annual span').addClass('selected')
		} else {
			$('.toggle_switch, .pricingtable').addClass('monthly')
			$('.toggle_switch .monthly span').addClass('selected')
		}
	}

	$('.pricing .monthly span.label').off('click tap').on('click tap', function(){
		$('.toggle_switch input').prop("checked", false)
		toggle_pricing()
	})

	$('.pricing .annual span.label').off('click tap').on('click tap', function(){
		$('.toggle_switch input').prop("checked", true)
		toggle_pricing()
	})

	$('.bike_price span.purchased').off('click tap').on('click tap', function(){
		$('.my_bikes.modal').addClass('is-active')
	})

	$('.pricing span.information').off('click tap').on('click tap', function(){
		$('.modal').addClass('is-active')
	})

	$('.pricing .modal .delete, .demos_smart-crop .modal .delete, .demos_face-detect-ai .modal .delete, .my_bikes.modal .delete').off('click tap').on('click tap', function(){
		$('.modal').removeClass('is-active')
	})

	$('.journey-to-10k-mrr .modal .delete').off('click tap').on('click tap', function(){
		$('.modal').removeClass('is-active')
	})


	$('.question').on('click', function(){
		$(this).siblings('.answer').toggle()
	})

	if ($('.slick_container').length) {
		if ($('body.integrations_zapier').length) {
			$('.slick_container').slick({
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
				centerMode: true,
				variableWidth: true,
				centerPadding: '40px',
				pauseOnFocus: false,
				pauseOnHover: false,
			});
		}
		if ($('body.integrations_integromat').length) {
			$('.slick_container').slick({
				arrows: false,
				autoplay: true,
				autoplaySpeed: 1500,
				fade: true,
				pauseOnFocus: false,
				pauseOnHover: false,

			});
			$('.slick_container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				animate_dots()
			});
		}
	}

	// $('.publication_preview_dot').off('click tap').on('click tap', function(){
	// 	var url = $(this).attr('data-url')
	// 	$(this).parents('.publication_container').find('.publication_preview_dot').removeClass('highlighted')
	// 	$(this).addClass('highlighted')
	// 	$(this).parents('.publication_container').find('.publication_preview img').attr('src', url)
	// })

	$('.publication_preview_dot').off('click tap').on('click tap', function(){
		var url = $(this).attr('data-url')
		$(this).parents('.publication_container').find('.publication_preview_dot').removeClass('highlighted')
		$(this).addClass('highlighted')
		if ($(this).hasClass('video')) {
			$(this).parents('.publication_container').find('.publication_preview video').show()
			$(this).parents('.publication_container').find('.publication_preview img').hide()
			//dont reload video 
			var existing = $(this).parents('.publication_container').find('.publication_preview video').attr('src')
			if (existing != url) {
				$(this).parents('.publication_container').find('.publication_preview video').attr('src', url)
			} 
			$(this).parents('.publication_container').find('.publication_preview video')[0].play()
		} else {
			$(this).parents('.publication_container').find('.publication_preview video').hide()
			$(this).parents('.publication_container').find('.publication_preview img').show()
			$(this).parents('.publication_container').find('.publication_preview img').attr('src', url)
		}
	})

	function calculate_affiliate_revenue(num) {
		var price = 4900
		var commission = 0.3 * price
		$('.affiliate_referrals').text(num)
		var earnings = num * commission
		$('.affiliate_earnings span.dollars').text(dollarify(earnings))
	}

	calculate_affiliate_revenue(10)

	$('.affiliate_referrals_slider').on('input', function(){
		calculate_affiliate_revenue($(this).val())
	})

	// if ($('section.section.example_container').length) {
	// 	var scene = document.getElementById('scene');
	// 	var parallaxInstance = new Parallax(scene,{selector : '.layer'});
	// }

	function construct_ogpreview_from_data(data) {
		$('a.clear_og').removeAttr('disabled')
		$('.og_preview_the_image').removeClass('cleared')
		var ogurl = data.opengraph_url.replaceAll(" ", "%20")
		console.log(ogurl)
		$('.og_preview_the_image').css('background-image', 'url('+ogurl+')')
		$('.details_domain').text(data.domain)
		$('.details_title').text(data.title)
		$('.details_description').text(data.description)
		$('.og_preview_link_details').show()
		if ($('.twitter_date').length) {
			if (data.twittercard_url) {
				$('.og_preview_the_image').css('background-image', 'url('+data.twittercard_url.replaceAll(" ", "%20")+')')
			}
			//2:36 PM · Jul 23, 2020
			var twitter_date = strftime('%l:%M %p · %b %e, %Y')
			$('.twitter_date').text(twitter_date)
		}
		$('.modal-content').addClass('animated rubberBand')
	}

	// if ($('body.tools').length) {
	// 	var url = "http://api.bblocaldev.com:5000/demo/webpages/L3XDxZmlrQ60zrnJe9"
	// 	construct_ogpreview_from_url(url)
	// }

	$('.og_toggle_view').off('click tap').on('click tap', function(){
		$('body').toggleClass('theater_mode')
		if (isTouch) {
			$('.dropdown').removeClass('is-hoverable').removeClass('is-active')
		}
	})

	$('.og_text_replace').off('click tap').on('click tap', function(){
		$('.og_preview_comment').text($(this).text())
		if (isTouch) {
			$('.dropdown').removeClass('is-hoverable').removeClass('is-active')
		}
	})

	const general_surnames = [
		"Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"
	]

	function get_random_male_photo() {
		var men = [
			"5.jpg",
			"7.jpg",
			"91.jpg",
			"17.jpg",
			"20.jpg",
			"22.jpg",
			"26.jpg",
			"31.jpg",
			"35.jpg",
			"36.jpg",
			"38.jpg",
			"39.jpg",
			"47.jpg",
			"54.jpg",
			"56.jpg",
			"58.jpg",
			"61.jpg",
			"65.jpg",
			"67.jpg",
			"83.jpg",
		]
		return "/images/tools/people/" + men[Math.floor(Math.random() * men.length)];
	}

	function get_random_female_photo() {
		var women = [
			"2.jpg",
			"6.jpg",
			"8.jpg",
			"19.jpg",
			"24.jpg",
			"27.jpg",
			"42.jpg",
			"51.jpg",
			"52.jpg",
			"69.jpg",
			"79.jpg",
			"81.jpg",
			"82.jpg",
			"90.jpg",
			"92.jpg",

		]
		return "/images/tools/people/" + women[Math.floor(Math.random() * women.length)];
	}

	function get_random_male_name() {
		const male_first_names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
		return male_first_names[Math.floor(Math.random() * male_first_names.length)] + " " + general_surnames[Math.floor(Math.random() * general_surnames.length)]
	}

	function get_random_female_name() {
		const female_first_names = ["Emma","Olivia","Ava","Isabella","Sophia","Charlotte","Mia","Amelia","Harper","Evelyn","Abigail","Emily","Elizabeth","Mila","Ella","Avery","Sofia","Camila","Aria","Scarlett","Victoria","Madison","Luna","Grace","Chloe","Penelope","Layla","Riley","Zoey","Nora","Lily","Eleanor","Hannah","Lillian","Addison","Aubrey","Ellie","Stella","Natalie","Zoe","Leah","Hazel","Violet","Aurora","Savannah","Audrey","Brooklyn","Bella","Claire","Skylar"]
		return female_first_names[Math.floor(Math.random() * female_first_names.length)] + " " + general_surnames[Math.floor(Math.random() * general_surnames.length)]
	}

	$('.og_random_female').off('click tap').on('click tap', function(){
		var image = get_random_female_photo()
		var name = get_random_female_name()
		$('.author_name').text(name)
		$('.author_handle').text("@"+name.replace(/\s/g, '').toLowerCase())
		$('.og_preview_author img').attr('src', image)
		if (isTouch) {
			$('.dropdown').removeClass('is-hoverable').removeClass('is-active')
		}
	})

	$('.og_random_male').off('click tap').on('click tap', function(){
		var image = get_random_male_photo()
		var name = get_random_male_name()
		$('.author_name').text(name)
		$('.author_handle').text("@"+name.replace(/\s/g, '').toLowerCase())
		$('.og_preview_author img').attr('src', image)
		if (isTouch) {
			$('.dropdown').removeClass('is-hoverable').removeClass('is-active')
		}
	})

	function poll_for_completed_webpage(data) {
		if (data.status == "completed") {
			console.log("Completed")
			$('.button').removeClass('is-loading')
			$('[name=url]').removeAttr('disabled')
			$('.modal-content').removeClass('loading')

			// $('[name=url]').val('')
			// location.hash = "#image_result";
			if (!data.opengraph_url && !data.twittercard_url) {
				alert("Could not find social media preview images for this page")
				return false
			}
			construct_ogpreview_from_data(data)
			return false
		}
		setTimeout(function(){
			$.ajax({
				url: data.self,
				type: 'GET',
		    contentType: 'application/json; charset=utf-8',
		    dataType: 'json'
		  }).done(function(data){
				poll_for_completed_webpage(data)
			}).fail(function(data){
				//shrug
				alert(data.message)
			})
		},2000)
	}

	$('.clear_og').off('click tap').on('click tap', function(){
		if ($('.is-loading').length) {
			return false
		}
		$('.og_preview_the_image').attr('style', '').addClass('cleared')
		$('.og_preview_link_details').hide()
		$('input[name="url"]').val('').focus()

	})

	$('#og_preview_tool_form').submit(function(){
		$('.modal-content').removeClass('animated rubberBand')
		var url = $('input[name="url"]').val()
		$('input[name="url"]').attr('disabled','true')
		$('a.clear_og').attr('disabled','true')
		$(this).find('button.button.primary').addClass('is-loading')
		var data = {
			url: url
		}
		$('.modal-content').addClass('loading')
		$.ajax({
			url: "https://api.bannerbear.com/demo/webpages",
			type: 'POST',
	    data: JSON.stringify(data),
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json'
	  }).done(function(data){
	  	console.log(data)
	  	poll_for_completed_webpage(data)
		}).fail(function(data){
			//shrug
			alert("Error")
			$('.button').removeClass('is-loading')
			$('[name=url]').removeAttr('disabled')
			$('.modal-content').removeClass('loading')
			$('a.clear_og').removeAttr('disabled')
		})
		return false
	})

	function calculate_best_plan_for_volume(num) {
		console.log(num)
		var developer_price = parseFloat(29)
		var developer_extra = 0.05
		var developer_quota = 500
		var developer_overage = parseFloat(developer_extra*(Math.max(0, (num-developer_quota))))

		var marketer_price = parseFloat(49)
		var marketer_extra = 0.02
		var marketer_quota = 1000
		var marketer_overage = parseFloat(marketer_extra*(Math.max(0, (num-marketer_quota))))

		var business_price = parseFloat(149)
		var business_extra = 0.01
		var business_quota = 10000
		var business_overage = parseFloat(business_extra*(Math.max(0, (num-business_quota))))


		var developer_total = (developer_price + developer_overage)
		var marketer_total = (marketer_price + marketer_overage)
		var business_total = (business_price + business_overage)

		$('.plan_slider_output strong').text("For " +num+ " images per month ")
		var default_extra_text = "No additional charges as this usage is within the included quota"

		if (developer_total < marketer_total && developer_total < business_total) {
			console.log("Developer plan is best")
			$('.plan_slider_output span').text(" we recommend the Developer plan at $29")
			if (developer_overage > 0) {
				$('.plan_slider_output em').text("There will be $"+developer_overage.toFixed(2)+" additional charges for extra image quota")
			} else {
				$('.plan_slider_output em').text(default_extra_text)
			}
		}

		if (marketer_total < developer_total && marketer_total < business_total) {
			console.log("Marketer plan is best")
			$('.plan_slider_output span').text(" we recommend the Marketer plan at $49")
			if (marketer_overage > 0) {
				$('.plan_slider_output em').text("There will be $"+marketer_overage.toFixed(2)+" additional charges for extra image quota")
			} else {
				$('.plan_slider_output em').text(default_extra_text)
			}
		}

		if (business_total < developer_total && business_total < marketer_total) {
			console.log("Business plan is best")
			$('.plan_slider_output span').text(" we recommend the Business plan at $149")
			if (business_overage > 0) {
				$('.plan_slider_output em').text("There will be $"+business_overage.toFixed(2)+" additional charges for extra image quota")
			} else {
				$('.plan_slider_output em').text(default_extra_text)
			}
		}

	}

	if ($('#plan_slider').length) {
		calculate_best_plan_for_volume($('#plan_slider').val())
		$('#plan_slider').on('change, input', function(){
			calculate_best_plan_for_volume(parseInt($(this).val()))
		})
	}

	$('[data-help-modal]').off('click tap').on('click tap', function(){
		var modal_id = $(this).attr('data-help-modal')
		$('#' + modal_id).addClass('is-active')

	})

	$('#pexels_search input.input').on("keypress", function(e) {
		if (e.keyCode == 13) {
			$('#pexels_search button.search_now').click()
		}
	})

	$('#pexels_search span.help strong').on('click tap', function(){
		$('#pexels_search input.input').val($(this).text())
		$('#pexels_search button.search_now').click()
	})

	$('#smart_crop_disclaimer').on('change', function(){
		if ($(this).prop("checked") == true) {
			$('#smartcrop_demo_form button.button.primary.is-medium').removeAttr('disabled')
		} else {
			$('#smartcrop_demo_form button.button.primary.is-medium').attr('disabled', 'disabled')
		}
	})

	if ($('body.about_team').length) {
		async function fetch_team_data(){
			var url = "https://app.bannerbear.com/api/v1/open/team"
			var data = await (await fetch(url)).json()
			console.log(data)
			var i = 0
			for (const [key, value] of Object.entries(data)) {
			  var month = data[key]

			  $('tr.months').each(function(){
			  	$(this).find('td').eq(i).find('.month').text(month['name'])
			  })

			  $('tr.tickets td').eq(i).find('.value').text(month['helpscout']['current']['volume']['emailConversations'])
			  $('tr.resolved td').eq(i).find('.value').text(month['helpscout']['current']['resolutions']['resolved'])
			  $('tr.resolved_first td').eq(i).find('.value').text(parseInt(month['helpscout']['current']['resolutions']['percentResolvedOnFirstReply']) + "%")

			  $('tr.visits td').eq(i).find('.value').text(numberWithCommas(month['pageviews']))
			  $('tr.nocode td').eq(i).find('.value').text(month['nocode'])
			  $('tr.developers td').eq(i).find('.value').text(month['developers'])

			  i++
			}

		}
		fetch_team_data()
	}

	$('#smartcrop_demo_form button.button.primary.is-medium').off('click tap').on('click tap', async function(){
		var src = $('img.smart_crop_preview').attr('src')
		if (src == "") {
			return
		}

		$(this).addClass('is-loading').attr('disabled', 'disabled')
		$('#smartcrop_results .columns').not('.clone_this').remove()

		$('.image_output_progress .progress_bar').css({width: 0})
		$('.image_output_progress').show()

		if ($(window).width() > 768) {
			$([document.documentElement, document.body]).animate({
	        scrollTop: $('#smartcrop_demo_form').offset().top - 20
	    }, 1000);
		}

		var p = new FakeProgress({
			timeConstant : 10000,
			autoStart : true
		});

		var myInterval = setInterval(function(){
			percent = (p.progress*100).toFixed(1) + '%'
			$('.image_output_progress .progress_bar').animate({width: percent}, 500)
		},1000)

		var url = "https://dviot3p0ctfwp.cloudfront.net/smartcrop.json?url=" + src

		if ($('#smartcrop_demo_form.face_detect').length) {
			url = "https://dviot3p0ctfwp.cloudfront.net/facedetect.json?url=" + src
		}

		var data = await (await fetch(url)).json()

  	for (i in data.dumb) {
  		var blank = $('.clone_this').clone()
  		blank.removeClass('clone_this')
  		blank.find('img.dumb').attr('src', data.dumb[i])
  		blank.find('img.smart').attr('src', data.smart[i])
  		// blank.show()
  		$('#smartcrop_results').append(blank)
  	}

	  var img = new Image();
	  img.onload = function() {
	  	$('#smartcrop_demo_form button.button.primary.is-medium').removeClass('is-loading').removeAttr('disabled')
	  	
	  	clearInterval(myInterval)
	  	$('#smartcrop_results .columns').not('.clone_this').show()
  	  fire_confetti()
  	  $('.image_output_progress').hide()
  	}
  	img.src = data.dumb[0]


	})

	$('#pexels_search button.search_now').off('click tap').on('click tap', async function(){
		var q = $('#pexels_search input.input').val()
		if (q == "") {
			alert("Please enter a value")
			return
		}
		$(this).addClass('is-loading').attr('disabled', 'disabled')
		$('#pexels_search input.input').attr('disabled', 'disabled')
		var url = "https://dviot3p0ctfwp.cloudfront.net/pexels.json?q=" + q

		var data = await (await fetch(url)).json()

  	$('#pexels_search button.search_now').removeClass('is-loading').removeAttr('disabled')
  	$('#pexels_search input.input').removeAttr('disabled')
  	$('#pexels_search_results').html('')
  	if (data.length == 0) {
  		alert("No photos found for that search query!")
  		$('#pexels_search input.input').val('')
  	} else {
  		var shuffled = data.sort( () => Math.random() - 0.5)
  		// shuffled = shuffled.slice(0,5)
  		console.log(shuffled)
  		var prompt = $('<p />').text('Choose a photo below...')
  		$('#pexels_search_results').append(prompt)
  		for (i in shuffled) {
  			var image = $('<img />').attr('src', shuffled[i].src.large2x)
  			$('#pexels_search_results').append(image)
  		}
  		$('#pexels_search_results img').off('click tap').on('click tap', function(){
  			var src = $(this).attr('src')
  			$('.field.chosen_image').show()
  			$('img.smart_crop_preview').attr('src',src)
  			$('#pexels_search button.search_now').removeClass('is-loading').removeAttr('disabled')
  			$('#pexels_search input.input').removeAttr('disabled')
  			$('#pexels_search_results').html('')
  			$('#pexels_search').removeClass('is-active')
  			$('#smart_crop_disclaimer').prop('checked', false)
  			$('button.button.primary.is-medium').attr('disabled', 'disabled')

  			if ($('#smartcrop_demo_form.face_detect').length) {
  				$('button.button.primary.is-medium').removeAttr('disabled')
  			}
  		})
  	}
	})

});;
