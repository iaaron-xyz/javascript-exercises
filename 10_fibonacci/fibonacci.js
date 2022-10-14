const fibonacci = function(position) {
    // Fibonacci series: 1: 1, 2: 1, 3: 2, 4: 3, 5: 5, 6: 8, ... [position: number], ...
    // Check if it is a positive number
    if (position < 1) {
        return "OOPS";
    }
    // First 3 fibonacci numbers
    let numbers = [1, 1, 2];
    if (position < 3) {
        return numbers[position-1];
    }
    // Compute the n-th fibonacci
    let i = 2;
    let number = 0;
    while (i < position-1) {
        number = numbers[i] + numbers[i-1];
        numbers.push(number);
        i++;
    }
    // return the value in the specified position
    return numbers[position-1];
};

// Do not edit below this line
module.exports = fibonacci;

//console.log(fibonacci("1"));
