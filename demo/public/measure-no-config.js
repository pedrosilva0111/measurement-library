(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var h=this||self;function l(b,a){switch(a){case 1:console.log(b);break;case 2:console.warn(b);break;case 3:console.error(b)}};/*
 jQuery v1.9.1 (c) 2005, 2012
 jQuery Foundation, Inc. jquery.org/license.
*/
var m=/\[object (Boolean|Number|String|Function|Array|Date|RegExp|Arguments)\]/;function n(b){return null==b?String(b):(b=m.exec(Object.prototype.toString.call(Object(b))))?b[1].toLowerCase():"object"}function p(b,a){return Object.prototype.hasOwnProperty.call(Object(b),a)}function q(b){if(!b||"object"!=n(b)||b.nodeType||b==b.window)return!1;try{if(b.constructor&&!p(b,"constructor")&&!p(b.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var a in b);return void 0===a||p(b,a)};function t(b,a){var c={},e=c;b=b.split(".");for(var d=0;d<b.length-1;d++)e=e[b[d]]={};e[b[b.length-1]]=a;return c}function u(b,a){var c=!b._clear,e;for(e in b)if(p(b,e)){var d=b[e];"array"===n(d)&&c?("array"===n(a[e])||(a[e]=[]),u(d,a[e])):q(d)&&c?(q(a[e])||(a[e]={}),u(d,a[e])):a[e]=d}delete a._clear};/*
 Copyright 2012 Google Inc. All rights reserved. */
function v(b,a,c){a=void 0===a?{}:a;c=void 0===c?!1:c;"function"===typeof a?(l("Legacy constructor was used. See README for latest usage.",2),a={listener:a,listenToPast:c,processNow:!0,commandProcessors:{}}):a={listener:a.listener||function(){},listenToPast:a.listenToPast||!1,processNow:void 0===a.processNow?!0:a.processNow,commandProcessors:a.commandProcessors||{}};this.a=b;this.l=a.listener;this.j=a.listenToPast;this.g=this.h=!1;this.c={};this.f=[];this.b=a.commandProcessors;this.i=x(this);var e=
this.a.push,d=this;this.a.push=function(){var f=[].slice.call(arguments,0),g=e.apply(d.a,f);y(d,f);return g};a.processNow&&this.process()}
v.prototype.process=function(){this.h&&l("Process has already been run. This method should only run a single time to prepare the helper.",3);this.registerProcessor("set",function(){var c={};1===arguments.length&&"object"===n(arguments[0])?c=arguments[0]:2===arguments.length&&"string"===n(arguments[0])&&(c=t(arguments[0],arguments[1]));return c});this.h=!0;for(var b=this.a.length,a=0;a<b;a++)y(this,[this.a[a]],!this.j)};
v.prototype.get=function(b){var a=this.c;b=b.split(".");for(var c=0;c<b.length;c++){if(void 0===a[b[c]])return;a=a[b[c]]}return a};v.prototype.flatten=function(){this.a.splice(0,this.a.length);this.a[0]={};u(this.c,this.a[0])};v.prototype.registerProcessor=function(b,a){b in this.b||(this.b[b]=[]);this.b[b].push(a)};
function y(b,a,c){c=void 0===c?!1:c;if(b.h&&(b.f.push.apply(b.f,a),!b.g))for(;0<b.f.length;){a=b.f.shift();if("array"===n(a))a:{var e=b.c;"string"===n(a[0])||l("Error processing command, no command was run. The first argument must be of type string, but was of type "+(typeof a[0]+".\nThe command run was "+a),2);for(var d=a[0].split("."),f=d.pop(),g=a.slice(1),k=0;k<d.length;k++){if(void 0===e[d[k]]){l("Error processing command, no command was run as the object at "+(d+" was undefined.\nThe command run was "+
a),2);break a}e=e[d[k]]}try{e[f].apply(e,g)}catch(w){l("An exception was thrown by the method "+(f+", so no command was run.\nThe method was called on the data layer object at the location ")+(d+"."),3)}}else if("arguments"===n(a)){d=b;f=[];g=a[0];if(d.b[g])for(e=d.b[g].length,k=0;k<e;k++)f.push(d.b[g][k].apply(d.i,[].slice.call(a,1)));b.f.push.apply(b.f,f)}else if("function"==typeof a)try{a.call(b.i)}catch(w){l("An exception was thrown when running the method "+(a+", execution was skipped."),3),
l(w,3)}else if(q(a))for(var r in a)u(t(r,a[r]),b.c);else continue;c||(b.g=!0,b.l(b.c,a),b.g=!1)}}v.prototype.registerProcessor=v.prototype.registerProcessor;v.prototype.flatten=v.prototype.flatten;v.prototype.get=v.prototype.get;v.prototype.process=v.prototype.process;window.DataLayerHelper=v;function x(b){return{set:function(a,c){u(t(a,c),b.c)},get:function(a){return b.get(a)}}};function z(b){this.a=b;if(!this.a.domain){b=this.a;var a=document;var c=a.cookie,e=a.domain.split("."),d=e.pop();for(a.cookie="registrable_domain="+d+";domain="+d;a.cookie===c&&0<e.length;)d=e.pop()+"."+d,a.cookie="registrable_domain="+d+";domain="+d;a.cookie===c?a=null:(a.cookie="registrable_domain=;domain="+d+";expires=Thu, 01 Jan 1970 00:00:00 GMT",a=d);b.domain=a}void 0==this.a.expires&&(this.a.expires=2419200);this.a.prefix||(this.a.prefix="ml_");this.a.update||(this.a.update=!0);this.a.flags||
(this.a.flags="")}z.prototype.save=function(b,a,c){c=void 0===c?this.a.expires:c;a=JSON.stringify(a);b=""+this.a.prefix+b+"="+a;b=b+"; domain="+this.a.domain;a=new Date;c===Number.POSITIVE_INFINITY?a.setMilliseconds(a.getMilliseconds()+31536E7):a.setMilliseconds(a.getMilliseconds()+1E3*c);b=b+"; expires="+a.toUTCString();b=b+"; "+this.a.flags;document.cookie=b};z.prototype.load=function(){};z.getName=function(){return"cookies"};function A(b){var a=void 0===b?{}:b;b=a.client_id_expires;a=a.automatic_params;b=isNaN(Number(b))?63072E3:Number(b);"[object Array]"!==Object.prototype.toString.call(a)&&(a=[]);this.a={page_path:!0,page_location:!0,page_title:!0,user_id:!0,client_id:!0};for(var c=0;c<a.length;++c)this.a[a[c]]=!0;this.b=b}A.prototype.processEvent=function(){};A.prototype.persistTime=function(b){return"client_id"===b?this.b:-1};A.prototype.persistTime=A.prototype.persistTime;A.prototype.processEvent=A.prototype.processEvent;
A.getName=function(){return"googleAnalytics"};var B={cookies:z},C={googleAnalytics:A};function D(b){for(var a={},c=0;c<arguments.length;c++){var e=arguments[c],d;for(d in e)e.hasOwnProperty(d)&&(a[d]=e[d])}return a}function E(b,a){return b&&a&&a.hasOwnProperty("getName")?b.get(a.getName()):{}}
function F(b,a,c,e){b.registerProcessor("event",function(d,f){f||(f={});var g=E(b,a.constructor);f=D(g,c,f);a.processEvent(e,this,d,f)});b.registerProcessor("set",function(d,f,g){(g=void 0===g?a.persistTime(d,f):g)&&(-1===g?e.save(d,f):e.save(d,f,g))})};function G(b){var a=new v(b,{processNow:!1});a.registerProcessor("config",function(c,e,d,f){"string"===typeof c&&(c=C[c]);var g=E(a,c);g=D(g,e);try{var k=new c(g)}catch(w){k=null}"string"===typeof d&&(d=B[d]);c=E(a,d);f=D(c,f);try{var r=new d(f)}catch(w){r=null}k&&r&&F(a,k,e,r)});a.process()}var H=["setupMeasure"],I=h;H[0]in I||"undefined"==typeof I.execScript||I.execScript("var "+H[0]);
for(var J;H.length&&(J=H.shift());)H.length||void 0===G?I[J]&&I[J]!==Object.prototype[J]?I=I[J]:I=I[J]={}:I[J]=G;})();
