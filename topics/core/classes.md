# Classes

ES6 introduces new syntax to make it easier to define classes.

This does not introduce any new features but is usually more convenient than writing constructor functions.

## Background &mdash; constructor functions

Previously the only way to define classes in JavaScript was to write constructor functions.

For example:
```javascript
function Animal(name, legs) {
  // define instance properties
  this.isAlive = true;
  this.legs = legs;
  this.name = name;
}

// define prototype methods
Animal.prototype.getLegCount = function() {
  return this.legs;
};
Animal.prototype.die = function() {
  this.isAlive = false;
};

var barry = new Animal('barry', 7); // instantiate a new animal

console.log(barry.name); // logs 'barry'
barry.die();
console.log(barry.isAlive); // logs false
```

## Basic syntax

The new syntax using the `class` keyword is much more similar to that found in other languages.
The explicit syntax also adds clarity. Constructor functions are not always easy to distinguish from other functions.

```javascript
class Animal {

  constructor(name, legs) {
    // define instance properties
    this.isAlive = true;
    this.legs = legs;
    this.name = name;
  }

  // define prototype methods
  getLegCount() {
    return this.legs;
  }

  die() {
    this.isAlive = false;
  }

}

var barry = new Animal('barry', 7); // instantiate a new animal

console.log(barry.name); // logs 'barry'
barry.die();
console.log(barry.isAlive); // logs false
```

The `constructor` pseudo-method is equivalent to the body of constructor function
It is given the constructor arguments when a new object is instantiated.

## Extending classes

It is also possible to extend another class with the `extends` keyword.

```javascript
class AmputeeDog extends Animal {

  constructor(name, legs, missingLegs) {
    super(name, legs);
    this.missingLegs = missingLegs;
  }

  getLegCount() {
    return super.getLegCount() - this.missingLegs;
  }

  amputate() {
    this.missingLegs++;
  }

}

const dog = new AmputeeDog('gary', 7, 0); // instantiate a new amputee dog

console.log(dog.missingLegs); // logs 0
dog.amputate();
console.log(dog.missingLegs); // logs 1
```

### Overriding methods

As seen in the example above, it is possible to override methods when extending classes.

The `constructor` pseudo-method can call the constructor of the parent class by calling the `super()` function.

It is also possible to call other parent class methods via the `super` object.
These calls are correctly bound to the object instance.

Prior to ES6 it was necessary to make convoluted calls with manual binding to the instance such as `Animal.prototype.getLegCount.call(this)`.

### Extending built-in classes

Built-in classes such as `Error` and `Date` can be extended in modern JavaScript.
This was not allowed in ES5.

## Static methods

Static methods can be defined on a class by prefixing the method with the `static` keyword.

Static methods are attached directory to the class and not to the prototype.
This means that they can not be called from a object instance.

```javascript
class Thing {

  static getN() {
    return 9;
  }

}

// call static method
console.log(Thing.getN()); // logs 9
```

## Static data properties

Currently there is no support for static data properties.

_TODO: add workarounds_

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [15 - Classes](http://exploringjs.com/es6/ch_classes.html)
* MDN - [Inheritance and the prototype chain](https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
