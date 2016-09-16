# Template literals

Template literals are a new feature which provide string interpolation and user-friendly multiline support.
This avoids the need for messy string concatenation and makes code much easier to read.

## Syntax

Template literals are wrapped in backticks ``` ` ``` instead of the single `'` or double `"` quotes used for conventional stings.
```javascript
const a = 1;
const b = 2;

console.log('' + a + ' + ' + b + ' = ' + (a + b)); // logs '1 + 2 = 3'
console.log(`${a} + ${b} = ${a + b}`); // logs '1 + 2 = 3'
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

console.log(getString()); // logs a like 'line one\n    line two'
```

## Tagged template literals

Template literals can be 'tagged' to modify output. A tag is a function which accepts an array of string segments then each interpolation value.

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

* Pony Foo - [Template Literals are Strictly Better Strings](https://ponyfoo.com/articles/template-literals-strictly-better-strings)
* MDN - [Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
* [declandewet/common-tags](https://github.com/declandewet/common-tags)
