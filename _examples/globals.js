---
---

var globalVar = "I'm global";
assertTripleEqual(window.globalVar, "I'm global", "variables defined globally are available on the global object");


function myFunc(){
  someVar = "Inner variable";
}
assertTripleEqual(typeof window.myFunc, 'function', "global functions are just global variables");

myFunc();
assertTripleEqual(window.someVar, "Inner variable", "if you forget 'var', it will be global");
