/*!CK:3505049897!*//*1458526921,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pip4f"]); }

__d("PagesMessagingConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOAD_MESSAGE_THREAD_URI:"\/ajax\/pages\/messages\/load_message_thread.php",UNANSWERED_FILTER:"unanswered"};},null);
__d("XPagesInsightsPageDataController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/insights\/page_data\/",{page_id:{type:"Int",required:true},request_payload_type:{type:"Enum",required:true,enumType:1}});},null);
__d('PagesInsightsPageDataStore',['FluxStore','PagesInsightsDataDispatcher','PagesInsightsDataPayloadTypes','PagesInsightsRequest','XPagesInsightsPageDataController'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={};h=babelHelpers.inherits(k,c('FluxStore'));i=h&&h.prototype;k.prototype.__onDispatch=function(l){'use strict';switch(l.type){case c('PagesInsightsDataPayloadTypes').REQUEST_PAGE_ADMIN_SUMMARY_DATA:case c('PagesInsightsDataPayloadTypes').REQUEST_PAGE_POST_REACH_DATA:if(!(l.pageID in j))this.$PagesInsightsPageDataStore1(l.pageID,l.type);break;case c('PagesInsightsDataPayloadTypes').PAGE_ADMIN_SUMMARY_DATA:case c('PagesInsightsDataPayloadTypes').PAGE_POST_REACH_DATA:j[l.pageID]=babelHelpers['extends']({},j[l.pageID],l.data);this.__emitChange();break;}};k.prototype.$PagesInsightsPageDataStore1=function(l,m){'use strict';c('PagesInsightsRequest').sendRequest(c('XPagesInsightsPageDataController').getURIBuilder().setInt('page_id',l).setEnum('request_payload_type',m).getURI());};k.prototype.getPageData=function(l){'use strict';return j[l]||{};};function k(){'use strict';h.apply(this,arguments);}f.exports=new k(c('PagesInsightsDataDispatcher'));},null);
__d('MercuryPagesChannelHandler',['ChannelConstants','MercuryActionType','MercuryChannelHandler','MercuryConfig','MercuryPayloadSource','MessagingEvent','MessagingRealtimeConstants'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('MercuryChannelHandler'));i=h&&h.prototype;j.prototype.__markAsSeen=function(k,l){'use strict';if(this.isPayloadForCurrentInstance(l))i.__markAsSeen.call(this,k,l);};j.prototype.__updateModelsFromMercuryPayload=function(k,l){'use strict';if(this.isPayloadForCurrentInstance(l))i.__updateModelsFromMercuryPayload.call(this,k,l);};j.prototype.__handleMessagingPayload=function(k,l){'use strict';if(this.isPayloadForCurrentInstance(l)){i.__handleMessagingPayload.call(this,k,l);this.__handlePageMessagingPayload(k,l);}};j.prototype.__handlePageMessagingPayload=function(k,l){'use strict';switch(l.obj.event){case c('MessagingEvent').CHANGE_PAGE_THREAD_FLAG:this.$MercuryPagesChannelHandler1(k,l);break;case c('MessagingEvent').CREATE_PAGE_ADMIN_NOTE:this.$MercuryPagesChannelHandler2(k,l);break;}};j.prototype.getRouting=function(){'use strict';return {pages_messaging:this.__handleMessagingPayload};};j.prototype.__getMessagingPayloadType=function(){'use strict';return c('ChannelConstants').getArbiterType('pages_messaging');};j.prototype.__getMercuryPayloadType=function(){'use strict';return null;};j.prototype.__getInboxPayloadType=function(){'use strict';return null;};j.prototype.$MercuryPagesChannelHandler1=function(k,l){'use strict';if(this.__shouldDropLogMessageBecauseOfSync())return;var m={action_type:c('MercuryActionType').CHANGE_FLAG,mark_as_flag:l.obj.flagged,other_user_fbid:l.obj.other_user_fbid};this.__payloadPreprocessor.handleUpdate({actions:[m],payload_source:c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE});};j.prototype.$MercuryPagesChannelHandler2=function(k,l){'use strict';var m={action_type:c('MercuryActionType').CREATE_PAGE_ADMIN_NOTE,message_id:l.obj.message_id,note:l.obj.note,other_user_fbid:l.obj.other_user_fbid};this.__payloadPreprocessor.handleUpdate({actions:[m],payload_source:c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE});};j.prototype.isPayloadForCurrentInstance=function(k){'use strict';var l=k.obj[c('MessagingRealtimeConstants').VIEWER_FBID]+'',m=i.getInstanceFBID.call(this)+'';return l===m;};j.prototype.__shouldDropMessageBecauseOfSync=function(k){'use strict';return !!c('MercuryConfig').WWWSyncPages;};j.prototype.__shouldDropLogMessageBecauseOfSync=function(k){'use strict';return !!c('MercuryConfig').WWWSyncPages;};j.prototype.__shoudDropDeleteThreadBecauseOfSync=function(){'use strict';return !!c('MercuryConfig').WWWSyncPages;};j.prototype.__shouldDropMarkReadBecauseOfSync=function(){'use strict';return !!c('MercuryConfig').WWWSyncPages;};j.prototype.__shouldDropReadReceiptBecauseOfSync=function(){'use strict';return !!c('MercuryConfig').WWWSyncPages;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('MercurySyncPageEnvironment',['Arbiter','ChannelManager','MercuryConfig','MercurySyncDeltaHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();'use strict';function h(j,k){if(!k)return;if(!c('MercuryConfig').WWWSyncPages)return;c('MercurySyncDeltaHandler').getForFBID(j);c('ChannelManager').subscribeIrisQueue(j,k.toString());c('Arbiter').inform('MercurySyncDeltaHandler/initSeqID',{fbid:j,seqID:k});}function i(j){}f.exports={setUp:h,tearDown:i};},null);
__d('ContextualDialogLockOnClick',['Event','LayerHideOnBlur','SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=1000;function i(j){'use strict';this.$ContextualDialogLockOnClick1=j;}i.prototype.enable=function(){'use strict';this.$ContextualDialogLockOnClick2=new (c('SubscriptionsHandler'))();this.$ContextualDialogLockOnClick2.addSubscriptions(this.$ContextualDialogLockOnClick1.subscribe('show',this.$ContextualDialogLockOnClick3.bind(this)),this.$ContextualDialogLockOnClick1.subscribe('hide',this.$ContextualDialogLockOnClick4.bind(this)),c('Event').listen(this.$ContextualDialogLockOnClick1.getRoot(),'click',this.$ContextualDialogLockOnClick5.bind(this)),c('Event').listen(this.$ContextualDialogLockOnClick1.getCausalElement(),'click',this.$ContextualDialogLockOnClick6.bind(this)));};i.prototype.disable=function(){'use strict';this.$ContextualDialogLockOnClick1.unlockHover();this.$ContextualDialogLockOnClick2.release();};i.prototype.$ContextualDialogLockOnClick3=function(){'use strict';if(this.$ContextualDialogLockOnClick1.hasBehavior(c('LayerHideOnBlur'))){this.$ContextualDialogLockOnClick1.disableBehavior(c('LayerHideOnBlur'));setTimeout(this.$ContextualDialogLockOnClick1.enableBehavior.bind(this.$ContextualDialogLockOnClick1,c('LayerHideOnBlur')),h);}};i.prototype.$ContextualDialogLockOnClick4=function(){'use strict';this.$ContextualDialogLockOnClick1.unlockHover();};i.prototype.$ContextualDialogLockOnClick5=function(){'use strict';this.$ContextualDialogLockOnClick1.lockHover();};i.prototype.$ContextualDialogLockOnClick6=function(){'use strict';this.$ContextualDialogLockOnClick1.lockHover();this.$ContextualDialogLockOnClick1.show();};f.exports=i;},null);
__d('PagesManagerSpringboardResponseTimeHelper',['invariant','fbt'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={getSpringBoardFbtText:function(k,l){if(!k||!l||k===0)return null;var m=k>1?l+"s":l;switch(l){case "day":return i._({"day":"{time} d\u00eda","days":"{time} d\u00edas"},[i.param('time',k),i['enum'](m,{day:'day',days:'days'})]);case "hour":return i._({"hour":"{time} hora","hours":"{time} horas"},[i.param('time',k),i['enum'](m,{hour:'hour',hours:'hours'})]);case "minute":return i._({"minute":"{time} minuto","minutes":"{time} minutos"},[i.param('time',k),i['enum'](m,{minute:'minute',minutes:'minutes'})]);case "second":return i._({"second":"{time} segundo","seconds":"{time} segundos"},[i.param('time',k),i['enum'](m,{second:'second',seconds:'seconds'})]);default:h(0);}}};f.exports=j;},null);
__d('PagesManagerSpringboardMetric.react',['cx','fbt','ContextualDialogLockOnClick','ContextualLayerHideOnScroll','SpectrumIntegerScale','LayerFadeOnHide','LayerFadeOnShow','LayerHideOnTransition','LayerHideOnBlur','LayerHideOnEscape','LayerRemoveOnHide','Link.react','PagesManagerSpringboardResponseTimeHelper','React','ReactDOM','ReactLayeredComponentMixin','Style','UIPagelet','Vector','XUIContextualDialog.react','XUISpinner.react','XUIText.react','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=30*1000,l=300,m=1e+06,n=500,o=25,p=c('React').createClass({displayName:'PagesManagerSpringboardMetric',mixins:[c('ReactLayeredComponentMixin')],propTypes:{adjustFlyoutPositionOnload:j.bool,count:j.number.isRequired,unit:j.oneOf(['day','hour','minute','second']),secondaryCount:j.number,itemKey:j.string.isRequired,flyoutWidth:j.number,label:j.string.isRequired,onFlyoutToggle:j.func,pagelet:j.object,hasFlyout:j.bool,showFlyout:j.bool,displayType:j.oneOf(['number','percent','ratio','time']),href:j.object},getDefaultProps:function(){return {hasFlyout:true,displayType:'number',unit:null};},getInitialState:function(){return {count:0};},componentDidMount:function(){this._onToggle(this.props.showFlyout);this._animateToNewCount(this.props.count);},componentWillReceiveProps:function(q){if(q.count!==this.props.count||q.secondaryCount!==this.props.secondaryCount){this._expireCache();this._animateToNewCount(q.count);}},render:function(){var q;if(this.props.displayType==='percent'){q=this._convertCountToPercentage();}else if(this.props.displayType==='ratio'){q=i._("{numerator} de {denominator}",[i.param('numerator',Math.round(this.state.count)),i.param('denominator',this.props.secondaryCount)]);}else if(this.props.displayType==='time'){q=c('PagesManagerSpringboardResponseTimeHelper').getSpringBoardFbtText(this.props.count,this.props.unit);}else{q=Math.round(this.state.count);if(q>=m){q=c('SpectrumIntegerScale')().tickFormat()(q);}else q=c('SpectrumIntegerScale')().tooltipFormat()(q);}var r;if(this.props.hasFlyout){r=c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.props,{ref:'metric'}),c('React').createElement('span',{className:"_5vh0"},q),c('React').createElement('span',{className:"_5vh1"},this.props.label));}else r=c('React').createElement(c('XUIText.react'),{size:'medium',display:'block',ref:'metric'},c('React').createElement('span',{className:"_5vh0"},q),c('React').createElement('span',{className:"_xep"},this.props.label));return (c('React').createElement('li',{className:"_5vg_"},r));},renderLayers:function(){if(!this.props.hasFlyout)return null;return {metricsFlyout:c('React').createElement(c('XUIContextualDialog.react'),{autoFocus:true,behaviors:{ContextualDialogLockOnClick:c('ContextualDialogLockOnClick'),ContextualLayerHideOnScroll:c('ContextualLayerHideOnScroll'),LayerFadeOnHide:c('LayerFadeOnHide'),LayerFadeOnShow:c('LayerFadeOnShow'),LayerHideOnTransition:c('LayerHideOnTransition'),LayerHideOnBlur:c('LayerHideOnBlur'),LayerHideOnEscape:c('LayerHideOnEscape'),LayerRemoveOnHide:c('LayerRemoveOnHide')},contextRef:function(){return this.refs.metric;}.bind(this),hoverContext:c('ReactDOM').findDOMNode(this.refs.metric),hoverShowDelay:l,onToggle:this._onToggle,position:'left',shown:this.props.showFlyout,width:this.props.flyoutWidth},c('React').createElement('div',{className:"_5x0l autofocus",ref:'flyout'},c('React').createElement('div',{className:"_5x0m"},c('React').createElement(c('XUISpinner.react'),{size:'large'}))))};},_expireCache:function(){this._cacheExpires=0;},_onToggle:function(q){if(this.props.onFlyoutToggle)this.props.onFlyoutToggle(q,this.props.itemKey);if(!this.props.hasFlyout)return;if(q){var r=Date.now();if(r>(this._cacheExpires||0)){this._cacheExpires=r+k;c('UIPagelet').loadFromEndpoint(this.props.pagelet.name,c('ReactDOM').findDOMNode(this.refs.flyout),this.props.pagelet.data,this.props.adjustFlyoutPositionOnload?{handler:this._onFlyoutLoad}:null);}}},_onFlyoutLoad:function(){var q=c('ge')('pagesManagerSpringboard');if(!q)return;var r=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.metric)),s=c('Vector').getElementPosition(q),t=r.y-s.y,u=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.flyout)).y;if(t<u)c('Style').set(c('ReactDOM').findDOMNode(this.refs.flyout).offsetParent,'top',-t+'px');},_animateToNewCount:function(q){var r=n/o,s=q-this.state.count,t=s/r,u=0,v=setInterval(function(){if(++u>=r){clearInterval(v);return this.setState({count:q});}var w=this.state.count+t;this.setState({count:w});}.bind(this),o);},_convertCountToPercentage:function(){return i._("{percentage} \u0025",[i.param('percentage',Math.round(this.state.count*100))]);}});f.exports=p;},null);
__d("XPagesManagerMessagesController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/{page_token}\/messages\/",{page_token:{type:"String",required:true},business_id:{type:"Int"},folder:{type:"String"},section:{type:"String"},subsection:{type:"String"},threadid:{type:"String"},mercurythreadid:{type:"String"},index:{type:"Int"},initialClientFilter:{type:"String"}});},null);
__d('PagesManagerSpringboard.react',['cx','fbt','invariant','AdsCallToActionTypes','Arbiter','BizSiteIdentifier.brands','BoostedPagelikeConstants','BoostedActionType','CctaDataStore','CustomCTAConstants','CustomCTAUtils','d3/time/day','DOM','ge','HubbleConstants','HubbleContext','InsightsUtils','MercuryPagesChannelHandler','MercurySyncPageEnvironment','PagesManagerSpringboardMetric.react','PagesInsightsDataDispatcher','PagesInsightsDataPayloadTypes','PagesInsightsGating','PagesInsightsPageDataStore','React','tidyEvent','XPagesManagerMessagesController','mapObject','formatDate','PagesMessagingConst'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('PagesMessagingConst').UNANSWERED_FILTER,m=328,n=430,o={LOCAL_AD_CALL_TO_ACTION_CLICKS:'local_ad_call_to_action_clicks',ADS_RUNNING:'ads_running',CALL_TO_ACTION:'call_to_action',PAGE_LIKES:'page_likes',POST_ENGAGEMENT:'post_engagement',POST_REACH:'post_reach',QRCODE_SCANS:'qrcode_scans',RESPONSE_RATE:'response_rate',RESPONSE_TIME:'response_time',WEBSITE_CLICKS:'website_clicks',CHECKINS:'checkins'},p=c('React').createClass({displayName:'PagesManagerSpringboard',propTypes:{context:k.object,pageInfo:k.object.isRequired,canSeePageLikeAds:k.bool,canSeePageLocalAwarenessAds:k.bool,canSeePagePostAds:k.bool,activePageLikeAds:k.number,activePageLocalAwarenessAds:k.number,activeBoostedPostAds:k.number,callToActionClicks:k.number,callToActionPaidClicks:k.number,localAdCallToActionClicks:k.number,currentLocalAdCallToActionType:k.string,canSeeMessages:k.bool,canSeeInsights:k.bool,canSeeLabelFans:k.bool,canSeeWebsiteClicks:k.bool,initialCallToActionTypes:k.string,initalCanSeeCallToAction:k.bool,newLikesCount:k.number,websiteClicks:k.number,qrId:k.number,qrScansCount:k.number,responseRate:k.number,responseTime:k.number,responseTimeUnit:k.string,canSeeResponseRate:k.bool.isRequired,canSeeResponseTime:k.bool.isRequired,pageURIToken:k.string.isRequired,canSeeLocalInsights:k.bool,initSyncSequenceID:k.number},getDefaultProps:function(){return {canSeeResponseRate:false,canSeeResponseTime:false};},getInitialState:function(){var q=c('mapObject')(this.props.mostRecentTimes,function(u){return c('InsightsUtils').pacificSecondsToUTCDate(u);}),r=new Date(Math.min(q[c('HubbleConstants').PIPELINE_DAILY],q[c('HubbleConstants').PIPELINE_WEEKLY])),s=c('d3/time/day').utc.offset(r,-7),t=c('PagesInsightsPageDataStore').getPageData(this.props.pageInfo.id.toString());return babelHelpers['extends']({activeFlyoutKey:null,callToActionClicks:0,callToActionPaidClicks:0,CallToActionTypes:this.props.initialCallToActionTypes,canSeeLocalAdCallToActionClicks:this.props.canSeePageLocalAwarenessAds,canSeeCallToAction:this.props.initialCanSeeCallToAction,activePageLikeAds:this.props.activePageLikeAds||0,activeBoostedPostAds:this.props.activeBoostedPostAds||0,insightSince:s,insightUntil:r,likesWeekly:0,postEngagementWeekly:0,postReachWeekly:0,checkinsWeekly:0},t);},componentWillMount:function(){if(this.props.canSeeMessages){var q=c('ge')('pages_manager_flyout_messages');if(q)c('DOM').remove(q);c('MercuryPagesChannelHandler').getForFBID(this.props.pageInfo.id).turnOn();c('MercurySyncPageEnvironment').setUp(this.props.pageInfo.id,this.props.initSyncSequenceID);}c('CctaDataStore').addListener(function(event){if(c('CctaDataStore').isInitialized(this.props.pageInfo.id.toString()))this.setState({canSeeCallToAction:!!c('CctaDataStore').getData().cctaID,CallToActionTypes:c('CctaDataStore').getData().ctaType});}.bind(this));c('PagesInsightsPageDataStore').addListener(function(){var r=c('PagesInsightsPageDataStore').getPageData(this.props.pageInfo.id);this.setState({checkinsWeekly:r.checkinsWeekly||this.state.checkinsWeekly,likesWeekly:r.likesWeekly||this.state.likesWeekly,postEngagementWeekly:r.postEngagementWeekly||this.state.postEngagementWeekly,postReachWeekly:r.postReachWeekly||this.state.postReachWeekly});}.bind(this));},componentDidMount:function(){c('HubbleContext').setContext(this.props.context);if(this.props.canSeeInsights)c('PagesInsightsDataDispatcher').dispatch({pageID:this.props.pageInfo.id,type:c('PagesInsightsDataPayloadTypes').REQUEST_PAGE_ADMIN_SUMMARY_DATA});if(this.props.canSeePageLikeAds)c('tidyEvent')(c('Arbiter').subscribe(c('BoostedPagelikeConstants').PANEL_STATUS_CHANGE_FINISH,function(q,r){var s=r.active?1:0;if(this.state.activePageLikeAds!==s&&r.action_type===c('BoostedActionType').PAGELIKE)this.setState({activeFlyoutKey:o.PAGE_LIKES,activePageLikeAds:s});}.bind(this)));c('tidyEvent')(c('Arbiter').subscribe(c('CustomCTAConstants').SHOW_FLYOUT,function(q,r){this.setState({activeFlyoutKey:o.CALL_TO_ACTION});}.bind(this)));},render:function(){var q=[];q.push(this._renderAds());if(!c('PagesInsightsGating').hasAdminSummaryLikesRemoveTest)q.push(this._renderNewLikes());q.push(this._renderPostReach());if(c('PagesInsightsGating').hasAdminSummaryLikesRemoveTest)q.push(this._renderPostEngagement());q.push(this._renderQRScans());q.push(this._renderCallToAction());q.push(this._renderWebsiteClicks());q.push(this._renderLocalAdCallToActionClicks());q.push(this._renderResponseRate());q.push(this._renderResponseTime());q.push(this._renderCheckins());var r=false;for(var s=0;s<q.length;s++)if(q[s]!==null){r=true;break;}if(!r)return null;q.unshift(c('React').createElement('div',{key:'title',className:"_5vg-"},c('React').createElement('h4',null,i._("Esta semana"))));return (c('React').createElement('div',{className:"_5vgz",id:'pagesManagerSpringboard'},q));},_renderAds:function(){if(!this.props.showAdsRunning||!this.props.canSeePageLikeAds&&!this.props.canSeePagePostAds)return null;var q=(this.props.canSeePageLikeAds?this.state.activePageLikeAds:0)+(this.props.canSeePagePostAds?this.state.activeBoostedPostAds:0);return (c('React').createElement('ul',{key:'ads'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.ADS_RUNNING,showFlyout:this.state.activeFlyoutKey===o.ADS_RUNNING,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardActiveAdsPagelet',data:{page_id:this.props.pageInfo.id,page_like_eligible:this.props.canSeePageLikeAds,page_post_eligible:this.props.canSeePagePostAds,active_boosted_post_ads:this.state.activeBoostedPostAds}},flyoutWidth:290,count:q,label:i._({"Ad":"Anuncio en circulaci\u00f3n","Ads":"Anuncios en circulaci\u00f3n"},[i['enum'](this.state.activeAdCount===1?'Ad':'Ads',{Ad:'Ad',Ads:'Ads'})])})));},_renderNewLikes:function(){var q=this.props.pageInfo,r=this.props.canSeeLabelFans?372:290,s=c('d3/time/day').utc.offset(this.state.insightUntil,-1),t=0;if(this.props.canSeeInsights){t=this.state.likesWeekly;}else t=this.props.newLikesCount;return (c('React').createElement('ul',{key:'new_likes'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.PAGE_LIKES,showFlyout:this.state.activeFlyoutKey===o.PAGE_LIKES,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardNewLikesPagelet',data:{page_id:q.id,count:t,width:r,since:c('formatDate')(this.state.insightSince,'m/d/Y',{utc:true}),until:c('formatDate')(s,'m/d/Y',{utc:true}),since_timestamp:c('InsightsUtils').dateToSeconds(this.state.insightSince)}},flyoutWidth:r,count:t,label:i._({"Like":"Me gusta de la p\u00e1gina","Likes":"Me gusta de la p\u00e1gina"},[i['enum'](this.state.likesWeekly===1?'Like':'Likes',{Like:'Like',Likes:'Likes'})])})));},_renderWebsiteClicks:function(){if(!this.props.canSeeWebsiteClicks)return null;return (c('React').createElement('ul',{key:'website_clicks'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{count:this.props.websiteClicks,flyoutWidth:m,itemKey:o.WEBSITE_CLICKS,label:i._({"Click":"Clic en el sitio web","Clicks":"Clics en el sitio web"},[i['enum'](this.props.websiteClicks===1?'Click':'Clicks',{Click:'Click',Clicks:'Clicks'})]),onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardWebsiteClicksPagelet',data:{page_id:this.props.pageInfo.id}},showFlyout:this.state.activeFlyoutKey===o.WEBSITE_CLICKS})));},_renderPostReach:function(){if(!this.props.canSeeInsights)return null;var q=this.props.pageInfo,r=c('d3/time/day').utc.offset(this.state.insightUntil,-1);return (c('React').createElement('ul',{key:'post_reach'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.POST_REACH,showFlyout:this.state.activeFlyoutKey===o.POST_REACH,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardPostReachPagelet',data:{page_id:q.id,context:this.props.context,since:c('formatDate')(this.state.insightSince,'m/d/Y',{utc:true}),until:c('formatDate')(r,'m/d/Y',{utc:true})}},flyoutWidth:624,count:this.state.postReachWeekly,label:i._("Alcance de publicaciones")})));},_renderPostEngagement:function(){if(!this.props.canSeeInsights)return null;var q=this.props.pageInfo,r=c('d3/time/day').utc.offset(this.state.insightUntil,-1);return (c('React').createElement('ul',{key:'post_engagement'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.POST_ENGAGEMENT,showFlyout:this.state.activeFlyoutKey===o.POST_ENGAGEMENT,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardPostEngagementPagelet',data:{page_id:q.id,context:this.props.context,since:c('formatDate')(this.state.insightSince,'m/d/Y',{utc:true}),until:c('formatDate')(r,'m/d/Y',{utc:true})}},flyoutWidth:624,count:this.state.postEngagementWeekly,label:i._("Interacciones con publicaciones")})));},_renderQRScans:function(){if(!this.props.hasValidQRCode)return null;var q=this.props.qrScansCount,r=430,s=c('d3/time/day').utc.offset(this.state.insightUntil,-1);return (c('React').createElement('ul',{key:'qr_scans'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.QRCODE_SCANS,showFlyout:this.state.activeFlyoutKey===o.QRCODE_SCANS,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardQRScansPagelet',data:{page_id:this.props.pageInfo.id,qr_id:this.props.qrId,since:c('formatDate')(this.state.insightSince,'m/d/Y',{utc:true}),since_timestamp:c('InsightsUtils').dateToSeconds(this.state.insightSince),until:c('formatDate')(s,'m/d/Y',{utc:true})}},flyoutWidth:r,count:q,label:i._({"Scan":"Escaneo de c\u00f3digo QR","Scans":"Escaneos de c\u00f3digo QR"},[i['enum'](q===1?'Scan':'Scans',{Scan:'Scan',Scans:'Scans'})])})));},_renderCallToAction:function(){if(!this.state.canSeeCallToAction)return null;return (c('React').createElement('ul',{key:'cta'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{ref:'ctaSpringBoard',itemKey:o.CALL_TO_ACTION,showFlyout:this.state.activeFlyoutKey===o.CALL_TO_ACTION,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardCallToActionPagelet',data:{page_id:this.props.pageInfo.id}},count:this.props.callToActionClicks+this.props.callToActionPaidClicks,flyoutWidth:m,label:c('CustomCTAUtils').getCallToActionLabel(this.state.CallToActionTypes)})));},_renderLocalAdCallToActionClicks:function(){if(!this.state.canSeeLocalAdCallToActionClicks||!this.props.currentLocalAdCallToActionType)return null;var q=this._getCTAClicksCounterLabel(this.props.currentLocalAdCallToActionType);return (c('React').createElement('ul',{key:'ads_cta'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.LOCAL_AD_CALL_TO_ACTION_CLICKS,showFlyout:this.state.activeFlyoutKey===o.LOCAL_AD_CALL_TO_ACTION_CLICKS,onFlyoutToggle:this._onFlyoutToggle,pagelet:{name:'PagesManagerSpringboardLocalAdCallToActionClicksPagelet',data:{page_id:this.props.pageInfo.id}},count:this.props.localAdCallToActionClicks,flyoutWidth:m,label:q})));},_getCTAClicksCounterLabel:function(q){var r=c('AdsCallToActionTypes').TYPES[q];!r?j(0):void 0;var s;switch(r){case c('AdsCallToActionTypes').TYPES.MESSAGE_PAGE:s=i._("Clics en \"Enviar mensaje\"");break;default:s=r.text;break;}return s;},_renderResponseRate:function(){if(!this.props.canSeeResponseRate||this.props.responseRate===null)return null;var q=this.props.showRatio?Math.min(this.props.numConversations,this.props.numThreads):this.props.responseRate,r=i._("\u00cdndice de respuesta");return this._renderResponseComponent(o.RESPONSE_RATE,this.props.showRatio?'ratio':'percent',q,null,this.props.numThreads,r);},_renderResponseTime:function(){if(!this.props.canSeeResponseTime||this.props.responseTime===null||this.props.responseTimeUnit===null)return null;var q=i._("Tiempo de respuesta");return this._renderResponseComponent(o.RESPONSE_TIME,'time',this.props.responseTime,this.props.responseTimeUnit,null,q);},_renderResponseComponent:function(q,r,s,t,u,v){var w=c('XPagesManagerMessagesController').getURIBuilder().setString('page_token',this.props.pageURIToken).setString('initialClientFilter',l).getURI();return (c('React').createElement('ul',{key:q},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:q,showFlyout:this.state.activeFlyoutKey===q,onFlyoutToggle:this._onFlyoutToggle,adjustFlyoutPositionOnload:true,pagelet:{name:'PagesManagerSpringboardMessagesPagelet',data:{business_id:c('BizSiteIdentifier.brands').getBusinessID(),page_id:this.props.pageInfo.id,initialClientFilter:l}},displayType:r,flyoutWidth:n,count:s,unit:t,secondaryCount:u,label:v,href:w})));},_renderCheckins:function(){if(!this.props.canSeeInsights||!this.props.canSeeLocalInsights)return null;return (c('React').createElement('ul',{key:'checkins'},c('React').createElement(c('PagesManagerSpringboardMetric.react'),{itemKey:o.CHECKINS,showFlyout:this.state.activeFlyoutKey===o.CHECKINS,onFlyoutToggle:this._onFlyoutToggle,adjustFlyoutPositionOnload:true,pagelet:{name:'PagesManagerSpringboardCheckinsPagelet',data:{page_id:this.props.pageInfo.id}},flyoutWidth:m,count:this.state.checkinsWeekly,label:i._("Visitas")})));},_onFlyoutToggle:function(q,r){if(q){this.setState({activeFlyoutKey:r});}else if(this.state.activeFlyoutKey===r)this.setState({activeFlyoutKey:null});}});f.exports=p;},null);