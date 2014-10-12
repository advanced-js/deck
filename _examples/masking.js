---
---

var myVar = "I'm the global";

function masker(myVar){
  assertTripleEqual(myVar, "I'm the argument", "outer variable gets masked");
}

masker("I'm the argument");

assertTripleEqual(myVar, "I'm the global", "outer variable remains unchanged");
