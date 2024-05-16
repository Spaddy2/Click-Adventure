// Global variables to track game state
let pearls = 0;
let wood = 0;
let stones = 0;
let morale = "neutral";

// Function to collect pearls every second
function collectPearls() {
    pearls += 1;
    document.getElementById('pearls').textContent = 'Pearls: ' + pearls;
}

// Function to update the game status displayed to the player
function updateStatus() {
    document.getElementById('status').innerHTML = `
        <p>Location: Island</p>
        <p>Pearls: ${pearls}</p>
        <p>Wood: ${wood}</p>
        <p>Stones: ${stones}</p>
        <p>Morale: ${morale}</p>
    `;
}

// Initialize pearl collection timer
setInterval(collectPearls, 1000);

// Function to trigger a decision-making pop-up
function promptDecision() {
    let choice = prompt("Choose an action:\n1. Collect Wood\n2. Collect Stones\n3. Lay Down and Cry", "Enter 1, 2, or 3");
    makeChoice(parseInt(choice));
}

// Function handling choices made by the player based on the pop-up input
function makeChoice(option) {
    switch (option) {
        case 1:
            wood += 5;
            document.getElementById('story').textContent = "You collected wood.";
            break;
        case 2:
            stones += 3;
            document.getElementById('story').textContent = "You collected stones.";
            break;
        case 3:
            morale = "low";
            document.getElementById('story').textContent = "You lay down and cried, feeling hopeless.";
            break;
        default:
            document.getElementById('story').textContent = "Invalid choice. Please choose 1, 2, or 3.";
            promptDecision();  // Re-prompt if invalid input
            break;
    }
    updateStatus();
}

// Optionally, set up a regular interval or event to trigger decisions
setInterval(promptDecision, 10000); // Every 10 seconds, for example

