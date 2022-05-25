// Global scopes example
let numberOfApples = 0;

const buyApples = (numApples) => {
    // We have the ability to modify a variable within the global scope
    // numberOfApples = numberOfApples + numApples
    numberOfApples += numApples
}

const sellApples = (numApples) => {
    // We have the ability to modify a variable within the global scope
    // numberOfApples = numberOfApples - numApples
    numberOfApples -= numApples
}


buyApples(25)
sellApples(10)
buyApples(12)
sellApples(14)

// numberOfApples should now have a value of 3
// console.log(numberOfApples)


// Example using a class to do the same as above
class AppleCalculator {
  // variable within global scope of the class
  numberOfApples = 0
  
  buyApples(numApples) {
    // we can access the global scope by using the this keyword
    this.numberOfApples += numApples
  }

  sellApples(numApples) {
    // we can access the global scope by using the this keyword
    this.numberOfApples -= numApples
  }

  // function to return the final amount
  getApples() {
    return this.numberOfApples
  }
}

// classes now allow us to create multiple instances
const appleVendor1 = new AppleCalculator()
appleVendor1.buyApples(15)
appleVendor1.sellApples(5)
console.log(appleVendor1.getApples())

// any adjustments to the numberOfApples for vendor2 does not affect vendor1's count
const appleVendor2 = new AppleCalculator()
appleVendor2.buyApples(100)
appleVendor2.sellApples(20)
console.log(appleVendor2.getApples())

