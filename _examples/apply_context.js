---
---

var myVariable = "I'm global!";

function printMyVariable(){
  return this.myVariable;
}

// without additional arguments, apply() & call() are interchangeable
assertTripleEqual(printMyVariable(), "I'm global!", "without specifying context");
assertTripleEqual(printMyVariable.apply(this), "I'm global!", "using 'this' context");

assertTripleEqual(printMyVariable.apply({ myVariable: "I'm local!" }), "I'm local!", "using object as context");
