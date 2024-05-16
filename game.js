let candies = 0;
let candiesPerSecond = 1;
let generatorPrice = 100;
let achievements = [];
let spells = { 'Double Candy': { cost: 500, active: false } };

function updateCandyCount() {
    candies += candiesPerSecond;
    document.getElementById('candy-counter').innerText = `Candies: ${candies}`;
    checkAchievements();
    updateShopItems();
}

function eatCandy() {
    if (candies >= 10) {
        candies -= 10;
        updateCandyCount();
    } else {
        alert("Not enough candies to eat!");
    }
}

function throwCandy() {
    if (candies >= 10) {
        candies -= 10;
        updateCandyCount();
        displayEvent("You threw 10 candies on the ground.");
    } else {
        alert("Not enough candies to throw!");
    }
}

function buyCandyGenerator() {
    if (candies >= generatorPrice) {
        candies -= generatorPrice;
        candiesPerSecond += 1;
        generatorPrice *= 2; // Price doubles each time
        updateCandyCount();
        displayEvent("Candy generator purchased! Candies per second increased.");
    } else {
        alert("Not enough candies to buy a generator!");
    }
}

function startQuest() {
    if (candies >= 200) {
        candies -= 200;
        updateCandyCount();
        displayEvent("You embarked on a quest and found mysterious items!");
        // Add rewards or effects from quest
    } else {
        alert("Not enough candies for a quest!");
    }
}

function castSpell() {
    let spellCost = spells['Double Candy'].cost;
    if (candies >= spellCost) {
        candies -= spellCost;
        candiesPerSecond *= 2; // Double the candy production temporarily
        updateCandyCount();
        displayEvent("You cast a spell to double your candy production!");
        setTimeout(() => {
            candiesPerSecond /= 2; // Revert to normal after 30 seconds
            displayEvent("The spell's effect has worn off.");
        }, 30000);
    } else {
        alert("Not enough candies to cast a spell!");
    }
}

function updateShopItems() {
    document.getElementById('shop-items').innerHTML = `<div class="shop-item">
        <button onclick="buyCandyGenerator()">Buy Candy Generator (${generatorPrice} candies)</button>
    </div>`;
}

function displayEvent(message) {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML += `<div>${message}</div>`;
}

setInterval(updateCandyCount, 1000); // Update the candy count every second
