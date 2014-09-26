var myAry = [
  'foo',
  'bar',
  'baz'
];

myAry[0]; /* 'foo' */
myAry['0']; /* 'foo' */

typeof {}; /* 'object' */
typeof myAry; /* 'object' */

myAry.newProp = "A property on an array";
myAry.newProp; /* "A property on an array" */
myAry['newProp']; /* "A property on an array" */
myAry[0]; /* 'foo' */
