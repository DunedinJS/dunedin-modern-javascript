# Default Parameters

Default values can be set for function parameters/arguments.

If a parameter is `undefined` it will be assigned the default value instead.

Default parameter values are optional.

## Syntax

```javascript
function getGiven(a = 0) {
  return a;
}

getGiven(); // 0
getGiven(undefined); // 0

getGiven(10); // 10

// does not use default for defined values -- including those which are falsey
getGiven(null); // null
getGiven(false); // false
getGiven(''); // ''
```

## Usage

Default parameter values can make functions much more concise and easy to read.
They also help us to avoid re-assigning parameter values.

However, do keep in mind that only `undefined` values will be replaced by the default value so it may still be necessary to coerce types in many use cases.

```javascript
// old JavaScript
function oldTimes2(arg) {
  var a = arg === undefined ? 0 : arg;
  return 2 * a;
}

function times2(a = 0) {
  return 2 * a;
}
```

## Call time evaluation

Default values are computed each time the function is called rather than when the function is declared.

_This differs from how default parameters are treated in many languages including Python._

```javascript
let defaultN = 0;

function getNum(n = defaultN) {
  return n;
}

getNum(10); // 10
getNum(); // 0

defaultN = 5;
getNum(); // 5
```

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 [Parameter handling - Parameter default values](http://exploringjs.com/es6/ch_parameter-handling.html#sec_parameter-default-values)
* MDN - [Default Parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)
