// App Data

const newHomes = [
  { address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500' },
  { address: '316 Annandale Drive', sf: '1,326', bedrooms: 4, baths: 2, price: '$275,000' },
  { address: '251 Grandview Road', sf: '3,800', bedrooms: 3, baths: 2, price: '$699,900' },
  { address: '28571 Manitoba', sf: '2,960', bedrooms: 4, baths: 3.5, price: '$775,000' },
];

$('#addHome').removeClass('btn-danger').addClass('btn-success');

$('h1').addClass('text-center');

$('h1').toggleClass('hi');

// crearte the element
const $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

// add it to the DOM (user sees it now)
$('body').append($newLink);

// update an attribute i forgot
$('#zillowLink').attr('target', '_blank');

// Event Listeners
// $('#addHome').on('click', function (evt) {
//   // evt object is the same as DOM
//   //
//   console.log(evt, this);
// });

// { address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500' },

/**
 *  <th>Address</th>
        <th>Sq. Ft.</th>
        <th>Bedrooms</th>
        <th>Baths</th>
        <th>Price</th>
        <th></th>
 */
$('#addHome').click(function (evt) {
  if (newHomes.length === 0) {
    return $(this).attr('disabled', true);
  }

  const home = newHomes.pop();
  const newRow = $(`
  <tr>
    <td>${home.address}</td>
    <td>${home.sf}</td>
    <td>${home.bedrooms}</td>
    <td>${home.baths}</td>
    <td>${home.price}</td>
    <td><button class="btn btn-xs btn-danger">Remove</button></td>
  </tr>`);

  $('tbody').append(newRow);
});

$('#homes tbody').on('click', 'button', function () {
  const removeBtn = $(this);

  removeBtn.closest('tr').fadeOut(1000, function () {
    removeBtn.remove();
  });
});
