# Guess The Word Game solution

This is a solution to the [Guess The Word Game challenge](https://github.com/aymansoliman-dev/Guess-The-Word-Game). This project is a fun, interactive browser game where the player tries to guess the hidden word with the help of visual feedback for correct, misplaced, and incorrect letters.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Design](#Design)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Guess the hidden word letter by letter
- See different key colors for:
  - Letter is correct and in the right position
  - Letter is correct but in the wrong position
  - Letter is not in the word at all

- Play the game using only their keyboard
- View a responsive layout depending on device size
- See hover and focus states for interactive elements

### Design

![Desktop Design](design/desktop.png)

##

### Links

- Solution URL: [Challenge Solution](https://github.com/aymansoliman-dev/Guess-The-Word-Game)
- Live Site URL: [Live Preview](https://aymansoliman-dev.github.io/Guess-The-Word-Game/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- Responsive design (desktop-first)
- JavaScript:
    - DOM manipulation
    - Event listeners
    - Keyboard events
    - Custom Validation

### What I learned

From building this project, I learned several JavaScript and DOM manipulation concepts:

- **Using constants for key codes** – Defining VK_LEFT, VK_RIGHT, etc., made the keyboard event handling more readable and maintainable instead of hard-coding numbers.

- **Audio handling in JavaScript** – I learned how to create Audio objects, control their volume, jump to a specific point (currentTime), and play them as part of user feedback.

- **Form-like keyboard navigation** – Implementing custom navigation between .input-field elements using arrow keys and backspace improved accessibility and made the game more intuitive.

- **State management with variables** – Keeping track of numberOfTrials and numberOfHints in JavaScript to dynamically update the UI and restrict actions.

- **Dynamic DOM updates** – 
    - Using querySelector / querySelectorAll to target elements.

    - Adding / removing classes (.correct, .incorrect, .not-in-place) to reflect game state visually.

    - Disabling and enabling inputs at different stages of the game.

- **Creating dynamic popups** – Generating HTML elements (div, h2, p, button) with JavaScript and injecting them into the DOM for win/lose messages.

- **Game logic functions** – Encapsulating functionality in reusable functions like checkLetters(), generateFailingMsg(), and generateSuccessMsg() to keep the code clean and organized.

- **User input validation** – Ensuring that empty guesses trigger an alert and reset, preventing invalid submissions.


```js
function checkLetters(guess, WORD, activeRow) {
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === WORD[i]) {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('correct');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
        else if (WORD.includes(guess[i]) && guess[i] !== '') {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('not-in-place');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
        else {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('incorrect');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
    }
}
```

```js
// Form-like keyboard navigation
Array.from(inputFields).forEach(inputField => {
    inputField.addEventListener('input', () => {
        inputField.setAttribute('value', inputField.value.toUpperCase());
        if (inputField.nextElementSibling !== null) inputField.nextElementSibling.focus();
    });
});

// Keyboard navigation
Array.from(inputFields).forEach(inputField => {
    inputField.addEventListener('keydown', (e) => {
        if (e.keyCode === VK_LEFT) inputField.previousElementSibling.focus();
        else if (e.keyCode === VK_RIGHT) inputField.nextElementSibling.focus();
        else if (e.keyCode === VK_BACKSPACE) {
            const currentInputValue = inputField.value;
            if (currentInputValue === '' && !inputField.previousElementSibling.disabled) {
                inputField.previousElementSibling.focus();
                inputField.previousElementSibling.value = "";
                inputField.previousElementSibling.setAttribute('value', '');
            } else {
                inputField.setAttribute('value', '');
                inputField.value = "";
            }
        }
        else if (e.keyCode === VK_ENTER) document.getElementById('check-button').click();
    })
});
```

### Continued development

I want to continue improving game logic by adding:

- Random word generator
- Difficulty levels
- A scoring system


### Useful resources

- MDN Web Docs - Always helpful for checking JavaScript and CSS syntax.

- JavaScript.info - Great explanations for DOM manipulation and events.


## Author

- Website - [Ayman Soliman](https://bento.me/ayman-soliman)
- Frontend Mentor - [aymansoliman-dev](https://www.frontendmentor.io/profile/aymansoliman-dev)
- Twitter - [@a_soliman1783](https://x.com/a_soliman1783)