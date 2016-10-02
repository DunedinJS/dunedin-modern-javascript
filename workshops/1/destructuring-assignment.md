# Destructuring Assignment

## Syntax

Destructuring assignment makes it easy to extract values from arrays or objects into variables.

### For arrays

Assignment is based on the item positions in the array.

```javascript
const things = [1, 2, 3];
const [a, b, c] = things; // a = 1, b = 2, c = 3
```

### For objects

Assignment is based on the object keys.

```javascript
const things = { a: 1, b: 2, c: 3 };
const { a, b, c } = things; // a = 1, b = 2, c = 3
```

It is also possible to declare different variable names than the object keys.
Any name given on the right side of the `:` will be defined as a variable.

```javascript
const things = { a: 1, b: 2, c: 3 };
const { a: arthur, b: betty, c } = things; // arthur = 1, betty = 2, c = 3
```

### Default parameter values

It is also very common to use default values with destructuring assignment.
See [Default parameters](./default-parameters.md) for more detail.

```javascript
const [a = 0, b = 0, c = 0] = [1, 2]; // a = 1, b = 2, c = 0

const { arthur = 0, betty = 0 } = { betty: 30 }; // arthur = 0, betty = 30
```

### With existing variables

Object destructuring expressions must be wrapped with parentheses if they are separate from the variable declaration.
This is because JavaScript statements must not begin with curly braces.

```javascript
let a, b;
({ a, b } = { a: 1, b: 2 }); // a = 1, b = 2
{ a, b } = { a = 3, b = 4 }; // throws a SyntaxError
```

## Usage

Destructuring assignment can dramatically improve a lot of tasks which were painful to write in old JavaScript (ES5 or below).

### Destructuring strings

_Any iterable data type can be used for array destructuring. This includes `Array`, `String`, and `Set` among others -- also custom classes._

```javascript
const city = 'Dunedin';

// old JavaScript
var oldFirst = city[0];
var oldSecond = city[1];

// with destructuring assignment
const [first, second] = city;
```

### Object as function parameter

When an object is given as a function parameter and certain values need to be accessed.

```javascript
// old JavaScript
function add(options) {
  options = options === undefined ? {} : options; // provide an empty object if options is not defined
  var a = options.a === undefined ? 0 options.a: ; // provide default value if object value is not defined
  var b = options.b === undefined ? 0 options.b;

  return a + b;
}

// with destructuring assignment and default parameter values
function add({ a = 0, b = 0 } = {}) {
  return a + b;
}
```

### Accessing deep values

When safely accessing values from deep/nested objects or arrays.
Old JavaScript required us to check values through each step of the chain to avoid errors if undefined values were encountered.

```javascript
const deepData = {
  name: 'Mars',
  moons: [
    { name: 'Phobos', orbitalPeriod: 7.66 },
    { name: 'Deimos', orbitalPeriod: 30.35 },
  ],
};

// old JavaScript
var oldPlanet = deepData.name; // 'Mars'
var oldFirstMoon = deepData.moons && deepData.moons[0] && deepData.moons[0].name; // 'Phobos'

// with destructuring assignment and default parameter values
const {
  name: planet,
  moons: [
    { name: firstMoon } = {} // a default object to avoid accessing key from undefined value
  ] = [] // a default array to avoid accessing item from undefined value
} = deepData; // planet = 'Mars', firstMoon = 'Phobos'
```

### Swapping values of variables

```javascript
let a = 1;
let b = 2;

// old JavaScript
var temp = a; // need an extra variable to store a value while swapping
a = b; // a = 2
b = a; // b = 1

// with destructuring assignment -- swap back to original values
[a, b] = [b, a]; // a = 1, b = 2
```

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 [Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
* MDN - [Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
