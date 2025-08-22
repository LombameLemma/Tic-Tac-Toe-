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
 if (!board.includes('')) {
            updateStatus("It's a draw! 🤝");
            gameActive = false; // End the game
            return true;
        }

        return false; // Game not won and not drawn yet
    };
const changePlayer = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus(`Player ${currentPlayer}'s Turn`);
    };
const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.dataset.cellIndex);

        // If the cell is already played or the game is not active, do nothing
        if (board[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

handleCellPlayed(clickedCell, clickedCellIndex); // Mark the cell
        const isWinOrDraw = checkForWin(); // Check for win/draw

        if (!isWinOrDraw) {
            changePlayer(); // If no win/draw, switch player
        }
    };

    /**
     * Resets the game to its initial state.
     */
    const handleResetGame = () => {
        currentPlayer = 'X'; // Reset current player to X
        board = ['', '', '', '', '', '', '', '', '']; // Clear the board array
        gameActive = true; // Set game back to active
        updateStatus(`Player ${currentPlayer}'s Turn`); // Update status message

        // Clear all cells on the board and remove any winning highlights
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('win');
        });
    };

    // Add event listeners to each cell and the reset button
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', handleResetGame);
});













});