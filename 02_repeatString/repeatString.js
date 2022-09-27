const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    outp = '';
    for (let i = 0; i < num; i++) {
        outp += string;
    }
    return outp;
};

// Do not edit below this line
module.exports = repeatString;
