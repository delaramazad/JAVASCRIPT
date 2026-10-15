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

//funtions to validate the form
function validateFullName() {
    const fullName = fullNameInput.value.trim();
    const namePattern = /^[a-zA-Z\s]+$/; // letters and spaces
    if (fullName === "") {
        showFieldError(fullNameInput, fullNameError, "Full name is required.");
        return false;
    }
    if (!namePattern.test(fullName)) {
        showFieldError(fullNameInput, fullNameError, "Full name can only contain letters and spaces.");
        return false;
    }
    clearFieldError(fullNameInput, fullNameError);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email pattern
    if (email === "") {
        showFieldError(emailInput, emailError, "Email is required.");
        return false;
    }
    if (!emailPattern.test(email)) {
        showFieldError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    }
    clearFieldError(emailInput, emailError);
    return true;
}

function validateTopic() {
    if (topicSelect.value === "") {
        showFieldError(topicSelect, topicError, "Please select a topic.");
        return false;
    }
    clearFieldError(topicSelect, topicError);
    return true;
}

function validateComments() {
    const comments = commentsInput.value.trim();
    const minLength = 15;
    if(comments.length < minLength) {
        showFieldError(commentsInput, commentsError, `Comments must be at least ${minLength} characters long.`);
        return false;
    }
    clearFieldError(commentsInput, commentsError);
    return true;
}

function validateWebsite() { //not required but checked if filled
    const website = websiteInput.value.trim();
    if(website ==""){
        websiteInput.classList.remove("invalid");
        websiteError.textContent = "";
        return true;    
    }

    try{
        const url = new URL(website);
        if(url.protocol === "http:" || url.protocol === "https:"){
            clearFieldError(websiteInput, websiteError);
            return true;
        }
        throw new Error("Invalid protocol");
    } catch{
        showFieldError(websiteInput, websiteError, "Please enter a valid URL (http or https).");
        return false;
    }
}


function updateCharCounter() {
    if (!commentsInput || !charCounter) return;
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

//reset the form
function resetForm() {
    form.reset();
    const allInputs = [fullNameInput, emailInput, topicSelect, commentsInput, websiteInput];
    const allErrors = [fullNameError, emailError, topicError, commentsError, websiteError];

    allInputs.forEach((input) => {
        input.classList.remove("invalid");
    })

    allErrors.forEach((error) => {
        error.textContent = "";
    });

    updateCharCounter();
}

//event listener for live validation
fullNameInput.addEventListener("input", ()=> {
    if(fullNameInput.classList.contains("invalid")) validateFullName();
});

emailInput.addEventListener("input", ()=> {
    if(emailInput.classList.contains("invalid")) validateEmail();
});
topicSelect.addEventListener("change", validateTopic);
commentsInput.addEventListener("input", ()=> {
    if(commentsInput.classList.contains("invalid")) validateComments();
    updateCharCounter();
});
websiteInput.addEventListener("input", ()=> {
    if(websiteInput.classList.contains("invalid")) validateWebsite();
});

//clear btn
if(clearButton) {
    clearButton.addEventListener("click", resetForm);
}

//submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isTopicValid = validateTopic();
    const isCommentsValid = validateComments();
    const isWebsiteValid = validateWebsite();

    const isFormValid = isFullNameValid && isEmailValid && isTopicValid && isCommentsValid && isWebsiteValid;

    if (isFormValid) {
        const enterdName = fullNameInput.value.trim();
        formStatus.textContent = `Thank you for your feedback, ${enterdName}!`;
        formStatus.classList.add("success");
        formStatus.classList.remove("error");
        resetForm();

        setTimeout(() => {
            formStatus.classList.remove("show");
            formStatus.textContent = "";
        }, 5000); // hide the message after 5 seconds
    }
});

updateCharCounter(); // call the function to initialize the character count
    



