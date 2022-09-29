const add = function(a, b) {
	if (isNaN(a) || isNaN(b)) {
    return 'ERROR';
  }

  return a + b;
};

const subtract = function(a, b) {
	if (isNaN(a) || isNaN(b)) {
    return 'ERROR';
  }

  return a - b;
};

const sum = function(arr) {
  for (let num of arr) {
    if (isNaN(num)) {
      return 'ERROR';
    }
  }
	
  suma = 0;

  for (let num of arr) {
    suma += num;
  }

  return suma;
};

const multiply = function(arr) {
  for (let num of arr) {
    if (isNaN(num)) {
      return 'ERROR';
    }
  }

  let prod = 1;

  for (let num of arr) {
    prod *= num;
  }

  return prod;
};

const power = function(a, b) {
	if (isNaN(a) || isNaN(b) || a < 0) {
    return 'ERROR';
  }

  return Math.pow(a, b);
};

const factorial = function(n) {
	if (!Number.isInteger(n) || n < 0) {
    return 'ERROR';
  }

  fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
