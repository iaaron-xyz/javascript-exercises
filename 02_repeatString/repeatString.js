const repeatString = function(originalString, repetitions) {
    // Only positive numbers allowed
    if (repetitions >= 0) {
        // Concatenate the same string num times
        let repeatedString = "";
        for (i=0; i < repetitions; i++) {
            repeatedString += originalString;
        }
        return repeatedString;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
