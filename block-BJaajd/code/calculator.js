function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}

//  Function Remove

function removeFromArray(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
