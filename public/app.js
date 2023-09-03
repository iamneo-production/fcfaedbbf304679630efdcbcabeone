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
const isGameActive=() =>{
    return result.textContent ===";
};
const checkWin=(player) =>{
    for(let condition of conditions){
        const[a,b,c] = condition;
        if(cells[a]===player && cells[b]===player && cells[c]===player){
            return true;
        }
    }
    return false;
};
const isBoardFull=() =>{
    return cells.every(cell => cell!=="");
};
const disableButtons=() =>{
    btns.forEach(btn =>btn.disabled=true);
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    cells=[",",",",",",",","];
    currentPlayer ='X';
    btns.forEach(btn =>btn.textContent=");
    result.textContent=`Player ${currentPlayer} turn`;
    btns.forEach(btn => btn.disabled=false);
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
