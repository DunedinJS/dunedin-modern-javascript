var v = 0; // old-fashioned variable
let l = 0; // new, block-scoped variable
const c = 0; // new, block-scoped constant

console.log(`var: ${ v }`);
console.log(`let: ${ l }`);
console.log(`const: ${ c }`);

// re-assign the variables
v = 1;
l = 1;

// the variables now point to different values
console.log(`var: ${ v }`);
console.log(`let: ${ l }`);

// attempt to re-assign the constant
c = 1; // throws a TypeError
