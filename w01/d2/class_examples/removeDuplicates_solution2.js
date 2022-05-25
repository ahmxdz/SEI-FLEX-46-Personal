// Common Interview question
// Question: Given an array, can you remove all the duplicates

// Solution 2 - Using an object (aka map or dictionary)

// Pro: 
//      Time efficient since searching through maps are very efficient
// Con: 
//      Not very memory or space efficient since we're storing the data again in a different structure

const animals = ['Dog', 'Human', 'Cat', 'Dog', 'Tiger', 'Cat', 'Lion', 'Lion', 'Squirrel']

const map = {}

// Reminder - forEach iterates through the array
// The callback function passed into a forEach, contains a value and index as parameters and allows you to perform actions with them
animals.forEach((value, index) => {
    // In each iteration through the array, we're assigning the index value to the map where the key is the animal name
    map[value] = index
})

// Since keys can only exist once in an object/map, we are guaranteed to have unique keys 
// Object.key takes the keys of a map and puts it into a list
const outcomes = Object.keys(map)

console.log(outcomes)

// Class reminders on objects:

// you can fetch a value from map in the 2 ways below:
console.log(map.Human)
console.log(map['Human'])

// This below will throw an error since Human is not defined as a variable
console.log(map[Human])

// If you comment the line above, this will now work since we're defining a variable
const Human = 'Human'
console.log(map[Human])

const expectedOutput = ['Dog', 'Human', 'Cat', 'Tiger', 'Lion', 'Squirrel']