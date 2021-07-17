/* This script displays a greeting to the user based upon the current time.
It is an exercise from the JavaScript & jQuery book */

const greeting = document.getElementById("greeting");

const today = new Date();  // Create a new date object
const hourNow = today.getHours();  // Find the current hour

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting.textContent = 'Good evening!';
} else if (hourNow > 12) {
    greeting.textContent = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting.textContent = 'Good morning!';
} else {
    greeting.textContent = 'Welcome!';
}
