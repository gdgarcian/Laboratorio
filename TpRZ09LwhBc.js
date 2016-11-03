/*!CK:2763997514!*//*1458526949,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2WwUV"]); }

__d('ChatEditParticipantsUtils',['AsyncDialog','AsyncRequest','MercuryIDs','MercuryThreadIDMap','URI'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('MercuryThreadIDMap').get(),i={showParticipantsModal:function(j){if(!c('MercuryIDs').isGroupChat(j))return;h.getServerIDFromClientID(j,function(k){c('AsyncDialog').send(new (c('AsyncRequest'))(new (c('URI'))('/ajax/browser/dialog/multichat_members/').addQueryData({id:k})));});}};f.exports=i;},null);