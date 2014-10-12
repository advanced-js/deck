---
---

(function(){
  var myLocal = "I'm local";
  window.myGlobal = "I'm global";
})();

assertTripleEqual(window.myGlobal, "I'm global");
assertTripleEqual(window.myLocal, undefined, "local variables never get assigned to the global object");


// look at usage for jQuery Plugins:
// http://learn.jquery.com/plugins/basic-plugin-creation/#protecting-the-alias-and-adding-scope
