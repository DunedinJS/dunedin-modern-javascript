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
    super(name, legs); // calls the parent class constructor
    this.missingLegs = missingLegs;
  }

  getLegCount() {
    const legCount = super.getLegCount(); // calls the parent class method
    return legCount - this.missingLegs;
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

Like functions, classes can also be used as anonymous expressions and assigned
to variables.

```javascript
const SomeClass = class {};
```

Also like functions, class expressions can be named.

```javascript
const SomeClass = class TheClass {};
```

### Overriding methods

As seen in the example above, it is possible to override methods when extending classes.

The `constructor` pseudo-method can call the constructor of the parent class by calling the `super()` function. The `super()` function must be called before `this` can be used.

It is also possible to call other parent class methods via the `super` object.
These calls are correctly bound to the object instance.

Prior to ES6 it was necessary to make convoluted calls with manual binding to the instance such as `Animal.prototype.getLegCount.call(this)`.

### Extending built-in classes

Built-in classes such as `Error`, `Array`, and `Date` can be extended in modern JavaScript.
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

Currently there is no support for static data properties with the `static`
keyword but they can be easily assigned directly to the class.

```javascript
class Thing {}
Thing.someValue = 'abc';

console.log(Thing.someValue); // logs 'abc'
```

## Getters and setters

ES5 introduced special `get` and `set` keywords for getter and setter methods.
These are special methods which are called when an object property is accessed or assigned.
They can be very useful for computed properties.

`get` methods expect no arguments. `set` methods expect one argument.

Getters and setters have not been used frequently in the past because of lack of browser support.

Below is an example of ES5 getters and setters on a plain object literal.
Notice that the getter and setter methods are not called directly &mdash; instead
they are called behind the scenes with normal object property access and assignment.
```javascript
const thing = {
  get x() {
    return 'paper';
  },
  set x(value) {
    console.log(value);
  }
};

console.log(thing.x); // logs 'paper'
thing.x = 'rock'; // logs 'rock'
```

ES6 classes also support the `get` and `set` keywords for methods.

```javascript
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  get area() {
    return this.width * this.length;
  }

  set area(value) {
    this.length = this.area / this.width;
  }
}

const x = new Rectangle(4, 5);

console.log(x.area); // logs 20

x.area = 100;
console.log(x.area); // logs 100
console.log(x.width, x.length); // logs 4, 25
```

The `static` keyword can also be used with getters and setters to simulate static properties.

## Computed method names

Just like computed property keys for [Enhanced object literals](./enhanced-object-literals),
computed method names can be used with classes by wrapping an expression in brackets `[]`.

```javascript
class Thing {
  ['some' + 'Method']() {
    return 99;
  }
}
const x = new Thing();
console.log(x.someMethod()); // logs 99
```

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [15 - Classes](http://exploringjs.com/es6/ch_classes.html)
* Dr. Axel Rauschmayer, Speaking JS - [17 - Objects and Inheritance](http://speakingjs.com/es5/ch17.html)
* MDN - [Inheritance and the prototype chain](https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
