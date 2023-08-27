// You are tasked to create form validation using JS DOM. Ensure
// that the username must be at least 3 characters long, and the
// password must be at least 8 characters long. On form
// submission, display an alert stating "Form Validation successful"
// if the conditions are met, otherwise, show "Form Validation
// failed." Remember, on form submission, the webpage must not
// be reloaded.

// Get the form element
const validationForm = document.getElementById("validationForm");

// Add a submit event listener to the form
validationForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting and the page from reloading
    event.preventDefault();

    // Get the username and password input elements
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Get the values of the username and password inputs
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username and password meet the minimum length requirements
    if (username.length >= 3 && password.length >= 8) {
        // Form validation is successful
        alert("Form Validation successful");
    } else {
        // Form validation failed
        alert("Form Validation failed");
    }
});
