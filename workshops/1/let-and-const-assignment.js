var v = 0; // an old-fashioned variable
let l = 0; // a new varialbe declared with let
const c = 0; // a new constant declared with const

// log the current values of our var, let, and const
console.log(`var: ${ v }`, `let: ${ l }`, `const: ${ c }`);

// re-assign the var and let variables
v = 1;
l = 1;

// log the new values of the variables
console.log(`var: ${ v }`, `let: ${ l }`);

// attempt to re-assign the constant
c = 1; // throws a TypeError
