---
---

var myGlobal = "I'm global";

(function(){
  var myLocal = "I'm local";
  window.anotherGlobal = "I'm also global";
  // ...
})();

assertTripleEqual(window.myGlobal, "I'm global");
assertTripleEqual(window.anotherGlobal, "I'm also global");
assertTripleEqual(window.myLocal, undefined);


// look at usage for jQuery Plugins:
// http://learn.jquery.com/plugins/basic-plugin-creation/#protecting-the-alias-and-adding-scope
