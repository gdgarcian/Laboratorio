/*!CK:1834404850!*//*1448251780,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["p9t8T"]); }

__d("XPubcontentPhotoPivotsChainingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/",{search_query:{type:"String",required:true},storyid:{type:"String",required:true},photoid:{type:"String",required:true},position:{type:"Int",required:true}});},null);
__d('PubcontentPhotoPivotsChaining',['AsyncRequest','XPubcontentPhotoPivotsChainingController','Event','ge'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={logPhotoChainingClick:function(i,j,k,l,m){var n=c('ge')(i);if(!n)return;var o=c('Event').listen(n,'click',function(){o.remove();var p=c('XPubcontentPhotoPivotsChainingController').getURIBuilder().setString('search_query',j).setString('storyid',k).setString('photoid',l).setInt('position',m),q=new (c('AsyncRequest'))().setURI(p.getURI());q.send();return true;});}};f.exports=h;},null);