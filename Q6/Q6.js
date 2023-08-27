// Your task is to use JS DOM to create a heading element and a
// dropdown element. You have an array of options, and you need
// to loop through them, adding each option as a dropdown item.
// Below are the reference images

// Get elements from the DOM
const dropdownHeading = document.getElementById("dropdownHeading");
const dropdown = document.getElementById("dropdown");

// Array of options
const options = ["Click Here To Select", "Javascript", "Java", "Python", "C++", "GoLang"];

// Loop through the options and add them to the dropdown
for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option"); // Create an option element
    option.text = options[i]; // Set the text of the option
    dropdown.appendChild(option); // Add the option to the dropdown
}

// Add an event listener to the dropdown to handle selection changes
// Add an event listener to the dropdown to handle selection changes
dropdown.addEventListener("change", function () {
    // Get the selected option's index
    const selectedIndex = dropdown.selectedIndex;

    // Check if the selected option is not the first one
    if (selectedIndex !== 0) {
        const selectedOption = dropdown.options[selectedIndex].text;
        dropdownHeading.textContent = `Selected: ${selectedOption}`;
    }
    else {
        dropdownHeading.textContent = `Select From Below`
    }
});

