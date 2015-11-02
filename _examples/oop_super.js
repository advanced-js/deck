---
---

// here, we want to create subclasses and override methods, but still use the original functionality

var Vehicle = function(){
  this.speed = 0;
};

Vehicle.prototype.stop = function(){
  this.speed = 0;
};

var Car = function(){
  this.isBraking = false;
  // call superclass constructor
  Vehicle.call(this);
};
Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.stop = function(){
  this.isBraking = true;
  // call superclass method
  Vehicle.prototype.stop.call(this);
};

var myCar = new Car();

myCar.speed = 60;
assertTripleEqual(myCar.isBraking, false);

myCar.stop();
assertTripleEqual(myCar.isBraking, true, "the subclass method has been called");
assertTripleEqual(myCar.speed, 0, "the superclass method has been called");
