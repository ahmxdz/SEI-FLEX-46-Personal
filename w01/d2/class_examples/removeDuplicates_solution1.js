// Common Interview question
// Question: Given an array, can you remove all the duplicates

// Solution 1 - Using indexOf

// Pro: 
//      Easy to understand and we're using only 1 data structure (array)
// Con: 
//      Not very time efficient since we're looping through the array within array loop 
//      [We'll cover BigO notation too], but this has a complexity of O(n^2)

const animals = ['Dog', 'Human', 'Cat', 'Dog', 'Tiger', 'Cat', 'Lion', 'Lion', 'Squirrel']

// Reminder - filter either filters a value in or filters a value out.
// The callback function of the filter takes value and index as parameters and returns a boolean
// If the returned value is true, the value is filtered in. If false, it is filtered out
const outcomes = animals.filter((value, index) => {
    // indexOf returns the first index where the item of the item of the array resides
    // this filter ensure that we're only filtering in the first item of that value in the array
    return animals.indexOf(value) == index
})

console.log(outcomes)

const expectedOutput = ['Dog', 'Human', 'Cat', 'Tiger', 'Lion', 'Squirrel']