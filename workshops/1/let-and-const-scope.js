function checkForVar() {
  // declare vars in the function scope
  var a = 0;
  var b = 0;
  
  console.log('CHECK var');

  if (true) {
    // declare a new var in the block scope
    // the var declaration is 'hoisted' to the above function scope
    var c = 2; 
    
    b = 1; // re-assign existing var
    
    // declared in above function scope
    console.log(`block a: ${ a }`, `block b: ${ b }`);
    
    // declared in this block scope but hoisted to the above function scope
    console.log(`block c: ${ c }`);
  }

  // declared in the function scope
  console.log(`func a: ${ a }`, `func b: ${ b }`);

  // no problem because var is 'hoisted' to the function scope
  console.log(`func c: ${ c }`);
}

function logError(error) {
  console.log(`${ error.name }: ${ error.message }`);
}

function checkForLetConst() {
  // declare a const and a let in the function scope
  const a = 0;
  let b = 0;
  
  console.log('CHECK let and const');

  if (true) {
    let c = 2; // declare a new let in the block scope
    const d = 3; // declare a new const in the block scope
    b = 1; // re-assign existing let
    
    // declared in above function scope
    console.log(`block a: ${ a }`, `block b: ${ b }`);
    
    // declared in this block scope
    console.log(`block c: ${ c }`, `block d: ${ d }`);
  }

  // declared in the function scope
  console.log(`func a: ${ a }`, `func b: ${ b }`);
  
  try {
    // throws ReferenceError because c is declared in the if block scope and not hoisted
    console.log(`func c: ${ c }`);
  } catch(error) {
    logError(error);
  }
  
  try {
    // throws ReferenceError because d is declared in the if block scope and not hoisted
    console.log(`func d: ${ d }`);
  } catch(error) {
    logError(error);
  }
}

checkForVar();
checkForLetConst();
