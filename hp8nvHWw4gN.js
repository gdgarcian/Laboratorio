/*!CK:876053130!*//*1453754803,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pj81K"]); }

__d('ChatSidebarSheetChatReconnectMsg.react',['ChannelConstants','Link.react','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'ChatSidebarSheetChatReconnectMsg',mixins:[j],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (k.createElement('div',null,l._("No es posible conectar con el chat. Comprueba tu conexi\u00f3n a Internet.")));}else if(o>h.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (k.createElement('div',null,l._("No es posible conectar con el chat. {try-again-link}",[l.param('try-again-link',k.createElement(i,{className:'fbChatReconnectLink',onClick:this.props.onManuallyConnectClick},l._("Int\u00e9ntalo de nuevo")))])));}else if(o>1000){return (k.createElement('div',null,l._("No es posible conectar con el chat. Nuevo intento de conexi\u00f3n en {seconds} segundos...",[l.param('seconds',Math.floor(o/1000))])));}else return (k.createElement('div',null,l._("No es posible conectar con el chat. Volviendo a conectar...")));}});f.exports=n;},null);