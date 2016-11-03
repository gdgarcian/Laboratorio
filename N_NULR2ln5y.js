/*!CK:1440680911!*//*1456241747,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UM7RI"]); }

__d('ComposerXHiddenInputClear',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.element.value='';}f.exports=h;},null);
__d("ComposerXSessionInputClear",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.element.value=new Date().valueOf().toString().substr(0,10);}f.exports=h;},null);
__d('ComposerXPrivacyWidgetTags',['Arbiter','CurrentUser','PrivacySelectorBase','getObjectValues'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';var j=i.getComponent('mainprivacywidget');if(!j){this._subscriptions=[];return null;}this._privacyWidget=j.element;this._privacyWidgetInstance=j.instance&&j.instance.getInstance().getInstance();this._mentionsInput=i.getComponent('maininput').instance;this._placeTypeahead=i.getComponent('placetagger')?i.getComponent('placetagger').instance:null;this._friendsTokenizer=i.getComponent('withtagger')?i.getComponent('withtagger').instance:null;this._ogTagger=i.getComponent('ogtagger')?i.getComponent('ogtagger').instance:null;this._init();}h.prototype._init=function(){'use strict';this._subscriptions=[this._mentionsInput.subscribe('update',this._informChangedTags.bind(this))];if(this._placeTypeahead){this._subscriptions.push(this._placeTypeahead.subscribe('select',this._onPlaceSelect.bind(this)));this._subscriptions.push(c('Arbiter').subscribe('Events/autoSuggestionSelected',this._onPlaceSelect.bind(this)));this._subscriptions.push(this._placeTypeahead.subscribe('unselect',this._onPlaceUnselect.bind(this)));}if(this._friendsTokenizer)this._subscriptions.push(this._friendsTokenizer.subscribe(['addToken','removeToken'],this._informChangedTags.bind(this)));this._informChangedTags();};h.prototype._getTaggedNamesForAudience=function(){'use strict';var i={},j=this._mentionsInput.getMentions();for(var k in j)if(j[k].type=='user')i[k]=j[k].text;if(this._friendsTokenizer)this._friendsTokenizer.getTokens().map(function(l){i[l.getValue()]=l.getText();});delete i[c('CurrentUser').getID()];return c('getObjectValues')(i);};h.prototype._onPlaceSelect=function(i,j){'use strict';this._placeType=j.selected.place_type;this._informChangedTags();};h.prototype._onPlaceUnselect=function(i,j){'use strict';this._placeType=null;this._informChangedTags();};h.prototype._informChangedTags=function(){'use strict';var i=[];if(this._friendsTokenizer)i=this._friendsTokenizer.getTokens();var j={withTags:i,mention:this._mentionsInput.getMentions()};c('Arbiter').inform('Composer/changedtags',j);if(this._privacyWidgetInstance&&this._privacyWidgetInstance instanceof c('PrivacySelectorBase'))this._privacyWidgetInstance.informTagsChanged(j);};h.prototype.destroy=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};Object.assign(h.prototype,{_subscriptions:null,_placeType:null});f.exports=h;},null);
__d('ComposerXStatusAttachment',['csx','Arbiter','BanzaiODS','Button','ComposerXAttachment','ComposerXAttachmentButtonBarState','ComposerXAttachmentUtils','ComposerXController','ComposerXDragDrop','ComposerXPrivacyWidgetTags','DOM','Event','Parent','URI','URLScraper'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('ComposerXAttachment'));j=i&&i.prototype;function k(l,m,n){'use strict';j.constructor.call(this);this._root=l;this._tagger=m;this._config=n;this.attachmentClassName=n.classname;}k.prototype.getRoot=function(){'use strict';return this._root;};k.prototype.initWithComponents=function(){'use strict';var l=this.getComponent('maininput');c('ComposerXAttachmentUtils').initMentions(l,this._config.mentionsPlaceholder,this.getComposerID());this._tagger.init(this);this._privacyWidgetTags=new (c('ComposerXPrivacyWidgetTags'))(this);c('ComposerXAttachmentButtonBarState').trackCityChanges(this);var m=c('DOM').find(l.element,'textarea.input');if(!this._scraper){this._scraper=new (c('URLScraper'))(m);this._scraper.subscribe('match',function(p,q){if(!this._config.scraper_endpoint)return;var r=new (c('URI'))(this._config.scraper_endpoint);r.addQueryData({scrape_url:encodeURIComponent(q.url),remove_url:this._config.remove_url,attachment_class:this._config.classname});c('ComposerXController').getAttachment(this._root,r.toString());}.bind(this));}this._scraper.enable();if(this._config.textOnlyEdit){this._scraper.disable();this._scraper=null;}if(!this._isEditComposer()){this._scraper.check();}else{var n=m.value.length;m.setSelectionRange(n,n);}this._dragdrop=new (c('ComposerXDragDrop'))(this._root,this._composerID,this._config.targetID);this._dragdrop.enableURLDropping();var o=c('DOM').scry(this._root,"._9s");if(o.length>0)this._removeListener=c('Event').listen(o[0],'click',function(){var p=c('DOM').scry(this._root,'input[name="hide_object_attachment"]');if(p.length!==0)p[0].value=1;var q=this._config.remove_endpoint;if(!q)q=this._config.remove_url;c('BanzaiODS').bumpEntityKey('content_production','composer.remove_link.fbfeed');c('ComposerXController').getAttachment(this._root,q);}.bind(this));if(this._config.postActionsButton!=null)this._config.postActionsButton.initHiddenInputs(this.getComponent('pabhiddeninputs').instance);c('Arbiter').inform('ComposerXStatusAttachment/ready',this._composerID,c('Arbiter').BEHAVIOR_STATE);l.instance.subscribe('valueUpdate',function(p,q){var r=c('DOM').scry(this._root,"._4jy1")[0];c('Button').setEnabled(r,q.value!==null&&q.value.trim().length>0||q.hasAuxContent);c('Arbiter').inform(c('Button').isEnabled(r)?'ComposerXStatusAttachment/submitEnabled':'ComposerXStatusAttachment/submitDisabled');}.bind(this));};k.prototype.cleanup=function(){'use strict';this._tagger.cleanup();this._privacyWidgetTags.destroy();this._privacyWidgetTags=null;if(this._scraper)this._scraper.disable();if(this._removeListener){this._removeListener.remove();this._removeListener=null;}if(this._dragdrop){this._dragdrop.deactivate();this._dragdrop=null;}};k.prototype.reset=function(){'use strict';this._tagger.reset();};k.prototype.canSwitchAway=function(){'use strict';return !c('Parent').byClass(this._root,'async_saving');};k.prototype.allowOGTagPreview=function(){'use strict';return true;};k.prototype._isEditComposer=function(){'use strict';return !!this.getComponent('editparams');};Object.assign(k.prototype,{_privacyWidgetTags:null,_scraper:null,_dragdrop:null,_removeListener:null});f.exports=k;},null);
__d('ComposerXCameraIconBehavior',['cx','Arbiter','ComposerXMediaUploadHandler','CSS','Event','FirstPhotoUploadLogger','PagesComposerPostActionsLoggerEvent'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={initCameraIcon:function(j){this._cameraIcon=j.getComponent('cameraicon');if(!this._config.showCameraIcon){c('CSS').hide(this._cameraIcon.element);return;}c('CSS').show(this._cameraIcon.element);var k=this._cameraIcon.instance,l=new (c('ComposerXMediaUploadHandler'))(this._config.composerID,{imagesOnly:this._config.imagesOnly,isEditComposer:this._config.isEditComposer,photoUploadOverrideEndpoint:this._config.photoUploadOverrideEndpoint});this._listeners.push(c('Event').listen(this._cameraIcon.element,'click',function(){l.fetchAttachments();c('Arbiter').inform('cameraicon/click');c('FirstPhotoUploadLogger').log(c('PagesComposerPostActionsLoggerEvent').CLICK_UPLOAD_BUTTON_IN_TOOLBAR,this._config.targetID,this._root);}.bind(this)));this._subscriptions.push(k.subscribe('change',function(){l.handleFileSelected(k);c('CSS').addClass(this._cameraIcon.element,"_19_a");}.bind(this)));}};f.exports=i;},null);
__d('ComposerXPlusTagger',['ComposerXCameraIconBehavior','ComposerXStandardTagger','classWithMixins','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('classWithMixins')(c('ComposerXStandardTagger'),c('mixin')(c('ComposerXCameraIconBehavior'))));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this._eventuallyTagger=null;}j.prototype.init=function(k){'use strict';i.init.call(this,k);if(k.getComponent('cameraicon'))this.initCameraIcon(k);};j.prototype._nonObstrusiveSwitchToTagger=function(k){'use strict';var l=this._onTaggerShowCallbacks[k];delete this._onTaggerShowCallbacks[k];this.switchToTagger(k);this._dontHideTaggerOnMentionsFocus=k;this._onTaggerShowCallbacks[k]=l;};j.prototype.eventuallySwitchToTagger=function(k){'use strict';if(!this.isAnyTaggerShown()){this._nonObstrusiveSwitchToTagger(k);}else if(this._currentTagger!==k)this._eventuallyTagger=k;};j.prototype.switchToTagger=function(k){'use strict';if(this._eventuallyTagger===k)this._eventuallyTagger=null;this._nonEventuallyHideTaggers();this._showTagger(k);};j.prototype.hideTaggers=function(){'use strict';i.hideTaggers.call(this);if(this._eventuallyTagger){this._nonObstrusiveSwitchToTagger(this._eventuallyTagger);this._eventuallyTagger=null;}};j.prototype._nonEventuallyHideTaggers=function(){'use strict';i.hideTaggers.call(this);};j.prototype._hideTaggersFromMentionsInputClick=function(){'use strict';if(this._currentTagger!=this._dontHideTaggerOnMentionsFocus){this.eventuallySwitchToTagger(this._dontHideTaggerOnMentionsFocus);i._hideTaggersFromMentionsInputClick.call(this);}};f.exports=j;},null);
__d('ComposerXPlusTaggerWithOG',['ComposerXOGTaggerBehavior','ComposerXPlusTagger','classWithMixins','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('classWithMixins')(c('ComposerXPlusTagger'),c('mixin')(c('ComposerXOGTaggerBehavior'))));i=h&&h.prototype;j.prototype.init=function(k){'use strict';i.init.call(this,k);this.initOGTagger(k);};j.prototype.cleanup=function(){'use strict';i.cleanup.call(this);this.cleanupOGTagger();};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('ComposerXCitySharerReset',['AsyncRequest'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){var k=j.instance.getTargetID();if(k!==0&&j.instance.getValue()!=="")k=0;j.instance.clearCity();new (c('AsyncRequest'))().setURI('/ajax/places/city_sharer_reset.php').setData({target_id:k}).setHandler(function(l){i(j,l.getPayload());}).send();}function i(j,k){j.instance.setShareSetting(k.sharedefault);j.instance.setSessionID(new Date().valueOf().toString().substr(0,10));if(k.citypageid)j.instance.setDefaultCity(k.citystring,k.citypageid,k.cityid);if(k.sharedefault)j.instance.useDefaultCity();}f.exports=h;},null);
__d('ComposerXOGTaggerReset',['CSS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.instance.reset();c('CSS').hide(i.element);}f.exports=h;},null);
__d('ComposerXPeopleTaggerReset',['CSS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.instance.reset();c('CSS').hide(i.element);}f.exports=h;},null);
__d('ComposerXPlaceTaggerReset',['CSS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.instance.getCore().reset();c('CSS').hide(i.element);}f.exports=h;},null);