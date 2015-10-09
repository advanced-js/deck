---
---

(function(){
  // http://codegolf.stackexchange.com/a/480
  var URL_REGEX = /\b((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)\b/g;

  var handleKeyDown = function(e){
    var baseurl = '{{ site.baseurl }}';

    switch (e.which) {
      case 37:
        // left arrow
        e.preventDefault();
        window.location = $('.js-prev').attr('href') || baseurl;
        break;
      case 38:
        // up arrow
        e.preventDefault();
        window.location = baseurl;
        break;
      case 39:
        // right arrow
        e.preventDefault();
        window.location = $('.js-next').attr('href') || baseurl;
        break;
    }
  };

  var isAssert = function(node) {
    return (
      node.type === 'CallExpression' &&
      (
        node.callee.name === 'assertDeepEqual' ||
        node.callee.name === 'assertTripleEqual'
      )
    );
  };

  var hideIfAssert = function(node) {
    if (isAssert(node)) {
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
  };

  // rewrite all assert*Equal()s to show the value + reason in a comment
  var hideAsserts = function($pre) {
    var source = $pre.text().
      replace(/(^|\n) /g, "$1").
      replace(/ ($|\n)/g, "$1");

    return Falafel(source, hideIfAssert);
  };

  var autoLinkUrls = function($el) {
    var text = $el.text();
    text = text.replace(URL_REGEX, '<a href="$1" target="_blank">$1</a>');
    $el.html(text);
  };

  var autoLinkCommentUrls = function($pre) {
    var $comments = $pre.find('.com');
    $comments.each(function(i, el) {
      var $el = jQuery(el);
      autoLinkUrls($el);
    });
  };

  var hideCommentedValue = function($el) {
    var value = $el.text().replace(/(\/\*|\*\/)/g, '').trim();
    var newContents = '<span class="question">// ?</span><span class="value">// ' + value + '</span>';
    $el.html(newContents);
  };

  var hideCommentedValues = function($pre) {
    var $values = $pre.find('.mlcom');
    $values.each(function(i, el) {
      var $el = jQuery(el);
      hideCommentedValue($el);
    });
    return $values;
  };


  var $pre = $("#pre");
  $pre.hide();

  var output = hideAsserts($pre);
  $pre.
    // insert example
    html( output.toString() ).
    // highlight syntax
    chili().
    // re-display
    show();

  autoLinkCommentUrls($pre);
  var $values = hideCommentedValues($pre);

  var $doc = $(document);
  $doc.on('keydown', handleKeyDown);

  // hide answers when code is copied. ideally 'user-select: none' would be used, but
  // https://bugs.webkit.org/show_bug.cgi?id=80159
  $doc.on('selectionchange', function(e){
    var selection = window.getSelection();
    if (selection.isCollapsed) {
      $values.show();
    } else {
      $values.hide();
    }
  });
}());
