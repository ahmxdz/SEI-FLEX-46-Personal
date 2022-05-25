/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- constants -----*/
const PLAYERS = {
    'PURPLE': 'purple',
    'LIME': 'lime'
};
// Placeholder for the board array when something has not been clicked on
const EMPTY_SQUARE_PLACEHOLDER = '';

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  
/*----- cached element references -----*/
const squares = document.querySelectorAll('td');
const message = document.querySelector('h1');

// Perform initialization
initialize();

function initialize() {
    // this is acting as a placeholders for the board state so that as we fill it up
    // it looks like
    // board = ['purple', 'purple', '', 'lime', '', 'lime', 'purple', '']
    board = new Array(9).fill(EMPTY_SQUARE_PLACEHOLDER);
    
    turn = PLAYERS.PURPLE;
    winner = '';

    /*----- event listeners -----*/
    squares.forEach((squareElem, idx) => {
        squareElem.addEventListener('click', () => {
            // if the board has something already in this index, I don't want to do anything
            if (board[idx] !== EMPTY_SQUARE_PLACEHOLDER || winner) {
                return;
            }

            // fill the board on click
            board[idx] = turn;

            // Checking for winners
            winner = getWinner();

            // Change current player turn
            changeCurrentPlayer();

            // We want to render any changes (colors, message)
            render();
        });
    })

    render();
}

function render() {
    board.forEach(function (boardValue, idx) {
        console.log(boardValue)

        // the boardValue is a color name which is why we can set it as a background color
        squares[idx].style.background = boardValue;
    });

    if (winner) {
        // if there is a winner, we return the winner message
        message.innerText = `Winner is ${winner}`
    } else if (gameHasTied()) {
        // if there is no winner, we check if there is a tied game
        message.innerText = 'Tie game'
    }
}

// Function for changing current player
function changeCurrentPlayer() {
    if (turn === PLAYERS.PURPLE) {
        turn = PLAYERS.LIME;
    } else {
        turn = PLAYERS.PURPLE;
    }
}

function getWinner() {
    let playerHasWon = false;
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i]
        console.log(`Combo number: ${i}`)
        console.log(combo)

        const winningComboSq1 = board[combo[0]]
        const winningComboSq2 = board[combo[1]]
        const winningComboSq3 = board[combo[2]]

        console.log('comboSq1 ', winningComboSq1)
        console.log('comboSq2 ', winningComboSq2)
        console.log('comboSq3 ', winningComboSq3)

        // We want to check if the current player has all items of the winning combo under their belt
        playerHasWon = winningComboSq1 === turn && winningComboSq2 === turn && winningComboSq3 === turn
        // or more elegantly
        // playerHasWon = winningCombo.each((sq) => sq === turn)

        if (playerHasWon) {
            return turn;
        }
    }
}

function gameHasTied() {
    return board.every((boardItem) => boardItem !== EMPTY_SQUARE_PLACEHOLDER)
}

