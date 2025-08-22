document.addEventListener('DOMContentLoaded', () => {
    // Select necessary HTML elements
    const gameBoard = document.getElementById('game-board');
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.getElementById('game-status');
    const resetButton = document.getElementById('reset-button');