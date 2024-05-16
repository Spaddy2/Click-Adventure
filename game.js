let pearls = 0;
let pearlsPerSecond = 1;
let upgradeCost = 100;

function updatePearlCount() {
    pearls += pearlsPerSecond;
    document.getElementById('pearl-counter').innerText = `Pearls: ${pearls}`;
}

function searchPearls() {
    pearls += 10;
    updatePearlCount();
    displayEvent("You found 10 pearls on the beach.");
}

function exploreIsland() {
    if (pearls >= 20) {
        pearls -= 20;
        updatePearlCount();
        displayEvent("You explored the island and discovered a hidden cave!");
    } else {
        alert("You need more pearls to go on this exploration!");
    }
}

function startQuest() {
    if (pearls >= 200) {
        pearls -= 200;
        updatePearlCount();
        displayEvent("You embarked on a quest and found an ancient artifact!");
    } else {
        alert("Not enough pearls to embark on a quest!");
    }
}

function buyUpgrade() {
    if (pearls >= upgradeCost) {
        pearls -= upgradeCost;
        pearlsPerSecond += 1; // Increase pearls per second rate
        upgradeCost *= 2; // Double the cost for the next upgrade
        updatePearlCount();
        displayEvent("You purchased a net, increasing your pearl collection rate!");
    } else {
        alert("Not enough pearls to buy this upgrade!");
    }
}

function displayEvent(message) {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML += `<div>${message}</div>`;
}

setInterval(updatePearlCount, 1000); // Update the pearl count every second
