
// Examples getting an element from the HTML Dom based on the "users_name" id
const userNameElement = document.getElementById('users_name')

// Set the text of that element field to be my name
userNameElement.innerText = 'Ashwin'


// Create a function to be triggered by the HTML file
const addToTable = (event) => {
  // Fetching name and country input field values
  const nameInputValue = document.getElementById('nameInput').value
  const countryInputValue = document.getElementById('countryInput').value

  const namesTableElement = document.getElementById('namesTable')
  
  // Modify the html of hte table element to add a new row with table data values
  namesTableElement.innerHTML = namesTableElement.innerHTML + `
      <tr>
        <td>${nameInputValue}</td>
        <td>${countryInputValue}</td>
      </tr>
    `
}

// Input validation function which can be called onfocus, onblur (loss of focus action), onkeydown (everytime you type a key), onkeyup (finish typing a key), etc
const validateInput = (event) => {
  const element = event.target
  const isValid = Boolean(element.value) &&element.value.length > 5
  console.log(`Validation: ${isValid}`)
}
