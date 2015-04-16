---
---

assertTripleEqual(1 == 1, true);
assertTripleEqual(1 === 1, true);

assertTripleEqual('foo' == 'foo', true);
assertTripleEqual('foo' === 'foo', true);

assertTripleEqual(null == undefined, true, "double-equals coerces types to match");
assertTripleEqual(null === undefined, false, "triple-equals does strict type checking");

assertTripleEqual({} == {}, false);
assertTripleEqual({} === {}, false);
// Why?
