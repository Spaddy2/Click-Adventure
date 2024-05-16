// game.js
document.addEventListener('DOMContentLoaded', function() {
    let resources = { wood: 0, stone: 0 };
    let upgrades = {
        axe: { level: 0, cost: 100, nextCostIncrease: 250, isAvailable: false },
        pickaxe: { level: 0, cost: 100, nextCostIncrease: 250, isAvailable: false }
    };

    // Define the updateDisplay function here
    function updateDisplay() {
        document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
        document.getElementById('stone').textContent = `Stone: ${resources.stone}`;
        
        // Conditional display of elements based on resource thresholds
        if (resources.wood >= 100 && !upgrades.axe.isAvailable) {
            document.getElementById('axeButton').style.display = 'inline';
            upgrades.axe.isAvailable = true;
        }
        if (resources.stone >= 100 && !upgrades.pickaxe.isAvailable) {
            document.getElementById('pickaxeButton').style.display = 'inline';
            upgrades.pickaxe.isAvailable = true;
        }
        if (resources.wood >= 500) {
            document.getElementById('stoneButton').style.display = 'inline';
            document.getElementById('stone').style.display = 'block';
            document.getElementById('buildHouseButton').style.display = 'inline';
            document.getElementById('travelers').style.display = 'block';
        }

        document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
        document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
    }

    // All your event listeners should be defined after the updateDisplay function
    document.getElementById('woodButton').addEventListener('click', function() {
        resources.wood += 1 + upgrades.axe.level;
        updateDisplay();
    });

    document.getElementById('stoneButton').addEventListener('click', function() {
        resources.stone += 1 + upgrades.pickaxe.level;
        updateDisplay();
    });

    document.getElementById('axeButton').addEventListener('click', function() {
        if (resources.wood >= upgrades.axe.cost) {
            resources.wood -= upgrades.axe.cost;
            upgrades.axe.level += 1;
            upgrades.axe.cost = upgrades.axe.nextCostIncrease;
            upgrades.axe.nextCostIncrease *= 2;
            updateDisplay();
        } else {
            alert('Not enough wood to upgrade the axe!');
        }
    });

    document.getElementById('pickaxeButton').addEventListener('click', function() {
        if (resources.stone >= upgrades.pickaxe.cost) {
            resources.stone -= upgrades.pickaxe.cost;
            upgrades.pickaxe.level += 1;
            upgrades.pickaxe.cost = upgrades.pickaxe.nextCostIncrease;
            upgrades.pickaxe.nextCostIncrease *= 2;
            updateDisplay();
        } else {
            alert('Not enough stone to upgrade the pickaxe!');
        }
    });

    document.getElementById('buildHouseButton').addEventListener('click', function() {
        if (resources.wood >= 500) {
            resources.wood -= 500;
            document.getElementById('travelers').textContent = `Travelers waiting for housing: ${++travelers}`;
            updateDisplay();
        } else {
            alert('Not enough wood to build a house!');
        }
    });

    updateDisplay(); // Initial call to set up the UI based on initial state
});

function updateDisplay() {
    document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
    document.getElementById('stone').textContent = `Stone: ${resources.stone}`;

    // Update button texts
    document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
    document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
    document.getElementById('buildHouseButton').textContent = `Build House - Cost: 500 Wood`;

    // Show or hide elements based on resources
    document.getElementById('axeButton').style.display = resources.wood >= upgrades.axe.cost ? 'inline' : 'none';
    document.getElementById('pickaxeButton').style.display = resources.stone >= upgrades.pickaxe.cost ? 'inline' : 'none';
    document.getElementById('buildHouseButton').style.display = resources.wood >= 500 ? 'inline' : 'none';
    document.getElementById('stoneButton').style.display = resources.wood >= 500 ? 'inline' : 'none';
    document.getElementById('stone').style.display = resources.wood >= 500 ? 'block' : 'none';
}
