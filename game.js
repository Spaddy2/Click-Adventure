// Global variables to track game state and choices made
let pearls = 0;
let wood = 0;
let stones = 0;
let morale = "neutral";
let choicesMade = { 1: false, 2: false, 3: false };

// Function to collect pearls every second
setInterval(function() {
    pearls += 1;
    document.getElementById('pearls').textContent = 'Pearls: ' + pearls;
}, 1000);

// Function to open the modal with choices
function showChoices() {
    if (!choicesMade[1] || !choicesMade[2] || !choicesMade[3]) {
        modal.style.display = "block";
    } else {
        document.getElementById('story').textContent = "All actions taken.";
    }
}

// Function to handle choices and disable buttons
function makeChoice(option, element) {
    switch (option) {
        case 1:
            wood += 5;
            break;
        case 2:
            stones += 3;
            break;
        case 3:
            morale = "low";
            break;
    }
    element.disabled = true; // Disable the button
    choicesMade[option] = true; // Mark this choice as made
    updateStatus(); // Update the status on the page

    // Check if all choices are made
    if (choicesMade[1] && choicesMade[2] && choicesMade[3]) {
        modal.style.display = "none"; // Close the modal if all choices are made
    }
}

// Update the game status displayed to the player
function updateStatus() {
    document.getElementById('status').innerHTML = `
        <p>Location: Island</p>
        <p>Pearls: ${pearls}</p>
        <p>Wood: ${wood}</p>
        <p>Stones: ${stones}</p>
        <p>Morale: ${morale}</p>
    `;
    showChoices(); // Show choices again until all are made
}

// Close modal functionality
var modal = document.getElementById("choiceModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initial call to show choices
document.addEventListener('DOMContentLoaded', showChoices);
    setTimeout(showChoices, 3000); // Show choices after 3 seconds
});
