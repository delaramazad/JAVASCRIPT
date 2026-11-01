const form = document.getElementById("feedback-form");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const topicSelect = document.getElementById("topic");
const commentsInput = document.getElementById("comments");
const websiteInput = document.getElementById("website");
const charCounter = document.getElementById("char-counter");
const formStatus = document.getElementById("form-status");
const clearButton = document.getElementById("clear-btn");

// error messages
const fullNameError = document.getElementById("fullname-error");
const emailError = document.getElementById("email-error");
const topicError = document.getElementById("topic-error");
const commentsError = document.getElementById("comments-error");
const websiteError = document.getElementById("website-error");

// visual feedback for input fields
function showFieldError(inputElement, errorElement, message) {
  inputElement.classList.add("input-error");
  inputElement.classList.remove("input-valid");
  errorElement.textContent = message;
}

function clearFieldError(inputElement, errorElement) {
  inputElement.classList.remove("input-error");
  inputElement.classList.add("input-valid");
  errorElement.textContent = "";
}

// validation functions
function validateFullName() {
  const fullName = fullNameInput.value.trim();
  const namePattern = /^[a-zA-Zà-öÀ-Ö\s'-]{2,}$/;
  if (fullName === "") {
    showFieldError(fullNameInput, fullNameError, "Full name is required.");
    return false;
  }
  if (!namePattern.test(fullName)) {
    showFieldError(fullNameInput, fullNameError, "Please enter at least 2 valid letters.");
    return false;
  }
  clearFieldError(fullNameInput, fullNameError);
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  if (comments.length < minLength) {
    showFieldError(commentsInput, commentsError, `Comments must be at least ${minLength} characters long.`);
    return false;
  }
  clearFieldError(commentsInput, commentsError);
  return true;
}

function validateWebsite() {
  const website = websiteInput.value.trim();
  if (website === "") {
    websiteInput.classList.remove("input-error", "input-valid");
    websiteError.textContent = "";
    return true;
  }
  try {
    const url = new URL(website);
    if (url.protocol === "http:" || url.protocol === "https:") {
      clearFieldError(websiteInput, websiteError);
      return true;
    }
    throw new Error("Invalid protocol");
  } catch {
    showFieldError(websiteInput, websiteError, "Please enter a valid URL (http or https).");
    return false;
  }
}

// live character counter
function updateCharCounter() {
  if (!commentsInput || !charCounter) return;
  const length = commentsInput.value.length;
  const minLength = 15;

  if (length < minLength) {
    charCounter.textContent = `${length} /${minLength} characters minimum`;
    charCounter.classList.add("invalid");
    charCounter.classList.remove("valid");
  } else {
    charCounter.textContent = `${length} characters (minimum reached)`;
    charCounter.classList.add("valid");
    charCounter.classList.remove("invalid");
  }
}

// Reset form
function resetForm() {
  form.reset();
  const allInputs = [fullNameInput, emailInput, topicSelect, commentsInput, websiteInput];
  const allErrors = [fullNameError, emailError, topicError, commentsError, websiteError];

  allInputs.forEach((input) => {
    input.classList.remove("input-error", "input-valid");
  });
  allErrors.forEach((error) => {
    error.textContent = "";
  });
  updateCharCounter();
}

// Event listeners for live validation
fullNameInput.addEventListener("input", () => {
  if (fullNameInput.classList.contains("input-error")) validateFullName();
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("input-error")) validateEmail();
});

topicSelect.addEventListener("change", validateTopic);

commentsInput.addEventListener("input", () => {
  updateCharCounter();
  if (commentsInput.classList.contains("input-error")) validateComments();
});

websiteInput.addEventListener("input", () => {
  if (websiteInput.classList.contains("input-error")) validateWebsite();
});

if (clearButton) {
  clearButton.addEventListener("click", resetForm);
}

// Form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isTopicValid = validateTopic();
  const isCommentsValid = validateComments();
  const isWebsiteValid = validateWebsite();

  const isFormValid = isFullNameValid && isEmailValid && isTopicValid && isCommentsValid && isWebsiteValid;

  if (isFormValid) {
    const enteredName = fullNameInput.value.trim();
    formStatus.textContent = `Thanks for your feedback, ${enteredName}!`;
    formStatus.classList.add("show");

    resetForm();

    setTimeout(() => {
      formStatus.classList.remove("show");
      formStatus.textContent = "";
    }, 4000);
  }
});

updateCharCounter();