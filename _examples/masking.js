---
---

var myVar = "I'm the global";

function masker(myVar){
  assertTripleEqual(myVar, "I'm the argument", "outer variable gets masked");
}

masker("I'm the argument");

assertTripleEqual(myVar, "I'm the global", "outer variable remains unchanged");


// look at usage for jQuery Plugins:
// http://learn.jquery.com/plugins/basic-plugin-creation/#protecting-the-alias-and-adding-scope
