
function handleMyButtonClick(event) {
    console.log('My Button Clicked')
    console.log(event)
}
  
// This logs 'My button clicked' and the event object on every click
document.getElementById('my-button').addEventListener('click', handleMyButtonClick)
  
// This does nothing on every click because the parameter for the function passed in the value returned from the function call (which is not a function)
document.getElementById('my-button').addEventListener('click', handleMyButtonClick())

    
// Example calculating a callback function within a function
function calculateCallbackFunction(role) {
    function adminCallbackFunc() {
        console.log('admin function')
    }

    function generalCallbackFunc() {
        console.log('general function')
    }

    if (role === 'admin') {
        return adminCallbackFunc
    } else {
        return generalCallbackFunc
    }
}

document.getElementById('my-button-2').addEventListener('click', calculateCallbackFunction('admin'))
