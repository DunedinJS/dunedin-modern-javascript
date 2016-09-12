// in existing JavaScript it's fine to declare a variable without initializing its value
var v;

// the same applies for variables declared with let
let l;

// but const must be initialized on declaration
const c1 = true; // no problem
const c2; // throws a SyntaxError
