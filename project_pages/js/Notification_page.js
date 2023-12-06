for (let i = 1; i < 6; i++) {
    const cancel = document.getElementsByClassName(`xMark${i}`)[0];
    const messageNot = document.getElementsByClassName(`wrap${i}`)[0];

    cancel.addEventListener('click', () => {
        messageNot.style.display = 'none';
    })
}