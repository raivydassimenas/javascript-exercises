const ftoc = function(f) {
  if (isNaN(f)) {
    return "ERROR";
  }

  return Math.round(10 * ((f - 32) * 5.0/9)) / 10;

};

const ctof = function(c) {
  if (isNaN(c)) {
    return 'ERROR';
  }

  return Math.round(10 * (c * 9.0 / 5 + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
