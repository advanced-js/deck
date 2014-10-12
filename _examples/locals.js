---
---

function doSomethingLocal(){
  var myLocal = "I'm local";
  // ...
}

doSomethingLocal();

assertTripleEqual(window.myLocal, undefined, "local variables never get assigned to the global object");
