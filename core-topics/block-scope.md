# Block scope

Unlike varibles declared with `var` which are function-scoped, those declared with `let` or `const` are block-scoped.
Block scope is one of the most important features introduced in modern JavaScript.

_If you're not familiar with `let` and `const` see [this topic](./let-and-const) first._

## What is a block?

A block is a set of curly braces `{}` which can wrap statements. This includes `if...else`, `for`, and `switch` among others.
Plain blocks can also be used although not they're not a common occurrence.

```javascript
if (1 < 2) {
  console.log('inside an if block');
} else {
  console.log('inside an if block');
}

{
  console.log('inside a plain block');
}
```

## Background &mdash; function scope only

> The lack of block scope has been long seen as one of the 'bad parts' of JavaScript.
> This often caught out programmers with experience in other C-like languages who were tricked by JavaScript's block syntax.
>
> It can be particularily troublesome when using `for` or `while` loops to iterate over collections as any references
> are scoped not to the block but to the enclosing function.

Here's an example of existing scope bahavior with `var`:
```javascript
var a = 1;
console.log(a, b); // logs 1, undefined

if (a > 0) {
  var b = 2;
}

console.log(a, b); // logs 1, 2
```

This appears unusual to many because conventional wisdom from other languages
would make us think that variable `b` is not accessible outside the `if` block.
But this works because old JavaScript only has function scope but not block scope.

The above code is equivalent to this:
```javascript
var a = 1;
var b; // b is 'hoisted'
console.log(a, b); // logs 1, undefined

if (a > 0) {
  b = 2;
}

console.log(a, b); // logs 1, 2
```

The only way to introduce new scopes in old JavaScript was to use functions.
```javascript
var a = 1;
var b;
console.log(a, b); // logs 1, undefined

function getN() {
  // function scope
  var b; // a different variable to b in the top-level scope

  if (a > 0) {
    b = 2;
  }

  console.log(a, b); // logs 1, 2
}

getN();

console.log(a, b); // logs 1, undefined
```
As you can see, variable `b` in the top scope is a completely different variable to `b` in the function.
It's not good practice to shadow variable names like this but it demonstrates the point well.

All existing behaviour remains in modern JavaScript for variables declared with `var`.

## Using block scope

Block-scope applies for references declared with `let` and constants declared with `const`.
Here's a version modified to use `let` and `const`:

```javascript
const a = 1;

if (a > 0) {
    // block scope
    const b = 2;
    let c = 3;
    console.log(a, b, c); // logs 1, 2, 3
}

console.log(a, b, c); // throws a ReferenceError
```

Constant `b` and variable `c` are declared in the block scope and therefore not accessible from the outer scope.

## Immediately-Invoked Function Expressions

Immediately-Invoked Function Expressions (IIFE) are a frequently used idiom in old/existing JavaScript to create new scopes.
The new scope can be used to isolate its inner variables from the outer scope.
A function is defined and called immediately for single use.
Because the IIFE has its own scope it emulates block scope behaviour.

```javascript
// old JavaScript with IIFE
var a = 1;

if (a > 0) {
  (function() {
    // function scope
    var b = 2;
    console.log(a, b); // logs 1, 2, 3
  })();
}

console.log(a, b); // throws a ReferenceError
```

In modern JavaScript it is possible take advantage of block scope with `let` or `const` references instead of using an IIFE.

An exception is where the IIFE returns a value. Unlike functions, blocks do not return values.

```javascript
// outer scope
const x = (function() {
  // function scope
  const y = 2;
  return y;
})();

console.log(x); // logs 2
```

However, these can usually be refactored into blocks.

```javascript
// outer scope
let x;
{
  // block scope
  const y = 2;
  x = y;
}

console.log(x); // logs 2
```

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [9 - Variables and Scoping](http://exploringjs.com/es6/ch_variables.html)
* MDN - [Varible Scope and Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
* MDN - [Block Statements](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block)
* MDN - [Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
* Dr. Axel Rauschmayer, Exploring ES6 - [4.3 - From IIFEs to blocks](http://exploringjs.com/es6/ch_core-features.html#_from-iifes-to-blocks)
* Dr. Axel Rauschmayer, Exploring ES6 - [12.3.5 - Avoid IIFEs in ES6](http://exploringjs.com/es6/ch_callables.html#sec_iifes-in-es6)
