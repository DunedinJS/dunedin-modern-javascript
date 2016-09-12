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

`() => this.x` is equivellent to `function() { return this; }.bind(this);`

```javascript
const thing = {
  
  x: 'hello',
  
  makeFn: function() {
    // return an anonymous function which returns its own bound this value -- not the this value of the method
    return function() {
      return this
    };
  },
  
  makeFnBind: function() {
    // return an anonymous function which returns the this value of the method
    return function() {
      return this
    }.bind(this);
  },
  
  makeArrowFn: function() {
    // return an anonymous function which returns the this value of the method
    return () => this;
  },
  
};

const fn = thing.makeFn();
const boundfn = thing.makeFnBind();
const arrowFn = thing.makeArrowFn();

// logs false because the fn function is not bound to thing
console.log(fn() === thing);

// logs true because the boundfn function is bound to thing
console.log(boundfn() === thing);

// logs true because the arrowFn function is bound to thing
console.log(arrowFn() === thing);

// both log true when manually bound to thing
console.log(fn.call(thing) === thing);
console.log(fn.bind(thing)() === thing);

// all log true even though we manually bound to something else
// there is no way to break the binding which 
console.log(boundfn.call({}) === thing);
console.log(boundfn.bind({})() === thing);
console.log(arrowFn.call({}) === thing);
console.log(arrowFn.bind({})() === thing);
```

## Resources

* MDN - [Arrow Funcitons](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
