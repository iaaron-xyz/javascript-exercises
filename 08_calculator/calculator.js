const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(array) {
  // Start with the neutral value for addition
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  // Start with the neutral value for multiplication
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
  // Base case
	if (n === 0 || n === 1) {
    return 1;
  }
  // For positive values greater than 1
  let factorial = 1;
  for (let i = n; i > 1;i--) {
    factorial *= i; 
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

//console.log(add([1,2,3]));
