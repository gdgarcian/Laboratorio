/*!CK:3043555475!*//*1453754774,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["40Ty\/"]); }

__d('FBRTCStruct',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j,k,l){var m,n;if(typeof j=='string'||j instanceof String){n=j;m=j;}else for(var o in j)if(j.hasOwnProperty(o))if(o==='index'){l=j[o];}else{n=o;m=j[o];}k[n]=l;k.strNames[l]=m;};function i(j){'use strict';this.strNames=[];for(var k=0;k<j.length;k++)h(j[k],this,k);}f.exports=i;},null);
__d('FBRTCConstants',['FBRTCStruct','keyMirror'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={OFFER:'offer',ANSWER:'answer',ICE_CANDIDATE:'ice_candidate',OK:'ok',PING:'ping',HANGUP:'hang_up',OTHER_DISMISS:'other_dismiss',MSG_ACK:'msg_ack',PRANSWER:'pranswer',ICERESTART_OFFER:'icerestart_offer',ICERESTART_ANSWER:'icerestart_answer',PCRESTART_OFFER:'pcrestart_offer',PCRESTART_ANSWER:'pcrestart_answer',SDP_UPDATE:'sdp_update',OFFER_ACK:'offer_ack',OFFER_NACK:'offer_nack',ANSWER_ACK:'answer_ack',SET_VIDEO:'set_video',VIDEO_REQUEST:'video_request',ACK:'ack'},k={AUDIO_ONLY:'audio_only',AUDIO_VIDEO:'audio_video',SCREEN_CONTENT:'screen'},l=i({NO_VIDEO:null,LQ_VIDEO:null,SD_VIDEO:null,HD_VIDEO:null,CUSTOM_VIDEO:null}),m=new h([{IGNORE_CALL:'IgnoreCall'},{HANGUP_CALL:'HangupCall'},{IN_ANOTHER_CALL:'InAnotherCall'},{ACCEPT_AFTER_HANGUP:'CallEndAcceptAfterHangUp'},{NO_ANSWER_TIMEOUT:'NoAnswerTimeout'},{INCOMING_TIMEOUT:'IncomingTimeout'},{OTHER_INSTANCE_HANDLED:'OtherInstanceHandled'},{SIGNALING_MESSAGE_FAILED:'SignalingMessageFailed'},{CONNECTION_DROPPED:'ConnectionDropped'},{CLIENT_INTERRUPTED:'ClientInterrupted'},{WEBRTC_ERROR:'WebRTCError'},{CLIENT_ERROR:'ClientError'},{NO_PERMISSION:'NoPermission'},{OTHER_NOT_CAPABLE:'OtherNotCapable'},{NO_UI_ERROR:'NoUIShown'},{UNSUPPORTED_VERSION:'VersionUnsupported'},{CALLER_NOT_VISIBLE:'CallerNotVisible'},{CARRIER_BLOCKED:'CarrierBlocked'},{OTHER_CARRIER_BLOCKED:'OtherCarrierBlocked'}]),n={TOGGLE_SELF_VIEW:5,SUBMIT_STAR_RATING:6,SUBMIT_FEEDBACK:7,START_CALL:9,OPEN_SCREEN_IN_NEW:10},o={ONE_HOUR:'1hour',UNTIL_EIGHT_AM:'8am',ALWAYS:'always'},p=i({VIDEO:null,AUDIO:null,SCREEN_SHARE:null}),q={PayloadType:j,StreamType:k,VideoQuality:l,CallEndReason:m,UIEventType:n,CallBlockingConstants:o,IncomingCallDialogTypes:p,endCallReasonFromString:function(r){return m.strNames.indexOf(r);},callEndReasonString:function(r){if(r<0||r>m.strNames.length)return 'Unknown';return m.strNames[r];},fullCallEndReasonString:function(r,s){return this.callEndReasonString(r)+'_'+(s?'remote':'local');}};f.exports=q;},null);
__d('FBRTCIceStatsParser',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;i.getInstance=function(){'use strict';if(!h)h=new i();return h;};function i(){'use strict';}i.prototype.extractIceInfo=function(j){'use strict';var k=[],l=j.split("\r\n");for(var m=0;m<l.length;m++){var n=l[m];if(this.$FBRTCIceStatsParser1(n))k.push({gen:this.$FBRTCIceStatsParser2(n),type:this.$FBRTCIceStatsParser3(n)});}return k;};i.prototype.$FBRTCIceStatsParser1=function(j){'use strict';return j.indexOf('candidate:')>-1;};i.prototype.$FBRTCIceStatsParser2=function(j){'use strict';var k=0,l=j.match(/generation (\d+)/);if(l)k=parseInt(l[1],10);return k;};i.prototype.$FBRTCIceStatsParser3=function(j){'use strict';var k=j.match(/typ (host|relay|srflx|prflx)/);if(k){return k[1];}else return 'unknown';};f.exports=i;},null);
__d('FBRTCCallSummary',['FBRTCConstants','FBRTCIceStatsParser','FBRTCLogger','UserAgentData','performanceNow'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=5*60*1000,n={CALL_STARTED:'started',POPUP_OPENED:'opened',SENT_OFFER:'s_o',RECV_OFFER:'r_o',SENT_OFFER_ACK:'s_oack',RECV_OFFER_ACK:'r_oack',SENT_RETRIED_OFFER:'s_o2',RECV_RETRIED_OFFER:'r_o2',SENT_RETRIED_OFFER_ACK:'s_oack2',RECV_RETRIED_OFFER_ACK:'r_oack2',SENT_PRANSWER:'s_pr',RECV_PRANSWER:'r_pr',NETWORK_READY:'network_ready',SENT_ANSWER:'s_a',RECV_ANSWER:'r_a',SENT_ANSWER_ACK:'s_aack',RECV_ANSWER_ACK:'r_aack',SENT_RETRIED_ANSWER:'s_a2',RECV_RETRIED_ANSWER:'r_a2',SENT_RETRIED_ANSWER_ACK:'s_aack2',RECV_RETRIED_ANSWER_ACK:'r_aack2',SENT_OK:'s_ok',RECV_OK:'r_ok',CALL_CONNECTED:'connected',CALL_ENDED:'ended'};o.CURRENT_SUMMARY_VERSION=19;function o(p){'use strict';this.peerID=p.peerID;this.callID=p.callID;this.$FBRTCCallSummary1=p.isCaller;this.$FBRTCCallSummary2=new Date().valueOf();this.$FBRTCCallSummary3=null;this.$FBRTCCallSummary4={};this.$FBRTCCallSummary5=null;this.$FBRTCCallSummary6=null;this.$FBRTCCallSummary7=null;this.$FBRTCCallSummary8=null;this.$FBRTCCallSummary9=null;this.$FBRTCCallSummary10=null;this.$FBRTCCallSummary11={};this.$FBRTCCallSummary12={};this.$FBRTCCallSummary13={};this.$FBRTCCallSummary14={};this.$FBRTCCallSummary15={};this.$FBRTCCallSummary16={};this.$FBRTCCallSummary17=l();this.$FBRTCCallSummary18=0;this.$FBRTCCallSummary19={};this.$FBRTCCallSummary20=this.$FBRTCCallSummary17;this.$FBRTCCallSummary21=0;this.$FBRTCCallSummary22={};this.addExtraInfo(j.Key.DEVICE_INFO,this.$FBRTCCallSummary23());this.$FBRTCCallSummary24();this.$FBRTCCallSummary25=i.getInstance();this.$FBRTCCallSummary26=j.getInstance();}o.prototype.toJsonString=function(){'use strict';this.$FBRTCCallSummary9=new Date().valueOf();return JSON.stringify({version:o.CURRENT_SUMMARY_VERSION,peerID:this.peerID,callID:this.callID,isCaller:this.$FBRTCCallSummary1,callType:this.$FBRTCCallSummary27,localVideoDuration:this.$FBRTCCallSummary28,remoteVideoDuration:this.$FBRTCCallSummary29,startTime:this.$FBRTCCallSummary2,trigger:this.$FBRTCCallSummary3,signalingTime:this.$FBRTCCallSummary4,endCallReason:this.$FBRTCCallSummary5,endCallSubreason:this.$FBRTCCallSummary6,isRemoteEnded:this.$FBRTCCallSummary7,lastUpdatedTime:this.$FBRTCCallSummary8,lastSerializedTime:this.$FBRTCCallSummary9,unsetOnRetrieve:this.$FBRTCCallSummary10,openCount:this.$FBRTCCallSummary21,extraInfo:this.$FBRTCCallSummary22,pcStats:this.$FBRTCCallSummary11,captureStats:this.$FBRTCCallSummary12,gen0IceSentCount:this.$FBRTCCallSummary13,gen0IceReceivedCount:this.$FBRTCCallSummary14,iceSentCount:this.$FBRTCCallSummary15,iceReceivedCount:this.$FBRTCCallSummary16,newSignalingTime:this.$FBRTCCallSummary19,accumulatedCallTime:this.$FBRTCCallSummary30()});};o.fromJsonString=function(p){'use strict';var q;try{q=JSON.parse(p);}catch(r){return null;}if(q.version!==o.CURRENT_SUMMARY_VERSION)return null;if(!q.hasOwnProperty('peerID')||!q.hasOwnProperty('callID')||!q.hasOwnProperty('isCaller')||!q.hasOwnProperty('startTime')||!q.hasOwnProperty('trigger')||!q.hasOwnProperty('signalingTime')||!q.hasOwnProperty('endCallReason')||!q.hasOwnProperty('isRemoteEnded')||!q.hasOwnProperty('lastUpdatedTime')||!q.hasOwnProperty('lastSerializedTime'))return null;var s=new o({peerID:q.peerID,callID:q.callID,isCaller:q.isCaller});s.$FBRTCCallSummary2=q.startTime;s.$FBRTCCallSummary3=q.trigger;s.$FBRTCCallSummary4=q.signalingTime;s.$FBRTCCallSummary5=q.endCallReason;s.$FBRTCCallSummary6=q.endCallSubreason;s.$FBRTCCallSummary7=q.isRemoteEnded;s.$FBRTCCallSummary8=q.lastUpdatedTime;s.$FBRTCCallSummary9=q.lastSerializedTime;if(q.callType)s.$FBRTCCallSummary27=q.callType;if(q.localVideoDuration)s.$FBRTCCallSummary28=q.localVideoDuration;if(q.remoteVideoDuration)s.$FBRTCCallSummary29=q.remoteVideoDuration;if(q.unsetOnRetrieve)s.$FBRTCCallSummary10=q.unsetOnRetrieve;if(q.openCount)s.$FBRTCCallSummary21=q.openCount;if(q.extraInfo)s.$FBRTCCallSummary22=q.extraInfo;if(q.pcStats)s.$FBRTCCallSummary11=q.pcStats;if(q.captureStats)s.$FBRTCCallSummary12=q.captureStats;if(q.gen0IceSentCount)s.$FBRTCCallSummary13=q.gen0IceSentCount;if(q.gen0IceReceivedCount)s.$FBRTCCallSummary14=q.gen0IceReceivedCount;if(q.iceSentCount)s.$FBRTCCallSummary15=q.iceSentCount;if(q.iceReceivedCount)s.$FBRTCCallSummary16=q.iceReceivedCount;if(q.newSignalingTime)s.$FBRTCCallSummary19=q.newSignalingTime;if(q.accumulatedCallTime)s.$FBRTCCallSummary18=q.accumulatedCallTime;return s;};o.restoreOrInitialize=function(p,q,r,s,t){'use strict';var u=p.retrieveCallSummary(q,r);if(!u){u=new o({peerID:q,callID:r,isCaller:s});if(t){u.onFullMessageReceived({msg:t});u.onOfferAckSent(t);}else u.onCallStarted(j.Trigger.UNKNOWN);j.getInstance().logError(q,r,'Missing call summary from storage');}else if(u.$FBRTCCallSummary10){u.$FBRTCCallSummary5=null;u.$FBRTCCallSummary6=null;u.$FBRTCCallSummary7=null;delete u.$FBRTCCallSummary4[n.CALL_ENDED];delete u.$FBRTCCallSummary19[n.CALL_ENDED];u.$FBRTCCallSummary10=null;}return u;};o.logSavedSummaries=function(p){'use strict';var q=p.getLoggableSummaries(),r=q.length;if(r<=0)return;var s=j.getInstance(),t=[];for(var u=0;u<r;u++){var v=q[u];s.logEndCallSummary(v);t.push({peerID:v.peerID,callID:v.callID});}p.removeCallSummaries(t);s.logToConsole('Logged pending summaries: '+r);};o.prototype.save=function(p){'use strict';var q=l(),r=q-this.$FBRTCCallSummary20;if(r>m){this.$FBRTCCallSummary26.logInfo(this.peerID,this.callID,'Summary too old: '+r);return;}p.storeCallSummary(this.peerID,this.callID,this);this.$FBRTCCallSummary20=q;};o.prototype.getLastUpdatedTime=function(){'use strict';return this.$FBRTCCallSummary8;};o.prototype.setLastUpdatedTime=function(p){'use strict';this.$FBRTCCallSummary8=p;};o.prototype.getExtraInfo=function(){'use strict';return this.$FBRTCCallSummary22;};o.prototype.addExtraInfo=function(p,q){'use strict';this.$FBRTCCallSummary22[p]=q;this.$FBRTCCallSummary24();};o.prototype.onCallStarted=function(p){'use strict';this.$FBRTCCallSummary3=p;this.$FBRTCCallSummary31(n.CALL_STARTED);this.$FBRTCCallSummary24();};o.prototype.onPopupOpened=function(){'use strict';this.$FBRTCCallSummary31(n.POPUP_OPENED);this.$FBRTCCallSummary21++;this.$FBRTCCallSummary24();};o.prototype.setPcStats=function(p){'use strict';this.$FBRTCCallSummary11=p;this.$FBRTCCallSummary24();};o.prototype.setVideoCaptureStats=function(p,q){'use strict';this.$FBRTCCallSummary12={w:p,h:q};this.$FBRTCCallSummary24();};o.prototype.setCallType=function(p){'use strict';this.$FBRTCCallSummary27=p;this.$FBRTCCallSummary24();};o.prototype.setVideoDurations=function(p,q){'use strict';this.$FBRTCCallSummary28=p;this.$FBRTCCallSummary29=q;this.$FBRTCCallSummary24();};o.prototype.onOfferAckSent=function(p){'use strict';this.onMessageSent({type:h.PayloadType.OFFER_ACK,flag:p.flag});};o.prototype.onMessageSent=function(p){'use strict';var q=p.flag===1;switch(p.type){case h.PayloadType.OFFER:this.$FBRTCCallSummary32(q,n.SENT_OFFER,n.SENT_RETRIED_OFFER);this.$FBRTCCallSummary33(p,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;case h.PayloadType.ANSWER:this.$FBRTCCallSummary32(q,n.SENT_ANSWER,n.SENT_RETRIED_ANSWER);this.$FBRTCCallSummary33(p,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;case h.PayloadType.OK:this.$FBRTCCallSummary31(n.SENT_OK);break;case h.PayloadType.PRANSWER:this.$FBRTCCallSummary31(n.SENT_PRANSWER);break;case h.PayloadType.OFFER_ACK:this.$FBRTCCallSummary32(q,n.SENT_OFFER_ACK,n.SENT_RETRIED_OFFER_ACK);break;case h.PayloadType.ANSWER_ACK:this.$FBRTCCallSummary32(q,n.SENT_ANSWER_ACK,n.SENT_RETRIED_ANSWER_ACK);break;case h.PayloadType.ICE_CANDIDATE:this.$FBRTCCallSummary33(p,this.$FBRTCCallSummary13,this.$FBRTCCallSummary15);break;default:}this.$FBRTCCallSummary24();};o.prototype.$FBRTCCallSummary33=function(p,q,r){'use strict';var s=null,t=null,u=this.$FBRTCCallSummary25.extractIceInfo(p.sdp);for(var v=0;v<u.length;v++){s=u[v].gen;t=u[v].type;if(s===0)this.$FBRTCCallSummary34(q,t);this.$FBRTCCallSummary34(r,t);}};o.prototype.$FBRTCCallSummary34=function(p,q){'use strict';if(!p[q]){p[q]=1;}else p[q]=p[q]+1;};o.prototype.$FBRTCCallSummary35=function(p){'use strict';if(p.isFromMobile())this.addExtraInfo(j.Key.PEER_IS_MOBILE,'1');};o.prototype.onFullMessageReceived=function(p){'use strict';var q=p.msg,r=q.flag===1;switch(q.type){case h.PayloadType.OFFER:this.$FBRTCCallSummary35(p);this.$FBRTCCallSummary32(r,n.RECV_OFFER,n.RECV_RETRIED_OFFER);this.$FBRTCCallSummary33(q,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;case h.PayloadType.ANSWER:this.$FBRTCCallSummary35(p);this.$FBRTCCallSummary32(r,n.RECV_ANSWER,n.RECV_RETRIED_ANSWER);this.$FBRTCCallSummary33(q,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;case h.PayloadType.OK:this.$FBRTCCallSummary31(n.RECV_OK);break;case h.PayloadType.PRANSWER:this.$FBRTCCallSummary31(n.RECV_PRANSWER);break;case h.PayloadType.OFFER_ACK:this.$FBRTCCallSummary32(r,n.RECV_OFFER_ACK,n.RECV_RETRIED_OFFER_ACK);break;case h.PayloadType.ANSWER_ACK:this.$FBRTCCallSummary32(r,n.RECV_ANSWER_ACK,n.RECV_RETRIED_ANSWER_ACK);break;case h.PayloadType.ICE_CANDIDATE:this.$FBRTCCallSummary33(q,this.$FBRTCCallSummary14,this.$FBRTCCallSummary16);break;default:}this.$FBRTCCallSummary24();};o.prototype.onMsgAckReceived=function(p,q){'use strict';var r=p.msg.flag===1;if(q){this.$FBRTCCallSummary32(r,n.RECV_OFFER_ACK,n.RECV_RETRIED_OFFER_ACK);}else this.$FBRTCCallSummary32(r,n.RECV_ANSWER_ACK,n.RECV_RETRIED_ANSWER_ACK);};o.prototype.onCallConnected=function(){'use strict';this.$FBRTCCallSummary31(n.NETWORK_READY);this.$FBRTCCallSummary31(n.CALL_CONNECTED);this.$FBRTCCallSummary24();};o.prototype.onCallEnded=function(p,q,r,s){'use strict';this.$FBRTCCallSummary10=r;this.$FBRTCCallSummary5=p;this.$FBRTCCallSummary6=s;this.$FBRTCCallSummary7=q;this.$FBRTCCallSummary31(n.CALL_ENDED);this.$FBRTCCallSummary24();};o.prototype.toString=function(){'use strict';var p={};p.core_metrics=this.$FBRTCCallSummary36();p.time_series=null;return JSON.stringify(p);};o.prototype.$FBRTCCallSummary36=function(){'use strict';var p={};p.ver=o.CURRENT_SUMMARY_VERSION;p.caller=this.$FBRTCCallSummary1;p.call_type=this.$FBRTCCallSummary27;p.conn=this.$FBRTCCallSummary37();p.peer_id=this.peerID;p.has_video=true;p.open_count=this.$FBRTCCallSummary21;p.signaling=this.$FBRTCCallSummary38();p.sender=this.$FBRTCCallSummary39();p.receiver=this.$FBRTCCallSummary40();p.end=this.$FBRTCCallSummary41();p.video=this.$FBRTCCallSummary42();return p;};o.prototype.$FBRTCCallSummary37=function(){'use strict';var p={dtls:1};if(this.$FBRTCCallSummary11.sender&&this.$FBRTCCallSummary11.sender.rtt)p.rtt=this.$FBRTCCallSummary11.sender.rtt;return p;};o.prototype.$FBRTCCallSummary38=function(){'use strict';var p={};if(this.$FBRTCCallSummary3)p.trigger=this.$FBRTCCallSummary3;p.start_time=this.$FBRTCCallSummary2;p.time_from_start=this.$FBRTCCallSummary4;var q=this.$FBRTCCallSummary4[n.CALL_CONNECTED],r=this.$FBRTCCallSummary4[n.CALL_ENDED];if(q){if(!r)if(this.$FBRTCCallSummary9){r=this.$FBRTCCallSummary9-this.$FBRTCCallSummary2;}else r=this.$FBRTCCallSummary43();var s=r-q;if(s>0)p.duration=s;}p.new_time_from_start=this.$FBRTCCallSummary19;q=this.$FBRTCCallSummary19[n.CALL_CONNECTED];r=this.$FBRTCCallSummary19[n.CALL_ENDED];if(q){if(!r)if(this.$FBRTCCallSummary18>0){r=this.$FBRTCCallSummary18;}else r=this.$FBRTCCallSummary30();s=r-q;if(s>0)p.new_duration=s;}return p;};o.prototype.$FBRTCCallSummary39=function(){'use strict';var p={};if(this.$FBRTCCallSummary13)p.ice_g0=this.$FBRTCCallSummary13;if(this.$FBRTCCallSummary15)p.ice=this.$FBRTCCallSummary15;if(this.$FBRTCCallSummary11.sender)Object.assign(p,this.$FBRTCCallSummary11.sender);return p;};o.prototype.$FBRTCCallSummary40=function(){'use strict';var p={};if(this.$FBRTCCallSummary14)p.ice_g0=this.$FBRTCCallSummary14;if(this.$FBRTCCallSummary16)p.ice=this.$FBRTCCallSummary16;return p;};o.prototype.$FBRTCCallSummary41=function(){'use strict';var p={};if(this.$FBRTCCallSummary5!==null){p.end_call_reason_string=h.callEndReasonString(this.$FBRTCCallSummary5);if(this.$FBRTCCallSummary6!==null)p.end_call_subreason_string=this.$FBRTCCallSummary6;p.remote_ended=this.$FBRTCCallSummary7;}if(this.$FBRTCCallSummary11.end)Object.assign(p,this.$FBRTCCallSummary11.end);return p;};o.prototype.$FBRTCCallSummary42=function(){'use strict';var p={capture:{}};if(this.$FBRTCCallSummary11.video&&this.$FBRTCCallSummary11.video.sender)Object.assign(p,this.$FBRTCCallSummary11.video.sender);if(this.$FBRTCCallSummary12)Object.assign(p.capture,this.$FBRTCCallSummary12);return {sender:p,ld:this.$FBRTCCallSummary28,rd:this.$FBRTCCallSummary29};};o.prototype.$FBRTCCallSummary43=function(){'use strict';return new Date().valueOf()-this.$FBRTCCallSummary2;};o.prototype.$FBRTCCallSummary30=function(){'use strict';var p=l()-this.$FBRTCCallSummary17;return Math.floor(this.$FBRTCCallSummary18+p);};o.prototype.$FBRTCCallSummary31=function(p){'use strict';if(this.$FBRTCCallSummary4[p])return;this.$FBRTCCallSummary4[p]=this.$FBRTCCallSummary43();this.$FBRTCCallSummary19[p]=this.$FBRTCCallSummary30();};o.prototype.$FBRTCCallSummary32=function(p,q,r){'use strict';if(p){this.$FBRTCCallSummary31(r);}else this.$FBRTCCallSummary31(q);};o.prototype.$FBRTCCallSummary24=function(){'use strict';this.$FBRTCCallSummary8=new Date().valueOf();};o.prototype.$FBRTCCallSummary23=function(){'use strict';return {device:k.deviceName,os:k.platformName,os_version:k.platformFullVersion,browser:k.browserName,browser_version:k.browserFullVersion,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth};};f.exports=o;},null);
__d('FBRTCCallSummaryStore',['CacheStorage','FBRTCCallSummary','FBRTCLogger','areEqual'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='localstorage',m='RTC_CALL_SUMMARY_',n='summary',o=2000,p=3,q=3*60*1000,r=null;s.getInstance=function(){'use strict';if(!r)r=new s();return r;};function s(){'use strict';this.$FBRTCCallSummaryStore1=new h(l,m);this.$FBRTCCallSummaryStore2=j.getInstance();}s.prototype.storeCallSummary=function(t,u,v){'use strict';var w=this;this.$FBRTCCallSummaryStore3(function(x){if(!x[t])x[t]={};var y=x[t][u];if(y){var z=w.$FBRTCCallSummaryStore4(y);if(z&&z.getLastUpdatedTime()>v.getLastUpdatedTime()){w.$FBRTCCallSummaryStore2.logToConsole('Outdated summaries');return null;}}x[t][u]=w.$FBRTCCallSummaryStore5(v);return x;},w.$FBRTCCallSummaryStore2.logError.bind(w.$FBRTCCallSummaryStore2,t,u));};s.prototype.retrieveCallSummary=function(t,u){'use strict';var v=this.$FBRTCCallSummaryStore6(),w=null;if(v[t])w=v[t][u];if(w){return this.$FBRTCCallSummaryStore4(w);}else return null;};s.prototype.removeCallSummary=function(t,u){'use strict';this.removeCallSummaries([{peerID:t,callID:u}]);};s.prototype.removeCallSummaries=function(t){'use strict';var u=this;this.$FBRTCCallSummaryStore3(function(v){var w=t.length;for(var x=0;x<w;x++){var y=t[x].peerID,z=t[x].callID;if(v[y]&&v[y][z]){delete v[y][z];if(u.$FBRTCCallSummaryStore7(v[y]))delete v[y];}}return v;},u.$FBRTCCallSummaryStore2.logError.bind(u.$FBRTCCallSummaryStore2,null,null));};s.prototype.getLoggableSummaries=function(){'use strict';var t=this.$FBRTCCallSummaryStore6(),u=[];for(var v in t)if(t.hasOwnProperty(v))for(var w in t[v])if(t[v].hasOwnProperty(w)){var x=this.$FBRTCCallSummaryStore4(t[v][w],q);if(x)u.push(x);}return u;};s.prototype.$FBRTCCallSummaryStore7=function(t){'use strict';for(var u in t)if(t.hasOwnProperty(u))return false;return true;};s.prototype.$FBRTCCallSummaryStore5=function(t){'use strict';var u={__t:Date.now(),__d:t.toJsonString()};return u;};s.prototype.$FBRTCCallSummaryStore4=function(t,u){'use strict';if(t)if(!u||Date.now()-t.__t>=u)return i.fromJsonString(t.__d);return null;};s.prototype.$FBRTCCallSummaryStore6=function(){'use strict';var t=this.$FBRTCCallSummaryStore1.get(n)||{};return t;};s.prototype.$FBRTCCallSummaryStore3=function(t,u,v,w){'use strict';if(v===undefined||v===null)v=p;var x=this.$FBRTCCallSummaryStore6(),y=this.$FBRTCCallSummaryStore6(),z=t(x);if(z===null)return;var aa=this.$FBRTCCallSummaryStore6();if(k(y,aa)){this.$FBRTCCallSummaryStore1.set(n,z);this.$FBRTCCallSummaryStore2.logToConsole('Updated summaries');}else if(v>0){u('Retry lock');if(w){var ba=this;setTimeout(function(){ba.$FBRTCCallSummaryStore3(t,u,v-1,true);},o);}else this.$FBRTCCallSummaryStore3(t,u,v-1,true);}else u('Failed to lock');};f.exports=s;},null);
__d('FBRTCCallActions',['FBRTCDispatcher','keyMirror'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=i({START_CALL:null}),k={Types:j,startCall:function(l,m,n,o){h.dispatch({type:j.START_CALL,peerID:l,callID:m,isCaller:n,audioOnly:o});}};f.exports=k;},null);
__d('FBRTCScreenSharingLogger',['Log','MarauderLogger','formatDate','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l='webrtc_screen_sharing',m=k({P2P_VIDEO_CALL:null,DIRECT_SCREEN_SHARING:null}),n=k({screen_sharing_action:null,screen_sharing_error:null}),o=k({PEER_ID:null,SESSION_ID:null,CONTEXT_TYPE:null,CONTENT:null}),p=k({SCREEN_SHARING_TOGGLED:null,SCREEN_SHARING_CANCELLED:null,SCREEN_SHARING_ENABLED:null,SCREEN_SHARING_DISABLED:null,SCREEN_SHARING_EXT_DIALOG:null,SCREEN_SHARING_EXT_LINK:null}),q=null;r.getInstance=function(){if(!q)q=new r();return q;};r.prototype.logAction=function(s,t,u,v,w){var x={};x[n.screen_sharing_action]=u;x[o.PEER_ID]=s;x[o.SESSION_ID]=t;x[o.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1(v);x[o.CONTENT]=w;this.$FBRTCScreenSharingLogger2(n.screen_sharing_action,x);this.logToConsole(s,t,u);};r.prototype.logError=function(s,t,u,v){var w={};w[o.PEER_ID]=s;w[o.SESSION_ID]=t;w[o.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1(u);w[o.CONTENT]=v;this.$FBRTCScreenSharingLogger2(n.screen_sharing_error,w);this.logToConsole(s,t,v);};r.prototype.logToConsole=function(s,t,u){};r.prototype.$FBRTCScreenSharingLogger1=function(s){return s?m.DIRECT_SCREEN_SHARING:m.P2P_VIDEO_CALL;};r.prototype.$FBRTCScreenSharingLogger2=function(s,t){i.log(s,l,t);};function r(){}r.Action=p;f.exports=r;},null);
__d("FBRTCVersionDetection",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isChrome:function(){return !!navigator.webkitGetUserMedia;},isFirefox:function(){return !!navigator.mozGetUserMedia;},webrtcVersion:function(){if(this.isFirefox())return parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1],10);if(this.isChrome()){var i=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);if(i!==null){return parseInt(i[2],10);}else return 999;}return 0;}};f.exports=h;},null);
__d('FBRTCScreenSharingUtils',['FBRTCScreenSharingLogger','FBRTCStruct','FBRTCVersionDetection','RTCConfig','FBRTCSupport'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=new i(['UNKNOWN','INSTALLED']),n=m.UNKNOWN,o={RECIPIENT:'SC_CONTENT_SCRIPT',isScreenSharingSupported:function(){return k.ScreenSharingGK;},isSupportedBrowser:function(){return j.isChrome()&&j.webrtcVersion()>=34;},canReceiveScreenSharing:function(){return k.ReceiveScreenGK&&l.isOSSupported()&&o.isSupportedBrowser();},isExtensionInstalled:function(){return n===m.INSTALLED;},getExtensionStatus:function(){return n;},checkExtensionInstalled:function(p,q){if(this.isExtensionInstalled()){p();return;}window.addEventListener('message',function(event){o.updateExtensionStatus(event,p);});o._loopForExtensionStatus(5,p);},_loopForExtensionStatus:function(p,q){setTimeout((function(){setTimeout(function(){if(n===m.UNKNOWN)window.postMessage({recipient:'SC_CONTENT_SCRIPT',type:'SC_IS_EXT_INSTALLED',text:'is extension installed'},'*');},1);if(p>1){o._loopForExtensionStatus(p-1,q);}else if(!this.isExtensionInstalled())q();}).bind(this),1000);},updateExtensionStatus:function(event,p){if(event.origin!=window.location.origin||!event.data.type)return;if(event.data.type==='SC_EXT_INSTALLED'){window.removeEventListener('message',o.updateExtensionStatus);n=m.INSTALLED;p();}},logFailedAttempt:function(p,q){h.getInstance().logAction(p,q,h.Action.SCREEN_SHARING_TOGGLED,this._isDirect,'feature not available');}};f.exports=o;},null);
__d('FBRTCConfig',['FBRTCScreenSharingUtils','UserAgent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={},k={setConfig:function(l,m,n){j=l;},statsInterpreterConfig:function(){return {rtt_weight:2,frr_weight:800,plr_weight:500,score_threshold:1000,bad_score_count:3};},settingsEnabled:function(){return j.enable_settings;},shouldAutoDisableVideo:function(){return false;},unsupportedBrowserUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.unsupported_browser)return j.troubleshooting_urls.unsupported_browser;return 'https://www.facebook.com/help/211644178877843';},userMediaErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_error)return j.troubleshooting_urls.user_media_error;return 'https://www.facebook.com/help/232232800134371';},userMediaPermissionErrorUrl:function(){if(j.troubleshooting_urls&&j.troubleshooting_urls.user_media_permission_error)return j.troubleshooting_urls.user_media_permission_error;return 'https://www.facebook.com/help/232232800134371';},supportedSignalingExperiments:function(){var l=[];if(i.isBrowser('Chrome')||i.isBrowser('Opera'))l.push('sdp_update');if(h.canReceiveScreenSharing())l.push('screen_sharing');return l;},isMessengerDotCom:function(){return j.is_messenger_dot_com;},useMessengerCallUI:function(){return j.messenger_call_ui;},shouldCreateDataChannel:function(){return j.data_channel;},disableURLManager:function(){return j.disable_url_manager;},useCurrentWindow:function(){return j.use_current_window;}};f.exports=k;},null);
__d('FBRTCUtils',['emptyFunction','randomInt','AsyncRequest','FBID','RTCConfig'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=6000,n={attachMediaStream:function(o,p){if(window.webkitRTCPeerConnection){o.src=window.webkitURL.createObjectURL(p);}else{o.mozSrcObject=p;o.play();}},reattachMediaStream:function(o,p){if(window.webkitRTCPeerConnection){o.src=p.src;}else{o.mozSrcObject=p.mozSrcObject;o.play();}},generateRandomInt:function(){return i(0,4294967294)+1;},aboutEqual:function(o,p){return o-p<.01&&p-o<.01;},sendServerRequest:function(o,p,q,r,s,t){p=p||h;q=q||h;r=r||false;s=s||m;t=t||{};var u=new j().setURI(o).setData(t).setAllowCrossPageTransition(true).setHandler(p).setErrorHandler(q).setTimeoutHandler(s,function(){q();});if(r)u.setOption('asynchronous_DEPRECATED',false);u.send();},isCollabCallable:function(o){return !k.isUser(o)&&(l.CollaborationVideoGroupCallGK||l.CollabVCEndpointsVideoCallGK);},isGroupCallable:function(o){return !k.isUser(o)&&l.CollaborationVideoGroupCallGK;},isVCEndpointCallable:function(o){return !k.isUser(o)&&l.CollabVCEndpointsVideoCallGK;}};f.exports=n;},null);
__d("XGroupCallController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/groupcall\/{?call_id}\/",{call_id:{type:"String",required:true},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:true},users_to_call:{type:"StringSet",defaultValue:[]}});},null);
__d("XGroupCallSigningController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/groupcall\/init\/",{call_id:{type:"String",required:true},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:true},users_to_call:{type:"StringSet",defaultValue:[]}});},null);
__d("XVideoCallController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/videocall\/incall\/",{peer_id:{type:"Int",required:true},call_id:{type:"Int"},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:false},nonce:{type:"String"}});},null);
__d("XVideoCallInitController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/videocall\/init\/",{peer_id:{type:"Int",required:true},call_id:{type:"Int",required:true},is_caller:{type:"Bool",defaultValue:false},audio_only:{type:"Bool",defaultValue:false}});},null);
__d('FBRTCUrlManager',['FBRTCConfig','FBRTCLogger','FBRTCUtils','XVideoCallInitController','XVideoCallController','XGroupCallSigningController','XGroupCallController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=3,p=function(u,v,w,x){i.getInstance().logCallAction(u,v,i.CallAction.OLD_URI);return l.getURIBuilder().setInt('peer_id',u).setInt('call_id',v).setBool('is_caller',w).setBool('audio_only',x).getURI();},q=function(u,v,w,x,y,z,aa){if(aa===undefined||aa===null)aa=o;var ba=k.getURIBuilder().setInt('peer_id',u).setInt('call_id',v).setBool('is_caller',w).setBool('audio_only',x).getURI();j.sendServerRequest(ba,function(ca){y(ca.payload.uri);},function(ca){if(aa>0){q(u,v,w,x,y,z,aa-1);}else y(p(u,v,w,x));});},r=function(u,v,w,x,y,z,aa){if(aa===undefined||aa===null)aa=o;var ba=m.getURIBuilder().setString('call_id',u).setBool('is_caller',w).setBool('audio_only',x).setStringSet('users_to_call',v).getURI();j.sendServerRequest(ba,function(ca){y(ca.payload.uri);},function(ca){if(aa>0){r(u,v,w,x,y,z,aa-1);}else{var da=n.getURIBuilder().setString('call_id',u).setBool('is_caller',w).setBool('audio_only',x).setStringSet('users_to_call',v).getURI();y(da);}});},s=function(u){if(h.disableURLManager())return;window.history.replaceState({},'',u);},t={init:function(u){this._peerID=u;},onCallStarted:function(){s(p(this._peerID));},getCallUri:q,getGroupCallUri:r,getNonceUri:function(u,v,w,x,y){return l.getURIBuilder().setInt('peer_id',u).setInt('call_id',v).setBool('is_caller',w).setBool('audio_only',x).setString('nonce',y).getURI();}};f.exports=t;},null);
__d('FBRTCCallUI',['BanzaiLogger','UserAgent','FBRTCCallActions','FBRTCCallSummary','FBRTCCallSummaryStore','FBRTCConfig','FBRTCConstants','FBRTCLogger','FBRTCMessageListener','FBRTCUrlManager','pageID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=null,t={openGroupCallAsCaller:function(u,v,w,x){if(!s&&window.rtcCallChildWindow){s=window.rtcCallChildWindow;window.rtcCallChildWindow=null;}if(this._shouldFocusCallWindow(u)){s.focus();return;}if(this._shouldCloseCallWindow())s.close();var y=true;this._openGroupCall(u,v,y,x,null);},openGroupCallAsCallee:function(u,v){var w=false,x=true;this._openGroupCall(u,[],w,x,v);},openGroupCallAsCalleeWithoutURL:function(u,v){if(!s&&window.rtcCallChildWindow){s=window.rtcCallChildWindow;window.rtcCallChildWindow=null;}if(this._shouldFocusCallWindow(u)){s.focus();return;}if(this._shouldCloseCallWindow())s.close();var w=false;this._openGroupCall(u,[],w,!v,null);},_openGroupCall:function(u,v,w,x,y){var z=this._windowPosition(),aa=['menubar=no','location=no','scrollbars=no','status=no','personalbar=no',z.height,z.width,z.top,z.left].join(',');if(this._isSparkBrowser())aa='';if(y){s=window.open(y,'Group Call',aa);}else{s=window.open('','Group Call',aa);q.getGroupCallUri(u,v,w,x,function(ba){s.location=ba;},function(){});}if(window.focus)s.focus();},openAsCaller:function(u,v,w,x){if(!s&&window.rtcCallChildWindow){s=window.rtcCallChildWindow;window.rtcCallChildWindow=null;}if(this._shouldFocusCallWindow(u)){s.focus();return;}if(this._shouldCloseCallWindow())s.close();h.log('VideoCallLoggerConfig',{event:'open_as_caller'});o.getInstance().logCallAction(u,v,o.CallAction.START_CALL,null,w);var y=new k({peerID:u,callID:v,isCaller:true});y.onCallStarted(w);this._open(u,v,true,y,false,x);},openAsCallee:function(u,v,w,x,y){h.log('VideoCallLoggerConfig',{event:'open_as_callee'});this._open(u,v,false,w,x,y);},_shouldFocusCallWindow:function(u){return s&&!s.closed&&s.rtcCallInProgessWith===u;},_shouldCloseCallWindow:function(){return s&&!s.closed&&!s.rtcCallInProgessWith;},_open:function(u,v,w,x,y,z){x.addExtraInfo(o.Key.INITIATED_BY_PAGE_ID,r);x.onCallEnded(n.CallEndReason.CLIENT_ERROR,false,true,'PopupPending');x.save(l.getInstance());if(m.useCurrentWindow()){p.removeMessageHandler();j.startCall(u,v,w,z);return;}var aa=this._windowPosition(),ba=['menubar=no','location=no','scrollbars=no','status=no','personalbar=no',aa.height,aa.width,aa.top,aa.left].join(',');if(this._isSparkBrowser())ba='';y=q.getNonceUri(u,v,w,z,p.generateNewNonce());h.log('VideoCallLoggerConfig',{event:'open_popup'});if(!y){s=window.open('','Video Call',ba);this._setUri(s,u,v,w,z);}else{o.getInstance().logCallAction(u,v,o.CallAction.OPEN_POPUP);s=window.open(y,'Video Call',ba);}s.focus&&s.focus();},_setUri:function(u,v,w,x,y){q.getCallUri(v,w,x,y,function(z){o.getInstance().logCallAction(v,w,o.CallAction.OPEN_POPUP);u.location=z;},function(){o.getInstance().logCallAction(v,w,o.CallAction.FAILED_GETTING_URI);});},_windowPosition:function(){var u=960,v=540,w,x,y,z;if(screen&&screen.width>1280){u=1280;v=720;}if(window.innerWidth!==undefined){x=window.innerWidth;w=window.innerHeight;}else{x=screen.width;w=screen.height;}if(window.screenLeft!==undefined){y=window.screenLeft;z=window.screenTop;}else{y=window.screenX;z=window.screenY;}var aa=Math.floor(x/2-u/2+y),ba=Math.floor(w/2-v/2+z);return {height:'height='+v.toString(),width:'width='+u.toString(),top:'top='+ba.toString(),left:'left='+aa.toString()};},_isSparkBrowser:function(){return i.isBrowser('Chrome < 34')&&i.isBrowser('Chrome > 33');}};f.exports=t;},null);
__d('FBRTCCore',['Bootloader','FBRTCAvailability','FBRTCCallUI','FBRTCSupport','invariant','randomInt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=false,o={startOutgoingCall:function(p,q,r){!!isNaN(parseInt(p,10))?l(0):undefined;if(n)return;n=true;setTimeout(function(){n=false;},1000);if(k.isWebrtcSupported()){var s=this._generateCallID();j.openAsCaller(p,s,q,r);}else h.loadModules(["FBRTCUnsupportedBrowserMessage"],function(t){t.showForOutgoingCall();});},startMultiwayCall:function(p,q,r,s){!(q.length>0)?l(0):undefined;if(n)return;n=true;setTimeout(function(){n=false;},1000);if(k.isWebrtcSupported()){j.openGroupCallAsCaller(p,q,r,s);}else h.loadModules(["FBRTCUnsupportedBrowserMessage"],function(t){t.showForOutgoingCall();});},joinMultiwayCall:function(p,q){if(k.isWebrtcSupported()){j.openGroupCallAsCalleeWithoutURL(p,q);}else h.loadModules(["FBRTCUnsupportedBrowserMessage"],function(r){r.showForOutgoingCall();});},isAvailableForWebrtcCalling:function(p){return i.isCallable(p);},shouldEnableVideoCalling:function(){return k.isOSSupported();},_generateCallID:function(){return m(0,4294967295);}};f.exports=o;},null);
__d('ProfileEscapeHatch',['CSS','ProfileTabUtils','Run','TimelineComponentKeys','TimelineController'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=[],n=false;function o(p){'use strict';this.$ProfileEscapeHatch1=p;m.push(this);if(!n){l.register(k.ESCAPE_HATCH,o);j.onLeave(function(){m=[];});n=true;}}o.handleTabChange=function(p){'use strict';m.forEach(function(q){h.conditionShow(q.$ProfileEscapeHatch1,i.isTimelineTab(p));});};f.exports=o;},null);