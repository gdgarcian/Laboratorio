/*!CK:1384047601!*//*1457320991,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3s7pc"]); }

__d('ChatCloseButton.react',['fbt','Link.react','ReactComponentWithPureRenderMixin','React','TrackingNodes','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'ChatCloseButton',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{onClick:i.func,onKeyUp:i.func,onMouseDown:i.func,active:i.bool},getDefaultProps:function(){return {active:false};},render:function(){var k=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.CLOSE_BUTTON),l=h._("Presiona Esc para cerrar"),m=h._("Cerrar pesta\u00f1a");return (c('React').createElement(c('Link.react'),{'aria-label':this.props.active?l:m,className:c('joinClasses')(this.props.className,'close','button'),'data-ft':k,'data-hover':'tooltip','data-tooltip-content':this.props.active?l:m,'data-tooltip-position':'above',onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onMouseDown:this.props.onMouseDown}));}});f.exports=j;},null);
__d('ChatTabPlaceholder.react',['cx','ChatCloseButton.react','ImmutableObject','Keys','MercuryThreadInfo','MercuryThreadTitle.react','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'ChatTabPlaceholder',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{isRaised:i.bool.isRequired,onClose:i.func.isRequired,onLower:i.func.isRequired,onRaise:i.func.isRequired,thread:i.instanceOf(c('ImmutableObject')),viewer:i.string.isRequired},render:function(){var k=this.props,l=k.isRaised,m=k.thread,n=k.viewer,o=m&&c('MercuryThreadInfo').isNewEmptyLocalThread(m);return (c('React').createElement('div',null,c('React').createElement('span',{className:"fbNubButton",onClick:this._handleNubClick}),l?c('React').createElement('div',{className:"fbNubFlyout fbDockChatTabFlyout _16bz"},c('React').createElement('div',{className:"fbNubFlyoutTitlebar titlebar",onMouseDown:this._handleTitlebarMouseDown},c('React').createElement(c('ChatCloseButton.react'),{className:"_2koq",onClick:this._handleCloseClick,onKeyUp:this._handleCloseKeyUp,onMouseDown:function(p){return p.stopPropagation();}}),m?c('React').createElement('div',{className:'titlebarLabel'},c('React').createElement('h4',{className:'titlebarTextWrapper'},c('React').createElement(c('MercuryThreadTitle.react'),{className:'titlebarText',isNewThread:o,thread:m,useAndSeparator:true,useShortName:!m.is_canonical,viewer:n}))):null),c('React').createElement('div',{className:"fbNubFlyoutBody"})):null));},_handleCloseClick:function(k){k.preventDefault();k.stopPropagation();this.props.onClose();},_handleCloseKeyUp:function(k){k.keyCode===c('Keys').RETURN&&this._handleCloseClick(k);},_handleNubClick:function(k){k.stopPropagation();this.props.onRaise();},_handleTitlebarMouseDown:function(k){k.stopPropagation();this.props.onLower();}});f.exports=j;},null);