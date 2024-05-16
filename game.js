// game.js
let pearls = 0;
let wood = 0;
let stones = 0;
let morale = "neutral"; // Additional state to track the player's morale

function collectPearls() {
    pearls += 1;
    document.getElementById('pearls').textContent = 'Pearls: ' + pearls;
}

function updateStatus() {
    document.getElementById('status').innerHTML = `
        <p>Location: Island</p>
        <p>Pearls: ${pearls}</p>
        <p>Wood: ${wood}</p>
        <p>Stones: ${stones}</p>
        <p>Morale: ${morale}</p>
    `;
}

// Initialize pearl collection every second
setInterval(collectPearls, 1000);

function makeChoice(option) {
    switch (option) {
        case 1: // Collect wood
            wood += 5;
            document.getElementById('story').textContent = "You collected wood.";
            break;
        case 2: // Collect stones
            stones += 3;
            document.getElementById('story').textContent = "You collected stones.";
            break;
        case 3: // Lay down and cry
            morale = "low";
            document.getElementById('story').textContent = "You lay down and cried, feeling hopeless.";
            break;
    }
    updateStatus();
}
