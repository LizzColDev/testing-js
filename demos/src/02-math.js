function sum(a, b) {
  return a + b;
}

// create function for test
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0){
    return null;
  }
  return a / b;
}

// export functions
module.exports = {
  sum,
  multiply,
  divide
};
