
// Assignement is using the single equal sign operator (assigning a value to a variable)
const assignemt = "assigned"

// not strict comparisson (these are equal)
const deadbool1 = 1234 == "1234"
console.log(deadbool1)


//  strict comparisson (These are not equal because of different types)
const deadbool2 = 1234 === "1234"
console.log(deadbool2)


// Defining a string with single or double quotes have the same value. This is equal
const deadbool3 = '1234' === "1234"
console.log(deadbool3)


const nameInputField = "Ashwin"

//  Sometimes we want to compare string toLowerCase so that we avoid strict comparissons to string values
const deadbool4 = nameInputField.toLowerCase() == "ashwin"
console.log(deadbool4)


//  This will return true if the the name is either Ani or Johnny (AKA a "logical or")
if (nameInputField == 'Ani' || nameInputField == 'Johnny') {
  console.log('this is either Ani or Johnny')
}

//  This will return false since it's not possible for this value to be "Ani" AND "Johnny" (Logical And)
if (nameInputField == 'Ani' && nameInputField == 'Johnny') {
    console.log('this is either Ani or Johnny')
  }
  

const value = 100
//  Logical And can be used to find values between something
if (value >= 0 && value <= 100) {
  console.log('This is between 0 and 100')
}


// True OR anything is always true with a logical Or
const logicalOr = true || false
console.log(logicalOr)


// False AND anything is always false with a logical And
const logicalAnd = true && false
console.log(logicalAnd)


