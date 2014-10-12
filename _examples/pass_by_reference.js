---
---

function reset(statusObj){
  statusObj.total = 0;
}

var myStatus = {
  total: 6
};
reset(myStatus);
assertTripleEqual(myStatus.total, 0, "objects are pass-by-reference");
