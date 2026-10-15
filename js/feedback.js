const form = document.getElementById("feedback-form");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const topicSelect = document.getElementById("topic");
const commentsInput = document.getElementById("comments");
const websiteInput = document.getElementById("website");
const charCounter = document.getElementById("char-counter");
const formStatus = document.getElementById("form-status");
const clearButton = document.getElementById("clear-button");

//error messages
const fullNameError = document.getElementById("fullname-error");
const emailError = document.getElementById("email-error");
const topicError = document.getElementById("topic-error");
const commentsError = document.getElementById("comments-error");
const websiteError = document.getElementById("website-error");

//visual feedback for invalid and valid fields
function showFieldError(inputElement, errorElement, message) {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
    errorElement.textContent = message;
}

function clearFieldError(inputElement, errorElement) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
    errorElement.textContent = "";
}



const text = document.getElementById('comments').value;

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
    



