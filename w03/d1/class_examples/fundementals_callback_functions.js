
function myFunc(name) {
    console.log(`My name is ${name}`)
    console.log('I have called myFunc')
}

function myFunc2(name) {
    console.log(`My name is ${name}`)
    console.log('I have called myFunc2')
}


function funcThatCallsAnotherFunc(name, callbackFunction) {
    callbackFunction(name)
}

// prints My name is Johnny / I have called myFunc
funcThatCallsAnotherFunc('Johnny', myFunc)

// prints My name is Bat / I have called myFunc2
funcThatCallsAnotherFunc('Bat', myFunc2)
  