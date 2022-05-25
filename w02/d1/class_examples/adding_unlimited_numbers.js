// Approach 1:
// For loop - iterate argument values
function addingNumbers1() {
    // Convert the arguments object into an array of the values
    const numbers = Object.values(arguments)
 
    // initialize the sum variable
    let sum = 0

    // Loop starting at index 0; continue until index is greater or equal to the number of items
    for (let index = 0; index < numbers.length; index++) {
        
        // you can get the value at the iteration by searching an array at the index 
        const value = numbers[index]
            
        //  Same as saying sum = sum + value
        sum += value
    }
 
    return sum
 }
 
// Approach 2:
// For loop - iterate argument keys
function addingNumbers2() {

    // Get the keys of the arguments object in an array
    const argKeys = Object.keys(arguments)

    // initialize the sum variable
    let sum = 0

    // Loop starting at index 0; continue until index is greater or equal to the number of items
    for (let index = 0; index < argKeys.length; index++) {
        
        // Grab the key of the argument object of this iteration 
        const argumentKey = argKeys[index]

        // The value is now based off the key value pair of the arguments object
        const value = arguments[argumentKey]

        //  Same as saying sum = sum + value
        sum += value
    }
    return sum
}
 
 
// Approach 2:
// For each looping
function addingNumbers3() {
    // Convert the arguments object into an array of the values
    const numbers = Object.values(arguments)

    // initialize the sum variable
    let sum = 0

    // Iterate all the numbers in the numbers array
    numbers.forEach(function (value, index) {
        
        // In each iteration add the value to the sum
        sum += value
    })
    
   return sum
}
 
// This next portion shows the similarity between forEach and for Loop

 let sum = 0
 const summationCallback = (value, index) => {
    sum = sum + value
     
    //  This doesn't break out of the function in a forEach
   if (sum > 100) {
     return sum;
   }
 }
 
function addingNumbersForEach() {
   const numbers = Object.values(arguments)
   // using arrow function callback style
   numbers.forEach(summationCallback)
   return sum
}
 
 // This is the same as a forEach -- but longer
 function addingNumbersLoopForEch() {
    const numbers = Object.values(arguments)
    for (let i = 0; i < numbers.length; i++){
        const value = numbers[i]
        summationCallback(value, i)
       
        //  This breaks out of the function when called within the for loop
        if (sum > 100) {
            return sum;
        }
   }
   return sum
 }
 