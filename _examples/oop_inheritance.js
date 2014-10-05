---
---

var Vehicle = function(){};

Vehicle.prototype.numWheels = function(){
  return undefined;
};

var Car = function(){};
// note this is an ES5 thing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Browser_compatibility
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.numWheels = function(){
  return 4;
};

var myVehicle = new Vehicle();
var myCar = new Car();

assertTripleEqual(myCar.numWheels(), 4, "subclass used its own function definition");
assertTripleEqual(myVehicle.numWheels(), undefined, "superclass function wasn't overwritten");
