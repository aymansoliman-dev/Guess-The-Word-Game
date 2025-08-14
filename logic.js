const VK_LEFT = 37;
const VK_RIGHT = 39;
const VK_BACKSPACE = 8;
const VK_ENTER = 13;
const WORD = 'FRIEND';
const WINNING_SOUND_EFFECT = new Audio('sound effects/win.mp3');
const LOSING_SOUND_EFFECT = new Audio('sound effects/you-lost.mp3');
const HINT_SOUND_EFFECT = new Audio('sound effects/hint.mp3');
let numberOfTrials = 5;
let numberOfHints = 3;

const inputFields = document.querySelectorAll('.input-field');

Array.from(inputFields)[ 0 ].focus();

Array.from(inputFields).forEach(inputField => {
    inputField.addEventListener('input', () => {
        inputField.setAttribute('value', inputField.value.toUpperCase());
        if (inputField.nextElementSibling !== null) inputField.nextElementSibling.focus();
    });
});

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
            }
            else {
                inputField.setAttribute('value', '');
                inputField.value = "";
            }
        }
        else if (e.keyCode === VK_ENTER) document.getElementById('check-button').click();
    })
});

const hintButton = document.getElementById('hint-button');
hintButton.querySelector('span').innerHTML = `${numberOfHints}`;

const checkButton = document.getElementById('check-button');

checkButton.addEventListener('click', () => {
    numberOfTrials--;
    const activeRow = document.querySelector('.active');

    let guess = [];
    Array.from(activeRow.children).forEach(inputField => {
        guess.push(inputField.getAttribute('value'));
    });
    
    if (guess.join('') === '') {
        alert('Invalid Input!');
        document.querySelector('.active').children[0].focus();
        return;
    }

    if (activeRow.previousElementSibling.innerHTML === 'Try 5' && guess.join('') !== WORD) {
        checkLetters(guess, WORD, activeRow);
        
        Array.from(activeRow.children).forEach(inputField => {
            inputField.disabled = true;
        });
        checkButton.disabled = true;
        hintButton.disabled = true;

        generateFailingMsg();
    }

    else if (guess.join('') === WORD) {
        guess.forEach(letter => {
            activeRow.querySelector(`.letter-${WORD.indexOf(letter)+1}`).classList.add('correct');
        })
        Array.from(inputFields).forEach(inputField => {
            inputField.disabled = true;
        });
        checkButton.disabled = true;
        hintButton.disabled = true;

        generateSuccessMsg();
    }

    else {
        checkLetters(guess, WORD, activeRow);

        activeRow.parentElement.nextElementSibling.querySelector('.input-fields-group').classList.add('active');
        activeRow.classList.remove('active');

        Array.from(inputFields).forEach(inputField => {
            inputField.disabled = true;
        })

        Array.from(document.querySelector('.active').children).forEach(inputField => {
            inputField.disabled = false;
        })
        document.querySelector('.active').children[0].focus();
    }
});

hintButton.addEventListener('click', () => {
    if (numberOfHints > 0) {

        HINT_SOUND_EFFECT.currentTime = 1;
        HINT_SOUND_EFFECT.play();

        const activeRow = document.querySelector('.active');
        const activeElement = activeRow.querySelector(`.input-field[value='']`);
        activeElement.value = WORD[activeElement.getAttribute('order')];
        activeElement.setAttribute('value', activeElement.value.toUpperCase());
        activeElement.classList.add('correct');
        activeElement.setAttribute('checked', '');
        activeElement.disabled = true;
        
        numberOfHints--;
        hintButton.querySelector('span').innerHTML = `${numberOfHints}`;
        
        if (activeElement.nextElementSibling !== null) activeElement.nextElementSibling.focus();
        else activeRow.querySelector('.input-field:not([checked])').focus();
        if (numberOfHints === 0) hintButton.disabled = true;
    }
});

function generateFailingMsg() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <h2>You <span style="color: indianred; font-weight: bold">Lost?!</span></h2>
        <p>The word was <span>'${WORD}'</span></p>
        <p>Your Score: <span style="color: indianred; font-weight: bold">${numberOfTrials}</span>/5</p>
        <button id="reset-button" onclick="window.location.reload()">Try Again</button>       
    `;

    LOSING_SOUND_EFFECT.currentTime = 0;
    LOSING_SOUND_EFFECT.play();
    
    const timeOut = setTimeout(() => {
        popup.appendChild(wrapper);
        document.body.appendChild(popup);
        clearTimeout(timeOut);
    }, 500);
}

function generateSuccessMsg() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <h2>You <span style="color: mediumspringgreen; font-weight: bold">Won!</span></h2>
        <p>The word was <span>'${WORD}'</span></p>
        <p>Your Score: <span style="color: mediumspringgreen; font-weight: bold">${++numberOfTrials}</span>/5</p>
        <button id="reset-button" onclick="window.location.reload()">Play Again</button>
    `;

    WINNING_SOUND_EFFECT.currentTime = 0;    
    WINNING_SOUND_EFFECT.play();

    const timeOut = setTimeout(() => {
        popup.appendChild(wrapper);
        document.body.appendChild(popup);
        clearTimeout(timeOut);
    }, 500);
}

function checkLetters(guess, WORD, activeRow) {
    
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === WORD[i]) {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('correct');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
        else if (WORD.includes(guess[i]) && guess[i] !== "") {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('not-in-place');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
        else {
            activeRow.querySelector(`.letter-${i+1}`).classList.add('incorrect');
            activeRow.querySelector(`.letter-${i+1}`).setAttribute('checked', '');
        }
    }
}