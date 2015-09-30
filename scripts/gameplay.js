/**
 * Created by Valentine on 30.09.2015.
 */
var GRID_SIZE = 7;
var SHIP_SIZE = 3;
var shipCells = [];
var shipStart;
var isSunk = false;
var userGuess = 0;

shipStart = Math.floor(Math.random() * (GRID_SIZE - SHIP_SIZE + 1))
for (var i = 0; i < SHIP_SIZE; i++) {
    shipCells[i] = shipStart + i;
}

while (shipCells.length > 0) {
    /* prompt for user guess */
    var guessPos = shipCells.indexOf(userGuess);
    if (guessPos >= 0) {
        alert("Hit!");
        shipCells.splice(guessPos, 0);
    } else {
        alert("Miss!");
    }
}
alert("Kill!");
