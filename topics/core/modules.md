# Modules

ES6 introduces a module syntax much like that found in other programming languages
such as Python.

_This only covers ES6 modules. Also see [CommonJS modules](../common/commonjs-modules.md)._

## Background

JavaScript previously had no built-in feature for modules.
It has been usual to write all code in one JavaScript file or structure
applications around global objects to share data.

However, those solutions can be fragile for large codebases and various solutions
emerged which define module formats and provide tooling to package numerous source
scripts into a single file or load modules on-demand in web browsers.

The most notable module formats are [CommonJS](../common/commonjs-modules) which is used by Node.js and the very ugly Asynchronous Module Definition (AMD).

## Why static modules?

While other module formats allow dynamic imports &mdash; for example only import another
module if a condition is met &mdash; the ES6 module design is static.
This is less flexible but allows code to be statically analysed.

## Syntax

Only one module can be defined per file.

Imports and exports must be at the top level.
It is a SyntaxError to put them inside a block or function.

Imports are hoisted to the top of a file so for clarity they should always be written at the top.

Cyclic/circular dependencies __are__ allowed.

### Importing nothing

A module's code is executed the first time it is imported.
This allows us to import a module without using any of its data.

```javascript
// ==== whatever.js ====
console.log('whatever');
```

```javascript
// ==== main.js ====
import './whatever'; // logs 'whatever' when this file is loaded
```

### Named export and import

Each module can export multiple values by using named exports.
The names are taken from variable or function names.

```javascript
// ==== a.js ====
const text = 'Dunedin'

// export the string with the name text
export text;

// export the function with the name hello
export function hello() {
  return `Hello, ${text}!`
}
```

Named exports can be imported into other modules by name.
This looks similar to [object destructuring](./destructuring-assignment.md) but it's not the same.

```javascript
// ==== b.js ====
import { text, hello } from './a';

console.log(text); // logs 'Dunedin'
console.log(hello()); // logs 'Hello, Dunedin!'
```

It is also possible to alias named exports with the `as` keyword when importing them.

```javascript
// ==== b.js ====
import { text, hello as helloA } from './a';

console.log(text); // logs 'Dunedin'
console.log(helloA()); // logs 'Hello, Dunedin!'
```

### Namespace import

To import all named exports as object properties with the `*` sign.

```javascript
// ==== b.js ====
import * as a from './a';

console.log(a.text); // logs 'Dunedin'
console.log(a.hello()); // logs 'Hello, Dunedin!'
```

### Default export and import

Modules can also define a default export by using the `default` keyword.

```javascript
// ==== c.js ====
export const hello = 'Bonjour';

export default class {
  constructor(id) {
    this.id = id;
  }
  hello() {
    return `${hello}, ${this.id}!`;
  }
}
```

Importing the default export is even more simple.

```javascript
// ==== d.js ====
import A from './a';

const thing = new A('Dunedin');

console.log(thing.hello()); // logs 'Bonjour, Dunedin!'
```

We can also combine the default and named exports. The default always goes first.

```javascript
// ==== d.js ====
import A, { hello } from './a';

const thing = new A('Dunedin');

console.log(thing.hello()); // logs 'Bonjour, Dunedin!'
console.log(hello); // logs 'Bonjour'
```

Namespace imports can be used in this format too `import A, * as aLib from './a';`.
The default export is not included in the namespace import object.

### Re-exporting

A module can export values which are directly imported from another module.
This can be useful when composing larger modules from many smaller ones.

```javascript
// re-export all named exports (except default)
export * from './another-module';

// re-export default export as default
export { default } from './another-module';
```

These also accept different combinations of import syntax.

## Imports as views

Say we have module `a.js` which exports variable `x` and an `increment` function which manipulates `x`.
```javascript
// ==== a.js ====
export let x = 0;
export function increment() { x++; }
```

Module `b.js` imports `x` and `increment` from `a.js`.
The imported values are "live" read-only views.
Instead of being imported as normal variables they are pointers.

This means that when they change in the module which they are exported from,
the changed values are accessible in the module which they are imported.
```javascript
// ==== b.js ====
import { x, increment } from './a';

console.log(x); // logs 0
increment();
console.log(x); // logs 1
```

This feature is what allows cyclic dependencies to be used.

## Current support

Currently, web browsers do not support modules natively as there is no finalised
standard on how to load modules.
Therefore modules are currently consumed by third-party tools such as Webpack to
package source code into browser-ready files.

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [16 - Modules](http://exploringjs.com/es6/ch_modules.html)
