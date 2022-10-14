const palindromes = function (str) {
    // Remove all non alphanumerical characters and set to lower case using RegEx
    let newStr = str.replace(/,| |\.|!/g, "").toLowerCase();
    // both extremes must coincide
    const lenStr = newStr.length;
    const halfLenStr = Math.round(lenStr/2);
    for (let i = 0; i <= lenStr-1; i++) {
        // characters in reflected positions must coincide
        if (halfLenStr > i) {
            if (newStr[i] == newStr[(lenStr-1)-i]) {
                continue;
            }
            // if at least one character does not coincide is not a palindrome
            else {
                return false;
            }
        }
        // Avoid check the string characters twice
        else {
            break;
        }
    }
    // is a plindrome
    return true;
};

// Do not edit below this line
module.exports = palindromes;

// pretest
//console.log(palindromes("Hello., worldd!"));
