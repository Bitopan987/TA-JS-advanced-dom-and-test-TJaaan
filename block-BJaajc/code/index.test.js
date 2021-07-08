const {
  getFullName,
  checkPalindrome,
  getCircumfrence,
  getArea,
} = require('./index');

// getFullName

// Positive

test('concate Arya + Stark  to equal Arya Stark', () => {
  expect(getFullName('Arya', 'Stark')).toBe('Arya Stark');
});

test('concate Bitopan + Deka  to equal Bitopan Deka', () => {
  expect(getFullName('Bitopan', 'Deka')).toBe('Bitopan Deka');
});

test('concate tinkal + Deka  to equal tinkal Deka', () => {
  expect(getFullName('tinkal', 'Deka')).toBe('tinkal Deka');
});

// Negative

test('concate Arya + Stark not to equal Arya Sen', () => {
  expect(getFullName('Arya', 'Stark')).not.toBe('Arya Sen');
});

test('concate Bitopan + Deka not to equal Tulsi Deka', () => {
  expect(getFullName('Bitopan', 'Deka')).not.toBe('Tulsi Deka');
});

test('concate tinkal + Deka not to equal Susmita Deka', () => {
  expect(getFullName('tinkal', 'Deka')).not.toBe('Susmita Deka');
});

// checkPalindrome
