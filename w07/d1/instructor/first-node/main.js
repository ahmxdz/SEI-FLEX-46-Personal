/**
 * 1st runs all the contents of that file
 * then loads whatever you have as the value for module.exports
 * and sets that up as the value saved in the variable used
 * for the require statement
 */

const daysOfWeek = require('./days-of-week');

const today = daysOfWeek.getWeekday(1999999);

console.log(today);

// ------------------------>

const request = require('request');

request('http://jsonplaceholder.typicode.com/users', function (error, res, body) {
  console.log(body);
});

// Ex1:
const random = require('./utilities/random');

for (let i = 0; i < 10; i++) {
  console.log(random(100, 200));
}

// Ex2
const circle = require('./utilities/circle');

console.log(circle.area(50)); // 7853.98...
console.log(circle.circumference(75)); // 471.23...
