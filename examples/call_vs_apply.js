function title(first, last){
  return first + ' ' + last + ', M.D.';
}

assertTripleEqual(title.call(this, 'Michaela', 'Quinn'), 'Michaela Quinn, M.D.', "call() takes individual arguments after the context");
assertTripleEqual(title.apply(this, ['Michaela', 'Quinn']), 'Michaela Quinn, M.D.', "apply() takes individual arguments after the context");

// easy to remember - 'a' (in 'apply') is for Array
