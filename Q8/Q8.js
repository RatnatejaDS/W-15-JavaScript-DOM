// Your task is to create a webpage that displays the time in hours,
// minutes, and seconds in the center of the screen. Format the
// time to have 2 digits for hours, minutes, and seconds, and use
// the time's values to assign a hex code to the background. The
// timer should update in real-time without any user interaction. For
// Example: If the time is 12:10:50 the background color of the
// webpage will have the hex code “#121050”.

function updateClock() {
    const now = new Date(); // Get the current time
    const hours = now.getHours().toString().padStart(2, '0'); // Format hours with 2 digits
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes with 2 digits
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Format seconds with 2 digits

    const timeString = `${hours}:${minutes}:${seconds}`;
    const backgroundColor = `#${hours}${minutes}${seconds}`; // Generate hex color code

    document.getElementById("clock").textContent = timeString; // Update the time display
    document.body.style.backgroundColor = backgroundColor; // Update the background color

    setTimeout(updateClock, 1000); // Update the clock every second
}

updateClock(); // Initial call to start the clock
