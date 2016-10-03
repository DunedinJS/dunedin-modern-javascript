# Block scope

Unlike varibles declared with `var` which are function-scoped, those declared with `let` or `const` are block-scoped.

The lack of block scope has been long seen as one of the 'bad parts' of JavaScript.
It was particularily troublesome when using `for` or `while` loops to iterate over collections as any varaibles scoped not to the block to the enclosing function.

First, here's an example of existing scope bahavoir with `var`:
```javascript
var a = 0; // declared in the global or module scope depending on the environment

function someCoolFn() {
  // the function has its own scope.
  // variables declared inside the function are not accessible outside the function
  var b = 1;
  
  // but we can access variables in any scopes above this function
  console.log(a); // logs 0
  
  if (true) {
    // blocks now have their own scope but it only applies to let and const
    // var declarations are 'hoisted' to the above function scope
    var c = 2;
    console.log(c); // logs 2
  }

  console.log(c); // logs 2 because c has been hoisted into the function scope
}

someCoolFn();

console.log(a); // logs 0

// both throw ReferenceError because b and c are not declared in scope
console.log(b);
console.log(c);
```

Block-scope applies for variables declared with `let` and constants declared with `const`.
Here's a version modified to use `let` and `const`:

```javascript
let a = 0; // declared in the global or module scope depending on the environment

function someCoolFn() {
  // the function has its own scope
  // variables declared inside the function are not accessible outside the function
  let b = 1;
  
  // but we can access variables in any scopes above this function
  console.log(a); // logs 0
  
  if (true) {
    // blocks now have their own scope but it only applies to let and const
    // let and const declarations not are hoisted
    const c = 2;
    console.log(c); // logs 2
  }

  console.log(c); // throws a ReferenceError because c is not declared in the functions scope
}

someCoolFn();

console.log(a); // logs 0

// both throw ReferenceError because b and c are not declared in scope
console.log(b);
console.log(c);
```

## What is a block?

A block is anything wrapped in a pair of curly braces `{}`. This includes `if...else`, `for`, and `switch` among others.

Plain blocks can also be used although not they're not a common occurrence. For example:
```javascript
const a = 0;

// a plain block
{
  const a = 1; // different const with same name declared in the block scope
  const b = 2;
  console.log(a); // logs 1
  console.log(b); // logs 2
}

console.log(a); // logs 0
console.log(b); // throws ReferenceError because b is not in scope
```

## Immediately-Invoked Function Expressions

Immediately-Invoked Function Expressions (IIFE) are a frequently used idiom in old/existing JavaScript to create a new scope.
The new scope can be used to isolate its inner variables from the outer scope.
A function is defined and called immediately for single use.
Because the IIFE has it's own scope it emulates block scope behaviour.

```javascript
// old JavaScript

// outer scope
var x = 1;

(function() {
  // IIFE scope
  var y = 2;
  x += y;
})();

console.log(x); // logs 3
```

In modern JavaScript it is possible to use a block with `let` or `const` references instead of an IIFE.

```javascript
// modern JavaScript

// outer scope
let x = 1;

{
  // block scope
  const y = 2;
  x += y;
}

console.log(x); // logs 3
```

An exception is where the IIFE returns a value. Unlike functions, blocks cannot return values.

```javascript
// old JavaScript

// outer scope
var x = (function() {
  // IIFE scope
  var y = 2;
  return y;
})();

console.log(x); // logs 2
```

In modern JavaScript is more usual to use an arrow function (covered in [this section](./arrow-functions.md)).

```javascript
// modern JavaScript

// outer scope
const x = (() => {
  // IIFE scope
  const y = 2;
  return y;
})();

console.log(x); // logs 2
```

However, these can usually be refactored into blocks.

```javascript
// modern JavaScript

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
