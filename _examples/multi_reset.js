---
---

function reset(statusObj){
  statusObj.counter = 0;
}

var myStatus1 = {
  counter: 6
};
var myStatus2 = {
  counter: 6
};

reset(myStatus1);

assertTripleEqual(myStatus1.counter, 0, "Object passed to reset() gets modified");
assertTripleEqual(myStatus2.counter, 6, "Unmodified, because objects looking the same doesn't mean they are the same place in memory");
