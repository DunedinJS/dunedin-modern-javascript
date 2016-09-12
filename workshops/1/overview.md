# Workshop 1: basics

## Target audience

Beginner

Anyone with experience in old-fashioned JavaScript (ES3/ES5) or familiar with another mainstream interpreted programming language such as Python, Ruby, or PHP.

## Background

JavaScript has a reputation for being a 'messy' language so let's forget about browser APIs, DOM, libraries, etc... and go back to basics to uncover its elegant base.
In this workshop we cover some existing JS idioms and how modern language features can improve them.
Sort of like Douglas Crockford's [JavasScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do) but updated.

##Content

* `let` and `const`
  * [Initializing `let` and `const`](let-and-const-initialization.md)
  * [Assigning `let` and `const`](let-and-const-assignment.md)
  * [Block scope](let-and-const-scope.md)
* [Arrow functions and their binding](arrow-functions.md)
* template literals (string interpolation) ``` `hello ${ world }`  ```
* destructuring assignment `[a, b] = [1, 2]`
* rest and spread `[x, ...a]`
* default param values `function(x = 0) {}`
* enhanced object literal features `{ someValue, someMethod() {}, ['key' + x]: 'value' }`
* An overview of current browser support

## Resources

* Douglas Crockford's [JavasScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)
* [Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
* MDN - [Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* MDN - [const](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)
* MDN - [let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
* MDN - [Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* MDN - [Default Parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* MDN - [Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
* MDN - [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
* MDN - [Rest parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* Ben Ilegbodu's [Learning ES6: Enhanced object literals](http://www.benmvp.com/learning-es6-enhanced-object-literals/)
