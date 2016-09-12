function checkForVar() {
  var a = 0;
  var b = 0;
  
  console.log('CHECK var');

  if (true) {
    // define a new var in the block scope
    // the var is 'hoisted' to the above function scope
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

function checkForLet() {
  let a = 0;
  let b = 0;
  
  console.log('CHECK let');

  if (true) {
    let c = 2; // define a new let in the block scope
    b = 1; // re-assign existing let
    
    // declared in above function scope
    console.log(`block a: ${ a }`, `block b: ${ b }`);
    
    // declared in this block scope
    console.log(`block c: ${ c }`);
  }

  // declared in the function scope
  console.log(`func a: ${ a }`, `func b: ${ b }`);
  
  // throws ReferenceError because c is declared in the if block scope and not hoisted
  console.log(`func c: ${ c }`);
}

function checkForConst() {
  const a = 0;

  if (true) {
    const c = 1; // define a new const in the block scope
    
    // declared in above function scope
    console.log(`block a: ${ a }`); 
    
    // declared in this block scope
    console.log(`block c: ${ c }`);
  }

  // declared in the function scope
  console.log(`func a: ${ a }`);
  
  // throws ReferenceError because c is declared in the if block scope and not hoisted
  console.log(`func c: ${ c }`);
}


checkForVar();

try {
  checkForLet();
} catch(error) {
  console.log(`${ error.name }: ${ error.message }`);
}

try {
  checkForConst();
} catch(error) {
  console.log(`${ error.name }: ${ error.message }`);
}


