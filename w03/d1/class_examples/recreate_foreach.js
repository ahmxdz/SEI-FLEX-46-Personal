const names = ['Valerie', 'Deo', 'Alex', 'Han']

function callBackFunction(name, index) {
  console.log(`${name}: ${index}`)
}

// Standard for each function
names.forEach(callBackFunction)

// I want this function to do the same as forEach and call the callBackFunction in each iteration
function recreateForEach(list, callBackFunctionParam) {
  for(let i = 0; i < list.length; i++) {
    const value = list[i]
    const index = i
    callBackFunctionParam(value, index)
  }
}

// This does the same thing as the forEach function call above
recreateForEach(names, callBackFunction)
