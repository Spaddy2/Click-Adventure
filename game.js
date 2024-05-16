const gameData = {
    resources: {
        wood: 0,
        stone: 0,
        coins: 0,
        iron: 0
    },
    buildings: {
        sawmill: { cost: { wood: 100, stone: 50 }, owned: 0, production: { wood: 5 } },
        quarry: { cost: { wood: 50, stone: 100 }, owned: 0, production: { stone: 5 } },
        mine: { cost: { wood: 150, stone: 150 }, owned: 0, production: { iron: 2 } },
        bank: { cost: { wood: 200, stone: 200, iron: 50 }, owned: 0, production: { coins: 1 } }
    },
    storyProgress: {
        currentChapter: 1,
        eventsTriggered: {}
    }
};

function updateDisplay() {
    document.getElementById('woodCount').textContent = gameData.resources.wood;
    document.getElementById('stoneCount').textContent = gameData.resources.stone;
    document.getElementById('coinsCount').textContent = gameData.resources.coins;
    document.getElementById('ironCount').textContent = gameData.resources.iron;
    document.getElementById('storyText').textContent = getStoryText(gameData.storyProgress.currentChapter);
}

function getStoryText(chapter) {
    const stories = {
        1: "Welcome, adventurer! Gather resources to build your empire.",
        2: "Your empire grows, but so do the challenges. Explore to find new opportunities.",
        3: "Darkness creeps at the borders of your growing empire. Prepare your defenses.",
    };
    return stories[chapter] || "An unknown force disrupts your journey...";
}

function autoGatherResources() {
    Object.keys(gameData.buildings).forEach(building => {
        Object.keys(gameData.buildings[building].production).forEach(resource => {
            gameData.resources[resource] += gameData.buildings[building].owned * gameData.buildings[building].production[resource];
        });
    });
    updateDisplay();
    checkStoryProgress();
}

function purchaseBuilding(building) {
    const cost = gameData.buildings[building].cost;
    if (Object.keys(cost).every(resource => gameData.resources[resource] >= cost[resource])) {
        Object.keys(cost).forEach(resource => {
            gameData.resources[resource] -= cost[resource];
        });
        gameData.buildings[building].owned++;
        updateDisplay();
    } else {
        alert('Not enough resources!');
    }
}

function checkStoryProgress() {
    if (gameData.resources.wood >= 500 && !gameData.storyProgress.eventsTriggered['wood500']) {
        gameData.storyProgress.currentChapter = 2;
        gameData.storyProgress.eventsTriggered['wood500'] = true;
        alert("Chapter 2 Unlocked: Explore new areas!");
    }
}

function exploreNewArea() {
    if (gameData.buildings.bank.owned >= 1) {
        gameData.storyProgress.currentChapter = 3;
        alert("You've discovered a new threat. Prepare your defenses!");
    } else {
        alert("You need at least one bank to finance an expedition.");
    }
}

setInterval(autoGatherResources, 1000); // Automatically gather resources every second
