import generateKeyColors from "./generateKeyColors.js";
import generateGameBoard from "./generateGameBoard.js";

document.title = "Guess The Word Game";

const randomWords = [
    'apple', 'bread', 'chair', 'river', 'cloud', 'stone', 'plant', 'table',
    'house', 'mouse', 'light', 'music', 'sugar', 'honey', 'beach', 'world',
    'smile', 'train', 'movie', 'story', 'dream', 'magic', 'green', 'black',
    'white', 'brown', 'happy', 'quiet', 'sunny', 'rainy', 'storm', 'peace',
    'tiger', 'zebra', 'panda', 'eagle', 'shark', 'whale', 'lemon', 'grape',
    'peach', 'mango', 'berry', 'water', 'steam', 'flame', 'earth', 'metal',
    'paper', 'pencil', 'brush', 'paint', 'clock', 'phone', 'pizza', 'salad',
    'pasta', 'cheese', 'coffee', 'cookie', 'butter', 'candy', 'blanket', 'window'
];

const WORD = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();
console.log(WORD);

const gameBoard = generateGameBoard();
document.getElementById("game-board").appendChild(gameBoard);

const keyColorsSection = generateKeyColors();
document.getElementById("game-keys").appendChild(keyColorsSection);

document.querySelector('footer').innerHTML = `Guess The Word Game Game &copy ` + new Date().getFullYear();

export { WORD }