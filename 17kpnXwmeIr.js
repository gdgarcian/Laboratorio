/*!CK:3983548111!*//*1452491586,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["iydlL"]); }

__d('MessengerContactAdapters',['immutable','ImmutableObject','MercuryTypeaheadConstants'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={fromSearchableEntry:function(l){var m=l.getType(),n={alias:null,isMessengerUser:null,participants:null,photo:l.getPhoto(),subtitle:l.getSubtitle(),thread:null,title:l.getTitle(),type:m,uid:l.getUniqueID()},o=l.getAuxiliaryData();if(o)if(m===j.THREAD_TYPE){n.thread=new i(o.thread);n.participants=h.Map().withMutations(function(p){o.participantsToRender.forEach(function(q){p.set(q.id,q);});});}else{n.isMessengerUser=o.isMessengerUser;n.alias=o.alias;}return new i(n);},fromMercuryParticipant:function(l){return new i({alias:l.alias,uid:l.id,photo:l.image_src,title:l.name,subtitle:'',type:l.type,isMessengerUser:l.is_messenger_user,href:l.href});}};f.exports=k;},null);