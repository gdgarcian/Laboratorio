/*!CK:4265244812!*//*1453745269,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["s58tu"]); }

__d('MercuryNonEmployeeTypeaheadRenderer',['cx','fbt','DOM','CompactTypeaheadRenderer'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k,l){var m=c('CompactTypeaheadRenderer')(k,l);if(k.non_employee){var n=c('DOM').create('span',{className:"_52l8 highlight"},i._("(No es empleado)")),o=c('DOM').scry(m,'.subtext')[0];if(o){c('DOM').prependContent(o,'\u00b7');c('DOM').prependContent(o,n);}}return m;}f.exports=j;},null);