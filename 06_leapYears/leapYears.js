const leapYears = function(year) {
  // years not divisible by 4 are normal years
  if (!(year % 4 == 0)) {
    return false;
  }
  // years divisible by 4 but not by 100 are leap years
  else if (!(year % 100 == 0)) {
    return true;
  }
  // years divisible by 4 and 100 are common years ...
  else if (!(year % 400 == 0))
  {
    return false;
  }
  // ... unless divisible by 400, then is a leap year
  else {
    return true;
  }
};

// Basic test
console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
