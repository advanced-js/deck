# Simple AJAX example

This example shows an AJAX request to [a local file](example.json). Take a look at [`index.html`](index.html), which will retrieve the data and display it.

**See:** [Live demo](http://advanced-js.github.io/deck/demos/ajax/simple/)

## Running locally

Browsers don't allow you to do requests to `file://` URLs (for security reasons), so you need to create a local server to run this one.

```bash
cd <this directory>
python -m SimpleHTTPServer
open http://localhost:8000
```
