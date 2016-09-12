# `let` and `const`

## Initializing

In existing JavaScript it's fine to declare a variable with `var` without initializing its value
```javascript
var v;
```

The same applies for variables declared with `let`
```javascript
let l;
```

But `const` must be initialized on declaration
```javascript
const c1 = true; // no problem
const c2; // throws a SyntaxError
```

## Assignmnent

In terms of assignment, variables declared with `let` behave like those declared with `var`.
They can be re-assigned with a different value.

```javascript
var v = 0; // an old-fashioned variable
let l = 0; // a new varialbe declared with let

// log the current values of our var, let, and const
console.log(`var: ${ v }`, `let: ${ l }`, `const: ${ c }`);

// re-assign the var and let variables
v = 1;
l = 1;

// log the new values of the variables
console.log(`var: ${ v }`, `let: ${ l }`);
```

Constants which are declared with `const` can not be re-assigned.
```javascript
const c = 0; // a new constant declared with const

// attempt to re-assign the constant
c = 1; // throws a TypeError
```

## Block scope

Unlike varibles declared with `var` which are function-scoped, those declared with `let` or `const` are block-scoped.

> The lack of block scope has been long seen as one of the 'bad parts' of JavaScript.
> It was particularily troublesome when using `for` or `while` loops to iterate over collections as any varaibles scoped not to the block to the enclosing function.

First, here's an example of existing scope bahavior with `var`:
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

### What is a block?

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

## Resources

* MDN - [const](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)
* MDN - [let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
* MDN - [Varible Scope and Hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
* MDN - [Block Statements](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/block)
* MDN - [Closures](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
