// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here
    if(cells[index]==="&&isGameActive()){


    
        cells[index]=currentPlayer;
        element.textContent=currentPlayer;

        if(checkWin(currentPlayer)){
            result.textContent=`player ${currentPlayer} Wins!`;
            disableButtons();
        }else if(isBoardFull()){
            result.textContent="it is a draw!";
            disableButtons();
        }else{
            currentPlayer=(currentPlayer==='X')? 'O':'X';
            result.textContent=`Player ${currentPlayer}'s turn`;
        }
    }


   
};
const

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
