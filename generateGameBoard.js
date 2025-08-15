import { WORD } from './game.js';

export default function generateGameBoard() {
    const wrapper = document.createElement('div');

    const trials = document.createElement("div");
    trials.id = 'trials'
    wrapper.appendChild(trials);

    for (let i = 1; i <= 5; i++) {
        const aTry = document.createElement("div");
        aTry.classList.add("try");
        aTry.id = `try-${i}`;
        trials.appendChild(aTry);

        const tryNumber = document.createElement("h2");
        tryNumber.innerText = `Try ${i}`;
        aTry.appendChild(tryNumber);

        const inputFieldsGroup = document.createElement('div');
        inputFieldsGroup.classList.add("input-fields-group");
        if (i === 1) inputFieldsGroup.classList.add("active");
        aTry.appendChild(inputFieldsGroup);

        for (let ii = 1; ii <= WORD.length; ii++) {
            const inputField = document.createElement("input");
            inputField.classList.add("input-field", `try-${i}`, `letter-${ii}`);
            inputField.maxLength = 1;
            inputField.setAttribute('value', '');
            inputField.setAttribute('order', `${ii-1}`);
            if (i > 1) inputField.disabled = true;
            inputFieldsGroup.append(inputField);
        }

    }

    const buttonBox = document.createElement("div");
    buttonBox.id = 'button-box';

    const checkButton = document.createElement("button");
    checkButton.id = 'check-button';
    checkButton.innerText = "Check Word";
    buttonBox.appendChild(checkButton);

    const hintButton = document.createElement("button");
    hintButton.id = 'hint-button';
    hintButton.innerHTML = `<span></span><span>Hints</span> <span class="material-icons" style="font-size: 1.25rem">tips_and_updates</span>`;
    buttonBox.appendChild(hintButton);

    wrapper.appendChild(buttonBox);

    return wrapper;
}

