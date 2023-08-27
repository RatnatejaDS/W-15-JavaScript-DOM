// Your client needs a feature to upload a profile picture on their website. Your task is to create an "input type=file" element that allows users to select images. Once an image is uploaded,
// display a preview of the selected image below the file input. You are required to achieve this using JavaScript DOM manipulation

// Get references to the HTML elements
const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");

// Add an event listener for the 'change' event of the file input
fileInput.addEventListener("change", function () {
    // Check if the 'files' property exists and the first file is selected
    if (fileInput.files && fileInput.files[0]) {
        const selectedFile = fileInput.files[0];

        // Check if the selected file is an image (based on its MIME type)
        if (selectedFile.type.match(/^image\//)) {
            // Create a URL for the selected image file and set it as the image source
            imagePreview.src = URL.createObjectURL(selectedFile);

            // Display the image preview by changing its style to 'block'
            imagePreview.style.display = "block";
        } else {
            // Display an alert message if the selected file is not an image
            alert("Please select an image file.");

            // Clear the file input field
            fileInput.value = "";

            // Clear the image source and hide the image preview
            imagePreview.src = "";
            imagePreview.style.display = "none";
        }
    } else {
        // Clear the image source and hide the image preview if no file is selected
        imagePreview.src = "";
        imagePreview.style.display = "none";
    }
});
