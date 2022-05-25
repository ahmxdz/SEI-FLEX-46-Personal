
// Arrow functions with 0 parameters requires parenthesis
const funcWith0Params = () => {
    console.log('Function 0 params')
  }
  
// Brackets are optional for 1 arg
const funcWith1Param = x => {
    console.log('One param', x)
}
  
// Arrow functions with many parameters requires parenthesis
const funcWithManyParams = (x, y) => {
    console.log('Many params', x, y)
}
  
// ---------------------------
  
// These are all the same way of writing the same function for doubling a value
  
// Best way of writing the function
const doublingFunc = x => x * 2

const doublingFunc1A = (x) => x * 2

const doublingFunc2 = x => {
    return x * 2
}

const doublingFunc3 = (x) => {
    return x * 2
}

// Old school ways of writing it can be called before the definition
function doublingFunc4(x) {
    return x * 2
}
  
  
// ---------------------
  
  
// The final result of what we are trying to get out of the following functions
const object = { key: 'value' }

const functionThatReturnsAnMap = () => {
    return {
        key: 'value'
    }
}

// Arrow functions can be simplified to return a map right away by wrapping the map in parenthesis
const funcThatReturnsMap2 = () => ({
    key: 'value'
})
  
// Arrow functions can be simplified to return a map right away by wrapping the map in parenthesis
// The value can also be used within the map if passed in as a parameter
const funcThatReturnsMap3 = (someValue) => ({
    key: someValue
})

// you would have to call funcThatReturnsMap3 with "value" as a paremeter as shown below
funcThatReturnsMap3('value')



// -------------------------------
  
// Tangent - We are learning array mapping
const numbers = [1,2,3,4,5]
  
// Old way of getting an doubled array
const doubledArray1 = []
numbers.forEach((value, index) => {
    doubledArray1.push(value * 2)
})
console.log(doubledArray1)
  
// New way of getting doubled array
  
// array.map transforms every item of an array using a function
const doubledArray2 = numbers.map((value) => value * 2)
console.log(doubledArray2)
  

// You can even pass in a function that has already been defined
// Reminder: "doublingFunc" has been defined up to
const doubledArray3 = numbers.map(doublingFunc)
console.log(doubledArray3)

  
// If we treat a map like a forEach (Don't do!!!) -- This will return an array full of undefined
const forEachArray = numbers.map((value) => {
    console.log(value)
})
// forEachArray now has a value of [undefined, undefined, undefined, undefined, undefined]
  
// In summary:
// Map should be used for transforming values of an array
// ForEach should only be used for iterating through the array
  


// ---------------------------

// Returning back to arrow functions

// Goal: We want to the output to become something like this
const todoList = [
    {item: 'Buy Milk', complete: false},
    {item: 'Mow law', complete: false},
]

// Initial input: array of strings with task definitions
const toDoArr = ['get milk', 'do laundry'];
  
// this mapping converts this array of strings to an array of objects looking like the expecte output above
const toDoArrOfOjb = toDoArr.map((todo) => ({ todo, completed: false }))
  
// Now that you have an array of objects, you can filter by an attribute in the object
// In this case, we are filtering for objects where completed is true
// This should return an empty array at this point
let completedItems = toDoArrOfOjb.filter(toDoItem => toDoItem.completed)
  
console.log('---------------')
console.log('before mark as complete')
console.log(toDoArrOfOjb)
  


// Same as above - New variable used in demo to not change things up
const beforeForEach = [ 
    { todo: 'get milk', completed: false },
    { todo: 'do laundry', completed: false }
]
  
// Function to mark a single object's completed attribute as completed
const markThisItemAsComplete = (todoObj) => {
    todoObj.completed = true
}

// Example of breaking iterative problems into smaller individual pieces
// To test it out, you can start off by just testing the first element of the array
markThisItemAsComplete(beforeForEach[0])
console.log(beforeForEach[0])


// We want to create a function that marks all items as complete
// Think of a TODO list with a button that allows you to clear all your items from the list by marking everything as complete
const markAllAsComplete = () => {
    // We already broke down what we want to do into a smaller function
    // that makes the change for a single object
    // when you pop it into a forEach, it applies the same function to all iterations
    toDoArrOfOjb.forEach(markThisItemAsComplete)
  
    console.log('---------------')
    console.log('after mark as complete')
    console.log(toDoArrOfOjb)
}
  
  
console.log('---------------')

console.log('Getting arguments via arrow functions')
  
// argumments keyword is only available in oldschool function
// We have to use the "..." syntax to get the list of parameters
const checkArgs = (...args) => {
    // console.log(arguments);
    console.log(args)
}

// the arguments logged in line 171 would be [1, 'abc']
checkArgs(1, 'abc')
  


// We can now use arrow functions arguments to sum a bunch of values together
const sumABunchOfValues = (...nums) => {
    // nums will look something like [1,2,3,4,5,6] depending the params passed in

    // initilize a sum of 0
    let sum = 0

    // Break problem into what you would do with the first number
    const sumThisValue = (num) => {
      sum += num
    }

    // Once that's working correctly, apply it to every item of the array
    nums.forEach(sumThisValue)

    return sum
}
console.log(sumABunchOfValues(1,2,3,4,5,6,4))
  
  
  