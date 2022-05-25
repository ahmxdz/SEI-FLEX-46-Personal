
// Object values don't have to be strings
const ages = {
    ashwin: 30,
    kareem: 22.99
}
  
// Both of these are equivalent and would return 22.99
console.log(ages['kareem'])
console.log(ages.kareem)

// if I had a variable which contained a value of "kareem"
const kareemsName = 'kareem'

// this would also return kareem's name
console.log(ages[kareemsName])

// This would be undefined because the property "kareemsName" does not exist in the object
console.log(ages.kareemsName)
// The line above is the same as doing the following
console.log(ages['kareemsName'])

// we can update a value in an object by doing either of the following
ages.kareem = 23
ages['kareem'] = 23
ages[kareemsName] = 23

// These should all return 23 now
console.log(ages['kareem'])
console.log(ages.kareem)
console.log(ages[kareemsName])

// this would still be undefined because the "kareemsName" property doesn't exist in the object
console.log(ages.kareemsName)



// Example - Function which uses a variable to access an object at the key stored in the variable object
// If you're trying to access an object bet
const printOutAge = (name) => {
    // if you're ever trying to access an object at a variable key's value, always use the square bracket notation
    console.log(ages[name])
}
printOutAge('kareem')


  
// Object values can be of different types, even other objects
const namePlaceAnimalThing = {
    name: ['Deo', 'Jessica'],
    place: ['Panama', 'Canada'],
    animal: ['Donkey', 'Lizard'],
    thing: 1233
}
  
// It's generally best to try to keep the objects having values of the same type
// but if it's not possible or too inconvenient, you can always check for the type of the value
const iterateObjWithDiffTypes = (obj) => {

    for (let key in obj) {
        const value = obj[key]

        // we can check the type of a variable by using "typeof"
        const valueType = typeof value

        // Example of handling values of different types leveraging swtich statements
        switch(valueType) {
            case 'string': 
            // something to the string
            break;
            case 'object':
            // do something here
            break;
        }
    }
}
  
  