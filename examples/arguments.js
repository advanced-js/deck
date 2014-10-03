function argumentative(){
  assertTripleEqual(arguments instanceof Array, false, "'arguments' isn't really an array");
  assertTripleEqual(typeof arguments.join, 'undefined', "no join method on 'arguments'");

  assertTripleEqual(arguments.length, 3, "but 'arguments' do have 'length'");
}

argumentative('foo', 'bar', 'baz');
