// You are tasked with building a simple web counter that displays
// two buttons: "+" and "-". When the user clicks the "+" button, the
// counter should increment by one, and when the user clicks the
// "-" button, the counter should decrement by one. If the counter
// goes below zero, you must notify the user through an alert 


// Get references to HTML elements
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

// Initialize the counter value
let counterValue = 0;

// Function to update the counter display
function updateCounterDisplay() {
    counterElement.textContent = counterValue;
}

// Function to handle the "+" button click
function handleIncrementClick() {
    // Increment the counter value
    counterValue++;

    // Update the counter display
    updateCounterDisplay();
}

// Function to handle the "-" button click
function handleDecrementClick() {
    // Decrement the counter value
    counterValue--;

    // Check if the counter goes below zero
    if (counterValue < 0) {
        // Notify the user with an alert
        alert("Counter cannot go below zero!");

        // Reset the counter to zero
        counterValue = 0;
    }

    // Update the counter display
    updateCounterDisplay();
}

// Add click event listeners to the buttons
incrementButton.addEventListener("click", handleIncrementClick);
decrementButton.addEventListener("click", handleDecrementClick);

// Initial update of the counter display
updateCounterDisplay();
