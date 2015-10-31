# [Promise](https://www.promisejs.org/) examples

Demonstrates how Promises can be used to simplify async operations.

**Watch:** [_Introduction to Promises in JavaScript_](https://www.youtube.com/watch?v=KeQYjpckudA)

Next, go through the examples in this order:

1. [simple callback](simple-callback.html)
1. [simple promise](simple-promise.html)
1. [serial callback](serial-callback.html)
1. [serial promise (condensed)](serial-promise-condensed.html)
1. [serial promise](serial-promise.html)
1. [parallel promise](parallel-promise.html)
1. [fail](fail.html)
1. [pipe](pipe.html)

## Running locally

Browsers don't allow you to do requests to `file://` URLs (for security reasons), so you need to create a local server to run them.

```bash
cd <this directory>
python -m SimpleHTTPServer
open http://localhost:8000/FILENAME.html
```
