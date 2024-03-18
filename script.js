const chessboard = document.getElementById('chessboard');

const pieces = [
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  Array(8).fill(''),
  Array(8).fill(''),
  Array(8).fill(''),
  Array(8).fill(''),
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
];

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      square.dataset.row = row;
      square.dataset.col = col;
      square.addEventListener('click', movePiece);
      chessboard.appendChild(square);

      if (pieces[row][col] !== '') {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieces[row][col];
        square.appendChild(piece);
      }
    }
  }
}

function movePiece(event) {
  const targetSquare = event.target;
  const row = parseInt(targetSquare.dataset.row);
  const col = parseInt(targetSquare.dataset.col);

  // Do something with the clicked square (e.g., move a piece)
}

createChessboard();
