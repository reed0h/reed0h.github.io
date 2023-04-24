document.addEventListener('DOMContentLoaded', function () {
    initTiles();
    document.getElementById('submit-button').addEventListener('click', submit);
  });
  
  function initTiles() {
    const positions = [
      '0% 0%', '33.333% 0%', '66.666% 0%',
      '0% 33.333%', '33.333% 33.333%', '66.666% 33.333%',
      '0% 66.666%', '33.333% 66.666%', '66.666% 66.666%',
    ];
  
    for (let row = 1; row <= 3; row++) {
      for (let column = 1; column <= 3; column++) {
        const cell = document.getElementById(`cell${row}${column}`);
        const tile = cell.getAttribute('data-tile');
        if (tile != '9') {
          cell.style.backgroundImage = "('img/anthony.png')";
          cell.style.backgroundPosition = positions[tile - 1];
        } else {
          cell.style.backgroundImage = 'none';
        }
      }
    }
  }
  
  function swapTiles(cell1, cell2) {
    const temp = document.getElementById(cell1).style.backgroundPosition;
    document.getElementById(cell1).style.backgroundPosition = document.getElementById(cell2).style.backgroundPosition;
    document.getElementById(cell2).style.backgroundPosition = temp;
  }
  
  function shuffle() {
    for (let row = 1; row <= 3; row++) {
      for (let column = 1; column <= 3; column++) {
        const row2 = Math.floor(Math.random() * 3 + 1);
        const column2 = Math.floor(Math.random() * 3 + 1);
        swapTiles(`cell${row}${column}`, `cell${row2}${column2}`);
      }
    }
  }
  
  function clickTile(row, column) {
    const cell = document.getElementById(`cell${row}${column}`);
    const tile = cell.getAttribute('data-tile');
  
    if (tile != '9') {
      if (column < 3) {
        if (document.getElementById(`cell${row}${column + 1}`).getAttribute('data-tile') == '9') {
          swapTiles(`cell${row}${column}`, `cell${row}${column + 1}`);
          return;
        }
      }
      if (column > 1) {
        if (document.getElementById(`cell${row}${column - 1}`).getAttribute('data-tile') == '9') {
          swapTiles(`cell${row}${column}`, `cell${row}${column - 1}`);
          return;
        }
      }
      if (row > 1) {
        if (document.getElementById(`cell${row - 1}${column}`).getAttribute('data-tile') == '9') {
          swapTiles(`cell${row}${column}`, `cell${row - 1}${column}`);
          return;
        }
      }
      if (row < 3) {
        if (document.getElementById(`cell${row + 1}${column}`).getAttribute('data-tile') == '9') {
          swapTiles(`cell${row}${column}`, `cell${row + 1}${column}`);
          return;
        }
      }
    }
  }
  
  function submit() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.innerHTML = 'Pseudo volume submitted!';
    setTimeout(function () {
      notification.style.display = 'none';
    }, 3000);
  }
  