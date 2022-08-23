function reverseString(string) {
    const lengthString = string.length;
    const stringArray = string.split("");
    // Invert the text
    let invertedArray = [];
    for (i=lengthString-1; i >= 0; i--) {
        invertedArray.push(stringArray[i]);
    }
    // return the inverted array as string
    return invertedArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
