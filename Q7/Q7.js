// You are tasked to create an input field and a list of items. As the
// user types in the input field, dynamically filter the list to show
// only items that match the input. Making sure the list updates in
// real-time as the user types.

// Get elements from the DOM
const filterInput = document.getElementById("filterInput");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");

// Add an input event listener to the input field
filterInput.addEventListener("input", function () {
    const filter = filterInput.value.toLowerCase(); // Get user input and convert to lowercase

    // Loop through the list items
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const text = item.textContent.toLowerCase(); // Get item text and convert to lowercase

        // Check if the item text contains the filter text
        if (text.includes(filter)) {
            item.style.display = "block"; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    }
});
