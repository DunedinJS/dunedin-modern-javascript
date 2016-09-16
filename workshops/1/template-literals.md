# Template literals

Template literals are a new feature which provide string interpolation and user-friendly multiline support.
This avoids the need for messy string concatenation.

## Syntax

Template literals are wrapped in backticks ``` ` ``` instead of the single `'` or double `"` quotes used for conventional stings.

```javascript
const thing = 'World';

console.log('Hello, ' + thing + '!'); // logs 'Hello, World!'
console.log(`Hello, ${thing}!`); // logs 'Hello, World!'
```

## Multiline

TODO

## Tagged template literals

Template literals can be 'tagged' to modify output. A tag is a function which accepts an array of string segments then each interpolation value.

Tags are useful for encoding of excaping values and whitespace control among others.

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
