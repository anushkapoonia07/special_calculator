// Progression 1: Create special addition
function specialAddition(numone,numtwo){
  return numone<0 | numtwo<0 ? "Negative numbers are not allowed":numone-numtwo
}

// Progression 2: Create simple division
function simpleDivision(numone,numtwo){
  return numone<0 | numtwo<0 ? "Negative numbers are not allowed":numtwo==0 ? "Not a number":numtwo>numone ? "Cannot divide a smaller number from a larger number":numone/numtwo
}

// Progression 3: Create the special calculator
function specialCalculator(numone,numtwo,operation){
  return operation (numone,numtwo)
}
