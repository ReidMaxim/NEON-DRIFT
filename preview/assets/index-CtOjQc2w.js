const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/laboratory-BqnLuQ7i.js","assets/assemblies-DjNBLZ6U.js"])))=>i.map(i=>d[i]);
import{s as ga,a as Ts,i as bs,b as Li,c as sl,r as Ye,o as jl,l as zr,e as Ql,g as tc,d as ec,f as nc,w as Wa,h as al,p as ai,j as ic,k as rc,m as Hr,n as sc,q as ac,t as Xa,u as oc,v as qa}from"./assemblies-DjNBLZ6U.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const lc="modulepreload",cc=function(i){return"/NEON-DRIFT/preview/"+i},Ya={},uc=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=l(e.map(c=>{if(c=cc(c),c in Ya)return;Ya[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":lc,u||(p.as="script"),p.crossOrigin="",p.href=c,o&&p.setAttribute("nonce",o),document.head.appendChild(p),u)return new Promise((f,_)=>{p.addEventListener("load",f),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};const _a="180",hc=0,Za=1,fc=2,ol=1,dc=2,un=3,En=0,Ce=1,We=2,hn=0,li=1,As=2,Ka=3,$a=4,pc=5,Nn=100,mc=101,gc=102,_c=103,vc=104,xc=200,Mc=201,Sc=202,yc=203,ws=204,Rs=205,Ec=206,Tc=207,bc=208,Ac=209,wc=210,Rc=211,Cc=212,Pc=213,Dc=214,Cs=0,Ps=1,Ds=2,ui=3,Ls=4,Us=5,Is=6,Ns=7,ll=0,Lc=1,Uc=2,yn=0,cl=1,ul=2,hl=3,va=4,fl=5,dl=6,pl=7,ml=300,hi=301,fi=302,Fs=303,Os=304,Dr=306,br=1e3,On=1001,Bs=1002,Oe=1003,Ic=1004,Wi=1005,je=1006,Vr=1007,Bn=1008,en=1009,gl=1010,_l=1011,Ui=1012,xa=1013,Hn=1014,Qe=1015,fn=1016,Ma=1017,Sa=1018,Ii=1020,vl=35902,xl=35899,Ml=1021,Sl=1022,qe=1023,Ni=1026,Fi=1027,ya=1028,Ea=1029,yl=1030,Ta=1031,ba=1033,xr=33776,Mr=33777,Sr=33778,yr=33779,zs=35840,Hs=35841,Vs=35842,Gs=35843,ks=36196,Ws=37492,Xs=37496,qs=37808,Ys=37809,Zs=37810,Ks=37811,$s=37812,Js=37813,js=37814,Qs=37815,ta=37816,ea=37817,na=37818,ia=37819,ra=37820,sa=37821,aa=36492,oa=36494,la=36495,ca=36283,ua=36284,ha=36285,fa=36286,Nc=3200,Fc=3201,El=0,Oc=1,Sn="",Ee="srgb",di="srgb-linear",Ar="linear",$t="srgb",Xn=7680,Ja=519,Bc=512,zc=513,Hc=514,Tl=515,Vc=516,Gc=517,kc=518,Wc=519,ja=35044,Qa="300 es",tn=2e3,wr=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,da=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function kr(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=s[a+0],f=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==p||c!==f||u!==_){let m=1-o;const d=l*p+c*f+u*_+h*v,A=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const P=Math.sqrt(b),C=Math.atan2(P,d*A);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const x=o*A;if(l=l*m+p*x,c=c*m+f*x,u=u*m+_*x,h=h*m+v*x,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],p=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*f-c*p,t[e+1]=l*_+u*p+c*h-o*f,t[e+2]=c*_+u*f+o*p-l*h,t[e+3]=u*_-o*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),p=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*u*h+c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h-p*f*_;break;case"YXZ":this._x=p*u*h+c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h+p*f*_;break;case"ZXY":this._x=p*u*h-c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h-p*f*_;break;case"ZYX":this._x=p*u*h-c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h+p*f*_;break;case"YZX":this._x=p*u*h+c*f*_,this._y=c*f*h+p*u*_,this._z=c*u*_-p*f*h,this._w=c*u*h-p*f*_;break;case"XZY":this._x=p*u*h-c*f*_,this._y=c*f*h-p*u*_,this._z=c*u*_+p*f*h,this._w=c*u*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new O,to=new Vi;class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],_=n[8],v=r[0],m=r[3],d=r[6],A=r[1],b=r[4],x=r[7],P=r[2],C=r[5],D=r[8];return s[0]=a*v+o*A+l*P,s[3]=a*m+o*b+l*C,s[6]=a*d+o*x+l*D,s[1]=c*v+u*A+h*P,s[4]=c*m+u*b+h*C,s[7]=c*d+u*x+h*D,s[2]=p*v+f*A+_*P,s[5]=p*m+f*b+_*C,s[8]=p*d+f*x+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,p=o*l-u*s,f=c*s-a*l,_=e*h+n*p+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(r*c-u*n)*v,t[2]=(o*n-r*a)*v,t[3]=p*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ht;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qc(){const i=Rr("canvas");return i.style.display="block",i}const eo={};function Oi(i){i in eo||(eo[i]=!0,console.warn(i))}function Yc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const no=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zc(){const i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===$t&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sn?Ar:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:t,whitePoint:n,transfer:Ar,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}const qt=Zc();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Kc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qn===void 0&&(qn=Rr("canvas")),qn.width=t.width,qn.height=t.height;const r=qn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $c=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qr(r[a].image)):s.push(qr(r[a]))}else s=qr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;const Yr=new O;class Te extends gi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=On,r=On,s=je,a=Bn,o=qe,l=en,c=Te.DEFAULT_ANISOTROPY,u=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Hi(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=ml;Te.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,x=(f+1)/2,P=(d+1)/2,C=(u+p)/4,D=(h+v)/4,N=(_+m)/4;return b>x&&b>P?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=D/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=N/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=N/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-v)/A,this.z=(p-u)/A,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jc extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Te(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Aa(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Al extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qc extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(s,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),qi.subVectors(this.max,Si),Yn.subVectors(t.a,Si),Zn.subVectors(t.b,Si),Kn.subVectors(t.c,Si),mn.subVectors(Zn,Yn),gn.subVectors(Kn,Zn),wn.subVectors(Yn,Kn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-wn.z,wn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,wn.z,0,-wn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-wn.y,wn.x,0];return!Zr(e,Yn,Zn,Kn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,Yn,Zn,Kn,qi))?!1:(Yi.crossVectors(mn,gn),e=[Yi.x,Yi.y,Yi.z],Zr(e,Yn,Zn,Kn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sn=[new O,new O,new O,new O,new O,new O,new O,new O],Ve=new O,Xi=new Vn,Yn=new O,Zn=new O,Kn=new O,mn=new O,gn=new O,wn=new O,Si=new O,qi=new O,Yi=new O,Rn=new O;function Zr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const tu=new Vn,yi=new O,Kr=new O;class Gn{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Kr)),this.expandByPoint(yi.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const an=new O,$r=new O,Zi=new O,_n=new O,Jr=new O,Ki=new O,jr=new O;class wa{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){$r.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub($r);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Zi),o=_n.dot(this.direction),l=-_n.dot(Zi),c=_n.lengthSq(),u=Math.abs(1-a*a);let h,p,f,_;if(u>0)if(h=a*l-o,p=a*o-l,_=s*u,h>=0)if(p>=-_)if(p<=_){const v=1/u;h*=v,p*=v,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($r).addScaledVector(Zi,p),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,r,s){Jr.subVectors(e,t),Ki.subVectors(n,t),jr.crossVectors(Jr,Ki);let a=this.direction.dot(jr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const l=o*this.direction.dot(Ki.crossVectors(_n,Ki));if(l<0)return null;const c=o*this.direction.dot(Jr.cross(_n));if(c<0||l+c>a)return null;const u=-o*_n.dot(jr);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,r,s,a,o,l,c,u,h,p,f,_,v,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,p,f,_,v,m)}set(t,e,n,r,s,a,o,l,c,u,h,p,f,_,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/$n.setFromMatrixColumn(t,0).length(),s=1/$n.setFromMatrixColumn(t,1).length(),a=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=a*u,f=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=p-v*c,e[9]=-o*l,e[2]=v-p*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,f=l*h,_=c*u,v=c*h;e[0]=p+v*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=v+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,f=l*h,_=c*u,v=c*h;e[0]=p-v*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=v-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,f=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=_*c-f,e[8]=p*c+v,e[1]=l*h,e[5]=v*c+p,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-p*h,e[8]=_*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+_,e[10]=p-v*h}else if(t.order==="XZY"){const p=a*l,f=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+v,e[5]=a*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*u,e[10]=v*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){const r=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),vn.crossVectors(n,Ue),vn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),vn.crossVectors(n,Ue)),vn.normalize(),$i.crossVectors(Ue,vn),r[0]=vn.x,r[4]=$i.x,r[8]=Ue.x,r[1]=vn.y,r[5]=$i.y,r[9]=Ue.y,r[2]=vn.z,r[6]=$i.z,r[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],_=n[2],v=n[6],m=n[10],d=n[14],A=n[3],b=n[7],x=n[11],P=n[15],C=r[0],D=r[4],N=r[8],y=r[12],g=r[1],T=r[5],w=r[9],U=r[13],M=r[2],I=r[6],L=r[10],G=r[14],B=r[3],Q=r[7],tt=r[11],J=r[15];return s[0]=a*C+o*g+l*M+c*B,s[4]=a*D+o*T+l*I+c*Q,s[8]=a*N+o*w+l*L+c*tt,s[12]=a*y+o*U+l*G+c*J,s[1]=u*C+h*g+p*M+f*B,s[5]=u*D+h*T+p*I+f*Q,s[9]=u*N+h*w+p*L+f*tt,s[13]=u*y+h*U+p*G+f*J,s[2]=_*C+v*g+m*M+d*B,s[6]=_*D+v*T+m*I+d*Q,s[10]=_*N+v*w+m*L+d*tt,s[14]=_*y+v*U+m*G+d*J,s[3]=A*C+b*g+x*M+P*B,s[7]=A*D+b*T+x*I+P*Q,s[11]=A*N+b*w+x*L+P*tt,s[15]=A*y+b*U+x*G+P*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],f=t[14],_=t[3],v=t[7],m=t[11],d=t[15];return _*(+s*l*h-r*c*h-s*o*p+n*c*p+r*o*f-n*l*f)+v*(+e*l*f-e*c*p+s*a*p-r*a*f+r*c*u-s*l*u)+m*(+e*c*h-e*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+d*(-r*o*u-e*l*h+e*o*p+r*a*h-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],f=t[11],_=t[12],v=t[13],m=t[14],d=t[15],A=h*m*c-v*p*c+v*l*f-o*m*f-h*l*d+o*p*d,b=_*p*c-u*m*c-_*l*f+a*m*f+u*l*d-a*p*d,x=u*v*c-_*h*c+_*o*f-a*v*f-u*o*d+a*h*d,P=_*h*l-u*v*l-_*o*p+a*v*p+u*o*m-a*h*m,C=e*A+n*b+r*x+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=A*D,t[1]=(v*p*s-h*m*s-v*r*f+n*m*f+h*r*d-n*p*d)*D,t[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*d+n*l*d)*D,t[3]=(h*l*s-o*p*s-h*r*c+n*p*c+o*r*f-n*l*f)*D,t[4]=b*D,t[5]=(u*m*s-_*p*s+_*r*f-e*m*f-u*r*d+e*p*d)*D,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*d-e*l*d)*D,t[7]=(a*p*s-u*l*s+u*r*c-e*p*c-a*r*f+e*l*f)*D,t[8]=x*D,t[9]=(_*h*s-u*v*s-_*n*f+e*v*f+u*n*d-e*h*d)*D,t[10]=(a*v*s-_*o*s+_*n*c-e*v*c-a*n*d+e*o*d)*D,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*D,t[12]=P*D,t[13]=(u*v*r-_*h*r+_*n*p-e*v*p-u*n*m+e*h*m)*D,t[14]=(_*o*r-a*v*r-_*n*l+e*v*l+a*n*m-e*o*m)*D,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*p+e*o*p)*D,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,p=s*c,f=s*u,_=s*h,v=a*u,m=a*h,d=o*h,A=l*c,b=l*u,x=l*h,P=n.x,C=n.y,D=n.z;return r[0]=(1-(v+d))*P,r[1]=(f+x)*P,r[2]=(_-b)*P,r[3]=0,r[4]=(f-x)*C,r[5]=(1-(p+d))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(_+b)*D,r[9]=(m-A)*D,r[10]=(1-(p+v))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const a=$n.set(r[4],r[5],r[6]).length(),o=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ge.copy(this);const c=1/s,u=1/a,h=1/o;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=u,Ge.elements[5]*=u,Ge.elements[6]*=u,Ge.elements[8]*=h,Ge.elements[9]*=h,Ge.elements[10]*=h,e.setFromRotationMatrix(Ge),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=tn,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-r),p=(e+t)/(e-t),f=(n+r)/(n-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===tn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===wr)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=tn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-r),p=-(e+t)/(e-t),f=-(n+r)/(n-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===tn)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===wr)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new O,Ge=new Kt,eu=new O(0,0,0),nu=new O(1,1,1),vn=new O,$i=new O,Ue=new O,ro=new Kt,so=new Vi;class nn{constructor(t=0,e=0,n=0,r=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ro,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return so.setFromEuler(this),this.setFromQuaternion(so,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iu=0;const ao=new O,Jn=new Vi,on=new Kt,Ji=new O,Ei=new O,ru=new O,su=new Vi,oo=new O(1,0,0),lo=new O(0,1,0),co=new O(0,0,1),uo={type:"added"},au={type:"removed"},jn={type:"childadded",child:null},Qr={type:"childremoved",child:null};class re extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new O,e=new nn,n=new Vi,r=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ht}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(oo,t)}rotateY(t){return this.rotateOnAxis(lo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return ao.copy(t).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oo,t)}translateY(t){return this.translateOnAxis(lo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ei,Ji,this.up):on.lookAt(Ji,Ei,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(on),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uo),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uo),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}re.DEFAULT_UP=new O(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new O,ln=new O,ts=new O,cn=new O,Qn=new O,ti=new O,ho=new O,es=new O,ns=new O,is=new O,rs=new Qt,ss=new Qt,as=new Qt;class Xe{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ke.subVectors(r,e),ln.subVectors(n,e),ts.subVectors(t,e);const a=ke.dot(ke),o=ke.dot(ln),l=ke.dot(ts),c=ln.dot(ln),u=ln.dot(ts),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,f=(c*l-o*u)*p,_=(a*u-o*l)*p;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return rs.setScalar(0),ss.setScalar(0),as.setScalar(0),rs.fromBufferAttribute(t,e),ss.fromBufferAttribute(t,n),as.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(rs,s.x),a.addScaledVector(ss,s.y),a.addScaledVector(as,s.z),a}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),ln.subVectors(t,e),ke.cross(ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),ke.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ti.subVectors(s,n),es.subVectors(t,n);const l=Qn.dot(es),c=ti.dot(es);if(l<=0&&c<=0)return e.copy(n);ns.subVectors(t,r);const u=Qn.dot(ns),h=ti.dot(ns);if(u>=0&&h<=u)return e.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Qn,a);is.subVectors(t,s);const f=Qn.dot(is),_=ti.dot(is);if(_>=0&&f<=_)return e.copy(s);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ti,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return ho.subVectors(s,r),o=(h-u)/(h-u+(f-_)),e.copy(r).addScaledVector(ho,o);const d=1/(m+v+p);return a=v*d,o=p*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=Xc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=os(a,s,t+1/3),this.g=os(a,s,t),this.b=os(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return qt.workingToColorSpace(ye.copy(this),t),Math.round(Wt(ye.r*255,0,255))*65536+Math.round(Wt(ye.g*255,0,255))*256+Math.round(Wt(ye.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(ye.copy(this),e);const n=ye.r,r=ye.g,s=ye.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Ee){qt.workingToColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,r=ye.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(ji);const n=kr(xn.h,ji.h,e),r=kr(xn.s,ji.s,e),s=kr(xn.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ot;Ot.NAMES=Rl;let ou=0;class kn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=li,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=Rs,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ws&&(n.blendSrc=this.blendSrc),this.blendDst!==Rs&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pe extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new O,Qi=new gt;let lu=0;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ja&&(t.usage=this.usage),t}}class Cl extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cu=0;const He=new Kt,ls=new re,ei=new O,Ie=new Vn,Ti=new Vn,ve=new O;class xe extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Pl:Cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ls.lookAt(t),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ie.setFromBufferAttribute(s),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ie.min,Ti.min),Ie.expandByPoint(ve),ve.addVectors(Ie.max,Ti.max),Ie.expandByPoint(ve)):(Ie.expandByPoint(Ti.min),Ie.expandByPoint(Ti.max))}Ie.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),ve.add(ei)),r=Math.max(r,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new O,l[N]=new O;const c=new O,u=new O,h=new O,p=new gt,f=new gt,_=new gt,v=new O,m=new O;function d(N,y,g){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,g),u.sub(c),h.sub(c),f.sub(p),_.sub(p);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(T),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(T),o[N].add(v),o[y].add(v),o[g].add(v),l[N].add(m),l[y].add(m),l[g].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let N=0,y=A.length;N<y;++N){const g=A[N],T=g.start,w=g.count;for(let U=T,M=T+w;U<M;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new O,x=new O,P=new O,C=new O;function D(N){P.fromBufferAttribute(r,N),C.copy(P);const y=o[N];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(C,y);const T=x.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,T)}for(let N=0,y=A.length;N<y;++N){const g=A[N],T=g.start,w=g.count;for(let U=T,M=T+w;U<M;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let d=0;d<u;d++)p[_++]=c[f++]}return new Me(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new Kt,Cn=new wa,tr=new Gn,po=new O,er=new O,nr=new O,ir=new O,cs=new O,rr=new O,mo=new O,sr=new O;class ue extends re{constructor(t=new xe,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(cs.fromBufferAttribute(h,t),a?rr.addScaledVector(cs,u):rr.addScaledVector(cs.sub(e),u))}e.add(rr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),Cn.copy(t.ray).recast(t.near),!(tr.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(tr,po)===null||Cn.origin.distanceToSquared(po)>(t.far-t.near)**2))&&(fo.copy(s).invert(),Cn.copy(t.ray).applyMatrix4(fo),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],d=a[m.materialIndex],A=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,P=b;x<P;x+=3){const C=o.getX(x),D=o.getX(x+1),N=o.getX(x+2);r=ar(this,d,t,n,c,u,h,C,D,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,d=v;m<d;m+=3){const A=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);r=ar(this,a,t,n,c,u,h,A,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],d=a[m.materialIndex],A=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,P=b;x<P;x+=3){const C=x,D=x+1,N=x+2;r=ar(this,d,t,n,c,u,h,C,D,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,d=v;m<d;m+=3){const A=m,b=m+1,x=m+2;r=ar(this,a,t,n,c,u,h,A,b,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function uu(i,t,e,n,r,s,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===En,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function ar(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);const u=uu(i,t,e,n,er,nr,ir,mo);if(u){const h=new O;Xe.getBarycoord(mo,er,nr,ir,h),r&&(u.uv=Xe.getInterpolatedAttribute(r,o,l,c,h,new gt)),s&&(u.uv1=Xe.getInterpolatedAttribute(s,o,l,c,h,new gt)),a&&(u.normal=Xe.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new O,materialIndex:0};Xe.getNormal(er,nr,ir,p.normal),u.face=p,u.barycoord=h}return u}class Ke extends xe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function _(v,m,d,A,b,x,P,C,D,N,y){const g=x/D,T=P/N,w=x/2,U=P/2,M=C/2,I=D+1,L=N+1;let G=0,B=0;const Q=new O;for(let tt=0;tt<L;tt++){const J=tt*T-U;for(let Y=0;Y<I;Y++){const nt=Y*g-w;Q[v]=nt*A,Q[m]=J*b,Q[d]=M,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[d]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Y/D),h.push(1-tt/N),G+=1}}for(let tt=0;tt<N;tt++)for(let J=0;J<D;J++){const Y=p+J+I*tt,nt=p+J+I*(tt+1),Rt=p+(J+1)+I*(tt+1),Nt=p+(J+1)+I*tt;l.push(Y,nt,Nt),l.push(nt,Rt,Nt),B+=6}o.addGroup(f,B,y),f+=B,p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=pi(i[e]);for(const r in n)t[r]=n[r]}return t}function hu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Bi={clone:pi,merge:Ae};var fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class de extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new O,go=new gt,_o=new gt;class Ne extends Ll{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,go,_o),e.subVectors(_o,go)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class pu extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(ni,ii,t,e);r.layers=this.layers,this.add(r);const s=new Ne(ni,ii,t,e);s.layers=this.layers,this.add(s);const a=new Ne(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Ne(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Ne(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Ne(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ul extends Te{constructor(t=[],e=hi,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mu extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ul(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ke(5,5,5),s=new de({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:hn});s.uniforms.tEquirect.value=e;const a=new ue(r,s),o=e.minFilter;return e.minFilter===Bn&&(e.minFilter=je),new pu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class zn extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gu={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ra{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new Ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _u extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vu extends Te{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Oe,u=Oe,h,p){super(null,a,o,l,c,u,r,s,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo extends Me{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ri=new Kt,xo=new Kt,or=[],Mo=new Vn,xu=new Kt,bi=new ue,Ai=new Gn;class zi extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,xu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Mo.copy(t.boundingBox).applyMatrix4(ri),this.boundingBox.union(Mo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Ai.copy(t.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(Ai)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),t.ray.intersectsSphere(Ai)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ri),xo.multiplyMatrices(n,ri),bi.matrixWorld=xo,bi.raycast(t,or);for(let a=0,o=or.length;a<o;a++){const l=or[a];l.instanceId=s,l.object=this,e.push(l)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vu(new Float32Array(r*this.count),r,this.count,ya,Qe));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hs=new O,Mu=new O,Su=new Ht;class Un{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=hs.subVectors(n,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Su.getNormalMatrix(t),r=this.coplanarPoint(hs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Gn,yu=new gt(.5,.5),lr=new O;class Ca{constructor(t=new Un,e=new Un,n=new Un,r=new Un,s=new Un,a=new Un){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],p=s[6],f=s[7],_=s[8],v=s[9],m=s[10],d=s[11],A=s[12],b=s[13],x=s[14],P=s[15];if(r[0].setComponents(c-a,f-u,d-_,P-A).normalize(),r[1].setComponents(c+a,f+u,d+_,P+A).normalize(),r[2].setComponents(c+o,f+h,d+v,P+b).normalize(),r[3].setComponents(c-o,f-h,d-v,P-b).normalize(),n)r[4].setComponents(l,p,m,x).normalize(),r[5].setComponents(c-l,f-p,d-m,P-x).normalize();else if(r[4].setComponents(c-l,f-p,d-m,P-x).normalize(),e===tn)r[5].setComponents(c+l,f+p,d+m,P+x).normalize();else if(e===wr)r[5].setComponents(l,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){Pn.center.set(0,0,0);const e=yu.distanceTo(t.center);return Pn.radius=.7071067811865476+e,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(lr.x=r.normal.x>0?t.max.x:t.min.x,lr.y=r.normal.y>0?t.max.y:t.min.y,lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cr=new O,Pr=new O,So=new Kt,wi=new wa,cr=new Gn,fs=new O,yo=new O;class Tu extends re{constructor(t=new xe,e=new Eu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Cr.fromBufferAttribute(e,r-1),Pr.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Cr.distanceTo(Pr);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),cr.radius+=s,t.ray.intersectsSphere(cr)===!1)return;So.copy(r).invert(),wi.copy(t.ray).applyMatrix4(So);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const d=u.getX(v),A=u.getX(v+1),b=ur(this,t,wi,l,d,A,v);b&&e.push(b)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(f),d=ur(this,t,wi,l,v,m,_-1);d&&e.push(d)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let v=f,m=_-1;v<m;v+=c){const d=ur(this,t,wi,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=ur(this,t,wi,l,_-1,f,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ur(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Cr.fromBufferAttribute(o,r),Pr.fromBufferAttribute(o,s),e.distanceSqToSegment(Cr,Pr,fs,yo)>n)return;fs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fs);if(!(c<t.near||c>t.far))return{distance:c,point:yo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Eo=new O,To=new O;class bu extends Tu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Eo.fromBufferAttribute(e,r),To.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Eo.distanceTo(To);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Au extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bo=new Kt,pa=new wa,hr=new Gn,fr=new O;class Il extends re{constructor(t=new xe,e=new Au){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),hr.radius+=s,t.ray.intersectsSphere(hr)===!1)return;bo.copy(r).invert(),pa.copy(t.ray).applyMatrix4(bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=p,v=f;_<v;_++){const m=c.getX(_);fr.fromBufferAttribute(h,m),Ao(fr,m,l,r,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=p,v=f;_<v;_++)fr.fromBufferAttribute(h,_),Ao(fr,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ao(i,t,e,n,r,s,a){const o=pa.distanceSqToPoint(i);if(o<e){const l=new O;pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Lr extends Te{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends Te{constructor(t,e,n=Hn,r,s,a,o=Oe,l=Oe,c,u=Ni,h=1){if(u!==Ni&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fl extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ur extends xe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],f=[];let _=0;const v=[],m=n/2;let d=0;A(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(f,2));function A(){const x=new O,P=new O;let C=0;const D=(e-t)/n;for(let N=0;N<=s;N++){const y=[],g=N/s,T=g*(e-t)+t;for(let w=0;w<=r;w++){const U=w/r,M=U*l+o,I=Math.sin(M),L=Math.cos(M);P.x=T*I,P.y=-g*n+m,P.z=T*L,h.push(P.x,P.y,P.z),x.set(I,D,L).normalize(),p.push(x.x,x.y,x.z),f.push(U,1-g),y.push(_++)}v.push(y)}for(let N=0;N<r;N++)for(let y=0;y<s;y++){const g=v[y][N],T=v[y+1][N],w=v[y+1][N+1],U=v[y][N+1];(t>0||y!==0)&&(u.push(g,T,U),C+=3),(e>0||y!==s-1)&&(u.push(T,w,U),C+=3)}c.addGroup(d,C,0),d+=C}function b(x){const P=_,C=new gt,D=new O;let N=0;const y=x===!0?t:e,g=x===!0?1:-1;for(let w=1;w<=r;w++)h.push(0,m*g,0),p.push(0,g,0),f.push(.5,.5),_++;const T=_;for(let w=0;w<=r;w++){const M=w/r*l+o,I=Math.cos(M),L=Math.sin(M);D.x=y*L,D.y=m*g,D.z=y*I,h.push(D.x,D.y,D.z),p.push(0,g,0),C.x=I*.5+.5,C.y=L*.5*g+.5,f.push(C.x,C.y),_++}for(let w=0;w<r;w++){const U=P+w,M=T+w;x===!0?u.push(M,M+1,U):u.push(M+1,M,U),N+=3}c.addGroup(d,N,x===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends xe{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const b=new O,x=new O,P=new O;for(let C=0;C<e.length;C+=3)f(e[C+0],b),f(e[C+1],x),f(e[C+2],P),l(b,x,P,A)}function l(A,b,x,P){const C=P+1,D=[];for(let N=0;N<=C;N++){D[N]=[];const y=A.clone().lerp(x,N/C),g=b.clone().lerp(x,N/C),T=C-N;for(let w=0;w<=T;w++)w===0&&N===C?D[N][w]=y:D[N][w]=y.clone().lerp(g,w/T)}for(let N=0;N<C;N++)for(let y=0;y<2*(C-N)-1;y++){const g=Math.floor(y/2);y%2===0?(p(D[N][g+1]),p(D[N+1][g]),p(D[N][g])):(p(D[N][g+1]),p(D[N+1][g+1]),p(D[N+1][g]))}}function c(A){const b=new O;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(A),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){const A=new O;for(let b=0;b<s.length;b+=3){A.x=s[b+0],A.y=s[b+1],A.z=s[b+2];const x=m(A)/2/Math.PI+.5,P=d(A)/Math.PI+.5;a.push(x,1-P)}_(),h()}function h(){for(let A=0;A<a.length;A+=6){const b=a[A+0],x=a[A+2],P=a[A+4],C=Math.max(b,x,P),D=Math.min(b,x,P);C>.9&&D<.1&&(b<.2&&(a[A+0]+=1),x<.2&&(a[A+2]+=1),P<.2&&(a[A+4]+=1))}}function p(A){s.push(A.x,A.y,A.z)}function f(A,b){const x=A*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function _(){const A=new O,b=new O,x=new O,P=new O,C=new gt,D=new gt,N=new gt;for(let y=0,g=0;y<s.length;y+=9,g+=6){A.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),C.set(a[g+0],a[g+1]),D.set(a[g+2],a[g+3]),N.set(a[g+4],a[g+5]),P.copy(A).add(b).add(x).divideScalar(3);const T=m(P);v(C,g+0,A,T),v(D,g+2,b,T),v(N,g+4,x,T)}}function v(A,b,x,P){P<0&&A.x===1&&(a[b]=A.x-1),x.x===0&&x.z===0&&(a[b]=P/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function d(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.vertices,t.indices,t.radius,t.details)}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],p=n[r+1]-u,f=(a-u)/p;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new gt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,r=[],s=[],a=[],o=new O,l=new Kt;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Wt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(Wt(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends pn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*h+this.aX,c=p*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wu extends Ol{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let p=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,f*=u,r(a,o,p,f)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const dr=new O,ds=new Da,ps=new Da,ms=new Da;class Bl extends pn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new O){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(dr.subVectors(r[0],r[1]).add(r[0]),c=dr);const h=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(dr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ds.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,_,v,m),ps.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,_,v,m),ms.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(ds.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),ps.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),ms.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(ds.calc(l),ps.calc(l),ms.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Ru(i,t){const e=1-i;return e*e*t}function Cu(i,t){return 2*(1-i)*i*t}function Pu(i,t){return i*i*t}function Pi(i,t,e,n){return Ru(i,t)+Cu(i,e)+Pu(i,n)}function Du(i,t){const e=1-i;return e*e*e*t}function Lu(i,t){const e=1-i;return 3*e*e*i*t}function Uu(i,t){return 3*(1-i)*i*i*t}function Iu(i,t){return i*i*i*t}function Di(i,t,e,n,r){return Du(i,t)+Lu(i,e)+Uu(i,n)+Iu(i,r)}class Nu extends pn{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(t,r.x,s.x,a.x,o.x),Di(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fu extends pn{constructor(t=new O,e=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new O){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Di(t,r.x,s.x,a.x,o.x),Di(t,r.y,s.y,a.y,o.y),Di(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ou extends pn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends pn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends pn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Pi(t,r.x,s.x,a.x),Pi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class La extends pn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Pi(t,r.x,s.x,a.x),Pi(t,r.y,s.y,a.y),Pi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(wo(o,l.x,c.x,u.x,h.x),wo(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var Vu=Object.freeze({__proto__:null,ArcCurve:wu,CatmullRomCurve3:Bl,CubicBezierCurve:Nu,CubicBezierCurve3:Fu,EllipseCurve:Ol,LineCurve:Ou,LineCurve3:Bu,QuadraticBezierCurve:zu,QuadraticBezierCurve3:La,SplineCurve:Hu});class Ir extends Pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ir(t.radius,t.detail)}}class Tn extends xe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,p=e/l,f=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const A=d*p-a;for(let b=0;b<c;b++){const x=b*h-s;_.push(x,-A,0),v.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const b=A+c*d,x=A+c*(d+1),P=A+1+c*(d+1),C=A+1+c*d;f.push(b,x,C),f.push(x,P,C)}this.setIndex(f),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ua extends xe{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new O,h=new O,p=new O;for(let f=0;f<=n;f++)for(let _=0;_<=r;_++){const v=_/r*s,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(_/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=r;_++){const v=(r+1)*f+_-1,m=(r+1)*(f-1)+_-1,d=(r+1)*(f-1)+_,A=(r+1)*f+_;a.push(v,m,A),a.push(m,d,A)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nr extends xe{constructor(t=new La(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new O,l=new O,c=new gt;let u=new O;const h=[],p=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(p,3)),this.setAttribute("uv",new le(f,2));function v(){for(let b=0;b<e;b++)m(b);m(s===!1?e:0),A(),d()}function m(b){u=t.getPointAt(b/e,u);const x=a.normals[b],P=a.binormals[b];for(let C=0;C<=r;C++){const D=C/r*Math.PI*2,N=Math.sin(D),y=-Math.cos(D);l.x=y*x.x+N*P.x,l.y=y*x.y+N*P.y,l.z=y*x.z+N*P.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let b=1;b<=e;b++)for(let x=1;x<=r;x++){const P=(r+1)*(b-1)+(x-1),C=(r+1)*b+(x-1),D=(r+1)*b+x,N=(r+1)*(b-1)+x;_.push(P,C,N),_.push(C,D,N)}}function A(){for(let b=0;b<=e;b++)for(let x=0;x<=r;x++)c.x=b/e,c.y=x/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nr(new Vu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Gu extends de{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fe extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ku extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wu extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ia extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xu extends Ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gs=new Kt,Ro=new O,Co=new O;class zl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ro.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ro),Co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Co),e.updateMatrixWorld(),gs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gs,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Po=new Kt,Ri=new O,_s=new O;class qu extends zl{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ri),_s.copy(n.position),_s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_s),n.updateMatrixWorld(),r.makeTranslation(-Ri.x,-Ri.y,-Ri.z),Po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po,n.coordinateSystem,n.reversedDepth)}}class Hl extends Ia{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Na extends Ll{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yu extends zl{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zu extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ku extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $u{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Do(i,t,e,n){const r=Ju(n);switch(e){case Ml:return i*t;case ya:return i*t/r.components*r.byteLength;case Ea:return i*t/r.components*r.byteLength;case yl:return i*t*2/r.components*r.byteLength;case Ta:return i*t*2/r.components*r.byteLength;case Sl:return i*t*3/r.components*r.byteLength;case qe:return i*t*4/r.components*r.byteLength;case ba:return i*t*4/r.components*r.byteLength;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hs:case Gs:return Math.max(i,16)*Math.max(t,8)/4;case zs:case Vs:return Math.max(i,8)*Math.max(t,8)/2;case ks:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ys:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ks:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $s:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Js:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case js:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case oa:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ca:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ju(i){switch(i){case en:case gl:return{byteLength:1,components:1};case Ui:case _l:case fn:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Hn:case xa:case Qe:return{byteLength:4,components:1};case vl:case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);function Vl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ju(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,h[p]=v)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
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
} // validated`,Eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Th=`vec3 transformedNormal = objectNormal;
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
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,jh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ad=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,od=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,ld=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,pd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,md=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,gd=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_d=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,vd=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xd=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Md=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sd=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,yd=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ed=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Td=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bd=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Ad=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wd=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Rd=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Pd=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ld=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gt={alphahash_fragment:Qu,alphahash_pars_fragment:th,alphamap_fragment:eh,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:ah,batching_pars_vertex:oh,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:uh,bsdfs:hh,iridescence_fragment:fh,bumpmap_pars_fragment:dh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:Mh,color_vertex:Sh,common:yh,cube_uv_reflection_fragment:Eh,defaultnormal_vertex:Th,displacementmap_pars_vertex:bh,displacementmap_vertex:Ah,emissivemap_fragment:wh,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Dh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Uh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:zh,gradientmap_pars_fragment:Hh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:kh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Kh,lights_physical_fragment:$h,lights_physical_pars_fragment:Jh,lights_fragment_begin:jh,lights_fragment_maps:Qh,lights_fragment_end:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:sf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:df,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Df,dithering_pars_fragment:Lf,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:Hf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:kf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Kf,uv_pars_vertex:$f,uv_vertex:Jf,worldpos_vertex:jf,background_vert:Qf,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:sd,depth_frag:ad,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:ud,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:_d,meshmatcap_frag:vd,meshnormal_vert:xd,meshnormal_frag:Md,meshphong_vert:Sd,meshphong_frag:yd,meshphysical_vert:Ed,meshphysical_frag:Td,meshtoon_vert:bd,meshtoon_frag:Ad,points_vert:wd,points_frag:Rd,shadow_vert:Cd,shadow_frag:Pd,sprite_vert:Dd,sprite_frag:Ld},ut={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Je={basic:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ae([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ae([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ae([ut.points,ut.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ae([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ae([ut.common,ut.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ae([ut.sprite,ut.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ae([ut.common,ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ae([ut.lights,ut.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Je.physical={uniforms:Ae([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const pr={r:0,b:0,g:0},Dn=new nn,Ud=new Kt;function Id(i,t,e,n,r,s,a){const o=new Ot(0);let l=s===!0?0:1,c,u,h=null,p=0,f=null;function _(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function v(b){let x=!1;const P=_(b);P===null?d(o,l):P&&P.isColor&&(d(P,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===Dr)?(u===void 0&&(u=new ue(new Ke(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:pi(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Dn.copy(x.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Dn)),u.material.toneMapped=qt.getTransfer(P.colorSpace)!==$t,(h!==P||p!==P.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,p=P.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ue(new Tn(2,2),new de({name:"BackgroundMaterial",uniforms:pi(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(P.colorSpace)!==$t,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||p!==P.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,p=P.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,x){b.getRGB(pr,Dl(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,x,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:v,addToRenderList:m,dispose:A}}function Nd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(g,T,w,U,M){let I=!1;const L=h(U,w,T);s!==L&&(s=L,c(s.object)),I=f(g,U,w,M),I&&_(g,U,w,M),M!==null&&t.update(M,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,x(g,T,w,U),M!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,T,w){const U=w.wireframe===!0;let M=n[g.id];M===void 0&&(M={},n[g.id]=M);let I=M[T.id];I===void 0&&(I={},M[T.id]=I);let L=I[U];return L===void 0&&(L=p(l()),I[U]=L),L}function p(g){const T=[],w=[],U=[];for(let M=0;M<e;M++)T[M]=0,w[M]=0,U[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:w,attributeDivisors:U,object:g,attributes:{},index:null}}function f(g,T,w,U){const M=s.attributes,I=T.attributes;let L=0;const G=w.getAttributes();for(const B in G)if(G[B].location>=0){const tt=M[B];let J=I[B];if(J===void 0&&(B==="instanceMatrix"&&g.instanceMatrix&&(J=g.instanceMatrix),B==="instanceColor"&&g.instanceColor&&(J=g.instanceColor)),tt===void 0||tt.attribute!==J||J&&tt.data!==J.data)return!0;L++}return s.attributesNum!==L||s.index!==U}function _(g,T,w,U){const M={},I=T.attributes;let L=0;const G=w.getAttributes();for(const B in G)if(G[B].location>=0){let tt=I[B];tt===void 0&&(B==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),B==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor));const J={};J.attribute=tt,tt&&tt.data&&(J.data=tt.data),M[B]=J,L++}s.attributes=M,s.attributesNum=L,s.index=U}function v(){const g=s.newAttributes;for(let T=0,w=g.length;T<w;T++)g[T]=0}function m(g){d(g,0)}function d(g,T){const w=s.newAttributes,U=s.enabledAttributes,M=s.attributeDivisors;w[g]=1,U[g]===0&&(i.enableVertexAttribArray(g),U[g]=1),M[g]!==T&&(i.vertexAttribDivisor(g,T),M[g]=T)}function A(){const g=s.newAttributes,T=s.enabledAttributes;for(let w=0,U=T.length;w<U;w++)T[w]!==g[w]&&(i.disableVertexAttribArray(w),T[w]=0)}function b(g,T,w,U,M,I,L){L===!0?i.vertexAttribIPointer(g,T,w,M,I):i.vertexAttribPointer(g,T,w,U,M,I)}function x(g,T,w,U){v();const M=U.attributes,I=w.getAttributes(),L=T.defaultAttributeValues;for(const G in I){const B=I[G];if(B.location>=0){let Q=M[G];if(Q===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(Q=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(Q=g.instanceColor)),Q!==void 0){const tt=Q.normalized,J=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const nt=Y.buffer,Rt=Y.type,Nt=Y.bytesPerElement,K=Rt===i.INT||Rt===i.UNSIGNED_INT||Q.gpuType===xa;if(Q.isInterleavedBufferAttribute){const W=Q.data,rt=W.stride,pt=Q.offset;if(W.isInstancedInterleavedBuffer){for(let _t=0;_t<B.locationSize;_t++)d(B.location+_t,W.meshPerAttribute);g.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let _t=0;_t<B.locationSize;_t++)m(B.location+_t);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let _t=0;_t<B.locationSize;_t++)b(B.location+_t,J/B.locationSize,Rt,tt,rt*Nt,(pt+J/B.locationSize*_t)*Nt,K)}else{if(Q.isInstancedBufferAttribute){for(let W=0;W<B.locationSize;W++)d(B.location+W,Q.meshPerAttribute);g.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let W=0;W<B.locationSize;W++)m(B.location+W);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let W=0;W<B.locationSize;W++)b(B.location+W,J/B.locationSize,Rt,tt,J*Nt,J/B.locationSize*W*Nt,K)}}else if(L!==void 0){const tt=L[G];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(B.location,tt);break;case 3:i.vertexAttrib3fv(B.location,tt);break;case 4:i.vertexAttrib4fv(B.location,tt);break;default:i.vertexAttrib1fv(B.location,tt)}}}}A()}function P(){N();for(const g in n){const T=n[g];for(const w in T){const U=T[w];for(const M in U)u(U[M].object),delete U[M];delete T[w]}delete n[g]}}function C(g){if(n[g.id]===void 0)return;const T=n[g.id];for(const w in T){const U=T[w];for(const M in U)u(U[M].object),delete U[M];delete T[w]}delete n[g.id]}function D(g){for(const T in n){const w=n[T];if(w[g.id]===void 0)continue;const U=w[g.id];for(const M in U)u(U[M].object),delete U[M];delete w[g.id]}}function N(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Fd(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*p[v];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Od(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==qe&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const N=D===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==en&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Qe&&!N)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:C}}function Bd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Un,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||r;return r=p,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,b=A*4;let x=d.clippingState||null;l.value=x,x=u(_,p,b,f);for(let P=0;P!==b;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,f,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=f+v*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=f;b!==v;++b,x+=4)a.copy(h[b]).applyMatrix4(A,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function zd(i){let t=new WeakMap;function e(a,o){return o===Fs?a.mapping=hi:o===Os&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fs||o===Os)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const oi=4,Lo=[.125,.215,.35,.446,.526,.582],Fn=20,vs=new Na,Uo=new Ot;let xs=null,Ms=0,Ss=0,ys=!1;const In=(1+Math.sqrt(5))/2,si=1/In,Io=[new O(-In,si,0),new O(In,si,0),new O(-si,0,In),new O(si,0,In),new O(0,In,-si),new O(0,In,si),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Hd=new O;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Hd}=s;xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xs,Ms,Ss),this._renderer.xr.enabled=ys,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:fn,format:qe,colorSpace:di,depthBuffer:!1},r=Fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(s)),this._blurMaterial=Gd(s,t,e)}return r}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,n,r,s){const l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Uo),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new Pe({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),m=new ue(new Ke,v);let d=!1;const A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,d=!0):(v.color.copy(Uo),d=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const P=this._cubeSize;mr(r,x*P,b>2?P:0,P,P),h.setRenderTarget(r),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Io[(r-s-1)%Io.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ue(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fn-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const d=[];let A=0;for(let D=0;D<Fn;++D){const N=D/v,y=Math.exp(-N*N/2);d.push(y),D===0?A+=y:D<m&&(A+=2*y)}for(let D=0;D<d.length;D++)d[D]=d[D]/A;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=_,p.mipInt.value=b-n;const x=this._sizeLods[r],P=3*x*(r>b-oi?r-b+oi:0),C=4*(this._cubeSize-x);mr(e,P,C,3*x,2*x),l.setRenderTarget(e),l.render(h,vs)}}function Vd(i){const t=[],e=[],n=[];let r=i;const s=i-oi+1+Lo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-oi?l=Lo[a-i+oi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,v=3,m=2,d=1,A=new Float32Array(v*_*f),b=new Float32Array(m*_*f),x=new Float32Array(d*_*f);for(let C=0;C<f;C++){const D=C%3*2/3-1,N=C>2?0:-1,y=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];A.set(y,v*_*C),b.set(p,m*_*C);const g=[C,C,C,C,C,C];x.set(g,d*_*C)}const P=new xe;P.setAttribute("position",new Me(A,v)),P.setAttribute("uv",new Me(b,m)),P.setAttribute("faceIndex",new Me(x,d)),t.push(P),r>oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fo(i,t,e){const n=new Ze(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Gd(i,t,e){const n=new Float32Array(Fn),r=new O(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Oo(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Bo(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function kd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fs||l===Os,u=l===hi||l===fi;if(c||u){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new No(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(e===null&&(e=new No(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xd(i,t,e,n){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const A=f.array;v=f.version;for(let b=0,x=A.length;b<x;b+=3){const P=A[b+0],C=A[b+1],D=A[b+2];p.push(P,C,C,D,D,P)}}else if(_!==void 0){const A=_.array;v=_.version;for(let b=0,x=A.length/3-1;b<x;b+=3){const P=b+0,C=b+1,D=b+2;p.push(P,C,C,D,D,P)}}else return;const m=new(bl(p)?Pl:Cl)(p,1);m.version=v;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const p=s.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qd(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),e.update(f,n,1)}function c(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,s,p*a,_),e.update(f,n,_))}function u(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];e.update(m,n,1)}function h(p,f,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/a,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,v,0,_);let d=0;for(let A=0;A<_;A++)d+=f[A]*v[A];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Zd(i,t,e){const n=new WeakMap,r=new Qt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),_===!0&&(b=2),v===!0&&(b=3);let x=o.attributes.position.count*b,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const C=new Float32Array(x*P*4*h),D=new Al(C,x,P,h);D.type=Qe,D.needsUpdate=!0;const N=b*4;for(let g=0;g<h;g++){const T=m[g],w=d[g],U=A[g],M=x*P*4*g;for(let I=0;I<T.count;I++){const L=I*N;f===!0&&(r.fromBufferAttribute(T,I),C[M+L+0]=r.x,C[M+L+1]=r.y,C[M+L+2]=r.z,C[M+L+3]=0),_===!0&&(r.fromBufferAttribute(w,I),C[M+L+4]=r.x,C[M+L+5]=r.y,C[M+L+6]=r.z,C[M+L+7]=0),v===!0&&(r.fromBufferAttribute(U,I),C[M+L+8]=r.x,C[M+L+9]=r.y,C[M+L+10]=r.z,C[M+L+11]=U.itemSize===4?r.w:1)}}p={count:h,texture:D,size:new gt(x,P)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Kd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Gl=new Te,zo=new Nl(1,1),kl=new Al,Wl=new Qc,Xl=new Ul,Ho=[],Vo=[],Go=new Float32Array(16),ko=new Float32Array(9),Wo=new Float32Array(4);function _i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ho[r];if(s===void 0&&(s=new Float32Array(r),Ho[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Wo.set(n),i.uniformMatrix2fv(this.addr,!1,Wo),me(e,n)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ko.set(n),i.uniformMatrix3fv(this.addr,!1,ko),me(e,n)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Go.set(n),i.uniformMatrix4fv(this.addr,!1,Go),me(e,n)}}function ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function hp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=Tl,s=zo):s=Gl,e.setTexture2D(t||s,r)}function fp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Wl,r)}function dp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Xl,r)}function pp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||kl,r)}function mp(i){switch(i){case 5126:return $d;case 35664:return Jd;case 35665:return jd;case 35666:return Qd;case 35674:return tp;case 35675:return ep;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return sp;case 35669:case 35673:return ap;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,t){i.uniform1fv(this.addr,t)}function _p(i,t){const e=_i(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){const e=_i(t,this.size,3);i.uniform3fv(this.addr,e)}function xp(i,t){const e=_i(t,this.size,4);i.uniform4fv(this.addr,e)}function Mp(i,t){const e=_i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sp(i,t){const e=_i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){const e=_i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ep(i,t){i.uniform1iv(this.addr,t)}function Tp(i,t){i.uniform2iv(this.addr,t)}function bp(i,t){i.uniform3iv(this.addr,t)}function Ap(i,t){i.uniform4iv(this.addr,t)}function wp(i,t){i.uniform1uiv(this.addr,t)}function Rp(i,t){i.uniform2uiv(this.addr,t)}function Cp(i,t){i.uniform3uiv(this.addr,t)}function Pp(i,t){i.uniform4uiv(this.addr,t)}function Dp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Gl,s[a])}function Lp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Wl,s[a])}function Up(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Xl,s[a])}function Ip(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||kl,s[a])}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Ip}}class Fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mp(e.type)}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class Bp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Xo(i,t){i.seq.push(t),i.map[t.id]=t}function zp(i,t,e){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xo(e,c===void 0?new Fp(o,i,t):new Op(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Bp(o),Xo(e,h)),e=h}}}class Er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);zp(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function qo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hp=37297;let Vp=0;function Gp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yo=new Ht;function kp(i){qt._getMatrix(Yo,qt.workingColorSpace,i);const t=`mat3( ${Yo.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Ar:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Gp(i.getShaderSource(t),o)}else return s}function Wp(i,t){const e=kp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xp(i,t){let e;switch(t){case cl:e="Linear";break;case ul:e="Reinhard";break;case hl:e="Cineon";break;case va:e="ACESFilmic";break;case dl:e="AgX";break;case pl:e="Neutral";break;case fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new O;function qp(){qt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function Zp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ci(i){return i!==""}function Ko(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $o(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace($p,jp)}const Jp=new Map;function jp(i,t){let e=Gt[t];if(e===void 0){const n=Jp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(Qp,tm)}function tm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function em(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case fi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function im(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fi&&(t="ENVMAP_MODE_REFRACTION"),t}function rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Lc:t="ENVMAP_BLENDING_MIX";break;case Uc:t="ENVMAP_BLENDING_ADD";break}return t}function sm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function am(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=em(e),c=nm(e),u=im(e),h=rm(e),p=sm(e),f=Yp(e),_=Zp(s),v=r.createProgram();let m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ci).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ci).join(`
`),d.length>0&&(d+=`
`)):(m=[jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),d=[jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Wp("linearToOutputTexel",e.outputColorSpace),qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),a=ma(a),a=Ko(a,e),a=$o(a,e),o=ma(o),o=Ko(o,e),o=$o(o,e),a=Jo(a),o=Jo(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=A+m+a,x=A+d+o,P=qo(r,r.VERTEX_SHADER,b),C=qo(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(T){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(P)||"",M=r.getShaderInfoLog(C)||"",I=w.trim(),L=U.trim(),G=M.trim();let B=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,C);else{const tt=Zo(r,P,"vertex"),J=Zo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+tt+`
`+J)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||G==="")&&(Q=!1);Q&&(T.diagnostics={runnable:B,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(P),r.deleteShader(C),N=new Er(r,v),y=Kp(r,v)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,Hp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let om=0;class lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cm(t),e.set(t,n)),n}}class cm{constructor(t){this.id=om++,this.code=t,this.usedTimes=0}}function um(i,t,e,n,r,s,a){const o=new wl,l=new lm,c=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,g,T,w,U){const M=w.fog,I=U.geometry,L=y.isMeshStandardMaterial?w.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||L),B=G&&G.mapping===Dr?G.image.height:null,Q=_[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=tt!==void 0?tt.length:0;let Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let nt,Rt,Nt,K;if(Q){const Zt=Je[Q];nt=Zt.vertexShader,Rt=Zt.fragmentShader}else nt=y.vertexShader,Rt=y.fragmentShader,l.update(y),Nt=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);const W=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),pt=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,kt=!!y.map,ge=!!y.matcap,F=!!G,Jt=!!y.aoMap,Ft=!!y.lightMap,Dt=!!y.bumpMap,vt=!!y.normalMap,ie=!!y.displacementMap,Et=!!y.emissiveMap,Vt=!!y.metalnessMap,_e=!!y.roughnessMap,he=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,k=y.iridescence>0,$=y.sheen>0,et=y.transmission>0,Z=he&&!!y.anisotropyMap,wt=R&&!!y.clearcoatMap,lt=R&&!!y.clearcoatNormalMap,Tt=R&&!!y.clearcoatRoughnessMap,bt=k&&!!y.iridescenceMap,at=k&&!!y.iridescenceThicknessMap,dt=$&&!!y.sheenColorMap,Ut=$&&!!y.sheenRoughnessMap,At=!!y.specularMap,ht=!!y.specularColorMap,zt=!!y.specularIntensityMap,z=et&&!!y.transmissionMap,ot=et&&!!y.thicknessMap,ct=!!y.gradientMap,xt=!!y.alphaMap,it=y.alphaTest>0,j=!!y.alphaHash,yt=!!y.extensions;let Bt=yn;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ee={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:Rt,defines:y.defines,customVertexShaderID:Nt,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:pt,instancingColor:pt&&U.instanceColor!==null,instancingMorph:pt&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:di,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:ge,envMap:F,envMapMode:F&&G.mapping,envMapCubeUVHeight:B,aoMap:Jt,lightMap:Ft,bumpMap:Dt,normalMap:vt,displacementMap:p&&ie,emissiveMap:Et,normalMapObjectSpace:vt&&y.normalMapType===Oc,normalMapTangentSpace:vt&&y.normalMapType===El,metalnessMap:Vt,roughnessMap:_e,anisotropy:he,anisotropyMap:Z,clearcoat:R,clearcoatMap:wt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:k,iridescenceMap:bt,iridescenceThicknessMap:at,sheen:$,sheenColorMap:dt,sheenRoughnessMap:Ut,specularMap:At,specularColorMap:ht,specularIntensityMap:zt,transmission:et,transmissionMap:z,thicknessMap:ot,gradientMap:ct,opaque:y.transparent===!1&&y.blending===li&&y.alphaToCoverage===!1,alphaMap:xt,alphaTest:it,alphaHash:j,combine:y.combine,mapUv:kt&&v(y.map.channel),aoMapUv:Jt&&v(y.aoMap.channel),lightMapUv:Ft&&v(y.lightMap.channel),bumpMapUv:Dt&&v(y.bumpMap.channel),normalMapUv:vt&&v(y.normalMap.channel),displacementMapUv:ie&&v(y.displacementMap.channel),emissiveMapUv:Et&&v(y.emissiveMap.channel),metalnessMapUv:Vt&&v(y.metalnessMap.channel),roughnessMapUv:_e&&v(y.roughnessMap.channel),anisotropyMapUv:Z&&v(y.anisotropyMap.channel),clearcoatMapUv:wt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(y.sheenRoughnessMap.channel),specularMapUv:At&&v(y.specularMap.channel),specularColorMapUv:ht&&v(y.specularColorMap.channel),specularIntensityMapUv:zt&&v(y.specularIntensityMap.channel),transmissionMapUv:z&&v(y.transmissionMap.channel),thicknessMapUv:ot&&v(y.thicknessMap.channel),alphaMapUv:xt&&v(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(kt||xt),fog:!!M,useFog:y.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===$t,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===$t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===We,flipSided:y.side===Ce,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function d(y){const g=[];if(y.shaderID?g.push(y.shaderID):(g.push(y.customVertexShaderID),g.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)g.push(T),g.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(A(g,y),b(g,y),g.push(i.outputColorSpace)),g.push(y.customProgramCacheKey),g.join()}function A(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}function b(y,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const g=_[y.type];let T;if(g){const w=Je[g];T=Bi.clone(w.uniforms)}else T=y.uniforms;return T}function P(y,g){let T;for(let w=0,U=u.length;w<U;w++){const M=u[w];if(M.cacheKey===g){T=M,++T.usedTimes;break}}return T===void 0&&(T=new am(i,g,y,s),u.push(T)),T}function C(y){if(--y.usedTimes===0){const g=u.indexOf(y);u[g]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:N}}function hm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,p,f,_,v,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function o(h,p,f,_,v,m){const d=a(h,p,f,_,v,m);f.transmission>0?n.push(d):f.transparent===!0?r.push(d):e.push(d)}function l(h,p,f,_,v,m){const d=a(h,p,f,_,v,m);f.transmission>0?n.unshift(d):f.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,p){e.length>1&&e.sort(h||fm),n.length>1&&n.sort(p||Qo),r.length>1&&r.sort(p||Qo)}function u(){for(let h=t,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function dm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new tl,i.set(n,[a])):r>=s.length?(a=new tl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ot};break;case"SpotLight":e={position:new O,direction:new O,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gm=0;function _m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vm(i){const t=new pm,e=mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new Kt,a=new Kt;function o(c){let u=0,h=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,v=0,m=0,d=0,A=0,b=0,x=0,P=0,C=0,D=0;c.sort(_m);for(let y=0,g=c.length;y<g;y++){const T=c[y],w=T.color,U=T.intensity,M=T.distance,I=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=w.r*U,h+=w.g*U,p+=w.b*U;else if(T.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(T.sh.coefficients[L],U);D++}else if(T.isDirectionalLight){const L=t.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const G=T.shadow,B=e.get(T);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=T.shadow.matrix,A++}n.directional[f]=L,f++}else if(T.isSpotLight){const L=t.get(T);L.position.setFromMatrixPosition(T.matrixWorld),L.color.copy(w).multiplyScalar(U),L.distance=M,L.coneCos=Math.cos(T.angle),L.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),L.decay=T.decay,n.spot[v]=L;const G=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,G.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[v]=G.matrix,T.castShadow){const B=e.get(T);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=I,x++}v++}else if(T.isRectAreaLight){const L=t.get(T);L.color.copy(w).multiplyScalar(U),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=L,m++}else if(T.isPointLight){const L=t.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),L.distance=T.distance,L.decay=T.decay,T.castShadow){const G=T.shadow,B=e.get(T);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=I,n.pointShadowMatrix[_]=T.shadow.matrix,b++}n.point[_]=L,_++}else if(T.isHemisphereLight){const L=t.get(T);L.skyColor.copy(T.color).multiplyScalar(U),L.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[d]=L,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==x||N.numSpotMaps!==P||N.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,N.directionalLength=f,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=x,N.numSpotMaps=P,N.numLightProbes=D,n.version=gm++)}function l(c,u){let h=0,p=0,f=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const b=c[d];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function el(i){const t=new vm(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new el(i),t.set(r,[o])):s>=a.length?(o=new el(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function ym(i,t,e){let n=new Ca;const r=new gt,s=new gt,a=new Qt,o=new ku({depthPacking:Fc}),l=new Wu,c={},u=e.maxTextureSize,h={[En]:Ce,[Ce]:En,[We]:We},p=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new xe;_.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let d=this.type;this.render=function(C,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=i.getRenderTarget(),g=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),w=i.state;w.setBlending(hn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const U=d!==un&&this.type===un,M=d===un&&this.type!==un;for(let I=0,L=C.length;I<L;I++){const G=C[I],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();if(r.multiply(Q),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null||U===!0||M===!0){const J=this.type!==un?{minFilter:Oe,magFilter:Oe}:{};B.map!==null&&B.map.dispose(),B.map=new Ze(r.x,r.y,J),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const tt=B.getViewportCount();for(let J=0;J<tt;J++){const Y=B.getViewport(J);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),w.viewport(a),B.updateMatrices(G,J),n=B.getFrustum(),x(D,N,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===un&&A(B,N),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,g,T)};function A(C,D){const N=t.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ze(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,N,p,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,N,f,v,null)}function b(C,D,N,y){let g=null;const T=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)g=T;else if(g=N.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const w=g.uuid,U=D.uuid;let M=c[w];M===void 0&&(M={},c[w]=M);let I=M[U];I===void 0&&(I=g.clone(),M[U]=I,D.addEventListener("dispose",P)),g=I}if(g.visible=D.visible,g.wireframe=D.wireframe,y===un?g.side=D.shadowSide!==null?D.shadowSide:D.side:g.side=D.shadowSide!==null?D.shadowSide:h[D.side],g.alphaMap=D.alphaMap,g.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,g.map=D.map,g.clipShadows=D.clipShadows,g.clippingPlanes=D.clippingPlanes,g.clipIntersection=D.clipIntersection,g.displacementMap=D.displacementMap,g.displacementScale=D.displacementScale,g.displacementBias=D.displacementBias,g.wireframeLinewidth=D.wireframeLinewidth,g.linewidth=D.linewidth,N.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const w=i.properties.get(g);w.light=N}return g}function x(C,D,N,y,g){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===un)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const U=t.update(C),M=C.material;if(Array.isArray(M)){const I=U.groups;for(let L=0,G=I.length;L<G;L++){const B=I[L],Q=M[B.materialIndex];if(Q&&Q.visible){const tt=b(C,Q,y,g);C.onBeforeShadow(i,C,D,N,U,tt,B),i.renderBufferDirect(N,null,U,tt,C,B),C.onAfterShadow(i,C,D,N,U,tt,B)}}}else if(M.visible){const I=b(C,M,y,g);C.onBeforeShadow(i,C,D,N,U,I,null),i.renderBufferDirect(N,null,U,I,C,null),C.onAfterShadow(i,C,D,N,U,I,null)}}const w=C.children;for(let U=0,M=w.length;U<M;U++)x(w[U],D,N,y,g)}function P(C){C.target.removeEventListener("dispose",P);for(const N in c){const y=c[N],g=C.target.uuid;g in y&&(y[g].dispose(),delete y[g])}}}const Em={[Cs]:Ps,[Ds]:Is,[Ls]:Ns,[ui]:Us,[Ps]:Cs,[Is]:Ds,[Ns]:Ls,[Us]:ui};function Tm(i,t){function e(){let z=!1;const ot=new Qt;let ct=null;const xt=new Qt(0,0,0,0);return{setMask:function(it){ct!==it&&!z&&(i.colorMask(it,it,it,it),ct=it)},setLocked:function(it){z=it},setClear:function(it,j,yt,Bt,ee){ee===!0&&(it*=Bt,j*=Bt,yt*=Bt),ot.set(it,j,yt,Bt),xt.equals(ot)===!1&&(i.clearColor(it,j,yt,Bt),xt.copy(ot))},reset:function(){z=!1,ct=null,xt.set(-1,0,0,0)}}}function n(){let z=!1,ot=!1,ct=null,xt=null,it=null;return{setReversed:function(j){if(ot!==j){const yt=t.get("EXT_clip_control");j?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),ot=j;const Bt=it;it=null,this.setClear(Bt)}},getReversed:function(){return ot},setTest:function(j){j?W(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(j){ct!==j&&!z&&(i.depthMask(j),ct=j)},setFunc:function(j){if(ot&&(j=Em[j]),xt!==j){switch(j){case Cs:i.depthFunc(i.NEVER);break;case Ps:i.depthFunc(i.ALWAYS);break;case Ds:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Ls:i.depthFunc(i.EQUAL);break;case Us:i.depthFunc(i.GEQUAL);break;case Is:i.depthFunc(i.GREATER);break;case Ns:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=j}},setLocked:function(j){z=j},setClear:function(j){it!==j&&(ot&&(j=1-j),i.clearDepth(j),it=j)},reset:function(){z=!1,ct=null,xt=null,it=null,ot=!1}}}function r(){let z=!1,ot=null,ct=null,xt=null,it=null,j=null,yt=null,Bt=null,ee=null;return{setTest:function(Zt){z||(Zt?W(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!z&&(i.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,rn,$e){(ct!==Zt||xt!==rn||it!==$e)&&(i.stencilFunc(Zt,rn,$e),ct=Zt,xt=rn,it=$e)},setOp:function(Zt,rn,$e){(j!==Zt||yt!==rn||Bt!==$e)&&(i.stencilOp(Zt,rn,$e),j=Zt,yt=rn,Bt=$e)},setLocked:function(Zt){z=Zt},setClear:function(Zt){ee!==Zt&&(i.clearStencil(Zt),ee=Zt)},reset:function(){z=!1,ot=null,ct=null,xt=null,it=null,j=null,yt=null,Bt=null,ee=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,f=[],_=null,v=!1,m=null,d=null,A=null,b=null,x=null,P=null,C=null,D=new Ot(0,0,0),N=0,y=!1,g=null,T=null,w=null,U=null,M=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=G>=2);let Q=null,tt={};const J=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),nt=new Qt().fromArray(J),Rt=new Qt().fromArray(Y);function Nt(z,ot,ct,xt){const it=new Uint8Array(4),j=i.createTexture();i.bindTexture(z,j),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<ct;yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(ot+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return j}const K={};K[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(i.DEPTH_TEST),a.setFunc(ui),Dt(!1),vt(Za),W(i.CULL_FACE),Jt(hn);function W(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function rt(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function pt(z,ot){return h[z]!==ot?(i.bindFramebuffer(z,ot),h[z]=ot,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(z,ot){let ct=f,xt=!1;if(z){ct=p.get(ot),ct===void 0&&(ct=[],p.set(ot,ct));const it=z.textures;if(ct.length!==it.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let j=0,yt=it.length;j<yt;j++)ct[j]=i.COLOR_ATTACHMENT0+j;ct.length=it.length,xt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ct)}function kt(z){return _!==z?(i.useProgram(z),_=z,!0):!1}const ge={[Nn]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};ge[_c]=i.MIN,ge[vc]=i.MAX;const F={[xc]:i.ZERO,[Mc]:i.ONE,[Sc]:i.SRC_COLOR,[ws]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[Ec]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[Rs]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Cc]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Dc]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(z,ot,ct,xt,it,j,yt,Bt,ee,Zt){if(z===hn){v===!0&&(rt(i.BLEND),v=!1);return}if(v===!1&&(W(i.BLEND),v=!0),z!==pc){if(z!==m||Zt!==y){if((d!==Nn||x!==Nn)&&(i.blendEquation(i.FUNC_ADD),d=Nn,x=Nn),Zt)switch(z){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $a:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,b=null,P=null,C=null,D.set(0,0,0),N=0,m=z,y=Zt}return}it=it||ot,j=j||ct,yt=yt||xt,(ot!==d||it!==x)&&(i.blendEquationSeparate(ge[ot],ge[it]),d=ot,x=it),(ct!==A||xt!==b||j!==P||yt!==C)&&(i.blendFuncSeparate(F[ct],F[xt],F[j],F[yt]),A=ct,b=xt,P=j,C=yt),(Bt.equals(D)===!1||ee!==N)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ee),D.copy(Bt),N=ee),m=z,y=!1}function Ft(z,ot){z.side===We?rt(i.CULL_FACE):W(i.CULL_FACE);let ct=z.side===Ce;ot&&(ct=!ct),Dt(ct),z.blending===li&&z.transparent===!1?Jt(hn):Jt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const xt=z.stencilWrite;o.setTest(xt),xt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Et(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(z){g!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),g=z)}function vt(z){z!==hc?(W(i.CULL_FACE),z!==T&&(z===Za?i.cullFace(i.BACK):z===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),T=z}function ie(z){z!==w&&(L&&i.lineWidth(z),w=z)}function Et(z,ot,ct){z?(W(i.POLYGON_OFFSET_FILL),(U!==ot||M!==ct)&&(i.polygonOffset(ot,ct),U=ot,M=ct)):rt(i.POLYGON_OFFSET_FILL)}function Vt(z){z?W(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function _e(z){z===void 0&&(z=i.TEXTURE0+I-1),Q!==z&&(i.activeTexture(z),Q=z)}function he(z,ot,ct){ct===void 0&&(Q===null?ct=i.TEXTURE0+I-1:ct=Q);let xt=tt[ct];xt===void 0&&(xt={type:void 0,texture:void 0},tt[ct]=xt),(xt.type!==z||xt.texture!==ot)&&(Q!==ct&&(i.activeTexture(ct),Q=ct),i.bindTexture(z,ot||K[z]),xt.type=z,xt.texture=ot)}function R(){const z=tt[Q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(z){nt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),nt.copy(z))}function Ut(z){Rt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Rt.copy(z))}function At(z,ot){let ct=c.get(ot);ct===void 0&&(ct=new WeakMap,c.set(ot,ct));let xt=ct.get(z);xt===void 0&&(xt=i.getUniformBlockIndex(ot,z.name),ct.set(z,xt))}function ht(z,ot){const xt=c.get(ot).get(z);l.get(ot)!==xt&&(i.uniformBlockBinding(ot,xt,z.__bindingPointIndex),l.set(ot,xt))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Q=null,tt={},h={},p=new WeakMap,f=[],_=null,v=!1,m=null,d=null,A=null,b=null,x=null,P=null,C=null,D=new Ot(0,0,0),N=0,y=!1,g=null,T=null,w=null,U=null,M=null,nt.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:W,disable:rt,bindFramebuffer:pt,drawBuffers:_t,useProgram:kt,setBlending:Jt,setMaterial:Ft,setFlipSided:Dt,setCullFace:vt,setLineWidth:ie,setPolygonOffset:Et,setScissorTest:Vt,activeTexture:_e,bindTexture:he,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:bt,texImage3D:at,updateUBOMapping:At,uniformBlockBinding:ht,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:$,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:wt,scissor:dt,viewport:Ut,reset:zt}}function bm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):Rr("canvas")}function v(R,S,k){let $=1;const et=he(R);if((et.width>k||et.height>k)&&($=k/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor($*et.width),wt=Math.floor($*et.height);h===void 0&&(h=_(Z,wt));const lt=S?_(Z,wt):h;return lt.width=Z,lt.height=wt,lt.getContext("2d").drawImage(R,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+wt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,S,k,$,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),S===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),S===i.RGBA){const wt=et?Ar:qt.getTransfer($);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=wt===$t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,S){let k;return R?S===null||S===Hn||S===Ii?k=i.DEPTH24_STENCIL8:S===Qe?k=i.DEPTH32F_STENCIL8:S===Ui&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hn||S===Ii?k=i.DEPTH_COMPONENT24:S===Qe?k=i.DEPTH_COMPONENT32F:S===Ui&&(k=i.DEPTH_COMPONENT16),k}function P(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),N(S),S.isVideoTexture&&u.delete(S)}function D(R){const S=R.target;S.removeEventListener("dispose",D),g(S)}function N(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,$=p.get(k);if($){const et=$[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&y(R),Object.keys($).length===0&&p.delete(k)}n.remove(R)}function y(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const k=R.source,$=p.get(k);delete $[S.__cacheKey],a.memory.textures--}function g(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let et=0;et<S.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[$][et]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,et=k.length;$<et;$++){const Z=n.get(k[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[$])}n.remove(R)}let T=0;function w(){T=0}function U(){const R=T;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),T+=1,R}function M(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function I(R,S){const k=n.get(R);if(R.isVideoTexture&&Vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function L(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function G(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function B(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){W(k,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const Q={[br]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Bs]:i.MIRRORED_REPEAT},tt={[Oe]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},J={[Bc]:i.NEVER,[Wc]:i.ALWAYS,[zc]:i.LESS,[Tl]:i.LEQUAL,[Hc]:i.EQUAL,[kc]:i.GEQUAL,[Vc]:i.GREATER,[Gc]:i.NOTEQUAL};function Y(R,S){if(S.type===Qe&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===je||S.magFilter===Vr||S.magFilter===Wi||S.magFilter===Bn||S.minFilter===je||S.minFilter===Vr||S.minFilter===Wi||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Oe||S.minFilter!==Wi&&S.minFilter!==Bn||S.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let et=p.get($);et===void 0&&(et={},p.set($,et));const Z=M(S);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),et[Z].usedTimes++;const wt=et[R.__cacheKey];wt!==void 0&&(et[R.__cacheKey].usedTimes--,wt.usedTimes===0&&y(S)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return k}function Rt(R,S,k){return Math.floor(Math.floor(R/k)/S)}function Nt(R,S,k,$){const Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,$,S.data);else{Z.sort((at,dt)=>at.start-dt.start);let wt=0;for(let at=1;at<Z.length;at++){const dt=Z[wt],Ut=Z[at],At=dt.start+dt.count,ht=Rt(Ut.start,S.width,4),zt=Rt(dt.start,S.width,4);Ut.start<=At+1&&ht===zt&&Rt(Ut.start+Ut.count-1,S.width,4)===ht?dt.count=Math.max(dt.count,Ut.start+Ut.count-dt.start):(++wt,Z[wt]=Ut)}Z.length=wt+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let at=0,dt=Z.length;at<dt;at++){const Ut=Z[at],At=Math.floor(Ut.start/4),ht=Math.ceil(Ut.count/4),zt=At%S.width,z=Math.floor(At/S.width),ot=ht,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,zt,z,ot,ct,k,$,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function K(R,S,k){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const et=nt(R,S),Z=S.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+k);const wt=n.get(Z);if(Z.version!==wt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const lt=qt.getPrimaries(qt.workingColorSpace),Tt=S.colorSpace===Sn?null:qt.getPrimaries(S.colorSpace),bt=S.colorSpace===Sn||lt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let at=v(S.image,!1,r.maxTextureSize);at=_e(S,at);const dt=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type);let At=b(S.internalFormat,dt,Ut,S.colorSpace,S.isVideoTexture);Y($,S);let ht;const zt=S.mipmaps,z=S.isVideoTexture!==!0,ot=wt.__version===void 0||et===!0,ct=Z.dataReady,xt=P(S,at);if(S.isDepthTexture)At=x(S.format===Fi,S.type),ot&&(z?e.texStorage2D(i.TEXTURE_2D,1,At,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,dt,Ut,null));else if(S.isDataTexture)if(zt.length>0){z&&ot&&e.texStorage2D(i.TEXTURE_2D,xt,At,zt[0].width,zt[0].height);for(let it=0,j=zt.length;it<j;it++)ht=zt[it],z?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,Ut,ht.data):e.texImage2D(i.TEXTURE_2D,it,At,ht.width,ht.height,0,dt,Ut,ht.data);S.generateMipmaps=!1}else z?(ot&&e.texStorage2D(i.TEXTURE_2D,xt,At,at.width,at.height),ct&&Nt(S,at,dt,Ut)):e.texImage2D(i.TEXTURE_2D,0,At,at.width,at.height,0,dt,Ut,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,At,zt[0].width,zt[0].height,at.depth);for(let it=0,j=zt.length;it<j;it++)if(ht=zt[it],S.format!==qe)if(dt!==null)if(z){if(ct)if(S.layerUpdates.size>0){const yt=Do(ht.width,ht.height,S.format,S.type);for(const Bt of S.layerUpdates){const ee=ht.data.subarray(Bt*yt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*yt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Bt,ht.width,ht.height,1,dt,ee)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,at.depth,dt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,At,ht.width,ht.height,at.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,at.depth,dt,Ut,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,At,ht.width,ht.height,at.depth,0,dt,Ut,ht.data)}else{z&&ot&&e.texStorage2D(i.TEXTURE_2D,xt,At,zt[0].width,zt[0].height);for(let it=0,j=zt.length;it<j;it++)ht=zt[it],S.format!==qe?dt!==null?z?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,it,At,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ht.width,ht.height,dt,Ut,ht.data):e.texImage2D(i.TEXTURE_2D,it,At,ht.width,ht.height,0,dt,Ut,ht.data)}else if(S.isDataArrayTexture)if(z){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,At,at.width,at.height,at.depth),ct)if(S.layerUpdates.size>0){const it=Do(at.width,at.height,S.format,S.type);for(const j of S.layerUpdates){const yt=at.data.subarray(j*it/at.data.BYTES_PER_ELEMENT,(j+1)*it/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,at.width,at.height,1,dt,Ut,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,dt,Ut,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,at.width,at.height,at.depth,0,dt,Ut,at.data);else if(S.isData3DTexture)z?(ot&&e.texStorage3D(i.TEXTURE_3D,xt,At,at.width,at.height,at.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,dt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,At,at.width,at.height,at.depth,0,dt,Ut,at.data);else if(S.isFramebufferTexture){if(ot)if(z)e.texStorage2D(i.TEXTURE_2D,xt,At,at.width,at.height);else{let it=at.width,j=at.height;for(let yt=0;yt<xt;yt++)e.texImage2D(i.TEXTURE_2D,yt,At,it,j,0,dt,Ut,null),it>>=1,j>>=1}}else if(zt.length>0){if(z&&ot){const it=he(zt[0]);e.texStorage2D(i.TEXTURE_2D,xt,At,it.width,it.height)}for(let it=0,j=zt.length;it<j;it++)ht=zt[it],z?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt,Ut,ht):e.texImage2D(i.TEXTURE_2D,it,At,dt,Ut,ht);S.generateMipmaps=!1}else if(z){if(ot){const it=he(at);e.texStorage2D(i.TEXTURE_2D,xt,At,it.width,it.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Ut,at)}else e.texImage2D(i.TEXTURE_2D,0,At,dt,Ut,at);m(S)&&d($),wt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function W(R,S,k){if(S.image.length!==6)return;const $=nt(R,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const Z=n.get(et);if(et.version!==Z.__version||$===!0){e.activeTexture(i.TEXTURE0+k);const wt=qt.getPrimaries(qt.workingColorSpace),lt=S.colorSpace===Sn?null:qt.getPrimaries(S.colorSpace),Tt=S.colorSpace===Sn||wt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!bt&&!at?dt[j]=v(S.image[j],!0,r.maxCubemapSize):dt[j]=at?S.image[j].image:S.image[j],dt[j]=_e(S,dt[j]);const Ut=dt[0],At=s.convert(S.format,S.colorSpace),ht=s.convert(S.type),zt=b(S.internalFormat,At,ht,S.colorSpace),z=S.isVideoTexture!==!0,ot=Z.__version===void 0||$===!0,ct=et.dataReady;let xt=P(S,Ut);Y(i.TEXTURE_CUBE_MAP,S);let it;if(bt){z&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,zt,Ut.width,Ut.height);for(let j=0;j<6;j++){it=dt[j].mipmaps;for(let yt=0;yt<it.length;yt++){const Bt=it[yt];S.format!==qe?At!==null?z?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Bt.width,Bt.height,At,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,zt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Bt.width,Bt.height,At,ht,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,zt,Bt.width,Bt.height,0,At,ht,Bt.data)}}}else{if(it=S.mipmaps,z&&ot){it.length>0&&xt++;const j=he(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,zt,j.width,j.height)}for(let j=0;j<6;j++)if(at){z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,At,ht,dt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,dt[j].width,dt[j].height,0,At,ht,dt[j].data);for(let yt=0;yt<it.length;yt++){const ee=it[yt].image[j].image;z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,ee.width,ee.height,At,ht,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,zt,ee.width,ee.height,0,At,ht,ee.data)}}else{z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,ht,dt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,At,ht,dt[j]);for(let yt=0;yt<it.length;yt++){const Bt=it[yt];z?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,At,ht,Bt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,zt,At,ht,Bt.image[j])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),Z.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function rt(R,S,k,$,et,Z){const wt=s.convert(k.format,k.colorSpace),lt=s.convert(k.type),Tt=b(k.internalFormat,wt,lt,k.colorSpace),bt=n.get(S),at=n.get(k);if(at.__renderTarget=S,!bt.__hasExternalTextures){const dt=Math.max(1,S.width>>Z),Ut=Math.max(1,S.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Tt,dt,Ut,S.depth,0,wt,lt,null):e.texImage2D(et,Z,Tt,dt,Ut,0,wt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Et(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,at.__webglTexture,0,ie(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,at.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,et=$&&$.isDepthTexture?$.type:null,Z=x(S.stencilBuffer,et),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ie(S);Et(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Z,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{const $=S.textures;for(let et=0;et<$.length;et++){const Z=$[et],wt=s.convert(Z.format,Z.colorSpace),lt=s.convert(Z.type),Tt=b(Z.internalFormat,wt,lt,Z.colorSpace),bt=ie(S);k&&Et(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Tt,S.width,S.height):Et(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const et=$.__webglTexture,Z=ie(S);if(S.depthTexture.format===Ni)Et(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===Fi)Et(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function kt(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?_t(S.__webglFramebuffer[0],R):_t(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),pt(S.__webglDepthbuffer[$],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),pt(S.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(R,S,k){const $=n.get(R);S!==void 0&&rt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&kt(R)}function F(R){const S=R.texture,k=n.get(R),$=n.get(S);R.addEventListener("dispose",D);const et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)k.__webglFramebuffer[lt][Tt]=i.createFramebuffer()}else k.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)k.__webglFramebuffer[lt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(wt)for(let lt=0,Tt=et.length;lt<Tt;lt++){const bt=n.get(et[lt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Tt=et[lt];k.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const bt=s.convert(Tt.format,Tt.colorSpace),at=s.convert(Tt.type),dt=b(Tt.internalFormat,bt,at,Tt.colorSpace,R.isXRRenderTarget===!0),Ut=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Y(i.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)rt(k.__webglFramebuffer[lt][Tt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else rt(k.__webglFramebuffer[lt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,Tt=et.length;lt<Tt;lt++){const bt=et[lt],at=n.get(bt);let dt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,at.__webglTexture),Y(dt,bt),rt(k.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+lt,dt,0),m(bt)&&d(dt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Y(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)rt(k.__webglFramebuffer[Tt],R,S,i.COLOR_ATTACHMENT0,lt,Tt);else rt(k.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,lt,0);m(S)&&d(lt),e.unbindTexture()}R.depthBuffer&&kt(R)}function Jt(R){const S=R.textures;for(let k=0,$=S.length;k<$;k++){const et=S[k];if(m(et)){const Z=A(R),wt=n.get(et).__webglTexture;e.bindTexture(Z,wt),d(Z),e.unbindTexture()}}}const Ft=[],Dt=[];function vt(R){if(R.samples>0){if(Et(R)===!1){const S=R.textures,k=R.width,$=R.height;let et=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),lt=S.length>1;if(lt)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const at=n.get(S[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,et,i.NEAREST),l===!0&&(Ft.length=0,Dt.length=0,Ft.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ft.push(Z),Dt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);const at=n.get(S[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ie(R){return Math.min(r.maxSamples,R.samples)}function Et(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function _e(R,S){const k=R.colorSpace,$=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==di&&k!==Sn&&(qt.getTransfer(k)===$t?($!==qe||et!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=w,this.setTexture2D=I,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=ge,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Et}function Am(i,t){function e(n,r=Sn){let s;const a=qt.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gl)return i.BYTE;if(n===_l)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===Sl)return i.RGB;if(n===qe)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===yl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===xr||n===Mr||n===Sr||n===yr)if(a===$t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zs||n===Hs||n===Vs||n===Gs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ks||n===Ws||n===Xs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ks||n===Ws)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xs)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qs||n===Ys||n===Zs||n===Ks||n===$s||n===Js||n===js||n===Qs||n===ta||n===ea||n===na||n===ia||n===ra||n===sa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qs)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ys)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zs)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ks)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$s)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Js)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===js)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qs)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===oa||n===la)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===ua||n===ha||n===fa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new de({vertexShader:wm,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pm extends gi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,_=null;const v=typeof XRWebGLBinding<"u",m=new Cm,d={},A=e.getContextAttributes();let b=null,x=null;const P=[],C=[],D=new gt;let N=null;const y=new Ne;y.viewport=new Qt;const g=new Ne;g.viewport=new Qt;const T=[y,g],w=new Ku;let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let W=P[K];return W===void 0&&(W=new us,P[K]=W),W.getTargetRaySpace()},this.getControllerGrip=function(K){let W=P[K];return W===void 0&&(W=new us,P[K]=W),W.getGripSpace()},this.getHand=function(K){let W=P[K];return W===void 0&&(W=new us,P[K]=W),W.getHandSpace()};function I(K){const W=C.indexOf(K.inputSource);if(W===-1)return;const rt=P[W];rt!==void 0&&(rt.update(K.inputSource,K.frame,c||a),rt.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",G);for(let K=0;K<P.length;K++){const W=C[K];W!==null&&(C[K]=null,P[K].disconnect(W))}U=null,M=null,m.reset();for(const K in d)delete d[K];t.setRenderTarget(b),f=null,p=null,h=null,r=null,x=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",L),r.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,pt=null,_t=null;A.depth&&(_t=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=A.stencil?Fi:Ni,pt=A.stencil?Ii:Hn);const kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};h=this.getBinding(),p=h.createProjectionLayer(kt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Ze(p.textureWidth,p.textureHeight,{format:qe,type:en,depthTexture:new Nl(p.textureWidth,p.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const rt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ze(f.framebufferWidth,f.framebufferHeight,{format:qe,type:en,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Nt.setContext(r),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let W=0;W<K.removed.length;W++){const rt=K.removed[W],pt=C.indexOf(rt);pt>=0&&(C[pt]=null,P[pt].disconnect(rt))}for(let W=0;W<K.added.length;W++){const rt=K.added[W];let pt=C.indexOf(rt);if(pt===-1){for(let kt=0;kt<P.length;kt++)if(kt>=C.length){C.push(rt),pt=kt;break}else if(C[kt]===null){C[kt]=rt,pt=kt;break}if(pt===-1)break}const _t=P[pt];_t&&_t.connect(rt)}}const B=new O,Q=new O;function tt(K,W,rt){B.setFromMatrixPosition(W.matrixWorld),Q.setFromMatrixPosition(rt.matrixWorld);const pt=B.distanceTo(Q),_t=W.projectionMatrix.elements,kt=rt.projectionMatrix.elements,ge=_t[14]/(_t[10]-1),F=_t[14]/(_t[10]+1),Jt=(_t[9]+1)/_t[5],Ft=(_t[9]-1)/_t[5],Dt=(_t[8]-1)/_t[0],vt=(kt[8]+1)/kt[0],ie=ge*Dt,Et=ge*vt,Vt=pt/(-Dt+vt),_e=Vt*-Dt;if(W.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(Vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(W.projectionMatrix),K.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const he=ge+Vt,R=F+Vt,S=ie-_e,k=Et+(pt-_e),$=Jt*F/R*he,et=Ft*F/R*he;K.projectionMatrix.makePerspective(S,k,$,et,he,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,W){W===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(W.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let W=K.near,rt=K.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),w.near=g.near=y.near=W,w.far=g.far=y.far=rt,(U!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,M=w.far),w.layers.mask=K.layers.mask|6,y.layers.mask=w.layers.mask&3,g.layers.mask=w.layers.mask&5;const pt=K.parent,_t=w.cameras;J(w,pt);for(let kt=0;kt<_t.length;kt++)J(_t[kt],pt);_t.length===2?tt(w,y,g):w.projectionMatrix.copy(y.projectionMatrix),Y(K,w,pt)};function Y(K,W,rt){rt===null?K.matrix.copy(W.matrixWorld):(K.matrix.copy(rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(W.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(W.projectionMatrix),K.projectionMatrixInverse.copy(W.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)},this.getCameraTexture=function(K){return d[K]};let nt=null;function Rt(K,W){if(u=W.getViewerPose(c||a),_=W,u!==null){const rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let pt=!1;rt.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let F=0;F<rt.length;F++){const Jt=rt[F];let Ft=null;if(f!==null)Ft=f.getViewport(Jt);else{const vt=h.getViewSubImage(p,Jt);Ft=vt.viewport,F===0&&(t.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(x))}let Dt=T[F];Dt===void 0&&(Dt=new Ne,Dt.layers.enable(F),Dt.viewport=new Qt,T[F]=Dt),Dt.matrix.fromArray(Jt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Jt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),F===0&&(w.matrix.copy(Dt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(Dt)}const _t=r.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const F=h.getDepthInformation(rt[0]);F&&F.isValid&&F.texture&&m.init(F,r.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let F=0;F<rt.length;F++){const Jt=rt[F].camera;if(Jt){let Ft=d[Jt];Ft||(Ft=new Fl,d[Jt]=Ft);const Dt=h.getCameraImage(Jt);Ft.sourceTexture=Dt}}}}for(let rt=0;rt<P.length;rt++){const pt=C[rt],_t=P[rt];pt!==null&&_t!==void 0&&_t.update(pt,W,c||a)}nt&&nt(K,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),_=null}const Nt=new Vl;Nt.setAnimationLoop(Rt),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}}const Ln=new nn,Dm=new Kt;function Lm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ce&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ce&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),b=A.envMap,x=A.envMapRotation;b&&(m.envMap.value=b,Ln.copy(x),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),m.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Ln)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ce&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Um(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const x=b.program;n.uniformBlockBinding(A,x)}function c(A,b){let x=r[A.id];x===void 0&&(_(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(A,P);const C=t.render.frame;s[A.id]!==C&&(p(A),s[A.id]=C)}function u(A){const b=h();A.__bindingPointIndex=b;const x=i.createBuffer(),P=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const b=r[A.id],x=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,D=x.length;C<D;C++){const N=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,g=N.length;y<g;y++){const T=N[y];if(f(T,C,y,P)===!0){const w=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let M=0;for(let I=0;I<U.length;I++){const L=U[I],G=v(L);typeof L=="number"||typeof L=="boolean"?(T.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,w+M,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=0,T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=0,T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=0):(L.toArray(T.__data,M),M+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,b,x,P){const C=A.value,D=b+"_"+x;if(P[D]===void 0)return typeof C=="number"||typeof C=="boolean"?P[D]=C:P[D]=C.clone(),!0;{const N=P[D];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[D]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(A){const b=A.uniforms;let x=0;const P=16;for(let D=0,N=b.length;D<N;D++){const y=Array.isArray(b[D])?b[D]:[b[D]];for(let g=0,T=y.length;g<T;g++){const w=y[g],U=Array.isArray(w.value)?w.value:[w.value];for(let M=0,I=U.length;M<I;M++){const L=U[M],G=v(L),B=x%P,Q=B%G.boundary,tt=B+Q;x+=Q,tt!==0&&P-tt<G.storage&&(x+=P-tt),w.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,x+=G.storage}}}const C=x%P;return C>0&&(x+=P-C),A.__size=x,A.__cache={},this}function v(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Im{constructor(t={}){const{canvas:e=qc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const A=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=Ee;let C=0,D=0,N=null,y=-1,g=null;const T=new Qt,w=new Qt;let U=null;const M=new Ot(0);let I=0,L=e.width,G=e.height,B=1,Q=null,tt=null;const J=new Qt(0,0,L,G),Y=new Qt(0,0,L,G);let nt=!1;const Rt=new Ca;let Nt=!1,K=!1;const W=new Kt,rt=new O,pt=new Qt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ge(){return N===null?B:1}let F=n;function Jt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",it,!1),F===null){const H="webgl2";if(F=Jt(H,E),F===null)throw Jt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ft,Dt,vt,ie,Et,Vt,_e,he,R,S,k,$,et,Z,wt,lt,Tt,bt,at,dt,Ut,At,ht,zt;function z(){Ft=new Wd(F),Ft.init(),At=new Am(F,Ft),Dt=new Od(F,Ft,t,At),vt=new Tm(F,Ft),Dt.reversedDepthBuffer&&p&&vt.buffers.depth.setReversed(!0),ie=new Yd(F),Et=new hm,Vt=new bm(F,Ft,vt,Et,Dt,At,ie),_e=new zd(x),he=new kd(x),R=new ju(F),ht=new Nd(F,R),S=new Xd(F,R,ie,ht),k=new Kd(F,S,R,ie),at=new Zd(F,Dt,Vt),lt=new Bd(Et),$=new um(x,_e,he,Ft,Dt,ht,lt),et=new Lm(x,Et),Z=new dm,wt=new xm(Ft),bt=new Id(x,_e,he,vt,k,f,l),Tt=new ym(x,k,Dt),zt=new Um(F,ie,Dt,vt),dt=new Fd(F,Ft,ie),Ut=new qd(F,Ft,ie),ie.programs=$.programs,x.capabilities=Dt,x.extensions=Ft,x.properties=Et,x.renderLists=Z,x.shadowMap=Tt,x.state=vt,x.info=ie}z();const ot=new Pm(x,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(L,G,!1))},this.getSize=function(E){return E.set(L,G)},this.setSize=function(E,H,X=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,G=H,e.width=Math.floor(E*B),e.height=Math.floor(H*B),X===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(L*B,G*B).floor()},this.setDrawingBufferSize=function(E,H,X){L=E,G=H,B=X,e.width=Math.floor(E*X),e.height=Math.floor(H*X),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,H,X,q){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,H,X,q),vt.viewport(T.copy(J).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,H,X,q){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,H,X,q),vt.scissor(w.copy(Y).multiplyScalar(B).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){vt.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){tt=E},this.getClearColor=function(E){return E.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,X=!0){let q=0;if(E){let V=!1;if(N!==null){const st=N.texture.format;V=st===ba||st===Ta||st===Ea}if(V){const st=N.texture.type,ft=st===en||st===Hn||st===Ui||st===Ii||st===Ma||st===Sa,St=bt.getClearColor(),mt=bt.getClearAlpha(),Lt=St.r,It=St.g,Ct=St.b;ft?(_[0]=Lt,_[1]=It,_[2]=Ct,_[3]=mt,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=Lt,v[1]=It,v[2]=Ct,v[3]=mt,F.clearBufferiv(F.COLOR,0,v))}else q|=F.COLOR_BUFFER_BIT}H&&(q|=F.DEPTH_BUFFER_BIT),X&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),bt.dispose(),Z.dispose(),wt.dispose(),Et.dispose(),_e.dispose(),he.dispose(),k.dispose(),ht.dispose(),zt.dispose(),$.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",$e),ot.removeEventListener("sessionend",Ba),bn.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ie.autoReset,H=Tt.enabled,X=Tt.autoUpdate,q=Tt.needsUpdate,V=Tt.type;z(),ie.autoReset=E,Tt.enabled=H,Tt.autoUpdate=X,Tt.needsUpdate=q,Tt.type=V}function it(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){const H=E.target;H.removeEventListener("dispose",j),yt(H)}function yt(E){Bt(E),Et.remove(E)}function Bt(E){const H=Et.get(E).programs;H!==void 0&&(H.forEach(function(X){$.releaseProgram(X)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,X,q,V,st){H===null&&(H=_t);const ft=V.isMesh&&V.matrixWorld.determinant()<0,St=ql(E,H,X,q,V);vt.setMaterial(q,ft);let mt=X.index,Lt=1;if(q.wireframe===!0){if(mt=S.getWireframeAttribute(X),mt===void 0)return;Lt=2}const It=X.drawRange,Ct=X.attributes.position;let Xt=It.start*Lt,jt=(It.start+It.count)*Lt;st!==null&&(Xt=Math.max(Xt,st.start*Lt),jt=Math.min(jt,(st.start+st.count)*Lt)),mt!==null?(Xt=Math.max(Xt,0),jt=Math.min(jt,mt.count)):Ct!=null&&(Xt=Math.max(Xt,0),jt=Math.min(jt,Ct.count));const ce=jt-Xt;if(ce<0||ce===1/0)return;ht.setup(V,q,St,X,mt);let ne,te=dt;if(mt!==null&&(ne=R.get(mt),te=Ut,te.setIndex(ne)),V.isMesh)q.wireframe===!0?(vt.setLineWidth(q.wireframeLinewidth*ge()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(V.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),vt.setLineWidth(Pt*ge()),V.isLineSegments?te.setMode(F.LINES):V.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else V.isPoints?te.setMode(F.POINTS):V.isSprite&&te.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pt=V._multiDrawStarts,se=V._multiDrawCounts,Yt=V._multiDrawCount,De=mt?R.get(mt).bytesPerElement:1,Wn=Et.get(q).currentProgram.getUniforms();for(let Le=0;Le<Yt;Le++)Wn.setValue(F,"_gl_DrawID",Le),te.render(Pt[Le]/De,se[Le])}else if(V.isInstancedMesh)te.renderInstances(Xt,ce,V.count);else if(X.isInstancedBufferGeometry){const Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,se=Math.min(X.instanceCount,Pt);te.renderInstances(Xt,ce,se)}else te.render(Xt,ce)};function ee(E,H,X){E.transparent===!0&&E.side===We&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,ki(E,H,X),E.side=En,E.needsUpdate=!0,ki(E,H,X),E.side=We):ki(E,H,X)}this.compile=function(E,H,X=null){X===null&&(X=E),d=wt.get(X),d.init(H),b.push(d),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();const q=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const st=V.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const St=st[ft];ee(St,X,V),q.add(St)}else ee(st,X,V),q.add(st)}),d=b.pop(),q},this.compileAsync=function(E,H,X=null){const q=this.compile(E,H,X);return new Promise(V=>{function st(){if(q.forEach(function(ft){Et.get(ft).currentProgram.isReady()&&q.delete(ft)}),q.size===0){V(E);return}setTimeout(st,10)}Ft.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Zt=null;function rn(E){Zt&&Zt(E)}function $e(){bn.stop()}function Ba(){bn.start()}const bn=new Vl;bn.setAnimationLoop(rn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(E){Zt=E,ot.setAnimationLoop(E),E===null?bn.stop():bn.start()},ot.addEventListener("sessionstart",$e),ot.addEventListener("sessionend",Ba),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(H),H=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,N),d=wt.get(E,b.length),d.init(H),b.push(d),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Rt.setFromProjectionMatrix(W,tn,H.reversedDepth),K=this.localClippingEnabled,Nt=lt.init(this.clippingPlanes,K),m=Z.get(E,A.length),m.init(),A.push(m),ot.enabled===!0&&ot.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Or(st,H,-1/0,x.sortObjects)}Or(E,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,tt),kt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,kt&&bt.addToRenderList(m,E),this.info.render.frame++,Nt===!0&&lt.beginShadows();const X=d.state.shadowsArray;Tt.render(X,E,H),Nt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,V=m.transmissive;if(d.setupLights(),H.isArrayCamera){const st=H.cameras;if(V.length>0)for(let ft=0,St=st.length;ft<St;ft++){const mt=st[ft];Ha(q,V,E,mt)}kt&&bt.render(E);for(let ft=0,St=st.length;ft<St;ft++){const mt=st[ft];za(m,E,mt,mt.viewport)}}else V.length>0&&Ha(q,V,E,H),kt&&bt.render(E),za(m,E,H);N!==null&&D===0&&(Vt.updateMultisampleRenderTarget(N),Vt.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(x,E,H),ht.resetDefaultState(),y=-1,g=null,b.pop(),b.length>0?(d=b[b.length-1],Nt===!0&&lt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Or(E,H,X,q){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Rt.intersectsSprite(E)){q&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(W);const ft=k.update(E),St=E.material;St.visible&&m.push(E,ft,St,X,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Rt.intersectsObject(E))){const ft=k.update(E),St=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),pt.copy(ft.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(W)),Array.isArray(St)){const mt=ft.groups;for(let Lt=0,It=mt.length;Lt<It;Lt++){const Ct=mt[Lt],Xt=St[Ct.materialIndex];Xt&&Xt.visible&&m.push(E,ft,Xt,X,pt.z,Ct)}}else St.visible&&m.push(E,ft,St,X,pt.z,null)}}const st=E.children;for(let ft=0,St=st.length;ft<St;ft++)Or(st[ft],H,X,q)}function za(E,H,X,q){const V=E.opaque,st=E.transmissive,ft=E.transparent;d.setupLightsView(X),Nt===!0&&lt.setGlobalState(x.clippingPlanes,X),q&&vt.viewport(T.copy(q)),V.length>0&&Gi(V,H,X),st.length>0&&Gi(st,H,X),ft.length>0&&Gi(ft,H,X),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ha(E,H,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Ze(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?fn:en,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const st=d.state.transmissionRenderTarget[q.id],ft=q.viewport||T;st.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const St=x.getRenderTarget(),mt=x.getActiveCubeFace(),Lt=x.getActiveMipmapLevel();x.setRenderTarget(st),x.getClearColor(M),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),kt&&bt.render(X);const It=x.toneMapping;x.toneMapping=yn;const Ct=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),Nt===!0&&lt.setGlobalState(x.clippingPlanes,q),Gi(E,X,q),Vt.updateMultisampleRenderTarget(st),Vt.updateRenderTargetMipmap(st),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let jt=0,ce=H.length;jt<ce;jt++){const ne=H[jt],te=ne.object,Pt=ne.geometry,se=ne.material,Yt=ne.group;if(se.side===We&&te.layers.test(q.layers)){const De=se.side;se.side=Ce,se.needsUpdate=!0,Va(te,X,q,Pt,se,Yt),se.side=De,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(Vt.updateMultisampleRenderTarget(st),Vt.updateRenderTargetMipmap(st))}x.setRenderTarget(St,mt,Lt),x.setClearColor(M,I),Ct!==void 0&&(q.viewport=Ct),x.toneMapping=It}function Gi(E,H,X){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,st=E.length;V<st;V++){const ft=E[V],St=ft.object,mt=ft.geometry,Lt=ft.group;let It=ft.material;It.allowOverride===!0&&q!==null&&(It=q),St.layers.test(X.layers)&&Va(St,H,X,mt,It,Lt)}}function Va(E,H,X,q,V,st){E.onBeforeRender(x,H,X,q,V,st),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,H,X,q,E,st),V.transparent===!0&&V.side===We&&V.forceSinglePass===!1?(V.side=Ce,V.needsUpdate=!0,x.renderBufferDirect(X,H,q,V,E,st),V.side=En,V.needsUpdate=!0,x.renderBufferDirect(X,H,q,V,E,st),V.side=We):x.renderBufferDirect(X,H,q,V,E,st),E.onAfterRender(x,H,X,q,V,st)}function ki(E,H,X){H.isScene!==!0&&(H=_t);const q=Et.get(E),V=d.state.lights,st=d.state.shadowsArray,ft=V.state.version,St=$.getParameters(E,V.state,st,H,X),mt=$.getProgramCacheKey(St);let Lt=q.programs;q.environment=E.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(E.isMeshStandardMaterial?he:_e).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",j),Lt=new Map,q.programs=Lt);let It=Lt.get(mt);if(It!==void 0){if(q.currentProgram===It&&q.lightsStateVersion===ft)return ka(E,St),It}else St.uniforms=$.getUniforms(E),E.onBeforeCompile(St,x),It=$.acquireProgram(St,mt),Lt.set(mt,It),q.uniforms=St.uniforms;const Ct=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=lt.uniform),ka(E,St),q.needsLights=Zl(E),q.lightsStateVersion=ft,q.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.directionalShadowMap.value=V.state.directionalShadowMap,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotShadowMap.value=V.state.spotShadowMap,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMap.value=V.state.pointShadowMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=It,q.uniformsList=null,It}function Ga(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Er.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function ka(E,H){const X=Et.get(E);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function ql(E,H,X,q,V){H.isScene!==!0&&(H=_t),Vt.resetTextureUnits();const st=H.fog,ft=q.isMeshStandardMaterial?H.environment:null,St=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:di,mt=(q.isMeshStandardMaterial?he:_e).get(q.envMap||ft),Lt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,It=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ct=!!X.morphAttributes.position,Xt=!!X.morphAttributes.normal,jt=!!X.morphAttributes.color;let ce=yn;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ce=x.toneMapping);const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=ne!==void 0?ne.length:0,Pt=Et.get(q),se=d.state.lights;if(Nt===!0&&(K===!0||E!==g)){const be=E===g&&q.id===y;lt.setState(q,E,be)}let Yt=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==se.state.version||Pt.outputColorSpace!==St||V.isBatchedMesh&&Pt.batching===!1||!V.isBatchedMesh&&Pt.batching===!0||V.isBatchedMesh&&Pt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pt.instancing===!1||!V.isInstancedMesh&&Pt.instancing===!0||V.isSkinnedMesh&&Pt.skinning===!1||!V.isSkinnedMesh&&Pt.skinning===!0||V.isInstancedMesh&&Pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pt.instancingMorph===!1&&V.morphTexture!==null||Pt.envMap!==mt||q.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==lt.numPlanes||Pt.numIntersection!==lt.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==It||Pt.morphTargets!==Ct||Pt.morphNormals!==Xt||Pt.morphColors!==jt||Pt.toneMapping!==ce||Pt.morphTargetsCount!==te)&&(Yt=!0):(Yt=!0,Pt.__version=q.version);let De=Pt.currentProgram;Yt===!0&&(De=ki(q,H,V));let Wn=!1,Le=!1,xi=!1;const ae=De.getUniforms(),Be=Pt.uniforms;if(vt.useProgram(De.program)&&(Wn=!0,Le=!0,xi=!0),q.id!==y&&(y=q.id,Le=!0),Wn||g!==E){vt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ae.setValue(F,"projectionMatrix",E.projectionMatrix),ae.setValue(F,"viewMatrix",E.matrixWorldInverse);const we=ae.map.cameraPosition;we!==void 0&&we.setValue(F,rt.setFromMatrixPosition(E.matrixWorld)),Dt.logarithmicDepthBuffer&&ae.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ae.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),g!==E&&(g=E,Le=!0,xi=!0)}if(V.isSkinnedMesh){ae.setOptional(F,V,"bindMatrix"),ae.setOptional(F,V,"bindMatrixInverse");const be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ae.setValue(F,"boneTexture",be.boneTexture,Vt))}V.isBatchedMesh&&(ae.setOptional(F,V,"batchingTexture"),ae.setValue(F,"batchingTexture",V._matricesTexture,Vt),ae.setOptional(F,V,"batchingIdTexture"),ae.setValue(F,"batchingIdTexture",V._indirectTexture,Vt),ae.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ae.setValue(F,"batchingColorTexture",V._colorsTexture,Vt));const ze=X.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&at.update(V,X,De),(Le||Pt.receiveShadow!==V.receiveShadow)&&(Pt.receiveShadow=V.receiveShadow,ae.setValue(F,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Be.envMap.value=mt,Be.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Be.envMapIntensity.value=H.environmentIntensity),Le&&(ae.setValue(F,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Yl(Be,xi),st&&q.fog===!0&&et.refreshFogUniforms(Be,st),et.refreshMaterialUniforms(Be,q,B,G,d.state.transmissionRenderTarget[E.id]),Er.upload(F,Ga(Pt),Be,Vt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Er.upload(F,Ga(Pt),Be,Vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ae.setValue(F,"center",V.center),ae.setValue(F,"modelViewMatrix",V.modelViewMatrix),ae.setValue(F,"normalMatrix",V.normalMatrix),ae.setValue(F,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const be=q.uniformsGroups;for(let we=0,Br=be.length;we<Br;we++){const An=be[we];zt.update(An,De),zt.bind(An,De)}}return De}function Yl(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Zl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,H,X){const q=Et.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Et.get(E.texture).__webglTexture=H,Et.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const X=Et.get(E);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const Kl=F.createFramebuffer();this.setRenderTarget=function(E,H=0,X=0){N=E,C=H,D=X;let q=!0,V=null,st=!1,ft=!1;if(E){const mt=Et.get(E);if(mt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(mt.__hasExternalTextures)Vt.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(mt.__boundDepthTexture!==Ct){if(Ct!==null&&Et.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ft=!0);const It=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[H])?V=It[H][X]:V=It[H],st=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?V=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?V=It[X]:V=It,T.copy(E.viewport),w.copy(E.scissor),U=E.scissorTest}else T.copy(J).multiplyScalar(B).floor(),w.copy(Y).multiplyScalar(B).floor(),U=nt;if(X!==0&&(V=Kl),vt.bindFramebuffer(F.FRAMEBUFFER,V)&&q&&vt.drawBuffers(E,V),vt.viewport(T),vt.scissor(w),vt.setScissorTest(U),st){const mt=Et.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,mt.__webglTexture,X)}else if(ft){const mt=H;for(let Lt=0;Lt<E.textures.length;Lt++){const It=Et.get(E.textures[Lt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Lt,It.__webglTexture,X,mt)}}else if(E!==null&&X!==0){const mt=Et.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(E,H,X,q,V,st,ft,St=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){vt.bindFramebuffer(F.FRAMEBUFFER,mt);try{const Lt=E.textures[St],It=Lt.format,Ct=Lt.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-q&&X>=0&&X<=E.height-V&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St),F.readPixels(H,X,q,V,At.convert(It),At.convert(Ct),st))}finally{const Lt=N!==null?Et.get(N).__webglFramebuffer:null;vt.bindFramebuffer(F.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,H,X,q,V,st,ft,St=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(H>=0&&H<=E.width-q&&X>=0&&X<=E.height-V){vt.bindFramebuffer(F.FRAMEBUFFER,mt);const Lt=E.textures[St],It=Lt.format,Ct=Lt.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St),F.readPixels(H,X,q,V,At.convert(It),At.convert(Ct),0);const jt=N!==null?Et.get(N).__webglFramebuffer:null;vt.bindFramebuffer(F.FRAMEBUFFER,jt);const ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Yc(F,ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(Xt),F.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,X=0){const q=Math.pow(2,-X),V=Math.floor(E.image.width*q),st=Math.floor(E.image.height*q),ft=H!==null?H.x:0,St=H!==null?H.y:0;Vt.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ft,St,V,st),vt.unbindTexture()};const $l=F.createFramebuffer(),Jl=F.createFramebuffer();this.copyTextureToTexture=function(E,H,X=null,q=null,V=0,st=null){st===null&&(V!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=V,V=0):st=0);let ft,St,mt,Lt,It,Ct,Xt,jt,ce;const ne=E.isCompressedTexture?E.mipmaps[st]:E.image;if(X!==null)ft=X.max.x-X.min.x,St=X.max.y-X.min.y,mt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,It=X.min.y,Ct=X.isBox3?X.min.z:0;else{const ze=Math.pow(2,-V);ft=Math.floor(ne.width*ze),St=Math.floor(ne.height*ze),E.isDataArrayTexture?mt=ne.depth:E.isData3DTexture?mt=Math.floor(ne.depth*ze):mt=1,Lt=0,It=0,Ct=0}q!==null?(Xt=q.x,jt=q.y,ce=q.z):(Xt=0,jt=0,ce=0);const te=At.convert(H.format),Pt=At.convert(H.type);let se;H.isData3DTexture?(Vt.setTexture3D(H,0),se=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Vt.setTexture2DArray(H,0),se=F.TEXTURE_2D_ARRAY):(Vt.setTexture2D(H,0),se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Yt=F.getParameter(F.UNPACK_ROW_LENGTH),De=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wn=F.getParameter(F.UNPACK_SKIP_PIXELS),Le=F.getParameter(F.UNPACK_SKIP_ROWS),xi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ct);const ae=E.isDataArrayTexture||E.isData3DTexture,Be=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const ze=Et.get(E),be=Et.get(H),we=Et.get(ze.__renderTarget),Br=Et.get(be.__renderTarget);vt.bindFramebuffer(F.READ_FRAMEBUFFER,we.__webglFramebuffer),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let An=0;An<mt;An++)ae&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,V,Ct+An),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(H).__webglTexture,st,ce+An)),F.blitFramebuffer(Lt,It,ft,St,Xt,jt,ft,St,F.DEPTH_BUFFER_BIT,F.NEAREST);vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Et.has(E)){const ze=Et.get(E),be=Et.get(H);vt.bindFramebuffer(F.READ_FRAMEBUFFER,$l),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Jl);for(let we=0;we<mt;we++)ae?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,V,Ct+we):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,V),Be?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,st,ce+we):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,st),V!==0?F.blitFramebuffer(Lt,It,ft,St,Xt,jt,ft,St,F.COLOR_BUFFER_BIT,F.NEAREST):Be?F.copyTexSubImage3D(se,st,Xt,jt,ce+we,Lt,It,ft,St):F.copyTexSubImage2D(se,st,Xt,jt,Lt,It,ft,St);vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Be?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(se,st,Xt,jt,ce,ft,St,mt,te,Pt,ne.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(se,st,Xt,jt,ce,ft,St,mt,te,ne.data):F.texSubImage3D(se,st,Xt,jt,ce,ft,St,mt,te,Pt,ne):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,st,Xt,jt,ft,St,te,Pt,ne.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,st,Xt,jt,ne.width,ne.height,te,ne.data):F.texSubImage2D(F.TEXTURE_2D,st,Xt,jt,ft,St,te,Pt,ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,De),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xi),st===0&&H.generateMipmaps&&F.generateMipmap(se),vt.unbindTexture()},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){C=0,D=0,N=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}function Nm(i,t){const e=t.config.tier,n=ga(t),r=[...t.attachments.fans,...t.attachments.vents].map(g=>Ts(g));if(!e)return{update(){},stats:{instances:0,chunks:0}};const s=new Ke,a=new Ur(.5,.5,1,12),o=new Ir(1,1),l=new Map,c=new Map,u={},h=new re,p=[],f={instances:0,chunks:0},_=(g,T=.85)=>new Fe({color:g,roughness:T,metalness:.3,emissive:g,emissiveIntensity:.18});for(const[g,T]of Object.entries(bs))u[g]={body:_(T.wall),trim:_(T.trim),dark:_("#101c25"),glass:new Pe({color:T.accent}),neon:new Pe({color:new Ot(T.neon).multiplyScalar(1.4)})};const v=new de({uniforms:{time:{value:0}},vertexShader:"varying vec3 wp;void main(){wp=(modelMatrix*instanceMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}",fragmentShader:"varying vec3 wp;uniform float time;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 p=wp.xz;float noise=hash(floor(p*vec2(24.,48.)));float wet=.3+noise*.5;float ripple=.85+.15*sin(p.y*14.+sin(p.x*3.)+time*1.5);vec3 c=vec3(.028,.043,.06);float amber=exp(-pow((p.x+39.)*.22,2.))*exp(-abs(p.y+37.)*.035);float violet=exp(-pow((p.x-31.)*.3,2.))*exp(-abs(p.y+34.)*.04);float green=exp(-pow((p.y+57.)*.4,2.));float pink=exp(-pow((p.y+28.)*.35,2.));c+=(amber*vec3(.28,.13,.025)+violet*vec3(.08,.08,.25)+green*vec3(.055,.12,.07)+pink*vec3(.16,.025,.1))*wet*ripple;float f=1.-exp(-pow(length(cameraPosition-wp)*.025,2.));gl_FragColor=vec4(mix(c,vec3(.025,.038,.075),f),1.);}"}),m=_("#58615f"),d=_("#4b3d32"),A=_("#121e23"),b=_("#868375");function x(g,T,w,U,M,I,L,G=s,B=!1,Q=0){if(T<2.7&&Li(n,g,w,.6)||(B||M<1.5&&T<3)&&r.some(Rt=>jl(Rt,{minX:g-U/2,maxX:g+U/2,minY:T-M/2,maxY:T+M/2,minZ:w-I/2,maxZ:w+I/2},.035)))return;const tt=Math.floor(g/24),J=Math.floor(w/24),Y=`${tt},${J},${B}`;if(!c.has(Y)){const Rt=new zn;Rt.userData={x:tt*24+12,z:J*24+12,detail:B,visible:!0},c.set(Y,Rt),i.add(Rt)}const nt=`${Y}:${L.uuid}:${G.uuid}`;l.has(nt)||l.set(nt,{group:c.get(Y),mat:L,geometry:G,items:[]}),l.get(nt).items.push([g,T,w,U,M,I,Q]),f.instances++}const P={};function C(g,T=null){const w=g+":"+(T||"");if(P[w])return P[w];const U=document.createElement("canvas");U.width=512,U.height=128;const M=U.getContext("2d"),I=bs[g];M.fillStyle="#09141d",M.fillRect(0,0,512,128),M.strokeStyle=I.neon,M.lineWidth=5,M.strokeRect(6,6,500,116),M.fillStyle=I.neon,M.font="bold 52px monospace",M.textAlign="center",M.fillText(T||{commercial:"NIGHT / MARKET",industrial:"KILN / SERVICE",residential:"HABITAT / 09",abandoned:"SIGNAL / LOST"}[g],256,82);const L=new Lr(U);return L.colorSpace=Ee,P[w]=new Pe({map:L,side:We})}const D=new Tn(1,1);function N(g,T=!1){const w=Ye(g.seed+374),U=T?t.config.identity==="mixed"?"commercial":t.config.identity:g.identity,M=u[U],I=T?Math.sign(g.x):g.side,L=T||g.vertical,G=L?g.w:g.d,B=L?g.d:g.w,Q=g.x-(L?I*G/2:0),tt=g.z-(L?0:I*G/2),J=(Y,nt,Rt,Nt,K,W,rt,pt=!1,_t=s)=>x(Q+(L?-I*Rt:Y),nt,tt+(L?Y:-I*Rt),L?W:Nt,K,L?Nt:W,rt,_t,pt);if(!T){x(g.x,g.h/2,g.z,g.w,g.h,g.d,M.body),x(g.x,g.h+.18,g.z,g.w+.4,.36,g.d+.4,M.trim),g.variant%2===0&&x(g.x,g.h+2,g.z,g.w*.7,3.7,g.d*.65,M.body),g.variant===1&&x(g.x,g.h+1.4,g.z,g.w*.65,2.6,g.d*.6,M.trim);for(let nt=3;nt<g.h-1;nt+=3){J(0,nt,.1,B,.12,.2,M.trim);for(let Rt=-B/2+.8;Rt<B/2-.5;Rt+=1.3)J(Rt,nt+1,.12,.75,1.2,.1,w()>.42?M.glass:M.dark),J(Rt,nt+1,.19,.82,.06,.06,M.trim,!0)}J(0,1.2,.13,1.5,2.4,.15,M.dark),J(0,2.5,.45,2.2,.15,.8,M.trim),J(0,3,.2,B-.4,.45,.1,M.neon);const Y=L?-I*Math.PI/2:I===1?Math.PI:0;x(Q+(L?-I*.3:0),4,tt+(L?0:-I*.3),3,.75,1,C(U),D,!1,Y)}if(!T){const Y=L?g.w:g.d;for(const nt of[-1,1]){const Rt=g.x+(L?0:nt*g.w/2),Nt=g.z+(L?nt*g.d/2:0);for(let K=2;K<g.h;K+=3.5){x(Rt,K,Nt,L?g.w:.12,.12,L?.12:g.d,M.trim);for(let W=-Y/2+.8;W<Y/2-.5;W+=1.7){const rt=Rt+(L?W:nt*.07),pt=Nt+(L?nt*.07:W);x(rt,K+1,pt,L?.65:.1,1,L?.1:.65,w()>.58?M.glass:M.dark,s,!0)}}x(Rt+(L?0:nt*.15),2,Nt+(L?nt*.15:0),L?1.3:.2,3.5,L?.2:1.3,M.trim)}if(U==="residential"){J(0,1.5,.22,2,2.6,.12,M.trim),J(0,1.4,.32,1.5,2.2,.12,M.dark);for(let nt=0;nt<3;nt++)J(-1+nt,2.2,.45,.45,.6,.35,nt%2?M.trim:d,!0);for(let nt=5;nt<g.h-2;nt+=5)for(let Rt=0;Rt<3;Rt++)J(-1+Rt,nt+.3,1.3,.4,.4,.35,A,!0)}if(U==="abandoned"){for(let nt=-B*.4;nt<B*.5;nt+=1.1)J(nt,2,.35,.9,.18,.18,d),J(nt,2.8,.36,.9,.18,.18,M.trim);for(let nt=0;nt<6;nt++)J((w()-.5)*B,.2+w()*2,.5,.08,1.2,.15,d,!0)}}for(let Y=-B/2+.3;Y<B/2;Y+=2.3)J(Y,2.2,.22,.12,4.4,.26,M.trim,!0),J(Y,1.5,.38,.38,.55,.36,M.dark,!0),J(Y,1.55,.59,.22,.08,.03,M.glass,!0);J(B*.3,3.7,.44,1.3,.75,.8,M.trim,!0);for(let Y=0;Y<5;Y++)J(B*.3,3.48+Y*.1,.86,1.05,.035,.03,M.dark,!0);J(-B*.35,3,.18,.12,6,.24,d,!0),J(-B*.32,1,.34,.28,.08,.45,M.trim,!0);for(let Y=0;Y<(e===4?12:4);Y++){const nt=(w()-.5)*(B-.6);J(nt,.4+w()*2,.255,.05+w()*.35,.04+w()*.5,.02,Y%2?d:M.dark,!0)}if(U==="commercial"){J(0,2.7,1.1,B,.2,2.2,M.trim);for(let Y=0;Y<Math.floor(B);Y++)J(-B/2+.5+Y,2.6,2.15,.6,.16,.08,M.neon)}if(U==="residential"||e>=4&&w()>.4)for(let Y=5;Y<g.h-2;Y+=5){J(0,Y,.75,B*.8,.18,1.5,M.trim),J(0,Y+.6,1.45,B*.8,.08,.08,M.trim);for(let nt=-B*.35;nt<B*.4;nt+=.6)J(nt,Y+.3,1.45,.05,.7,.05,M.trim,!0)}if(U==="industrial"){J(0,6,.7,B,.5,1,M.trim);for(let Y=0;Y<3;Y++)J(-B*.35+Y*.4,5,.7,.18,8,.24,d);J(0,1.3,.25,B*.5,2.4,.2,M.dark)}if(U==="abandoned"){for(let Y=0;Y<5;Y++)J(0,.5+Y*.35,.28,B*.6,.08,.12,M.trim);J(-B*.3,2,.4,.3,2.5,.3,d)}if(x(g.x,g.h+1,g.z,1.4,1.8,1.6,M.trim),x(g.x+.6,g.h+3,g.z,.06,5,.06,M.neon),e===4)for(let Y=0;Y<3;Y++)x(g.x-1+Y,g.h+2,g.z+1,.6,2,.7,M.trim)}for(const g of t.buildings)N(g,!0);for(const g of t.city.buildings)N(g);if(e>=3){for(const w of t.city.roads.slice(1)){const U=w.x1===w.x2,M=U?w.maxZ-w.minZ:w.maxX-w.minX,I=(w.minX+w.maxX)/2,L=(w.minZ+w.maxZ)/2;x(I,-.12,L,w.maxX-w.minX,.22,w.maxZ-w.minZ,v);const G=u[w.identity];for(const B of[-1,1])for(let Q=-M/2+2;Q<M/2-1;Q+=4){const tt=I+(U?B*(w.width/2-.1):Q),J=L+(U?Q:B*(w.width/2-.1));t.city.roads.some(Y=>Y!==w&&tt>Y.minX-.1&&tt<Y.maxX+.1&&J>Y.minZ-.1&&J<Y.maxZ+.1)||(x(tt,.03,J,U?.08:2.7,.04,U?2.7:.08,G.neon),x(tt,.14,J,U?.3:3,.28,U?3:.3,G.trim))}for(let B=-M/2+4;B<M/2;B+=8)x(I+(U?0:B),.009,L+(U?B:0),U?.12:1.6,.02,U?1.6:.12,b)}const g=u.industrial,T=t.city.landmark;x(T.x,6,T.z,8,12,8,g.body,a),x(T.x,13,T.z,9,2,9,g.trim,a),x(T.x,14.2,T.z,8.5,.14,8.5,g.neon,a);for(const w of[-2.8,2.8])x(T.x+w,6,T.z+3,.18,11,.2,g.trim);x(T.x,8,T.z+4.05,6,1.4,1,C("industrial"),D);for(let w=0;w<4;w++)x(T.x-2+w*1.4,17+w%2,T.z,.12,7+w%2,.12,g.neon);x(-39,8,-42,15,.5,3,g.trim),x(-39,9,-40.5,15,.1,.1,g.neon),x(-38,20,-39,19,.7,2.4,g.trim),x(-38,20.6,-37.8,19,.08,.08,g.neon);for(const w of[-47.2,-28.8])x(w,10,-39,.6,20,.7,g.trim);for(const w of[-46.1,-31.9])x(w,4,-42,.5,8,.6,g.trim);x(9,2.8,-51,3.5,.8,1,C("residential","HABITAT →"),D),x(-9,2.8,-22,3.5,.8,1,C("industrial","← KILN"),D);for(const w of t.city.buildings.filter(U=>U.identity==="industrial").slice(0,e===4?8:3))x(w.x,4,w.z,w.w+1,.25,w.d+1,g.trim)}const y=[...t.city.props];for(const g of t.buildings){const T=Math.sign(g.x),w=g.x-T*g.w/2+T*.1;Li(n,w,g.z,1)||y.push({x:w,z:g.z,w:.7,h:.7,d:.7,identity:"industrial"})}for(const g of y){const T=u[g.identity];x(g.x,g.h/2,g.z,g.w,g.h,g.d,T.trim),x(g.x,g.h+.05,g.z,g.w+.08,.1,g.d+.08,d);for(let U=0;U<(e===4?7:3);U++)x(g.x+U%2*.3,.2,g.z+.5+U*.17,.25,.3,.3,A,o,!0);const w=sl(t,g.x,g.z-.7,.7,.7);w&&x(g.x,w.position[1]+.002,g.z-.7,.7,.002,.7,d)}for(const g of t.surfaceDecorations)for(const T of g.parts)x(g.position[0],g.position[1]+T.position[1],g.position[2],...T.size,T.material==="rust"?d:m,s,!0);if(e>=2){const g=new xe,T=Ye(t.config.seed+99),w=new Float32Array((e===4?180:70)*3);for(let I=0;I<w.length/3;I++){const L=t.city.roads[I%t.city.roads.length];w.set([L.minX+T()*(L.maxX-L.minX),T()*5,L.minZ+T()*(L.maxZ-L.minZ)],I*3)}g.setAttribute("position",new Me(w,3));const U=new de({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"uniform float time;varying float a;void main(){vec3 p=position;p.y+=sin(time*.18+position.x)*.12;p.x+=sin(time*.3+position.z)*.4;vec4 v=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*v;gl_PointSize=min(2.5,24./max(2.,-v.z));a=.18;}",fragmentShader:"varying float a;void main(){gl_FragColor=vec4(.57,.71,.73,a*smoothstep(.5,.1,length(gl_PointCoord-.5)));}"});i.add(new Il(g,U)),p.push({material:U});const M=Ye(t.config.seed+808);for(const I of[...t.buildings,...t.city.buildings].filter((L,G)=>G%4===0)){const L=new ue(s,u[t.config.identity==="mixed"?"industrial":t.config.identity].neon);L.scale.set(.05,.14,1.2),L.position.set(I.x,I.h+1,I.z),i.add(L),p.push({mesh:L,phase:M()*6})}}for(const{group:g,mat:T,geometry:w,items:U}of l.values()){const M=new zi(w,T,U.length);U.forEach((I,L)=>{h.position.set(I[0],I[1],I[2]),h.scale.set(I[3],I[4],I[5]),h.rotation.set(0,I[6],0),h.updateMatrix(),M.setMatrixAt(L,h.matrix)}),M.computeBoundingSphere(),g.add(M)}return f.chunks=c.size,{stats:f,update(g,T,w){v.uniforms.time.value=g;for(const U of c.values()){if(!U.userData.detail)continue;const M=Math.hypot(T.position.x-U.userData.x,T.position.z-U.userData.z),I=w.detail+24;U.visible=M<I+(U.visible?8:0)}for(const U of p)U.material?U.material.uniforms.time.value=g:U.mesh.visible=Math.sin(g*1.4+U.phase)>-.7}}}function Fm(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new xe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in s){const h=nl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][p]);const _=nl(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function nl(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new Me(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let p=0,f=u.count;p<f;p++)for(let _=0;_<e;_++){const v=u.getComponent(p,_);o.setComponent(p+h,_,v)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}function il(i){i.computeBoundingBox();const t=new O,e=new O;return i.boundingBox.getSize(t),i.boundingBox.getCenter(e),i.translate(-e.x,-e.y,-e.z),i.scale(1/t.x,1/t.y,1/t.z),i}function Om(i,t){const e=t.attachments,n=new Map,r=[],s=new re,a=new Kt,o=new Kt,l=new Fe({color:"#53646a",roughness:.73,metalness:.5,emissive:"#26343b",emissiveIntensity:.25}),c=new Fe({color:"#09151a",roughness:.85}),u=new Fe({color:"#9cab9b",roughness:.65,metalness:.5,emissive:"#4d5a54",emissiveIntensity:.18}),h=new Pe({color:new Ot("#ffb55b").multiplyScalar(2.6)}),p=new Pe({color:"#72c8bc"}),f=new Fe({color:"#15222b",roughness:.8}),_=[];for(let T=0;T<4;T++){const w=new Ke(.28,.1,.035);w.translate(.23,0,0),w.rotateZ(T*Math.PI/2+.13),_.push(w)}const v=new Ur(.09,.09,.05,10);v.rotateX(Math.PI/2),_.push(v);const m=il(Fm(_));for(const T of _)T.dispose();const d={box:new Ke,ring:il(new Ua(.5,.06,6,20)),rotor:m},A={metal:l,dark:c,brass:u,light:h};function b(T,w,U,M){const I=T.uuid+w.uuid;n.has(I)||n.set(I,{g:T,material:w,matrices:[],metadata:[]}),n.get(I).matrices.push(U.clone()),n.get(I).metadata.push(M)}function x(T){const w=new zn;w.name=T.id,w.userData={attachment:!0,type:T.type,hostId:T.hostId},w.position.fromArray(T.position),w.rotation.y=T.yaw,w.updateMatrix(),a.copy(w.matrix),i.add(w);for(const U of T.parts){const M=T.faulty&&U.material==="light"?p:A[U.material];if(U.kind==="rotor"){const I=new ue(d.rotor,M);I.name=U.id,I.position.fromArray(U.position),I.scale.fromArray(U.size),w.add(I),r.push({mesh:I,phase:T.phase,speed:T.speed})}else s.position.fromArray(U.position),s.rotation.set(0,0,0),s.scale.fromArray(U.size),s.updateMatrix(),o.multiplyMatrices(a,s.matrix),b(d[U.kind],M,o,{assembly:T.id,part:U.id})}}for(const T of[...e.fans,...e.vents,...e.lamps])x(T);for(const T of e.cables){const w=new La(...T.points.map(M=>new O(...M))),U=new ue(new Nr(w,20,.027,5,!1),f);U.name=T.id,U.userData={attachment:!0,type:"cable",hosts:T.anchors.map(M=>M.hostId)},i.add(U);for(const[M,I]of T.anchors.entries())s.position.fromArray(I.mountPosition),s.rotation.set(0,I.yaw,0),s.scale.set(.26,.26,.1),s.position.add(new O(Math.sin(I.yaw)*.05,0,Math.cos(I.yaw)*.05)),s.updateMatrix(),b(d.box,l,s.matrix,{assembly:T.id,part:`wall-mount-${M}`}),s.position.fromArray(I.mountPosition),s.position.add(new O(Math.sin(I.yaw)*.16,0,Math.cos(I.yaw)*.16)),s.scale.set(.14,.14,.18),s.updateMatrix(),b(d.box,u,s.matrix,{assembly:T.id,part:`insulator-${M}`})}for(const{g:T,material:w,matrices:U,metadata:M}of n.values()){const I=new zi(T,w,U.length);I.name="attachment-parts",I.userData={attachment:!0,instances:M},U.forEach((L,G)=>I.setMatrixAt(G,L)),I.computeBoundingSphere(),i.add(I)}const P=e.vents.length*18,C=new Float32Array(P*3),D=new Float32Array(P*3);for(let T=0;T<P;T++){const w=e.vents[T%e.vents.length],U=Ye(w.seed+Math.floor(T/e.vents.length)*7919),M=zr(w,w.emitter.position),I=zr({...w,position:[0,0,0]},[(U()-.5)*w.emitter.spread[0]*2,0,(U()-.5)*w.emitter.spread[1]*2]);C.set(M,T*3),D.set(T<e.vents.length?[0,-1,0]:[I[0],U(),I[2]],T*3)}const N=new xe;N.setAttribute("position",new Me(C,3)),N.setAttribute("launch",new Me(D,3));const y=new de({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"uniform float time;attribute vec3 launch;varying float a;void main(){bool base=launch.y<0.;float phase=base?0.:fract(launch.y+time*.14);vec3 p=position;p.x+=launch.x*(.25+phase*.5)+sin(time*.35+launch.y*6.28)*phase*.1;p.z+=launch.z*(.25+phase*.5);p.y+=phase*2.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=min(80.,260.*(.12+phase*.8)/max(1.,-mv.z));a=base?.06:(1.-phase)*.105;}",fragmentShader:"varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.52,.66,.69,a*smoothstep(.5,.08,d));}"}),g=new Il(N,y);return g.name="source-bound-steam",g.userData={attachment:!0,sources:e.vents.map(T=>({id:T.id,origin:zr(T,T.emitter.position)}))},g.frustumCulled=!1,i.add(g),{update(T,w){for(const U of r)U.mesh.rotation.z=U.phase+T*U.speed;y.uniforms.time.value=T,N.setDrawRange(0,w.bloom?P:Math.min(P,e.vents.length*6)),p.color.setRGB(.45,.78,.72).multiplyScalar(Math.sin(T*1.7)>-.94?1:.12)}}}const Bm=Object.freeze({seed:2049,tier:3,identity:"mixed",density:1,height:1,streetWidth:12,neon:["#23ecff","#ed39c5","#ffb55b","#9aff86"],fog:.025,rain:1,props:1});function zm(i={}){const t={...Bm,...i};if(!Number.isInteger(t.tier)||t.tier<0||t.tier>4||!(t.identity==="mixed"||Object.hasOwn(bs,t.identity)))throw new Error("Invalid complexity tier or district identity");for(const u of["seed","density","height","streetWidth","fog","rain","props"])if(!Number.isFinite(t[u]))throw new Error(`Invalid ${u}`);if(t.streetWidth<8||t.streetWidth>20||t.density<.4||t.density>2||t.height<.5||t.height>2||t.props<0||t.props>2||t.rain<0||t.rain>2||t.fog<.005||t.fog>.08||!Array.isArray(t.neon)||t.neon.length<3||t.neon.some(u=>typeof u!="string"||!/^#[0-9a-fA-F]{6}$/.test(u)))throw new Error("Configuration outside supported bounds");const e=Ye(t.seed),n=[],r=[],s=t.streetWidth/2;for(const u of[-1,1])for(let h=16;h>-72;h-=9/t.density){const p=7/t.density,f=(12+e()*24)*t.height;n.push({x:u*(s+4+e()*2),z:h,w:8,d:p,h:f,color:Math.floor(e()*3),seed:Math.floor(e()*1e8)})}const a=Ye(t.seed+911);for(let u=0;u<Math.floor(32*t.props);u++){const h=u%2?1:-1;r.push({x:h*(s-.6),z:10-a()*76,w:.5+a()*.5,h:.4+a()*1.1})}const o={config:t,buildings:n,props:r,terminal:{x:-s+1.2,z:2},bounds:{minX:-s+.35,maxX:s-.35,minZ:-69,maxZ:18}},l=ga(o);o.props=o.props.filter(u=>!Li(l,u.x,u.z));const c=Ql(o);return c.attachments=tc(c),c.surfaceDecorations=ec(c),c}function Hm(i){return[...[...i.attachments?.fans||[],...i.attachments?.vents||[],...i.attachments?.lamps||[]].filter(t=>t.collision==="solid").map(t=>t.type==="lamp"?Ts({...t,parts:t.parts.filter(e=>e.id==="pole")}):Ts(t)),...(i.city?.buildings||[]).map(nc),...(i.city?.props||[]).map(t=>({minX:t.x-t.w/2,maxX:t.x+t.w/2,minZ:t.z-t.d/2,maxZ:t.z+t.d/2})),...i.buildings.map(t=>({minX:t.x-t.w/2,maxX:t.x+t.w/2,minZ:t.z-t.d/2,maxZ:t.z+t.d/2})),...i.props.map(t=>({minX:t.x-t.w/2,maxX:t.x+t.w/2,minZ:t.z-.4,maxZ:t.z+.4})),{minX:i.terminal.x-.65,maxX:i.terminal.x+.65,minZ:1.5,maxZ:2.5}]}function Vm(i,t,e,n,r,s=null){const a=Math.max(1,Math.ceil(Math.hypot(t,e)/.15)),o=.28;for(let l=0;l<a;l++){let c=Math.max(r.minX,Math.min(r.maxX,i.x+t/a));(!s||Wa(c,i.z,s))&&!n.some(h=>c>h.minX-o&&c<h.maxX+o&&i.z>h.minZ-o&&i.z<h.maxZ+o)&&(i.x=c);let u=Math.max(r.minZ,Math.min(r.maxZ,i.z+e/a));(!s||Wa(i.x,u,s))&&!n.some(h=>i.x>h.minX-o&&i.x<h.maxX+o&&u>h.minZ-o&&u<h.maxZ+o)&&(i.z=u)}return i}const _r={low:{scale:.65,rain:500,bloom:!1,detail:28},medium:{scale:.85,rain:1300,bloom:!0,detail:48},high:{scale:1,rain:2400,bloom:!0,detail:70}};function Gm(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=Ye(907);t.fillStyle="#b1b6bb",t.fillRect(0,0,256,256);for(let r=0;r<70;r++){const s=e()*256,a=e()*256,o=1+e()*10,l=20+e()*130,c=t.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"#101b2755"),c.addColorStop(1,"#101b2700"),t.fillStyle=c,t.fillRect(s,a,o,l)}const n=new Lr(i);return n.colorSpace=Ee,n.wrapS=n.wrapT=br,n}function km(i,t,e){const n=Ye(t.config.seed+3701),r=new Ke,s=new Ir(1,1),a=new Map,o=new Fe({color:"#293f41",roughness:.85}),l=new Fe({color:"#674837",roughness:.95}),c=new Fe({color:"#17252b",roughness:.85}),u=new Fe({color:"#827d69",roughness:1}),h=(f,_,v,m,d,A,b,x)=>{const P=f.uuid+_.uuid;a.has(P)||a.set(P,{geometry:f,material:_,items:[]}),a.get(P).items.push([v,m,d,A,b,x])},p=t.config.streetWidth/2;for(let f=13;f>-66;f-=7){const _=n()>.5?1:-1,v=_*(p-.65);if(Li(e,v,f,1)||t.city.roads.slice(1).some(d=>al({minX:v-1,maxX:v+1,minZ:f-3,maxZ:f+3},d)))continue;h(r,o,v,.55,f,.9,1.1,1.65),h(r,l,v,1.15,f,1.05,.12,1.85);for(let d=0;d<3;d++)h(s,c,v-_*.55,.2,f+.5+d*.32,.25+n()*.1,.23,.27);for(let d=0;d<5;d++)h(r,u,v-_*(.3+n()),.075,f-1+n()*2,.1+n()*.25,.015,.1+n()*.3);const m=sl(t,v,f-2,.8,1.2);m&&h(r,l,v,m.position[1]+.002,f-2,.8,.002,1.2)}for(const{geometry:f,material:_,items:v}of a.values()){const m=new zi(f,_,v.length),d=new re;v.forEach((A,b)=>{d.position.set(A[0],A[1],A[2]),d.scale.set(A[3],A[4],A[5]),d.updateMatrix(),m.setMatrixAt(b,d.matrix)}),m.computeBoundingSphere(),i.add(m)}return Om(i,t)}function Wm(i,t){const e=new Ke,n=new Fe({color:"#243338",roughness:.8}),r=new Fe({color:"#665744",roughness:.7}),s=new Fe({color:"#33464b",roughness:.9}),a=new Pe({color:"#aa5537"}),o=new Pe({color:"#64ffe0"}),l=(D,N,y,g,T,w,U)=>{const M=new ue(e,U);return M.position.set(D,N,y),M.scale.set(g,T,w),i.add(M),M},c=(D,N,y,g,T,w="#b8d9cd")=>{const U=document.createElement("canvas");U.width=512,U.height=128;const M=U.getContext("2d");M.fillStyle="#0a171d",M.fillRect(0,0,512,128),M.strokeStyle=w,M.lineWidth=4,M.strokeRect(8,8,496,112),M.fillStyle=w,M.font="bold 37px monospace",M.textAlign="center",M.textBaseline="middle",M.fillText(D,256,64);const I=new Lr(U);I.colorSpace=Ee;const L=new ue(new Tn(T,T/4),new Pe({map:I}));return L.position.set(N,y,g),i.add(L),L},u=D=>t.layout.objects.find(N=>N.id===D).position,h=u("notice");l(h.x,1,h.z,.7,2,.12,r),c("MAINT / LINE 7",h.x,1.5,h.z+.08,1.2,"#eacb85"),c("E : READ TAG",h.x,1.05,h.z+.08,1,"#bdaf8b");const p=u("relay");l(p.x,.85,p.z,.85,1.7,.5,n),c("R-07 / ISOLATED",p.x,1.95,p.z+.3,1.7,"#e6a161");const f=l(p.x,1.3,p.z+.28,.6,.07,.03,a);for(let D=0;D<5;D++)l(p.x,.5+D*.1,p.z+.27,.6,.035,.04,r);const _=u("power");l(_.x,1,_.z,1,2,.5,n),c("SERVICE TRANSFER",_.x,2.25,_.z+.3,2,"#e9c77d"),c("NORMAL / BYPASS",_.x,1.55,_.z+.27,.9,"#c1d1c7");const v=l(_.x,1.1,_.z+.35,.12,.48,.15,r);l(_.x,.5,_.z+.27,.7,.25,.02,a);const m=t.layout.room,d=(m.minX+m.maxX)/2;l(d,.04,-8,3,.08,4,s),l(m.minX,1.6,-8,.22,3.2,4,n),l(m.maxX,1.6,-8,.22,3.2,4,n),l(d,1.6,-10,3,3.2,.22,s),l(d,3.2,-8,3.3,.18,4.4,n),l(d,3,-5.9,3.3,.6,.25,r),c("PALISADE / ARCHIVE",d,3.1,-5.74,3.15,"#e5ac74");const A=l(d,1.35,-6,2.75,2.7,.18,n);for(let D=0;D<12;D++){const N=new ue(e,r);N.scale.set(.98,.009,1.05),N.position.y=(D-5.5)*.075,A.add(N)}c("ACCESS / 03",d,2.35,-5.87,1.4,"#b9aba0");const b=[l(m.minX+.22,2.65,-7.8,.06,.06,3.2,a),l(m.maxX-.22,2.65,-7.8,.06,.06,3.2,a)],x=new Hl("#7be8d4",0,7,2);x.position.set(d,2.4,-8),i.add(x),l(d,.65,-9,1.5,1.3,.7,n),l(d,1.4,-9,.75,.2,.45,r),c("RECORDER / 03",d,1.7,-8.74,1.5,"#99dec9");const P=l(d,1.53,-8.85,.08,.04,.04,o);let C=-1;return{update(D){const N=t.state;if(C!==N.revision){C=N.revision;const y=ai(t);f.material=N.routed?o:a;for(const g of b)g.material=y?o:a;x.intensity=y?24:0,v.rotation.z=N.manual?.7:-.7,A.position.y=N.doorOpen?4.2:1.35}P.visible=!N.complete||Math.sin(D*.8)>.3}}}function Xm(){let i,t,e=!1,n=.25;const r=[];async function s(){try{if(!i){i=new AudioContext,t=i.createGain(),t.gain.value=0,t.connect(i.destination);const o=i.createBuffer(1,i.sampleRate*3,i.sampleRate),l=o.getChannelData(0);let c=0;for(let p=0;p<l.length;p++)c=(c+(Math.random()*2-1)*.03)/1.02,l[p]=c*3;const u=i.createBufferSource();u.buffer=o,u.loop=!0;const h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=1800,u.connect(h).connect(t),u.start(),r.push(u);for(const p of[47,94,131]){const f=i.createOscillator(),_=i.createGain();f.type="sine",f.frequency.value=p,_.gain.value=.035,f.connect(_).connect(t),f.start(),r.push(f)}}return await i.resume(),e=!0,a(),!0}catch{return!1}}function a(){t&&t.gain.setTargetAtTime(e?n:0,i.currentTime,.08)}return{enable:s,setVolume(o){n=Math.max(0,Math.min(1,o)),a()},mute(){e=!1,a()},get enabled(){return e},get status(){return i?.state||"not-started"},cue(){if(!i||!e)return;const o=i.createOscillator(),l=i.createGain();o.frequency.setValueAtTime(180,i.currentTime),o.frequency.exponentialRampToValueAtTime(520,i.currentTime+.3),l.gain.setValueAtTime(.08,i.currentTime),l.gain.exponentialRampToValueAtTime(.001,i.currentTime+.6),o.connect(l).connect(t),o.start(),o.stop(i.currentTime+.65),o.onended=()=>{o.disconnect(),l.disconnect()}},suspend(){i?.suspend()},resume(){e&&i?.resume()}}}const oe=i=>document.getElementById(i);function qm(i,{pause:t,close:e,onChange:n,audio:r}){let s=null,a=[],o=0,l="";const c=()=>{n(),oe("objective").textContent=i.state.complete?"THE DEAD RELAY / RECORDER RECOVERED":ai(i)?"PALISADE ARCHIVE / POWER RESTORED":"DISTRICT 07 / SIGNAL INTERRUPTED"},u=_=>{const v=ai(i),m=ic(i,_);if(m===null){e();return}l=(l+`
> `+_+`
`+m+`
`).slice(-7e3),oe("terminal-output").textContent=l,oe("terminal-output").scrollTop=oe("terminal-output").scrollHeight,!v&&ai(i)&&r.cue(),c()};oe("command-form").onsubmit=_=>{_.preventDefault();const v=oe("command").value.trim();v&&(a.push(v),a.length>50&&a.shift(),o=a.length,u(v)),oe("command").value=""},oe("command").addEventListener("keydown",_=>{(_.key==="ArrowUp"||_.key==="ArrowDown")&&(_.preventDefault(),o=Math.max(0,Math.min(a.length,o+(_.key==="ArrowUp"?-1:1))),oe("command").value=a[o]||"")}),document.querySelectorAll("[data-command]").forEach(_=>_.onclick=()=>u(_.dataset.command));function h(_){if(s=_,t(_.category==="terminal"?"terminal":"inspect"),_.category==="terminal"){oe("terminal").hidden=!1,l=`GHOST / OS — LOCAL MUNICIPAL NETWORK
Type help to investigate. Nothing leaves this browser.
`,u("status"),oe("command").focus();return}oe("inspector").hidden=!1,oe("inspect-title").textContent=_.label,oe("inspect-body").textContent=_.category==="door"?Hr(i,_.id,"open",i.player):Hr(i,_.id,"inspect",i.player),p(),c(),oe("inspect-close").focus()}function p(){const _=oe("inspect-actions");_.replaceChildren();for(const v of s.actions){if(v==="inspect")continue;const m=document.createElement("button");m.textContent=v==="bypass"?"Engage service bypass":v==="normal"?"Return to network feed":v==="open"?"Open door":"Close door",m.dataset.action=v,m.onclick=()=>{const d=ai(i);oe("inspect-body").textContent=Hr(i,s.id,v,i.player),!d&&ai(i)&&r.cue(),c()},_.append(m)}}oe("inspect-close").onclick=e,oe("journal-close").onclick=e;function f(){t("journal"),oe("journal").hidden=!1;const _=oe("journal-entries");_.replaceChildren();for(const v of i.state.discovered){const m=document.createElement("li");m.textContent=rc[v],_.append(m)}if(!_.children.length){const v=document.createElement("li");v.textContent="No notes yet. Look for objects marked with a contextual E prompt.",_.append(v)}oe("journal-close").focus()}return{open:h,journal:f,command:u,refresh:c,hide(){for(const _ of["terminal","inspector","journal"])oe(_).hidden=!0},get current(){return s?.id}}}const Tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ym=new Na(-1,1,1,-1,0,1);class Zm extends xe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const Km=new Zm;class Oa{constructor(t){this._mesh=new ue(Km,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ym)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $m extends vi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof de?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bi.clone(t.uniforms),this.material=new de({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Oa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rl extends vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Jm extends vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $m(Tr),this.copyPass.material.blending=hn,this.clock=new $u}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rl!==void 0&&(a instanceof rl?n=!0:a instanceof Jm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qm extends vi{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const tg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class mi extends vi{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new Ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(s,a,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Ze(s,a,{type:fn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Ze(s,a,{type:fn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=tg;this.highPassUniforms=Bi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new de({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new gt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bi.clone(Tr.uniforms),this.blendMaterial=new de({uniforms:this.copyUniforms,vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader,blending:As,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ot,this._oldClearAlpha=1,this._basic=new Pe,this._fsQuad=new Oa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new gt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=mi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=mi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new de({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new de({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}mi.BlurDirectionX=new gt(1,0);mi.BlurDirectionY=new gt(0,1);const vr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eg extends vi{constructor(){super(),this.uniforms=Bi.clone(vr.uniforms),this.material=new Gu({name:vr.name,uniforms:this.uniforms,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this._fsQuad=new Oa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===$t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===va?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function ng(i,t){const e=new Map,n=new Ke(1,1,1),r=[],s=M=>new Fe({color:M,roughness:.78,metalness:.25}),a=[s("#263442"),s("#302d40"),s("#203d42")],o=s("#36464b"),l=s("#101d27"),c=Gm();for(const M of a)M.map=c;const u=ga(t),h=t.config.neon.map(M=>new Pe({color:new Ot(M).multiplyScalar(.65)})),p=t.config.neon.map(M=>new Pe({color:new Ot(M).multiplyScalar(2.6)})),f=(M,I,L,G,B,Q,tt)=>{e.has(tt)||e.set(tt,[]),e.get(tt).push([M,I,L,G,B,Q])},_=(M,I,L)=>{const G=new Bl(M.map(Q=>new O(...Q))),B=new ue(new Nr(G,16,I,5,!1),L);i.add(B)},v=(M,I,L,G,B,Q,tt,J=0)=>{const Y=document.createElement("canvas");Y.width=512,Y.height=128;const nt=Y.getContext("2d");nt.fillStyle="#07131d",nt.fillRect(0,0,512,128),nt.strokeStyle=tt,nt.lineWidth=5,nt.strokeRect(7,7,498,114),nt.fillStyle=tt,nt.font="bold 64px monospace",nt.textAlign="center",nt.textBaseline="middle",nt.fillText(M,256,67);const Rt=new Lr(Y);Rt.colorSpace=Ee;const Nt=new ue(new Tn(B,Q),new Pe({map:Rt,side:We}));return Nt.position.set(I,L,G),Nt.rotation.y=J,i.add(Nt),Nt},m=t.config.streetWidth/2;f(0,-.17,-25,t.config.streetWidth+18,.3,100,l);for(const M of[-1,1]){f(M*(m-.65),.04,-25,1.3,.12,91,o);for(let I=0;I<17;I++)(I+(M+1))%5!==0&&f(M*(m-1.4),.015,15-I*5,.045,.02,3.8,h[0])}for(const M of t.buildings){const I=Ye(M.seed),L=Math.sign(M.x),G=M.x-L*M.w/2;f(M.x,M.h/2,M.z,M.w,M.h,M.d,a[M.color]);for(let Y=0;Y<5;Y++){const nt=M.z+(I()-.5)*M.d,Rt=.4+I()*5;f(G-L*.03,Rt,nt,.075,.3+I()*1.1,.2+I()*.8,Y%2?l:a[(M.color+1)%3])}f(M.x,M.h+.2,M.z,M.w+.4,.4,M.d+.3,o);for(let Y=3;Y<M.h;Y+=3){f(G-L*.06,Y,M.z,.15,.15,M.d,o);for(let nt=M.z-M.d/2+.7;nt<M.z+M.d/2-.4;nt+=1.3)f(G-L*.09,Y+1.1,nt,.12,1.35,.75,I()>.65?h[Math.floor(I()*h.length)]:l),f(G-L*.15,Y+1.1,nt,.16,.08,.8,o)}f(G-L*.13,1.2,M.z,.22,2.4,1.3,l),f(G-L*.3,2.8,M.z,.7,.15,2.6,o);const B=Math.min(2,M.d/2-.25),Q=Math.min(1,M.d/2-.25);_([[G-L*.24,.2,M.z+B],[G-L*.24,4,M.z+B],[G-L*.24,4.4,M.z+Q],[G-L*.24,M.h,M.z+Q]],.09,o);for(let Y=1;Y<M.h;Y+=3.5)f(G-L*.12,Y,M.z+B,.26,.09,.24,o),f(G-L*.12,Y,M.z+Q,.26,.09,.24,o);if(I()>.5){f(G-L*.7,7.2,M.z,1.5,.22,3.5,o),f(G-L*1.35,7.7,M.z,.09,1,3.5,l);for(let Y=0;Y<6;Y++)f(G-L*1.35,7.7,M.z-1.5+Y*.6,.1,1,.06,o)}if(I()>.5){for(const Y of[4,4.6])f(G-L*.12,Y,M.z-1,.26,.12,1.1,o);f(G-L*.7,4.3,M.z-1,1.1,.7,1.5,a[1]),_([[G-L*.8,4.2,M.z-1],[G-L*.8,6,M.z-1],[G-L*.8,6.5,M.z]],.24,o)}const tt=M.z-Math.min(1.8,Math.max(0,M.d/2-.65));f(G-L*.08,4.05,tt,.16,.78,1.2,o);const J=new zn;for(let Y=0;Y<5;Y++){const nt=new ue(n,o);nt.position.set(G-L*.35,3.8+Y*.12,M.z-Math.min(1.8,Math.max(0,M.d/2-.65))),nt.scale.set(.4,.06,1.1),J.add(nt)}if(i.add(J),r.push(J),I()>.35){f(G-L*.04,5.5,M.z,.08,2.7,.16,o);for(const Y of[4.3,6.7])f(G-L*.45,Y,M.z,.9,.09,.16,o);f(G-L*.8,5.5,M.z,1.4,2.9,.25,l),f(G-L*1.4,5.5,M.z,.06,2.6,.28,p[L<0?1:0]),v((L<0?["VOID","TAPE","LATE","FM 09"]:["24H","SLEEP","RADIO","OPEN"])[Math.floor(I()*4)],G-L*.8,5.6,M.z+.15,1.25,.55,L<0?"#ff64d4":"#6affef")}}for(let M=0;M<15;M++){const I=Ye(800+M),L=(M-7)*5,G=25+I()*40;f(L,G/2,-85-I()*15,3+I()*4,G,5,a[M%3]);for(let B=6;B<G;B+=4)f(L,B,-81,1.6,.12,.1,p[M%2])}f(2,23,-67,9,46,8,a[0]),f(2,48,-67,5,4,5,a[1]),f(2,54,-67,.15,10,.15,p[1]),v("07",2,32,-62.9,6,6,"#66ffeb");for(const M of[-13,-42]){f(0,10,M,m*2+2,1.8,2.4,l);for(let I=-m;I<m;I+=1.1)f(I,10,M+1.23,.6,.75,.05,p[0])}for(const M of[7,-8,-27,-49])for(let I=0;I<4;I++)t.config.tier>=3&&t.city.roads.slice(1).some(L=>al({minX:-m+.15,maxX:-m+2,minZ:M-1,maxZ:M+3},L))||Li(u,-m+.45+I*.3,M+I*.4)||f(-m+.45+I*.3,.13+I*.045,M+I*.4,.6,.23,.55,I%2?a[1]:o);for(const M of t.props)f(M.x,M.h/2+.1,M.z,M.w,M.h,.8,o),f(M.x,M.h+.12,M.z,M.w+.06,.08,.86,l);v("AFTER HOURS",-m+.12,3.4,-4,5.6,1.15,"#ff69d2",Math.PI/2),f(-m+.28,2.1,-4,.5,.18,6,p[1]);for(let M=-6;M<-1;M+=.32)f(-m+.16,1.2,M,.22,2,.05,o);v("RELAY / 07",-m+1.2,2.9,1.9,2.3,.57,"#78ffe2");const d=t.terminal;f(d.x,.55,d.z,1.05,1.1,.8,o),f(d.x,1.45,d.z,1.3,.95,.95,l),f(d.x,1.5,d.z+.49,.96,.56,.03,l),v("> ONLINE",d.x,1.5,d.z+.515,.86,.43,"#80ffb6"),f(d.x,1.02,d.z+.6,1.25,.12,.5,o);for(let M=0;M<5;M++)f(d.x+.55,1.25+M*.09,d.z+.48,.06,.035,.04,o);f(d.x+.45,1.12,d.z+.5,.1,.08,.06,h[2]);for(let M=0;M<8;M++)f(d.x-.45+M*.12,1.09,d.z+.65,.07,.02,.15,l);const A=[[-m+1,3,-4,16725694,55],[d.x,2,3,5111773,12],[m-1,4,-16,2211839,65],[-m+1,4,-33,15833599,65],[1,6,-57,3459839,130],...t.attachments.lamps.filter(M=>M.faulty).map(M=>[M.position[0],5,M.position[2],16760188,35])];for(const[M,I,L,G,B]of A){const Q=new Hl(G,B,19,2);Q.position.set(M,I,L),i.add(Q)}i.add(new Xu(9218510,2373191,1.8));const b=new Zu(7046339,1.8);b.position.set(-3,30,-20),i.add(b);for(const[M,I]of e){const L=new zi(n,M,I.length),G=new re;I.forEach((B,Q)=>{G.position.set(B[0],B[1],B[2]),G.scale.set(B[3],B[4],B[5]),G.updateMatrix(),L.setMatrixAt(Q,G.matrix)}),L.computeBoundingSphere(),i.add(L)}const x=new de({uniforms:{time:{value:0},fogDensity:{value:t.config.fog}},vertexShader:"varying vec3 wp; void main(){wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}",fragmentShader:"varying vec3 wp; uniform float time; uniform float fogDensity; float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);} void main(){vec2 p=wp.xz;float n=hash(floor(p*vec2(32.,65.)));float puddle=smoothstep(.15,.6,sin(p.x*1.7+sin(p.y*.3))*sin(p.y*.7));n=mix(n,.25,puddle*.85);float ripple=sin(p.y*18.+sin(p.x*4.)+time*2.)*.5+.5;vec3 c=vec3(.018,.028,.045);float a=exp(-pow((p.x+3.4)*.8,2.))*exp(-abs(p.y+4.)*.10);float b=exp(-pow((p.x-3.8)*.9,2.))*exp(-abs(p.y+16.)*.08);float d=exp(-pow((p.x+3.8)*1.1,2.))*exp(-abs(p.y-2.)*.18);c+=(vec3(.95,.035,.47)*a+vec3(.02,.46,.7)*b+vec3(.04,.7,.49)*d)*(.08+n*.55)*(.8+ripple*.2);float f=1.-exp(-pow(length(cameraPosition-wp)*fogDensity,2.));gl_FragColor=vec4(mix(c,vec3(.025,.038,.075),f),1.);}"}),P=new ue(new Tn(t.config.streetWidth-2.8,94),x);P.rotation.x=-Math.PI/2,P.position.set(0,.012,-25),i.add(P);const C=new zi(n,o,14),D=new re;for(let M=0;M<14;M++)D.position.set(.1,.025,12-M*6),D.scale.set(.07,.02,1.2),D.updateMatrix(),C.setMatrixAt(M,D.matrix);i.add(C);const N=Ye(t.config.seed+77),y=new Float32Array(4800*3);for(let M=0;M<2400;M++){const I=(N()-.5)*t.config.streetWidth,L=N()*18,G=18-N()*90;if(t.config.tier>=3){const B=t.city.roads[M%t.city.roads.length],Q=B.minX+N()*(B.maxX-B.minX),tt=B.minZ+N()*(B.maxZ-B.minZ);y.set([Q,L,tt,Q+.035,L,tt],M*6)}else y.set([I,L,G,I+.035,L,G],M*6)}const g=new xe;g.setAttribute("position",new Me(y,3));const T=new Float32Array(4800);for(let M=1;M<4800;M+=2)T[M]=1;g.setAttribute("tip",new Me(T,1));const w=new de({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"uniform float time; attribute float tip; varying float fade; void main(){vec3 p=position;p.y=mod(p.y-time*10.,18.)+tip*.32;vec4 mv=modelViewMatrix*vec4(p,1.);fade=clamp(1.+mv.z/65.,0.,1.);gl_Position=projectionMatrix*mv;}",fragmentShader:"varying float fade;void main(){gl_FragColor=vec4(.42,.73,.86,.22*fade);}"}),U=new bu(g,w);return U.frustumCulled=!1,i.add(U),{update(M,I,L){x.uniforms.time.value=M,w.uniforms.time.value=M,g.setDrawRange(0,Math.min(2400,Math.floor(L.rain*t.config.rain))*2);for(const G of r)G.visible=Math.abs(G.children[0].position.z-I.position.z)<L.detail}}}const Mt=i=>document.getElementById(i);try{await ig()}catch(i){console.error(i),Mt("error").hidden=!1,Mt("error").textContent=`The district could not start. This experience requires WebGL2 and hardware acceleration. Try an updated desktop browser. Details: ${i.message}`}async function ig(){const i=performance.now(),t=new URLSearchParams(location.search),e=Number(t.get("seed")??2049),n=zm({seed:e,tier:Number(t.get("tier")??3),identity:t.get("identity")||"mixed"});let r=null;try{r=localStorage.getItem(`neon-drift:${"/NEON-DRIFT/preview/".includes("/preview/")?"preview:":""}m2:${e}`)}catch{}const s=sc(n,r),a=Xm();let o=[];const l=()=>{if(o=[...Hm(n),...oc(s.layout)],!s.state.doorOpen){const W=s.layout.room;o.push({minX:W.minX,maxX:W.maxX,minZ:-6.12,maxZ:-5.88})}};l(),Mt("seed").value=e;const c=new Im({canvas:Mt("world"),antialias:!1,powerPreference:"high-performance"});c.info.autoReset=!1,c.toneMapping=va,c.toneMappingExposure=1.15;const u=new _u;u.background=new Ot("#090e20"),u.fog=new Ra("#111b30",n.config.fog);const h=new Ne(67,1,.08,180);h.rotation.order="YXZ";const p=ng(u,n),f=new jm(c),_=km(u,n,s.layout),v=Wm(u,s),m=Nm(u,n);f.addPass(new Qm(u,h));const d=new mi(new gt(1,1),.35,.65,1.05);f.addPass(d),f.addPass(new eg);let A=["low","medium","high"].includes(t.get("quality"))?t.get("quality"):"medium",b=1,x="menu",P=0,C=0,D=0,N=0,y=0,g=0,T=0,w=0;const U={x:1,z:13},M=new Set;s.player=U;const I=()=>{U.x=1,U.z=13,P=.08,C=.025,h.position.set(U.x,1.72,U.z),h.rotation.set(C,P,0)};I();const L=()=>{const W=_r[A];c.setPixelRatio(Math.min(devicePixelRatio,1.5)*W.scale*b),c.setSize(innerWidth,innerHeight),f.setPixelRatio(c.getPixelRatio()),f.setSize(innerWidth,innerHeight),h.aspect=innerWidth/innerHeight,h.updateProjectionMatrix(),d.enabled=W.bloom};Mt("quality").value=A,L(),addEventListener("resize",L);const G=()=>{x="menu",M.clear(),document.exitPointerLock?.(),Mt("menu").hidden=!1,tt.hide(),Mt("laboratory").hidden=!0,J?.cancel?.(),Mt("prompt").hidden=!0,Mt("enter").focus()},B=async()=>{try{await Mt("world").requestPointerLock()}catch{Mt("notice").textContent="Mouse capture was denied. Click Enter district to try again."}};Mt("enter").onclick=B,Mt("menu-button").onclick=G,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?(x="play",Mt("menu").hidden=!0,tt.hide(),Mt("laboratory").hidden=!0,Mt("enter").textContent="RESUME DISTRICT ↗"):x==="play"&&G()}),document.addEventListener("mousemove",W=>{x==="play"&&(P-=W.movementX*.002,C=Math.max(-1.45,Math.min(1.45,C-W.movementY*.002)))});const tt=qm(s,{audio:a,onChange:()=>{l();try{localStorage.setItem(`neon-drift:${"/NEON-DRIFT/preview/".includes("/preview/")?"preview:":""}m2:${e}`,qa(s)),Mt("save-status").textContent="Progress saved locally"}catch{Mt("save-status").textContent="Storage unavailable — progress lasts this visit"}},close:G,pause(W){x=W,M.clear(),document.exitPointerLock?.(),Mt("menu").hidden=!0,Mt("prompt").hidden=!0,tt.hide()}});tt.refresh(),Mt("reset-scenario").onclick=()=>{ac(s),I(),tt.refresh(),G()},Mt("audio-toggle").onclick=async()=>{a.enabled?(a.mute(),Mt("audio-toggle").textContent="Enable ambient audio"):Mt("audio-toggle").textContent=await a.enable()?"Mute ambient audio":"Audio unavailable — retry"},Mt("volume").oninput=()=>a.setVolume(Number(Mt("volume").value)/100),addEventListener("keydown",W=>{if(["terminal","inspect","journal","lab"].includes(x)&&W.code==="Tab"){const pt=Mt(x==="inspect"?"inspector":x==="lab"?"laboratory":x).querySelectorAll("button,input,select,summary"),_t=pt[0],kt=pt[pt.length-1];W.shiftKey&&document.activeElement===_t?(W.preventDefault(),kt.focus()):!W.shiftKey&&document.activeElement===kt&&(W.preventDefault(),_t.focus())}if(x==="play"){if(M.add(W.code),W.code==="KeyE"&&!W.repeat){const rt=Xa(s,U,P);rt&&tt.open(rt)}W.code==="KeyJ"&&!W.repeat&&tt.journal()}W.code==="Escape"&&["terminal","inspect","journal","play","tour","lab"].includes(x)&&G()}),addEventListener("keyup",W=>M.delete(W.code)),addEventListener("blur",()=>{M.clear(),x==="play"&&G()}),document.addEventListener("visibilitychange",()=>{D=0,M.clear(),document.hidden?a.suspend():a.resume()}),Mt("restart").onclick=()=>{I(),G()},Mt("quality").onchange=()=>{A=Mt("quality").value,b=1,L()},Mt("regenerate").onclick=()=>{const W=Number(Mt("seed").value);Number.isFinite(W)&&(t.set("tier",Mt("complexity").value),t.set("identity",Mt("identity").value),t.set("quality",A),t.set("seed",Math.trunc(W)),location.search=t.toString())},matchMedia("(pointer:coarse)").matches&&(Mt("enter").disabled=!0,Mt("enter").textContent="DESKTOP EXPLORATION",Mt("notice").textContent="This first district needs a keyboard and mouse. You can view the live scene here; explore on desktop.",A="low",Mt("quality").value="low",L()),Mt("world").addEventListener("webglcontextlost",W=>{W.preventDefault(),G(),Mt("error").hidden=!1,Mt("error").textContent="Graphics connection lost. Reload this page to rebuild the district."}),Mt("world").addEventListener("webglcontextrestored",()=>location.reload());let J=null;Mt("complexity").value=n.config.tier,Mt("identity").value=n.config.identity,Mt("lab-button").hidden=!1;const Y=()=>({player:{...U},state:x,yaw:P,pitch:C,game:JSON.parse(qa(s)),audio:{enabled:a.enabled,status:a.status}});function nt(W){x=W,M.clear(),document.exitPointerLock?.(),tt.hide(),Mt("menu").hidden=!0,Mt("prompt").hidden=!0,Mt("laboratory").hidden=!0}function Rt(){nt("lab"),Mt("laboratory").hidden=!1,Mt("lab-close").focus()}{const{createLaboratory:W}=await uc(async()=>{const{createLaboratory:rt}=await import("./laboratory-BqnLuQ7i.js");return{createLaboratory:rt}},__vite__mapDeps([0,1]));J=W({camera:h,renderer:c,scene:u,world:n,initMs:performance.now()-i,pause:nt,onComplete(rt){Mt("lab-report").textContent=JSON.stringify(rt,null,2),Rt()},snapshot:Y,stagePlayer(rt,pt,_t){U.x=rt,U.z=pt,P=_t,C=-.55,h.position.set(rt,1.72,pt),h.rotation.set(C,P,0),G()},quality:()=>A,cityStats:m.stats}),window.neonLab=J,Mt("lab-button").onclick=Rt,Mt("lab-close").onclick=G,Mt("lab-tour").onclick=()=>J.start({route:n.config.tier>=3?"district":"core"}),Mt("lab-core").onclick=()=>J.start(),Mt("stats-toggle").onchange=()=>Mt("performance").hidden=!Mt("stats-toggle").checked,Mt("lab-metadata").textContent="MISSION 003 · "+"859241bb83b7beb5679714da75a8ec259b100da9".slice(0,8)+" · Complexity "+n.config.tier+" / "+A;for(let rt=0;rt<J.poses.length;rt++){const pt=document.createElement("button");pt.textContent=J.poses[rt].name,pt.onclick=()=>J.pose(rt),Mt("lab-views").append(pt)}addEventListener("keydown",rt=>{rt.target instanceof HTMLInputElement||rt.target instanceof HTMLSelectElement||rt.code==="KeyL"&&Rt()})}let Nt=0;function K(W){requestAnimationFrame(K);const rt=D?W-D:16.67,pt=Math.min(rt/1e3,.05);if(D=W,document.hidden)return;const _t=performance.now();if(N+=pt,x==="play"){let F=Number(M.has("KeyW"))-Number(M.has("KeyS")),Jt=Number(M.has("KeyD"))-Number(M.has("KeyA"));const Ft=Math.hypot(F,Jt)||1,Dt=(M.has("ShiftLeft")||M.has("ShiftRight")?6:3)*pt/Ft;Vm(U,(Jt*Math.cos(P)-F*Math.sin(P))*Dt,(-F*Math.cos(P)-Jt*Math.sin(P))*Dt,o,n.bounds,n.walkable),h.position.set(U.x,1.72,U.z),h.rotation.set(C,P,0);const vt=Xa(s,U,P);Mt("prompt").hidden=!vt,vt&&(Mt("prompt").textContent="[ E ]  "+vt.label)}J?.update(pt,rt),p.update(N,h,_r[A]),_.update(N,_r[A]),v.update(N),m.update(N,h,_r[A]),c.info.reset();const kt=performance.now()-_t;J?.beginGPU();const ge=performance.now();f.render(),J?.afterFrame(kt,performance.now()-ge),W-Nt>500&&(Nt=W,Mt("performance").textContent="T"+n.config.tier+" / "+A+" · "+rt.toFixed(1)+" ms · "+c.info.render.calls+" calls · "+c.info.render.triangles+" triangles"),!J?.active&&x==="play"&&(w+=rt,T++,g+=pt,g>3&&(w/T>23?y++:y=0,y>=2&&b>.6&&(b=Math.max(.6,b-.1),L(),y=0),T=w=g=0))}requestAnimationFrame(K)}
