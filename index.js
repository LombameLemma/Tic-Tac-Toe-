document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.getElementById('game-status');
    const resetButton = document.getElementById('reset-button');
    // Game state variables
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 board
    let gameActive = true;

const winningConditions = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];
const updateStatus = (message) => {
        gameStatus.textContent = message;
    };
    const handleCellPlayed = (clickedCell, clickedCellIndex) => {
        board[clickedCellIndex] = currentPlayer;
      clickedCell.textContent = currentPlayer;
    };
const checkForWin = () => {
        let roundWon = false;
        // Iterate through all winning conditions
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            // Get the values of the three cells for the current win condition
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];

            // If any cell is empty, this condition can't be a win yet
            if (a === '' || b === '' || c === '') {
                continue;
            }
            // If all three cells match the current player's mark, it's a win
            if (a === b && b === c) {
                roundWon = true;
                // Optional: Highlight winning cells
                cells[winCondition[0]].classList.add('win');
                cells[winCondition[1]].classList.add('win');
                cells[winCondition[2]].classList.add('win');
                break; // Stop checking further conditions
            }
        }

        if (roundWon) {
            updateStatus(`Player ${currentPlayer} has won! 🎉`);
            gameActive = false; // End the game
            return true;
        }

















});