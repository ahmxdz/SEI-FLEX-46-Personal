const ages = {
    ashwin: 30,
    kareem: 22.99,
    deo: 0
}
    
// we can use the "in" operator to check if a key is within an object
// this will return false in this case
console.log('george' in ages)

// you can assign a value to a property in an object.
// if the property doesnt exist, a new one is created
ages.gerge = 22

// you can delete a property by using the delete keyword
delete ages.gerge

// reassigning this value with a correct key
ages.george = 22
    
// this check should now be true
console.log('george' in ages)
    
// Example checking if a value is an object and comparing it
const checkDeosAge = () => {
    // checking if there is a 'deo' property in the object
    if ('deo' in ages) {
        console.log('deo is in the object')

        // we can now compare the value within that property to do something with it
        if (ages.deo > 23) {
        console.log('Deo is not as young')
        }
    }
}
    
// Method 2 of checking if an object contains a value, but there is a downside (look in comments)
const checkDeosAge2 = () => {
    // check if deos age is truthy
    // downside is that what is inside of the if statement will not run if ages at 'deo' is falsy
    // Reminder examples of falsy values are empty string, 0, null, undefined
    // So if deo's age is actually 0, this value will be treated as a false in this condition
    if (ages.deo) {
        console.log('deo is in the object')
        if (ages.deo > 23) {
        console.log('Deo is not as young')
        }
    }
}