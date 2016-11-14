# `let` and `const`

The term _reference_ is used throughout this page instead of _variable_ to encompass both variables and constants.

## Syntax

Modern JavaScript introduces the `let` keyword for local variables and  the `const` for constants.
These are used is the same way as the existing `var` keyword.

## Initializing

In existing JavaScript it's fine to declare a reference with `var` without initializing its value
```javascript
var v;
```

The same applies for references declared with `let`
```javascript
let l;
```

But `const` must be initialized on declaration
```javascript
const c1 = true; // no problem
const c2; // throws a SyntaxError
```

## Assignmnent

In terms of assignment, references declared with `let` behave like those declared with `var`.
They can be re-assigned with a different value.

```javascript
var v = 0; // an old-fashioned var reference
let l = 0; // a reference declared with let

// log the current values the references
console.log(v, l); // logs 0, 0

// re-assign the references
v = 1;
l = 1;

// log the new values of the references
console.log(v, l); // logs 1, 1
```

Constants which are declared with `const` cannot be re-assigned.
```javascript
const c = 0; // a new constant declared with const

// attempt to re-assign the constant
c = 1; // throws a TypeError
```

Deep values of constants can be mutated.
Only re-assignment of the actual constant is restricted -- `const` does not make the value immutable.
```javascript
const a = [];
a.push('something'); // adds item to the array -- not a problem
console.log(a) // logs ['something']

const b = {};
b.foo = 'bar'; // adds property to the object -- not a problem
console.log(b); // logs {foo: 'bar'}

b = {}; // throws a TypeError
```

## Block scope

Unlike references declared with `var`, those declared with `let` or `const` are block-scoped.
See [Block scope](./block-scope.md) for details as it is one of the most important features introduced in modern JavaScript.

## Usage

> It's generally accepted when writing modern JavaScript that `const` is preferred wherever possible.

> Use `let` when there is a need to re-assign a reference.

> Avoid `var` completely because there is no good reason to use it.

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [4.1 - From `var` to `let`/`const`](http://exploringjs.com/es6/ch_core-features.html#_from-var-to-letconst)
* MDN - [const](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)
* MDN - [let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
