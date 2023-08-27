// Get references to the HTML elements
const toggleButton = document.getElementById("toggleButton");
const themeStatus = document.getElementById("themeStatus");

// Function to toggle the theme
function toggleTheme() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle("dark-mode");
    
    // Check if 'dark-mode' class is applied to determine the current theme
    const isDarkMode = document.body.classList.contains("dark-mode");
    
    // Update the theme status text based on the current theme
    themeStatus.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
}

// Add a click event listener to the button to trigger theme toggle
toggleButton.addEventListener("click", toggleTheme);
