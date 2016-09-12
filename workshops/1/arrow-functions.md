# Arrow Functions

Arrow functions are a new shorter syntax for anonymous functions.
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


Unlike normal functions, the `this` value is always bound to the `this` value of the scope in which the arrow function is defined.

The arrow function:
```javascript
() => this.x`
```
is equivellent to using the `.bind` method to bind the `this` value from the containing scope:
```javascript
function() {
  return this;
}.bind(this);
```
or storing a reference to the `this` value of the containing scope:
```javascript
const self = this;
function() {
  return self;
}
```

## Example

```javascript
const thing = {
  
  makeFn: function() {
    // return an anonymous function which returns its own bound this value -- not the this value of the method
    return function() {
      return this;
    };
  },
  
  makeFnBind: function() {
    // return an anonymous function which returns the this value of the method
    return function() {
      return this
    }.bind(this);
  },
  
  makeFnSelf: function() {
    // return an anonymous function which returns the this value of the method
    const self = this;
    return function() {
      return self;
    }
  },
  
  makeArrowFn: function() {
    // return an anonymous function which returns the this value of the method
    return () => this;
  },
  
};

const fn = thing.makeFn();
const boundfn = thing.makeFnBind();
const selfFn = this.makeFnSelf();
const arrowFn = thing.makeArrowFn();

// logs false because the fn function is not bound to thing
console.log(fn() === thing);

// all log true because the functions are bound to thing
console.log(boundfn() === thing);
console.log(selfFn() === thing);
console.log(arrowFn() === thing);

// both log true when manually bound to thing
console.log(fn.call(thing) === thing);
console.log(fn.bind(thing)() === thing);

// all log true even though we manually bound to something else
// there is no way to break the binding which makes these functions safe to call from any context
console.log(boundfn.call({}) === thing);
console.log(boundfn.bind({})() === thing);
console.log(selfFn.call({}) === thing);
console.log(selfFn.bind({})() === thing);
console.log(arrowFn.call({}) === thing);
console.log(arrowFn.bind({})() === thing);
```

## Resources

* MDN - [Arrow Funcitons](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
