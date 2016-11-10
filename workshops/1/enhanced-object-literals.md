# Enhanced object literals

Modern JavaScript introduces enhanced syntax for object literals which makes them more convenient to to write.

## Method definitions

A more concise syntax for defining methods in object literals is available.
Prior to ES6 we had to write function expressions as object properties.

```javascript
// old JavaScript
var oldThing = {
  someMethod: function(x) {
    return x;
  }
};

// modern JavaScript
const newThing = {
  someMethod(x) {
    return x;
  }
};
```

## Property value shorthands

A more convenient syntax to assign values from variables/constants to object properties.
The property key uses the name of the variable.

```javascript
const x = 1;
const y = 2;

// without property value shorthands
const thing1 = { x: x, y: y };

// with property value shorthands
const thing2 = { x, y };
```

## Computed property keys

Computed keys/names in object literals make it simple to assign dynamic keys for properties and methods.  

An expression can be put inside brackets `['na' + 'me']` and its value is used as the key.  
This syntax is used because it mirrors the bracket notation used to access properties `thing['name']`. 

```javascript
const suffix = 'Mate';
const thing = {
  ['first' + suffix]: 'Alice',
  ['second' + suffix]: 'Barry',
  ['third' + suffix]() { return 'Charlie'; },
};

console.log(thing.firstMate, thing.secondMate, thing.thirdMate()); // logs 'Alice', 'Barry', 'Charlie'
```

_Computed keys can also be used for special method types including getters, setters, and generators.
The bracket notation is applied in exactly the same way but we won't cover specific examples here._

Prior to ES6 there was no way to use computed keys with object literals.
The only way to use computed keys was to set properties on an existing object.

```javascript
// old JavaScript
var thing = {}; // object literal
thing['some' + 'thing'] = 1; // a computed property key -- thing is now { something: 1 }
```

## Next

This is the end of __[Workshop 1](../1/overview.md)__

Continue to __[Workshop 2](../2/overview.md)__

## Resources

* MDN - [Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* Dr. Axel Rauschmayer, Exploring ES6 - [14.2 - New features of object literals](http://exploringjs.com/es6/ch_oop-besides-classes.html#_new-features-of-object-literals)
