# Exploring the source code

## `src/index.js`

Let's begin by opening the entry file, `src/index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Some things here are familiar but others aren't.

All that this file does is render the `App` component in the HTML element with ID `'root'`.

### Module imports

The most glaring unfamiliar syntax is for importing modules `import x from 'x';`.

This is a new language feature which we haven't covered yet.
Modules allow us to split an application into separate files for better logical order.
There have been various third-party module formats but we now finally have an official standard.

Modules are a standardised feature but they aren't yet supported by any web browsers.
Therefore we must compile and bundle source code into browser-ready scripts with tools such as Babel and Webpack -- this is all configured for you by the React Create App project.

### JSX

Line 7 contains `<App />`. That's crazy, why would someone write XML in their JavaScript?  
Take notice that it's not a string.

[JSX]( https://facebook.github.io/jsx/) is a special syntax which makes it much easier to write user interface components in a declarative way.
It is not at all intended for web browsers to understand, rather it's for preprocessors/transpilers to convert into standard JavaScript.

In short, it saves a of time and effort by providing you with a familiar syntax much like HTML/XML.

### The familiar

`document.getElementById('root')` on line 8 is good old-fashioned JavaScript. It selects the element with ID `'root'` from the HTML DOM.

This brings us to the next file -- our HTML.

## `public/index.html`

Coming soon

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [16 - Modules](http://exploringjs.com/es6/ch_modules.html)
* [JSX]( https://facebook.github.io/jsx/)
* MDN - [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
