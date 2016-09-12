# Initializing `let` and `const`

In existing JavaScript it's fine to declare a variable with `var` without initializing its value
```javascript
var v;
```

The same applies for variables declared with `let`
```javascript
let l;
```

But `const` must be initialized on declaration
```javascript
const c1 = true; // no problem
const c2; // throws a SyntaxError
```
