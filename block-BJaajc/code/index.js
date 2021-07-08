function getFullName(firstName, lastName) {
  let fullname = `${firstName} ${lastName}`;
  return fullname;
}

function checkPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    return string[i] == string[len - 1 - i];
  }
}

function getCircumfrence(radius) {
  return `The circumference is ${2 * 3.14 * radius}`;
}

function getArea(radius) {
  return `The area is ${2 * radius * Math.PI}`;
}

module.exports = {
  getFullName,
  checkPalindrome,
  getCircumfrence,
  getArea,
};
