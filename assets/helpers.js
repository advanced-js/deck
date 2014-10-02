var assert = function(pass, msg) {
  var type = pass ? "PASS" : "FAIL";
  jQuery("#results").append("<li class='" + type + "'><b>" + type + "</b> " + msg + "</li>");
};
var assertDeepEqual = function(actual, expected, msg) {
  assert(_.isEqual(actual, expected), msg);
};
