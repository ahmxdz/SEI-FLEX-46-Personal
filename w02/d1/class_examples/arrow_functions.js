// Arrow function using the code block -- need to specify return statement
const addNumbers = (num1, num2) => {
    return num1 + num2
}

// Arrow function using no code block -- no need to specify return statement
// return statement is implied
const addNumbers2 = (num1, num2) => num1 + num2
  

// Example of defaulting params
// If num2 isn't passed in, it defaults to a value of 4
const addNumbersWithDefault1 = (num1, num2 = 4) => num1 + num2
  
// If num2 isn't passed in, it defaults to a value of 4
// Same as above, just that we are recreating it with our own JS logic
const addNumbersWithDefault2 = (num1, num2) => {
    if (num2 == undefined) {
        num2 = 4
    }
    return num1 + num2
}