function getFullName(firstName, lastName) {
  let fullname = `${firstName} ${lastName}`;
  return fullname;
}

function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    return str[i] == str[len - 1 - i];
  }
}

function getCircumference(radius) {
  return `The circumference is ${Math.floor(2 * 3.14 * radius)}`;
}

function getArea(radius) {
  return `The area is ${Math.floor(radius * radius * 3.14)}`;
}

module.exports = {
  getFullName,
  checkPalindrome,
  getCircumference,
  getArea,
};
