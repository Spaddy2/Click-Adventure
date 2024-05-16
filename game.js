// game.js
let pearls = 0;
let wood = 0;
let stones = 0;
let morale = "neutral";

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

setInterval(collectPearls, 1000);

function makeChoice(option) {
    switch (option) {
        case 1:
            wood += 1;
            document.getElementById('story').textContent = "You collected wood.";
            break;
        case 2:
            stones += 1;
            document.getElementById('story').textContent = "You collected stones.";
            break;
        case 3:
            morale = "low";
            document.getElementById('story').textContent = "You lay down and cried, feeling hopeless.";
            break;
    }
    updateStatus();
}
