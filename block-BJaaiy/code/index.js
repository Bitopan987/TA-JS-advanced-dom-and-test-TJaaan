// Lodash

const lodash = require("lodash");

let characters = ["a", "b", "c", "d"];
let chunked = lodash.chunk(characters, 2);
console.log(chunked);
let compact = lodash.compact([0, 1, false, 2, "", 3]);
console.log(compact);

// Moment

const moment = require("moment");
console.log(moment());
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));

console.log(moment("2020-01-01", "YYYY-MM-DD").isValid());
console.log(moment("2020-01-14", "YYYY-MM-DD").isValid());

console.log(moment().add(7, "days").calendar());
console.log(moment().add(7, "months").calendar());
console.log(moment().add(7, "years").calendar());

console.log(moment().subtract(7, "days").calendar());
console.log(moment().subtract(7, "months").calendar());
console.log(moment().subtract(7, "years").calendar());

// Find the difference between the following 2 dates:

const dateA = moment("11-11-2014", "DD-MM-YYYY");
const dateB = moment("11-09-2015", "DD-MM-YYYY");
console.log(dateA.from(dateB));

const dateD = moment("2014-11-11");
const dateC = moment("2014-10-11");

console.log("Difference is ", dateD.diff(dateC), "milliseconds");
console.log("Difference is ", dateD.diff(dateC, "days"), "days");
console.log("Difference is ", dateD.diff(dateC, "months"), "months");
