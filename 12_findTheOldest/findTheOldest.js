const findTheOldest = function(peopleArr) {
    // Set initial variables
    let years = 0;
    let index = -1;
    // Look for the oldest person in the list
    for (let i = 0; i < peopleArr.length; i++) {
        // How much lived if already passed away
        if ("yearOfDeath" in peopleArr[i]) {
            if (years < peopleArr[i].yearOfDeath - peopleArr[i].yearOfBirth) {
                years = peopleArr[i].yearOfDeath - peopleArr[i].yearOfBirth;
                index++;
            }
        }
        // It's current age if person is living in the current time
        else {
            if (years < new Date().getFullYear() - peopleArr[i].yearOfBirth) {
                years = new Date().getFullYear() - peopleArr[i].yearOfBirth;
                index++;
            }
        }
    }
    // Return the object with largest age
    return peopleArr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
