let pearls = 0;
let pearlsPerSecond = 1;  // Starting with 1 pearl per second
let upgradeCost = 100;    // Initial cost for the first upgrade

// This function updates the pearl count display
function updatePearlCount() {
    pearls += pearlsPerSecond;  // Add pearls per second to the total count
    document.getElementById('pearl-counter').innerText = `Pearls: ${pearls}`;  // Update the display
}

// This function is triggered by a button to manually search for pearls
function searchPearls() {
    pearls += 10;  // Add 10 pearls manually
    updatePearlCount();
    displayEvent("You found 10 pearls on the beach.");
}

// This function handles exploration events
function exploreIsland() {
    if (pearls >= 20) {
        pearls -= 20;  // Cost for exploring
        updatePearlCount();
        displayEvent("You explored the island and discovered a hidden cave!");
    } else {
        alert("You need more pearls to go on this exploration!");
    }
}

// Function to handle purchasing upgrades
function buyUpgrade() {
    if (pearls >= upgradeCost) {
        pearls -= upgradeCost;  // Deduct the cost of the upgrade
        pearlsPerSecond += 1;  // Increase the rate of pearl collection
        upgradeCost *= 2;  // Double the cost for the next upgrade
        updatePearlCount();
        displayEvent("You purchased a net, increasing your pearl collection rate!");
    } else {
        alert("Not enough pearls to buy this upgrade!");
    }
}

// Display game events
function displayEvent(message) {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML += `<div>${message}</div>`;  // Append new events to the events div
}

// Set up an interval to update the pearl count every second
setInterval(updatePearlCount, 1000);

