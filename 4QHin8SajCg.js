/*!CK:1685450447!*//*1453740903,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YTrAg"]); }

__d('MessengerForwardAttachmentDialog.react',['ix','cx','fbt','AsyncRequest','CurrentUser','Image.react','immutable','LayerFadeOnHide','MessengerComposeViewHeader.react','MessengerDialog.react','MessengerDialogBody.react','MessengerDialogButton.react','MessengerDialogCancelButton.react','MessengerDialogFooter.react','MessengerDialogHeader.react','MessengerDialogTitle.react','MessengerSpinner.react','React','XMessagingForwardAttachmentController','emptyFunction','fbglyph'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('React').createClass({displayName:'MessengerForwardAttachmentDialog',propTypes:{attachmentID:k.string.isRequired,onClose:k.func,shown:k.bool.isRequired,title:k.string.isRequired},getInitialState:function(){return {recipients:c('immutable').List(),sendError:null,sending:false,startingThreadingID:Date.now()};},render:function(){var m=j._("Enviar"),n;if(this.state.sending){n=c('React').createElement('div',null,c('React').createElement(c('MessengerSpinner.react'),null),c('React').createElement('span',{className:"_1e1n _3-99"},j._("Enviando")));}else if(this.state.sendError){var o=h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/caution-solid_16_bluegray-40.png");n=c('React').createElement('div',{className:"_1e1n"},c('React').createElement(c('Image.react'),{src:o}),c('React').createElement('span',{className:"_3-99"},this.state.sendError));}return (c('React').createElement(c('MessengerDialog.react'),{shown:this.props.shown,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},onToggle:this._handleToggle,width:560},c('React').createElement(c('MessengerDialogHeader.react'),null,c('React').createElement(c('MessengerDialogTitle.react'),null,this.props.title)),c('React').createElement(c('MessengerDialogBody.react'),null,c('React').createElement(c('MessengerComposeViewHeader.react'),{className:"_1e1o",onAddRecipient:this._handleAddRecipient,onRemoveRecipient:this._handleRemoveRecipient,onResize:c('emptyFunction'),recipients:this.state.recipients,viewer:c('CurrentUser').getID()})),c('React').createElement(c('MessengerDialogFooter.react'),{leftContent:n},c('React').createElement(c('MessengerDialogCancelButton.react'),{onClick:this.props.onClose}),c('React').createElement(c('MessengerDialogButton.react'),{action:'confirm',disabled:!this.state.recipients.size||this.state.sending,label:m,onClick:this._handleSubmit,type:'primary'}))));},_handleAddRecipient:function(m){this.setState({recipients:this.state.recipients.push(m)});},_handleRemoveRecipient:function(m){var n=this.state.recipients;this.setState({recipients:n['delete'](n.indexOf(m))});},_handleSubmit:function(){var m={},n=this.state.startingThreadingID;this.state.recipients.forEach(function(p){m[n++]=p.getUniqueID();});var o=c('XMessagingForwardAttachmentController').getURIBuilder().getURI();new (c('AsyncRequest'))(o).setMethod('POST').setHandler(this._handleSubmitResponse).setData({attachment_id:this.props.attachmentID,recipient_map:m}).send();this.setState({sending:true,sendError:null});},_handleSubmitResponse:function(m){if(m.payload.success){this.props.onClose&&this.props.onClose();this.setState({recipients:c('immutable').List(),sending:false,startingThreadID:Date.now()});return;}this.setState({sending:false,sendError:m.payload.error});},_handleToggle:function(m){if(!m)this.props.onClose&&this.props.onClose();}});f.exports=l;},null);