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
    console.log(bombsArray);
    console.log(emptyArray);
    const gameArray = emptyArray.concat(bombsArray);
    console.log(gameArray);
    const shuffleArray = gameArray.sort(() => Math.random() - 0.5);
    console.log(shuffleArray);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      grid.appendChild(square);
      squares.push(square);
    }
  }

  createBoard();
});
