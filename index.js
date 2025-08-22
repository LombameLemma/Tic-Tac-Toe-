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


















});