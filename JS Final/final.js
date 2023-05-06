let empty = {x: 2, y: 2};
let tiles = [];
let winText = document.getElementById('winText');

window.onload = function() {
  let puzzle = document.getElementById('puzzle');
  const imageURL = document.getElementById('puzzle-image').src; 
  
  for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
      if(i==2 && j==2) break;
      let tile = document.createElement('div');
      tile.className = 'tile';
      tile.innerHTML = i*3+j+1;
      tile.style.left = j*100+'px';
      tile.style.top = i*100+'px';
      tile.pos = {x: i, y: j};
      tile.addEventListener('click', function() {
        move(tile);
      });
      
      
      tile.style.backgroundImage = `url(${imageURL})`;
      tile.style.backgroundPosition = `-${j * 100}px -${i * 100}px`;

      tiles.push(tile);
      puzzle.appendChild(tile);
    }
  }
}

function move(tile) {
  if((Math.abs(empty.x-tile.pos.x) == 1 && empty.y == tile.pos.y) || 
     (Math.abs(empty.y-tile.pos.y) == 1 && empty.x == tile.pos.x)) {
    let tempPos = {...tile.pos};
    tile.pos = {...empty};
    empty = {...tempPos};
    tile.style.left = tile.pos.y*100+'px';
    tile.style.top = tile.pos.x*100+'px';
  }
  checkWin();
}

function checkWin() {
  if(empty.x != 2 || empty.y != 2) return;
  for(let i=0; i<tiles.length; i++) {
    if(tiles[i].innerHTML-1 != tiles[i].pos.x*3 + tiles[i].pos.y) return;
  }
  winText.innerHTML = "grats m8!";
}

function shuffle() {
  for(let i=0; i<1000; i++) {
    let adjTiles = getAdjacentTiles(empty);
    move(adjTiles[Math.floor(Math.random() * adjTiles.length)]);
  }
  winText.innerHTML = "";
}

function getAdjacentTiles(pos) {
  let adjTiles = [];
  for(let i=0; i<tiles.length; i++) {
    if((Math.abs(pos.x-tiles[i].pos.x) == 1 && pos.y == tiles[i].pos.y) || 
     (Math.abs(pos.y-tiles[i].pos.y) == 1 && pos.x == tiles[i].pos.x)) {
       adjTiles.push(tiles[i]);
    }
  }
  return adjTiles;
}

function toggleMusic() {
  var music = document.getElementById('background-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
