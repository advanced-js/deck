---
---

// like Java, but hackier!

// create the namespace
var app = {}; // the only global
app.models = {};

// add stuff to the namespace
app.models.User = function(){};
app.models.Vehicle = function(){};

// use stuff from the namespace
var bob = new app.models.User();

assertTripleEqual(bob instanceof Object, true, "Objects under a namespace are just Objects");

// perks:
// * helps to organize
// * doesn't crowd the global namespace
