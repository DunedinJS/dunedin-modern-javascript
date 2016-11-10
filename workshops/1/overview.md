# Workshop 1: basics

## Target audience

_Beginner_

Anyone with experience in old-fashioned JavaScript (ES3/ES5) or familiar with another mainstream interpreted programming language such as Python, Ruby, or PHP.

If completely unfamiliar with JavaScript it's recommended you take a look at [Speaking JavaScript](http://speakingjs.com/) by Dr. Axel Rauschmayer.

## Background

JavaScript has a reputation for being a 'messy' language. There are many 'good' parts and many 'bad' parts (see Douglas Crockford's [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)). Various patterns and work-arounds have emerged out of necessity to achieve common tasks.

Modern JavaScript introduces a lot of new language features which can make it much more intuitive to work with.

## Aim

Let's forget about browser APIs, DOM, libraries, etc... and go back to basics to uncover JavaScript's core features.

You will gain enough knowledge of modern syntax to understand what's going so that you can participate in further workshops.

We also cover some existing idioms and how modern language features can improve them.

If you'd like to run code samples [JS Bin](https://jsbin.com/sohokotiku/1/edit?js,console) is a great option with syntax highlighting. The developer console in modern web browsers also works but you'll need to use SHIFT+RETURN for multi-line code.

All features covered in this workshop are also supported by Node.js as of version 6.

## Content

1. [`let`, `const`, and block scope](let-and-const.md)
1. [Arrow functions and their binding](arrow-functions.md)
1. [Template literals](template-literals.md)
1. [Default parameters](default-parameters.md)
1. [Destructuring assignment](destructuring-assignment.md)
1. [Rest and spread](rest-and-spread.md)
1. [Enhanced object literals](enhanced-object-literals.md)

## Next

__[Workshop 2](../2/overview.md):__ gain a practical taste of modern JavaScript by starting with a small starter project and building a simple application with React.

## Resources

* Luke Hoban's [Overview of ECMAScript 6 features](https://github.com/lukehoban/es6features)
* Dr. Axel Rauschmayer who organises [MunichJS](http://www.munichjs.org/) and runs the [2ality](http://www.2ality.com/) blog has published three excellent books which are free to read online:
  * [Speaking JavaScript](http://speakingjs.com/) covers old JavaScript (up to ES5). A great resource for those with exposure to other lanuages but new to JavaScript.
  * [Exploring ES6](http://exploringjs.com/es6/) covers modern language features introduced by ES6 and provides many practical comparisons to old/existing patterns.
  * [Exploring ES2016 and ES2017](https://leanpub.com/exploring-es2016-es2017/read) covers modern language features introduced in ES2016 (ES7) and those drafted for ES2017. This is a "living" book which will become more complete as ES2017 is standardised.
* Nicolás Bevacqua who publishes the excellent [Pony Foo](https://ponyfoo.com/][https://ponyfoo.com/books/practical-es6) blog is publishing a freely available [Modular JavaScript](https://mjavascript.com/). [Practical ES6, chapter 3: ES6 Essentials](https://ponyfoo.com/books/practical-es6/chapters/3#ecmascript6-essentials) provides clear explanations and examples of ES6 features. 
* Douglas Crockford's [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do) covers only old JavaScript (up to ES5) but it is still a very valuable resource because it points out which parts of the language to use and which to avoid. Best for those with some existing experience but considered by many as the best JavaScript book ever published.
