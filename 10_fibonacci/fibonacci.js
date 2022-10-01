const fibonacci = function(n) {
    if (typeof n === "string" && !(n = parseInt(n))) {
        return 'OOPS';
    }

    if (!Number.isInteger(n) || n < 0) {
        return 'OOPS';
    }

    fib1 = 1;
    fib2 = 1;

    for (let i = 3; i <= n; i++) {
        const temp = fib1;
        fib1 = fib2;
        fib2 = temp + fib2;
    }

    return fib2;

};

// Do not edit below this line
module.exports = fibonacci;
