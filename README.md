# Dunedin Modern Javascript

A series of tutorials/workshops/hack-sessions for learning modern JavaScript.

This is intended to cater to a broad range of experience levels. Some exposure to old-fashioned JavaScript or mainstream intepreted programming languages such as Python, Ruby, or PHP is a good base entry level.

Workshops contain a targetted set of theory but are best delivered interactively. It's very easy for people to open up their browser console, Node.js, jsbin.com, or similar to follow along and test out code samples.

__By modern JavaScript we mean:__

* features from the ES5 spec which recently came into mainstream use (usually since IE8 support was dropped)
* features from the ES6/ES2015 and ES7/ES2016 specs -- most of these are supported by current browsers
* proposed and draft features which can already be used with Babel or TypeScript


## Proposed workshops

__[Workshop 1](workshops/1/overview.md):__ back to basics to cover some existing JS idioms and how modern language features can improve them. An introduction to new syntax and basic language features.

__[Workshop 2](workshops/2/overview.md):__ gain a practical taste of modern JavaScript by starting with a small starter project and building a simple application with React and some of the modern features learnt in Workshop 1.

### Other topics which are big enough for entire workshops -- suggested in order:

1. Classes, native array and object methods, iterators, generators, and symbols
1. Fetch API and Promises
1. CommonJS, using [NPM](https://docs.npmjs.com/), ES6 modules and how browsers can't currently load them
1. [Webpack](https://webpack.github.io/) part 1 -- dev server, module bundling and using loaders (examples with [ESLint](http://eslint.org/), [Babel](https://babeljs.io/), [JSX](https://facebook.github.io/jsx/), and [TypeScript](https://www.typescriptlang.org/))
1. Webpack part 2 -- versioning, loading non-JS assets, using plugins, shimming awful old libraries :(
1. Unit testing with [Jest](https://facebook.github.io/jest/)

### Also some niche topics which are still entry-level:
* Type annotations with [Flow](https://flowtype.org/)
* A glimpse at `async` and `await`
* [Lodash](https://lodash.com/) and functional composition with Lodash/FP
* End-to-end testing with [WebDriver.io](http://webdriver.io/) (Selenium)
* Virtual DOM in [React](https://facebook.github.io/react/) and other implementations -- what happens when we compile that crazy JSX source!
* [Redux](http://redux.js.org/) and immutable data structures -- how to use them for application state -- standalone then with React
* [TypeScript](https://www.typescriptlang.org/)

### And some topics which may be more niche or only suitable for those with extensive JS knowledge:

* Reactive programming with [RxJS](https://github.com/Reactive-Extensions/RxJS)
* [CSS modules](https://github.com/css-modules/css-modules) in React
* Webpack part 3 -- hot module reloading with React, time-travel
* [React Native](https://facebook.github.io/react-native/) -- learn once, write everywhere for web, iOS, and Android
* Future module loading -- [JSPM](http://jspm.io/), [SystemJS](https://github.com/systemjs/systemjs), HTTP/2 (maybe also Webpack 2)
* An introduction to [Angular 2](https://angular.io/) with [TypeScript](https://www.typescriptlang.org/)
* Angular 2 dependency injection
* Proxy and Reflect
* New data structures -- Map, Set, WeakMap, WeakSet
* FireBase

## Contributing:

We're looking for any suggestions of what you, the JavaScript community would like to learn about or present. All levels of experience from 'never touched it' to 'guru' are valuable.

Feel free to contact me directly at matt@mnorrish.co.nz or open a pull request with changes. If you would like to present a topic, please open a pull request with your suggestion. Refer to Workshop 1 as an example format.

Also we are reaching out to JavaScript New Zealand for support and advice. Join the [#dunedin-js](https://javascriptnewzealand.slack.com/messages/dunedin-js) channel on Slack.
