---
---

// fake jQuery
var $$ = {
  get: function(url, callback){
    // this is where the call to the server would happen

    // fake it with a timeout
    setTimeout(function(){
      callback({ status: 'ok' });
    }, 100);
  }
};

var callbackCalled = false;
$$.get('http://foo.com/bar.json', function(data){
  callbackCalled = true;
  assertTripleEqual(data.status, 'ok', "the callback receives the data");
});

assertTripleEqual(callbackCalled, false, "callback doesn't exectute immediately");
