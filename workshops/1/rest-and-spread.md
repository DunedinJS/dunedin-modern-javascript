# Rest and Spread

Modern JavaScript introduces the rest and spread operators.
They are essentially the opposite of one another.
You can think of rest as values going into a variable and spread as values coming out of an expression.
Spread can be used on any iterable data type.

## Syntax

Rest uses `...` before a variable name whereas spread uses `...` before an expression.
Rest can only be used for the final parameter.

```javascript
function myFn(...args) { // rest to gather values into the args variable
  console.log(args);
}

const values = ['a', 'b', 'c'];

myFn(...values); // spread to pull values out of array
```

## Rest for function paramaters

The rest operator preceeding the last parameter of a function collects all remaining parameters in an array.
This is useful when a function needs to receive an unknown number of parameters.

```javascript
function myFn(a, b, ...other) {
  console.log(a, b, other);
}

myFn(1, 2, 3, 4, 5); // logs 1, 2, [3, 4, 5]
```

In old JavaScript the special `arguments` variable had to be used but it can now be completely replaced with rest.
The `arguments` variable is an array-like object but not actually an array -- which makes it cumbersome to work with.
The rest operator produces real arrays.

```javascript
// old JavaScript
function oldFn(a, b) {
  var other = Array.prototype.slice.call(arguments, 2); // slice to array of remaining parameters
  console.log(a, b, other);
}

// modern JavaScript
function newFn(a, b, ...other) {
  console.log(a, b, other);
}
```

## Rest for array destructuring

```javascript
const [first, ...others] = [1, 2, 3, 4]; // first = 1, others = [2, 3, 4]
```

_Do keep in mind that rest can only be used for the final parameter._

## Spread for function calls

Spread converts each item in an iterable value into a separate parameter.
This makes it very useful for calling arrays which accepts multiple parameters instead of an array of parameters -- a good example is the built-in `Math.max()`.

```javascript
const numbers = [1, 3, 2];

// old JavaScript with manual array spreading -- useless for unknown array length
Math.max(numbers[0], numbers[1], numbers[3]); // 3

// old JavaScript with .apply() -- have to give the 'this' binding
Math.max.apply(Math, numbers); // 3

// modern JavaScript
Math.max(...numbers); // 3
```

It is also possible to supply parameters before or after the spread.

```javascript
Math.max(5, ...[1, 3, 2], 9); // 9
```

## Spread for arrays

Spread is also very useful for working with arrays.

### Cloning

To produce a new array with the same items and order as an existing array.

```javascript
const array = [1, 2, 3];

// old JavaScript
array.slice(); // produces [1, 2, 3]

// modern JavaScript
[...array]; // produces [1, 2, 3]
```

The same can be done for other iterable objects such as `arguments`.
Their items are extracted into a real array.

```javascript
// a strange IIFE to capture an arguments object
const arrayLikeObject = (function() { return arguments; })(1, 2, 3);

// old JavaScript
Array.prototype.slice.call(arrayLikeObject);

// modern JavaScript
[...arrayLikeObject];
```

### Concatenatation

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// old JavaScript
array1.concat(array2).concat([7, 8, 9]); // produces [1, 2, 3, 4, 5, 6, 7, 8, 9]

// modern JavaScript
[...array1, ...array2, 7, 8, 9]; // produces [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Pushing items from one array to another

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// old JavaScript
array1.push.apply(array1, array2); // array1 now equals [1, 2, 3, 4, 5, 6]

// modern JavaScript
array1.push(...[7, 8, 9]); // array1 now equals [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Spread for strings

Because strings are also iterable they can be used with the spread operator.

An example is to split a string into an array of characters:

```javascript
var string = 'abc';

// with the .split method
string.split(''); // ['a', 'b', 'c']

// with spread
[...string]; // ['a', 'b', 'c']
```

## Rest and spread for object properties

There is a current draft for [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread).
These features are likely to be included in the ES2017 standard.

```javascript
// rest for object destructuring
let { a, ...otherProps } = { a: 1, b: 2, c: 3 }; // a = 1, otherProps = { b: 2, c: 3 }

// spread for object properties
let thing = { a: 1, b: 2 };
{ ...thing, c: 3 }; // produces a new object { a: 1, b: 2, c: 3 }
```

## Next

__[Enhanced object literals](enhanced-object-literals.md)__

## Resources

* MDN - [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* MDN - [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
* Dr. Axel Rauschmayer, Exploring ES6 - [4.9 - From `arguments` to rest parameters](http://exploringjs.com/es6/ch_core-features.html#_from-arguments-to-rest-parameters)
* Dr. Axel Rauschmayer, Exploring ES6 - [4.10 - From `apply()` to the spread operator](http://exploringjs.com/es6/ch_core-features.html#_from-apply-to-the-spread-operator-)
* * Dr. Axel Rauschmayer, Exploring ES6 - [4.11 - From `concat()`` to the spread operator](http://exploringjs.com/es6/ch_core-features.html#_from-concat-to-the-spread-operator-)
* Dr. Axel Rauschmayer, Exploring ES6 - [11.4 - Rest parameters](http://exploringjs.com/es6/ch_parameter-handling.html#sec_rest-parameters)
* Dr. Axel Rauschmayer, Exploring ES6 - [11.8 - The spread operator](http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator)
