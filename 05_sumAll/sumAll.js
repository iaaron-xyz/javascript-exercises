const sumAll = function(num1, num2) {
  
  let total = 0;
  let start;
  let end;
  
  // both arguments must be numbers
  if (!(typeof num1 == "number" && typeof num2 == "number")) {
    return "ERROR";
  }
  // Both numbers must be positive integers
  if (num1 < 0 || num2 < 0) {
    return "ERROR"
  }

  // set start and end numbers
  if (num2 > num1) {
    start = num1;
    end = num2;
  }
  else {
    start = num2;
    end = num1;
  }

  // Add all the integers between start and end (inclusive)
  for (let i = start; i < end + 1; i++) {
    total += i;
  }

  return total;
};

// basic test
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
