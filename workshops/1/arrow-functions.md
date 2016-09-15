# Arrow Functions

## Syntax

Arrow functions are a new shorter syntax for anonymous functions. They're much like lambdas in Python or blocks, procs, and lambdas in Ruby.
```javascript
// normal anonymous function sytax
const fn1 = function() {
  return 1 + 2;
};

// arrow syntax
const fn2 = () => 1 + 2;
```

Curly-braces can be omitted if the function body is a single expression.
The expression result is implicitly returned.
```javascript
const fn = (x, y) => x + y;
```

Curly-braces must be used if the function body has multiple expressions.
The expression result is only returned with the `return` keyword like a conventional function.
```javascript
const fn = (x, y) => {
  const z = y + 2;
  return x + z;
};
```

Parentheses are optional around parameters when the function takes only one parameter but required otherwise.
```javascript
const fn1 = x => x + 1;

const fn2 = (x, y) => x + y;
```

Wrap with parentheses when returning an object literal expression.
```javascript
const fn = (x, y) => ({a: x, a: y});
```

## Binding

_If you're not familiar with how the `this` keyword works in JavaScript you're best to refer to the [MDN documentation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)._

Unlike normal functions, the `this` value is always bound to the `this` value of the scope in which the arrow function is defined.

The arrow function below uses the `this` value of the surrounding context.
```javascript
() => this.x;
```
An equivalent is to use the function's `.bind` method which returns a new function bound to the given value.
```javascript
function() {
  return this.x;
}.bind(this);
```
Another equivalent is to store a reference to the `this` value of the containing scope.
Most style guides use a convention of naming such variables `self` or `_this`.
```javascript
const self = this;
function() {
  return self.x;
}
```

## Usage

Because arrow functions are anonymous and because of their binding they are best suited to non-method usage.

For example as a callback for array iteration methods:
```javascript
[1, 2, 3].map(n => n * 2); // evaluates to [2, 4, 6]
```

Or where a function is given as an event handling callback:
```javascript
const thing = {
  message: 'Great success!',
  logIn1000() {
     // the this value is the object instance here -- this === thing

     setTimeout(() => {
       // the this value here is the same as in the method -- this === thing
       console.log(this.message);
     }, 1000);
  },
};

thing.logIn1000(); // logs 'Great success!' after 1000 milliseconds
```

Arrow functions are not suitable when the `this` context of the call needs to be used instead of the `this` context of where the function is defined.
In that case conventional functions need to be used.

## Example

```javascript
const thing = {

  makeFn: function() {
    // return an anonymous function which returns its own bound this value -- not the this value of the method
    return function() {
      return this;
    };
  },

  makeArrowFn: function() {
    // return an anonymous function which returns the this value of the method
    return () => this;
  },

};

const fn = thing.makeFn();
const arrowFn = thing.makeArrowFn();

// logs false because fn is not bound to thing
console.log(fn() === thing);

// logs true because arrowFn is bound to thing
console.log(arrowFn() === thing);

// both log true when fn is manually bound to thing
console.log(fn.call(thing) === thing);
console.log(fn.bind(thing)() === thing);

// both log true even though we manually bound to something else
// there is no way to break the binding which makes arrow functions safe to call from any context
console.log(arrowFn.call({}) === thing);
console.log(arrowFn.bind({})() === thing);
```

## Resources

* MDN - [Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* MDN = [this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
* MDN - [Function.prototype.bind()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
* MDN - [Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
