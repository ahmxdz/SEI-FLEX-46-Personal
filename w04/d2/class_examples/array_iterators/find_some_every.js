// Array find example

const studentNames = ['Ahmed', 'Alex', 'Johnny', 'Han', 'Deo','Dan', 'Ani', 'Dan']

const filterCallback = (personName) => personName.charAt(0) === 'D'

// Apply to filter
const filteredList = studentNames.filter(filterCallback)
// Filter returns an array of items that meet the condition of the callback function
console.log(filteredList)

console.log('---------')

const itemFoundInList = studentNames.find(filterCallback)
// Find returns the first item that meets the condition
console.log(itemFoundInList)


console.log('---------')

// Example where find doesn't find anything

// studentNames does not have anyone whose names beging with 'B'
const conditionThatIsNeverTrue = (personName) => personName.charAt(0) === 'B'

const filteredBList = studentNames.filter(conditionThatIsNeverTrue)

console.log(filteredBList)

const bItem = studentNames.find(conditionThatIsNeverTrue)

// This returns undefined
console.log(bItem)

console.log('---------')

// Example looking for Dan named students via a filter
const danItems = studentNames.filter((personName) => personName === 'Dan')

console.log(danItems.length)

console.log('---------')

// Example finding based on object
const studentObjects = [
  {name: 'Deo', grade: 86},
  {name: 'Dan', grade: 73},
  {name: 'Alex', grade: 82},
  {name: 'Ani', grade: 82},
]

const danStudent = studentObjects.find((student) => student.name === 'Dan')
console.log(danStudent.grade)

// FindIndex example

console.log('---------')

// findIndex returns the index of the first item found in the array
const aniIndex = studentNames.findIndex((personName) => personName === 'Ani')

console.log(aniIndex)
console.log(studentNames[6])

const danIndex = studentNames.findIndex((personName) => personName === 'Dan')

// Even though there are 2 Dans in this list, only the first index of Dan is returned
console.log(danIndex)

const kareemIndex = studentNames.findIndex((personName) => personName === 'Kareem')

// returns -1 because Kareem is not in the student list
console.log(kareemIndex)


console.log('---------')

// Some example
// Checks if the condition is true for at least 1 item in the array

const doesKareemExistInList = studentNames.some((personName) => personName === 'Kareem')

// returns false because Kareem doesnt exist in list
console.log(doesKareemExistInList)

const doesDeoExistInList = studentNames.some((personName) => personName === 'Deo')

// returns true because Deo is in this list
console.log(doesDeoExistInList)

console.log('---------')

// Every example

// Every returns true if every item in the list meets a condition and false otherwise

const lotsOfNumbers = [2, 6, 8, 10, 18]
const checkIfEven = (num) => num % 2 === 0

console.log(lotsOfNumbers.every(checkIfEven))

lotsOfNumbers.push(17)

console.log(lotsOfNumbers.every(checkIfEven))
