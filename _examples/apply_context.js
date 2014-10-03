---
---

// NOTE: broken in the deck

var myVariable = "I'm global!";

function printMyVariable(){
  return this.myVariable;
}

// without additional arguments, apply() vs. call() are interchangeable
assertTripleEqual(printMyVariable(), "I'm global!", "without specifying context");
assertTripleEqual(printMyVariable.apply(null), "I'm global!", "using 'null' context");
assertTripleEqual(printMyVariable.apply(undefined), "I'm global!", "using 'undefined' context");
assertTripleEqual(printMyVariable.apply(this), "I'm global!", "using 'this' context");

assertTripleEqual(printMyVariable.apply({ myVariable: "I'm local!" }), "I'm local!", "using object as context");
