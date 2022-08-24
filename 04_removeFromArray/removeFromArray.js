const removeFromArray = function(originalArray, item) {
    // Create a new array wont contain removed elements
    const lenOriginalArray = originalArray.length;
    const lenArguments = arguments.length;
    let newArray = [];
    let remove;
    // Copy items from old array to new array except listed ones
    for (let i = 0; i < lenOriginalArray; i++) {
        remove = false;
        // do not add listed elements into the new array
        for (let j = 1; j < lenArguments; j++) {
            if (originalArray[i] === arguments[j]) {
                remove = true; 
                break;
            }
        }
        // Add items not listed
        if (!remove) {
            newArray.push(originalArray[i]);
        }
    }

    return newArray;
};

// Basic test
console.log(removeFromArray([1, 1, "taco", "ho", "hey", 1], 1, 2, "hey", "foo"));

// Do not edit below this line
module.exports = removeFromArray;
