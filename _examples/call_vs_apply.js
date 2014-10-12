---
---

function titleize(first, last){
  return first + ' ' + last + ', ' + this.doctorSuffix;
}

var context = {
  doctorSuffix: 'M.D.'
};

assertTripleEqual(titleize.call(context, 'Michaela', 'Quinn'), 'Michaela Quinn, M.D.', "call() takes individual arguments after the context");
assertTripleEqual(titleize.apply(context, ['Michaela', 'Quinn']), 'Michaela Quinn, M.D.', "apply() takes individual arguments after the context");

// easy to remember - 'a' (in 'apply') is for Array
