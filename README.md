# Dunedin Modern Javascript

A series of tutorials/workshops/hacks for learning modern JavaScript

Interactive workshops are best because it's so easy for people to open up their browser console, Node.js, jsbin.com, or similar.

By modern JavaScript we mean:

* features from the ES5 spec which recently came into mainstream use (usually since IE8 support was dropped)
* features from the ES6/ES2015 and ES7/ES2016 specs -- most of these are supported by current browsers
* proposed and draft features which can already be used with Babel or TypeScript


## Proposed workshops

### First workshop:

Forget about browser APIs, DOM, libraries, etc... lets go back to basics to cover some existing JS idioms and how modern language features can improve them. Sort of like Douglas Crockford's _JavasScript: The Good Parts_ but updated.
This would cover basic things which most people with exposure to other languages (especially Python, Ruby, PHP) should understand:
* block scoping with const and let
* function binding including fat arrow
* template strings (interpolation)
* enhanced object literal features
* destructuring assignment
* rest and spread
* default param values

### Other topics which are big enough for entire workshops -- suggested in order:

1. Native Array and Object methods
2. Class and module syntax -- also cover how no browsers can currently load modules
3. High-level overview of Node.js, NPM, and CommonJS modules
4. Webpack part 1 -- dev server, module bundling and using loaders (examples with ESLint, Babel, JSX, andTypeScript would be good)
5. Webpack part 2 -- versioning, loading non-JS assets, using plugins, shimming awful old libraries :(
5. Unit testing with Jest*

_*Unit testing is something which is very unstandardised at this stage -- suggestions on this are welcome_

### Also some niche topics which are still entry-level:

* Lodash and functional composition with Lodash/FP
* Type annotations with Flow
* End-to-end testing with WebDriver.io (Selenium)
* Virtual DOM in React and other implementations -- what happens when we compile that crazy JSX source!
* Redux and immutable data structures -- how to use them for application state -- standalone then with React

### And some topics which may be more niche or only relevant to those with extensive JS knowledge:

* CSS modules in React
* Webpack part 3 -- hot module reloading with React, time-travel
* React Native -- learn once, write everywhere for web, iOS, and Android
* Future module loading -- JSPM, SystemJS, HTTP/2 (maybe also Webpack 2)
* Iterators, generators, symbols, promises
* Decorators and an introduction to Angular 2 -- Using draft language features now!
* Proxy and Reflect
* New data structures -- Map, Set, WeakMap, WeakSet

## Contributing:

We're looking for any suggestions on what people of all experience levels would like to learn about. Feel free to contact me directly at matt@mnorrish.co.nz or open a pull request with changes.
