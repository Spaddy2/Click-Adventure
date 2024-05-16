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

// Function handling choices made by the player
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
    }
    updateStatus();
}
