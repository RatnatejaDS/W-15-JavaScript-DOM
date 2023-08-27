// Get elements from the DOM
const authStatus = document.getElementById("authStatus");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Check if the user is already logged in (localStorage)
const isLoggedIn = localStorage.getItem("isLoggedIn");

// Function to update the authentication status
function updateAuthStatus() {
    if (isLoggedIn === "true") {
        authStatus.textContent = "You are logged in";
        loginBtn.style.display = "none"; // Hide the login button when logged in
        logoutBtn.style.display = "block"; // Show the logout button when logged in
    } else {
        authStatus.textContent = "You are not logged in";
        loginBtn.style.display = "block"; // Show the login button when not logged in
        logoutBtn.style.display = "none"; // Hide the logout button when not logged in
    }
}

// Function to refresh the page
function refreshPage() {
    window.location.reload();
}

// Initial update of the authentication status
updateAuthStatus();

// Event listener for the login button
loginBtn.addEventListener("click", function () {
    // Set the user as logged in in localStorage
    localStorage.setItem("isLoggedIn", "true");
    // Update the authentication status
    updateAuthStatus();
    // Refresh the page after a brief delay
    setTimeout(refreshPage, 100);
});

// Event listener for the logout button
logoutBtn.addEventListener("click", function () {
    // Remove the user's authentication status from localStorage
    localStorage.removeItem("isLoggedIn");
    // Update the authentication status
    updateAuthStatus();
    // Refresh the page after a brief delay
    setTimeout(refreshPage, 100);
});
