const ages = {
ashwin: 30,
kareem: 22.99,
deo: 0
}

// we can iterate through objects without converting them to arrays first
const iterateThroughAges = () => {
    
    // we use the "for ... in" syntax to iterate through objects
    for (let key in ages) {
        // in our case, key is the same as name
        console.log(key)

        // in order to get the value within this we search for that key within the ages object
        const value = ages[key]
        console.log(value)

        // You an now perform any logic using the key and/or value within the iteration of the object
    }
}
  
// Recap - Converting an object back to array
// We can also convert back to an array and use that if that's more comfortable for you
const iterateThroughAgesArray = () => {
    
    // We first convert back to an array
    // We are getting the list of peoples name here because we are using Object.keys instead of Object.values
    const peopleWithAges = Object.keys(ages)

    // We can loop through arrays in different ways. Let's use forEach here
    peopleWithAges.forEach((personKey, index) => {
        // This is the person's name
        console.log(personKey)

        const iterationAgeValue = ages[personKey]
        console.log(iterationAgeValue)
    })
    
}
