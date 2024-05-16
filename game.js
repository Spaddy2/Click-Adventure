// Define game data including resources, buildings, and workers
const gameData = {
    resources: {
        wood: 0,
        stone: 0,
        coins: 50, // Start with some coins
        iron: 0,
        food: 100 // Start with some food
    },
    buildings: {
        sawmill: { cost: { wood: 100, stone: 50 }, owned: 0, production: { wood: 5 }, consumes: { food: 1 } },
        quarry: { cost: { wood: 50, stone: 100 }, owned: 0, production: { stone: 5 }, consumes: { food: 1 } },
        mine: { cost: { wood: 150, stone: 150 }, owned: 0, production: { iron: 2 }, consumes: { food: 2 } },
        farm: { cost: { wood: 100, stone: 50 }, owned: 0, production: { food: 10 } },
        bank: { cost: { wood: 200, stone: 200, iron: 50 }, owned: 0, production: { coins: 1 } }
    },
    storyProgress: {
        currentChapter: 1,
        eventsTriggered: {}
    }
};

// Function to update resource displays
function updateDisplay() {
    Object.keys(gameData.resources).forEach(resource => {
        const resourceDisplay = document.getElementById(resource + 'Count');
        if (resourceDisplay) {
            resourceDisplay.textContent = gameData.resources[resource];
        }
    });
    document.getElementById('storyText').textContent = getStoryText(gameData.storyProgress.currentChapter);
}

// Retrieve story text based on current chapter
function getStoryText(chapter) {
    const stories = {
        1: "Welcome, adventurer! Gather resources to build your empire.",
        2: "Your empire grows, but so do the challenges. Explore to find new opportunities.",
        3: "Darkness creeps at the borders of your growing empire. Prepare your defenses."
    };
    return stories[chapter] || "An unknown force disrupts your journey...";
}

// Automatically gather resources based on buildings owned
function autoGatherResources() {
    Object.keys(gameData.buildings).forEach(building => {
        if (gameData.resources.food >= gameData.buildings[building].consumes?.food * gameData.buildings[building].owned) {
            gameData.resources.food -= gameData.buildings[building].consumes?.food * gameData.buildings[building].owned;
            Object.keys(gameData.buildings[building].production).forEach(resource => {
                gameData.resources[resource] += gameData.buildings[building].owned * gameData.buildings[building].production[resource];
            });
        }
    });
    updateDisplay();
}

// Manual gathering of resources
function manualGather(resource) {
    gameData.resources[resource] += 1;
    updateDisplay();
}

// Purchase buildings and increase production
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

// Upgrade buildings to enhance production
function upgradeBuilding(building) {
    const upgradeCost = 200; // Example upgrade cost, can be dynamic based on building type
    if (gameData.resources.coins >= upgradeCost) {
        gameData.resources.coins -= upgradeCost;
        gameData.buildings[building].production[Object.keys(gameData.buildings[building].production)[0]] *= 1.5; // Increase production by 50%
        updateDisplay();
        alert(building + ' upgraded!');
    } else {
        alert('Not enough coins to upgrade ' + building);
    }
}

// Explore new areas and possibly find resources or face challenges
function explore() {
    const chance = Math.random();
    if (chance < 0.5) {
        alert('You found new resources!');
        gameData.resources.iron += 50; // Example of finding iron
    } else {
        alert('Nothing found this time.');
    }
    updateDisplay();
}

// Trade resources for coins or vice versa
function tradeResources(resource, amount, price) {
    if (gameData.resources.coins >= price) {
        gameData.resources.coins -= price;
        gameData.resources[resource] += amount;
        alert('Trade successful!');
    } else {
        alert('Not enough coins to trade');
    }
    updateDisplay();
}

// Initialize automatic resource gathering
setInterval(autoGatherResources, 1000); // Automatically gather resources every second
