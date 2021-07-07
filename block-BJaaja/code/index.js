/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
// 1

const num = 10;

function increaseNumber()  {num += 1};

function increasePassedNumber(number) => {number += 1};

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// 2

const animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary() {
    console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
  },
};

function createAnimal(location, numberOfLegs) {
  const obj = Object.create(animalMethods);
  obj.location = location;
  obj.numberOfLegs = numberOfLegs;
  return obj;
}

const dogsMethods = {
  bark() {
    const alert = `I am ${this.name} and I can bark 🐶`;
    alert();
  },

  changeName(name) {
    this.name = name;
    return this.name;
  },

  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },

  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

(function createDog(location, numberOfLegs, name, color) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, dogsMethods);
  obj.name = name;
  obj.color = color;
  return obj;
});

const catsMethods = {
  meow() {
    const alert = `I am ${this.name} and I can do mewo meow 😹`;
    alert();
  },
  changeName(name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

Object.setPrototypeOf(dogsMethods, animalMethods);

(function createCat(location, numberOfLegs, name, colorOfEyes) {
  const obj = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(obj, catsMethods);
  obj.name = name;
  obj.color = colorOfEyes;
  return obj;
})

Object.setPrototypeOf(catsMethods, animalMethods);

// 3

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
