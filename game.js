import generateKeyColors from "./generateKeyColors.js";
import generateGameBoard from "./generateGameBoard.js";

document.title = "Guess The Word Game";

const randomWords = [
    'orange', 'banana', 'tomato', 'potato', 'butter', 'cheese', 'cookie', 'coffee', 'pepper',
    'onions', 'pickle', 'marble', 'silver', 'golden', 'violet', 'purple', 'yellow', 'animal',
    'planet', 'rocket', 'bridge', 'castle', 'street', 'corner', 'people', 'family', 'friend',
    'garden', 'forest', 'desert', 'island', 'school', 'window', 'pillow', 'summer', 'winter',
    'spring', 'autumn', 'bottle', 'bucket', 'breeze', 'driver', 'letter', 'number', 'string',
    'blanket', 'picture', 'battery', 'teacher', 'student', 'airport', 'library',
    'message', 'address', 'monster', 'morning', 'evening', 'holiday',
    'apple', 'bread', 'chair', 'river', 'cloud', 'plant'
];

const WORD = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();

const gameBoard = generateGameBoard();
document.getElementById("game-board").appendChild(gameBoard);

const keyColorsSection = generateKeyColors();
document.getElementById("game-keys").appendChild(keyColorsSection);

document.querySelector('footer').innerHTML = `Guess The Word Game Game &copy ` + new Date().getFullYear();

export { WORD }