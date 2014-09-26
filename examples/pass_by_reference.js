function increment(val){
  val += 1;
  return val;
}

var counter = 0;
var incVal = increment(counter);
assert(counter === 0, "primitives are pass-by-value");
assert(incVal === 1, "returns incremented value");


function reset(statusObj){
  statusObj.counter = 0;
}

var myStatus = {
  counter: 6
};
reset(myStatus);
assert(myStatus.counter === 0, "objects are pass-by-reference");
