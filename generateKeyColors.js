export default function generateKeyColors() {
    const wrapper = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Key Colors';
    wrapper.appendChild(h2);

    const keysGroup = document.createElement('div');
    keysGroup.id = 'keys-group';
    wrapper.appendChild(keysGroup);

    const keyOne = document.createElement('div');
    keyOne.classList.add('key');
    keyOne.innerHTML = `
        <span class="color yellow"></span><p>Letter is Correct and in Place</p>
    `;
    keysGroup.appendChild(keyOne);

    const keyTwo = document.createElement('div');
    keyTwo.classList.add('key');
    keyTwo.innerHTML = `
        <span class="color green"></span><p>Letter is Correct but in the Wrong Place</p>
    `;
    keysGroup.appendChild(keyTwo);

    const keyThree = document.createElement('div');
    keyThree.classList.add('key');
    keyThree.innerHTML = `
        <span class="color black"></span><p>Letter is Incorrect</p>
    `;
    keysGroup.appendChild(keyThree);

    const tip = document.createElement('p');
    tip.innerHTML = `<span class="material-icons tip" style="color: var(--yellow)">tips_and_updates</span><strong>To get a hint,</strong> you need to <strong>leave the desired input box blank.</strong>`;
    tip.style.cssText = `
        padding: 1rem;
        background: wheat;
        font-size: 0.9rem;
        border-radius: 0.5rem;
        cursor: default;
    `
    wrapper.appendChild(tip);

    return wrapper;
}
