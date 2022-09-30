const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/\s/g,"");
    string = string.toUpperCase();

    for (let i = 0; i < string.length/2; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
