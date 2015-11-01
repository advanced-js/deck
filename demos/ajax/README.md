# AJAX

AJAX allows you to retrieve data to use in your frontend code, whether it's coming from your own server, or some other service around the world. The places we retrieve data from are called APIs, which provide data in some machine-readable format. The most popular machine-readable format these days is JSON (which stands for "JavaScript Object Notation"), though there are other formats like XML. This basically means that the data will come back looking like some combination of JavaScript Objects, Arrays, Strings, etc.

1. **See:** [An example JSON file](simple/example.json)
1. **Read:** [_JSON: What It Is, How It Works, & How to Use It_](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)

The browser has built-in ways to do AJAX ([`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), more recently [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)), but for simplicity, we will just use jQuery, which normalizes the behavior between browsers. While AJAX can be used to send or receive data, we will just worry about the latter for now (via [`$.get()`](https://api.jquery.com/jquery.get/), and maybe [`$.ajax()`](https://api.jquery.com/jQuery.ajax/)).

1. **See:** [The simple JSON demo](simple/)
1. **Read:** [jQuery's AJAX tutorial](http://learn.jquery.com/ajax/)
1. **See:** [The Instagram API demo](instagram/)
1. **See:** [The JSONP demo](jsonp.html) ([live demo](http://advanced-js.github.io/deck/demos/ajax/jsonp.html))
1. **Do:** The [Mashup](https://github.com/advanced-js/mashup) project, to get practice

## REST

You may have heard of "RESTful APIs" before, which (loosely) means that the URLs (a.k.a. endpoints) and HTTP methods they support have a semantic meaning about the data that is being transferred, and the action that's being performed. For example, `GET /articles` should return a list of articles. `POST /articles` should create a new article. `POST /stuff`, which could create articles or users, or retrieve comments, would _not_ be a good example of RESTful API design.

## Additional resources

* [Discover DevTools: Network tab](http://discover-devtools.codeschool.com/chapters/5?locale=en)
* [jQuery Promises example](promises/)
* [Backbone example](backbone/) ([live demo](http://advanced-js.github.io/deck/demos/ajax/backbone/))
* http://www.w3schools.com/jquery/jquery_ajax_intro.asp
