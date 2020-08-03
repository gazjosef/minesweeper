document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let width = 10;
  let bombAmount = 20;
  let squares = [];

  // Create Board
  function createBoard() {
    // Get Shuffled Game Array w/ Random Bombs
    const bombsArray = Array(bombAmount).fill('bomb');
    const emptyArray = Array(width * width - bombAmount).fill('valid');
    const gameArray = emptyArray.concat(bombsArray);
    const shuffleArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      square.classList.add(shuffleArray[i]);
      grid.appendChild(square);
      squares.push(square);
    }

    // Add Numbers
    for (let i = 0; i < squares.length; i++) {
      const isLeftEdge = i % width === 0;
      const isRightEdge = i === width - 1;

      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) {
        }
      }
    }
  }
  createBoard();
});
