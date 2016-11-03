/*!CK:4263925194!*//*1453754960,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["78IUM"]); }

__d('TabBarItem.react',['React','ReactDOM','Focus','Event','Keys','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=h.createClass({displayName:'TabBarItem',propTypes:{wrapper:o.func.isRequired,shouldWrapTab:o.bool,tabIndex:o.oneOf([-1,0]),selected:o.bool,focused:o.bool,hideFocusRing:o.bool,mockSpacebarClick:o.bool},getDefaultProps:function(){return {wrapper:h.createClass({displayName:'wrapper',render:function(){return h.createElement('li',this.props,this.props.children);}}),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};},render:function(){var q=this.props,r=q.selected,s=q.focused,t=q.hideFocusRing,u=q.shouldWrapTab,v="_45hc"+(r?' '+"_1hqh":''),w=s&&t?"_468f":'';if(u)return this._renderWrappedTabBarItem(v,w);return this._renderTabBarItem(n(v,w));},_renderWrappedTabBarItem:function(q,r){var s=this.props,t=s.className,u=s.href,v=s.ajaxify,w=s.tabIndex,x=s.rel,y=s.target,z=s.selected,aa=s.wrapper,ba=s.mockSpacebarClick;u=u||'#';var ca={};if(ba)ca.onKeyDown=this.onKeyDown;var da=h.createElement('a',{ref:'tab',ajaxify:v,href:u,role:'tab',rel:x,target:y,tabIndex:w,className:r,'aria-selected':z},this.props.children);return (h.createElement(aa,babelHelpers._extends({},this.props,{tabIndex:null,className:n(t,q),role:'presentation'}),h.cloneElement(da,ca)));},_renderTabBarItem:function(q){var r=this.props,s=r.className,t=r.href,u=r.selected,v=r.mockSpacebarClick;t=t||'#';var w={};if(v)w.onKeyDown=this.onKeyDown;var x=h.createElement('a',babelHelpers._extends({},this.props,{href:t,ref:'tab',role:'tab',className:n(s,q),'aria-selected':u}),this.props.children);return h.cloneElement(x,w);},componentDidMount:function(){this.focus();},componentDidUpdate:function(){this.focus();},focus:function(){if(this.props.focused)j.set(this.refs.tab);},onKeyDown:function(event){var q=k.getKeyCode(event);if(q===l.SPACE&&this.refs.tab){i.findDOMNode(this.refs.tab).click();k.prevent(event);}}});f.exports=p;},null);
__d('TabBar.react',['React','ReactDOM','ReactChildren','TabBarItem.react','Event','RTLKeys','BootloadedComponent.react','JSResource','cx','fbt','joinClasses','invariant','setTimeout','clearTimeout','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=h.PropTypes,x=q._("M\u00e1s"),y=h.createClass({displayName:'TabBarItemWrapper',statics:{getComponent:function(aa){return aa.component;}},render:function(){return this.props.component;}}),z=h.createClass({displayName:'TabBar',_blurTimeout:null,propTypes:{activeTabKey:w.string,alwaysShowActive:w.bool,defaultActiveTabKey:w.string,dropdownMenuClassName:w.string,maxTabsVisible:w.number.isRequired,moreLabel:w.string,onTabClick:w.func.isRequired,dropdownTabComponent:w.func.isRequired,onWidthCalculated:w.func.isRequired,shouldCalculateVisibleTabs:w.bool},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:k,maxTabsVisible:Infinity,moreLabel:x,onTabClick:v.thatReturnsTrue,onWidthCalculated:v,shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true};},setWidth:function(aa){i.findDOMNode(this).style.width=aa;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var aa=this.getTabs(),ba=aa.length,ca=this.getActiveTabIndex(),da=aa[ca],ea=this.getActiveTabIndex(true),fa,ga,ha;if(da)fa=da.key;if(this.state.shouldCalculateVisibleTabs){ga=aa.map((function(ra,sa){return this._wrapTab(ra,sa,fa,null,ea,false,false);}).bind(this));if(ba>2){var ia=this.props.dropdownTabComponent;ga.push(h.createElement(ia,{key:'_dropdown',ref:'more',className:"_45hd _2pik"},h.createElement('span',{className:"_1b0"},this.props.moreLabel)));}}else{var ja=this._groupTabsByVisibility();ga=ja.visibleTabs;ha=ja.extraTabs;var ka=this._isDropdownSelected(),la=this.state.visibleTabsCount,ma=this.state.focusedTabKey;ma=ma&&this.getFocusedTabIndex()===-1?z.MORE_TAB_KEY:ma;ga=ga.map((function(ra,sa){return this._wrapTab(ra,sa,fa,ma,ea,true,true);}).bind(this));ha=ha.map((function(ra,sa){return this._wrapTab(ra,sa,fa,null,ea,true,false);}).bind(this));if(ha.length){var na;if(la===0&&da)na=da;var oa=na&&na.props.children||this.props.moreLabel,pa='_dropdown',qa=h.createElement(n,{bootloadLoader:o('TabBarDropdownItem.react'),bootloadPlaceholder:h.createElement('div',null),menuClassName:this.props.dropdownMenuClassName,selected:ka,focused:ma===z.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,pa),onBlur:this.onBlur,key:pa,ref:'more',label:oa,tabComponent:this.props.dropdownTabComponent},ha);if(la===0){ga=qa;}else ga.push(qa);}}return (h.createElement('ul',babelHelpers._extends({},this.props,{className:r(this.props.className,"_43o4"),role:'tablist',onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),ga));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillUnmount:function(){u(this._blurTimeout);},componentWillReceiveProps:function(aa){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:aa.activeTabKey||this.state.activeTabKey});},shouldComponentUpdate:function(aa,ba){if(this.state.focusedTabKey&&!ba.focusedTabKey)return false;if(!this.state.focusedTabKey&&!ba.focusedTabKey&&this.state.previousFocusedTabKey&&!ba.previousFocusedTabKey)return false;return true;},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){this.props.onWidthCalculated(i.findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var aa=this.getTabs(),ba=aa.length,ca=Math.min(ba,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:ca,shouldCalculateVisibleTabs:false});return;}var da=[];for(var ea=0;ea<ba;ea++)da.push(i.findDOMNode(this.refs[ea]).offsetWidth);var fa=this.getActiveTabIndex();if(this.props.alwaysShowActive&&fa!==-1){aa.unshift(aa.splice(fa,1)[0]);da.unshift(da.splice(fa,1)[0]);}var ga=i.findDOMNode(this).offsetWidth;ca=0;var ha=0;for(ea=0;ea<ba;ea++){var ia=da[ea];if(ha+ia>ga){if(ca>0&&ba>2){var ja=i.findDOMNode(this.refs.more).offsetWidth;while(ca>0&&(ha+ja>ga||ba-ca<2)){ca--;ha-=da[ca];}}else ca=0;break;}ca++;ha+=ia;}this.setState({visibleTabsCount:Math.min(ca,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var aa=arguments.length<=0||arguments[0]===undefined?false:arguments[0],ba=this.state.activeTabKey,ca=[];if(aa){var da=this._groupTabsByVisibility(),ea=da.visibleTabs;ca=ea;}else ca=this.getTabs();return ca.findIndex(function(fa){return fa&&fa.key===ba;});},getFocusedTabIndex:function(){var aa=this.state.focusedTabKey||this.state.previousFocusedTabKey,ba=this._groupTabsByVisibility(),ca=ba.visibleTabs;return ca.findIndex(function(da){return da&&da.key===aa;});},getFocusedTab:function(){var aa=this.state.focusedTabKey,ba=this._groupTabsByVisibility(),ca=ba.visibleTabs,da=ca.findIndex(function(ea){return ea&&ea.key===aa;});return ca[da];},onClick:function(aa,event){var ba=this.props.onTabClick(aa,event);if(ba!==false&&this.isMounted())this.activateTab(aa);},onMouseDown:function(){this.setState({hideFocusRing:true});},onKeyDown:function(event){var aa=l.getKeyCode(event);switch(aa){case m.UP:case m.getRight():case m.DOWN:case m.getLeft():var ba,ca,da,ea=this._groupTabsByVisibility(),fa=ea.visibleTabs,ga=aa===m.UP||aa===m.getLeft(),ha=ga?-1:1,ia=ga?0:fa.length-1,ja=this.getFocusedTabIndex();if(ja===-1&&ha===-1)ja=fa.length;if(ja===-1){da=null;}else if(ja===ia&&ha===1){da=z.MORE_TAB_KEY;}else{ba=ga?Math.max:Math.min;ca=ba(ja+ha,ia);da=fa[ca].key;}if(da)this.setState({focusedTabKey:da,hideFocusRing:false});break;case m.RETURN:var ka=this.getFocusedTab();if(ka){var la=ka.key,ma=this.props.onTabClick(la,event);if(ma!==false&&this.isMounted())this.activateTab(la);}break;}},onKeyUp:function(event){if(l.getKeyCode(event)===m.TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false});},onFocus:function(aa,event){u(this._blurTimeout);if(aa!==this.state.focusedTabKey){this.setState({focusedTabKey:aa,previousFocusedTabKey:null});event.preventDefault();event.stopPropagation();}},onBlur:function(){this.setState({previousFocusedTabKey:this.state.focusedTabKey,focusedTabKey:null});this._blurTimeout=t((function(){this.setState({previousFocusedTabKey:null});}).bind(this),z.BLUR_TIMEOUT);},_wrapTab:function(aa,ba,ca,da,ea,fa,ga){!(aa.key!==z.MORE_TAB_KEY)?s(0):undefined;var ha=ca===aa.key,ia=da===aa.key,ja={selected:ha,focused:ia,tabIndex:ha||ea===-1&&ba===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(fa){ja.onClick=this.onClick.bind(this,aa.key);ja.onMouseDown=this.onMouseDown;}else ja.mockSpacebarClick=false;if(ga){ja.onFocus=this.onFocus.bind(this,aa.key);ja.onBlur=this.onBlur;}aa=h.cloneElement(aa,ja);return (h.createElement(y,{key:aa.key,component:aa,ref:ba}));},activateTab:function(aa){if(aa)this.setState({activeTabKey:aa,focusedTabKey:aa,shouldCalculateVisibleTabs:true});},getTabs:function(){var aa=[];j.forEach(this.props.children,function(ba){if(ba)aa.push(ba);});return aa;},_groupTabsByVisibility:function(){var aa=this.state.visibleTabsCount,ba=this.getTabs(),ca=this.getActiveTabIndex(),da,ea,fa;if(!this.props.alwaysShowActive||ca<aa||aa===0){fa=ba.slice(aa);ea=ba.slice(0,aa);}else{da=ba.splice(ca,1)[0];var ga=aa>0?aa-1:0;fa=ba.slice(ga);ea=ba.slice(0,ga);ea.push(da);}return {visibleTabs:ea,extraTabs:fa};},_isDropdownSelected:function(){var aa=this.state.visibleTabsCount,ba=this.getActiveTabIndex(),ca=!this.props.alwaysShowActive&&ba>=aa||aa===0&&ba>-1;return ca;}});z.MORE_TAB_KEY='_moreTab';z.BLUR_TIMEOUT=120;z.Tab=k;f.exports=z;},null);
__d('XUIPageNavigationItem.react',['React','TabBarItem.react','cx','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'XUIPageNavigationItem',propTypes:{selected:m.bool},getDefaultProps:function(){return {selected:false};},render:function(){var o="_5vwz"+(this.props.selected?' '+"_5vwy":'');return (h.createElement(i,babelHelpers._extends({},this.props,{className:l(this.props.className,o)}),h.createElement('div',{className:"_4jq5"},this.props.children),h.createElement('span',{className:"_13xf"})));}});f.exports=n;},null);
__d('XUIPageNavigationGroup.react',['React','TabBar.react','XUIPageNavigationItem.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'XUIPageNavigationGroup',propTypes:{moreLabel:k.string,maxTabsVisible:function(m,n,o){var p=m[n];if(p!=null&&!(typeof p==='number'&&p>=0))return new Error('Invalid `'+n+'` supplied to `'+o+'`, '+'expected positive integer.');},width:k.string},getDefaultProps:function(){return {maxTabsVisible:Infinity};},componentDidUpdate:function(){this.refs.bar.setWidth(this.props.width);},componentDidMount:function(){this.refs.bar.setWidth(this.props.width);},render:function(){return h.createElement(i,babelHelpers._extends({},this.props,{ref:'bar'}),this.props.children);}});l.Item=j;f.exports=l;},null);
__d('XUIPageNavigation.react',['Arbiter','CSS','DOMQuery','Event','LeftRight.react','React','ReactDOM','ReactChildren','ReactComponentWithPureRenderMixin','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','XUIPageNavigationGroup.react','csx','cx','invariant','joinClasses','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa=m.PropTypes,ba=15,ca='bluebar',da='caret',ea=m.createClass({displayName:'XUIPageNavigation',mixins:[p],propTypes:{selectedIndicator:aa.oneOf([da,ca]),caretColor:aa.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),size:aa.oneOf(['small','medium']),scrollThreshold:aa.number},getDefaultProps:function(){return {selectedIndicator:ca,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0};},getInitialState:function(){return {activeTabKey:undefined,leftWidth:null};},componentDidMount:function(){this._subscriptions=new q();this.resizeNavbarGroups();this._listenForNavbarResize();var fa="^.fixed_elem._5vx1";this.wrapper=j.scry(n.findDOMNode(this),fa)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(r.subscribe('change',(function(){if(r.isTiny()){this._bound.remove();}else this._setViewportBounds();}).bind(this)));}if(this.wrapper||j.scry(n.findDOMNode(this),"^._k").length)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(fa,event){if(this.props.onTabClick){var ga=this.props.onTabClick(fa,event);if(!ga)return ga;}if(!k.$E(event).isDefaultRequested())this.setState({activeTabKey:fa});},onWidthCalculated:function(fa,ga){this[fa?'_rightWidth':'_leftWidth']=ga;},render:function(){var fa=this.props.selectedIndicator,ga=this.props.size,ha="_5vx2"+(ga==='small'?' '+"_5vx3":'')+(ga==='medium'?' '+"_5vx4":'')+(fa===da?' '+"_5vx5":'')+(fa===ca?' '+"_5vx6":''),ia=null;if(fa===da){var ja=this.props.caretColor;ia=(ja==='bg-blue'?"_2d2c":'')+(ja==='fbui-desktop-wash'?' '+"_4_np":'')+(ja==='fbui-desktop-background-light'?' '+"_4_nr":'')+(ja==='fbui-red'?' '+"_4_ns":'')+(ja==='fbui-green'?' '+"_4_nv":'')+(ja==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(ja==='white'?' '+"_5-f":'');}var ka=y(ha,ia,this.props.className),la=[],ma=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;o.forEach(this.props.children,(function(na,oa){var pa={onTabClick:this.onTabClick,activeTabKey:ma,onWidthCalculated:this.onWidthCalculated.bind(this,oa),ref:oa?'right':'left',key:oa};if(oa===0)pa.width=this.state.leftWidth;la.push(m.cloneElement(na,pa));}).bind(this));!(la.length===1||la.length===2)?x(0):undefined;return (m.createElement('div',{className:ka},m.createElement(l,{className:"_5vx7"},la)));},_setViewportBounds:function(){var fa=this.wrapper.offsetHeight,ga=t.getTop();this._bound=t.addTop(ga+fa);h.subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(k.listen(window,'resize',z(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(k.listen(window,'scroll',(function(){var fa=s.getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===fa)return;this._hasDropshadow=fa;i.conditionClass(n.findDOMNode(this),"_51j8",fa);}).bind(this)));},resizeNavbarGroups:function(){if(!this.refs.left)return;var fa=n.findDOMNode(this).clientWidth;if(isNaN(fa))return;if(!isNaN(this._leftWidth)&&this.refs.right){var ga;ga=fa-this._leftWidth-ba;if(this._leftWidth<ga)ga=this._leftWidth-ba;this.setState({rightWidth:ga+'px'});}if(!isNaN(this._rightWidth)){var ha;ha=fa-this._rightWidth-ba;if(ha<this._rightWidth)ha=this._rightWidth+ba;this.setState({leftWidth:ha+'px'});}else if(!this.refs.right)this.setState({leftWidth:fa+'px'});}});ea.Group=u;ea.Item=u.Item;ea.Indicator={BlueBar:ca,Caret:da};f.exports=ea;},null);
__d('XUIPageNavigationShim',['DOMContainer.react','React','isNode'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=(function(){var n=0;return function(){return 'XUIPageNavigationShim-'+n++;};})();function l(n){var o;if(n.children){o=n.children.map(function(q){if(typeof q==='object'&&typeof q.ctor==='function'){return l(q);}else if(j(q)){return i.createElement(h,{key:k()},q);}else return q;});if(o.length===1)o=o[0];}var p=n.ctor;return (i.createElement(p,babelHelpers._extends({key:k()},n.props),o));}var m=i.createClass({displayName:'XUIPageNavigationShim',render:function(){return l(this.props);}});f.exports=m;},null);