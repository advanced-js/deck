---
---

// procedural statements execute in order, except when there is a call that is asynchronous

var order = [];

order.push('before');

setTimeout(function(){
  order.push('within');

  assertDeepEqual(order, ['before', 'after', 'within'], "timeout callback executed last");
}, 100);

order.push('after');
