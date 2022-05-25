
const makePizza = (topping) => {
    const builtPizza = []
  
    // Exit condition example
    if (topping.toLowerCase() == 'pineapple')
      // if topping is pineapple, they get an empty array as a pizza
      // pineapples are not deserving to be on a pizza
      return builtPizza
  
    const makeDough = () => 'dough'
    // within a nested function we can access any variables within the scope of the parent function
    const addTopping = () => `yumm!! ${topping}`
    const bakePizza = () => 'pizza'
      
    builtPizza.push(makeDough())
    builtPizza.push(addTopping())
    builtPizza.push(bakePizza())

    return builtPizza
  }
  
  console.log(makePizza('pepporoni'))
  console.log(makePizza('Pineapple'))
  