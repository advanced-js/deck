# [Advanced JavaScript](https://github.com/advanced-js/syllabus) slide deck

All the magic functions seen in the examples are defined in [`scripts/run_tests.js`](scripts/run_tests.js).

## Demos

Besides the slides, there are some demos included in this repository:

* [ajax](demos/ajax/)
* [canvas](demos/canvas/)
* [how to maintain function context](demos/context.md)
* [regular expressions](demos/regex.html)
* [a simple Node.js server](demos/node.js)

## Building [![Build Status](https://travis-ci.org/advanced-js/deck.svg?branch=master)](https://travis-ci.org/advanced-js/deck)

[Node.js](http://nodejs.org) is required (tested w/ Node v0.10.2).  To run the `examples/`:

```bash
node scripts/run_tests.js
```

To run an individual exercise:

```bash
node scripts/run_tests.js examples/FILENAME.js
```

To build the examples as HTML:

```bash
bundle
bundle exec jekyll serve -w --baseurl /
open http://localhost:4000
```
