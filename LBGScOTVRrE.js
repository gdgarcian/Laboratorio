/*!CK:3005302467!*//*1454296333,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ElO73"]); }

__d('ReactComposerCanvasStore',['ReactComposerCanvasActionType','ReactComposerStoreBase'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i);k=j&&j.prototype;function l(){'use strict';var m;k.constructor.call(this,function(){return {shouldShowCanvasSelector:false};},function(n){switch(n.type){case h.SHOW_CANVAS_SELECTOR:m&&m.$ReactComposerCanvasStore1(n);break;case h.HIDE_CANVAS_SELECTOR:m&&m.$ReactComposerCanvasStore2(n);break;default:break;}});m=this;}l.prototype.$ReactComposerCanvasStore1=function(m){'use strict';var n=m.composerID,o=this.getComposerData(n);o.shouldShowCanvasSelector=true;this.emitChange(n);};l.prototype.$ReactComposerCanvasStore2=function(m){'use strict';var n=m.composerID,o=this.getComposerData(n);o.shouldShowCanvasSelector=false;this.emitChange(n);};l.prototype.shouldShowCanvasSelector=function(m){'use strict';return this.getComposerData(m).shouldShowCanvasSelector;};f.exports=new l();},null);
__d('legacy:RevealLink',['revealLinkRegister'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.revealLinkRegister=c('revealLinkRegister');},3);