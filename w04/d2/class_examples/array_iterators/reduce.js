const numbers = [4,2,54,5,1,2]

// Old way of summing
let sum = 0
numbers.forEach((num) => {
  // same as doing sum = sum + num
  sum += num
})
// console.log(sum)


// Reduce Example

// Goal: sum all numbers
const reduceCallback = (accumulator, iterationValue, iterationIndex) => {
  console.log('Before operation')
  console.log(accumulator)

  // Logic goes here
  accumulator += iterationValue

  console.log('After operation')
  console.log(accumulator)

  console.log('-----------')

  return accumulator
}
numbers.reduce(reduceCallback, 0)


// Goal reduce numbers into a concatenated strings
const reduceIntoStringCallback = (acc, num) => {
  console.log('-----------')
  console.log('Before concat operation')
  console.log(acc)
  return acc + num
}

// even though the array we are reducing are numbers, we don't have to reduce to a number. This example reduces it down to a string
const concatenatedNumbes = numbers.reduce(reduceIntoStringCallback, '')

console.log(concatenatedNumbes)
