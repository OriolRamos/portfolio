var Vc=Object.defineProperty;var kc=(n,e,t)=>e in n?Vc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ee=(n,e,t)=>kc(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="160",Hc=0,Ua=1,Gc=2,Il=1,Rl=2,An=3,En=0,Ut=1,mn=2,Rn=0,Ti=1,Ba=2,Da=3,Na=4,Qc=5,Hn=100,Wc=101,Xc=102,Oa=103,Fa=104,qc=200,Jc=201,Kc=202,Zc=203,Wr=204,Xr=205,jc=206,Yc=207,$c=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,au=0,ou=1,lu=2,Ds=3,cu=4,uu=5,hu=6,du=7,wl=0,fu=1,pu=2,wn=0,Au=1,mu=2,gu=3,Pl=4,Eu=5,vu=6,Ll=300,bi=301,_i=302,Ns=303,qr=304,Js=306,Jr=1e3,Zt=1001,Kr=1002,bt=1003,za=1004,lr=1005,Ot=1006,Su=1007,Ii=1008,Pn=1009,xu=1010,Mu=1011,ca=1012,Ul=1013,bn=1014,_n=1015,Ji=1016,Bl=1017,Dl=1018,Xn=1020,yu=1021,jt=1023,Tu=1024,Cu=1025,qn=1026,Ri=1027,bu=1028,Nl=1029,_u=1030,Ol=1031,Fl=1033,cr=33776,ur=33777,hr=33778,dr=33779,Va=35840,ka=35841,Ha=35842,Ga=35843,zl=36196,Qa=37492,Wa=37496,Xa=37808,qa=37809,Ja=37810,Ka=37811,Za=37812,ja=37813,Ya=37814,$a=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,fr=36492,ao=36494,oo=36495,Iu=36283,lo=36284,co=36285,uo=36286,Vl=3e3,Jn=3001,Ru=3200,wu=3201,kl=0,Pu=1,Qt="",lt="srgb",vn="srgb-linear",ua="display-p3",Ks="display-p3-linear",Os="linear",je="srgb",Fs="rec709",zs="p3",ti=7680,ho=519,Lu=512,Uu=513,Bu=514,Hl=515,Du=516,Nu=517,Ou=518,Fu=519,fo=35044,po="300 es",Zr=1035,gn=2e3,Vs=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const Hi=Math.PI/180,Ki=180/Math.PI;function ei(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function ha(n,e){return(n%e+e)%e}function zu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vu(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function ku(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function Hu(n,e=1){return e-Math.abs(ha(n,e*2)-e)}function Gu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xu(n,e){return n+Math.random()*(e-n)}function qu(n){return n*(.5-Math.random())}function Ju(n){n!==void 0&&(Ao=n);let e=Ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ku(n){return n*Hi}function Zu(n){return n*Ki}function jr(n){return(n&n-1)===0&&n!==0}function ju(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ks(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yu(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),A=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*A,a*c);break;case"YXY":n.set(l*A,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*A,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ni={DEG2RAD:Hi,RAD2DEG:Ki,generateUUID:ei,clamp:At,euclideanModulo:ha,mapLinear:zu,inverseLerp:Vu,lerp:Gi,damp:ku,pingpong:Hu,smoothstep:Gu,smootherstep:Qu,randInt:Wu,randFloat:Xu,randFloatSpread:qu,seededRandom:Ju,degToRad:Ku,radToDeg:Zu,isPowerOfTwo:jr,ceilPowerOfTwo:ju,floorPowerOfTwo:ks,setQuaternionFromProperEuler:Yu,normalize:Tt,denormalize:vi};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],A=i[5],m=i[8],g=s[0],p=s[3],f=s[6],C=s[1],v=s[4],y=s[7],P=s[2],I=s[5],b=s[8];return r[0]=o*g+a*C+l*P,r[3]=o*p+a*v+l*I,r[6]=o*f+a*y+l*b,r[1]=c*g+u*C+d*P,r[4]=c*p+u*v+d*I,r[7]=c*f+u*y+d*b,r[2]=h*g+A*C+m*P,r[5]=h*p+A*v+m*I,r[8]=h*f+A*y+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,A=c*r-o*l,m=t*d+i*h+s*A;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=A*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Ge;function Gl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $u(){const n=Zi("canvas");return n.style.display="block",n}const mo={};function Qi(n){n in mo||(mo[n]=!0,console.warn(n))}const go=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[vn]:{transfer:Os,primaries:Fs,toReference:n=>n,fromReference:n=>n},[lt]:{transfer:je,primaries:Fs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ks]:{transfer:Os,primaries:zs,toReference:n=>n.applyMatrix3(Eo),fromReference:n=>n.applyMatrix3(go)},[ua]:{transfer:je,primaries:zs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Eo),fromReference:n=>n.applyMatrix3(go).convertLinearToSRGB()}},eh=new Set([vn,Ks]),qe={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!eh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ls[e].toReference,s=ls[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ls[n].primaries},getTransfer:function(n){return n===Qt?Os:ls[n].transfer}};function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ii;class Ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=Zi("canvas")),ii.width=e.width,ii.height=e.height;const i=ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zi("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let th=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mr(s[o].image)):r.push(mr(s[o]))}else r=mr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ql.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nh=0;class Rt extends Pi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Zt,s=Zt,r=Ot,o=Ii,a=jt,l=Pn,c=Rt.DEFAULT_ANISOTROPY,u=Qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ei(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?lt:Qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Jn:Vl}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?lt:Qt}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Ll;Rt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,i=0,s=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],A=l[5],m=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+A+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(A+1)/2,P=(f+1)/2,I=(u+h)/4,b=(d+g)/4,G=(m+p)/4;return v>y&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=I/i,r=b/i):y>P?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=G/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=b/r,s=G/r),this.set(i,s,r,t),this}let C=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(p-m)/C,this.y=(d-g)/C,this.z=(h-u)/C,this.w=Math.acos((c+A+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ih extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jn?lt:Qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xl extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],A=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=A,e[t+2]=m,e[t+3]=g;return}if(d!==g||l!==h||c!==A||u!==m){let p=1-a;const f=l*h+c*A+u*m+d*g,C=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),I=Math.atan2(P,f*C);p=Math.sin(p*I)/P,a=Math.sin(a*I)/P}const y=a*C;if(l=l*p+h*y,c=c*p+A*y,u=u*p+m*y,d=d*p+g*y,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],A=r[o+2],m=r[o+3];return e[t]=a*m+u*d+l*A-c*h,e[t+1]=l*m+u*h+c*d-a*A,e[t+2]=c*m+u*A+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),A=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*A*m,this._y=c*A*d-h*u*m,this._z=c*u*m+h*A*d,this._w=c*u*d-h*A*m;break;case"YXZ":this._x=h*u*d+c*A*m,this._y=c*A*d-h*u*m,this._z=c*u*m-h*A*d,this._w=c*u*d+h*A*m;break;case"ZXY":this._x=h*u*d-c*A*m,this._y=c*A*d+h*u*m,this._z=c*u*m+h*A*d,this._w=c*u*d-h*A*m;break;case"ZYX":this._x=h*u*d-c*A*m,this._y=c*A*d+h*u*m,this._z=c*u*m-h*A*d,this._w=c*u*d+h*A*m;break;case"YZX":this._x=h*u*d+c*A*m,this._y=c*A*d+h*u*m,this._z=c*u*m-h*A*d,this._w=c*u*d-h*A*m;break;case"XZY":this._x=h*u*d-c*A*m,this._y=c*A*d-h*u*m,this._z=c*u*m+h*A*d,this._w=c*u*d+h*A*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const A=.5/Math.sqrt(h+1);this._w=.25/A,this._x=(u-l)*A,this._y=(r-c)*A,this._z=(o-s)*A}else if(i>a&&i>d){const A=2*Math.sqrt(1+i-a-d);this._w=(u-l)/A,this._x=.25*A,this._y=(s+o)/A,this._z=(r+c)/A}else if(a>d){const A=2*Math.sqrt(1+a-i-d);this._w=(r-c)/A,this._x=(s+o)/A,this._y=.25*A,this._z=(l+u)/A}else{const A=2*Math.sqrt(1+d-i-a);this._w=(o-s)/A,this._x=(r+c)/A,this._y=(l+u)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const A=1-t;return this._w=A*o+t*this._w,this._x=A*i+t*this._x,this._y=A*s+t*this._y,this._z=A*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new L,vo=new is;class ss{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),us.subVectors(this.max,Oi),si.subVectors(e.a,Oi),ri.subVectors(e.b,Oi),ai.subVectors(e.c,Oi),Sn.subVectors(ri,si),xn.subVectors(ai,ri),Dn.subVectors(si,ai);let t=[0,-Sn.z,Sn.y,0,-xn.z,xn.y,0,-Dn.z,Dn.y,Sn.z,0,-Sn.x,xn.z,0,-xn.x,Dn.z,0,-Dn.x,-Sn.y,Sn.x,0,-xn.y,xn.x,0,-Dn.y,Dn.x,0];return!Er(t,si,ri,ai,us)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,si,ri,ai,us))?!1:(hs.crossVectors(Sn,xn),t=[hs.x,hs.y,hs.z],Er(t,si,ri,ai,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],Xt=new L,cs=new ss,si=new L,ri=new L,ai=new L,Sn=new L,xn=new L,Dn=new L,Oi=new L,us=new L,hs=new L,Nn=new L;function Er(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Nn.fromArray(n,r);const a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=i.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rh=new ss,Fi=new L,vr=new L;class da{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(vr)),this.expandByPoint(Fi.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,Sr=new L,ds=new L,Mn=new L,xr=new L,fs=new L,Mr=new L;class ql{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sr.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Sr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Mn.dot(this.direction),l=-Mn.dot(ds),c=Mn.lengthSq(),u=Math.abs(1-o*o);let d,h,A,m;if(u>0)if(d=o*l-a,h=o*a-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const g=1/u;d*=g,h*=g,A=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),A=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),A=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),A=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),A=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),A=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),A=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sr).addScaledVector(ds,h),A}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),s=hn.dot(hn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,s,r){xr.subVectors(t,e),fs.subVectors(i,e),Mr.crossVectors(xr,fs);let o=this.direction.dot(Mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(fs.crossVectors(Mn,fs));if(l<0)return null;const c=a*this.direction.dot(xr.cross(Mn));if(c<0||l+c>o)return null;const u=-a*Mn.dot(Mr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,o,a,l,c,u,d,h,A,m,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,A,m,g,p)}set(e,t,i,s,r,o,a,l,c,u,d,h,A,m,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=A,f[7]=m,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,A=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=A+m*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=m+A*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,A=l*d,m=c*u,g=c*d;t[0]=h+g*a,t[4]=m*a-A,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=A*a-m,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,A=l*d,m=c*u,g=c*d;t[0]=h-g*a,t[4]=-o*d,t[8]=m+A*a,t[1]=A+m*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,A=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=m*c-A,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=A*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,A=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=m*d+A,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=A*d+m,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,A=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=o*u,t[9]=A*d-m,t[2]=m*d-A,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ah,e,oh)}lookAt(e,t,i){const s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yn.crossVectors(i,Dt),yn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yn.crossVectors(i,Dt)),yn.normalize(),ps.crossVectors(Dt,yn),s[0]=yn.x,s[4]=ps.x,s[8]=Dt.x,s[1]=yn.y,s[5]=ps.y,s[9]=Dt.y,s[2]=yn.z,s[6]=ps.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],A=i[13],m=i[2],g=i[6],p=i[10],f=i[14],C=i[3],v=i[7],y=i[11],P=i[15],I=s[0],b=s[4],G=s[8],S=s[12],T=s[1],N=s[5],H=s[9],Y=s[13],R=s[2],D=s[6],z=s[10],q=s[14],W=s[3],J=s[7],K=s[11],ne=s[15];return r[0]=o*I+a*T+l*R+c*W,r[4]=o*b+a*N+l*D+c*J,r[8]=o*G+a*H+l*z+c*K,r[12]=o*S+a*Y+l*q+c*ne,r[1]=u*I+d*T+h*R+A*W,r[5]=u*b+d*N+h*D+A*J,r[9]=u*G+d*H+h*z+A*K,r[13]=u*S+d*Y+h*q+A*ne,r[2]=m*I+g*T+p*R+f*W,r[6]=m*b+g*N+p*D+f*J,r[10]=m*G+g*H+p*z+f*K,r[14]=m*S+g*Y+p*q+f*ne,r[3]=C*I+v*T+y*R+P*W,r[7]=C*b+v*N+y*D+P*J,r[11]=C*G+v*H+y*z+P*K,r[15]=C*S+v*Y+y*q+P*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],A=e[14],m=e[3],g=e[7],p=e[11],f=e[15];return m*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*A-i*l*A)+g*(+t*l*A-t*c*h+r*o*h-s*o*A+s*c*u-r*l*u)+p*(+t*c*d-t*a*A-r*o*d+i*o*A+r*a*u-i*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],A=e[11],m=e[12],g=e[13],p=e[14],f=e[15],C=d*p*c-g*h*c+g*l*A-a*p*A-d*l*f+a*h*f,v=m*h*c-u*p*c-m*l*A+o*p*A+u*l*f-o*h*f,y=u*g*c-m*d*c+m*a*A-o*g*A-u*a*f+o*d*f,P=m*d*l-u*g*l-m*a*h+o*g*h+u*a*p-o*d*p,I=t*C+i*v+s*y+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/I;return e[0]=C*b,e[1]=(g*h*r-d*p*r-g*s*A+i*p*A+d*s*f-i*h*f)*b,e[2]=(a*p*r-g*l*r+g*s*c-i*p*c-a*s*f+i*l*f)*b,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*A-i*l*A)*b,e[4]=v*b,e[5]=(u*p*r-m*h*r+m*s*A-t*p*A-u*s*f+t*h*f)*b,e[6]=(m*l*r-o*p*r-m*s*c+t*p*c+o*s*f-t*l*f)*b,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*A+t*l*A)*b,e[8]=y*b,e[9]=(m*d*r-u*g*r-m*i*A+t*g*A+u*i*f-t*d*f)*b,e[10]=(o*g*r-m*a*r+m*i*c-t*g*c-o*i*f+t*a*f)*b,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*A-t*a*A)*b,e[12]=P*b,e[13]=(u*g*s-m*d*s+m*i*h-t*g*h-u*i*p+t*d*p)*b,e[14]=(m*a*s-o*g*s-m*i*l+t*g*l+o*i*p-t*a*p)*b,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,A=r*u,m=r*d,g=o*u,p=o*d,f=a*d,C=l*c,v=l*u,y=l*d,P=i.x,I=i.y,b=i.z;return s[0]=(1-(g+f))*P,s[1]=(A+y)*P,s[2]=(m-v)*P,s[3]=0,s[4]=(A-y)*I,s[5]=(1-(h+f))*I,s[6]=(p+C)*I,s[7]=0,s[8]=(m+v)*b,s[9]=(p-C)*b,s[10]=(1-(h+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);const c=1/r,u=1/o,d=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=d,qt.elements[9]*=d,qt.elements[10]*=d,t.setFromRotationMatrix(qt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let A,m;if(a===gn)A=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Vs)A=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=A,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gn){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,A=(i+s)*u;let m,g;if(a===gn)m=(o+r)*d,g=-2*d;else if(a===Vs)m=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-A,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new L,qt=new at,ah=new L(0,0,0),oh=new L(1,1,1),yn=new L,ps=new L,Dt=new L,So=new at,xo=new is;class Zs{constructor(e=0,t=0,i=0,s=Zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],A=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,A),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,A),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,A),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,A));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zs.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lh=0;const Mo=new L,li=new is,dn=new at,As=new L,zi=new L,ch=new L,uh=new is,yo=new L(1,0,0),To=new L(0,1,0),Co=new L(0,0,1),hh={type:"added"},dh={type:"removed"};class St extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new L,t=new Zs,i=new is,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return Mo.copy(e).applyQuaternion(this.quaternion),this.position.add(Mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(zi,As,this.up):dn.lookAt(As,zi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(dn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),A=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),A.length>0&&(i.animations=A),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new L,fn=new L,yr=new L,pn=new L,ci=new L,ui=new L,bo=new L,Tr=new L,Cr=new L,br=new L;let ms=!1;class Kt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jt.subVectors(s,t),fn.subVectors(i,t),yr.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(fn),l=Jt.dot(yr),c=fn.dot(fn),u=fn.dot(yr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,A=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-A-m,m,A)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,s,r,o,a,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pn.x),l.addScaledVector(o,pn.y),l.addScaledVector(a,pn.z),l)}static isFrontFacing(e,t,i,s){return Jt.subVectors(i,t),fn.subVectors(e,t),Jt.cross(fn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Jt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ci.subVectors(s,i),ui.subVectors(r,i),Tr.subVectors(e,i);const l=ci.dot(Tr),c=ui.dot(Tr);if(l<=0&&c<=0)return t.copy(i);Cr.subVectors(e,s);const u=ci.dot(Cr),d=ui.dot(Cr);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ci,o);br.subVectors(e,r);const A=ci.dot(br),m=ui.dot(br);if(m>=0&&A<=m)return t.copy(r);const g=A*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ui,a);const p=u*m-A*d;if(p<=0&&d-u>=0&&A-m>=0)return bo.subVectors(r,s),a=(d-u)/(d-u+(A-m)),t.copy(s).addScaledVector(bo,a);const f=1/(p+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(ci,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function _r(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=ha(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_r(o,r,e+1/3),this.g=_r(o,r,e),this.b=_r(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const i=Jl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return qe.fromWorkingColorSpace(vt.copy(this),e),Math.round(At(vt.r*255,0,255))*65536+Math.round(At(vt.g*255,0,255))*256+Math.round(At(vt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,s=vt.g,r=vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=lt){qe.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,s=vt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(gs);const i=Gi(Tn.h,gs.h,t),s=Gi(Tn.s,gs.s,t),r=Gi(Tn.l,gs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ue;Ue.NAMES=Jl;let fh=0;class Li extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Ti,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Xr&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Si extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new L,Es=new le;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}}class Kl extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zl extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ph=0;const Gt=new at,Ir=new St,hi=new L,Nt=new ss,Vi=new ss,pt=new L;class on extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Zl:Kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Nt.min,Vi.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Vi.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Vi.min),Nt.expandByPoint(Vi.max))}Nt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(hi.fromBufferAttribute(e,c),pt.add(hi)),s=Math.max(s,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new L,u[T]=new L;const d=new L,h=new L,A=new L,m=new le,g=new le,p=new le,f=new L,C=new L;function v(T,N,H){d.fromArray(s,T*3),h.fromArray(s,N*3),A.fromArray(s,H*3),m.fromArray(o,T*2),g.fromArray(o,N*2),p.fromArray(o,H*2),h.sub(d),A.sub(d),g.sub(m),p.sub(m);const Y=1/(g.x*p.y-p.x*g.y);isFinite(Y)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(A,-g.y).multiplyScalar(Y),C.copy(A).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(Y),c[T].add(f),c[N].add(f),c[H].add(f),u[T].add(C),u[N].add(C),u[H].add(C))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,N=y.length;T<N;++T){const H=y[T],Y=H.start,R=H.count;for(let D=Y,z=Y+R;D<z;D+=3)v(i[D+0],i[D+1],i[D+2])}const P=new L,I=new L,b=new L,G=new L;function S(T){b.fromArray(r,T*3),G.copy(b);const N=c[T];P.copy(N),P.sub(b.multiplyScalar(b.dot(N))).normalize(),I.crossVectors(G,N);const Y=I.dot(u[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=Y}for(let T=0,N=y.length;T<N;++T){const H=y[T],Y=H.start,R=H.count;for(let D=Y,z=Y+R;D<z;D+=3)S(i[D+0]),S(i[D+1]),S(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,A=i.count;h<A;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,A=e.count;h<A;h+=3){const m=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,A=t.count;h<A;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let A=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?A=l[g]*a.data.stride+a.offset:A=l[g]*u;for(let f=0;f<u;f++)h[m++]=c[A++]}return new sn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],A=e(h,i);l.push(A)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const A=c[d];u.push(A.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,A=d.length;h<A;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _o=new at,On=new ql,vs=new da,Io=new L,di=new L,fi=new L,pi=new L,Rr=new L,Ss=new L,xs=new le,Ms=new le,ys=new le,Ro=new L,wo=new L,Po=new L,Ts=new L,Cs=new L;class Ye extends St{constructor(e=new on,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Rr.fromBufferAttribute(d,e),o?Ss.addScaledVector(Rr,u):Ss.addScaledVector(Rr.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(vs.containsPoint(On.origin)===!1&&(On.intersectSphere(vs,Io)===null||On.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(_o.copy(r).invert(),On.copy(e.ray).applyMatrix4(_o),!(i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,A=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=o[p.materialIndex],C=Math.max(p.start,A.start),v=Math.min(a.count,Math.min(p.start+p.count,A.start+A.count));for(let y=C,P=v;y<P;y+=3){const I=a.getX(y),b=a.getX(y+1),G=a.getX(y+2);s=bs(this,f,e,i,c,u,d,I,b,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,A.start),g=Math.min(a.count,A.start+A.count);for(let p=m,f=g;p<f;p+=3){const C=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=bs(this,o,e,i,c,u,d,C,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=o[p.materialIndex],C=Math.max(p.start,A.start),v=Math.min(l.count,Math.min(p.start+p.count,A.start+A.count));for(let y=C,P=v;y<P;y+=3){const I=y,b=y+1,G=y+2;s=bs(this,f,e,i,c,u,d,I,b,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,A.start),g=Math.min(l.count,A.start+A.count);for(let p=m,f=g;p<f;p+=3){const C=p,v=p+1,y=p+2;s=bs(this,o,e,i,c,u,d,C,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ah(n,e,t,i,s,r,o,a){let l;if(e.side===Ut?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===En,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:n}}function bs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,di),n.getVertexPosition(l,fi),n.getVertexPosition(c,pi);const u=Ah(n,e,t,i,di,fi,pi,Ts);if(u){s&&(xs.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,l),ys.fromBufferAttribute(s,c),u.uv=Kt.getInterpolation(Ts,di,fi,pi,xs,Ms,ys,new le)),r&&(xs.fromBufferAttribute(r,a),Ms.fromBufferAttribute(r,l),ys.fromBufferAttribute(r,c),u.uv1=Kt.getInterpolation(Ts,di,fi,pi,xs,Ms,ys,new le),u.uv2=u.uv1),o&&(Ro.fromBufferAttribute(o,a),wo.fromBufferAttribute(o,l),Po.fromBufferAttribute(o,c),u.normal=Kt.getInterpolation(Ts,di,fi,pi,Ro,wo,Po,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Kt.getNormal(di,fi,pi,d.normal),u.face=d}return u}class zt extends on{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,A=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function m(g,p,f,C,v,y,P,I,b,G,S){const T=y/b,N=P/G,H=y/2,Y=P/2,R=I/2,D=b+1,z=G+1;let q=0,W=0;const J=new L;for(let K=0;K<z;K++){const ne=K*N-Y;for(let ie=0;ie<D;ie++){const k=ie*T-H;J[g]=k*C,J[p]=ne*v,J[f]=R,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[f]=I>0?1:-1,u.push(J.x,J.y,J.z),d.push(ie/b),d.push(1-K/G),q+=1}}for(let K=0;K<G;K++)for(let ne=0;ne<b;ne++){const ie=h+ne+D*K,k=h+ne+D*(K+1),Z=h+(ne+1)+D*(K+1),de=h+(ne+1)+D*K;l.push(ie,k,de),l.push(k,Z,de),W+=6}a.addGroup(A,W,S),A+=W,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=wi(n[t]);for(const s in i)e[s]=i[s]}return e}function mh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jl(n){return n.getRenderTarget()===null?n.outputColorSpace:qe.workingColorSpace}const gh={clone:wi,merge:Ct};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yl extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Yl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,mi=1;class Sh extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(Ai,mi,e,t);s.layers=this.layers,this.add(s);const r=new Ft(Ai,mi,e,t);r.layers=this.layers,this.add(r);const o=new Ft(Ai,mi,e,t);o.layers=this.layers,this.add(o);const a=new Ft(Ai,mi,e,t);a.layers=this.layers,this.add(a);const l=new Ft(Ai,mi,e,t);l.layers=this.layers,this.add(l);const c=new Ft(Ai,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,A),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class $l extends Rt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xh extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?lt:Qt),this.texture=new $l(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zt(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Rn});r.uniforms.tEquirect.value=t;const o=new Ye(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Ot),new Sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const wr=new L,Mh=new L,yh=new Ge;class Vn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wr.subVectors(i,t).cross(Mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yh.getNormalMatrix(e),s=this.coplanarPoint(wr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new da,_s=new L;class pa{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],A=s[8],m=s[9],g=s[10],p=s[11],f=s[12],C=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,p-A,y-f).normalize(),i[1].setComponents(l+r,h+c,p+A,y+f).normalize(),i[2].setComponents(l+o,h+u,p+m,y+C).normalize(),i[3].setComponents(l-o,h-u,p-m,y-C).normalize(),i[4].setComponents(l-a,h-d,p-g,y-v).normalize(),t===gn)i[5].setComponents(l+a,h+d,p+g,y+v).normalize();else if(t===Vs)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_s.x=s.normal.x>0?e.max.x:e.min.x,_s.y=s.normal.y>0?e.max.y:e.min.y,_s.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Th(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,h=c.usage,A=d.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:A}}function r(c,u,d){const h=u.array,A=u._updateRange,m=u.updateRanges;if(n.bindBuffer(d,c),A.count===-1&&m.length===0&&n.bufferSubData(d,0,h),m.length!==0){for(let g=0,p=m.length;g<p;g++){const f=m[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}A.count!==-1&&(t?n.bufferSubData(d,A.offset*h.BYTES_PER_ELEMENT,h,A.offset,A.count):n.bufferSubData(d,A.offset*h.BYTES_PER_ELEMENT,h.subarray(A.offset,A.offset+A.count)),A.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class js extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,A=[],m=[],g=[],p=[];for(let f=0;f<u;f++){const C=f*h-o;for(let v=0;v<c;v++){const y=v*d-r;m.push(y,-C,0),g.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<a;C++){const v=C+c*f,y=C+c*(f+1),P=C+1+c*(f+1),I=C+1+c*f;A.push(v,y,I),A.push(y,P,I)}this.setIndex(A),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(g,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Ch,alphahash_pars_fragment:bh,alphamap_fragment:_h,alphamap_pars_fragment:Ih,alphatest_fragment:Rh,alphatest_pars_fragment:wh,aomap_fragment:Ph,aomap_pars_fragment:Lh,batching_pars_vertex:Uh,batching_vertex:Bh,begin_vertex:Dh,beginnormal_vertex:Nh,bsdfs:Oh,iridescence_fragment:Fh,bumpmap_pars_fragment:zh,clipping_planes_fragment:Vh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:Qh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Jh,cube_uv_reflection_fragment:Kh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:jh,displacementmap_vertex:Yh,emissivemap_fragment:$h,emissivemap_pars_fragment:ed,colorspace_fragment:td,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:Ed,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:ud,fog_pars_fragment:hd,gradientmap_pars_fragment:dd,lightmap_fragment:fd,lightmap_pars_fragment:pd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:Sd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:yd,lights_physical_pars_fragment:Td,lights_fragment_begin:Cd,lights_fragment_maps:bd,lights_fragment_end:_d,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Ud,map_particle_fragment:Bd,map_particle_pars_fragment:Dd,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Od,morphcolor_vertex:Fd,morphnormal_vertex:zd,morphtarget_pars_vertex:Vd,morphtarget_vertex:kd,normal_fragment_begin:Hd,normal_fragment_maps:Gd,normal_pars_fragment:Qd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:jd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:ef,project_vertex:tf,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:uf,skinbase_vertex:hf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:Af,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:Ef,transmission_fragment:vf,transmission_pars_fragment:Sf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:yf,worldpos_vertex:Tf,background_vert:Cf,background_frag:bf,backgroundCube_vert:_f,backgroundCube_frag:If,cube_vert:Rf,cube_frag:wf,depth_vert:Pf,depth_frag:Lf,distanceRGBA_vert:Uf,distanceRGBA_frag:Bf,equirect_vert:Df,equirect_frag:Nf,linedashed_vert:Of,linedashed_frag:Ff,meshbasic_vert:zf,meshbasic_frag:Vf,meshlambert_vert:kf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Qf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:qf,meshphong_frag:Jf,meshphysical_vert:Kf,meshphysical_frag:Zf,meshtoon_vert:jf,meshtoon_frag:Yf,points_vert:$f,points_frag:ep,shadow_vert:tp,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},tn={basic:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ct([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ct([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ct([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ct([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ct([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ct([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ct([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ct([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ct([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ct([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};tn.physical={uniforms:Ct([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Is={r:0,b:0,g:0};function rp(n,e,t,i,s,r,o){const a=new Ue(0);let l=r===!0?0:1,c,u,d=null,h=0,A=null;function m(p,f){let C=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),C=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Js)?(u===void 0&&(u=new Ye(new zt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:wi(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=qe.getTransfer(v.colorSpace)!==je,(d!==v||h!==v.version||A!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,A=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ye(new js(2,2),new Zn({name:"BackgroundMaterial",uniforms:wi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||A!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,A=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){p.getRGB(Is,jl(n)),i.buffers.color.setClear(Is.r,Is.g,Is.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:m}}function ap(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function d(R,D,z,q,W){let J=!1;if(o){const K=g(q,z,D);c!==K&&(c=K,A(c.object)),J=f(R,q,z,W),J&&C(R,q,z,W)}else{const K=D.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=z.id,c.wireframe=K,J=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,G(R,D,z,q),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function A(R){return i.isWebGL2?n.bindVertexArray(R):r.bindVertexArrayOES(R)}function m(R){return i.isWebGL2?n.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function g(R,D,z){const q=z.wireframe===!0;let W=a[R.id];W===void 0&&(W={},a[R.id]=W);let J=W[D.id];J===void 0&&(J={},W[D.id]=J);let K=J[q];return K===void 0&&(K=p(h()),J[q]=K),K}function p(R){const D=[],z=[],q=[];for(let W=0;W<s;W++)D[W]=0,z[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:q,object:R,attributes:{},index:null}}function f(R,D,z,q){const W=c.attributes,J=D.attributes;let K=0;const ne=z.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const Z=W[ie];let de=J[ie];if(de===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function C(R,D,z,q){const W={},J=D.attributes;let K=0;const ne=z.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let Z=J[ie];Z===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),W[ie]=de,K++}c.attributes=W,c.attributesNum=K,c.index=q}function v(){const R=c.newAttributes;for(let D=0,z=R.length;D<z;D++)R[D]=0}function y(R){P(R,0)}function P(R,D){const z=c.newAttributes,q=c.enabledAttributes,W=c.attributeDivisors;z[R]=1,q[R]===0&&(n.enableVertexAttribArray(R),q[R]=1),W[R]!==D&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,D),W[R]=D)}function I(){const R=c.newAttributes,D=c.enabledAttributes;for(let z=0,q=D.length;z<q;z++)D[z]!==R[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function b(R,D,z,q,W,J,K){K===!0?n.vertexAttribIPointer(R,D,z,W,J):n.vertexAttribPointer(R,D,z,q,W,J)}function G(R,D,z,q){if(i.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,J=z.getAttributes(),K=D.defaultAttributeValues;for(const ne in J){const ie=J[ne];if(ie.location>=0){let k=W[ne];if(k===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){const Z=k.normalized,de=k.itemSize,ve=t.get(k);if(ve===void 0)continue;const pe=ve.buffer,Te=ve.type,we=ve.bytesPerElement,Se=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||k.gpuType===Ul);if(k.isInterleavedBufferAttribute){const Pe=k.data,_=Pe.stride,re=k.offset;if(Pe.isInstancedInterleavedBuffer){for(let X=0;X<ie.locationSize;X++)P(ie.location+X,Pe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let X=0;X<ie.locationSize;X++)y(ie.location+X);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let X=0;X<ie.locationSize;X++)b(ie.location+X,de/ie.locationSize,Te,Z,_*we,(re+de/ie.locationSize*X)*we,Se)}else{if(k.isInstancedBufferAttribute){for(let Pe=0;Pe<ie.locationSize;Pe++)P(ie.location+Pe,k.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Pe=0;Pe<ie.locationSize;Pe++)y(ie.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Pe=0;Pe<ie.locationSize;Pe++)b(ie.location+Pe,de/ie.locationSize,Te,Z,de*we,de/ie.locationSize*Pe*we,Se)}}else if(K!==void 0){const Z=K[ne];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(ie.location,Z);break;case 3:n.vertexAttrib3fv(ie.location,Z);break;case 4:n.vertexAttrib4fv(ie.location,Z);break;default:n.vertexAttrib1fv(ie.location,Z)}}}}I()}function S(){H();for(const R in a){const D=a[R];for(const z in D){const q=D[z];for(const W in q)m(q[W].object),delete q[W];delete D[z]}delete a[R]}}function T(R){if(a[R.id]===void 0)return;const D=a[R.id];for(const z in D){const q=D[z];for(const W in q)m(q[W].object),delete q[W];delete D[z]}delete a[R.id]}function N(R){for(const D in a){const z=a[D];if(z[R.id]===void 0)continue;const q=z[R.id];for(const W in q)m(q[W].object),delete q[W];delete z[R.id]}}function H(){Y(),u=!0,c!==l&&(c=l,A(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:Y,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:y,disableUnusedAttributes:I}}function op(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let A,m;if(s)A=n,m="drawArraysInstanced";else if(A=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",A===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[m](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let m=0;m<h;m++)this.render(u[m],d[m]);else{A.multiDrawArraysWEBGL(r,u,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function lp(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),P=v&&y,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:A,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:I}}function cp(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Vn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const A=d.length!==0||h||i!==0||s;return s=h,i=d.length,A},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,A){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const C=r?0:i,v=C*4;let y=f.clippingState||null;l.value=y,y=u(m,h,v,A);for(let P=0;P!==v;++P)y[P]=t[P];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,A,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const f=A+g*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,y=A;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(C,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function up(n){let e=new WeakMap;function t(o,a){return a===Ns?o.mapping=bi:a===qr&&(o.mapping=_i),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ns||a===qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class tc extends Yl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Lo=[.125,.215,.35,.446,.526,.582],Gn=20,Pr=new tc,Uo=new Ue;let Lr=null,Ur=0,Br=0;const kn=(1+Math.sqrt(5))/2,gi=1/kn,Bo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,kn,gi),new L(0,kn,-gi),new L(gi,0,kn),new L(-gi,0,kn),new L(kn,gi,0),new L(-kn,gi,0)];class Yr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Lr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Ur,Br),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Ji,format:jt,colorSpace:vn,depthBuffer:!1},s=Do(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(r)),this._blurMaterial=dp(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,s){const a=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Uo),u.toneMapping=wn,u.autoClear=!1;const A=new Si({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new Ye(new zt,A);let g=!1;const p=e.background;p?p.isColor&&(A.color.copy(p),e.background=null,g=!0):(A.color.copy(Uo),g=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):C===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Rs(s,C*v,f>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===bi||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bo[(s-1)%Bo.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ye(this._lodPlanes[s],c),h=c.uniforms,A=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*A):2*Math.PI/(2*Gn-1),g=r/m,p=isFinite(r)?1+Math.floor(u*g):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const f=[];let C=0;for(let b=0;b<Gn;++b){const G=b/g,S=Math.exp(-G*G/2);f.push(S),b===0?C+=S:b<p&&(C+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/C;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const y=this._sizeLods[s],P=3*y*(s>v-xi?s-v+xi:0),I=4*(this._cubeSize-y);Rs(t,P,I,3*y,2*y),l.setRenderTarget(t),l.render(d,Pr)}}function hp(n){const e=[],t=[],i=[];let s=n;const r=n-xi+1+Lo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xi?l=Lo[o-n+xi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],A=6,m=6,g=3,p=2,f=1,C=new Float32Array(g*m*A),v=new Float32Array(p*m*A),y=new Float32Array(f*m*A);for(let I=0;I<A;I++){const b=I%3*2/3-1,G=I>2?0:-1,S=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];C.set(S,g*m*I),v.set(h,p*m*I);const T=[I,I,I,I,I,I];y.set(T,f*m*I)}const P=new on;P.setAttribute("position",new sn(C,g)),P.setAttribute("uv",new sn(v,p)),P.setAttribute("faceIndex",new sn(y,f)),e.push(P),s>xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Do(n,e,t){const i=new Kn(n,e,t);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function dp(n,e,t){const i=new Float32Array(Gn),s=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function No(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Oo(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ns||l===qr,u=l===bi||l===_i;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Yr(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Yr(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ap(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const g=h.morphAttributes[m];for(let p=0,f=g.length;p<f;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete s[h.id];const A=r.get(h);A&&(e.remove(A),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER);const A=d.morphAttributes;for(const m in A){const g=A[m];for(let p=0,f=g.length;p<f;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const h=[],A=d.index,m=d.attributes.position;let g=0;if(A!==null){const C=A.array;g=A.version;for(let v=0,y=C.length;v<y;v+=3){const P=C[v+0],I=C[v+1],b=C[v+2];h.push(P,I,I,b,b,P)}}else if(m!==void 0){const C=m.array;g=m.version;for(let v=0,y=C.length/3-1;v<y;v+=3){const P=v+0,I=v+1,b=v+2;h.push(P,I,I,b,b,P)}}else return;const p=new(Gl(h)?Zl:Kl)(h,1);p.version=g;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const A=d.index;A!==null&&h.version<A.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mp(n,e,t,i){const s=i.isWebGL2;let r;function o(A){r=A}let a,l;function c(A){a=A.type,l=A.bytesPerElement}function u(A,m){n.drawElements(r,m,a,A*l),t.update(m,r,1)}function d(A,m,g){if(g===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,A*l,g),t.update(m,r,g)}function h(A,m,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<g;f++)this.render(A[f]/l,m[f]);else{p.multiDrawElementsWEBGL(r,m,0,a,A,0,g);let f=0;for(let C=0;C<g;C++)f+=m[C];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function gp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ep(n,e){return n[0]-e[0]}function vp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sp(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let D=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",D)};var A=D;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),P===!0&&(S=3);let T=u.attributes.position.count*S,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*N*4*g),Y=new Xl(H,T,N,g);Y.type=_n,Y.needsUpdate=!0;const R=S*4;for(let z=0;z<g;z++){const q=I[z],W=b[z],J=G[z],K=T*N*4*z;for(let ne=0;ne<q.count;ne++){const ie=ne*R;v===!0&&(o.fromBufferAttribute(q,ne),H[K+ie+0]=o.x,H[K+ie+1]=o.y,H[K+ie+2]=o.z,H[K+ie+3]=0),y===!0&&(o.fromBufferAttribute(W,ne),H[K+ie+4]=o.x,H[K+ie+5]=o.y,H[K+ie+6]=o.z,H[K+ie+7]=0),P===!0&&(o.fromBufferAttribute(J,ne),H[K+ie+8]=o.x,H[K+ie+9]=o.y,H[K+ie+10]=o.z,H[K+ie+11]=J.itemSize===4?o.w:1)}}p={count:g,texture:Y,size:new le(T,N)},r.set(u,p),u.addEventListener("dispose",D)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const C=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",C),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const m=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<m;y++){const P=g[y];P[0]=y,P[1]=h[y]}g.sort(vp);for(let y=0;y<8;y++)y<m&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ep);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let C=0;for(let y=0;y<8;y++){const P=a[y],I=P[0],b=P[1];I!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+y)!==p[I]&&u.setAttribute("morphTarget"+y,p[I]),f&&u.getAttribute("morphNormal"+y)!==f[I]&&u.setAttribute("morphNormal"+y,f[I]),s[y]=b,C+=b):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const v=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function xp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class nc extends Rt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:qn,u!==qn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qn&&(i=bn),i===void 0&&u===Ri&&(i=Xn),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ic=new Rt,sc=new nc(1,1);sc.compareFunction=Hl;const rc=new Xl,ac=new sh,oc=new $l,Fo=[],zo=[],Vo=new Float32Array(16),ko=new Float32Array(9),Ho=new Float32Array(4);function Ui(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fo[s];if(r===void 0&&(r=new Float32Array(s),Fo[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function Cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function bp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Ho.set(i),n.uniformMatrix2fv(this.addr,!1,Ho),ht(t,i)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;ko.set(i),n.uniformMatrix3fv(this.addr,!1,ko),ht(t,i)}}function Ip(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Vo.set(i),n.uniformMatrix4fv(this.addr,!1,Vo),ht(t,i)}}function Rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function Pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function Lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function Up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function Dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function Np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function Op(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?sc:ic;t.setTexture2D(e||r,s)}function Fp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ac,s)}function zp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||oc,s)}function Vp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rc,s)}function kp(n){switch(n){case 5126:return Mp;case 35664:return yp;case 35665:return Tp;case 35666:return Cp;case 35674:return bp;case 35675:return _p;case 35676:return Ip;case 5124:case 35670:return Rp;case 35667:case 35671:return wp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Up;case 36294:return Bp;case 36295:return Dp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Hp(n,e){n.uniform1fv(this.addr,e)}function Gp(n,e){const t=Ui(e,this.size,2);n.uniform2fv(this.addr,t)}function Qp(n,e){const t=Ui(e,this.size,3);n.uniform3fv(this.addr,t)}function Wp(n,e){const t=Ui(e,this.size,4);n.uniform4fv(this.addr,t)}function Xp(n,e){const t=Ui(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qp(n,e){const t=Ui(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jp(n,e){const t=Ui(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kp(n,e){n.uniform1iv(this.addr,e)}function Zp(n,e){n.uniform2iv(this.addr,e)}function jp(n,e){n.uniform3iv(this.addr,e)}function Yp(n,e){n.uniform4iv(this.addr,e)}function $p(n,e){n.uniform1uiv(this.addr,e)}function eA(n,e){n.uniform2uiv(this.addr,e)}function tA(n,e){n.uniform3uiv(this.addr,e)}function nA(n,e){n.uniform4uiv(this.addr,e)}function iA(n,e,t){const i=this.cache,s=e.length,r=Ys(t,s);ut(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ic,r[o])}function sA(n,e,t){const i=this.cache,s=e.length,r=Ys(t,s);ut(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ac,r[o])}function rA(n,e,t){const i=this.cache,s=e.length,r=Ys(t,s);ut(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||oc,r[o])}function aA(n,e,t){const i=this.cache,s=e.length,r=Ys(t,s);ut(i,r)||(n.uniform1iv(this.addr,r),ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rc,r[o])}function oA(n){switch(n){case 5126:return Hp;case 35664:return Gp;case 35665:return Qp;case 35666:return Wp;case 35674:return Xp;case 35675:return qp;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Zp;case 35668:case 35672:return jp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return aA}}class lA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}}class cA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oA(t.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function Go(n,e){n.seq.push(e),n.map[e.id]=e}function hA(n,e,t){const i=n.name,s=i.length;for(Dr.lastIndex=0;;){const r=Dr.exec(i),o=Dr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Go(t,c===void 0?new lA(a,n,e):new cA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new uA(a),Go(t,d)),t=d}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Qo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dA=37297;let fA=0;function pA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AA(n){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n);let i;switch(e===t?i="":e===zs&&t===Fs?i="LinearDisplayP3ToLinearSRGB":e===Fs&&t===zs&&(i="LinearSRGBToLinearDisplayP3"),n){case vn:case Ks:return[i,"LinearTransferOETF"];case lt:case ua:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pA(n.getShaderSource(e),o)}else return s}function mA(n,e){const t=AA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gA(n,e){let t;switch(e){case Au:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case Pl:t="ACESFilmic";break;case vu:t="AgX";break;case Eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function vA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function SA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mi(n){return n!==""}function Xo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(n){return n.replace(MA,TA)}const yA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TA(n,e){let t=ze[e];if(t===void 0){const i=yA.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $r(t)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(n){return n.replace(CA,bA)}function bA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ko(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _A(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function IA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bi:case _i:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function wA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case pu:e="ENVMAP_BLENDING_ADD";break}return e}function PA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_A(t),c=IA(t),u=RA(t),d=wA(t),h=PA(t),A=t.isWebGL2?"":EA(t),m=vA(t),g=SA(r),p=s.createProgram();let f,C,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),f.length>0&&(f+=`
`),C=[A,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),C.length>0&&(C+=`
`)):(f=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),C=[A,Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?gA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,mA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=$r(o),o=Xo(o,t),o=qo(o,t),a=$r(a),a=Xo(a,t),a=qo(a,t),o=Jo(o),a=Jo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const y=v+f+o,P=v+C+a,I=Qo(s,s.VERTEX_SHADER,y),b=Qo(s,s.FRAGMENT_SHADER,P);s.attachShader(p,I),s.attachShader(p,b),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function G(H){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(I).trim(),D=s.getShaderInfoLog(b).trim();let z=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,I,b);else{const W=Wo(s,I,"vertex"),J=Wo(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+W+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(R===""||D==="")&&(q=!1);q&&(H.diagnostics={runnable:z,programLog:Y,vertexShader:{log:R,prefix:f},fragmentShader:{log:D,prefix:C}})}s.deleteShader(I),s.deleteShader(b),S=new Bs(s,p),T=xA(s,p)}let S;this.getUniforms=function(){return S===void 0&&G(this),S};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,dA)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=b,this}let UA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new DA(e),t.set(e,i)),i}}class DA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function NA(n,e,t,i,s,r,o){const a=new fa,l=new BA,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures;let A=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function p(S,T,N,H,Y){const R=H.fog,D=Y.geometry,z=S.isMeshStandardMaterial?H.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),W=q&&q.mapping===Js?q.image.height:null,J=m[S.type];S.precision!==null&&(A=s.getMaxPrecision(S.precision),A!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",A,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ne=K!==void 0?K.length:0;let ie=0;D.morphAttributes.position!==void 0&&(ie=1),D.morphAttributes.normal!==void 0&&(ie=2),D.morphAttributes.color!==void 0&&(ie=3);let k,Z,de,ve;if(J){const Mt=tn[J];k=Mt.vertexShader,Z=Mt.fragmentShader}else k=S.vertexShader,Z=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const pe=n.getRenderTarget(),Te=Y.isInstancedMesh===!0,we=Y.isBatchedMesh===!0,Se=!!S.map,Pe=!!S.matcap,_=!!q,re=!!S.aoMap,X=!!S.lightMap,se=!!S.bumpMap,Q=!!S.normalMap,ye=!!S.displacementMap,fe=!!S.emissiveMap,x=!!S.metalnessMap,E=!!S.roughnessMap,B=S.anisotropy>0,te=S.clearcoat>0,$=S.iridescence>0,j=S.sheen>0,xe=S.transmission>0,ce=B&&!!S.anisotropyMap,me=te&&!!S.clearcoatMap,be=te&&!!S.clearcoatNormalMap,Ne=te&&!!S.clearcoatRoughnessMap,ee=$&&!!S.iridescenceMap,We=$&&!!S.iridescenceThicknessMap,Qe=j&&!!S.sheenColorMap,Be=j&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ge=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Xe=xe&&!!S.transmissionMap,it=xe&&!!S.thicknessMap,ke=!!S.gradientMap,ae=!!S.alphaMap,w=S.alphaTest>0,ue=!!S.alphaHash,he=!!S.extensions,Re=!!D.attributes.uv1,_e=!!D.attributes.uv2,Je=!!D.attributes.uv3;let Ke=wn;return S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ke=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:Z,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:A,batching:we,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vn,map:Se,matcap:Pe,envMap:_,envMapMode:_&&q.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:X,bumpMap:se,normalMap:Q,displacementMap:h&&ye,emissiveMap:fe,normalMapObjectSpace:Q&&S.normalMapType===Pu,normalMapTangentSpace:Q&&S.normalMapType===kl,metalnessMap:x,roughnessMap:E,anisotropy:B,anisotropyMap:ce,clearcoat:te,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,iridescence:$,iridescenceMap:ee,iridescenceThicknessMap:We,sheen:j,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:Ce,specularColorMap:ge,specularIntensityMap:Fe,transmission:xe,transmissionMap:Xe,thicknessMap:it,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Ti,alphaMap:ae,alphaTest:w,alphaHash:ue,combine:S.combine,mapUv:Se&&g(S.map.channel),aoMapUv:re&&g(S.aoMap.channel),lightMapUv:X&&g(S.lightMap.channel),bumpMapUv:se&&g(S.bumpMap.channel),normalMapUv:Q&&g(S.normalMap.channel),displacementMapUv:ye&&g(S.displacementMap.channel),emissiveMapUv:fe&&g(S.emissiveMap.channel),metalnessMapUv:x&&g(S.metalnessMap.channel),roughnessMapUv:E&&g(S.roughnessMap.channel),anisotropyMapUv:ce&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:ge&&g(S.specularColorMap.channel),specularIntensityMapUv:Fe&&g(S.specularIntensityMap.channel),transmissionMapUv:Xe&&g(S.transmissionMap.channel),thicknessMapUv:it&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Q||B),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:_e,vertexUv3s:Je,pointsUvs:Y.isPoints===!0&&!!D.attributes.uv&&(Se||ae),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(C(T,S),v(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function C(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=m[S.type];let N;if(T){const H=tn[T];N=gh.clone(H.uniforms)}else N=S.uniforms;return N}function P(S,T){let N;for(let H=0,Y=c.length;H<Y;H++){const R=c[H];if(R.cacheKey===T){N=R,++N.usedTimes;break}}return N===void 0&&(N=new LA(n,T,S,r),c.push(N)),N}function I(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:I,releaseShaderCache:b,programs:c,dispose:G}}function OA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function FA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jo(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,A,m,g,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:A,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=A,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=g,f.group=p),e++,f}function a(d,h,A,m,g,p){const f=o(d,h,A,m,g,p);A.transmission>0?i.push(f):A.transparent===!0?s.push(f):t.push(f)}function l(d,h,A,m,g,p){const f=o(d,h,A,m,g,p);A.transmission>0?i.unshift(f):A.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||FA),i.length>1&&i.sort(h||Zo),s.length>1&&s.sort(h||Zo)}function u(){for(let d=e,h=n.length;d<h;d++){const A=n[d];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function zA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new jo,n.set(i,[o])):s>=r.length?(o=new jo,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function VA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function kA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HA=0;function GA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QA(n,e){const t=new VA,i=kA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new at,a=new at;function l(u,d){let h=0,A=0,m=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let g=0,p=0,f=0,C=0,v=0,y=0,P=0,I=0,b=0,G=0,S=0;u.sort(GA);const T=d===!0?Math.PI:1;for(let H=0,Y=u.length;H<Y;H++){const R=u[H],D=R.color,z=R.intensity,q=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*z*T,A+=D.g*z*T,m+=D.b*z*T;else if(R.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(R.sh.coefficients[J],z);S++}else if(R.isDirectionalLight){const J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const K=R.shadow,ne=i.get(R);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,s.directionalShadow[g]=ne,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=R.shadow.matrix,y++}s.directional[g]=J,g++}else if(R.isSpotLight){const J=t.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(D).multiplyScalar(z*T),J.distance=q,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,s.spot[f]=J;const K=R.shadow;if(R.map&&(s.spotLightMap[b]=R.map,b++,K.updateMatrices(R),R.castShadow&&G++),s.spotLightMatrix[f]=K.matrix,R.castShadow){const ne=i.get(R);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,s.spotShadow[f]=ne,s.spotShadowMap[f]=W,I++}f++}else if(R.isRectAreaLight){const J=t.get(R);J.color.copy(D).multiplyScalar(z),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),s.rectArea[C]=J,C++}else if(R.isPointLight){const J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*T),J.distance=R.distance,J.decay=R.decay,R.castShadow){const K=R.shadow,ne=i.get(R);ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,s.pointShadow[p]=ne,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=R.shadow.matrix,P++}s.point[p]=J,p++}else if(R.isHemisphereLight){const J=t.get(R);J.skyColor.copy(R.color).multiplyScalar(z*T),J.groundColor.copy(R.groundColor).multiplyScalar(z*T),s.hemi[v]=J,v++}}C>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_FLOAT_1,s.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=oe.LTC_HALF_1,s.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=A,s.ambient[2]=m;const N=s.hash;(N.directionalLength!==g||N.pointLength!==p||N.spotLength!==f||N.rectAreaLength!==C||N.hemiLength!==v||N.numDirectionalShadows!==y||N.numPointShadows!==P||N.numSpotShadows!==I||N.numSpotMaps!==b||N.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=C,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=I+b-G,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=S,N.directionalLength=g,N.pointLength=p,N.spotLength=f,N.rectAreaLength=C,N.hemiLength=v,N.numDirectionalShadows=y,N.numPointShadows=P,N.numSpotShadows=I,N.numSpotMaps=b,N.numLightProbes=S,s.version=HA++)}function c(u,d){let h=0,A=0,m=0,g=0,p=0;const f=d.matrixWorldInverse;for(let C=0,v=u.length;C<v;C++){const y=u[C];if(y.isDirectionalLight){const P=s.directional[h];P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),h++}else if(y.isSpotLight){const P=s.spot[m];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const P=s.rectArea[g];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const P=s.point[A];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),A++}else if(y.isHemisphereLight){const P=s.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Yo(n,e){const t=new QA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function WA(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yo(n,e),t.set(r,[l])):o>=a.length?(l=new Yo(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class XA extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZA(n,e,t){let i=new pa;const s=new le,r=new le,o=new $e,a=new XA({depthPacking:wu}),l=new qA,c={},u=t.maxTextureSize,d={[En]:Ut,[Ut]:En,[mn]:mn},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:JA,fragmentShader:KA}),A=h.clone();A.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ye(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let f=this.type;this.render=function(I,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Rn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Y=f!==An&&this.type===An,R=f===An&&this.type!==An;for(let D=0,z=I.length;D<z;D++){const q=I[D],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();if(s.multiply(J),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||Y===!0||R===!0){const ne=this.type!==An?{minFilter:bt,magFilter:bt}:{};W.map!==null&&W.map.dispose(),W.map=new Kn(s.x,s.y,ne),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const K=W.getViewportCount();for(let ne=0;ne<K;ne++){const ie=W.getViewport(ne);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),H.viewport(o),W.updateMatrices(q,ne),i=W.getFrustum(),y(b,G,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===An&&C(W,G),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,T,N)};function C(I,b){const G=e.update(g);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,A.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,A.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Kn(s.x,s.y)),h.uniforms.shadow_pass.value=I.map.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(b,null,G,h,g,null),A.uniforms.shadow_pass.value=I.mapPass.texture,A.uniforms.resolution.value=I.mapSize,A.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(b,null,G,A,g,null)}function v(I,b,G,S){let T=null;const N=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)T=N;else if(T=G.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=T.uuid,Y=b.uuid;let R=c[H];R===void 0&&(R={},c[H]=R);let D=R[Y];D===void 0&&(D=T.clone(),R[Y]=D,b.addEventListener("dispose",P)),T=D}if(T.visible=b.visible,T.wireframe=b.wireframe,S===An?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:d[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=n.properties.get(T);H.light=G}return T}function y(I,b,G,S,T){if(I.visible===!1)return;if(I.layers.test(b.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===An)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),R=I.material;if(Array.isArray(R)){const D=Y.groups;for(let z=0,q=D.length;z<q;z++){const W=D[z],J=R[W.materialIndex];if(J&&J.visible){const K=v(I,J,S,T);I.onBeforeShadow(n,I,b,G,Y,K,W),n.renderBufferDirect(G,null,Y,K,I,W),I.onAfterShadow(n,I,b,G,Y,K,W)}}}else if(R.visible){const D=v(I,R,S,T);I.onBeforeShadow(n,I,b,G,Y,D,null),n.renderBufferDirect(G,null,Y,D,I,null),I.onAfterShadow(n,I,b,G,Y,D,null)}}const H=I.children;for(let Y=0,R=H.length;Y<R;Y++)y(H[Y],b,G,S,T)}function P(I){I.target.removeEventListener("dispose",P);for(const G in c){const S=c[G],T=I.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function jA(n,e,t){const i=t.isWebGL2;function s(){let w=!1;const ue=new $e;let he=null;const Re=new $e(0,0,0,0);return{setMask:function(_e){he!==_e&&!w&&(n.colorMask(_e,_e,_e,_e),he=_e)},setLocked:function(_e){w=_e},setClear:function(_e,Je,Ke,dt,Mt){Mt===!0&&(_e*=dt,Je*=dt,Ke*=dt),ue.set(_e,Je,Ke,dt),Re.equals(ue)===!1&&(n.clearColor(_e,Je,Ke,dt),Re.copy(ue))},reset:function(){w=!1,he=null,Re.set(-1,0,0,0)}}}function r(){let w=!1,ue=null,he=null,Re=null;return{setTest:function(_e){_e?we(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(_e){ue!==_e&&!w&&(n.depthMask(_e),ue=_e)},setFunc:function(_e){if(he!==_e){switch(_e){case au:n.depthFunc(n.NEVER);break;case ou:n.depthFunc(n.ALWAYS);break;case lu:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case cu:n.depthFunc(n.EQUAL);break;case uu:n.depthFunc(n.GEQUAL);break;case hu:n.depthFunc(n.GREATER);break;case du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=_e}},setLocked:function(_e){w=_e},setClear:function(_e){Re!==_e&&(n.clearDepth(_e),Re=_e)},reset:function(){w=!1,ue=null,he=null,Re=null}}}function o(){let w=!1,ue=null,he=null,Re=null,_e=null,Je=null,Ke=null,dt=null,Mt=null;return{setTest:function(Ze){w||(Ze?we(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!w&&(n.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,yt,en){(he!==Ze||Re!==yt||_e!==en)&&(n.stencilFunc(Ze,yt,en),he=Ze,Re=yt,_e=en)},setOp:function(Ze,yt,en){(Je!==Ze||Ke!==yt||dt!==en)&&(n.stencilOp(Ze,yt,en),Je=Ze,Ke=yt,dt=en)},setLocked:function(Ze){w=Ze},setClear:function(Ze){Mt!==Ze&&(n.clearStencil(Ze),Mt=Ze)},reset:function(){w=!1,ue=null,he=null,Re=null,_e=null,Je=null,Ke=null,dt=null,Mt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let h={},A={},m=new WeakMap,g=[],p=null,f=!1,C=null,v=null,y=null,P=null,I=null,b=null,G=null,S=new Ue(0,0,0),T=0,N=!1,H=null,Y=null,R=null,D=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=J>=2);let ne=null,ie={};const k=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),de=new $e().fromArray(k),ve=new $e().fromArray(Z);function pe(w,ue,he,Re){const _e=new Uint8Array(4),Je=n.createTexture();n.bindTexture(w,Je),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<he;Ke++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ue+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return Je}const Te={};Te[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(n.DEPTH_TEST),l.setFunc(Ds),fe(!1),x(Ua),we(n.CULL_FACE),Q(Rn);function we(w){h[w]!==!0&&(n.enable(w),h[w]=!0)}function Se(w){h[w]!==!1&&(n.disable(w),h[w]=!1)}function Pe(w,ue){return A[w]!==ue?(n.bindFramebuffer(w,ue),A[w]=ue,i&&(w===n.DRAW_FRAMEBUFFER&&(A[n.FRAMEBUFFER]=ue),w===n.FRAMEBUFFER&&(A[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function _(w,ue){let he=g,Re=!1;if(w)if(he=m.get(ue),he===void 0&&(he=[],m.set(ue,he)),w.isWebGLMultipleRenderTargets){const _e=w.texture;if(he.length!==_e.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,Ke=_e.length;Je<Ke;Je++)he[Je]=n.COLOR_ATTACHMENT0+Je;he.length=_e.length,Re=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Re=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function re(w){return p!==w?(n.useProgram(w),p=w,!0):!1}const X={[Hn]:n.FUNC_ADD,[Wc]:n.FUNC_SUBTRACT,[Xc]:n.FUNC_REVERSE_SUBTRACT};if(i)X[Oa]=n.MIN,X[Fa]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(X[Oa]=w.MIN_EXT,X[Fa]=w.MAX_EXT)}const se={[qc]:n.ZERO,[Jc]:n.ONE,[Kc]:n.SRC_COLOR,[Wr]:n.SRC_ALPHA,[tu]:n.SRC_ALPHA_SATURATE,[$c]:n.DST_COLOR,[jc]:n.DST_ALPHA,[Zc]:n.ONE_MINUS_SRC_COLOR,[Xr]:n.ONE_MINUS_SRC_ALPHA,[eu]:n.ONE_MINUS_DST_COLOR,[Yc]:n.ONE_MINUS_DST_ALPHA,[nu]:n.CONSTANT_COLOR,[iu]:n.ONE_MINUS_CONSTANT_COLOR,[su]:n.CONSTANT_ALPHA,[ru]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(w,ue,he,Re,_e,Je,Ke,dt,Mt,Ze){if(w===Rn){f===!0&&(Se(n.BLEND),f=!1);return}if(f===!1&&(we(n.BLEND),f=!0),w!==Qc){if(w!==C||Ze!==N){if((v!==Hn||I!==Hn)&&(n.blendEquation(n.FUNC_ADD),v=Hn,I=Hn),Ze)switch(w){case Ti:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case Da:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Na:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Da:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Na:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}y=null,P=null,b=null,G=null,S.set(0,0,0),T=0,C=w,N=Ze}return}_e=_e||ue,Je=Je||he,Ke=Ke||Re,(ue!==v||_e!==I)&&(n.blendEquationSeparate(X[ue],X[_e]),v=ue,I=_e),(he!==y||Re!==P||Je!==b||Ke!==G)&&(n.blendFuncSeparate(se[he],se[Re],se[Je],se[Ke]),y=he,P=Re,b=Je,G=Ke),(dt.equals(S)===!1||Mt!==T)&&(n.blendColor(dt.r,dt.g,dt.b,Mt),S.copy(dt),T=Mt),C=w,N=!1}function ye(w,ue){w.side===mn?Se(n.CULL_FACE):we(n.CULL_FACE);let he=w.side===Ut;ue&&(he=!he),fe(he),w.blending===Ti&&w.transparent===!1?Q(Rn):Q(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const Re=w.stencilWrite;c.setTest(Re),Re&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),B(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(w){H!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),H=w)}function x(w){w!==Hc?(we(n.CULL_FACE),w!==Y&&(w===Ua?n.cullFace(n.BACK):w===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),Y=w}function E(w){w!==R&&(W&&n.lineWidth(w),R=w)}function B(w,ue,he){w?(we(n.POLYGON_OFFSET_FILL),(D!==ue||z!==he)&&(n.polygonOffset(ue,he),D=ue,z=he)):Se(n.POLYGON_OFFSET_FILL)}function te(w){w?we(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function $(w){w===void 0&&(w=n.TEXTURE0+q-1),ne!==w&&(n.activeTexture(w),ne=w)}function j(w,ue,he){he===void 0&&(ne===null?he=n.TEXTURE0+q-1:he=ne);let Re=ie[he];Re===void 0&&(Re={type:void 0,texture:void 0},ie[he]=Re),(Re.type!==w||Re.texture!==ue)&&(ne!==he&&(n.activeTexture(he),ne=he),n.bindTexture(w,ue||Te[w]),Re.type=w,Re.texture=ue)}function xe(){const w=ie[ne];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function We(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Fe(w){de.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),de.copy(w))}function Xe(w){ve.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),ve.copy(w))}function it(w,ue){let he=d.get(ue);he===void 0&&(he=new WeakMap,d.set(ue,he));let Re=he.get(w);Re===void 0&&(Re=n.getUniformBlockIndex(ue,w.name),he.set(w,Re))}function ke(w,ue){const Re=d.get(ue).get(w);u.get(ue)!==Re&&(n.uniformBlockBinding(ue,Re,w.__bindingPointIndex),u.set(ue,Re))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,ie={},A={},m=new WeakMap,g=[],p=null,f=!1,C=null,v=null,y=null,P=null,I=null,b=null,G=null,S=new Ue(0,0,0),T=0,N=!1,H=null,Y=null,R=null,D=null,z=null,de.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:Se,bindFramebuffer:Pe,drawBuffers:_,useProgram:re,setBlending:Q,setMaterial:ye,setFlipSided:fe,setCullFace:x,setLineWidth:E,setPolygonOffset:B,setScissorTest:te,activeTexture:$,bindTexture:j,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Ce,texImage3D:ge,updateUBOMapping:it,uniformBlockBinding:ke,texStorage2D:Qe,texStorage3D:Be,texSubImage2D:be,texSubImage3D:Ne,compressedTexSubImage2D:ee,compressedTexSubImage3D:We,scissor:Fe,viewport:Xe,reset:ae}}function YA(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(x,E){return A?new OffscreenCanvas(x,E):Zi("canvas")}function g(x,E,B,te){let $=1;if((x.width>te||x.height>te)&&($=te/Math.max(x.width,x.height)),$<1||E===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const j=E?ks:Math.floor,xe=j($*x.width),ce=j($*x.height);d===void 0&&(d=m(xe,ce));const me=B?m(xe,ce):d;return me.width=xe,me.height=ce,me.getContext("2d").drawImage(x,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+xe+"x"+ce+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return jr(x.width)&&jr(x.height)}function f(x){return a?!1:x.wrapS!==Zt||x.wrapT!==Zt||x.minFilter!==bt&&x.minFilter!==Ot}function C(x,E){return x.generateMipmaps&&E&&x.minFilter!==bt&&x.minFilter!==Ot}function v(x){n.generateMipmap(x)}function y(x,E,B,te,$=!1){if(a===!1)return E;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let j=E;if(E===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),E===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),E===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),E===n.RGBA){const xe=$?Os:qe.getTransfer(te);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=xe===je?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function P(x,E,B){return C(x,B)===!0||x.isFramebufferTexture&&x.minFilter!==bt&&x.minFilter!==Ot?Math.log2(Math.max(E.width,E.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?E.mipmaps.length:1}function I(x){return x===bt||x===za||x===lr?n.NEAREST:n.LINEAR}function b(x){const E=x.target;E.removeEventListener("dispose",b),S(E),E.isVideoTexture&&u.delete(E)}function G(x){const E=x.target;E.removeEventListener("dispose",G),N(E)}function S(x){const E=i.get(x);if(E.__webglInit===void 0)return;const B=x.source,te=h.get(B);if(te){const $=te[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(x),Object.keys(te).length===0&&h.delete(B)}i.remove(x)}function T(x){const E=i.get(x);n.deleteTexture(E.__webglTexture);const B=x.source,te=h.get(B);delete te[E.__cacheKey],o.memory.textures--}function N(x){const E=x.texture,B=i.get(x),te=i.get(E);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let j=0;j<B.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(B.__webglFramebuffer[$][j]);else n.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)n.deleteFramebuffer(B.__webglFramebuffer[$]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let $=0,j=E.length;$<j;$++){const xe=i.get(E[$]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(E[$])}i.remove(E),i.remove(x)}let H=0;function Y(){H=0}function R(){const x=H;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),H+=1,x}function D(x){const E=[];return E.push(x.wrapS),E.push(x.wrapT),E.push(x.wrapR||0),E.push(x.magFilter),E.push(x.minFilter),E.push(x.anisotropy),E.push(x.internalFormat),E.push(x.format),E.push(x.type),E.push(x.generateMipmaps),E.push(x.premultiplyAlpha),E.push(x.flipY),E.push(x.unpackAlignment),E.push(x.colorSpace),E.join()}function z(x,E){const B=i.get(x);if(x.isVideoTexture&&ye(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const te=x.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,x,E);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+E)}function q(x,E){const B=i.get(x);if(x.version>0&&B.__version!==x.version){de(B,x,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+E)}function W(x,E){const B=i.get(x);if(x.version>0&&B.__version!==x.version){de(B,x,E);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+E)}function J(x,E){const B=i.get(x);if(x.version>0&&B.__version!==x.version){ve(B,x,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+E)}const K={[Jr]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Kr]:n.MIRRORED_REPEAT},ne={[bt]:n.NEAREST,[za]:n.NEAREST_MIPMAP_NEAREST,[lr]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Su]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},ie={[Lu]:n.NEVER,[Fu]:n.ALWAYS,[Uu]:n.LESS,[Hl]:n.LEQUAL,[Bu]:n.EQUAL,[Ou]:n.GEQUAL,[Du]:n.GREATER,[Nu]:n.NOTEQUAL};function k(x,E,B){if(B?(n.texParameteri(x,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,K[E.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ne[E.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ne[E.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Zt||E.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,I(E.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,I(E.minFilter)),E.minFilter!==bt&&E.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===bt||E.minFilter!==lr&&E.minFilter!==Ii||E.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(x,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Z(x,E){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,E.addEventListener("dispose",b));const te=E.source;let $=h.get(te);$===void 0&&($={},h.set(te,$));const j=D(E);if(j!==x.__cacheKey){$[j]===void 0&&($[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[j].usedTimes++;const xe=$[x.__cacheKey];xe!==void 0&&($[x.__cacheKey].usedTimes--,xe.usedTimes===0&&T(E)),x.__cacheKey=j,x.__webglTexture=$[j].texture}return B}function de(x,E,B){let te=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=n.TEXTURE_3D);const $=Z(x,E),j=E.source;t.bindTexture(te,x.__webglTexture,n.TEXTURE0+B);const xe=i.get(j);if(j.version!==xe.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const ce=qe.getPrimaries(qe.workingColorSpace),me=E.colorSpace===Qt?null:qe.getPrimaries(E.colorSpace),be=E.colorSpace===Qt||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ne=f(E)&&p(E.image)===!1;let ee=g(E.image,Ne,!1,s.maxTextureSize);ee=fe(E,ee);const We=p(ee)||a,Qe=r.convert(E.format,E.colorSpace);let Be=r.convert(E.type),Ce=y(E.internalFormat,Qe,Be,E.colorSpace,E.isVideoTexture);k(te,E,We);let ge;const Fe=E.mipmaps,Xe=a&&E.isVideoTexture!==!0&&Ce!==zl,it=xe.__version===void 0||$===!0,ke=P(E,ee,We);if(E.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?E.type===_n?Ce=n.DEPTH_COMPONENT32F:E.type===bn?Ce=n.DEPTH_COMPONENT24:E.type===Xn?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:E.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===qn&&Ce===n.DEPTH_COMPONENT&&E.type!==ca&&E.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=bn,Be=r.convert(E.type)),E.format===Ri&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,E.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Xn,Be=r.convert(E.type))),it&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Qe,Be,null));else if(E.isDataTexture)if(Fe.length>0&&We){Xe&&it&&t.texStorage2D(n.TEXTURE_2D,ke,Ce,Fe[0].width,Fe[0].height);for(let ae=0,w=Fe.length;ae<w;ae++)ge=Fe[ae],Xe?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,Qe,Be,ge.data):t.texImage2D(n.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,Qe,Be,ge.data);E.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(n.TEXTURE_2D,ke,Ce,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Qe,Be,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Qe,Be,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xe&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ce,Fe[0].width,Fe[0].height,ee.depth);for(let ae=0,w=Fe.length;ae<w;ae++)ge=Fe[ae],E.format!==jt?Qe!==null?Xe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,ee.depth,Qe,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ce,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,ee.depth,Qe,Be,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ce,ge.width,ge.height,ee.depth,0,Qe,Be,ge.data)}else{Xe&&it&&t.texStorage2D(n.TEXTURE_2D,ke,Ce,Fe[0].width,Fe[0].height);for(let ae=0,w=Fe.length;ae<w;ae++)ge=Fe[ae],E.format!==jt?Qe!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,Qe,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge.width,ge.height,Qe,Be,ge.data):t.texImage2D(n.TEXTURE_2D,ae,Ce,ge.width,ge.height,0,Qe,Be,ge.data)}else if(E.isDataArrayTexture)Xe?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ce,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Qe,Be,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,Qe,Be,ee.data);else if(E.isData3DTexture)Xe?(it&&t.texStorage3D(n.TEXTURE_3D,ke,Ce,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Qe,Be,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,Qe,Be,ee.data);else if(E.isFramebufferTexture){if(it)if(Xe)t.texStorage2D(n.TEXTURE_2D,ke,Ce,ee.width,ee.height);else{let ae=ee.width,w=ee.height;for(let ue=0;ue<ke;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ce,ae,w,0,Qe,Be,null),ae>>=1,w>>=1}}else if(Fe.length>0&&We){Xe&&it&&t.texStorage2D(n.TEXTURE_2D,ke,Ce,Fe[0].width,Fe[0].height);for(let ae=0,w=Fe.length;ae<w;ae++)ge=Fe[ae],Xe?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Qe,Be,ge):t.texImage2D(n.TEXTURE_2D,ae,Ce,Qe,Be,ge);E.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(n.TEXTURE_2D,ke,Ce,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,Be,ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,Qe,Be,ee);C(E,We)&&v(te),xe.__version=j.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function ve(x,E,B){if(E.image.length!==6)return;const te=Z(x,E),$=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+B);const j=i.get($);if($.version!==j.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const xe=qe.getPrimaries(qe.workingColorSpace),ce=E.colorSpace===Qt?null:qe.getPrimaries(E.colorSpace),me=E.colorSpace===Qt||xe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,Ne=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!be&&!Ne?ee[ae]=g(E.image[ae],!1,!0,s.maxCubemapSize):ee[ae]=Ne?E.image[ae].image:E.image[ae],ee[ae]=fe(E,ee[ae]);const We=ee[0],Qe=p(We)||a,Be=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),ge=y(E.internalFormat,Be,Ce,E.colorSpace),Fe=a&&E.isVideoTexture!==!0,Xe=j.__version===void 0||te===!0;let it=P(E,We,Qe);k(n.TEXTURE_CUBE_MAP,E,Qe);let ke;if(be){Fe&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,it,ge,We.width,We.height);for(let ae=0;ae<6;ae++){ke=ee[ae].mipmaps;for(let w=0;w<ke.length;w++){const ue=ke[w];E.format!==jt?Be!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,0,0,ue.width,ue.height,Be,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,0,0,ue.width,ue.height,Be,Ce,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w,ge,ue.width,ue.height,0,Be,Ce,ue.data)}}}else{ke=E.mipmaps,Fe&&Xe&&(ke.length>0&&it++,t.texStorage2D(n.TEXTURE_CUBE_MAP,it,ge,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(Ne){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,Be,Ce,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ge,ee[ae].width,ee[ae].height,0,Be,Ce,ee[ae].data);for(let w=0;w<ke.length;w++){const he=ke[w].image[ae].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,0,0,he.width,he.height,Be,Ce,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,ge,he.width,he.height,0,Be,Ce,he.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,Ce,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ge,Be,Ce,ee[ae]);for(let w=0;w<ke.length;w++){const ue=ke[w];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,0,0,Be,Ce,ue.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,w+1,ge,Be,Ce,ue.image[ae])}}}C(E,Qe)&&v(n.TEXTURE_CUBE_MAP),j.__version=$.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function pe(x,E,B,te,$,j){const xe=r.convert(B.format,B.colorSpace),ce=r.convert(B.type),me=y(B.internalFormat,xe,ce,B.colorSpace);if(!i.get(E).__hasExternalTextures){const Ne=Math.max(1,E.width>>j),ee=Math.max(1,E.height>>j);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,j,me,Ne,ee,E.depth,0,xe,ce,null):t.texImage2D($,j,me,Ne,ee,0,xe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Q(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,$,i.get(B).__webglTexture,0,se(E)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,$,i.get(B).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(x,E,B){if(n.bindRenderbuffer(n.RENDERBUFFER,x),E.depthBuffer&&!E.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Q(E)){const $=E.depthTexture;$&&$.isDepthTexture&&($.type===_n?te=n.DEPTH_COMPONENT32F:$.type===bn&&(te=n.DEPTH_COMPONENT24));const j=se(E);Q(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,te,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,te,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(E.depthBuffer&&E.stencilBuffer){const te=se(E);B&&Q(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):Q(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0;$<te.length;$++){const j=te[$],xe=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),me=y(j.internalFormat,xe,ce,j.colorSpace),be=se(E);B&&Q(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,me,E.width,E.height):Q(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(x,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,$=se(E);if(E.depthTexture.format===qn)Q(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(E.depthTexture.format===Ri)Q(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(x){const E=i.get(x),B=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,x)}else if(B){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=n.createRenderbuffer(),Te(E.__webglDepthbuffer[te],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Te(E.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(x,E,B){const te=i.get(x);E!==void 0&&pe(te.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Se(x)}function _(x){const E=x.texture,B=i.get(x),te=i.get(E);x.addEventListener("dispose",G),x.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=E.version,o.memory.textures++);const $=x.isWebGLCubeRenderTarget===!0,j=x.isWebGLMultipleRenderTargets===!0,xe=p(x)||a;if($){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let me=0;me<E.mipmaps.length;me++)B.__webglFramebuffer[ce][me]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){const ce=x.texture;for(let me=0,be=ce.length;me<be;me++){const Ne=i.get(ce[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&Q(x)===!1){const ce=j?E:[E];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){const be=ce[me];B.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const Ne=r.convert(be.format,be.colorSpace),ee=r.convert(be.type),We=y(be.internalFormat,Ne,ee,be.colorSpace,x.isXRRenderTarget===!0),Qe=se(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,We,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,B.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),k(n.TEXTURE_CUBE_MAP,E,xe);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(B.__webglFramebuffer[ce][me],x,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else pe(B.__webglFramebuffer[ce],x,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);C(E,xe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){const ce=x.texture;for(let me=0,be=ce.length;me<be;me++){const Ne=ce[me],ee=i.get(Ne);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),k(n.TEXTURE_2D,Ne,xe),pe(B.__webglFramebuffer,x,Ne,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),C(Ne,xe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?ce=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),k(ce,E,xe),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)pe(B.__webglFramebuffer[me],x,E,n.COLOR_ATTACHMENT0,ce,me);else pe(B.__webglFramebuffer,x,E,n.COLOR_ATTACHMENT0,ce,0);C(E,xe)&&v(ce),t.unbindTexture()}x.depthBuffer&&Se(x)}function re(x){const E=p(x)||a,B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0,$=B.length;te<$;te++){const j=B[te];if(C(j,E)){const xe=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(j).__webglTexture;t.bindTexture(xe,ce),v(xe),t.unbindTexture()}}}function X(x){if(a&&x.samples>0&&Q(x)===!1){const E=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],B=x.width,te=x.height;let $=n.COLOR_BUFFER_BIT;const j=[],xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(x),me=x.isWebGLMultipleRenderTargets===!0;if(me)for(let be=0;be<E.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<E.length;be++){j.push(n.COLOR_ATTACHMENT0+be),x.depthBuffer&&j.push(xe);const Ne=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ne===!1&&(x.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),me){const ee=i.get(E[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,B,te,0,0,B,te,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<E.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const Ne=i.get(E[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function se(x){return Math.min(s.maxSamples,x.samples)}function Q(x){const E=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(x){const E=o.render.frame;u.get(x)!==E&&(u.set(x,E),x.update())}function fe(x,E){const B=x.colorSpace,te=x.format,$=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Zr||B!==vn&&B!==Qt&&(qe.getTransfer(B)===je?a===!1?e.has("EXT_sRGB")===!0&&te===jt?(x.format=Zr,x.minFilter=Ot,x.generateMipmaps=!1):E=Ql.sRGBToLinear(E):(te!==jt||$!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=R,this.resetTextureUnits=Y,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Pe,this.setupRenderTarget=_,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Q}function $A(n,e,t){const i=t.isWebGL2;function s(r,o=Qt){let a;const l=qe.getTransfer(o);if(r===Pn)return n.UNSIGNED_BYTE;if(r===Bl)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===xu)return n.BYTE;if(r===Mu)return n.SHORT;if(r===ca)return n.UNSIGNED_SHORT;if(r===Ul)return n.INT;if(r===bn)return n.UNSIGNED_INT;if(r===_n)return n.FLOAT;if(r===Ji)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yu)return n.ALPHA;if(r===jt)return n.RGBA;if(r===Tu)return n.LUMINANCE;if(r===Cu)return n.LUMINANCE_ALPHA;if(r===qn)return n.DEPTH_COMPONENT;if(r===Ri)return n.DEPTH_STENCIL;if(r===Zr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bu)return n.RED;if(r===Nl)return n.RED_INTEGER;if(r===_u)return n.RG;if(r===Ol)return n.RG_INTEGER;if(r===Fl)return n.RGBA_INTEGER;if(r===cr||r===ur||r===hr||r===dr)if(l===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Va||r===ka||r===Ha||r===Ga)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ka)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ha)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ga)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qa||r===Wa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qa)return l===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Wa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xa||r===qa||r===Ja||r===Ka||r===Za||r===ja||r===Ya||r===$a||r===eo||r===to||r===no||r===io||r===so||r===ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qa)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ja)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ka)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Za)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ja)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ya)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$a)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eo)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===to)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===no)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===io)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===so)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ro)return l===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fr||r===ao||r===oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fr)return l===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Iu||r===lo||r===co||r===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===lo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class em extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),A=.02,m=.005;c.inputState.pinching&&h>A+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=A-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class nm extends Pi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,A=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const C=[],v=[],y=new le;let P=null;const I=new Ft;I.layers.enable(1),I.viewport=new $e;const b=new Ft;b.layers.enable(2),b.viewport=new $e;const G=[I,b],S=new em;S.layers.enable(1),S.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=C[k];return Z===void 0&&(Z=new Nr,C[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=C[k];return Z===void 0&&(Z=new Nr,C[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=C[k];return Z===void 0&&(Z=new Nr,C[k]=Z),Z.getHandSpace()};function H(k){const Z=v.indexOf(k.inputSource);if(Z===-1)return;const de=C[Z];de!==void 0&&(de.update(k.inputSource,k.frame,c||o),de.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",R);for(let k=0;k<C.length;k++){const Z=v[k];Z!==null&&(v[k]=null,C[k].disconnect(Z))}T=null,N=null,e.setRenderTarget(p),A=null,h=null,d=null,s=null,f=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:A},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),f=new Kn(A.framebufferWidth,A.framebufferHeight,{format:jt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,de=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Ri:qn,de=g.stencil?Xn:bn);const pe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Kn(h.textureWidth,h.textureHeight,{format:jt,type:Pn,depthTexture:new nc(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(k){for(let Z=0;Z<k.removed.length;Z++){const de=k.removed[Z],ve=v.indexOf(de);ve>=0&&(v[ve]=null,C[ve].disconnect(de))}for(let Z=0;Z<k.added.length;Z++){const de=k.added[Z];let ve=v.indexOf(de);if(ve===-1){for(let Te=0;Te<C.length;Te++)if(Te>=v.length){v.push(de),ve=Te;break}else if(v[Te]===null){v[Te]=de,ve=Te;break}if(ve===-1)break}const pe=C[ve];pe&&pe.connect(de)}}const D=new L,z=new L;function q(k,Z,de){D.setFromMatrixPosition(Z.matrixWorld),z.setFromMatrixPosition(de.matrixWorld);const ve=D.distanceTo(z),pe=Z.projectionMatrix.elements,Te=de.projectionMatrix.elements,we=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),Pe=(pe[9]+1)/pe[5],_=(pe[9]-1)/pe[5],re=(pe[8]-1)/pe[0],X=(Te[8]+1)/Te[0],se=we*re,Q=we*X,ye=ve/(-re+X),fe=ye*-re;Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(fe),k.translateZ(ye),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const x=we+ye,E=Se+ye,B=se-fe,te=Q+(ve-fe),$=Pe*Se/E*x,j=_*Se/E*x;k.projectionMatrix.makePerspective(B,te,$,j,x,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=b.near=I.near=k.near,S.far=b.far=I.far=k.far,(T!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,N=S.far);const Z=k.parent,de=S.cameras;W(S,Z);for(let ve=0;ve<de.length;ve++)W(de[ve],Z);de.length===2?q(S,I,b):S.projectionMatrix.copy(I.projectionMatrix),J(k,S,Z)};function J(k,Z,de){de===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ki*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&A===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=k)};let K=null;function ne(k,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){const de=u.views;A!==null&&(e.setRenderTargetFramebuffer(f,A.framebuffer),e.setRenderTarget(f));let ve=!1;de.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let pe=0;pe<de.length;pe++){const Te=de[pe];let we=null;if(A!==null)we=A.getViewport(Te);else{const Pe=d.getViewSubImage(h,Te);we=Pe.viewport,pe===0&&(e.setRenderTargetTextures(f,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(f))}let Se=G[pe];Se===void 0&&(Se=new Ft,Se.layers.enable(pe),Se.viewport=new $e,G[pe]=Se),Se.matrix.fromArray(Te.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Te.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(we.x,we.y,we.width,we.height),pe===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Se)}}for(let de=0;de<C.length;de++){const ve=v[de],pe=C[de];ve!==null&&pe!==void 0&&pe.update(ve,Z,c||o)}K&&K(k,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),m=null}const ie=new ec;ie.setAnimationLoop(ne),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function im(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,jl(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,C,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&A(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,C,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ut&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ut&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const C=e.get(f).envMap;if(C&&(p.envMap.value=C,p.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,C,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*C,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function A(p,f,C){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const C=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sm(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,v){const y=v.program;i.uniformBlockBinding(C,y)}function c(C,v){let y=s[C.id];y===void 0&&(m(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(C,P);const I=e.render.frame;r[C.id]!==I&&(h(C),r[C.id]=I)}function u(C){const v=d();C.__bindingPointIndex=v;const y=n.createBuffer(),P=C.__size,I=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const v=s[C.id],y=C.uniforms,P=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let I=0,b=y.length;I<b;I++){const G=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,T=G.length;S<T;S++){const N=G[S];if(A(N,I,S,P)===!0){const H=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let R=0;for(let D=0;D<Y.length;D++){const z=Y[D],q=g(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,H+R,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,R),R+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function A(C,v,y,P){const I=C.value,b=v+"_"+y;if(P[b]===void 0)return typeof I=="number"||typeof I=="boolean"?P[b]=I:P[b]=I.clone(),!0;{const G=P[b];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return P[b]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function m(C){const v=C.uniforms;let y=0;const P=16;for(let b=0,G=v.length;b<G;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,N=S.length;T<N;T++){const H=S[T],Y=Array.isArray(H.value)?H.value:[H.value];for(let R=0,D=Y.length;R<D;R++){const z=Y[R],q=g(z),W=y%P;W!==0&&P-W<q.boundary&&(y+=P-W),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=q.storage}}}const I=y%P;return I>0&&(y+=P-I),C.__size=y,C.__cache={},this}function g(C){const v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function p(C){const v=C.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class lc{constructor(e={}){const{canvas:t=$u(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const A=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const f=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const v=this;let y=!1,P=0,I=0,b=null,G=-1,S=null;const T=new $e,N=new $e;let H=null;const Y=new Ue(0);let R=0,D=t.width,z=t.height,q=1,W=null,J=null;const K=new $e(0,0,D,z),ne=new $e(0,0,D,z);let ie=!1;const k=new pa;let Z=!1,de=!1,ve=null;const pe=new at,Te=new le,we=new L,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return b===null?q:1}let _=i;function re(M,U){for(let F=0;F<M.length;F++){const V=M[F],O=t.getContext(V,U);if(O!==null)return O}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",ue,!1),_===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),_=re(U,M),_===null)throw re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let X,se,Q,ye,fe,x,E,B,te,$,j,xe,ce,me,be,Ne,ee,We,Qe,Be,Ce,ge,Fe,Xe;function it(){X=new pp(_),se=new lp(_,X,e),X.init(se),ge=new $A(_,X,se),Q=new jA(_,X,se),ye=new gp(_),fe=new OA,x=new YA(_,X,Q,fe,se,ge,ye),E=new up(v),B=new fp(v),te=new Th(_,se),Fe=new ap(_,X,te,se),$=new Ap(_,te,ye,Fe),j=new xp(_,$,te,ye),Qe=new Sp(_,se,x),Ne=new cp(fe),xe=new NA(v,E,B,X,se,Fe,Ne),ce=new im(v,fe),me=new zA,be=new WA(X,se),We=new rp(v,E,B,Q,j,h,l),ee=new ZA(v,j,se),Xe=new sm(_,ye,se,Q),Be=new op(_,X,ye,se),Ce=new mp(_,X,ye,se),ye.programs=xe.programs,v.capabilities=se,v.extensions=X,v.properties=fe,v.renderLists=me,v.shadowMap=ee,v.state=Q,v.info=ye}it();const ke=new nm(v,_);this.xr=ke,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=X.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=X.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(D,z,!1))},this.getSize=function(M){return M.set(D,z)},this.setSize=function(M,U,F=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=M,z=U,t.width=Math.floor(M*q),t.height=Math.floor(U*q),F===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(D*q,z*q).floor()},this.setDrawingBufferSize=function(M,U,F){D=M,z=U,q=F,t.width=Math.floor(M*F),t.height=Math.floor(U*F),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,U,F,V){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,F,V),Q.viewport(T.copy(K).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,U,F,V){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,F,V),Q.scissor(N.copy(ne).multiplyScalar(q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){Q.setScissorTest(ie=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,U=!0,F=!0){let V=0;if(M){let O=!1;if(b!==null){const Ae=b.texture.format;O=Ae===Fl||Ae===Ol||Ae===Nl}if(O){const Ae=b.texture.type,Me=Ae===Pn||Ae===bn||Ae===ca||Ae===Xn||Ae===Bl||Ae===Dl,Ie=We.getClearColor(),Le=We.getClearAlpha(),Ve=Ie.r,De=Ie.g,Oe=Ie.b;Me?(A[0]=Ve,A[1]=De,A[2]=Oe,A[3]=Le,_.clearBufferuiv(_.COLOR,0,A)):(m[0]=Ve,m[1]=De,m[2]=Oe,m[3]=Le,_.clearBufferiv(_.COLOR,0,m))}else V|=_.COLOR_BUFFER_BIT}U&&(V|=_.DEPTH_BUFFER_BIT),F&&(V|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),be.dispose(),fe.dispose(),E.dispose(),B.dispose(),j.dispose(),Fe.dispose(),Xe.dispose(),xe.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Mt),ke.removeEventListener("sessionend",Ze),ve&&(ve.dispose(),ve=null),yt.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const M=ye.autoReset,U=ee.enabled,F=ee.autoUpdate,V=ee.needsUpdate,O=ee.type;it(),ye.autoReset=M,ee.enabled=U,ee.autoUpdate=F,ee.needsUpdate=V,ee.type=O}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const U=M.target;U.removeEventListener("dispose",he),Re(U)}function Re(M){_e(M),fe.remove(M)}function _e(M){const U=fe.get(M).programs;U!==void 0&&(U.forEach(function(F){xe.releaseProgram(F)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,F,V,O,Ae){U===null&&(U=Se);const Me=O.isMesh&&O.matrixWorld.determinant()<0,Ie=Nc(M,U,F,V,O);Q.setMaterial(V,Me);let Le=F.index,Ve=1;if(V.wireframe===!0){if(Le=$.getWireframeAttribute(F),Le===void 0)return;Ve=2}const De=F.drawRange,Oe=F.attributes.position;let rt=De.start*Ve,Bt=(De.start+De.count)*Ve;Ae!==null&&(rt=Math.max(rt,Ae.start*Ve),Bt=Math.min(Bt,(Ae.start+Ae.count)*Ve)),Le!==null?(rt=Math.max(rt,0),Bt=Math.min(Bt,Le.count)):Oe!=null&&(rt=Math.max(rt,0),Bt=Math.min(Bt,Oe.count));const ft=Bt-rt;if(ft<0||ft===1/0)return;Fe.setup(O,V,Ie,F,Le);let cn,et=Be;if(Le!==null&&(cn=te.get(Le),et=Ce,et.setIndex(cn)),O.isMesh)V.wireframe===!0?(Q.setLineWidth(V.wireframeLinewidth*Pe()),et.setMode(_.LINES)):et.setMode(_.TRIANGLES);else if(O.isLine){let He=V.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*Pe()),O.isLineSegments?et.setMode(_.LINES):O.isLineLoop?et.setMode(_.LINE_LOOP):et.setMode(_.LINE_STRIP)}else O.isPoints?et.setMode(_.POINTS):O.isSprite&&et.setMode(_.TRIANGLES);if(O.isBatchedMesh)et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)et.renderInstances(rt,ft,O.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,sr=Math.min(F.instanceCount,He);et.renderInstances(rt,ft,sr)}else et.render(rt,ft)};function Je(M,U,F){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,os(M,U,F),M.side=En,M.needsUpdate=!0,os(M,U,F),M.side=mn):os(M,U,F)}this.compile=function(M,U,F=null){F===null&&(F=M),p=be.get(F),p.init(),C.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==F&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);const V=new Set;return M.traverse(function(O){const Ae=O.material;if(Ae)if(Array.isArray(Ae))for(let Me=0;Me<Ae.length;Me++){const Ie=Ae[Me];Je(Ie,F,O),V.add(Ie)}else Je(Ae,F,O),V.add(Ae)}),C.pop(),p=null,V},this.compileAsync=function(M,U,F=null){const V=this.compile(M,U,F);return new Promise(O=>{function Ae(){if(V.forEach(function(Me){fe.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){O(M);return}setTimeout(Ae,10)}X.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ke=null;function dt(M){Ke&&Ke(M)}function Mt(){yt.stop()}function Ze(){yt.start()}const yt=new ec;yt.setAnimationLoop(dt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(M){Ke=M,ke.setAnimationLoop(M),M===null?yt.stop():yt.start()},ke.addEventListener("sessionstart",Mt),ke.addEventListener("sessionend",Ze),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(U),U=ke.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,b),p=be.get(M,C.length),p.init(),C.push(p),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(pe),de=this.localClippingEnabled,Z=Ne.init(this.clippingPlanes,de),g=me.get(M,f.length),g.init(),f.push(g),en(M,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,J),this.info.render.frame++,Z===!0&&Ne.beginShadows();const F=p.state.shadowsArray;if(ee.render(F,M,U),Z===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,M),p.setupLights(v._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let O=0,Ae=V.length;O<Ae;O++){const Me=V[O];_a(g,M,Me,Me.viewport)}}else _a(g,M,U);b!==null&&(x.updateMultisampleRenderTarget(b),x.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(v,M,U),Fe.resetDefaultState(),G=-1,S=null,C.pop(),C.length>0?p=C[C.length-1]:p=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function en(M,U,F,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){V&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);const Me=j.update(M),Ie=M.material;Ie.visible&&g.push(M,Me,Ie,F,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){const Me=j.update(M),Ie=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),we.copy(Me.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(Ie)){const Le=Me.groups;for(let Ve=0,De=Le.length;Ve<De;Ve++){const Oe=Le[Ve],rt=Ie[Oe.materialIndex];rt&&rt.visible&&g.push(M,Me,rt,F,we.z,Oe)}}else Ie.visible&&g.push(M,Me,Ie,F,we.z,null)}}const Ae=M.children;for(let Me=0,Ie=Ae.length;Me<Ie;Me++)en(Ae[Me],U,F,V)}function _a(M,U,F,V){const O=M.opaque,Ae=M.transmissive,Me=M.transparent;p.setupLightsView(F),Z===!0&&Ne.setGlobalState(v.clippingPlanes,F),Ae.length>0&&Dc(O,Ae,U,F),V&&Q.viewport(T.copy(V)),O.length>0&&as(O,U,F),Ae.length>0&&as(Ae,U,F),Me.length>0&&as(Me,U,F),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Dc(M,U,F,V){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const Ae=se.isWebGL2;ve===null&&(ve=new Kn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Ji:Pn,minFilter:Ii,samples:Ae?4:0})),v.getDrawingBufferSize(Te),Ae?ve.setSize(Te.x,Te.y):ve.setSize(ks(Te.x),ks(Te.y));const Me=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(Y),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Ie=v.toneMapping;v.toneMapping=wn,as(M,F,V),x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve);let Le=!1;for(let Ve=0,De=U.length;Ve<De;Ve++){const Oe=U[Ve],rt=Oe.object,Bt=Oe.geometry,ft=Oe.material,cn=Oe.group;if(ft.side===mn&&rt.layers.test(V.layers)){const et=ft.side;ft.side=Ut,ft.needsUpdate=!0,Ia(rt,F,V,Bt,ft,cn),ft.side=et,ft.needsUpdate=!0,Le=!0}}Le===!0&&(x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve)),v.setRenderTarget(Me),v.setClearColor(Y,R),v.toneMapping=Ie}function as(M,U,F){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,Ae=M.length;O<Ae;O++){const Me=M[O],Ie=Me.object,Le=Me.geometry,Ve=V===null?Me.material:V,De=Me.group;Ie.layers.test(F.layers)&&Ia(Ie,U,F,Le,Ve,De)}}function Ia(M,U,F,V,O,Ae){M.onBeforeRender(v,U,F,V,O,Ae),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,U,F,V,M,Ae),O.transparent===!0&&O.side===mn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,v.renderBufferDirect(F,U,V,O,M,Ae),O.side=En,O.needsUpdate=!0,v.renderBufferDirect(F,U,V,O,M,Ae),O.side=mn):v.renderBufferDirect(F,U,V,O,M,Ae),M.onAfterRender(v,U,F,V,O,Ae)}function os(M,U,F){U.isScene!==!0&&(U=Se);const V=fe.get(M),O=p.state.lights,Ae=p.state.shadowsArray,Me=O.state.version,Ie=xe.getParameters(M,O.state,Ae,U,F),Le=xe.getProgramCacheKey(Ie);let Ve=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?B:E).get(M.envMap||V.environment),Ve===void 0&&(M.addEventListener("dispose",he),Ve=new Map,V.programs=Ve);let De=Ve.get(Le);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===Me)return wa(M,Ie),De}else Ie.uniforms=xe.getUniforms(M),M.onBuild(F,Ie,v),M.onBeforeCompile(Ie,v),De=xe.acquireProgram(Ie,Le),Ve.set(Le,De),V.uniforms=Ie.uniforms;const Oe=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Ne.uniform),wa(M,Ie),V.needsLights=Fc(M),V.lightsStateVersion=Me,V.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function Ra(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Bs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function wa(M,U){const F=fe.get(M);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Nc(M,U,F,V,O){U.isScene!==!0&&(U=Se),x.resetTextureUnits();const Ae=U.fog,Me=V.isMeshStandardMaterial?U.environment:null,Ie=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:vn,Le=(V.isMeshStandardMaterial?B:E).get(V.envMap||Me),Ve=V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!F.morphAttributes.position,rt=!!F.morphAttributes.normal,Bt=!!F.morphAttributes.color;let ft=wn;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=v.toneMapping);const cn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=cn!==void 0?cn.length:0,He=fe.get(V),sr=p.state.lights;if(Z===!0&&(de===!0||M!==S)){const Ht=M===S&&V.id===G;Ne.setState(V,M,Ht)}let st=!1;V.version===He.__version?(He.needsLights&&He.lightsStateVersion!==sr.state.version||He.outputColorSpace!==Ie||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||He.envMap!==Le||V.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ne.numPlanes||He.numIntersection!==Ne.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==De||He.morphTargets!==Oe||He.morphNormals!==rt||He.morphColors!==Bt||He.toneMapping!==ft||se.isWebGL2===!0&&He.morphTargetsCount!==et)&&(st=!0):(st=!0,He.__version=V.version);let Un=He.currentProgram;st===!0&&(Un=os(V,U,O));let Pa=!1,Ni=!1,rr=!1;const gt=Un.getUniforms(),Bn=He.uniforms;if(Q.useProgram(Un.program)&&(Pa=!0,Ni=!0,rr=!0),V.id!==G&&(G=V.id,Ni=!0),Pa||S!==M){gt.setValue(_,"projectionMatrix",M.projectionMatrix),gt.setValue(_,"viewMatrix",M.matrixWorldInverse);const Ht=gt.map.cameraPosition;Ht!==void 0&&Ht.setValue(_,we.setFromMatrixPosition(M.matrixWorld)),se.logarithmicDepthBuffer&&gt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ni=!0,rr=!0)}if(O.isSkinnedMesh){gt.setOptional(_,O,"bindMatrix"),gt.setOptional(_,O,"bindMatrixInverse");const Ht=O.skeleton;Ht&&(se.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),gt.setValue(_,"boneTexture",Ht.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(gt.setOptional(_,O,"batchingTexture"),gt.setValue(_,"batchingTexture",O._matricesTexture,x));const ar=F.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&se.isWebGL2===!0)&&Qe.update(O,F,Un),(Ni||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,gt.setValue(_,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bn.envMap.value=Le,Bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ni&&(gt.setValue(_,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Oc(Bn,rr),Ae&&V.fog===!0&&ce.refreshFogUniforms(Bn,Ae),ce.refreshMaterialUniforms(Bn,V,q,z,ve),Bs.upload(_,Ra(He),Bn,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bs.upload(_,Ra(He),Bn,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(_,"center",O.center),gt.setValue(_,"modelViewMatrix",O.modelViewMatrix),gt.setValue(_,"normalMatrix",O.normalMatrix),gt.setValue(_,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ht=V.uniformsGroups;for(let or=0,zc=Ht.length;or<zc;or++)if(se.isWebGL2){const La=Ht[or];Xe.update(La,Un),Xe.bind(La,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function Oc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Fc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,U,F){fe.get(M.texture).__webglTexture=U,fe.get(M.depthTexture).__webglTexture=F;const V=fe.get(M);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=F===void 0,V.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const F=fe.get(M);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,F=0){b=M,P=U,I=F;let V=!0,O=null,Ae=!1,Me=!1;if(M){const Le=fe.get(M);Le.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(_.FRAMEBUFFER,null),V=!1):Le.__webglFramebuffer===void 0?x.setupRenderTarget(M):Le.__hasExternalTextures&&x.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);const Ve=M.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const De=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[U])?O=De[U][F]:O=De[U],Ae=!0):se.isWebGL2&&M.samples>0&&x.useMultisampledRTT(M)===!1?O=fe.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[F]:O=De,T.copy(M.viewport),N.copy(M.scissor),H=M.scissorTest}else T.copy(K).multiplyScalar(q).floor(),N.copy(ne).multiplyScalar(q).floor(),H=ie;if(Q.bindFramebuffer(_.FRAMEBUFFER,O)&&se.drawBuffers&&V&&Q.drawBuffers(M,O),Q.viewport(T),Q.scissor(N),Q.setScissorTest(H),Ae){const Le=fe.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,F)}else if(Me){const Le=fe.get(M.texture),Ve=U||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Le.__webglTexture,F||0,Ve)}G=-1},this.readRenderTargetPixels=function(M,U,F,V,O,Ae,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){Q.bindFramebuffer(_.FRAMEBUFFER,Ie);try{const Le=M.texture,Ve=Le.format,De=Le.type;if(Ve!==jt&&ge.convert(Ve)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===Ji&&(X.has("EXT_color_buffer_half_float")||se.isWebGL2&&X.has("EXT_color_buffer_float"));if(De!==Pn&&ge.convert(De)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===_n&&(se.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&F>=0&&F<=M.height-O&&_.readPixels(U,F,V,O,ge.convert(Ve),ge.convert(De),Ae)}finally{const Le=b!==null?fe.get(b).__webglFramebuffer:null;Q.bindFramebuffer(_.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(M,U,F=0){const V=Math.pow(2,-F),O=Math.floor(U.image.width*V),Ae=Math.floor(U.image.height*V);x.setTexture2D(U,0),_.copyTexSubImage2D(_.TEXTURE_2D,F,0,0,M.x,M.y,O,Ae),Q.unbindTexture()},this.copyTextureToTexture=function(M,U,F,V=0){const O=U.image.width,Ae=U.image.height,Me=ge.convert(F.format),Ie=ge.convert(F.type);x.setTexture2D(F,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,F.unpackAlignment),U.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,V,M.x,M.y,O,Ae,Me,Ie,U.image.data):U.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,V,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,V,M.x,M.y,Me,Ie,U.image),V===0&&F.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(M,U,F,V,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Le=ge.convert(V.format),Ve=ge.convert(V.type);let De;if(V.isData3DTexture)x.setTexture3D(V,0),De=_.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)x.setTexture2DArray(V,0),De=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=_.getParameter(_.UNPACK_ROW_LENGTH),rt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Bt=_.getParameter(_.UNPACK_SKIP_PIXELS),ft=_.getParameter(_.UNPACK_SKIP_ROWS),cn=_.getParameter(_.UNPACK_SKIP_IMAGES),et=F.isCompressedTexture?F.mipmaps[O]:F.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,et.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,et.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,M.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,M.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?_.texSubImage3D(De,O,U.x,U.y,U.z,Ae,Me,Ie,Le,Ve,et.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(De,O,U.x,U.y,U.z,Ae,Me,Ie,Le,et.data)):_.texSubImage3D(De,O,U.x,U.y,U.z,Ae,Me,Ie,Le,Ve,et),_.pixelStorei(_.UNPACK_ROW_LENGTH,Oe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(_.UNPACK_SKIP_ROWS,ft),_.pixelStorei(_.UNPACK_SKIP_IMAGES,cn),O===0&&V.generateMipmaps&&_.generateMipmap(De),Q.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?x.setTextureCube(M,0):M.isData3DTexture?x.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?x.setTexture2DArray(M,0):x.setTexture2D(M,0),Q.unbindTexture()},this.resetState=function(){P=0,I=0,b=null,Q.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ua?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Jn:Vl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?lt:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rm extends lc{}rm.prototype.isWebGL1Renderer=!0;class ma{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class am extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cc extends Rt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,A=(o-u)/h;return(s+A)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,s=[],r=[],o=[],a=new L,l=new at;for(let A=0;A<=e;A++){const m=A/e;s[A]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let A=1;A<=e;A++){if(r[A]=r[A-1].clone(),o[A]=o[A-1].clone(),a.crossVectors(s[A-1],s[A]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(At(s[A-1].dot(s[A]),-1,1));r[A].applyMatrix4(l.makeRotationAxis(a,m))}o[A].crossVectors(s[A],r[A])}if(t===!0){let A=Math.acos(At(r[0].dot(r[e]),-1,1));A/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(A=-A);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],A*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ga extends ln{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new le,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,A=c-this.aY;l=h*u-A*d+this.aX,c=h*d+A*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class om extends ga{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ea(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,A=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,A*=u,s(o,a,h,A)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const ws=new L,Or=new Ea,Fr=new Ea,zr=new Ea;class lm extends ln{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ws.subVectors(s[0],s[1]).add(s[0]),c=ws);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ws.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const A=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),A),g=Math.pow(d.distanceToSquared(h),A),p=Math.pow(h.distanceToSquared(u),A);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),Or.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,g,p),Fr.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,g,p),zr.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,g,p)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Fr.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),zr.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Or.calc(l),Fr.calc(l),zr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $o(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function cm(n,e){const t=1-n;return t*t*e}function um(n,e){return 2*(1-n)*n*e}function hm(n,e){return n*n*e}function Wi(n,e,t,i){return cm(n,e)+um(n,t)+hm(n,i)}function dm(n,e){const t=1-n;return t*t*t*e}function fm(n,e){const t=1-n;return 3*t*t*n*e}function pm(n,e){return 3*(1-n)*n*n*e}function Am(n,e){return n*n*n*e}function Xi(n,e,t,i,s){return dm(n,e)+fm(n,t)+pm(n,i)+Am(n,s)}class uc extends ln{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xi(e,s.x,r.x,o.x,a.x),Xi(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mm extends ln{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xi(e,s.x,r.x,o.x,a.x),Xi(e,s.y,r.y,o.y,a.y),Xi(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hc extends ln{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gm extends ln{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends ln{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wi(e,s.x,r.x,o.x),Wi(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Em extends ln{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wi(e,s.x,r.x,o.x),Wi(e,s.y,r.y,o.y),Wi(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set($o(a,l.x,c.x,u.x,d.x),$o(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:om,CatmullRomCurve3:lm,CubicBezierCurve:uc,CubicBezierCurve3:mm,EllipseCurve:ga,LineCurve:hc,LineCurve3:gm,QuadraticBezierCurve:dc,QuadraticBezierCurve3:Em,SplineCurve:fc});class vm extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ea[s.type]().fromJSON(s))}return this}}class el extends vm{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hc(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new dc(this.currentPoint.clone(),new le(e,t),new le(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new uc(this.currentPoint.clone(),new le(e,t),new le(i,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new fc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ga(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ji extends on{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],A=[];let m=0;const g=[],p=i/2;let f=0;C(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(A,2));function C(){const y=new L,P=new L;let I=0;const b=(t-e)/i;for(let G=0;G<=r;G++){const S=[],T=G/r,N=T*(t-e)+e;for(let H=0;H<=s;H++){const Y=H/s,R=Y*l+a,D=Math.sin(R),z=Math.cos(R);P.x=N*D,P.y=-T*i+p,P.z=N*z,d.push(P.x,P.y,P.z),y.set(D,b,z).normalize(),h.push(y.x,y.y,y.z),A.push(Y,1-T),S.push(m++)}g.push(S)}for(let G=0;G<s;G++)for(let S=0;S<r;S++){const T=g[S][G],N=g[S+1][G],H=g[S+1][G+1],Y=g[S][G+1];u.push(T,N,Y),u.push(N,H,Y),I+=6}c.addGroup(f,I,0),f+=I}function v(y){const P=m,I=new le,b=new L;let G=0;const S=y===!0?e:t,T=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,p*T,0),h.push(0,T,0),A.push(.5,.5),m++;const N=m;for(let H=0;H<=s;H++){const R=H/s*l+a,D=Math.cos(R),z=Math.sin(R);b.x=S*z,b.y=p*T,b.z=S*D,d.push(b.x,b.y,b.z),h.push(0,T,0),I.x=D*.5+.5,I.y=z*.5*T+.5,A.push(I.x,I.y),m++}for(let H=0;H<s;H++){const Y=P+H,R=N+H;y===!0?u.push(R,R+1,Y):u.push(R+1,R,Y),G+=3}c.addGroup(f,G,y===!0?1:2),f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends el{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new el().fromJSON(s))}return this}}const Sm={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=pc(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,h,A;if(i&&(r=Cm(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let m=t;m<s;m+=t)d=n[m],h=n[m+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);A=Math.max(c-a,u-l),A=A!==0?32767/A:0}return Yi(r,o,t,a,l,A,0),o}};function pc(n,e,t,i,s){let r,o;if(s===Nm(n,e,t,i)>0)for(r=e;r<t;r+=i)o=tl(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=tl(r,n[r],n[r+1],o);return o&&er(o,o.next)&&(es(o),o=o.next),o}function jn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(er(t,t.next)||tt(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yi(n,e,t,i,s,r,o){if(!n)return;!o&&r&&wm(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Mm(n,i,s,r):xm(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),es(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ym(jn(n),e,t),Yi(n,e,t,i,s,r,2)):o===2&&Tm(n,e,t,i,s,r):Yi(jn(n),e,t,i,s,r,1);break}}}function xm(n){const e=n.prev,t=n,i=n.next;if(tt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,A=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=A&&yi(s,a,r,l,o,c,m.x,m.y)&&tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Mm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(tt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,A=a<l?a<c?a:c:l<c?l:c,m=u<d?u<h?u:h:d<h?d:h,g=a>l?a>c?a:c:l>c?l:c,p=u>d?u>h?u:h:d>h?d:h,f=ta(A,m,e,t,i),C=ta(g,p,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=f&&y&&y.z<=C;){if(v.x>=A&&v.x<=g&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&yi(a,u,l,d,c,h,v.x,v.y)&&tt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=A&&y.x<=g&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&yi(a,u,l,d,c,h,y.x,y.y)&&tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=A&&v.x<=g&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&yi(a,u,l,d,c,h,v.x,v.y)&&tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=C;){if(y.x>=A&&y.x<=g&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&yi(a,u,l,d,c,h,y.x,y.y)&&tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ym(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!er(s,r)&&Ac(s,i,i.next,r)&&$i(s,r)&&$i(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),es(i),es(i.next),i=n=r),i=i.next}while(i!==n);return jn(i)}function Tm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Um(o,a)){let l=mc(o,a);o=jn(o,o.next),l=jn(l,l.next),Yi(o,e,t,i,s,r,0),Yi(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Cm(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=pc(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Lm(c));for(s.sort(bm),r=0;r<s.length;r++)t=_m(s[r],t);return t}function bm(n,e){return n.x-e.x}function _m(n,e){const t=Im(n,e);if(!t)return e;const i=mc(t,n);return jn(i,i.next),jn(t,t.next)}function Im(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&yi(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),$i(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Rm(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function Rm(n,e){return tt(n.prev,n,e.prev)<0&&tt(e.next,n,n.next)<0}function wm(n,e,t,i){let s=n;do s.z===0&&(s.z=ta(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Pm(s)}function Pm(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function ta(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yi(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Um(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Bm(n,e)&&($i(n,e)&&$i(e,n)&&Dm(n,e)&&(tt(n.prev,n,e.prev)||tt(n,e.prev,e))||er(n,e)&&tt(n.prev,n,n.next)>0&&tt(e.prev,e,e.next)>0)}function tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function er(n,e){return n.x===e.x&&n.y===e.y}function Ac(n,e,t,i){const s=Ls(tt(n,e,t)),r=Ls(tt(n,e,i)),o=Ls(tt(t,i,n)),a=Ls(tt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ps(n,t,e)||r===0&&Ps(n,i,e)||o===0&&Ps(t,n,i)||a===0&&Ps(t,e,i))}function Ps(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ls(n){return n>0?1:n<0?-1:0}function Bm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ac(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $i(n,e){return tt(n.prev,n,n.next)<0?tt(n,e,n.next)>=0&&tt(n,n.prev,e)>=0:tt(n,e,n.prev)<0||tt(n,n.next,e)<0}function Dm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mc(n,e){const t=new na(n.i,n.x,n.y),i=new na(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function tl(n,e,t,i){const s=new na(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function es(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function na(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Ln{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ln.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];nl(e),il(i,e);let o=e.length;t.forEach(nl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,il(i,t[l]);const a=Sm.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function nl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function il(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class va extends on{constructor(e=new $s([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,A=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:A-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Om;let v,y=!1,P,I,b,G;f&&(v=f.getSpacedPoints(u),y=!0,h=!1,P=f.computeFrenetFrames(u,!1),I=new L,b=new L,G=new L),h||(p=0,A=0,m=0,g=0);const S=a.extractPoints(c);let T=S.shape;const N=S.holes;if(!Ln.isClockWise(T)){T=T.reverse();for(let _=0,re=N.length;_<re;_++){const X=N[_];Ln.isClockWise(X)&&(N[_]=X.reverse())}}const Y=Ln.triangulateShape(T,N),R=T;for(let _=0,re=N.length;_<re;_++){const X=N[_];T=T.concat(X)}function D(_,re,X){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),_.clone().addScaledVector(re,X)}const z=T.length,q=Y.length;function W(_,re,X){let se,Q,ye;const fe=_.x-re.x,x=_.y-re.y,E=X.x-_.x,B=X.y-_.y,te=fe*fe+x*x,$=fe*B-x*E;if(Math.abs($)>Number.EPSILON){const j=Math.sqrt(te),xe=Math.sqrt(E*E+B*B),ce=re.x-x/j,me=re.y+fe/j,be=X.x-B/xe,Ne=X.y+E/xe,ee=((be-ce)*B-(Ne-me)*E)/(fe*B-x*E);se=ce+fe*ee-_.x,Q=me+x*ee-_.y;const We=se*se+Q*Q;if(We<=2)return new le(se,Q);ye=Math.sqrt(We/2)}else{let j=!1;fe>Number.EPSILON?E>Number.EPSILON&&(j=!0):fe<-Number.EPSILON?E<-Number.EPSILON&&(j=!0):Math.sign(x)===Math.sign(B)&&(j=!0),j?(se=-x,Q=fe,ye=Math.sqrt(te)):(se=fe,Q=x,ye=Math.sqrt(te/2))}return new le(se/ye,Q/ye)}const J=[];for(let _=0,re=R.length,X=re-1,se=_+1;_<re;_++,X++,se++)X===re&&(X=0),se===re&&(se=0),J[_]=W(R[_],R[X],R[se]);const K=[];let ne,ie=J.concat();for(let _=0,re=N.length;_<re;_++){const X=N[_];ne=[];for(let se=0,Q=X.length,ye=Q-1,fe=se+1;se<Q;se++,ye++,fe++)ye===Q&&(ye=0),fe===Q&&(fe=0),ne[se]=W(X[se],X[ye],X[fe]);K.push(ne),ie=ie.concat(ne)}for(let _=0;_<p;_++){const re=_/p,X=A*Math.cos(re*Math.PI/2),se=m*Math.sin(re*Math.PI/2)+g;for(let Q=0,ye=R.length;Q<ye;Q++){const fe=D(R[Q],J[Q],se);pe(fe.x,fe.y,-X)}for(let Q=0,ye=N.length;Q<ye;Q++){const fe=N[Q];ne=K[Q];for(let x=0,E=fe.length;x<E;x++){const B=D(fe[x],ne[x],se);pe(B.x,B.y,-X)}}}const k=m+g;for(let _=0;_<z;_++){const re=h?D(T[_],ie[_],k):T[_];y?(b.copy(P.normals[0]).multiplyScalar(re.x),I.copy(P.binormals[0]).multiplyScalar(re.y),G.copy(v[0]).add(b).add(I),pe(G.x,G.y,G.z)):pe(re.x,re.y,0)}for(let _=1;_<=u;_++)for(let re=0;re<z;re++){const X=h?D(T[re],ie[re],k):T[re];y?(b.copy(P.normals[_]).multiplyScalar(X.x),I.copy(P.binormals[_]).multiplyScalar(X.y),G.copy(v[_]).add(b).add(I),pe(G.x,G.y,G.z)):pe(X.x,X.y,d/u*_)}for(let _=p-1;_>=0;_--){const re=_/p,X=A*Math.cos(re*Math.PI/2),se=m*Math.sin(re*Math.PI/2)+g;for(let Q=0,ye=R.length;Q<ye;Q++){const fe=D(R[Q],J[Q],se);pe(fe.x,fe.y,d+X)}for(let Q=0,ye=N.length;Q<ye;Q++){const fe=N[Q];ne=K[Q];for(let x=0,E=fe.length;x<E;x++){const B=D(fe[x],ne[x],se);y?pe(B.x,B.y+v[u-1].y,v[u-1].x+X):pe(B.x,B.y,d+X)}}}Z(),de();function Z(){const _=s.length/3;if(h){let re=0,X=z*re;for(let se=0;se<q;se++){const Q=Y[se];Te(Q[2]+X,Q[1]+X,Q[0]+X)}re=u+p*2,X=z*re;for(let se=0;se<q;se++){const Q=Y[se];Te(Q[0]+X,Q[1]+X,Q[2]+X)}}else{for(let re=0;re<q;re++){const X=Y[re];Te(X[2],X[1],X[0])}for(let re=0;re<q;re++){const X=Y[re];Te(X[0]+z*u,X[1]+z*u,X[2]+z*u)}}i.addGroup(_,s.length/3-_,0)}function de(){const _=s.length/3;let re=0;ve(R,re),re+=R.length;for(let X=0,se=N.length;X<se;X++){const Q=N[X];ve(Q,re),re+=Q.length}i.addGroup(_,s.length/3-_,1)}function ve(_,re){let X=_.length;for(;--X>=0;){const se=X;let Q=X-1;Q<0&&(Q=_.length-1);for(let ye=0,fe=u+p*2;ye<fe;ye++){const x=z*ye,E=z*(ye+1),B=re+se+x,te=re+Q+x,$=re+Q+E,j=re+se+E;we(B,te,$,j)}}}function pe(_,re,X){l.push(_),l.push(re),l.push(X)}function Te(_,re,X){Se(_),Se(re),Se(X);const se=s.length/3,Q=C.generateTopUV(i,s,se-3,se-2,se-1);Pe(Q[0]),Pe(Q[1]),Pe(Q[2])}function we(_,re,X,se){Se(_),Se(re),Se(se),Se(re),Se(X),Se(se);const Q=s.length/3,ye=C.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);Pe(ye[0]),Pe(ye[1]),Pe(ye[3]),Pe(ye[1]),Pe(ye[2]),Pe(ye[3])}function Se(_){s.push(l[_*3+0]),s.push(l[_*3+1]),s.push(l[_*3+2])}function Pe(_){r.push(_.x),r.push(_.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Fm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ea[s.type]().fromJSON(s)),new va(i,e.options)}}const Om={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],A=e[s*3+1],m=e[s*3+2],g=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-d),new le(h,1-m),new le(g,1-f)]:[new le(a,1-l),new le(u,1-d),new le(A,1-m),new le(p,1-f)]}};function Fm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sa extends on{constructor(e=new $s([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let A=h.shape;const m=h.holes;Ln.isClockWise(A)===!1&&(A=A.reverse());for(let p=0,f=m.length;p<f;p++){const C=m[p];Ln.isClockWise(C)===!0&&(m[p]=C.reverse())}const g=Ln.triangulateShape(A,m);for(let p=0,f=m.length;p<f;p++){const C=m[p];A=A.concat(C)}for(let p=0,f=A.length;p<f;p++){const C=A[p];s.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let p=0,f=g.length;p<f;p++){const C=g[p],v=C[0]+d,y=C[1]+d,P=C[2]+d;i.push(v,y,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return zm(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Sa(i,e.curveSegments)}}function zm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Vm extends Li{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class nn extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sl extends nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const rl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class km{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const A=c[d],m=c[d+1];if(A.global&&(A.lastIndex=0),A.test(u))return m}return null}}}const Hm=new km;class xa{constructor(e){this.manager=e!==void 0?e:Hm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gm extends xa{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zi("img");function l(){u(),rl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qm extends xa{constructor(e){super(e)}load(e,t,i,s){const r=new Rt,o=new Gm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ma extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vr=new at,al=new L,ol=new L;class gc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),Vr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ll=new at,ki=new L,kr=new L;class Wm extends gc{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ki.setFromMatrixPosition(e.matrixWorld),i.position.copy(ki),kr.copy(i.position),kr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kr),i.updateMatrixWorld(),s.makeTranslation(-ki.x,-ki.y,-ki.z),ll.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class Xm extends Ma{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qm extends gc{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ya extends Ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jm extends Ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Km{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cl(){return(typeof performance>"u"?Date:performance).now()}class Zm{constructor(e,t,i=0,s=1/0){this.ray=new ql(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ia(e,this,i,t),i.sort(ul),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ia(e[s],this,i,t);return i.sort(ul),i}}function ul(n,e){return n.distance-e.distance}function ia(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)ia(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);var hl="1.3.27";function Ec(n,e,t){return Math.max(n,Math.min(e,t))}function jm(n,e,t){return(1-t)*n+t*e}function Ym(n,e,t,i){return jm(n,e,1-Math.exp(-t*i))}function $m(n,e){return(n%e+e)%e}var eg=class{constructor(){Ee(this,"isRunning",!1);Ee(this,"value",0);Ee(this,"from",0);Ee(this,"to",0);Ee(this,"currentTime",0);Ee(this,"lerp");Ee(this,"duration");Ee(this,"easing");Ee(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Ec(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=Ym(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:s,onStart:r,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function tg(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var ng=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Ee(this,"width",0);Ee(this,"height",0);Ee(this,"scrollHeight",0);Ee(this,"scrollWidth",0);Ee(this,"debouncedResize");Ee(this,"wrapperResizeObserver");Ee(this,"contentResizeObserver");Ee(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ee(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ee(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=tg(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},vc=class{constructor(){Ee(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let s=0,r=t.length;s<r;s++)(i=t[s])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const ig=100/6,Cn={passive:!1};function dl(n,e){return n===1?ig:n===2?e:1}var sg=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Ee(this,"touchStart",{x:0,y:0});Ee(this,"lastDelta",{x:0,y:0});Ee(this,"window",{width:0,height:0});Ee(this,"emitter",new vc);Ee(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Ee(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})});Ee(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Ee(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const s=dl(i,this.window.width),r=dl(i,this.window.height);e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Ee(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Cn),this.element.addEventListener("touchstart",this.onTouchStart,Cn),this.element.addEventListener("touchmove",this.onTouchMove,Cn),this.element.addEventListener("touchend",this.onTouchEnd,Cn)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Cn),this.element.removeEventListener("touchstart",this.onTouchStart,Cn),this.element.removeEventListener("touchmove",this.onTouchMove,Cn),this.element.removeEventListener("touchend",this.onTouchEnd,Cn)}};const fl=n=>Math.min(1,1.001-2**(-10*n));var rg=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:A=1,wheelMultiplier:m=1,autoResize:g=!0,prevent:p,virtualScroll:f,overscroll:C=!0,autoRaf:v=!1,anchors:y=!1,autoToggle:P=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:G=b,stopInertiaOnNavigate:S=!1,respectReducedMotion:T=!0}={}){Ee(this,"_isScrolling",!1);Ee(this,"_isStopped",!1);Ee(this,"_isLocked",!1);Ee(this,"_preventNextNativeScrollEvent",!1);Ee(this,"_resetVelocityTimeout",null);Ee(this,"_rafId",null);Ee(this,"_isDraggingSelection",!1);Ee(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ee(this,"isTouching");Ee(this,"isIos");Ee(this,"time",0);Ee(this,"userData",{});Ee(this,"lastVelocity",0);Ee(this,"velocity",0);Ee(this,"direction",0);Ee(this,"options");Ee(this,"targetScroll");Ee(this,"animatedScroll");Ee(this,"animate",new eg);Ee(this,"emitter",new vc);Ee(this,"dimensions");Ee(this,"virtualScroll");Ee(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Ee(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ee(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Ee(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(s=>t.host===s.host&&t.pathname===s.pathname&&s.hash);if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,s);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Ee(this,"onPointerDown",n=>{n.button===1&&this.reset()});Ee(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),r=i.type.includes("wheel");if(s&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>{var g,p,f,C,v;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((g=m.hasAttribute)==null?void 0:g.call(m,"data-lenis-prevent"))||u==="vertical"&&((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent-vertical"))||u==="horizontal"&&((f=m.hasAttribute)==null?void 0:f.call(m,"data-lenis-prevent-horizontal"))||s&&((C=m.hasAttribute)==null?void 0:C.call(m,"data-lenis-prevent-touch"))||r&&((v=m.hasAttribute)==null?void 0:v.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=s&&this.options.syncTouch,A=s&&i.type==="touchend";A&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:A?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ee(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ee(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=hl,window.lenis||(window.lenis={}),window.lenis.version=hl,d==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=fl:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:A,wheelMultiplier:m,autoResize:g,prevent:p,virtualScroll:f,overscroll:C,autoRaf:v,anchors:y,autoToggle:P,allowNestedScroll:I,naiveDimensions:G,stopInertiaOnNavigate:S,respectReducedMotion:T},this.dimensions=new ng(n,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new sg(t,{touchMultiplier:A,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const s=i[0],r=i[i.length-1],o=40,a=Math.hypot(t.clientX-s.left,t.clientY-s.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:o=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(s?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=n,A=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let m=null;if(typeof h=="string"?(m=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),m||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof Element&&(m=h),m){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();A-=this.isHorizontal?y.left:y.top}const g=m.getBoundingClientRect(),p=getComputedStyle(m),f=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),C=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(C.scrollPaddingLeft):Number.parseFloat(C.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(f)?0:f)-(Number.isNaN(v)?0:v)}}if(typeof h=="number"){if(h+=A,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const m=h-this.animatedScroll;m>this.limit/2?h-=this.limit:m<-this.limit/2&&(h+=this.limit)}}else h=Ec(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=fl:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(m,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),s&&(this.targetScroll=m),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const s=n._lenis;let r,o,a,l,c,u,d,h,A,m;if(i-(s.time??0)>2e3){s.time=Date.now();const I=window.getComputedStyle(n);if(s.computedStyle=I,r=["auto","overlay","scroll"].includes(I.overflowX),o=["auto","overlay","scroll"].includes(I.overflowY),c=["auto"].includes(I.overscrollBehaviorX),u=["auto"].includes(I.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=o,!(r||o))return!1;d=n.scrollWidth,h=n.scrollHeight,A=n.clientWidth,m=n.clientHeight,a=d>A,l=h>m,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=d,s.scrollHeight=h,s.clientWidth=A,s.clientHeight=m,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=u}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,d=s.scrollWidth,h=s.scrollHeight,A=s.clientWidth,m=s.clientHeight,c=s.hasOverscrollBehaviorX,u=s.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,f,C,v,y,P;if(g==="horizontal")p=Math.round(n.scrollLeft),f=d-A,C=e,v=r,y=a,P=c;else if(g==="vertical")p=Math.round(n.scrollTop),f=h-m,C=t,v=o,y=l,P=u;else return!1;return!P&&(p>=f||p<=0)?!0:(C>0?p<f:p>0)&&v&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?$m(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};const ts={ui:{ca:{roleTag:"AI BUILDER",navBio:"Bio",navDisks:"Disquets 3D",navStack:"Stack & IA",downloadCv:"Descarregar CV",statusAvailable:"DISPONIBLE IMMEDIATAMENT",locationPresential:"BARCELONA · 100% PRESENCIAL",ageYears:"24 Anys (02/07/2002)",degreeTitle:"Enginyer Informàtic + Màster IA",heroGreeting:"Oriol Ramos Abel",heroSubtitle:"Especialista en IA & AI Builder // La mà dreta executora",heroBio:"Profundament motivat per aplicar la intel·ligència artificial per crear solucions i productes reals. No només entenc els models per dins: <strong>m'apassiona experimentar, automatitzar i passar d'una idea a un prototip funcional en qüestió d'hores</strong>. Cofundador del projecte premiat <em>Clothy</em> i desenvolupador de solucions d'IA per a <em>DXC Technology</em> i la <em>Generalitat de Catalunya</em>.",passionsTitle1:"⚡ IA Aplicada & Prototipatge",passionsDesc1:"Construcció veloç de bots, agents d'IA, webs i apps interactives explotant els últims models del mercat.",passionsTitle2:"📈 Inversió & Mercats",passionsDesc2:"Interès actiu per l'anàlisi financer des de la joventut, aportant visió estratègica i gestió analítica de recursos.",passionsTitle3:"🤖 Agents & Workflows",passionsDesc3:"Arquitectures RAG neuro-simbòliques, integració d'APIs d'última generació i automatització low-code/no-code.",contactDirect:"Contactar Directament",scrollPrompt:"Fes Scroll per obrir els disquets 3D",galleryHeading:"Trajectòria Professional & Formació",gallerySubheading:'MEMÒRIA 3.5" · DISQUETS INTERACTIUS THREE.JS · SELECCIONA O ARROSSEGA',interactHint:"ARROSSEGA PER ROTAR // FES CLIC PER INTRODUIR",inspectBtn:"Inserir Disquet & Llegir",visitWebsite:"Visitar Web Oficial",modalSection1:"01 // RESUM EXECUTIU & IMPACTE REAL",modalSection2:"02 // MÈTRIQUES & RENDIMENT REAL",modalSection3:"03 // RESPONSABILITATS, REPTES & IA APLICADA",modalSection4:"04 // ARQUITECTURA & STACK TECNOLÒGIC",closeModal:"Tancar Fitxa",periodLabel:"PERÍODE PROFESSIONAL:",themeDarkBtn:"Fons Fosc",themeLightBtn:"Fons Blanc",backToDisks:"← TORNAR ALS DISQUETS 3D",specsRole:"ROL / CÀRREC",specsEntity:"CLIENT / ENTITAT",specsPeriod:"PERÍODE",specsLocation:"UBICACIÓ / MODALITAT",upNextLabel:"SEGÜENT FITXA // UP NEXT",upNextAction:"Explorar Etapa Següent"},es:{roleTag:"AI BUILDER",navBio:"Bio",navDisks:"Disquetes 3D",navStack:"Stack & IA",downloadCv:"Descargar CV",statusAvailable:"DISPONIBLE INMEDIATAMENTE",locationPresential:"BARCELONA · 100% PRESENCIAL",ageYears:"24 Años (02/07/2002)",degreeTitle:"Ingeniero Informático + Máster IA",heroGreeting:"Oriol Ramos Abel",heroSubtitle:"Especialista en IA & AI Builder // La mano derecha ejecutora",heroBio:"Profundamente motivado por aplicar la inteligencia artificial para crear soluciones y productos reales. No solo entiendo los modelos por dentro: <strong>me apasiona experimentar, automatizar y pasar de una idea a un prototipo funcional en cuestión de horas</strong>. Co-fundador del proyecto premiado <em>Clothy</em> y desarrollador de soluciones de IA para <em>DXC Technology</em> y la <em>Generalitat de Catalunya</em>.",passionsTitle1:"⚡ IA Aplicada & Prototipado",passionsDesc1:"Construcción veloz de bots, agentes de IA, webs y apps interactivas explotando los últimos modelos del mercado.",passionsTitle2:"📈 Inversión & Mercados",passionsDesc2:"Interés activo por el análisis financiero desde la juventud, aportando visión estratégica y gestión analítica de recursos.",passionsTitle3:"🤖 Agentes & Workflows",passionsDesc3:"Arquitecturas RAG neuro-simbólicas, integración de APIs de última generación y automatización low-code/no-code.",contactDirect:"Contactar Directamente",scrollPrompt:"Haz Scroll para abrir los disquetes 3D",galleryHeading:"Trayectoria Profesional & Formación",gallerySubheading:'MEMORIA 3.5" · DISQUETES INTERACTIVOS THREE.JS · SELECCIONA O ARRASTRA',interactHint:"ARRASTRA PARA ROTAR // HAZ CLIC PARA INTRODUCIR",inspectBtn:"Insertar Disquete & Leer",visitWebsite:"Visitar Web Oficial",modalSection1:"01 // RESUMEN EJECUTIVO & IMPACTO REAL",modalSection2:"02 // MÉTRICAS & RENDIMIENTO REAL",modalSection3:"03 // RESPONSABILIDADES, RETOS & IA APLICADA",modalSection4:"04 // ARQUITECTURA & STACK TECNOLÓGICO",closeModal:"Cerrar Ficha",periodLabel:"PERIODO PROFESIONAL:",themeDarkBtn:"Fondo Oscuro",themeLightBtn:"Fondo Blanco",backToDisks:"← VOLVER A LOS DISQUETES 3D",specsRole:"ROL / PUESTO",specsEntity:"CLIENTE / ENTIDAD",specsPeriod:"PERIODO",specsLocation:"UBICACIÓN / MODALIDAD",upNextLabel:"SIGUIENTE FICHA // UP NEXT",upNextAction:"Explorar Siguiente Etapa"},en:{roleTag:"AI BUILDER",navBio:"Bio",navDisks:"3D Disks",navStack:"Stack & AI",downloadCv:"Download CV",statusAvailable:"AVAILABLE IMMEDIATELY",locationPresential:"BARCELONA · 100% IN-PERSON",ageYears:"24 Years (02/07/2002)",degreeTitle:"Computer Engineer + MSc in AI",heroGreeting:"Oriol Ramos Abel",heroSubtitle:"AI Specialist & AI Builder // The Executive Right Hand",heroBio:"Deeply driven to apply artificial intelligence to create real-world solutions and products. Beyond understanding models fundamentally: <strong>I love experimenting, automating, and taking an idea to a functional prototype in hours</strong>. Co-founder of the award-winning <em>Clothy</em> platform and builder of high-speed AI systems for <em>DXC Technology</em> and the <em>Government of Catalonia</em>.",passionsTitle1:"⚡ Applied AI & Prototyping",passionsDesc1:"Fast-paced creation of AI bots, agents, webs, and interactive apps leveraging state-of-the-art foundation models.",passionsTitle2:"📈 Investment & Markets",passionsDesc2:"Active interest in quantitative financial analysis since early youth, bringing strategic mindset and risk discipline.",passionsTitle3:"🤖 Autonomous Agents & Workflows",passionsDesc3:"Neuro-symbolic RAG architectures, frontier LLM API integrations, and robust low-code/no-code workflow automation.",contactDirect:"Contact Directly",scrollPrompt:"Scroll to explore 3D Disks",galleryHeading:"Professional Journey & Education",gallerySubheading:'3.5" STORAGE · INTERACTIVE THREE.JS DISKS · SELECT OR DRAG',interactHint:"DRAG TO ROTATE // CLICK TO INSERT",inspectBtn:"Insert Floppy & Read",visitWebsite:"Visit Official Website",modalSection1:"01 // EXECUTIVE SUMMARY & REAL IMPACT",modalSection2:"02 // METRICS & BENCHMARK PERFORMANCE",modalSection3:"03 // KEY RESPONSIBILITIES & APPLIED AI",modalSection4:"04 // ARCHITECTURE & TECH STACK",closeModal:"Close Sheet",periodLabel:"PROFESSIONAL TIMELINE:",themeDarkBtn:"Dark Mode",themeLightBtn:"Light Mode",backToDisks:"← BACK TO 3D DISKS",specsRole:"ROLE / POSITION",specsEntity:"CLIENT / ENTITY",specsPeriod:"TIMELINE",specsLocation:"LOCATION / MODE",upNextLabel:"NEXT STAGE // UP NEXT",upNextAction:"Explore Next Stage"}},disks:[{id:"dxc",diskNumber:"01",brandLogo:"/brands/dxc.png",websiteUrl:"https://www.dxc.com/",color:"#281b3d",labelColor:"#ffffff",accentColor:"#f97316",logoBg:"#ffffff",shutterColor:"#e2e8f0",content:{ca:{title:"DXC TECHNOLOGY",subtitle:"AI Business Developer & Generative AI Specialist",period:"2025 — Present",badge:"SECTOR PÚBLIC · GENERALITAT DE CATALUNYA",description:"Enginyer de Software i IA especialitzat en MLOps, IA Generativa i NLP en entorns d'alta criticitat per al sector públic. Resolució de problemes complexos transformant dades desestructurades en coneixement accionable.",highlights:["Motor Cognitiu IASocial (Generalitat de Catalunya): Asistència semàntica amb arquitectura RAG neuro-simbòlica. Orquestrador en Java (Spring Boot) i motor d'inferència en Python (LlamaIndex, PyTorch) mapejat a l'ontologia mèdico-social SNOMED CT.","Reducció d'un 60% dels falsos positius mitjançant un reranker híbrid propietari.","Optimització extrema de la infraestructura amb quantització estàtica ONNX (INT8): temps d'inferència de 0.83 ms i més de 1.200 peticions/segon exclusivament en CPU.","Sistema auditable complet amb anonimització de dades segons RGPD utilitzant LLMs.","Sistema de Geocodificació i Normalització Territorial (PoC validada per la Generalitat): cercador tipus Google Maps tolerant a errades tipogràfiques combinant deep parsers i expressions regulars, amb integració bidireccional amb OpenStreetMap."],metrics:[{label:"Falsos positius",value:"-60%"},{label:"Temps d'inferència CPU",value:"0.83 ms"},{label:"Throughput màxim",value:">1.200 req/s"},{label:"Compliment RGPD",value:"100% Auditable"}]},es:{title:"DXC TECHNOLOGY",subtitle:"AI Business Developer & Especialista en IA Generativa",period:"2025 — Presente",badge:"SECTOR PÚBLICO · GENERALITAT DE CATALUNYA",description:"Ingeniero de Software e IA especializado en MLOps, IA Generativa y NLP en entornos de alta criticidad para el sector público. Resolución de problemas complejos transformando datos desestructurados en conocimiento de alto valor.",highlights:["Motor Cognitivo IASocial (Generalitat de Catalunya): Asistente semántico con arquitectura RAG neuro-simbólica. Desarrollo end-to-end con orquestador en Java (Spring Boot) y motor de inferencia en Python (LlamaIndex, PyTorch) mapeado a la ontología SNOMED CT.","Reducción de un 60% en falsos positivos mediante un reranker híbrido propietario.","Optimización extrema de infraestructura con cuantización estática ONNX (INT8), logrando 0.83 ms y más de 1200 peticiones/segundo en CPU.","Sistema auditable con anonimización de datos (RGPD) mediante LLMs.","Sistema de Geocodificación y Normalización Territorial (PoC validada por la Generalitat): buscador tipo Google Maps tolerante a erratas combinando deep parser y regex, con validación bidireccional con OpenStreetMap."],metrics:[{label:"Falsos positivos",value:"-60%"},{label:"Tiempo inferencia CPU",value:"0.83 ms"},{label:"Throughput máximo",value:">1.200 req/s"},{label:"Cumplimiento RGPD",value:"100% Auditable"}]},en:{title:"DXC TECHNOLOGY",subtitle:"AI Business Developer & Generative AI Specialist",period:"2025 — Present",badge:"PUBLIC SECTOR · GOVERNMENT OF CATALONIA",description:"Software and AI Engineer specialized in MLOps, Generative AI, and NLP for mission-critical public administration environments. Transforming complex unstructured data into high-value actionable insight.",highlights:["IASocial Cognitive Engine (Government of Catalonia): Semantic assistant featuring a neuro-symbolic RAG architecture. End-to-end orchestration with Java Spring Boot and inference in Python (LlamaIndex, PyTorch) mapped to the SNOMED CT ontology.","60% reduction in false positives through a proprietary hybrid reranker.","Extreme infrastructure optimization with ONNX static quantization (INT8), reaching 0.83 ms inference and >1,200 req/s entirely on CPU.","Fully auditable pipeline with GDPR-compliant data anonymization powered by LLMs.","Territorial Geocoding & Normalization System (validated PoC): Google Maps-like engine with high typo tolerance combining deep parsers and regex with bi-directional OpenStreetMap precision."],metrics:[{label:"False Positives",value:"-60%"},{label:"CPU Inference Latency",value:"0.83 ms"},{label:"Max Throughput",value:">1,200 req/s"},{label:"GDPR Compliance",value:"100% Audited"}]}},stack:["Python","Java Spring Boot","LlamaIndex","ONNX INT8","PyTorch","SNOMED CT","OpenStreetMap","Docker","RGPD Guardrails"]},{id:"clothy",diskNumber:"02",brandLogo:"/brands/clothy.png",websiteUrl:"https://www.clothy.es/",color:"#1c1815",labelColor:"#ffffff",accentColor:"#f59e0b",logoBg:"#ffffff",shutterColor:"#e5e7eb",content:{ca:{title:"CLOTHY",subtitle:"Ecosistema Intel·ligent de Moda & AI Leader",period:"2025 — 2026",badge:"PREMIAT · MILLOR TFG EMPRENEDORIA & MILLOR PÒSTER",description:"Plataforma integral de Fashion Tech impulsada per IA guardonada amb el Premi DXC TFG-GEINF 2025 i el Premi Patronat (31a Edició). Dissenyada i desplegada d'extrem a extrem com a cofundador i AI Leader.",highlights:["Cerca multimodal avançada combinant text, filtres de preferències i cerca visual mitjançant embeddings i PostgreSQL pgvector.","Integració de Probador Virtual (Virtual Try-On) i assistent conversacional d'estil en temps real.","Armari digital intel·ligent amb recomanacions automatitzades segons climatologia i estil d'usuari.","Ingesta massiva i automatitzada de més d'1 milió de productes mitjançant scrapers i xarxes d'afiliats de més de 500 marques.","Arquitectura monorepo moderna (Turborepo) amb Next.js per a web, React Native + Expo per a mòbil, i backend d'alta velocitat en Python FastAPI.","Desplegament d'alta disponibilitat en AWS (EC2, RDS, S3, CloudFront, SES) i Google Cloud Platform per a models d'IA."],metrics:[{label:"Productes indexats",value:"+1.000.000"},{label:"Marques integrades",value:"+500"},{label:"Guardons obtinguts",value:"2 Premis Oficials"},{label:"Latència cerca vectorial",value:"< 45ms"}]},es:{title:"CLOTHY",subtitle:"Ecosistema Inteligente de Moda & AI Leader",period:"2025 — 2026",badge:"PREMIADO · MEJOR TFG EMPRENDIMIENTO & MEJOR PÓSTER",description:"Plataforma integral de Fashion Tech impulsada por IA galardonada con el Premio DXC TFG-GEINF 2025 y el Premio Patronat (31ª Edición). Diseñada y desplegada end-to-end como cofundador y AI Leader.",highlights:["Búsqueda multimodal avanzada combinando texto, preferencias y búsqueda visual por embeddings mediante pgvector en PostgreSQL.","Probador virtual (Virtual Try-On) y asistente conversacional de estilo en tiempo real.","Armario digital inteligente con recomendaciones meteorológicas y de tendencias automatizadas.","Ingesta masiva y automatizada de más de 1 millón de productos mediante afiliados de más de 500 marcas.","Arquitectura en monorepo (Turborepo) con Next.js en web, React Native + Expo en móvil, y API robusta en Python FastAPI.","Despliegue de alta disponibilidad en AWS (EC2, RDS, S3, CloudFront, SES) y GCP para inferencia de modelos."],metrics:[{label:"Productos indexados",value:"+1.000.000"},{label:"Marcas integradas",value:"+500"},{label:"Premios obtenidos",value:"2 Galardones"},{label:"Latencia vectorial",value:"< 45ms"}]},en:{title:"CLOTHY",subtitle:"Intelligent Fashion Tech Ecosystem & AI Leader",period:"2025 — 2026",badge:"AWARDED · BEST ENTREPRENEURSHIP THESIS & BEST POSTER",description:"End-to-end AI-driven Fashion Tech ecosystem awarded Best Bachelor Thesis in Entrepreneurship by DXC Technology and 31st Patronat Awards. Built and scaled as co-founder and AI Lead.",highlights:["Advanced multimodal search integrating natural text, preference filters, and visual similarity via pgvector embeddings.","Integrated AI Virtual Try-On and real-time conversational personal stylist assistant.","Smart digital closet with automated climate-aware and lifestyle outfit recommendations.","Automated scraping and pipeline ingestion of over 1 million fashion products from 500+ global brands.","Turborepo monorepo architecture with Next.js web app, React Native + Expo mobile client, and Python FastAPI backend.","High-availability cloud deployment on AWS (EC2, RDS, S3, CloudFront) and GCP AI inference clusters."],metrics:[{label:"Indexed Products",value:"+1,000,000"},{label:"Brand Integrations",value:"+500"},{label:"Official Awards",value:"2 Major Wins"},{label:"Vector Search Latency",value:"< 45ms"}]}},stack:["Next.js","React Native","Expo","FastAPI","PostgreSQL","pgvector","AWS","GCP","PyTorch","Tailwind CSS"]},{id:"unir",diskNumber:"03",brandLogo:"/brands/unir.png",websiteUrl:"https://estudiar.unir.net/landings/es_es/ing-pro-mas-ofi-noa-master-universitario-inteligencia-artificial/",color:"#08233e",labelColor:"#ffffff",accentColor:"#0284c7",logoBg:"#0284c7",shutterColor:"#cbd5e1",content:{ca:{title:"UNIR — MÀSTER EN IA",subtitle:"Màster Universitari Oficial en Intel·ligència Artificial (MUIA)",period:"2025 — 2026",badge:"ESPECIALITZACIÓ AVANÇADA EN IA",description:"Especialització oficial avançada en aprenentatge profund, arquitectures neuronals, MLOps, models fundacionals i visió artificial. Enfocament pràctic orientat a la recerca aplicada i enginyeria de producció.",highlights:["Arquitectures de Deep Learning d'última generació: xarxes neuronals recurrents (RNNs, LSTMs), Transformers, atenció bidireccional i models de difusió generatius.","Processament del Llenguatge Natural (NLP): representació semàntica mitjançant word vectors, embeddings densos, fine-tuning d'arquitectures LLM i RAG híbrid.","Reinforcement Learning & Presa de Decisions: algoritmes Q-Learning, Deep Q-Networks (DQN) i Deep Reinforcement Learning (DRL) per a entorns estocàstics.","Visió per Computador: segmentació semàntica, detecció d'objectes, reconeixement de patrons i models multimodals visió-llenguatge.","Producció i MLOps: desplegament de pipelines d'aprenentatge automàtic a gran escala, monitorització de deriva de dades (data drift) i optimització de latència."],metrics:[{label:"Nivell Formatiu",value:"Màster Oficial"},{label:"Especialització",value:"GenAI & NLP"},{label:"Crèdits ECTS",value:"60 ECTS"},{label:"Aplicació Real",value:"100% Pràctic"}]},es:{title:"UNIR — MÁSTER EN IA",subtitle:"Máster Universitario Oficial en Inteligencia Artificial (MUIA)",period:"2025 — 2026",badge:"ESPECIALIZACIÓN AVANZADA EN IA",description:"Especialización oficial avanzada en aprendizaje profundo, arquitecturas neuronales, MLOps, modelos fundacionales y visión artificial. Enfoque riguroso aplicado a la industria y producción.",highlights:["Arquitecturas de Deep Learning de frontera: redes neuronales profundas, Transformers, mecanismos de atención y modelos generativos.","Procesamiento del Lenguaje Natural (NLP): embeddings densos, LLMs, fine-tuning y arquitecturas RAG neuro-simbólicas.","Reinforcement Learning & Planificación: algoritmos de Q-Learning, DQN y Deep Reinforcement Learning (DRL).","Visión por Computador: detección, segmentación semántica y modelos multimodales.","Producción y MLOps: empaquetado y despliegue escalable de pipelines de inferencia con baja latencia."],metrics:[{label:"Nivel Formativo",value:"Máster Oficial"},{label:"Especialidad",value:"GenAI & NLP"},{label:"Créditos ECTS",value:"60 ECTS"},{label:"Aplicación",value:"100% Práctica"}]},en:{title:"UNIR — MASTER IN AI",subtitle:"Official Master's Degree in Artificial Intelligence (MUIA)",period:"2025 — 2026",badge:"ADVANCED AI POSTGRADUATE SPECIALIZATION",description:"Advanced official specialization in Deep Learning, neural architectures, foundational models, NLP, and computer vision with an emphasis on production-grade engineering and applied research.",highlights:["Frontier Deep Learning: Transformers, attention mechanisms, recurrent networks, and diffusion/generative models.","Natural Language Processing (NLP): Semantic embeddings, LLM fine-tuning, vector databases, and hybrid RAG pipelines.","Deep Reinforcement Learning (DRL): Q-learning, deep Q-networks, and policy-gradient systems for autonomous decision-making.","Computer Vision: Object detection, semantic segmentation, and multimodal vision-language architectures.","MLOps in Production: Scalable model serving, hardware acceleration, and inference optimization."],metrics:[{label:"Degree Level",value:"Official MSc"},{label:"Specialization",value:"GenAI & NLP"},{label:"ECTS Credits",value:"60 ECTS"},{label:"Orientation",value:"Applied & Prod"}]}},stack:["Deep Learning","PyTorch","Transformers","NLP","Computer Vision","DRL","MLOps","ONNX","Hugging Face"]},{id:"dset",diskNumber:"04",brandLogo:"/brands/dset.png",websiteUrl:"https://dset.solutions/ca/",color:"#0f2c29",labelColor:"#ffffff",accentColor:"#f59e0b",logoBg:"#ffffff",shutterColor:"#94a3b8",content:{ca:{title:"DSET SOLUTIONS",subtitle:"Full-Stack Developer & IoT Telemetry Specialist",period:"2024 — 2025",badge:"IOT & MONITORITZACIÓ DE SUBMINISTRAMENTS CRÍTICS",description:"Desenvolupament integral d'una plataforma industrial IoT per a la monitorització i telemetria en temps real de subministraments crítics d'energia (aigua, gas i electricitat).",highlights:["Creació d'una nova interfície d'usuari (UX/UI) intuïtiva per a la gestió de parcs de dispositius, configuració d'alarmes i panell de rols corporatius.","Disseny de la capa backend i model de dades en PostgreSQL i Java per al processament resilient i segur de fluxos massius de telemetria.","Integració d'ingesta de dades en Python mitjançant xarxes de comunicació de baixa potència i llarg abast LoRaWAN.","Creació d'un sistema proactiu de detecció precoç d'anomalies de consum que va reduir dràsticament fuites i pèrdues de subministrament."],metrics:[{label:"Sensors connectats",value:"+10.000"},{label:"Protocol de xarxa",value:"LoRaWAN"},{label:"Disponibilitat",value:"99.9%"},{label:"Temps detecció fuita",value:"Temps Real"}]},es:{title:"DSET SOLUTIONS",subtitle:"Full-Stack Developer & Especialista en Telemetría IoT",period:"2024 — 2025",badge:"IOT & SUMINISTROS CRÍTICOS (AGUA, GAS, LUZ)",description:"Desarrollo integral de una plataforma IoT para la monitorización de suministros críticos (agua, gas, electricidad) a escala industrial.",highlights:["Creación de una nueva interfaz de usuario moderna (UX/UI), panel de gestión de dispositivos, configuración de alarmas y roles.","Diseño de arquitectura backend en Java y PostgreSQL para el procesamiento masivo y seguro de datos telemétricos.","Integración de ingesta IoT en Python con protocolo LoRaWAN desde dispositivos físicos remotos.","Creación de un sistema de alertas proactivo para detectar anomalías de consumo y fugas en tiempo real."],metrics:[{label:"Sensores remotos",value:"+10.000"},{label:"Protocolo",value:"LoRaWAN"},{label:"Disponibilidad",value:"99.9%"},{label:"Detección anomalías",value:"Tiempo Real"}]},en:{title:"DSET SOLUTIONS",subtitle:"Full-Stack Developer & IoT Telemetry Specialist",period:"2024 — 2025",badge:"IOT & CRITICAL ENERGY TELEMETRY",description:"End-to-end development of an industrial IoT platform for real-time telemetry and monitoring of critical municipal supplies (water, gas, electricity).",highlights:["Engineered a brand-new user interface (UX/UI), hardware device manager, custom alarm configuration, and role-based access control.","Architected high-throughput backend services in Java and PostgreSQL for secure telemetry data ingestion.","Implemented Python ingestion microservices for low-power long-range LoRaWAN hardware sensor gateways.","Created an automated anomaly detection system capable of flagging utility leaks proactively in real time."],metrics:[{label:"Connected Sensors",value:"+10,000"},{label:"Network Protocol",value:"LoRaWAN"},{label:"System Uptime",value:"99.9%"},{label:"Anomaly Response",value:"Real-Time"}]}},stack:["JavaScript","HTML5/CSS3","Java","Python","LoRaWAN","PostgreSQL","IoT Telemetry","Real-Time Alerts"]},{id:"udg",diskNumber:"05",brandLogo:"/brands/udg.png",websiteUrl:"https://www.udg.edu/ca/estudia/Oferta-formativa/Graus/Fitxes?IDE=1257&ID=3105G0710",color:"#081330",labelColor:"#ffffff",accentColor:"#1d4ed8",logoBg:"#051944",shutterColor:"#e2e8f0",content:{ca:{title:"UNIVERSITAT DE GIRONA",subtitle:"Grau en Enginyeria Informàtica (GEINF)",period:"2020 — 2024",badge:"BASE TÈCNICA SÒLIDA · 2 PREMIS TFG",description:"Graduat en Enginyeria Informàtica per l'Escola Politècnica Superior de la Universitat de Girona. Formació d'elit en algorísmia, arquitectura de computadors, sistemes distribuïts i enginyeria de programari.",highlights:["Fonaments complets de Computació: algorísmia avançada, estructures de dades complexes, sistemes operatius, disseny de compiladors i concurrència.","Enginyeria de Programari i Arquitectura: patrons de disseny, microserveis, bases de dades relacionals i NoSQL, metodologies àgils Scrum.","Treball de Final de Grau (TFG) guardonat amb dues màximes distincions: Premi DXC al Millor TFG d'Emprenedoria i Premi Patronat EPS (31a Edició).","Projectes pràctics d'alt rendiment en C++, Java, Python i sistemes encastats IoT."],metrics:[{label:"Grau Oficial",value:"GEINF 240 ECTS"},{label:"Premis Rebuts",value:"2 Guardons"},{label:"Escola",value:"EPS Girona"},{label:"Competència",value:"Enginyer Titulat"}]},es:{title:"UNIVERSIDAD DE GIRONA",subtitle:"Grado en Ingeniería Informática (GEINF)",period:"2020 — 2024",badge:"BASE TÉCNICA SÓLIDA · 2 PREMIOS TFG",description:"Graduado en Ingeniería Informática por la Escuela Politécnica Superior de la UdG. Formación sólida en algoritmia, sistemas distribuidos, bases de datos e ingeniería de software.",highlights:["Fundamentos sólidos de computación, estructuras de datos, sistemas operativos y arquitectura de computadores.","Ingeniería del software, microservicios, bases de datos y arquitecturas escalables.","TFG galardonado con el Premio DXC al Mejor TFG de Emprendimiento y Premio Patronat EPS 31ª edición.","Proyectos prácticos de desarrollo de software integral y sistemas embebidos."],metrics:[{label:"Grado Oficial",value:"GEINF 240 ECTS"},{label:"Premios Recibidos",value:"2 Galardones"},{label:"Escuela",value:"EPS Girona"},{label:"Titulación",value:"Ingeniero"}]},en:{title:"UNIVERSITY OF GIRONA",subtitle:"BSc in Computer Science & Engineering (GEINF)",period:"2020 — 2024",badge:"ENGINEERING FOUNDATION · 2 THESIS AWARDS",description:"Bachelor of Science in Computer Engineering from the Polytechnic School of UdG. Rigorous background in algorithms, operating systems, distributed architectures, and scalable software design.",highlights:["Core Computer Science: Advanced data structures, operating systems, concurrency, networks, and distributed systems.","Software Architecture: Enterprise patterns, relational and NoSQL databases, RESTful APIs, and agile Scrum execution.","Bachelor Thesis awarded dual recognition: DXC Technology Best Entrepreneurship Thesis Award & 31st Patronat Award.","Hands-on development in C++, Java, Python, and embedded hardware."],metrics:[{label:"Degree Level",value:"BSc (240 ECTS)"},{label:"Awards Won",value:"2 Official Awards"},{label:"Faculty",value:"Polytechnic School"},{label:"Qualification",value:"Certified Engineer"}]}},stack:["Computer Science","Algorithms","Software Architecture","Distributed Systems","PostgreSQL","Java","Python","C++"]}]},Sc={dxc:"data:image/png;base64,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",clothy:"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAFKAUEDASIAAhEBAxEB/8QAHgABAAAGAwEAAAAAAAAAAAAAAAMEBQcICQECBgr/xABREAABAgUBBQUEBQcJBQcFAQABAgMABAUGEQcIEiExQQkTIlFhFDJxgRUjM0KhFkNSYnKCkRckNERTc4OxwSVjoqOzkpOywtHh8GSFpLTD8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/ANqcIQgEIQgEIQgEIQgEIQgEIQgEIQgEI4PKLfaga+aNaVJWm/tSaHSn0Jz7IuaDk0fgw3lw/JMBcKEYe3d2kdgSjjktptpdel4OIBxMmVFNlD694/4/+XGO+ofaja2IW63R6NpnZaEZG5UKo5U5seXgaxg+hRAbSoRo7uztFte64Fic2mpuVSvj3Nu220wE/BxxKVfjFr63taXjXFuqq2u2s1Q70bqgmtmWbV+4HSBAfQpCPm3e1secXhm5tSJlxZ9566XQo5+GYm3Lwv8AkJUVdzVK67VKeLLEzcs0uaV5EMo8YHqcCA+j2EfPFZe3PtUacVhl61dc7pq7SHUlMtV3zPMvnPuFp4rODy4YMb6tILmuK9NLbSu67qMaTWqzRpOfqEjuKR7NMONJUtvdX4hgnkeMB7OEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCODyil1+4KJa9ImK7cVWlqbT5VO+/MzTobQ2PUnh8osHe20rXqnIzcxpxTJai0KVbLkxdty/zWXbb6ussuYO5jB7x7uxx4JXAXzuq8bWsalOVy8Lip9GkW+b84+lpBPkMnifQcTGPV87ZTzjMy3pBp/NVZlhJccr9fUaXSmUf2njw6tHXOEA459YwA1x22dMqNcD05awntWbtb3kCvV11xFLll8ODDIwtY58Gwy3yxviMQNUtfNV9YphTl8XZMzMoFbzVOY+okmeJ9xhGEDnjJBPrAZxa37cwqBmZC9de6xcCsqSugWE2JCQTn7rk3nfcR04OOeojE6vbUk40t1OnFhUG2gsk+2PNmfn1eZU87kZPogRYjBPOG6YkHprj1Ivu71rVcl3VSoJcOS09MqLQ+DfuAegEeZJJJKjk+sCMGJ2TkZifUQyAltvitxZ3UtjzJ5D/MxRIjnFeRb6ZRtE3cM19HtKAUhkI35h0ejfDA9VEfOItPcDUyzTLZkHp+pzK0tMvIaKnFrJwEsNc94nGDxVnkBGd+y/2Smo+pJlL12hajM2jRJgh8UpvC6tNoPH6zORL59cr48hAYUWjTrsvOsMWhpHZ1QnKrN4bbRT2VzM+95neA+rHnuBI8yYzh0I7HLU67xLV7Xe7WLOknCHF0uR3ZuoqSePjX9k0fm4R1EbRdHNANIdA7fFt6VWRT6GwUAPTDbe9NTRH3nnj9Y4ficDpiLjwGPOiewjsy6DmVn7P05lJ2tS2FIrNZHts4F/ppK/C2f2AnEZCAY4f+0doQCODyjmODygJWdnZSmyr89UJtqVlpdBcefeWENtpAyVKJ4AAdTFBtXUrTq+1Lbsu+7fry2vtEU2pszCkYPUNqJEef2hNMZ/WTRm6dOKPX3aJUaxJKTJTzasdzMoUHWt7zbK0ALHVBMaRr0qNCt66XbI1ZteqaZatWqr2F6v0B3uGpxxGe7edQjHEgoO+2fGMEFPBAD6AoRpr0e7RPam0RZblr79j1ctCXOFzSncVCXaHUPBO/wHV5Cx+sI2LbOW2voNtNyjTdjXQmTr+4C9QKopLE8g48W6jJDqR+k2T64gL/AEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIR1V7p444c/KA5PKLZ6j600ezJ38l6JJLuC7XGw43SZdzdEug8npp3BEu38crV9xKo8RqZrnUKsqoW/pnV5em02QS6Kvd75T7PKBvi6Jbf8CynCt99WWm90gBxQKRrT2htu+QoUtPad7My32ETJWKpd8xvKnp51eQtTCl+MEj+sqPeEn6sI3UrgMg9pzassXSmpe3arVT8vr+YKHqfacmsM0+j74yFOA7waVjjvOb7ysoIAQcp1w627Smrm0BUhM31cBFPZO9KUeRBZkJbmQUtA8VeJQ7xZUvHDOBFuXvaahMuTs6+4668ouLccUSVknJJJJ4k+ccloJG6EwEgGEjirOYFv5ROlvEQVoTnzgJYozmOhGDEZaceLyiGCgK8Y3vJJ5QEZiXQhImZwlLJzupHNfw8vjF3tn3Zq1f2prpRaWmdv/zGVUlU7UXstyFOQeanXOOVEck8Vnpwi7mxL2ft9bU1TYvS7lTVv6dSjwD9QKMTFTIOSzKAjl0Lp8Kem8eA3Z6aaX2Jo7Z8jYem9sydDotPTutMS6cFZ6uOK95xw8ytRJPUwFitk3YC0c2XJOXrLEmi5b3LY7+4Z9gbzSjzRLN8QwnpnJWep6RlJCEAhCEAhCEAhCEBweUYW9o3sTSm0lYy79santo1FtlhSpbcGDVpQcTKr/XHEtnzyn73DNOODygPmIodwViizxkVzEzKzcssp4qUlxCwcFJ6pIwc/OPRtz1JrU61UXph2g11pzvZes076rddHJbqW8cc/fbwRnODGbPawbHJsyuL2m9OaYG6PWJlKLnlpdOBJzyz4ZsAckOnAX5OYP34wBkHfbZRMy0rChwdT+iv/wB//nKA2B7Nvagam6OzMhYm0/LTF12y5hqSueUw9NttjhkkcJpA65w6OuTwjadYGoVl6o2xJXnp/cclXaJUEBcvNyju+k+iuqVjkUniOoEfOTSa7MSLblPm5Zqfp0x/SJKZBLTvrzBQR0UCCOkXQ0T1r1Z2Za85qHoHcE1M0QkO1y251ZdaW2OffNjAWME4ebAWjrjqH0HwjHnZM20NLNq+2UzNtzSaTdEk2DVbdmnAZiXV1caP51onksfAgGMhoBCEIBCEIBCEIBCEIBCEIBCEIBCEcKOEk+UBCfeaYaW++6lpttJUtaiAEgcySeQjFbWHXSUu+jVebauRFs6XUdtblVrynS07V0DCd1ojxolishIKPrHyQhvAOV07XPXCjX6xWZE3CxS9K7aSpy4a0pZDdUKTgsoI4rY3/q91OS+vwDwe/qo2p9qqt6+VpFCoLb9Iseju/wCyqXkBTqgN32qZ3OC3ik4CfcaQdxOSXFrCpbTm2BXdX0r0/sFmYt6wJMobZkEYbdng2RuuTIRwAyAUMp8DeB75AIx4l5M43zzVzJjtKyqUeJWc+Z84nkI+EBALeBupTEIt84nS38IhlHHgmAkloyIgqb4ekTy2+e7xPl0iSnXPZ0jgd9XuA+XmYCQmVfWbgjO7s+Ozxn9epyU1e1ekX5LTyVd3pKTKS27XXEnp1EuCMFXNR4DqRRuzt2EZ/aPuVGpmo1PeZ03o0zxC8pNamUH+jtkfmwftFfujiTjd5S6fIUeQlaTSpJiTkpNpDEvLsNhDbLaBgIQkcAABjA5QHSj0imUCmSlGolOl6fISTSGJaVl2w20y2kYCEpHAAeQipQhAIQhAIQhAIQhAIQhAI4PKOYQFAvO0Le1Btaq2TdlOan6NWpVySnZZwcHWnAQoeh6gx89O0fobXtlfXetaaV7vX6X3nf06cWCBOU5w5Ze/aHJX66FiPo0IyDGE/ak7MKdcND3NQbdkO9u3T5tyfZ3E5XNU/nMs+uAO9H92R1gNOUxKdw4UJV4V+4T1HMRNUmfnaTONVGnPuS7zS95C0HBH/qIkLUm/pakrknPFMSABT6tcgcehIHzTFRbZJUQpOMQHpaO3cFOrsrqho3UpmgXlRnfaxK09W4XSBxclgPvcCVsYIIzjPuRtq2Ddv63tp6kN2RfTkrRtS5BnL0qPAzVm0+8/LA8lD77XTmnIzu6g6U+/T5lmYZWULbWFpUk4IIPAx6ap0Gq1qbldTdMJmYpN90Z0T7rciotOTa2/F7SwBj+cDiVoGe84kcchYfRDCMOuz+25abtR2mbTvN6WkdR6Ewn21hJCU1OXAA9rZTwwc8HEj3SR0IxmLAIQhAIQhAIQhAIQhAIQjg8oAeUYu7TGr85WqnN6JWNWEyPdMF+7q2JgMtU2T3N5UuXvzZLZ3nF822yMeNxGLh7R2tX8j1kpVRQ3NXZcDxp1vyaxvBcwR4n3Ej800nxnz8KeahGoza/1r/IyhzOz7aNaenavPOe233WVO94/NTaz3pky55757x/GcrIbyAlSYC3m1NtIS+pU3L6bacvvy+n9vO/zQbvdGpzAG77W430GMhpJ4pRxIBUQLDSrKUdMq8zEnLpwd88+cTyFYwPnATrY4eKJhHLkfnEkhfH5RHQ4lQ8PThATBGR7vCOihwIxgecEq/ViIhO+fdA/a5fOAlZlxqUZU86N7HADzMXn2Ktk65trXVdui4fk7TpBRNXFVEI4NMZ8LLZ/tXOISOgBV92LT2TZNzayahUTTexJBc9U61NolJRvHvLPvOr8kgAqJ6AGPoR2YNnW09mHSal6a2slLz7Q9pq1QKd1c/OrA7x0+nDCR0SAPOA9/ZVn2zp9atLsqzqMxSaNRpZEpJycunCGW0jl8TzJ5knJ4mPQQhAIQhAIQhAIQhAIQhAIQhAIQhAIgvNNzLTjDzaVtuJKVJUMggjiCIjRweUB8+22Zog5sp7UVXolPk1ItmqO/S9GG7hK6fME7zI8+7O+3+6POPF1ClolpneZV3jLgDjTnPeQRkH+GI2k9rroKjUbQNjVekyRcrensx3zqkJypdNfUEPA+iVd256ALjWBYLyLm0+ZXnem6G/7G95lojeZJ+QcH+EICBLymceHn0iu0WZmqNNMzks4ttxpYWhTZwoEHIIPQxClpUpUkEYiooSndwpPLoICZr0rX7UrcptK6KziqVclrzaJ+sSsrhIaO8B7W02ObLhUUvN8hv59xZCNyGx/tT2ttXaUyl7UoNyVckSmUuClBWTJzePu9S0v3kHyyDxBjTlbFzzdqVlielO6eS3lC2nkBxp5tY3VNuJPBbakEpWDzBMeh0y1TqexVrrQ9ZNPA9M6bXipTM9TEvlRTL7yfaZJzPHvWCpLjSz76C2c+JYAb5YRQbSuu372tmk3jbFUan6RW5VudkplpWUutOAKSfTgcY6HhzivQCEIQCEIQCEIQCJSoT8nSpGZqdSmW5aUk2VvzDzhwlttAJUonoAATE0eAMYb9odq3OydBoOzpaU/3Vc1EcIqbqF4MpR2z9ctR6Bwjc/YDsBiltFbVUw/N1raMeJ9sqKnbf02p7+CJeWQcrny2rqCUunI4rUwg8ExrbnpycqU6/UKlNuzU1MOLdefdWVOOuKJJWtR4kk5JJ4nMe/161CldQL5d+hHlC3KC0KVQ288PZWyfrcebq9909RvgckiLaoOBATKFeGI6FxJpV+lEQL+UBPpXxCRy84jtryAmKe27j72YjodxAVJs5ES9anvZ5cSbZAcdT4/RHlHLUwhpBedyEoGeBwTF/NgrZnmdqPX+Sp1ZlFrtS3iirXC5jCFMJUO7lR5F1Q3cdEBflAZ9dk9sjI02sUbQl8U3dua7pbcorTqfHI0tXEOYPJb2Af2AnzMbD4lZWWYlGGpWXZQ0y0kNttoThKEgYAA6DHSJqAQhCAQhCAQhCAQhCAQhCAQhCAQhCARweUcwgKPdVtUm8rZq1pV2XTMU6tST0hNtKGQpp1strH8CY+fK1rNqWlGvl56GV1ZD7T87RwVcA4/LKLjDg/vAgpHo7H0SHlGl/tX7Fe0l2src1kostuNXNKS1UOBhK52TcDbgz6thkn9owFj3EBh5QUgYB4+YPWIDzvDKVYipX0mXkbinGZNeZVTpdllDkppfibPzQoR5d2bBByeA6QHaZeBByevSKvbE7TLjpc/pdds0lijXApsszbnEUyoIyGJvJzgAqLbgHNp1zqBHlJqZyfCrB8op8xNbp3/AC5wGfvZP7SdXtC56rsfanPOy0zLzUy5b6X1ZLEy2o+1SWc9SFOJ6ZDnmI2px85d0XTXpWatfX6158y91WvOSknUphJJUX2BmSmleZU20Wl+rAJ4uRvo2dNaKJtB6OW1qxRN1CazKgzcuF59lnEeB9k/suBQHmMHrAXMhCEAhCEAhCODygIE3My0hLPT048lliXbU664s4ShAGST6ACNFe1Jr3Oah17UDWszKwq8Zty1LUQpXFijscHnUjl4mykHHWZXGzHtIdX3tKtmGtyFImVtVq9HUW5Ihs4c3HsmYUP8FLgz5rEaStbJ9DFwSdkybiVSdpSLdM8CiUqm/tJpz4l1Sk/uDygLck54nievGOM8I4hAdgqOwVEOGT5wEyF8I7oXEtvGO6F/e8oCZm31LQiVR55I9Y339nJs5DZ62d6UmsyHcXTd+5XK1vpw40XEDuZc+Xdt4yP01LjVH2degY192m6DI1SUL9v2ur8oKxvpylxthQ7po/3jpbB9N6PoDHQYgO8IQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgODyjXv2ztgIruz9bV/ttAzFrXCllShz9nm2ilX/MbajYQeUY89oBZwvfY81PpCW992UoxqjQ9ZRxL/APk0YDS7UqmKpZtoVso3VP0VqWcOea5ZSpX/ACZbMUByb8JKlcDHaiTD0xoxSZhxe8KdX5+RAPRtxlh1P497FDM1lAT0gJt6ZJHPJHKJJyY3gpPvA9Il3JjeQQOcSy3+qeav84D0lo1GTNSmbeq0wE0q4Jc0ybWriloLILUx/hOpacz5JI6xnB2PeuM7Z2oV0bMd1vqZRVXHalS2nF/ZVCXG7MtD9ttAPD+xPnGvRb2HAvPDrmPb0vUCr6c6lWJr3b7x+kJCcZmZkJOCualShLyDjkHWi2T6vLgPpFhFFtC6aTe1q0a8KFMB6nVyQYqMo4DneadbC0/gYrUAhCEAhCEBqn7TLUti4tqC07BdcU7R9NaA7cdRaSeAmFgvYPr3bLA/xY1dVGfmqrPTVUnnC5Mzby33ln7y1klR/iYyS2kdRTfOrOvupHtJUqpVoUGQczzlxMFsJHp3Mp+MYxQCEIQCEIQCOd70jiK9Y9pVK/LyoVlUZBVPV6pS9Ml0j+0dcSgfiqA3MdkPoedPtnyY1QqkqEVXUKcMy0pQ4pp7BLbI/eX3q/gUxnlHnbBs6lafWVQbFoTSW6fb9Ol6dLJAwO7abCAfnjPzMeigEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEeT1VoCLq0wu62XWQ4KrQp+S3DyPeMLT/rHrIgTbaXpV5o8ltqSfmID5rbUXM/yTXLIrV4KfcFOdwOSS4zNJWf8AlIEefEx4R4vlHraXKfR1oaq01X9Tq1PR80TEwn/WPBod8A3VdYCaL3OIJdP6XMxALmc+KOhc4wEVxfHA584qsk79K2vWKIvPeMBFUlhnHja8Lo/7pRP+EIoa18Ru8DE1Q6mKVV5ecWkdyhzcdSeRaI3XE/NCjAbreyX1eVqNsvsWfPzG/UbBqDlJIUfEZVf1rBPwClI/w4zZjTF2PeoS7I2k7k0onJj+b3VSnUt5PBc3JrLiSPi0Xo3OwCEIQCKDfdc/JiybhuQ8foqlTc9zx9kypf8ApFei1u1E89L7Nuqb0scOt2fVygjnn2RyA+eGpVJ2Z00UqYWovVO43JtwkcyiXHX4vH+MeHitTD6l2jKS3MNVCYOfi21/6RRYBCEIBCEIBGX/AGV+m6NQNsC3J6aY7yUtKUmq+75b7aA2z8w662f3YxAjap2IdmNEanahutgrBkKMyvyH1jrg/wClAbUwP4RzCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAjos4QongMR3iRrEyiTpM7Nur3W2JZxxSj0CUkkwHzmzhH0JrJMpxumvSTYI9ZuYI/BMWtbc8A68ece7Ey8nSa9qkvIFXuukNg54KwzUHVj5FTZ+cW7aXgJ+MBMqV4jxjoVxDWrCvCemY6Bac84CMVxDUrz4jyjqpXGIalQF7tlrUFzTzar0yvpTxS39NSDU0pJx9U/iXez8lKMfRh5ceEfLYxPvSa6dUWFFD0m7vNqScEbqgoH+JMfTpYNeTdVjW7cyFhQq1KlJ7IPA940lX+sB6GEIQHB5R5jUygm6dObqtpDSHV1aizsklCuRU4wtAB/jHqIQHy2utPMU6cpkwjcdk5oLKTzBwUK/HdikxkZtsaTO6NbVt+2a5L93T6tPOVSmqxwMtOHvmsfsuEo/cMY7uoU04ttQwUnGICHCEIBCEIAOcbuuxyt5ql7Ks5WhgrrV0TrxIGDhttpof+A/xjSLG/HssaczIbFNlONI3TOzNTmXPVRnXU/wCSRAZbwhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCARbXaNuZqztAdRLnmFJSJC2Kk4nPDxmXWEj5qIi5J5Rij2nN5otHZAuuTS9uP3JMSdFa5ce8eDjn/AC2nIDSfW1uU3Q2hyK0bv0zcs/Op4825eXYZScfF10fKLfIVhI8Ue61Q36dRbGtouJPslvon3Uge65OOuP8A/SUz/CLfJViAmC5HQK4GIe98Y43vSAilUdN5WY6k8Y4HOAjE5bS35K/+f5R9GmxTXV3Hsm6U1VwYWq15JgjOfskd1/8Azj5x8+D5x9A/Zp1F6o7FWm63z4mZacYH7CJ19KfwAgMn4QhAIxd1t27rF0R1lltLbitufmJCVNPTX6226gNUr20qDDi2+a2/B4zkY3hwMZQnlGnHbqUipbUGv2ns/kTdyWjRp6jYTvFUxJGVeDQHmptL4+cBfXte9nZWoGmNH2hbRlhMz9nN+z1RTPiL1KdOUOg9Q04c/B1R6RqGn0Jm5VFWQOKx3b4H3XB1+Ch+OfKNynZhbTlI2gNGJzZ81LmGZ+v2tIGR7ibO/wDSlFWO7TnPvlsHul/q92epjXVtibNFW2TNbKjac1KPzNmVzfm6HM9HpIq+z3v7Zk4B6nAPJcBjXCKnVqY5THkpCw6w833rLyU4S42eRHr0PkcjpFMgEIQgA4mN/nZfLC9iTT79U1Ef/nvxoGCfqiv1jep2SFTXP7G1Hl1ub3sFbqcsBn3R3veD/qQGaMIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEazu2Gu6brU1plojR3N+ZqUw/VXmgebiymUlf8Aidf/AIRsxjS7tcalM33tpX7fxdQ/SNKaW+zKhZ8PfybfdNIHqZ+ZP8IDDLWmpytU1QuE04JElIzX0ZKBJ4ezyiRLtY/caB+ceGiI4ta1KWtW8pRyVZzkxDgEIQgEIQgGeGI3+9l8CNiTT7/7j/8AvvxoCHPjH0G9m3TF0vYr00aWMF+TmZr4hybeV/rAZNwhCARpb7VuUnrQ206PdUq4tBqttyMw0sDhvIW8wR6+4P4xukjVX22lpqYqGlWozTRIR7fSXlDzBaebH4uwGA1mX/cmkV/0fXbSma9im6PPpddYSrwMucQ404BzYeG+B0wSnmBG5Gp07RjtPtldt6TdZlKkUd4ws4XM27WAjihWOJQc4PRbZzz5aO2Kwug1qaQGUTUm/lmallKIRMNE8s9OQIPQxeXZo2jL22QtRZbUSx3X6taFZKGKnT3HNxM6wOJac6NzDeSQr5jwkwHiL+01ubRu+Ktonq/TVUqfpr+GJhSSpton3Hmz+cYdGD6c+BBEeBrdCqNvzzlPqUsGnUjIPMLSeIUk9QRyPIiN4msOjWgfaZ6H06+7GrcvL1yXZUmj1pLY9okH8ZXJTjeclGTxTzB8aTx46kr+sK5tH7pmdCdoaiTFKfpjihT6qhJdMohXuvNEf0iUVz3RxHEjiCghZQIyDDc48Oceouyx6zaE6hipstrYmWw9JzjDney04yeTrTo4LR6g5zwIByBQCzgwENpBMu6CniMH5RuN7FS4ETugt6W3x7yl3T7QeP3X5VrH4tKjT3KS6lOFtKftEFA+cbGuxKvJMjqXqJYLruBV6NLVNpPmuWeKFfhMiA2+QhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhHB5QA8o8a1q1pi9e38mzd/UJd07qlGkJnW/a+AyR3ec5A5jnFgtpTaUrjtbe2f9AJpE1ekwgpr1cQsGWtqWx9YVOcvacdPuZyeOBGDmjLlE1r2z9MdKtHwiZtTTKoO1+qXE2ol+rzLR7yZmlPc1tqdDbTf6W+tZJChgNrmtGo0hpHpRdmpVQ3e6t+lTE6hJ5OuhH1TfxW4UJ+caAb2q05StG5qqVKZW5WdTK65MPOqwe+k5NxSnVk/7ybe+fcZjZV2tGqtRXbdmbNNnuKcrt91NqammmlcfZm3AhhKvRb5B/wY1Z7RFcps9qG7bFvuh2iWVKM2zTlAfaIlgUuu+vePF5zP64gLXQhCAQhCAQhCADnH0hbHFvfktsr6VUQg7zVqyDqwoffcaDp/FZj5zaDSpivVynUKUQVv1GbalGkjmVuLCQP4mPqAtSitW5a9Gt1n3KVIS8mjzw22Ef6QFYhCEBweUYY9rHp4u+NkSrVqXZ7yZs6pydaTgZPd7xYd+QQ+VH9mMzjyjy2plk0/UnT25dP6qlJk7ipU1TXcjgA60pGfiCc/KA+ZipBbqJWa5d7Loyo+aPqz/wCH8YmqDX3aOXZWZlkzlOm0huaknVEJWOmD0WOYPSJyuW9ULdeq9q1aWLdRtqqPyc02eaVBfdq/g41/xxQkp3sjEBfbQHaA1N2T7sRqRpLVnKpbM44hFUpkyo9xMJP5iZQn7N0cQh0eeRzKBtTl5zZW7UzR4S802JS4qe1lTYU2isUCYI5pJ+0ZJ9ChY5gK5aRaRWZ+hTXtMk4gpUkodadAU08jqlxPJQxw4x7Oz7iuCz7mktRdErinrcuSmnvUykvMEPIxz7on7Vsjm2rPDh4xAXj1u2fdY9jGqvWfqpawvTTGpvkyc43vJlFrOcOMPAFclNAc08ldQ4AItLV9LZCsUiYu3S2rLuGiy4Ds0ypsIqFNB6TTAJO4OXepy2TnxA8I2T7N3acaT67UP+Rra2oNKpFSqKBIvTs0wF0ep54YeSv+jOZ88ozx3kco8vtC9lbWaDUTrBsXXUuXebzOs0FU5hQBGf5nNZwtJH5tzgQcbx5QGsVlhyVmk96gpIPUcoyL7OW+E6aballKecDcpXJh+hO73DKZtohr/md1Hi7prTKbhetXaA09n7PumUPdP1GSkPZnFHOO8mZI7qF8cnvGij0Ssx5SulnTm8bYvyzblkqqJOZYn5OalFEEPSziVAKSfG2fc4KwfSA+lsHPLlHMeesS7aff1kUG+KOsKkq/TpapMEHPgdbDgH44j0MAhCEAhCEAhCEAhCEAhCEAhCEAhHBGQYtXrLtHaY6Hybabsq65mtTic0+hU5AfqU6o8E920DwGeG+vCPWAubMTDEmw5NTTqGWWkFxxxZwlKQMkknkBGIGsW1FOajN1e0NFbiao1q0xtf5TaiTDgZk5VnB325NxfBS8Zy9yH3MnCxZHaX2hp+rUZuubTNxOWZakxh+laZ0OY72rVhOTuGdWCMI4HOd1oEY4r3c689dtpi7taW5W2peQl7YsilLJpds01Z9na4ndceVwMw6Acb5AA47qU7ysh7zX3ampM7Q5/RnZ8YmKPYzmUVSru5TUbjVn6xbqj422VHPg99YP1mAS2M/+yU2fkaU6JVPXO7WkylTvdAellvjd9mpDGSlRPQOKCnD+qluNb2xvs11HaY1zouniG3E0aTWKnck2nkxJNkZSD+kskNj1XnpG0ftMtcpXQ/Z/ktFtPkGWuK/WxQaZJSQwuXpqAlt4oA48UlDKfPvD5QGBOqWu8xqXrNqptcTC1okKEF27Y4WcfzlxKmJVSc9W2e+mVjzUIwvJUolSjknifWLxa8T0tachQNB6S82pmy2lu1pbSspmK4+AZk5HMNAJZGeW455xZuAQhCAQhCAQhAc4C/Gw1YX8pG1jppba5fvWEVtqozA6d1Kgvq/6UfRcM8I07di5pi5W9YLu1Wm5VSpa2aSinSzhHD2mbXxx6htpWf243FwCEIQCEI4PKA0bdpXpMjSzbAqtRQyhih6lSiao0sDwpfcPdvH4iYbDh9FiMO35R6TmXJSYaKFtLLa0n7pHT+Mbo+1w0LXqTs7t6kUmT7ysadzPtyyhPFVPdwiYHwSQ058GzGnuqtis0ySudobypgFmaxzEw3gKP7wKFfvGA8/3fp+Md2wto960soUOIUOYPnEbuPEPDERLPCAqC56nV5oMXNLEzHJNQlwnvk+XeDgHR+P60X22ftsTaN2Vg03ZtwouyyUKHe0ieUp6UQknkkfaSq/hw9DGPyJfhvbvGJqSem5B0Pysw42tA4KScH//ACA2yUDav2EdvagS1l69W7IWxcyx3Uu3WnAytpwjnKVFGMDPRZRnlumLPaxdjHc7Dq6xoBqXT6xTn1b7VPrv1LyG1cRuzDQKHB8UI4ecYDOsUOtnFXp/s8wf61JbraifNTeNxfy3DF3tHNorak0HdZ/kh1QmalR2jn6Fm3vaWFIzy9lePDy+qOfWA3e7N2mVV0a0JsjTCt1BmdqFu0dmTmnmSe7U7xKtzP3QSQOHICLnRrI0o7Zijpfboe0LpPUaFOIwl2oUQlxGfNcq6Q4j5LX8IzM0t2x9mfWJpr8htYLfemnuAkJyYElNhXl3L+6sn4ZgL1wiCh1D6EuNuBaFDIUk5BHmCIjQCEIQCEIQCEI4PKA5hHmby1FsHTuQVU76vOi0CVQCe9qM82xnAzw3yM/ARjbeXaS6JSM2aJpVRbl1KrCvCyzRpBbUus/37oGR6tpXAZbnlFt9WNoHSPRSSM1qJeknT31pyzT2yXp5/hybYby4fjjHqIwL1l2v9dqlJutakaoWtoRRnhn6Lp7i524nWjyylAU6g9MpQyAQeMYdVzapsKzn5l7R2xZysV2YPeO3dfDonJwuEHxtSoKmwrOCFurdPmIDYTqftkapXvbc1WrVTKaN2AoFKrtuZxH0jMo54lGMkBwpzgJ7xZIHuGMEL52wrWsabqDWz5S52rXJOLWqd1DuhAmai+vJyqVZcz3QwMhTuThZHdowDGNN+akX1qhWl3HqFddRrtQUCA7OPlYaSTndaR7raM/dQAB5R5Uc4CrV+4K9dVXmbiuaszlVqc6rvJicnX1PPPKxjK1qJJ5AcYmKVIPMss1BDCnZmbd9mpzSUZU67y7wDrgkAfr48jEpR6cifmFOzbpZk5cd7MPY4hHkPNRPAesbFuyz2TF6oXonaV1ApAbtm2HxL2vIrTlEzON8nR5oZ8/vOHP3TAZj7B+zfRtkPZ8duC/FS1PuStS307dM4+d0STSGytEuVHkGm87/AOuVnyjXHqnr/N6vavXntjXGwr6Dtlz6C0+p8yAUrnMH2UlJ5hoFU05j75A6xlr2nG0HWbrqtM2LtJJtL1buRxp66JltzCZWW95Mus8gCB3rnkhI8zGsjXC86JU6hIaf2M6VWfZbKpCmrOMzr5OZieVjq64OHkhLY4cRAW3npyZqE2/Pzr7j8zMuqdeccVvKcWo5KiepJJOYlYQgEIQgEIYMcgcIDiA5xzjjF19mTRWpa/a62lpXIoX3VVnkKqLqRnuJJvxzC/k2lWPUiA3Ldl7o7/JPso0CfnZbuqpejzlxTe8nCg27hLCT/hNtn94xl1ElTKbIUinytJpss3Lykiy3LMMtjCWmkDdQgegAxE7AIQhAIQhAU2vUWmXLQ6hb1blETdPqkq7JzTC+TrTiShaD8QSI+e/VLRmo6B693bs/XCXTLOTX+xJpaftwfFJuj+8Qe6OOSzx92PohPKNffa2bMExqVprKa72fTi5cNhtLTUktI+tmaUTkn1LK8ufsKcgNSs3T3ZOZXLPNlKm1lsj1B4x09n3RHt5gi+7XYveWbQZttQk6yhGMpm8ZS9gfcdQCfLfS55R55MopO8hYwRAU5LHLdGTEZMrkeHnFQTK+Lexz6xMsypJ93/3gKY1JE80g+QiflpZ1tQUOPpFSl5JBI4cesTTcnupzu5EB3k6rNqlkStQYl5+WT+YnmhMIHwCwcfLEQpm2NMaokGctibpj3MvUqeKQT5908HB8gU/KIvs6AkbqcRJzK+BTyx1gPW2NeOrOnKm1aRbT1wUBsHdTKTr0ywyB5bjZeaPxIEX8svbo7QahLRLS9yWVfzLZx9cqQUt0fBpxlz8Mxh1Nq4qAUYpEwt4ZSFn4ZgNltG7UDa2pikt3XskfSYT9o5S2Z5sK9QQl5EeqkO1mvVtak17Y6vJnh/V5p4/guWEaoWa7cNMd36bWpyWX0UxMuJI/hE+jVvVqTG5Kal3Qwk9G6w+kfgqA2xM9rLNTSu5lNknUF1/9BDuf4/UxEPaPa/1zfbtPYquBgrH1LtVn3mUD1VmXSD/2h8Y1JTGsOr72e+1QuxefOszJ/wDNFBql2XVWjmtXPVZ8/wD1M447/mTAbXbn25tsdeW6lIaNaaMOjwPVmuMrdb+CVzGSf8OLF3ztc3rWUuo1G266i8QPrabYVHeQhX6rbyG5ZB8slwj4xr/UVKO8SSfMmOsBkdV9etFKZNuVGg6X3BelWIymq3vW1q+s81S8ucrGfN6PK3NtXaz1+VcpNHr8vZ9HcORTbVlkUxoDGCC439c4D/vHFRZuEBGeddecW88tS1rJKlKOSo9ST5xBhCARNyUlMT8yiVlk5Wo4yeQxzJPQAdYgy7D008iXl21LccICUp5kxczR/SG9Nab7p2kOltPNRrFYWEzk0gfUsMg5Wta/uMoGCpXUgAZ4ZD32yXsx1/aq1Tk9O7eL0raVJcTO3JWQ2cJaBxkf7xfFLST6qP342/7S2uenewns7Ssta9Nk5aalpT6GtCiI91x9KODihz7tv33Fdc+aoqemtgaLbAOzm8mcqLUlSKIwZ+u1h5OH6lOEc8c1KUcIbaHIbo8ydVuq+uFR1pvWo7XutFPxQpJ1ym6dWo+rebm3mzlO8BzZaOHHl8lrIQDyEBby/LnremtqVOo3LUn5zVrVZtc/XJl/i9S6U+Srujn3XZjOSPutADhvCMdCSTnPP1ir3PcVbu+u1C5rkqLk9VKi+qYmphw5LjhPE+QHQAcABgYAAikBORAcQwY7BMdkpgOm76xyExECOHux2CcHiOMBD3eMAnJ3fOIu56fhHVSf1fnARJdtClKeWjLTQ3iD+A+Zjbp2O+zo5bln1naMueQKJ+6N6m0MuI4iQQvLzw8g46N34Nesa49nvQuva+6wWzoxQEuIcqMyl+sTSUZ9ilE4Lrh8u7Rkftqx1j6J7NtWg2Ha1Isq15JEnSKHJtSEkwgYCGW0BKR6nA+fOAr0IQgEIQgEIQgESs/JylQk5inT0s3MS0y0pl5pxIUlxtQwpJB5ggkYiajg8j0gNFO07odM7EG0VNyDtPnJ3Sy+A45KpR1k1K8bIJGO/lVlJQeBI3Ojhi3F82M9a1THdPNzdOm2kTdPnmPspyUcGW3myOhHTpxB4gxu62p9nC09qDSOpaa3IluWmSPaaRUSjKqfOoB7t0enNKh1QoxpntFFT0wuir7Jm0W19BKkZ1xui1WbGGaTOLORlZ/qUxwO+OCSQ5yLkBblhgZ4conGJUJAQscIrF7WXXLDuCboNfprsnNyjpacQ4OKT1OeoPMEdDFKamEgBK8Z6GAihCUEBXM8o7rWhIG6OPxiAt4fERJvTKUqgI77wAPHHzikzL6STHZ+aykchzilTD5wc5HrAQ5h3JMU15ec+HHziK85j3lY9REi65x5wEF5ScCJNw5MRnl84lHF5gIKycceXGJc8ojOK+7EBXOA6q5xxCEAhCEAHOIsvLvTTyGGG1OOOHCUJ5kxFk5N+ceDTCN4431EnASBzJPQesXE0h0jv3Wi8ZbTHSOhOVes1FW7MzCU7rTLP3lqWeDbI5lRwTgY8oCQ0505uzUq7qfpnprR3K1ctbc7gBjiltJ9/wAfJKAPfc5Yz057x9lDZc0z2GtIZ+sXBWJE1t6U9uuq5ZnwIShAyWmyeKGEHkOajxPEgCFsubKOkWwvphPXHcNZp6q4ZT2m5rpnCGm0NpGS01vfZspPIc1nBOTgDB/ah2nq1tnVGpSsnWJ2zNnqz5jvKjVHAUPVx9B+rSlBxvuK4d21x3c76snAAUjaa2jX9sm7565K7UJ+3tnuwJlRaTktvV2cA8ISPvPOfdR+aQeOCSYwu1W1NqOp9xJqT8k1TaVTmBIUWkS/BinSaPcaSOpxxWrmpRJ4DAFR1f1cXqC7IW9blLFAsq30KaodEaVkMIPvPOn84+v3lqPmQOHE21gOUpzHcJ+ccJEd0p/R4wHITx92OwRz6x2SEkesREN49YDolEd+7+ERUIyPFxMdghI5QEHu1CKlR2EyTLtwzLYWiUUESraxwemfuj1CfePwA+9HNGozlYnRKpcQ0w2hTsy+r3GGEe84vHQcOHUkJHExm92cmyaNofUmX1Vu2iuo0zsV8Jp8tMcqnPghQQrovBw64R13EcuADMrsw9lB/QzSxep17yBRfF/NtzTodT9bI08+Npk55KXnvF+pSDxTGbsQ0J3QEjhjoBiIkAhCEAhCEAhCEAhCEBweUYl7eWw9Qdq6z01mgezUzUWgsqFKnl+Fudb5mUfP6JOdxX3TnoTGWscHlAaE7SvYzxXs17SzblsXXbazS6NXKoC17PucESM6rGQ0OTT/ABCAQD9Xgp8bfNkXDp/XJqg16nOy0xLOFC23E4I8uPUYIII5gxt021NhCw9rGh/TMotqg3/TmFNyFaSjwTCRyYmgPfRnkr3k9OHCNXFUrt96GVdGzzteWhURIU5v2ek1ttHezlNYH2a5d3O7OymfzZOUD7Mpx3ZC1pmuaTwiTfmOJ8MXBvrSefpFNl7rtucl7hteof0StU0lcs6eZQTwLTg6tuYWORHCLYzZdaUUPIKT6iA6vOqGN1WevwiTdc3knjx+EcvO8eUSjq1QEJ5zjEo4vj4VY9Iiuryd1XCJR0qz4eMBDdKsnOMRKue8YiuqV+jEs4rMBDc/0iET+jHZRIjornAcQgOcTsnTZyeClsM5bb+0dV4UI+KjwEBJDnFSlqYe5TOzzns0t0URlTv7KTz+PKKtb1vzVZq0rb1p0abuWuzjndS0rKyy3gpzPAIaA33Dz6Y9DGx7ZT7JSs11+T1B2rJp+WYO46zass/9e4OgmnkH6sf7tvj0yOUBiTsvbIOrW1jW00qyKWuiWfKupTVK/NtksNY6Z4F93nhtPAcM45xuGsewNmrs8tGJuouTktRKYylKqnWZ3C6hV5nHBHmtZOQhpAwOPLiYoW0DtgaDbGltSmmtmUaUqd0tMJlaLZVvtpBaUR9X3wb4MpJI6FxeeCTzjWlrxqncF1XMNTtrmtpuC5G1lyg6aSMxuSlLb5p9s3MhpOMeDi45988wA93tI7TFz7WTC7x1Jm5+wNBqPMK+jKQ04n6QuWaRndASftF8P7trjxJysYeapatVTUMydHlJNmh2nRElFGoMmfqJVPLfV/aPK5rcVxOTyziKRqBqPdmptZ+mLpqHfKaT3UpKtDu5aTYHJplrk2gD5nmSTknyUAjlIjiIiRAcpTERKIITEZKYDlCOIiMlCvd5/CDaQIjJTu5Vu5gAQlP8OMR6ZS5+tT7FMpsouYmphQS2hGMk4znjwA8zHel02o1moy9IpEm7Nzcy53TLTKMqUemB/rF1tMNKrr1SvST0K0XlG6tcFY+qrtbZO9Ly0uD9a2hwcBLIB+sd4d6RuJ8GN8K/s57ONy7Teocpo5p7MFugyim5u7rjbbyylAJ4IP3kjilpP3l5WQABub4dNdOrP0ksej6d2NSG6fRKHLpl5VlHE46uKPVaiSSeZJMeM2Zdm6xNl/TKT08stguulXtNUqbicPVGbIAU656dEp5BIHXJN34BCEIBCEIBCEIBCEIBCEIBCEIDg8otvrbs/wClO0Jablm6rWrL1eU4qlpj7Oak3CMd4y8PE2r4cDyII4RcmEBpt1g2Adp7ZLqVQvXZ1rU9e1nTAzPU5qXD0wWOPgm5E5RMoAKhvIBIznCOcY5fl9o3fj7knfFCm9Oq+DuTD8my5NU1To98uM/0iWJPDCC7x6AR9Dx5HpFj9cdjPZ12hG3JnUbT2SXVFjArFOHsk+P8Vvi58HN4ekBpErOi9eMq5VrRmpK6KWjlN0SZROJHXxBs77ZxzDgBEW4npKbk3VNvMLSpGQQQQc9cgxsa1H7GO6aFUjXdn/WoIcaKlMy1cSuWmGvLcmpcHPDh9mj4xYy9NkrtELOKZG4NOHr3k2Sd10MSVZCwP1lgvjI+B6QGIzql53VJJ9MRLk5zzHxi7dw2Xq9RHw1eGyxUZBagVcKNVJUkeYwvc/DEeYcYmi6Gf5D6shecbnez2c/AiA8G7EsviTiLmyVj6iV2ZQxb2zzW5pTh8CE06pvk/wDYIi4NsbIG2JeDjSLb2a6nTkrVud9OUlEpj4rnDw+MBjnJ0+oVBwsyMlMTSh0ZaK/wEVH8l35bCqvUJGmgYyh50Kd/7pveX/ECM8LI7Jba1vNQRqLe9BtOnLwXGFz65xWOoDLA7r/jEZM6Ydjrs92YG6lqbc9evaZawpbKlinyR6nKGyXCP8T5QGom2rdmLmq7NCsG0KtdVYfUA0y3KuOrUc/dYayo/NR+EZuaEdkxrnqgqVrWudbbsKg5C001AS9UVI6hLKD3THxUSR1RGdNwbSWwhsa0Z6g25UrUpkw0MKo9qSrc1OuqHRwtdemXXBGMup/aS7ROqNJfmNELAkNMrRcGBeF2vtpUpBB8TXeDu89MNpeMBlZQLJ2Nuz1sc1h52kWwt1vccqdQX7RVqkUjilOAXF/sNpCR5CMSdae0R1o12kZ6R2fpFOmWnjayzOX5X3Ay+4jiCGeYQrh7rXeOZxxRGE96aoWT+UMxddx1mray3o6crrFxLdbpTS88O7lyrvXwOgcLbf8Au8RbC99Rry1EnETl11x2bSwju5WVQA1LSjfRDLKcNtp9EiAuTU9Y7b08cnE6OLnqlck6SahflaRvVB9Z98yjayr2dJJPjJLpzxIwMWWnZ2bqEy7Oz8y5MTMwouOuuqKlOLJ4kk9fWJWEAhCOQOMByOUREesQwOcREcoCMjnEZP8ArEJPHxREKkjGOJ8oCOgoHvKx6iKpQKHWLoqjFHosguZm5jghtHAAYySTkbiAOJUSABxPCO9r2tM1/v5t2aakaXJAOT1RmiQxLA8skAlSz0SkFajyHAmL67P+gmo207cB0y0Jo0zTLVaKE3LdU63uB1H++KSQE8D3cq2TnmskjfSHm9NNMLq1Su+X0R0DkFV6v1RPdVqvtJxLMS5+1Q25gd3LDk46cF33AMYDm67ZJ2S7A2TrBbtm2UJqFdqAQ5XK243h6deA5D9BpPEIQPicnJiqbNGy9ppst2K1Z9gSHezbwDlVrEwge11J7qtZGd1I47rY4D1OVG80AhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAiQq8iqqUmdpaJx6UVNy7jCZhg4cZKkkb6T5jOR8In44PKA026maibU+yDqKbW1g1E1Ao9MeW41R7woTwqEhPtD7NbshNksOLGcuJStpYzyVgZvbY21jt0OUZu4rFkdMNfLYOUip0aZ+jZ5vgCEzDDimi08UEKLXdkjPHpGwC+tPrL1Ntqcs6/rZkK9RZ5G7MSc60Ftr8lDPEKHRQII6GNaut3ZkataL3G/qxsR3tVGlNAuOUBc73U4lAXvFppw/VzLeUj6p7nj84YC6Mr2nuoNuyyndUdirUqjoZP1s3KMuusAdVAuMoGPgoj1g32yezWF7k9p/qBLOj3gqnypIPX8/n8Iwlm9rXUA1Byz9aJu79OLuksMTFRpZmZNtRAxmbkgUrbJ4kuM5HHg1EvWtTtoyUp5r1u6x1+v0bPhn5SrLnWR5BWSS2ePuuAfAQGcqu2T2dX/q6Zp5qLOvK9xtFPlvEeg+3iSqXaoXpVJc/wAnWxjqRVXT7rk2062gDoT3TLnD5xrnqu0btCulSHtVLnaPLDU8to/8GI8TXtTNULjbUiu6hXDPNr4lEzVHnU/wKoDYDfW3rt11VIQxaem2k0i6MicrlTYL7Yx1Q+8Vk/Bkxi/qTrnWb6S5/LptbXdewJIeodpMKl5Iny710MtAeoZXGNcwzMOKK3XCo9SokkxJuS/HnAXJ/lmty1gEaV6WUGhvt7pFVqn+1qjvj76VPDuWj1+qaHxjwl1XndN71BVUu+4ahVpo8A5NzBdKR0ABPAegwB5RS1NARBWnEBBhHJHWOIBCEIBHIHWOBzjsBAdkjhyjukfKIaecVSXpJCUzFSmESTCuSnBlxQ/Vb5n44A9YCSQFrO4lO8TwAHWPVS9AptAQmcvVxwOqIU1SZcgTT2erp/q6T6+M/o9YuDoTodq9rrXU0DQKwp19xKgmbuCZHdtSgPAqLxHdy/Pk3lzyJ5RtR2UOy90w0OmZa+NUXmb8vZtQfQp9r/Z0i7z3mml/aOZ/OOfJKecBh/sq9nbqptJuUu8dZpeZsXTOWSl2n0qXbLE1OoPHLLS8ltKur7uXF8Mb44jbtp3ptY2k1oyNiadW1KUOh05G6xKSycDPVSifE4s8ypRKj1MeoSlIACOAHQREgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEcHlHMIC1et2zVoptD0f6J1WsSRqy20lLE8lJZnZb+6fRhafhkj0Ma7dXOyN1S08nZi7NljUt+oJAz9EVGYEnOkZz3aXk4ZeHo4ED4xtmjg8oD51tRmdT9Oqj9BbQejlTpM8D3ftwlDIOu8c74IBYe580gZ848O8xaVYIcodzssrIz7NUm/Zlj03+Lfz3x8I+k2v25QLqprlGuahU+rU98YdlZ+XQ+0seqVgiMU9VOyy2SNSlPTVNtCcs2oOgn2i35ost58yw5vt/wSIDSZP21XJFHfPU19THMPNjvGiPMKRkRQnCQd3HE+cbJb37FvUaiTDs7o7rdTptB91irS7si7jyLrJWD/AAEWHvPs6due0ypL+mrNzMN8A9T5qUnSoeYCyHfwzAYlrVmIDnDnmLr3Ns+7QtrBRubZ4uuRCFYLpoM4EA+hR4DHg6jRatTFlmrWXVZJ4c0vNutEfJaYDz6hkR1IioKllq4Jo84D8Sf/ACxMyFsXHWHvZ6PatUm3D9xiVddP8AICikcI4i7Nq7LO0jexR+TGhF5zaHPdcFGebbP77gA/GL22P2VG2LeCmlVOy6Xa8urGXavVGUkD+7Z7xefiIDDsIKj5epiKkMoHF0k+SR/rG1XTfsS5JtTUzq3rQ8+MhTknQJANg+Y754n+IbjL/SXs/tlHRxbE9b2lcjU6mwQpNRrhM++FeYDngQc/opEBpX0R2Q9o3Xh5pemmmdQNOcOFVidb9lk0jz75zAP+HkxsU2fux2sK2JiWuPaDuxy8KiCFqo9PKmJAK54cdP1r3Lp3fzEbGmWWZdtDDLSW220hKEIGEpA5DHIRHgKFaln2zYtDlbYs23qfRKTJICJeTkJdLLLY9EpwM+Z5mK7CEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAiWekpOY4vyrK/22wYmYQEj9CUbOfoiSz59wj/0iO1JykucsyzTZ80oAiPCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCA//Z",unir:"data:image/png;base64,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",dset:"data:image/png;base64,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",udg:"data:image/png;base64,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"},ag=new Qm,xc={};for(const[n,e]of Object.entries(Sc)){const t=ag.load(e);t.colorSpace=lt,t.anisotropy=16,t.minFilter=Ii,t.magFilter=Ot,t.generateMipmaps=!0,xc[n]=t}for(const[n,e]of Object.entries(Sc)){const t=new Image;t.src=e}function Hr(n,e,t=.1,i=12){const s=new $s,r=-n/2,o=-e/2,a=n,l=e,c=Math.min(t,a/2,l/2);s.moveTo(r+c,o),s.lineTo(r+a-c,o),s.quadraticCurveTo(r+a,o,r+a,o+c),s.lineTo(r+a,o+l-c),s.quadraticCurveTo(r+a,o+l,r+a-c,o+l),s.lineTo(r+c,o+l),s.quadraticCurveTo(r,o+l,r,o+l-c),s.lineTo(r,o+c),s.quadraticCurveTo(r,o,r+c,o);const u=new Sa(s,i),d=u.attributes.position,h=[];for(let A=0;A<d.count;A++){const m=(d.getX(A)-r)/a,g=(d.getY(A)-o)/l;h.push(m,g)}return u.setAttribute("uv",new xt(h,2)),u.computeVertexNormals(),u}function Gr(n,e,t="ca",i=!1){const s=n.getContext("2d"),r=e.content[t]||e.content.ca,o=n.width,a=n.height;s.clearRect(0,0,o,a),s.fillStyle="#ffffff",s.beginPath(),s.roundRect(4,4,o-8,a-8,48),s.fill(),s.strokeStyle="#cbd5e1",s.lineWidth=8,s.stroke(),s.save(),s.beginPath(),s.roundRect(4,4,o-8,a-8,48),s.clip(),s.fillStyle=e.accentColor||"#38bdf8",s.fillRect(0,0,o,88),s.fillStyle="#ffffff",s.font='bold 36px "PP Neue Montreal", "Inter", sans-serif',s.fillText(`MF-2HD · 1.44MB · DISK ${e.diskNumber}`,50,58),s.font="bold 34px monospace",s.fillText(`[ ${r.period} ]`,o-450,58);const l=50,c=110,u=o-100,d=880;s.fillStyle=e.logoBg||"#f8fafc",s.beginPath(),s.roundRect(l,c,u,d,36),s.fill(),s.strokeStyle="#e2e8f0",s.lineWidth=4,s.stroke(),s.fillStyle="#09090b",s.font='bold 88px "PPEiko", "PP Neue Montreal", sans-serif',s.fillText(r.title,50,1070),s.fillStyle="#334155",s.font='600 48px "PP Neue Montreal", sans-serif',s.fillText(r.subtitle,50,1145,o-100),r.badge&&(s.fillStyle=e.accentColor?`${e.accentColor}22`:"#e0f2fe",s.beginPath(),s.roundRect(50,1180,o-100,80,20),s.fill(),s.fillStyle=e.accentColor||"#0284c7",s.font='bold 38px "PP Neue Montreal", sans-serif',s.fillText(`★ ${r.badge}`,75,1234)),s.fillStyle="#0f172a";for(let h=0;h<64;h++){const A=h%5===0?14:h%2===0?8:4,m=50+h*22;s.fillRect(m,1310,A,90)}s.font="bold 36px monospace",s.fillStyle="#64748b",s.fillText(`SN: ORIOL-RAMOS-${e.id.toUpperCase()}-VERIFIED`,o-820,1370),s.strokeStyle=e.accentColor||"#38bdf8",s.lineWidth=5,s.beginPath(),s.roundRect(o-420,1410,370,70,12),s.stroke(),s.fillStyle=e.accentColor||"#38bdf8",s.font="bold 32px monospace",s.fillText("QC PASSED · 100%",o-390,1456),s.restore()}function og(n,e="ca",t=!1){const i=new Qn;i.name=`floppy_${n.id}`;const s=3.25,r=3.4,o=.13,a=new $s,l=.08,c=.28;a.moveTo(-s/2+l,-r/2),a.lineTo(s/2-c,-r/2),a.lineTo(s/2,-r/2+c),a.lineTo(s/2,r/2-l),a.quadraticCurveTo(s/2,r/2,s/2-l,r/2),a.lineTo(-s/2+l,r/2),a.quadraticCurveTo(-s/2,r/2,-s/2,r/2-l),a.lineTo(-s/2,-r/2+l),a.quadraticCurveTo(-s/2,-r/2,-s/2+l,-r/2);const u={steps:1,depth:o,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:4},d=new va(a,u);d.center();const h=new sl({color:new Ue(n.color||"#1e1e24"),roughness:.35,metalness:.08,clearcoat:.5,clearcoatRoughness:.15,reflectivity:.6}),A=new Ye(d,h);A.castShadow=!0,A.receiveShadow=!0,i.add(A);const m=new ji(1.25,1.25,.02,36),g=new sl({color:new Ue("#221710"),metalness:.92,roughness:.2,clearcoat:.7}),p=new Ye(m,g);p.rotation.x=Math.PI/2,p.position.set(0,.42,0),i.add(p);const f=new ji(.42,.42,.035,28),C=new nn({color:new Ue("#e2e8f0"),metalness:.98,roughness:.15}),v=new Ye(f,C);v.rotation.x=Math.PI/2,v.position.set(0,.42,0),i.add(v);const y=1.42,P=1.22,I=o+.045,b=new zt(y,P,I),G=new nn({color:new Ue(n.shutterColor||"#e2e8f0"),metalness:.96,roughness:.2}),S=new Ye(b,G);S.position.set(0,r/2-P/2+.02,0),S.castShadow=!0,i.add(S);const T=new zt(.44,.8,I+.01),N=new Si({color:328965}),H=new Ye(T,N);H.position.set(.2,r/2-P/2+.02,0),i.add(H);const Y=new Si({color:131586}),R=new zt(.18,.18,o+.05),D=new Ye(R,Y);D.position.set(s/2-.28,-r/2+.28,0),i.add(D);const z=new Ye(R,Y);z.position.set(-s/2+.28,-r/2+.28,0),i.add(z);const q=document.createElement("canvas");q.width=2048,q.height=1520,Gr(q,n,e,t);const W=new cc(q);W.anisotropy=16;const J=Hr(2.78,1.95,.1,16),K=new nn({map:W,roughness:.35,metalness:.02,transparent:!0,alphaTest:.01}),ne=new Ye(J,K);ne.position.set(0,-.42,o/2+.016),i.add(ne);const ie=xc[n.id];if(ie){const de=Hr(2.5,1.15,.08,12),ve=new Si({color:new Ue(n.logoBg||"#ffffff"),transparent:!0,opacity:.98}),pe=new Ye(de,ve);pe.position.set(0,-.45,o/2+.018),i.add(pe);let Te=1;n.id==="unir"?Te=1.7:n.id==="dxc"||n.id==="udg"||n.id==="dset"?Te=1:n.id==="clothy"&&(Te=.97);const we=1.02,Se=Math.min(2.35,we*Te),Pe=Hr(Se,we,.06,12),_=new Si({map:ie,transparent:!0,side:En}),re=new Ye(Pe,_);re.position.set(0,-.45,o/2+.021),i.add(re)}return i.userData={diskData:n,bodyMaterial:h,labelCanvas:q,labelTexture:W,updateLanguage:(k,Z=!1)=>{Gr(q,n,k,Z),W.needsUpdate=!0},setTheme:k=>{Gr(q,n,e,k),W.needsUpdate=!0}},i}function lg(n=!1){const e=new Qn;e.name="FloppyDriveUnit",e.position.set(0,-2.15,0);const t=new Ue(1448224),i=new Ue(14410990),s=new nn({color:n?i:t,roughness:.45,metalness:.35}),r=new nn({color:329224,roughness:.9,metalness:.1}),o=new nn({color:n?11581636:7436678,metalness:.75,roughness:.25}),a=new nn({color:413243,emissive:0,emissiveIntensity:0,roughness:.2,metalness:.1}),l=new nn({color:n?9741240:2566965,roughness:.6,metalness:.2}),c=new zt(4.8,.95,2.6),u=new Ye(c,s);u.castShadow=!0,u.receiveShadow=!0,e.add(u);const d=new zt(3.6,.28,1.8),h=new Ye(d,r);h.position.set(0,.08,.5),e.add(h);const A=new zt(3.72,.36,.05),m=new nn({color:n?12897236:921620,roughness:.5,metalness:.4}),g=new Ye(A,m);g.position.set(0,.08,1.305),e.add(g);const p=new Qn;p.position.set(0,.2,1.29);const f=new zt(3.55,.22,.03);f.translate(0,-.11,0);const C=new Ye(f,o);C.castShadow=!0,p.add(C),e.add(p);const v=new ji(.045,.045,.05,16);v.rotateX(Math.PI/2);const y=new Ye(v,a);y.position.set(2.05,.08,1.31),e.add(y);const P=new Xm(1096065,0,2.5);P.position.set(2.05,.08,1.45),e.add(P);const I=new zt(.35,.18,.08),b=new Ye(I,l);b.position.set(2.05,-.18,1.32),e.add(b);let G=0,S=!1;function T(){p.rotation.x+=(G-p.rotation.x)*.18}function N(){S=!0,G=-Math.PI/2.3}function H(){S=!1,G=0}function Y(D){D?(a.color.set(3462041),a.emissive.set(1096065),a.emissiveIntensity=3.5,P.intensity=2.2):(a.color.set(413243),a.emissive.set(0),a.emissiveIntensity=0,P.intensity=0)}function R(D){s.color.set(D?i:t),m.color.set(D?12897236:921620),o.color.set(D?11581636:7436678),l.color.set(D?9741240:2566965)}return{group:e,update:T,openFlap:N,closeFlap:H,setLed:Y,setTheme:R,isOpen:()=>S}}let Ei=null;function Mc(){if(!Ei){const n=window.AudioContext||window.webkitAudioContext;n&&(Ei=new n)}return Ei&&Ei.state==="suspended"&&Ei.resume(),Ei}function an(n=1){try{const e=Mc();if(!e)return;const t=e.createOscillator(),i=e.createGain();t.type="triangle",t.frequency.setValueAtTime(600*n,e.currentTime),t.frequency.exponentialRampToValueAtTime(80*n,e.currentTime+.04),i.gain.setValueAtTime(.08,e.currentTime),i.gain.exponentialRampToValueAtTime(.001,e.currentTime+.04),t.connect(i),i.connect(e.destination),t.start(),t.stop(e.currentTime+.05)}catch{}}function yc(){try{const n=Mc();if(!n)return;const e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(150,e+.06),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.06),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.07);const s=n.createOscillator(),r=n.createGain();s.type="square",s.frequency.setValueAtTime(220,e+.08),s.frequency.exponentialRampToValueAtTime(40,e+.16),r.gain.setValueAtTime(.15,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+.16),s.connect(r),r.connect(n.destination),s.start(e+.08),s.stop(e+.18);for(let o=0;o<4;o++){const a=e+.22+o*.035,l=n.createOscillator(),c=n.createGain();l.type="sawtooth",l.frequency.setValueAtTime(320+o*40,a),l.frequency.exponentialRampToValueAtTime(120,a+.02),c.gain.setValueAtTime(.07,a),c.gain.exponentialRampToValueAtTime(.001,a+.025),l.connect(c),c.connect(n.destination),l.start(a),l.stop(a+.03)}}catch{}}let Vt="ca",Pt=!1,nt=0,Yn=0,It=!0,Wt=!1;const ct=ts.disks,kt=[],zn=document.getElementById("hero"),mt=document.getElementById("canvas-container"),Ta=document.getElementById("three-canvas"),pl=document.getElementById("disk-tabs"),Al=document.getElementById("active-disk-num"),Hs=document.getElementById("active-disk-title"),Gs=document.getElementById("active-disk-role"),ml=document.getElementById("open-disk-modal-btn"),Qr=document.getElementById("sound-toggle"),gl=document.getElementById("theme-toggle"),El=document.getElementById("theme-icon"),Qs=document.getElementById("ui-theme-btn"),vl=document.getElementById("scroll-prompt"),Sl=document.getElementById("nav-bio"),xl=document.getElementById("nav-disks"),Tc=document.querySelectorAll(".lang-btn"),_t=document.getElementById("transition-curtain"),$n=document.getElementById("viewport-container"),rn=document.getElementById("stage-detail-container"),Ml=document.getElementById("stage-back-btn"),cg=document.getElementById("stage-back-text"),ug=document.getElementById("stage-badge"),hg=document.getElementById("stage-title"),dg=document.getElementById("stage-subtitle"),fg=document.getElementById("stage-logo-img"),pg=document.getElementById("meta-role-label"),Ag=document.getElementById("meta-role-val"),mg=document.getElementById("meta-entity-label"),gg=document.getElementById("meta-entity-val"),Eg=document.getElementById("meta-period-label"),vg=document.getElementById("meta-period-val"),Sg=document.getElementById("meta-location-label"),xg=document.getElementById("meta-location-val"),Mg=document.getElementById("stage-website-link"),yg=document.getElementById("stage-website-text"),Tg=document.getElementById("stage-download-cv"),Cg=document.getElementById("stage-sec-1-label"),bg=document.getElementById("stage-overview-text"),_g=document.getElementById("stage-sec-2-label"),yl=document.getElementById("stage-metrics-row"),Ig=document.getElementById("stage-sec-3-label"),Tl=document.getElementById("stage-highlights-list"),Rg=document.getElementById("stage-sec-4-label"),Cl=document.getElementById("stage-stack-wrap");document.getElementById("stage-next-banner");const wg=document.getElementById("up-next-tag"),sa=document.getElementById("up-next-title"),bl=document.getElementById("up-next-btn"),Pg=document.getElementById("up-next-btn-text"),Ca=new rg({duration:1.2,easing:n=>Math.min(1,1.001-Math.pow(2,-10*n)),smoothWheel:!0});function Cc(n){Ca.raf(n),requestAnimationFrame(Cc)}requestAnimationFrame(Cc);const _l=document.getElementById("gallery");window.addEventListener("scroll",()=>{if($n.style.display==="none")return;const n=window.scrollY,e=window.innerHeight;if(zn&&_l){const t=window.innerWidth<=768,s=_l.offsetTop-n,r=t?Math.min(e*.9,550):e*.9,o=Math.min(1,Math.max(0,(r-s)/r));if(t)zn.style.transform=`translateY(${-o*45}px)`,zn.style.opacity=(1-o*.95).toFixed(3),zn.style.pointerEvents=o>.65?"none":"auto";else{const a=-o*460,l=-o*70,c=o*8,u=1-o*.82;zn.style.transform=`translate3d(0, ${l}px, ${a}px) rotateX(${c}deg)`,zn.style.opacity=u.toFixed(3),zn.style.pointerEvents=o>.6?"none":"auto"}}});vl&&vl.addEventListener("click",()=>{const n=document.getElementById("gallery");n&&Ca.scrollTo(n,{offset:-30})});const wt=new am;wt.background=new Ue("#0c0d10");wt.fog=new ma("#0c0d10",.035);const Lt=new Ft(38,mt.clientWidth/mt.clientHeight,.1,100);Lt.position.set(0,.12,8.4);const $t=new lc({canvas:Ta,antialias:!0,powerPreference:"high-performance"});$t.setSize(mt.clientWidth,mt.clientHeight);$t.setPixelRatio(Math.min(window.devicePixelRatio,2));$t.outputColorSpace=lt;$t.toneMapping=Pl;$t.toneMappingExposure=1.45;$t.shadowMap.enabled=!0;$t.shadowMap.type=Rl;const bc=new Yr($t);bc.compileEquirectangularShader();function Lg(n=!1){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);return n?(i.addColorStop(0,"#f1f5f9"),i.addColorStop(.5,"#cbd5e1"),i.addColorStop(1,"#94a3b8")):(i.addColorStop(0,"#2b313e"),i.addColorStop(.5,"#12141a"),i.addColorStop(1,"#050608")),t.fillStyle=i,t.fillRect(0,0,1024,512),[{y:.18,h:.08,op:.95},{y:.38,h:.06,op:.7},{y:.65,h:.09,op:.85}].forEach(r=>{const o=512*r.y,a=512*r.h,l=t.createLinearGradient(0,o-a,0,o+a);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.5,`rgba(255,255,255,${r.op})`),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(0,o-a,1024,a*2)}),e}function _c(n=!1){const e=new cc(Lg(n));e.mapping=Ns;const t=bc.fromEquirectangular(e);wt.environment=t.texture,wt.environmentIntensity=n?1.5:1.35,e.dispose()}_c(!1);const Ug=new Jm("#ffffff",1.8);wt.add(Ug);const Bi=new ya("#ffffff",4.4);Bi.position.set(4,7,5);Bi.castShadow=!0;Bi.shadow.mapSize.width=2048;Bi.shadow.mapSize.height=2048;Bi.shadow.bias=-6e-4;wt.add(Bi);const Ic=new ya("#e0f2fe",2.8);Ic.position.set(-5,-2,4);wt.add(Ic);const Rc=new ya("#38bdf8",3.4);Rc.position.set(0,4,-5);wt.add(Rc);const Bg=new js(35,35),wc=new Vm({opacity:.25}),tr=new Ye(Bg,wc);tr.rotation.x=-Math.PI/2;tr.position.y=-2.65;tr.receiveShadow=!0;wt.add(tr);const Wn=lg(Pt);wt.add(Wn.group);ct.forEach(n=>{const e=og(n,Vt,Pt);wt.add(e),kt.push(e)});function Pc(){const n=mt.clientWidth||window.innerWidth,e=mt.clientHeight||window.innerHeight,t=n/Math.max(e,1);let i=8.4,s=.12,r=-.15,o=1,a=3.35;return t<.65?(i=13.5,s=.3,r=-.42,o=.88,a=2.45):t<.9?(i=11.5,s=.22,r=-.28,o=.92,a=2.75):t<1.25&&(i=9.8,s=.16,r=-.2,o=.96,a=3),{aspect:t,targetZ:i,targetY:s,lookAtY:r,diskScale:o,spacing:a}}function Di(n=!0){const e=Pc(),t=e.spacing,i=1.25,s=.16;kt.forEach((a,l)=>{if(a.userData.isInserting)return;const c=l-nt,u=c*t,d=-Math.abs(c)*i,h=-c*s,A=c===0?-.07:.04,m=(c===0?1.08:.95)*e.diskScale;n?(a.userData.targetX=u,a.userData.targetZ=d,a.userData.targetRotY=h,a.userData.targetRotX=A,a.userData.targetScale=m):(a.position.x=u,a.position.z=d,a.rotation.y=h,a.rotation.x=A,a.scale.setScalar(m))});const r=ct[nt],o=r.content[Vt]||r.content.ca;Al&&(Al.textContent=r.diskNumber),Hs&&(Hs.textContent=o.title),Gs&&(Gs.textContent=`${o.subtitle} (${o.period})`),document.querySelectorAll(".disk-tab-btn").forEach((a,l)=>{a.classList.toggle("active",l===nt)})}Di(!1);function Lc(){pl.innerHTML="",ct.forEach((n,e)=>{const t=n.content[Vt]||n.content.ca,i=document.createElement("button");i.className=`disk-tab-btn ${e===nt?"active":""}`,i.textContent=`${n.diskNumber} // ${t.title}`,i.addEventListener("click",()=>{Yt(e),It&&an(1.1)}),pl.appendChild(i)})}Lc();function Yt(n){n<0||n>=ct.length||(nt=n,Di(!0))}function Dg(){Pt=!Pt,document.body.classList.toggle("light-theme",Pt);const n=Pt?"#f8fafc":"#0c0d10";wt.background.set(n),wt.fog.color.set(n),wc.opacity=Pt?.15:.25,_c(Pt),Wn.setTheme(Pt);const e=ts.ui[Vt];El&&(El.textContent=Pt?"🌙":"☀️"),Qs&&(Qs.textContent=Pt?e.themeDarkBtn:e.themeLightBtn),kt.forEach(t=>{t.userData&&t.userData.setTheme&&t.userData.setTheme(Pt)}),It&&an(1.25)}gl&&gl.addEventListener("click",Dg);function Ng(n){if(!ts.ui[n])return;Vt=n,Tc.forEach(s=>{s.classList.toggle("active",s.getAttribute("data-lang")===Vt)});const e=ts.ui[Vt];document.getElementById("ui-role-tag").textContent=e.roleTag,document.getElementById("nav-bio").textContent=e.navBio,document.getElementById("nav-disks").textContent=e.navDisks,document.getElementById("ui-download-cv").textContent=e.downloadCv,document.getElementById("ui-status-available").textContent=e.statusAvailable,document.getElementById("ui-location-presential").textContent=e.locationPresential,document.getElementById("ui-age-years").textContent=e.ageYears,document.getElementById("ui-degree-title").textContent=e.degreeTitle,document.getElementById("ui-hero-greeting").textContent=e.heroGreeting,document.getElementById("ui-hero-subtitle").textContent=e.heroSubtitle,document.getElementById("ui-hero-bio").innerHTML=e.heroBio,document.getElementById("ui-passion-title-1").textContent=e.passionsTitle1,document.getElementById("ui-passion-desc-1").textContent=e.passionsDesc1,document.getElementById("ui-passion-title-2").textContent=e.passionsTitle2,document.getElementById("ui-passion-desc-2").textContent=e.passionsDesc2,document.getElementById("ui-passion-title-3").textContent=e.passionsTitle3,document.getElementById("ui-passion-desc-3").textContent=e.passionsDesc3,document.getElementById("ui-contact-direct").textContent=e.contactDirect,document.getElementById("ui-scroll-prompt").textContent=e.scrollPrompt,document.getElementById("ui-gallery-heading").textContent=e.galleryHeading,document.getElementById("ui-gallery-subheading").textContent=e.gallerySubheading,document.querySelector("#ui-interact-hint span").textContent=e.interactHint,document.getElementById("ui-inspect-btn").textContent=e.inspectBtn,Qs&&(Qs.textContent=Pt?e.themeDarkBtn:e.themeLightBtn),rn.classList.contains("visible")&&rs(ct[Yn]),Lc(),kt.forEach(s=>{s.userData&&s.userData.updateLanguage&&s.userData.updateLanguage(Vt,Pt)});const t=ct[nt],i=t.content[Vt]||t.content.ca;Hs&&(Hs.textContent=i.title),Gs&&(Gs.textContent=`${i.subtitle} (${i.period})`),It&&an(1.2)}Tc.forEach(n=>{n.addEventListener("click",()=>{Ng(n.getAttribute("data-lang"))})});function rs(n){if(!n)return;const e=n.content[Vt]||n.content.ca,t=ts.ui[Vt];cg.textContent=t.backToDisks,ug.textContent=`DISK ${n.diskNumber} · HD 1.44MB · ${e.badge||"STATUS: ONLINE"}`,hg.textContent=e.title,dg.textContent=e.subtitle,fg.src=n.brandLogo,pg.textContent=t.specsRole,Ag.textContent=e.subtitle,mg.textContent=t.specsEntity,gg.textContent=e.badge||e.title,Eg.textContent=t.specsPeriod,vg.textContent=e.period,Sg.textContent=t.specsLocation,xg.textContent=Vt==="en"?"Barcelona (100% In-Person)":"Barcelona (100% Presencial)",Mg.href=n.websiteUrl,yg.textContent=t.visitWebsite,Tg.textContent=t.downloadCv,Cg.textContent=t.modalSection1,bg.innerHTML=e.description,_g.textContent=t.modalSection2,yl.innerHTML="",e.metrics.forEach(o=>{const a=document.createElement("div");a.className="stage-metric-card",a.innerHTML=`
      <div class="stage-metric-num">${o.value}</div>
      <div class="stage-metric-title">${o.label}</div>
    `,yl.appendChild(a)}),Ig.textContent=t.modalSection3,Tl.innerHTML="",e.highlights.forEach(o=>{const a=document.createElement("li");a.className="stage-highlight-item",a.innerHTML=`
      <span class="stage-bullet">▸</span>
      <span>${o}</span>
    `,Tl.appendChild(a)}),Rg.textContent=t.modalSection4,Cl.innerHTML="",n.stack.forEach(o=>{const a=document.createElement("span");a.className="stage-stack-chip",a.textContent=o,Cl.appendChild(a)});const i=(Yn+1)%ct.length,s=ct[i],r=s.content[Vt]||s.content.ca;wg.textContent=t.upNextLabel,sa.textContent=`${s.diskNumber} // ${r.title} →`,Pg.textContent=t.upNextAction}function ns(n){if(Wt)return;Wt=!0,Yn=n;const e=kt[n];e.userData.isInserting=!0,Wn.openFlap(),It&&yc();const t=e.position.y,i=performance.now(),s=650;function r(o){const a=o-i,l=Math.min(1,a/s),c=l*l*(3-2*l);e.position.x=ni.lerp(e.position.x,0,.2),e.position.z=ni.lerp(e.position.z,.4,.2),e.rotation.x=ni.lerp(e.rotation.x,-.02,.2),e.rotation.y=ni.lerp(e.rotation.y,0,.2),e.rotation.z=ni.lerp(e.rotation.z,0,.2),e.position.y=ni.lerp(t,-2.15,c),l>.35&&Wn.setLed(!0),l<1&&requestAnimationFrame(r)}requestAnimationFrame(r),setTimeout(()=>{_t.classList.remove("exit"),_t.classList.add("enter")},380),setTimeout(()=>{rs(ct[n]),$n.style.display="none",rn.classList.add("visible"),window.scrollTo({top:0,behavior:"instant"}),window.history.pushState({stage:ct[n].id},"",`#stage/${ct[n].id}`),e.userData.isInserting=!1,e.position.y=0,Di(!1),Wn.closeFlap(),Wn.setLed(!1),setTimeout(()=>{_t.classList.remove("enter"),_t.classList.add("exit"),setTimeout(()=>{_t.classList.remove("exit"),Wt=!1},550)},120)},880)}function nr(n="gallery"){Wt||(Wt=!0,It&&an(.95),_t.classList.remove("exit"),_t.classList.add("enter"),setTimeout(()=>{rn.classList.remove("visible"),$n.style.display="block",window.history.pushState(null,"",`#${n}`),Di(!1),$t.render(wt,Lt);const e=document.getElementById(n);e&&Ca.scrollTo(e,{immediate:!0}),setTimeout(()=>{_t.classList.remove("enter"),_t.classList.add("exit"),setTimeout(()=>{_t.classList.remove("exit"),Wt=!1},550)},120)},500))}function Uc(){if(Wt)return;Wt=!0;const n=(Yn+1)%ct.length;Yn=n,nt=n,It&&yc(),_t.classList.remove("exit"),_t.classList.add("enter"),setTimeout(()=>{rs(ct[n]),window.scrollTo({top:0,behavior:"instant"}),window.history.pushState({stage:ct[n].id},"",`#stage/${ct[n].id}`),Di(!1),setTimeout(()=>{_t.classList.remove("enter"),_t.classList.add("exit"),setTimeout(()=>{_t.classList.remove("exit"),Wt=!1},550)},120)},500)}Ml&&Ml.addEventListener("click",()=>nr("gallery"));bl&&bl.addEventListener("click",Uc);sa&&sa.addEventListener("click",Uc);Sl&&Sl.addEventListener("click",n=>{rn.classList.contains("visible")&&(n.preventDefault(),nr("hero"))});xl&&xl.addEventListener("click",n=>{rn.classList.contains("visible")&&(n.preventDefault(),nr("gallery"))});window.addEventListener("popstate",n=>{const e=window.location.hash;if(e.startsWith("#stage/")){const t=e.replace("#stage/",""),i=ct.findIndex(s=>s.id===t);i!==-1&&(Yn=i,nt=i,$n.style.display="none",rn.classList.add("visible"),rs(ct[i]),window.scrollTo(0,0))}else rn.classList.contains("visible")&&(rn.classList.remove("visible"),$n.style.display="block")});if(window.location.hash.startsWith("#stage/")){const n=window.location.hash.replace("#stage/",""),e=ct.findIndex(t=>t.id===n);e!==-1&&(Yn=e,nt=e,$n.style.display="none",rn.classList.add("visible"),rs(ct[e]))}const Ws=new Zm,In=new le(-999,-999);let ir=!1,ra=0,Us=0,qi=null;const Xs={x:0,y:0};mt.addEventListener("mousemove",n=>{const e=Ta.getBoundingClientRect();In.x=(n.clientX-e.left)/e.width*2-1,In.y=-((n.clientY-e.top)/e.height)*2+1,Xs.x=In.x*.45,Xs.y=In.y*.25,ir&&(Us=n.clientX-ra,Math.abs(Us)>65&&(Us>0?Yt(nt-1):Yt(nt+1),ra=n.clientX,Us=0,It&&an(.9)))});mt.addEventListener("mousedown",n=>{ir=!0,ra=n.clientX});window.addEventListener("mouseup",()=>{ir=!1});let aa=0,oa=0,qs=!1,ba=!1;mt.addEventListener("touchstart",n=>{n.touches.length===1&&(qs=!0,ba=!1,aa=n.touches[0].clientX,oa=n.touches[0].clientY)},{passive:!0});mt.addEventListener("touchmove",n=>{if(!qs||n.touches.length!==1)return;const e=n.touches[0],t=e.clientX-aa;e.clientY-oa,Math.abs(t)>8&&(ba=!0),Math.abs(t)>38&&(t>0?Yt(nt-1):Yt(nt+1),aa=e.clientX,oa=e.clientY,It&&an(.9))},{passive:!0});mt.addEventListener("touchend",n=>{if(qs&&!ba&&!Wt){const e=n.changedTouches[0],t=Ta.getBoundingClientRect();In.x=(e.clientX-t.left)/t.width*2-1,In.y=-((e.clientY-t.top)/t.height)*2+1,Ws.setFromCamera(In,Lt);const i=Ws.intersectObjects(kt,!0);if(i.length>0){let s=i[0].object;for(;s.parent&&!kt.includes(s);)s=s.parent;const r=kt.indexOf(s);r!==-1&&(r!==nt?Yt(r):ns(r))}else ns(nt)}qs=!1});mt.addEventListener("wheel",n=>{(Math.abs(n.deltaX)>25||Math.abs(n.deltaY)>40)&&(n.preventDefault(),n.deltaX>20||n.deltaY>30?Yt(nt+1):Yt(nt-1),It&&an(1))},{passive:!1});mt.addEventListener("click",()=>{if(!Wt&&qi){const n=kt.indexOf(qi);n!==-1&&(n!==nt?Yt(n):ns(n))}});window.addEventListener("keydown",n=>{if(rn.classList.contains("visible")){n.key==="Escape"&&nr("gallery");return}n.key==="ArrowRight"?(Yt(nt+1),It&&an()):n.key==="ArrowLeft"?(Yt(nt-1),It&&an()):n.key==="Enter"&&ns(nt)});ml&&ml.addEventListener("click",()=>{ns(nt)});Qr&&Qr.addEventListener("click",()=>{It=!It,Qr.style.opacity=It?"1":"0.4",It&&an(1.2)});const Og=new Km;function Bc(){requestAnimationFrame(Bc);const n=Og.getElapsedTime();Wn.update();const e=Pc();if(Lt.position.z+=(e.targetZ-Lt.position.z)*.08,Lt.position.x+=(Xs.x-Lt.position.x)*.05,Lt.position.y+=(e.targetY+Xs.y-Lt.position.y)*.05,Lt.lookAt(0,e.lookAtY,0),kt.forEach((t,i)=>{if(!t.userData.isInserting&&t.userData.targetX!==void 0){t.position.x+=(t.userData.targetX-t.position.x)*.1,t.position.z+=(t.userData.targetZ-t.position.z)*.1,t.rotation.y+=(t.userData.targetRotY-t.rotation.y)*.1,t.rotation.x+=(t.userData.targetRotX-t.rotation.x)*.1,t.userData.targetScale&&t.scale.setScalar(t.scale.x+(t.userData.targetScale-t.scale.x)*.1);const r=qi===t?.35:0;i===nt?(t.position.y=Math.sin(n*1.8)*.07+r,t.rotation.z=Math.sin(n*1.2)*.015):(t.position.y+=(r-t.position.y)*.1,t.rotation.z+=(0-t.rotation.z)*.1)}}),!Wt&&$n.style.display!=="none"){Ws.setFromCamera(In,Lt);const t=Ws.intersectObjects(kt,!0);if(t.length>0){let i=t[0].object;for(;i.parent&&!kt.includes(i);)i=i.parent;kt.includes(i)&&(qi=i,mt.style.cursor="pointer")}else qi=null,mt.style.cursor=ir?"grabbing":"grab"}$t.render(wt,Lt)}Bc();window.addEventListener("resize",()=>{const n=mt.clientWidth||window.innerWidth,e=mt.clientHeight||window.innerHeight;Lt.aspect=n/Math.max(e,1),Lt.updateProjectionMatrix(),$t.setSize(n,e),Di(!1)});
