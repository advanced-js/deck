var Person = function(first, last){
  this.first = first;
  this.last = last;

  this.fullName = function(){
    return this.first + ' ' + this.last;
  };
};

Person.prototype.title = function(){
  return 'Mr. ' + this.fullName();
};

var bruce = new Person('Bruce', 'Wayne');
var tony = new Person('Tony', 'Stark');

assertTripleEqual(bruce.fullName(), 'Bruce Wayne', "correct fullName for bruce");
assertTripleEqual(tony.fullName(), 'Tony Stark', "correct fullName for tony");

assertTripleEqual(bruce.fullName === tony.fullName, false, "functions created in the constructor are unique to each instance");

assertTripleEqual(bruce.title(), 'Mr. Bruce Wayne', "correct title for bruce");
assertTripleEqual(tony.title(), 'Mr. Tony Stark', "correct title for tony");

assertTripleEqual(bruce.title, tony.title, "functions set on the prototype are shared by all instances");
