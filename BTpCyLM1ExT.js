/*!CK:3726245621!*//*1456242399,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CWXZo"]); }

__d('SemiInlineSuggestion',['csx','cx','$','Arbiter','AsyncRequest','CSS','DOM','Event','HighConfidenceSuggestionLogger','SuggestionLoggingUserActions','ProductionPromptConfig','XDismissPromptController','XProfilePictureOverlayAsyncDialogController','DOMQuery'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this.$SemiInlineSuggestion1=k;this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion3=null;this.$SemiInlineSuggestion4=true;this.$SemiInlineSuggestion5=false;this.$SemiInlineSuggestion6();}j.prototype.$SemiInlineSuggestion6=function(){'use strict';c('Arbiter').subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestion7();}.bind(this));c('Arbiter').subscribe('composer/linkScraped',function(){return this.$SemiInlineSuggestion8();}.bind(this));c('Arbiter').subscribe('showOGTagger',function(){return this.$SemiInlineSuggestion9();}.bind(this));};j.prototype.$SemiInlineSuggestion7=function(){'use strict';if(!this.$SemiInlineSuggestion2)return;this.$SemiInlineSuggestion10=c('$')('bootloadSemiinlineRoot');c('CSS').show(this.$SemiInlineSuggestion10);if(c('ProductionPromptConfig').gk&&this.$SemiInlineSuggestion2.mechanism==='gk_based_production_prompt_classifier'){this.$SemiInlineSuggestion11(this.$SemiInlineSuggestion10);}else this.$SemiInlineSuggestion12(this.$SemiInlineSuggestion10);this.$SemiInlineSuggestion5=true;};j.prototype.$SemiInlineSuggestion8=function(){'use strict';if(this.$SemiInlineSuggestion5){this.$SemiInlineSuggestion13();}else c('Arbiter').subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestion13();}.bind(this));};j.prototype.$SemiInlineSuggestion13=function(){'use strict';this.$SemiInlineSuggestion14=c('$')('linkscrapeSemiinlineRoot');var k=c('DOM').scry(this.$SemiInlineSuggestion14,'#linkscrapeSuggestionPlaceholder'),l=c('DOM').scry(c('$')('bootloadSemiinlineRoot'),'#semiinline_suggestion_placeholder');if(k&&k.length>0&&l&&l.length>0)c('DOM').replace(k[0],l[0].cloneNode(true));c('CSS').show(this.$SemiInlineSuggestion14);this.$SemiInlineSuggestion12(this.$SemiInlineSuggestion14);};j.prototype.$SemiInlineSuggestion11=function(k){'use strict';var l=c('DOM').scry(k,"._1_-h")[0],m=c('DOM').scry(k,"._1_-i")[0];if(l)this.$SemiInlineSuggestion15(l);if(m)this.$SemiInlineSuggestion16(m);};j.prototype.$SemiInlineSuggestion12=function(k){'use strict';var l=c('DOM').scry(k,"._1ljz")[0],m=c('DOM').scry(k,"._1lj-")[0];if(l)this.$SemiInlineSuggestion15(l);if(m)this.$SemiInlineSuggestion16(m);};j.prototype.$SemiInlineSuggestion15=function(k){'use strict';c('Event').listen(k,'click',function(){c('HighConfidenceSuggestionLogger').log(c('SuggestionLoggingUserActions').XOUT,this.$SemiInlineSuggestion17,this.$SemiInlineSuggestion2,this.$SemiInlineSuggestion1);new (c('AsyncRequest'))().setURI('/ajax/production_prompt/survey').setData({prompt_id:this.$SemiInlineSuggestion2.blob.promptid}).send();this.$SemiInlineSuggestion9();}.bind(this));};j.prototype.$SemiInlineSuggestion16=function(k){'use strict';c('Event').listen(k,'click',function(){c('HighConfidenceSuggestionLogger').log(c('SuggestionLoggingUserActions').ADD,this.$SemiInlineSuggestion17,this.$SemiInlineSuggestion2,this.$SemiInlineSuggestion1);if(this.$SemiInlineSuggestion2&&this.$SemiInlineSuggestion2.blob.profileoverlaypageid){this.$SemiInlineSuggestion18(this.$SemiInlineSuggestion2.blob.profileoverlaypageid);}else this.$SemiInlineSuggestion19();}.bind(this));};j.prototype.update=function(k,l){'use strict';if(l&&l[0]){this.$SemiInlineSuggestion2=l[0];this.$SemiInlineSuggestion3=k;}else{this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion9();this.$SemiInlineSuggestion3=null;}};j.prototype.isShown=function(){'use strict';return !!this.$SemiInlineSuggestion2;};j.prototype.isActive=function(){'use strict';return this.$SemiInlineSuggestion4;};j.prototype.$SemiInlineSuggestion9=function(){'use strict';if(this.$SemiInlineSuggestion2){this.$SemiInlineSuggestion2=null;if(this.$SemiInlineSuggestion14)c('CSS').hide(this.$SemiInlineSuggestion14);if(this.$SemiInlineSuggestion10)c('CSS').hide(this.$SemiInlineSuggestion10);this.$SemiInlineSuggestion4=false;}};j.prototype.$SemiInlineSuggestion18=function(k){'use strict';var l=c('XDismissPromptController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(l).setData({user_action:c('SuggestionLoggingUserActions').ADD,prompt_id:this.$SemiInlineSuggestion2.blob.promptid}).setHandler(function(m){var n=c('XProfilePictureOverlayAsyncDialogController').getURIBuilder().setInt('selected_page_id',k).getURI();new (c('AsyncRequest'))().setURI(n).send();}).send();};j.prototype.$SemiInlineSuggestion20=function(){'use strict';var k={};k.uid=this.$SemiInlineSuggestion2.blob.locationid;k.text=this.$SemiInlineSuggestion2.blob.locationtext;c('Arbiter').inform('Prompt/PrefillCheckin',k);var l=c('DOMQuery').find(document.body,'#composerCityTagger');c('CSS').addClass(c('DOMQuery').scry(l,'a')[0],"_1dsf");c('DOM').setAttributes(c('DOMQuery').find(document.body,'input[name="composertags_place"]'),{value:k.uid});c('DOM').setAttributes(c('DOMQuery').find(document.body,'input[name="composertags_place_name"]'),{value:k.text});c('DOM').setAttributes(c('DOMQuery').find(document.body,'input[name="is_explicit_place"]'),{value:'true'});};j.prototype.$SemiInlineSuggestion19=function(){'use strict';if(this.$SemiInlineSuggestion2){if(this.$SemiInlineSuggestion2.blob.locationid)this.$SemiInlineSuggestion20();var k={};k.type='page';k.uid=this.$SemiInlineSuggestion2.blob.objectid;k.at_id=this.$SemiInlineSuggestion2.blob.actiontypeid;k.suggestion_mechanism=this.$SemiInlineSuggestion2.mechanism;k.text=this.$SemiInlineSuggestion3;var l={};l.config=this.$SemiInlineSuggestion17;l.suggestion=this.$SemiInlineSuggestion2;l.csid=this.$SemiInlineSuggestion1;k.suggestion_config=l;c('Arbiter').inform('structuredSuggestion/add',k);if(this.$SemiInlineSuggestion14)c('CSS').hide(this.$SemiInlineSuggestion14);if(this.$SemiInlineSuggestion10)c('CSS').hide(this.$SemiInlineSuggestion10);}};j.prototype.setConfigNameForLogging=function(k){'use strict';this.$SemiInlineSuggestion17=k;};j.prototype.getDisplayingSuggestion=function(){'use strict';return this.$SemiInlineSuggestion2;};f.exports=j;},null);