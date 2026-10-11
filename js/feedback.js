const text = document.getElementById('comments').value;
const charCounter = document.getElementById('char-counter');
const commentsInput = document.getElementById('comments');

function updateCharCounter() {
    const length = commentsInput.value.length;
    const minLength = 15;

    if (length < minLength) {
        charCounter.textContent = `${length} / ${minLength} characters minimum`;
        charCounter.classList.add("invalid");
        charCounter.classList.remove("valid");
    } else {
        charCounter.textContent = `${length} characters (minmum reached)`;
        charCounter.classList.add("valid");
        charCounter.classList.remove("invalid");
    }
}

commentsInput.addEventListener('input', updateCharCounter);

updateCharCounter(); // call the function to initialize the character count
    

