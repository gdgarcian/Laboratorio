/*!CK:2776320746!*//*1456242400,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MUDaJ"]); }

__d('SuggestionScraper',['ArbiterMixin','AsyncRequest','ComposerXSessionIDs','Event','HighConfidenceSuggestion','HighConfidenceSuggestionLogger','Keys','OGComposerTagger','SemiInlineSuggestion','SuggestionLoggingUserActions','SuggestionUIPresentation','TaggerBadgeSuggestion','XStructuredSuggestionController','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=50;h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l,m,n,o){'use strict';i.constructor.call(this);this.$SuggestionScraper1=l;this.$SuggestionScraper2=m;this.$SuggestionScraper3=c('ComposerXSessionIDs').getSessionID(o);this.$SuggestionScraper4=n;for(var p=0;p<n.length;p++){var q=n[p];switch(q){case c('SuggestionUIPresentation').FLYOUT:this.$SuggestionScraper5=new (c('HighConfidenceSuggestion'))(m,l,this.$SuggestionScraper3);break;case c('SuggestionUIPresentation').TAGGER_BADGE:this.$SuggestionScraper6=new (c('TaggerBadgeSuggestion'))(m,l,this.$SuggestionScraper3);break;case c('SuggestionUIPresentation').SEMI_INLINE:this.$SuggestionScraper7=new (c('SemiInlineSuggestion'))(this.$SuggestionScraper3);}}}k.prototype.setInputTriggerConfig=function(l,m){'use strict';this.$SuggestionScraper8=m;this.$SuggestionScraper9=l;this.$SuggestionScraper10();};k.prototype.setBootloadTriggerConfig=function(l){'use strict';this.$SuggestionScraper11(l);};k.prototype.triggerNow=function(l,m){'use strict';this.$SuggestionScraper11(l,m);};k.prototype.$SuggestionScraper10=function(){'use strict';if(this.events)return;var l=function(n){if(this.$SuggestionScraper8.value)setTimeout(this.$SuggestionScraper12.bind(this,n),j);},m=function(n){var o=false;if(this.$SuggestionScraper5&&this.$SuggestionScraper5.isShown()||this.$SuggestionScraper6&&this.$SuggestionScraper6.isShown()||this.$SuggestionScraper7&&this.$SuggestionScraper7.isShown()){if(n.keyCode===c('Keys').DELETE||n.keyCode===c('Keys').BACKSPACE)o=true;}else if((n.keyCode<c('Keys').A||n.keyCode>c('Keys').Z)&&n.keyCode!==c('Keys').DELETE&&n.keyCode!==c('Keys').BACKSPACE)o=true;if(o)setTimeout(this.$SuggestionScraper12.bind(this,true),j);};this.events=c('Event').listen(this.$SuggestionScraper8,{keydown:m.bind(this),mousemove:l.bind(this)});};k.prototype.disableInput=function(){'use strict';if(!this.events)return;for(var event in this.events)this.events[event].remove();this.events=null;};k.prototype.$SuggestionScraper12=function(l){'use strict';var m=this.$SuggestionScraper8.value;if(!m){this.$SuggestionScraper13();}else if(this.$SuggestionScraper14(m))this.$SuggestionScraper11(this.$SuggestionScraper9,m);};k.prototype.$SuggestionScraper14=function(l){'use strict';if(!l.match(/([a-z].*){5}/i))return false;if(this.$SuggestionScraper15&&this.$SuggestionScraper15.length<=l.length){var m=l.replace(this.$SuggestionScraper15,'').trim(),n=m.match(/([a-z]+){3}/i);if(!n)return false;if(m==='the'||m==='this'||m==='very')return false;}return true;};k.prototype.$SuggestionScraper11=function(l,m,n){'use strict';if(this.$SuggestionScraper16)return;if(this.$SuggestionScraper1.isOGTaggerSet())return;this.$SuggestionScraper17=l;n=this.$SuggestionScraper18(c('SuggestionUIPresentation').FLYOUT,this.$SuggestionScraper5,n,l);n=this.$SuggestionScraper18(c('SuggestionUIPresentation').SEMI_INLINE,this.$SuggestionScraper7,n,l);if(this.$SuggestionScraper4.length===0)return;var o=c('XStructuredSuggestionController').getURIBuilder().setString('config_name',l).setString('csid',this.$SuggestionScraper3).setEnumVector('supported_presentation',this.$SuggestionScraper4).getURI();this.$SuggestionScraper16=new (c('AsyncRequest'))(o).setData({composer_state:{input:m},extra_data:n}).setHandler(function(p){this.$SuggestionScraper19(p.payload);}.bind(this));this.$SuggestionScraper16.send();this.$SuggestionScraper15=m;};k.prototype.$SuggestionScraper18=function(l,m,n,o){'use strict';if(!m)return n;n=n||{};var p=this.$SuggestionScraper4.indexOf(l);if(p>=0)if(!m.isActive()){var q=this.$SuggestionScraper4.slice(0,p),r=this.$SuggestionScraper4.slice(p+1);this.$SuggestionScraper4=q.concat(r);}else{if(m.getDisplayingSuggestion())n.existingHighConfSuggestion=JSON.stringify(m.getDisplayingSuggestion());m.setConfigNameForLogging(o);}return n;};k.prototype.$SuggestionScraper19=function(l){'use strict';this.$SuggestionScraper16=null;if(l&&l.suggestion_finder_result){switch(l.suggestion_finder_result.presentation){case c('SuggestionUIPresentation').FLYOUT:this.$SuggestionScraper5.update(l.suggestion_finder_result.results);break;case c('SuggestionUIPresentation').TAGGER_BADGE:this.$SuggestionScraper1.saveSuggestion(l.suggestion_finder_result.results,this.$SuggestionScraper17);this.$SuggestionScraper6.update(l.suggestion_finder_result.results);break;case c('SuggestionUIPresentation').ADD_TAG:c('OGComposerTagger').asyncSuggest(l.add_tag_payload,function(){c('HighConfidenceSuggestionLogger').log(c('SuggestionLoggingUserActions').ADD,this.$SuggestionScraper17,l.suggestion_finder_result.results&&l.suggestion_finder_result.results[0],this.$SuggestionScraper3);}.bind(this),function(){c('HighConfidenceSuggestionLogger').log(c('SuggestionLoggingUserActions').XOUT,this.$SuggestionScraper17,l.suggestion_finder_result.results&&l.suggestion_finder_result.results[0],this.$SuggestionScraper3);}.bind(this));break;case c('SuggestionUIPresentation').SEMI_INLINE:this.$SuggestionScraper7.update(l.token_text,l.suggestion_finder_result.results);break;case c('SuggestionUIPresentation').TOP_OF_VERBS:this.$SuggestionScraper1.saveSuggestion(l.suggestion_finder_result.results,this.$SuggestionScraper17);break;}}else this.$SuggestionScraper13();};k.prototype.$SuggestionScraper13=function(){'use strict';this.$SuggestionScraper5&&this.$SuggestionScraper5.update(null);this.$SuggestionScraper6&&this.$SuggestionScraper6.update(null);};f.exports=k;},null);