import generateKeyColors from "./generateKeyColors.js";
import generateGameBoard from "./generateGameBoard.js";

document.title = "Guess The Word Game";


const gameBoard = generateGameBoard();
document.getElementById("game-board").appendChild(gameBoard);


const keyColorsSection = generateKeyColors();
document.getElementById("game-keys").appendChild(keyColorsSection);

document.querySelector('footer').innerHTML = `Guess The Word Game Game &copy ` + new Date().getFullYear();