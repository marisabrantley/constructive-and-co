/* This script displays a greeting to the user based upon the current time.
It is an exercise from the JavaScript & jQuery book */

const today = new Date();  // Create a new date object
const hourNow = today.getHours();  // Find the current hour
let greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');