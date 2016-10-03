# Template literals

Template literals are a new feature which provide string interpolation and user-friendly multiline support.
This avoids the need for messy string concatenation and makes code much easier to read.

## Syntax

Template literals are wrapped in backticks ``` ` ``` instead of the single `'` or double `"` quotes used for conventional stings.
```javascript
const a = 1;
const b = 2;

const str = `${a} + ${b} = ${a + b}`;

console.log(str); // logs '1 + 2 = 3'
```

Only the backtick character and the `${` combination used to start interpolation placeholders need to be escaped when writing template literals.
```javascript
`this \` is a backtick` // evaluates to 'this ` is a backtick'

`this $ is a dollar symbol` // evaluates to 'this $ is a dollar symbol'
`\${}` // evaluates to '${}'
`$\{}` // evaluates to '${}'

`${}` // throws a SyntaxError -- expects a value to interpolate
`${` // throws a SyntaxError -- unterminated placeholder
```

## Compared to other string interpolation methods

Prior to ES6/ES2015 there was no language feature for string interpolation.
It was normal to concatenate strings with the `+` operator or use the array `.join()` method.

```javascript
const a = 1;
const b = 2;

// old JavaScript with string concatenation
var old1 = '' + a + ' + ' + b + ' = ' + (a + b);

// old JavaScript with array join
var old2 = [a, '+', b, '=', a + b].join(' ');

// modern JavaScript with template literals
const modern = `${a} + ${b} = ${a + b}`);

console.log(old1); // logs '1 + 2 = 3'
console.log(old2); // logs '1 + 2 = 3'
console.log(modern); // logs '1 + 2 = 3'
```

## Multiline

Template literals can be seamlessly split across lines. Line breaks form line breaks in the resulting string.

The following are equal
```javascript
'line one\nline two'

`line one
line two`
```

The following are also equal. Note the treatment of leading whitespace and line breaks.
```javascript
// concatenation
'<div>\n' +
'  <p>Hello</p>\n' +
'</div>'

// end-of-line escape
'<div>\n\
  <p>Hello</p>\n\
</div>'

// template string
`<div>
  <p>Hello</p>
</div>`
```

Leading whitespace in template strings is relative to the file rather than the indent level -- because of course whitespace is not significant in JavaScript.

```javascript
getString() {
  return `line one
    line two`;
}

console.log(getString()); // logs a string like 'line one\n    line two'
```

## Tagged template literals

Tagged template literals use the same syntax as normal template literals except that they are 'tagged' with a function which controls how the values are interpolated.
Because of this they are actually a special type of function call.
A tag function accepts an array of string segments then each interpolation value.

The basic syntax:
```javascript
fn`Hello, ${x}!`
```

Among other uses, tags are useful for encoding of escaping values and whitespace control.

> There are libraries of utility tags to cover common use cases such as HTML encoding and indent control. [declandewet/common-tags](https://github.com/declandewet/common-tags) is a great and well tested example.

```javascript
function spamToHamFilter(strings, ...values) {
  console.log(strings); // logs ['Hello, ', ' ', '!'];
  console.log(values); // logs ['delicious', 'spam'];

  return strings.reduce((memo, str, index) => {
    const value = values[index];

    memo += str;

    if (value) {
      memo += (value === 'spam' ? 'ham' : value);
    }
    return memo;
  }, '');
}

console.log(spamToHamFilter`Hello, ${'delicious'} ${'spam'}!`); // logs 'Hello, delicious ham!'
```

There is also an ability to access the raw value for each string segment. These are the strings as entered without any character encoding.

```javascript
function tag(strings) {
  console.log(strings[0]); // logs 'Ω'
  console.log(strings.raw[0]); // logs '\u03A9'

  return strings[0];
}

tag`\u03A9`;
```

## Resources

* Dr. Axel Rauschmayer, Exploring ES6 - [4.3 - From concatenating strings to template literals](http://exploringjs.com/es6/ch_core-features.html#_from-concatenating-strings-to-template-literals)
* Dr. Axel Rauschmayer, Exploring ES6 - [8 - Template literals](http://exploringjs.com/es6/ch_template-literals.html#ch_template-literals)
* Pony Foo - [Template Literals are Strictly Better Strings](https://ponyfoo.com/articles/template-literals-strictly-better-strings)
* MDN - [Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
* [declandewet/common-tags](https://github.com/declandewet/common-tags)
