// Your task is to implement an image toggle using JS DOM.
// Create a heading to display the current state of the image and a
// toggle button. When the button is clicked, if the image is hidden,
// make it visible, and update the message accordingly. If the
// image is visible, hide it, and update the message accordingly

// Get elements from the DOM
const stateElement = document.getElementById("state");
const toggleButton = document.getElementById("toggleButton");
const imageElement = document.getElementById("image");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", function () {
    // Check the current state of the image
    if (imageElement.style.display === "none") {
        // If the image is hidden, make it visible
        imageElement.style.display = "block";
        // Update the message
        stateElement.textContent = "Image is visible";
        // Update toggle buttom
        toggleButton.innerHTML = 'Click Here to Hide Image'
    } else {
        // If the image is visible, hide it
        imageElement.style.display = "none";
        // Update the message
        stateElement.textContent = "Image is hidden";
        // Update toggle button
        toggleButton.innerHTML = 'Click Here to Show Image'
    }
});

console.dir(toggleButton)