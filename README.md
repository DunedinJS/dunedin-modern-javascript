# Dunedin Modern Javascript

A series of tutorials/workshops/hack-sessions for learning modern JavaScript.

This is intended to cater to a broad range of experience levels. Some exposure to old-fashioned JavaScript or mainstream intepreted programming languages such as Python, Ruby, or PHP is a good base entry level. Knowledge of Git and HTML is also useful but not essential.

Workshops contain a targetted set of theory but are best delivered interactively. It's very easy for people to open up their browser console, Node.js, jsbin.com, or similar to follow along and test out code samples.

__By modern JavaScript we mean:__

* features from the ES5 spec which recently came into mainstream use &mdash; usually browsers now support them
* features from the ES6/ES2015 and ES7/ES2016 specs &mdash; most of these are supported by current browsers or can be polyfilled
* proposed and draft features which can already be used with transpilers such as Babel or TypeScript

## Engagement

We're looking for any suggestions of what you, the JavaScript community would like to learn about or present. All levels of experience from 'never touched it' to 'guru' are valuable as is feedback about what works best.

This is a "living document" so please raise an issue, or open a pull request if you notice any problems or would like to contribute.

Many topics listed are just suggestions so it would be great to have contributions from people interested in specific areas.
Suggestions of other topics are most welcome.


## Workshops

__[Workshop 1](workshops/1/overview.md)__
Back to basics to cover some existing JS idioms and how modern language features can improve them. An introduction to some of the most important new syntax and language features.

__[Workshop 2 (work in progress)](workshops/2/overview.md)__
Gain a practical taste of modern JavaScript by starting with a small starter project and building a simple application with React. Here you can use and some of the modern features learnt in Workshop 1 and will also be introduced to Modules and Classes.

__Workshop 3 &mdash; coming soon__
Extend our starter project from Workshop 2 by adding data requests. You will be also introduced to Promises and the Fetch API.

### Small topics for mini-workshops:

__Core language features__
* [`let` and `const`](./topics/core/let-and-const.md)
* [Block scope](./topics/core/block-scope.md)
* [Arrow functions and their binding](./topics/core/arrow-functions.md)
* [Template literals](./topics/core/template-literals.md)
* [Default parameters](./topics/core/default-parameters.md)
* [Destructuring assignment](./topics/core/destructuring-assignment.md)
* [Rest and spread](./topics/core/rest-and-spread.md)
* [Enhanced object literals](./topics/core/enhanced-object-literals.md)
* [Classes](./topics/core/classes.md)
* [Modules (ES6)](./topics/core/modules.md)
* New Array and Object methods
* New Number and Math properties and methods
* Symbols
* Generators
* Iterators
* Promises
* Fetch API
* Map and WeakMap
* Set and WeakSet

__Frequently used standards and tools__
* [Strict Mode](./topics/common/strict-mode.md)
* Chrome Devtools &mdash; Console
* Getting started with Node.js and NPM
* [CommonJS modules (work in progress)](./topics/common/commonjs-modules.md)
* NPM &mdash; Package management
* NPM &mdash; Task management
* Chrome Devtools &mdash; Debugging JavaScript
* ESLint and the Airbnb JavaScript Style Guide

### Specialised entry-level topics:
* [Webpack](https://webpack.github.io/) basics &mdash; dev server, module bundling, and using loaders
* Unit testing with [Jest](https://facebook.github.io/jest/)
* Type annotations with [Flow](https://flowtype.org/)
* A glimpse at `async` and `await`
* Advanced Webpack &mdash; versioning, code splitting, using plugins, shimming awful old libraries :(
* [Lodash](https://lodash.com/) and functional composition with Lodash/FP
* End-to-end testing with [WebDriver.io](http://webdriver.io/) (Selenium)
* [Vue.js](https://vuejs.org/) &mdash; a simple, minimal framework
* Virtual DOM in [React](https://facebook.github.io/react/) and other implementations &mdash; what happens when we compile that crazy JSX source!
* [Redux](http://redux.js.org/) and immutable data structures &mdash; how to use them for application state &mdash; standalone then with React
* [TypeScript](https://www.typescriptlang.org/)

### Advanced topics:

* Reactive programming with [RxJS](https://github.com/Reactive-Extensions/RxJS)
* [CSS modules](https://github.com/css-modules/css-modules) in React
* [GraphQL](http://graphql.org/)
* Webpack Hot Module Reloading
* [React Native](https://facebook.github.io/react-native/) &mdash; learn once, write everywhere for web, iOS, and Android
* Future module loading &mdash; [JSPM](http://jspm.io/), [SystemJS](https://github.com/systemjs/systemjs), HTTP/2 (maybe also Webpack 2)
* An introduction to [Angular 2](https://angular.io/) with [TypeScript](https://www.typescriptlang.org/)
* Angular 2 dependency injection
* Data visualization with React and [Victory](https://github.com/FormidableLabs/victory)
* Proxy and Reflect
* FireBase

## Contributing:

Feel free to raise any issues, or open a pull request with changes. Also, feel free to contact Matthew Norrish directly at matt@mnorrish.co.nz.

We are reaching out to JavaScript New Zealand for support and advice. [Join the JavaScript New Zealand team on Slack](http://slack.javascript.org.nz) and the [#dunedin-js](https://javascriptnewzealand.slack.com/messages/dunedin-js) channel.
