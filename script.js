// Destination list
const destinations = ["Japan", "Portugal", "Thailand", "Iceland", "New Zealand", "Morocco"];

// Grab the button
const travelBtn = document.getElementById('travelBtn');

// Function to pick a random destination
function suggestDestination() {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  const chosen = destinations[randomIndex];
  document.getElementById("suggestion").textContent = `Let’s go to ${chosen}! 🌍✈️`;
}

// Attach the function to the button click
travelBtn.addEventListener("click", suggestDestination);