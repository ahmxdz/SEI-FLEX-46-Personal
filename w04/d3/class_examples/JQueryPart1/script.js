
// querySelector gives you a single item. It finds the element with this selector
const specialLiElemJs = document.querySelector('.special-li')

// You can then make changes to your DOM
specialLiElemJs.textContent = 'This is my special LI'
3

// With JQuery, once imported you can select elements simply by adding the selector string to the "$" constructor

// Reminder that selecting a class utilizes the "." prefix
const specialLiElemJQ = $('.special-li')
// Reminder that selecting by id utilizes the "" prefix
const jqIdSelection = $('#ul-list')
// Reminder that selecting by tag name doesn't utilize any prefix
const jqSelectByTag = $('li')

console.log(jqIdSelection)
console.log(jqSelectByTag)
console.log(specialLiElemJQ)

// You can see that jsquery selectors gives you back a list which means that it's actually more similar to querySelectorAll instead of the querySelector shown above
console.log(jqSelectByTag.length)
jqSelectByTag[0].textContent = '1234'


console.log('-----------------')
// JQuery super power functions
// Super power functions include show, hide, toggle, slideToggle, fadeIn, fadeOut, etc.

// Need to wrap them in the JQuery constructor
const secondListItem = jqSelectByTag[1]
const secondListItemWithSuperpowers = $(secondListItem)

// secondListItemWithSuperpowers above is the equivalent of the following line
const secondListWithSP = $($('li')[1])
secondListWithSP.hide()

// An example of how we can show or display an element based on an event
// Using JS addEventListener since we hadn't touched on JQuery's event handling yet at this point in the class
document.querySelector('#showHideSecondLi').addEventListener('click', () => {
  secondListItemWithSuperpowers.slideToggle()
})

console.log('-------------')

// Iterating JQuery elements
const allLiJq = $('li')

// We can use the 'each' method to iterate jquery selection items
// it is similar to an array forEach (Note that the first param is the index and the second is the element itself)
allLiJq.each(function(idx, element) {
  console.log(element)
  console.log(idx)
  // change the text to each line item
  element.textContent = `LI Item number: ${idx}`

  // perform jquery operations with this element it has to be called with a $ constructor
})

console.log('-------------')
// JQ eq() method

// If we are trying to select the fourth item in the list and ensure we have the ability to use the animation functions
const fourthItemWithSuperPower = $(allLiJq[3])
fourthItemWithSuperPower.hide()

// These 2 approaches are the equivalent as the statement above
const fourthItemWithSuperPower2 = $('li').eq(3)
const fourthItemWithSuperPower3 = $($('li')[3])

fourthItemWithSuperPower2.hide()


console.log('------------')
// Using .html() method to modify contents of JQuery
// This is the equivalent of setting an "innerHtml" in JS
$('li').html('<h1>This is a list item</h1>')
$('#h1Title').html('Intro to JQuery SEI 46')

// Passing in no params makes this a getter
const h1TitleHtml = $('#h1Title').html()
console.log(h1TitleHtml)

const h1Element = $('#h1Title')

// html() gets the the html that is already there
const h1CurrentHtml = h1Element.html()

// if you pass in a string into the html function, it acts as a setter
h1Element.html( h1CurrentHtml + ' - A second title')

console.log('----------------')
// Modifying css 

// A few didfferent ways of setting inline styling to elements using the css method:

$('#h1Title').css({color: 'blue', fontWeight: 'bold', backgroundColor : 'green', fontSize: '20px'});
$('#h1Title').css('backgroundColor', 'green')

// You can see here that this would override the color that got set above, but doesnt remove the other attributes set earlier
$('#h1Title').css({color: 'red'})


console.log('-----------------')

// Follow up from the breakout room challenge:

// Another approach to increasing font size

// If we don't pass in a second param into the css method when the first one is a string, it is a getter for that style attribute
const size = $('#h1Title').css('font-size')
console.log(size)

// parse out the size number by removing the last 2 characters (which we know will be "px")
const sizeNumber = size.substring(0, size.length - 2)
console.log(sizeNumber)

// Add to the current size number to create a new font size amount
const newSizeNumber = parseInt(sizeNumber) + 20

// set the new font size
$('#h1Title').css('font-size', `${newSizeNumber}px`)


// Chaining jquery methods

// Setters in jquery return back the jquery object so it allows you to chain operations to make setter operations in a row to a jquery element
$('#h1Title').html('This is my new title').css('backgroundColor', 'red').css({color: 'blue'})
