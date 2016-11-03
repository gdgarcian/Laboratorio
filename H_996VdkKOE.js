/*!CK:1622421259!*//*1444652718,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sTTYn"]); }

__d('HighConfidenceSuggestionLogger',['AsyncRequest','SuggestionLoggingParamNames'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={log:function(i,j,k,l){var m={};m[c('SuggestionLoggingParamNames').USER_ACTION]=i;m[c('SuggestionLoggingParamNames').CONFIG]=j;m[c('SuggestionLoggingParamNames').SUGGESTION]=JSON.stringify(k);m[c('SuggestionLoggingParamNames').COMPOSER_SESSION_ID]=l;if(m[c('SuggestionLoggingParamNames').SUGGESTION].length)new (c('AsyncRequest'))().setURI('/suggestion/log').setData(m).send();}};f.exports=h;},null);