jQuery(document).ready(function(){
  var source = $('#pre').html().replace(/(^|\n) /g, "$1").replace(/ ($|\n)/g, "$1");

  if ( !source ) {
    jQuery("#pre").hide();
  } else {
    jQuery("#pre").show();
  }

  // rewrite all assertDeepEqual()s to show the value + reason in a comment
  var output = Falafel(source, function (node) {
    if (node.type === 'CallExpression' && (node.callee.name === 'assertDeepEqual' || node.callee.name === 'assertTripleEqual')) {
      var actual = node.arguments[0].source();
      var expected = node.arguments[1].source();
      var reason = node.arguments[2];
      if (reason) {
        expected += ' -- ' + reason.value;
      }

      var newSource = actual + '; /* ' + expected + ' */';
      // update the parent (ExpressionStatement) so that the semicolon isn't included
      node.parent.update(newSource);
    }
  });

  jQuery("#pre").html( output.toString() ).chili();

  // hide the commented values
  var $values = jQuery('#pre .mlcom');
  $values.each(function(i, el) {
    var $el = jQuery(el);
    var value = $el.text().replace(/(\/\*|\*\/)/g, '').trim();
    var newContents = '<span class="question">// ?</span><span class="value">// ' + value + '</span>';
    $el.html(newContents);
  });

  // hide answers when code is copied. ideally 'user-select: none' would be used, but
  // https://bugs.webkit.org/show_bug.cgi?id=80159
  $(document).on('selectionchange', function(e){
    var selection = window.getSelection();
    if (selection.isCollapsed) {
      $values.show();
    } else {
      $values.hide();
    }
  });
});
