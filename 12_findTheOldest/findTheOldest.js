const findTheOldest = function(people) {
    let person = people[0];
    let age;
    if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = new Date().getFullYear() - person.yearOfBirth;
    }

    for (let i = 1; i < people.length; i++) {
        let currAge;
        if (people[i].yearOfDeath) {
            currAge = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            currAge = new Date().getFullYear() - people[i].yearOfBirth;
        }

        if (age < currAge) {
            person = people[i];
            age = currAge;
        }
    }

    return person;

};

// Do not edit below this line
module.exports = findTheOldest;
