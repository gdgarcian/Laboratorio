/*!CK:2508179698!*//*1456242643,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/Mh7E"]); }

__d("XMessagingPhotoDownloadController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/photo\/",{photo_id:{type:"String",required:true}});},null);
__d('SpotlightMessagesViewer',['fbt','ActorURI','ArbiterMixin','CurrentEnvironment','MessagingForwardAttachmentDialog.react','MessagingForwardingButtonNUX.react','MessengerForwardAttachmentDialog.react','PageTransitionsRegistrar','React','ReactLayeredComponentMixin','SpotlightViewer','SpotlightViewerAutoResize','SpotlightViewerBehaviorsMixin','SpotlightViewerBottomBar','SpotlightViewerBottomBarGroup','SpotlightViewerBottomBarLink','SpotlightViewerClose','SpotlightViewerCoreMixin','SpotlightViewerDimensionMixin','SpotlightViewerPagers','SpotlightViewerPageWithKeys','SpotlightViewerThumbnailMixin','SpotlightViewport','SubscriptionsHandler','XMessagingPhotoDownloadController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'SpotlightMessagesViewer',mixins:[c('ArbiterMixin'),c('ReactLayeredComponentMixin'),c('SpotlightViewerBehaviorsMixin'),c('SpotlightViewerCoreMixin'),c('SpotlightViewerThumbnailMixin'),c('SpotlightViewerDimensionMixin')],behaviors:[c('SpotlightViewerPageWithKeys'),c('SpotlightViewerAutoResize')],componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();this._subscriptions=null;},getViewerID:function(){return this.props.setid;},getInitialState:function(){this._subscriptions=new (c('SubscriptionsHandler'))();return {photoData:this._getInitialPhotoData(),open:true,showForward:false};},_enableSubscriptions:function(){this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe('photo_fetch',function(){return this.setState({photoData:null});}.bind(this)));},_showForwardDialog:function(){this.setState({showForward:true});this.refs.forwardNUX.close();},_hideForwardDialog:function(){this.setState({showForward:false});},renderLayers:function(){if(this.props.disableForward)return {};var j=h._("Reenviar en mensaje separados"),k=c('CurrentEnvironment').messengerdotcom?c('MessengerForwardAttachmentDialog.react'):c('MessagingForwardAttachmentDialog.react');return {forwardDialog:c('React').createElement(k,{attachmentID:String(this.state.photoData.id),onClose:this._hideForwardDialog,shown:this.state.showForward,title:j}),forwardButtonNUX:c('React').createElement(c('MessagingForwardingButtonNUX.react'),{contextRef:function(){return this.refs.forwardButton;}.bind(this),ref:'forwardNUX'},h._("Send this image to other people in separate messages."))};},render:function(){var j=this.getMedia(),k=this.props.snapToPhoto?this.getImageDimensions():this.getStageDimensions(),l=this.props.useloadingindicator&&!this.state.photoData;c('PageTransitionsRegistrar').registerCompletionCallback(function(){if(this.state.open)this.close();return true;}.bind(this));return (c('React').createElement(c('SpotlightViewer'),{rootClassName:this.props.rootClassName,open:this.state.open,onHide:this.close},c('React').createElement(c('SpotlightViewport'),{active:false,onClick:this._onClickViewport,stageDimensions:k,media:j,showLoadingIndicator:l},c('React').createElement(c('SpotlightViewerClose'),{onClick:this.close}),this.props.disablepaging?null:c('React').createElement(c('SpotlightViewerPagers'),null),this._renderBottomBar())));},_renderBottomBar:function(){var j;if(!this.props.disableForward)j=c('React').createElement(c('SpotlightViewerBottomBarLink'),{onClick:this._showForwardDialog,ref:'forwardButton'},h._("Reenviar"));var k=c('XMessagingPhotoDownloadController').getURIBuilder().setString('photo_id',String(this.state.photoData.id)).getURI();if(this.props.actorid)k=c('ActorURI').create(k,this.props.actorid);return (c('React').createElement(c('SpotlightViewerBottomBar'),null,c('React').createElement(c('SpotlightViewerBottomBarGroup'),null),c('React').createElement(c('SpotlightViewerBottomBarGroup'),null,j,c('React').createElement(c('SpotlightViewerBottomBarLink'),{rel:'async',ajaxify:k},h._("Descargar")))));}});f.exports=i;},null);