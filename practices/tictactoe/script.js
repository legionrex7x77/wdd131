const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const resetBtn = document.querySelector("#reset-btn");

// Winning index combinations on a 3x3 board
const winningConditions = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6]  // Diagonal 2
];

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

function handleCellClick(event) {
  const clickedCell = event.target;
  const cellIndex = parseInt(clickedCell.getAttribute("data-index"));

  // Ignore click if cell is already filled or game is over
  if (boardState[cellIndex] !== "" || !isGameActive) {
    return;
  }

  // Update game state and UI
  boardState[cellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  checkResult();
}

function checkResult() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (boardState[a] === "" || boardState[b] === "" || boardState[c] === "") {
      continue;
    }
    if (boardState[a] === boardState[b] && boardState[b] === boardState[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `Player ${currentPlayer} Wins! 🎉`;
    isGameActive = false;
    return;
  }

  // Check for a tie (no empty cells left)
  if (!boardState.includes("")) {
    statusText.textContent = "It's a Draw! 🤝";
    isGameActive = false;
    return;
  }

  // Switch turn
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;
  statusText.textContent = "Player X's turn";
  cells.forEach(cell => (cell.textContent = ""));
}

// Event Listeners
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetBtn.addEventListener("click", resetGame);