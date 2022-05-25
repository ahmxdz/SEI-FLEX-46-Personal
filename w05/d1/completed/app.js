/* eslint-disable prefer-const */

/**
 * initialize the calculator
 * have firstNumber
 * choose an operator
 * then a secondNumber
 * wait for the operation to finish ---> person hits equals sign
 * display the results
 *
 * at some point clear the results so i cant do it again
 * ------> AKA go back to our initial state
 */

// I don't wnt to run my app, unless jquery has finished downloading
$(document).ready(function () {
  // Variables in the global runtime
  let firstNumber = '';
  let operator = '';
  let secondNumber = '';
  let result = 0;
  let isOperatorChosen = false;
  let isCalculated = false;

  // DOM Events
  $('.number').on('click', handleNumber);

  $('.operator').on('click', handleOperator);

  $('.equal').on('click', handleEqual);

  $('.clear').on('click', initCalculator);

  /**
   * 1 - start my calc. (initialization)
   * 2 - when someone hits the clear btn (reset calc.)
   */

  function initCalculator() {
    // setup some initial data ---> flow
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = 0;
    isOperatorChosen = false;
    isCalculated = false;

    $('#first-number, #second-number, #operator, #result').empty();
  }
  // Event Hanlders

  function handleNumber(evt) {
    /**
     *  check if operator chosen
     *
     * YES ---> we should be rendering the secondNumber
     *
     * NO --> we should be rendering the firstNumber
     *
     * render ===> show the number to the user on the page
     */
    if (isCalculated) {
      initCalculator();
    }

    if (isOperatorChosen) {
      secondNumber += $(this).val();
      $('#second-number').text(secondNumber);
    } else {
      firstNumber += $(this).val();
      $('#first-number').text(firstNumber);
    }
  }

  function handleOperator(evt) {
    // check if we've already calculated OR first number has not been chosen
    // YES -- do nothing
    // NO --> proceed as usual
    if (!firstNumber || isCalculated) {
      return false;
    }

    // let program know operator was clicked --> ready to go to the secondNumber
    isOperatorChosen = true;

    // save the type of opertator they have chosen
    operator = $(this).val();

    // display operator to user
    $('#operator').text($(this).text());
  }

  function handleEqual(evt) {
    /**
     * @Flow
     *
     * 1 - has the calc. on the current set of numbers already finished?
     * YES ==> do nothing
     * NO ==> then im going to set isCalculated to True
     *
     * 2 - convert to number from string so we can do math ---> Float
     * 3 - check what operator is chosen
     * 4 - perform the operation on two numbers and save it to the reults varibale
     * 5 - display results => render
     */

    // 1-YES
    if (isCalculated || !secondNumber) {
      return false;
    }

    // 1-NO
    isCalculated = true;

    // step 2
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    // step 3 & 4
    switch (operator) {
      case 'plus':
        result = firstNumber + secondNumber;
        break;
      case 'minus':
        result = firstNumber - secondNumber;
        break;
      case 'times':
        result = firstNumber * secondNumber;
        break;
      case 'divide':
        result = firstNumber / secondNumber;
        break;
      case 'power':
        result = firstNumber ** secondNumber;
        break;
      default:
        return operator;
    }

    // Step 5
    $('#result').text(result);
  }

  // Run the app
  initCalculator();
});
