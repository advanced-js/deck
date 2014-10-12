---
---

function argumentative(){
  assertTripleEqual(arguments instanceof Array, false, "'arguments' isn't really an array");
  assertTripleEqual(typeof arguments.join, 'undefined', "no join method on 'arguments'");

  assertTripleEqual(arguments.length, 3, "but 'arguments' do have .length");
  assertTripleEqual(arguments[1], 'bar', "they can access elements like an array");
}

argumentative('foo', 'bar', 'baz');
