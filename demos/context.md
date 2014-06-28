Ways to pass/keep context:

1. Anonymous callback, e.g.

    ```javascript
    var context = {
      callback: function(){
        // ...
      }
    };

    asyncThing(function(){
      // if it's a property,
      context.callback();
      // if not,
      callback.apply(context);
    });
    ```

1. Pass the context and the function as parameters, e.g.

    ```javascript
    asyncThing(callback, context);
    ```

1. Using `bind()`, e.g.

    ```javascript
    // homegrown
    var boundCallback = bind(callback, context);
    // or built-in (to newer browsers)
    var boundCallback = callback.bind(context);

    asyncThing(boundCallback);
    ```
