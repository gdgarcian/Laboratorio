/*!CK:834940347!*//*1458526920,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["9daSF"]); }

__d('AsyncLoader',['AsyncRequest','BaseAsyncLoader'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){this._endpoint=i;this._type=j;}Object.assign(h.prototype,c('BaseAsyncLoader').prototype);h.prototype.send=function(i,j,k,l,m){new (c('AsyncRequest'))(i).setData({ids:j}).setHandler(l).setErrorHandler(m).setAllowCrossPageTransition(true).setMethod('GET').setReadOnly(true).send();};f.exports=h;},null);
__d('ChatHovercard',['Arbiter','AsyncLoader','Bootloader','JSLogger','debounce'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=5,i=new (c('AsyncLoader'))('/ajax/chat/hovercard/sidebar.php','hover'),j=c('JSLogger').create('chat_hovercard');c('Arbiter').subscribe('Hovercard/dirty',i.reset.bind(i));function k(o,p){i.get(o,function(q){setTimeout(function(){if(!q){j.error('fetch_failure',{id:o});return;}c('Bootloader').loadModules(["Hovercard"],function(r){var s=r.getDialog(q);if(!s){j.error('no_hovercard',{id:o,endpoint:q});return;}if(o==p.getActiveID())p.showHovercard(o,s);});},0);});}function l(o,p){var q=[];function r(u){if(u>=0&&u<o.length)q.push(o[u]);}var s=o.indexOf(p);if(s>-1){r(s);for(var t=1;t<h;t++){r(s+t);r(s-t);}}return q.filter(function(u){return u;});}function m(o,p){var q=p.getActiveID();if(q){var r=o.getShowingUsers(),s=l(r,q);i.get(s,function(){});}}function n(o){var p=o.getHoverController();p.registerDefault(k);p.subscribe('hover',c('debounce')(m.bind(null,o,p),100));}f.exports=n;},null);
__d('ChatOrderedListHover',['csx','cx','ArbiterMixin','CSS','ErrorUtils','Event','LayerHideOnBlur','Parent','mixin','setTimeoutAcrossTransitions','shield'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();function l(o){c('CSS').addClass(o,'fetching');}function m(o){c('CSS').removeClass(o,'fetching');}j=babelHelpers.inherits(n,c('mixin')(c('ArbiterMixin')));k=j&&j.prototype;function n(o){'use strict';k.constructor.call(this);this._orderedList=o;this._root=o.getRoot();c('Event').listen(this._root,'mouseover',this._mouseOver.bind(this));c('Event').listen(this._root,'mouseleave',this._mouseLeave.bind(this));o.subscribe('click',c('shield')(this._hide,this));}n.prototype._mouseOver=function(event){'use strict';if(this._paused)return;var o=event.getTarget(),p=c('Parent').bySelector(o,"._42fz")||c('Parent').bySelector(o,"._5a58");p&&this._setActiveItem(p);};n.prototype._mouseLeave=function(event){'use strict';this._setActiveItem(null);};n.prototype._clearTimeouts=function(){'use strict';this._showTimeout&&clearTimeout(this._showTimeout);this._showTimeout=null;this._hideTimeout&&clearTimeout(this._hideTimeout);this._hideTimeout=null;};n.prototype._hide=function(){'use strict';if(this._showingDialog){this._showingDialog.hide();this._showingDialog=null;this._showingID=null;}};n.prototype._show=function(){'use strict';var o=this.getActiveID(),p=false;if(this._defaultHandler){p=true;c('ErrorUtils').applyWithGuard(this._defaultHandler,{},[o,this]);}if(p&&this._showingID!=this.getActiveID())l(this._activeItem);};n.prototype._setActiveItem=function(o){'use strict';if(o!=this._activeItem){this._clearTimeouts();this._activeItem&&m(this._activeItem);if(o){this._activeItem=o;var p=this._showingDialog?0:600;this._showTimeout=c('setTimeoutAcrossTransitions')(function(){return this._show();}.bind(this),p);this.inform('hover');}else{this._activeItem=null;this._hideTimeout=c('setTimeoutAcrossTransitions')(function(){return this._hide();}.bind(this),10);this.inform('leave');}}};n.prototype.registerDefault=function(o){'use strict';this._defaultHandler=o;};n.prototype.getActiveID=function(){'use strict';var o=this._activeItem&&this._orderedList.getUserForNode(this._activeItem);return o||null;};n.prototype.showHovercard=function(o,p){'use strict';if(o==this.getActiveID()&&o!=this._showingID){this._clearTimeouts();m(this._activeItem);this._hide();this._showingDialog=p;this._showingID=o;var q=p.subscribe('mouseenter',this._setActiveItem.bind(this,this._activeItem)),r=p.subscribe('mouseleave',function(){q.unsubscribe();this._setActiveItem(null);}.bind(this)),s=p.subscribe('hide',function(){this.inform('hovercard_hide');q.unsubscribe();r.unsubscribe();s.unsubscribe();}.bind(this));p.enableBehavior(c('LayerHideOnBlur')).setContext(this._activeItem).setPosition('left').show();this.inform('hovercard_show');}};Object.assign(n.prototype,{_root:null,_activeItem:null,_hideTimeout:null,_showTimeout:null,_showingDialog:null,_showingID:null,_defaultHandler:null});f.exports=n;},null);
__d("ChatSidebarConstants",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={LITESTAND_CLASSIC_SIZE:32,IMAGE_SIZE:32};Object.assign(h,{getImageSize:function(i){if(i===false)return h.IMAGE_SIZE;return h.LITESTAND_CLASSIC_SIZE;},getItemHeight:function(){return h.IMAGE_SIZE+8;}});f.exports=h;},null);
__d('ChatSidebarItem.react',['cx','ix','xuiglyph','AvailableListConstants','XUIBadge.react','ChatConfig','ChatSidebarConstants','Image.react','Link.react','MercuryConfig','ReactComponentWithPureRenderMixin','React','SplitImage.react','TextWithEmoticons.react'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('ChatConfig').get('divebar_rounded_profile',false),m=9,n=c('React').createClass({displayName:'ChatSidebarItem',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{image:k.string,images:k.array,isPlayingGame:k.bool,birthday:k.bool,context:k.node,href:k.string,imageSize:k.number,name:k.node.isRequired,nameCanHaveEmoji:k.bool,onClick:k.func,status:k.number,statusTime:k.string,unreadCount:k.number,isMessengerOnlyContact:k.bool,profileBadge:k.string},render:function(){var w="_55ln"+(this.props.context?' '+"_55lo":'')+(this.props.unreadCount?' '+"_5bom":'')+(l?' '+"_qhr":'');return (c('React').createElement(c('Link.react'),{className:w,href:{url:this.props.href},onClick:this.props.onClick,rel:'ignore'},c('React').createElement('div',{className:"_55lp"},c('React').createElement('div',{className:"_56p9"},c('React').createElement(c('SplitImage.react'),{size:this.props.imageSize||c('ChatSidebarConstants').IMAGE_SIZE,srcs:this.props.image||this.props.images})),c('React').createElement('div',{className:"_5bon"},this.renderProfileBadge(),this.renderPlayingGame(),this.renderBirthday(),this.renderUnreadCount(),this.renderStatus()),c('React').createElement('div',{className:"_55lr"},this.renderName()),c('React').createElement('div',{className:"_55ls"},this.props.context))));},renderName:function(){if(this.props.nameCanHaveEmoji){var w=c('React').createElement(c('TextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});if(c('MercuryConfig').MessengerNewEmojiGK&&c('MercuryConfig').MessengerTextWithEmoticonsModule){var x=c('MercuryConfig').MessengerTextWithEmoticonsModule;w=c('React').createElement(x,{renderEmoticons:true,renderEmoji:true,text:this.props.name});}return w;}else return this.props.name;},renderUnreadCount:function(){var w=this.props.unreadCount;if(!w)return null;return (c('React').createElement(c('XUIBadge.react'),{count:w,maxcount:m,type:'regular'}));},renderStatus:function(){var w=this.getStatusSrc();if(!w&&!this.props.statusTime)return null;var x=w?c('React').createElement(c('Image.react'),{className:"_568_",src:w}):null,y=true;if(this.props.unreadCount&&this.props.unreadCount>0){x=this.props.statusTime?null:x;y=false;}return (c('React').createElement('div',{className:"_568z"},y?this.renderLastActiveTime():null,x));},renderLastActiveTime:function(){return (c('React').createElement('div',{className:"_568-"},this.props.statusTime));},renderBirthday:function(){if(!this.props.birthday)return null;return (c('React').createElement(c('Image.react'),{className:"_5dv3",src:s()}));},renderPlayingGame:function(){if(this.props.statusTime||this.props.birthday||!this.props.isPlayingGame)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_46b3",src:v()})));},renderProfileBadge:function(){if(this.props.statusTime||this.props.isPlayingGame||this.props.birthday||!this.props.profileBadge)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_g7p",src:this.props.profileBadge})));},getStatusSrc:function(){if(this.props.isMessengerOnlyContact)return u();return this.props.status===c('AvailableListConstants').ACTIVE?t():null;}}),o=void 0,p=void 0,q=void 0,r=void 0;function s(){if(!o)o=i('/images/gifts/icons/cake_icon.png');return o;}function t(){if(!q)q=i('/images/chat/sidebar/buddylist_nub/greenDot.png');return q;}function u(){if(!r)r=i('/images/chat/sidebar/buddylist_nub/phone.png');return r;}function v(){if(!p)p=j({name:'games',size:'small'});return p;}f.exports=n;},null);
__d('ChatSidebarThread.react',['fbt','ChatSidebarItem.react','ChatOpenTab','MercuryParticipantListRenderer','WebMessengerPermalinkConstants','ReactComponentWithPureRenderMixin','React','TooltipData'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=10,k='\n',l=c('React').createClass({displayName:'ChatSidebarThread',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{image:i.string,imageSize:i.number,name:i.string,participants:i.array.isRequired,numOtherParticipants:i.number.isRequired,referrer:i.string,status:i.number,threadFBID:i.string,unreadCount:i.number},getDefaultProps:function(){return {numOtherParticipants:j};},render:function(){var o=this.props.name,p=m(this.props.threadFBID,this.props.participants,this.props.numOtherParticipants),q=o?p:undefined,r=this.props.image?[]:n(this.props.participants),s=o?o:p;return (c('React').createElement('div',c('TooltipData').propsFor(this._renderParticipantsTooltip()),c('React').createElement(c('ChatSidebarItem.react'),{context:q,href:c('WebMessengerPermalinkConstants').getURIPathForThreadID(this.props.threadFBID),imageSize:this.props.imageSize,image:this.props.image,images:r,name:s,nameCanHaveEmoji:true,onClick:this._handleClick,referrer:this.props.referrer,status:this.props.status,unreadCount:this.props.unreadCount})));},_renderParticipantsTooltip:function(){var o=[],p=this.props.participants.length,q=this.props.numOtherParticipants,r=Math.min(j,p);if(q-r===1)r--;for(var s=0;s<r;s++)o.push(this.props.participants[s].name);if(r<q)o.push(h._("y {num} m\u00e1s...",[h.param('num',q-r)]));return o.join(k);},_handleClick:function(o){o.preventDefault();c('ChatOpenTab').openThread(this.props.threadFBID,this.props.referrer);}});function m(o,p,q){return new (c('MercuryParticipantListRenderer'))().setIsNewThread(!o).setUseShortName(true).setTotalParticipantCount(q).renderParticipantList(p);}function n(o){return o.map(function(p){return p.image_src;}).filter(function(p){return p;});}f.exports=l;},null);
__d('ChatSidebarGroupThreadsGroup.react',['cx','ChatSidebarThread.react','ChatSidebarSections','ChatSidebarConstants','PresencePrivacy','PresenceStatus','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'ChatSidebarGroupThreadsGroup',propTypes:{groups:i.array.isRequired,isDisconnected:i.bool},render:function(){return (c('React').createElement('ul',null,this.props.groups.map(this._renderGroup)));},_renderGroup:function(k){var l=k.mercury_thread.participants,m=this.props.isDisconnected||c('PresencePrivacy').isUserOffline();return (c('React').createElement('li',{className:"_42fz"+(m?' '+"_570-":''),'data-id':k.uid,key:k.uid},c('React').createElement(c('ChatSidebarThread.react'),{image:k.mercury_thread.image_src,imageSize:c('ChatSidebarConstants').getImageSize(),name:k.mercury_thread.name,participants:k.participants_to_render,numOtherParticipants:l.length-1,referrer:c('ChatSidebarSections').ORDERED_LIST,status:c('PresenceStatus').getGroup(l),threadFBID:k.uid})));}});f.exports=j;},null);
__d('ChatSidebarHeader.react',['cx','ReactComponentWithPureRenderMixin','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'ReactChatSidebarHeader',mixins:[c('ReactComponentWithPureRenderMixin')],render:function(){return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55ob")}),c('React').createElement('div',{className:"_55oc"},this.props.children)));}});f.exports=i;},null);
__d('ChatSidebarUser.react',['ChatOpenTab','ChatSidebarItem.react','WebMessengerPermalinkConstants','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'ChatSidebarUser',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{birthday:h.bool,image:h.string,imageSize:h.number,isPlayingGame:h.bool,name:h.string,sectionName:h.string.isRequired,slot:h.number,status:h.number,statusTime:h.string,unreadCount:h.number,userID:h.string.isRequired,isMessengerOnlyContact:h.bool,profileBadge:h.string},_openTab:function(event){c('ChatOpenTab').openUserTab(this.props.userID,this.props.sectionName,{global_slot:this.props.slot});return event.preventDefault();},render:function(){var j=c('WebMessengerPermalinkConstants').getURIPathForIDOrVanity(this.props.userID);return (c('React').createElement(c('ChatSidebarItem.react'),{onClick:this._openTab,href:j,imageSize:this.props.imageSize,image:this.props.image,isPlayingGame:this.props.isPlayingGame,name:this.props.name,nameCanHaveEmoji:false,status:this.props.status,birthday:this.props.birthday,statusTime:this.props.statusTime,context:this.props.context,unreadCount:this.props.unreadCount,isMessengerOnlyContact:this.props.isMessengerOnlyContact,profileBadge:this.props.profileBadge}));}});f.exports=i;},null);
__d("XProfileBadgeAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile_badge\/async\/badges\/",{user_ids:{type:"StringVector",defaultValue:[]}});},null);
__d('ChatSidebarUserGroup.react',['cx','Promise','AsyncRequest','AvailableList','AvailableListConstants','CanvasGKs','ChatSidebarSections','ChatSidebarUser.react','LastActiveTimes','PresencePrivacy','PresenceStatus','ProfileBadgeConfig','React','ShortProfiles','SubscriptionsHandler','XProfileBadgeAsyncController','createCancelableFunction','requireWeak','shield'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=new (c('Promise'))(function(n){c('requireWeak')('ChatUnreadCount',function(o){k=o.get();n(k);});}),k=void 0,l=Object.keys(c('ChatSidebarSections')).map(function(n){return c('ChatSidebarSections')[n];}),m=c('React').createClass({displayName:'ChatSidebarUserGroup',propTypes:{ids:i.array.isRequired,isDisconnected:i.bool,loadExtras:i.bool,sectionName:i.oneOf(l).isRequired},getInitialState:function(){return {userData:[],userIDToProfileBadge:{}};},componentWillMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._updateProfiles=c('createCancelableFunction')(function(n,o){var p=n.map(function(q){return o[q];});this.setState({userData:p});}.bind(this));this._updateProfileBadges=c('createCancelableFunction')(function(){var n=c('XProfileBadgeAsyncController').getURIBuilder().setStringVector('user_ids',this.props.ids).getURI();new (c('AsyncRequest'))().setURI(n).setHandler(function(o){this.setState({userIDToProfileBadge:o.payload});}.bind(this)).send();}.bind(this));this._subscriptions.addSubscriptions(this._updateProfiles,this._updateProfileBadges);this.componentWillReceiveProps(this.props);},componentDidMount:function(){this._subscriptions.addSubscriptions(c('AvailableList').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,this._onAvailabilityChanged));j.done(function(n){this._subscriptions.addSubscriptions(n.subscribe('unread-count-changed',c('shield')(this.forceUpdate,this)));}.bind(this));},shouldComponentUpdate:function(n,o){var p=this.props,q=p.ids,r=babelHelpers.objectWithoutProperties(p,['ids']);for(var s in r)if(r.hasOwnProperty(s))if(r[s]!==n[s])return true;var t=o.userData,u=this.state.userData;if(t.length!==u.length)return true;for(var v=0;v<u.length;v++)if(u[v].id!==t[v].id)return true;return false;},componentWillUnmount:function(){this._subscriptions.release();},componentWillReceiveProps:function(n){c('ShortProfiles').getMulti(n.ids,this._updateProfiles.bind(this,n.ids));this.setState({userData:n.ids.map(function(o){return c('ShortProfiles').getNow(o);}).filter(function(o){return o;})});if(this.props.loadExtras&&c('ProfileBadgeConfig').show_sidebar_badge)this._updateProfileBadges();},render:function(){return (c('React').createElement('ul',this.props,this.state.userData.map(this._renderProfile)));},_renderProfile:function(n,o){if(n.id===0)return null;var p=c('PresenceStatus').get(n.id);if(p!==c('AvailableListConstants').ACTIVE)p=null;var q=null;if(c('CanvasGKs').pg_chatproxy_canvas_buddy_icon)q=c('PresenceStatus').isPlayingCanvasGameUser(n.id);var r=p!==c('AvailableListConstants').ACTIVE?c('LastActiveTimes').getShortDisplay(n.id):null,s=this.props.isDisconnected||!c('PresencePrivacy').allows(n.id);return (c('React').createElement('li',{className:"_42fz"+(s?' '+"_570-":''),'data-id':n.id,key:n.id},c('React').createElement(c('ChatSidebarUser.react'),{birthday:n.is_birthday,image:n.thumbSrc,imageSize:this.props.imageSize,isPlayingGame:q,name:n.name,sectionName:this.props.sectionName,slot:o,status:p,statusTime:r,userID:n.id,unreadCount:this._getUnreadCountForUID(n.id),isMessengerOnlyContact:n.is_messenger_only,profileBadge:this.state.userIDToProfileBadge[n.id]})));},_getUnreadCountForUID:function(n){if(!k)return null;return k.getUnreadCountForUID(n);},_onAvailabilityChanged:function(n,o){if(!o||this.props.ids.indexOf(o)!==-1)this.forceUpdate();}});f.exports=m;},null);
__d('ChatSidebarOrderedList.react',['cx','fbt','Animation','ChatConfig','Bootloader','ChatQuietLinks','ChatReliabilityInstrumentation','ChatSidebarConstants','ChatSidebarGroupThreadsGroup.react','ChatSidebarHeader.react','ChatSidebarSections','ChatSidebarUserGroup.react','PresencePrivacy','ReactComponentWithPureRenderMixin','React','ReactDOM','Run','Scroll','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ChatSidebarOrderedList',propTypes:{topUsers:j.array.isRequired,availableUsers:j.array.isRequired,isSidebar:j.bool.isRequired,scrollContainer:j.object,groups:j.array.isRequired},getInitialState:function(){return {renderBelowFold:false,isDisconnected:false};},componentDidMount:function(){c('ChatQuietLinks').nukeLinks(c('ReactDOM').findDOMNode(this));this._subscriptions=new (c('SubscriptionsHandler'))();c('Run').onAfterLoad(function(){this.setState({renderBelowFold:true});this._bootloadChannelSubscription();}.bind(this));},componentWillUnmount:function(){this._subscriptions.release();},_scrollToSeparator:function(l){if(!this.props.scrollContainer)return;var m=this.props.scrollContainer.scrollHeight,n=this.props.scrollContainer.clientHeight,o=c('Scroll').getTop(this.props.scrollContainer),p=Math.min(l.offsetTop,m-n);if(o!==p){var q=Math.abs(p-o)/this.props.scrollContainer.clientHeight*500;new (c('Animation'))(this.props.scrollContainer).to('scrollTop',p).ease(c('Animation').ease.end).duration(q).go();}},_renderOfflineSection:function(){var l=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),m=this.props.topUsers.filter(function(o){return !c('PresencePrivacy').allows(o);});m.splice(-2);var n=c('React').createElement('a',{ajaxify:'/ajax/chat/privacy/settings_dialog.php?ref=whitelist_separator',href:'#',rel:'dialog'},i._("Editar"));return [c('React').createElement(c('ChatSidebarHeader.react'),{key:'usersSeparator1'},i._({"*":"M\u00c1S AMIGOS","__vcg":1})),c('React').createElement(c('ChatSidebarHeader.react'),{className:"_5j9-",key:'usersSeparator2'},i._("Estos amigos no pueden verte en el chat. {=link}",[i.param('=link',n)])),c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:m,isDisconnected:this.state.isDisconnected,imageSize:l,key:c('ChatSidebarSections').OFFLINE_USERS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').OFFLINE_USERS})];},_renderOnlineSection:function(){if(this.props.availableUsers.length===0)return null;if(!this.state.renderBelowFold){var l=c('ChatSidebarConstants').getItemHeight();return (c('React').createElement('div',{key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,style:{height:l*this.props.availableUsers.length}}));}var m=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),n=i._("{MORE ONLINE FRIENDS} ({=count})",[i.param('MORE ONLINE FRIENDS',i._({"*":"M\u00c1S AMIGOS","__vcg":1})),i.param('=count',this.props.availableUsers.length)]),o=c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:this.props.availableUsers,imageSize:m,isDisconnected:this.state.isDisconnected,key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').MORE_ONLINE_FRIENDS});return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'usersSeparator',key:'usersSeparator',onClick:function(){return this._scrollToSeparator(c('ReactDOM').findDOMNode(this.refs.usersSeparator));}.bind(this)},n),o];},_renderGroupsSection:function(){if(this.props.groups.length===0)return null;var l=this.state.isDisconnected||c('PresencePrivacy').isUserOffline();return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'groupSeparator',key:'groupSeparator',className:l?"_570-":'',onClick:function(){return this._scrollToSeparator(c('ReactDOM').findDOMNode(this.refs.groupSeparator));}.bind(this)},i._("CONVERSACIONES DE GRUPO")),c('React').createElement(c('ChatSidebarGroupThreadsGroup.react'),{groups:this.props.groups,isDisconnected:this.state.isDisconnected,key:'group_threads_section',loadExtras:this.state.renderBelowFold})];},_renderFriendsSection:function(){var l=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),m=this.props.topUsers;if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)m=this.props.topUsers.filter(function(n){return c('PresencePrivacy').allows(n);});return [c('React').createElement(c('ChatSidebarUserGroup.react'),{key:c('ChatSidebarSections').ORDERED_LIST,ids:m,isDisconnected:this.state.isDisconnected,imageSize:l,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').ORDERED_LIST})];},render:function(){var l=c('PresencePrivacy').getOnlinePolicy()==c('PresencePrivacy').ONLINE_TO_WHITELIST&&c('PresencePrivacy').getVisibility()?this._renderOfflineSection():this._renderOnlineSection(),m=this._renderFriendsSection(),n=this._renderGroupsSection();return (c('React').createElement('div',null,m,n,l));},_bootloadChannelSubscription:function(){c('Bootloader').loadModules(["ChannelConnection"],function(l){this._subscriptions.addSubscriptions(l.subscribe([l.CONNECTED,l.RECONNECTING,l.SHUTDOWN,l.MUTE_WARNING,l.UNMUTE_WARNING],function(){var m=l.disconnected();if(m!==this.state.isDisconnected){if(m){c('ChatReliabilityInstrumentation').logCHANNEL_DISCONNECT();}else c('ChatReliabilityInstrumentation').logCHANNEL_CONNECT();this.setState({isDisconnected:m});}}.bind(this)));}.bind(this));}});f.exports=k;},null);
__d('ChatSortUsers',['ShortProfiles','TokenizeUtil'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(k){if(h[k])return h[k];var l=(c('ShortProfiles').getNow(k)||{}).name;if(l)return h[k]=c('TokenizeUtil').flatten(l);return '~';}var j={sortAlphabetical:function(k,l){var m=i(k),n=i(l);if(m!==n)return m<n?-1:1;return 0;}};f.exports=j;},null);
__d('PresenceOrderedList',['ChatSortUsers','immutable','InitialChatFriendsList','PresencePrivacy','PresenceStatus'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';this.$PresenceOrderedList1=this.$PresenceOrderedList2();}h.prototype.getSorted=function(i){'use strict';var j=[];this.$PresenceOrderedList1.forEach(function(k){var l=k[0],m=k[1];if(j.length>=i)return false;if(c('PresencePrivacy').getFriendVisibility(l)==c('PresencePrivacy').BLACKLISTED)return true;if(m==c('PresenceStatus').get(l))j.push(l);});return c('immutable').OrderedSet(j);};h.prototype.getAvailableSorted=function(i){'use strict';var j=c('immutable').Set(c('PresenceStatus').getOnlineIDs());if(i)j=j.subtract(i);return j.sort(c('ChatSortUsers').sortAlphabetical);};h.prototype.$PresenceOrderedList2=function(){'use strict';var i=c('InitialChatFriendsList').list||[];return i.map(function(j){var k=j.slice(0,-2),l=Number(j.slice(-1));return [k,l];});};f.exports=new h();},null);
__d('ChatOrderedList',['csx','Arbiter','ArbiterMixin','AvailableList','AvailableListConstants','CSS','ChatConfig','ChatHovercard','ChatOptions','ChatOrderedListHover','ChatSidebarConstants','ChatSidebarOrderedList.react','ChatVisibility','DOM','DataStore','Event','InitialChatFriendsList','JSLogger','Parent','PresenceOrderedList','PresencePrivacy','PresenceStatus','React','ReactDOM','createObjectFrom','debounceAcrossTransitions','mixin','shield'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=null;i=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function l(m,n){'use strict';j.constructor.call(this);this._isSidebar=m;this._root=n;this._isVisible=false;this._excludedIds={};this._numTopFriends=5;this._groups=[];this._hoverController=null;this._isHovering=false;this._orderedList=c('DOM').find(this._root,'.fbChatOrderedList');c('Event').listen(this._orderedList,'mouseover',function(){this._isHovering=true;}.bind(this));c('Event').listen(this._orderedList,'mouseout',function(){this._isHovering=false;this._render();}.bind(this));this._scrollableOrderedList=c('Parent').byClass(this._root,'scrollableOrderedList');this._scrollableArea=c('Parent').byClass(this._root,'scrollable');if(this._isSidebar)new (c('ChatHovercard'))(this);c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(o,p){p.chat_lists=p.chat_lists||{sorted_list:this.getSortedList(),available_list:c('PresenceOrderedList').getAvailableSorted(),excluded_list:this._excludedIds};}.bind(this));c('PresencePrivacy').subscribe('privacy-user-presence-changed',c('shield')(this._render,this));c('AvailableList').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,c('shield')(this._render,this));}l.prototype.getShowingUsers=function(){'use strict';return c('DOM').scry(this._root,"li._42fz,li._5a58").map(this.getUserForNode);};l.prototype.getUserForNode=function(m){'use strict';return c('DataStore').get(m,'id')||c('DataStore').get(m,'serverthreadid');};l.prototype.getHoverController=function(){'use strict';if(!this._hoverController)this._hoverController=new (c('ChatOrderedListHover'))(this);return this._hoverController;};l.prototype.getItemHeight=function(){'use strict';return c('ChatSidebarConstants').getItemHeight();};l.prototype.getRoot=function(){'use strict';return this._root;};l.prototype.getSortedList=function(){'use strict';return c('PresenceOrderedList').getSorted(this._numTopFriends);};l.prototype.hide=function(){'use strict';if(!this._isVisible)return;this._isVisible=false;c('CSS').hide(this._scrollableOrderedList||this._root);this.inform('hide');};l.prototype.setNumTopFriends=function(m,n){'use strict';if(c('ChatConfig').get('web_messenger_divebar_show_more_groups')){this.setNumTopFriendsMoreGroups(m,n);return;}var o=this._getGroups(),p=m-o.length;if(p>c('ChatConfig').get('min_top_friends'))m=p;m--;if(m!==this._numTopFriends||o.length!==this._groups.length){this._groups=o;this._numTopFriends=m;if(n){this._renderOrderedList();}else this._render();}};l.prototype.setNumTopFriendsMoreGroups=function(m,n){'use strict';var o=this._getGroups(),p=Math.max(Math.min(Math.floor(m/5),o.length),2),q=o.length>p?p:o.length,r=Math.max(m-q,1);if(r>1)r--;o=o.slice(0,q);if(r!==this._numTopFriends||o.length!==this._groups.length){this._numTopFriends=r;this._groups=o;if(n){this._renderOrderedList();}else this._render();}};l.prototype._renderOrderedList=function(){'use strict';if(!this._isVisible||this._isHovering)return;var m=this.getSortedList(),n=c('PresenceOrderedList').getAvailableSorted(m);c('ReactDOM').render(c('React').createElement(c('ChatSidebarOrderedList.react'),{availableUsers:n.toArray(),isSidebar:this._isSidebar,scrollContainer:this._scrollContainer,topUsers:m.toArray(),groups:this._groups}),this._orderedList);this.inform('render');};l.prototype._render=function(){'use strict';this._render=c('debounceAcrossTransitions')(this._renderOrderedList.bind(this),300);this._render();};l.prototype.show=function(){'use strict';if(this._isVisible)return;this._isVisible=true;c('CSS').show(this._scrollableOrderedList||this._root);this._render();this.inform('show');};l.prototype.isVisible=function(){'use strict';return this._isVisible;};l.prototype.setScrollContainer=function(m){'use strict';if(c('DOM').contains(m,this._root))this._scrollContainer=m;};l.prototype._getGroups=function(){'use strict';if(!c('ChatOptions').getSetting('hide_groups')){return c('InitialChatFriendsList').groups||[];}else return [];};f.exports=l;},null);