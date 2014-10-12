---
---

(function(){
  var myLocal = "I'm local";
  window.myGlobal = "I'm global";
})();

assertTripleEqual(window.myGlobal, "I'm global");
assertTripleEqual(window.myLocal, undefined, "local variables never get assigned to the global object");
