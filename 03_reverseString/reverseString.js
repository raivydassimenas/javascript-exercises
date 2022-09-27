const reverseString = function(string) {
    const arr = string.split("");
    const reversed = arr.reverse();

    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
