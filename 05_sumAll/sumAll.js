const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (end < start) {
        const temp = end;
        end = start;
        start = temp;
    }
    let sum = 0;
    for (let curr = start; curr <= end; curr++) {
        sum += curr;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
