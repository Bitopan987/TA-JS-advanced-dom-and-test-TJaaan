const {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
} = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('sub 10 - 5 to equal 5', () => {
  expect(subtract(10, 5)).toBe(5);
});

test('sums 10 + 20 to equal 30', () => {
  expect(sum(10, 20)).toBe(30);
});

test('multiply 10 * 20 to equal 200', () => {
  expect(multiply(10, 20)).toBe(200);
});

test('power 2 of 3 to equal 9', () => {
  expect(power(3, 2)).toBe(9);
});

test('factorial of 5 to equal 120', () => {
  expect(factorial(5)).toBe(120);
});
