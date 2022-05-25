
// We can use jquery to remove a css class or to add one
// Notice that we can chain these because they're setters
$('#addHome').removeClass('btn-danger').addClass('btn-success');

// We can check if a class is applied to an element using "hasClass"
console.log($('#addHome').hasClass('btn-success'))

// toggleClass allows you to add a class if it doesn't exist and remove it if it does
$('#addHome').toggleClass('btn-success')

console.log('----------')

// If you add in a string into the jQuery constructor which looks like html, jquery will create a new element for you
// Some examples:
const $newLink = $('<a id="zillowLink" href="http://www.zillow.com">Visit Zillows site</a>')
const $newLink2 = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

// we can set attributes in the second param as an object
// This is only doable if the first param is a single tag, like so:
const $newLink3 = $('<a>', {
  id: 'zillowLink',
  href: 'http://www.zillow.com',
  html: 'Visit link'
})

// Revisit how a new element would be created in vanilla js
const jsNewLink = document.createElement('a')
jsNewLink.textContent = 'Visit link'
jsNewLink.href = 'www.zillow.com'
jsNewLink.id = 'newId'

// this new element can be appended to a jQuery element that already exists
// This by default appends to to the end
$('body').append($newLink)

// You can also select that you want the new element to appear before or after another element like so:
$('table').before($newLink)
$('table').after($newLink)

// Another way of performing the task above:
// Notice the order of the element references changes compared to the prior example
$newLink.insertBefore($('table'))
$newLink.insertAfter($('table'))

console.log('--------------')

// Different approach of the breakout challenge of adding in a new row:
function rowInput(address, sqFt, bedrooms, baths, price) {

  // I'm creating elements for our table data (aka cells)
  const tdAddress = $(`<td> ${address} </td>`)
  const tdSqFt = $('<td>', {
    html: sqFt
  })
  const tdBedrooms = $('<td>', {
    html: bedrooms
  })
  const tdBaths = $('<td>', {
    html: baths
  })
  const tdPrice = $('<td>', {
    html: price
  })
  const tdButton = $('<td>', {
    html: '<button> Remove </button>'
  })

  // create the table row
  const tableRowElem = $('<tr></tr>')

  tableRowElem.append(tdAddress).append(tdSqFt).append(tdBedrooms).append(tdBaths).append(tdPrice).append(tdButton)

  // Adding table row to tbody
  $('tbody').append(tableRowElem)
}

// A cleaner way of creating the function above
const rowInput2 = (...dataValues) => {

  // you can attain the dataValues array this way as well if you pass in params
  // const dataValues = [ address, sqFt, bedrooms, baths, price ]

  // this is an array of all the parameters
  // the ... is called a spread operator
  console.log(dataValues)

  // create the table row
  const tableRowElem = $('<tr></tr>')


  // I'm creating elements for our table data (aka cells)
  dataValues.forEach((data) => {
    const tdElem = $('<td>', {
      html: data
    })
    tableRowElem.append(tdElem)
  })

  const tdButton = $('<td>', {
    html: '<button> Remove </button>'
  })

  // Append the remove button
  tableRowElem.append(tdButton)

  // Adding table row to tbody
  $('tbody').append(tableRowElem)
}

// Alternatively we can use 
// $('#addHome').on('click', () => {// functionality here})
$('#addHome').click(() => {
  rowInput2('123 Sesame St', '2344', '5', '5', ' 1,000,000')
})


console.log('---------')
// Modifying attributes

$('#addHome').attr('class', 'btn')
$('table').attr('id', 'dataTable')

// We can chain attributes as well when they're setters
$('a').attr('href', 'http://www.generalassemb.ly').attr('class', 'newClass')

// We can get attribute values if we only set one string param
// this will return "newClass"
console.log($('a').attr('class'))

// removing attributes is as easy as:
$('a').removeAttr('href')


console.log('--------')

// Event delegation

$('body').on('click', 'a',() => {
  console.log('Clicked on page body')
})

// Trying to add functionality to remove button
$('tbody').on('click', 'tr td button.btn-danger', (event) => {
  const buttonClickedElem = $(event.target)
  // closest searches for the closest selection to the element selected
  const closestTr = buttonClickedElem.closest('tr')
  closestTr.fadeOut(1000, () => {
      closestTr.remove()
  })
  console.log('Remove button clicked')
})


// I want to remove the first row of the table
$('#fakeBtn').on('click', () => {
  const firstRow = $('tbody tr').first()
  // You can see that remove doesn't only have to be done using 'closest'
  firstRow.remove()
})


// End of class question:
// Clarifying the use of the $ constructor for the super power functions:

// A normal selection allows you to use animation
$('#fakeBtn').fadeOut()

// if youre going to select a specific item then you need to wrap it in $ or use eq()

$($('tbody tr')[0]).fadeOut()