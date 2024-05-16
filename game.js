// game.js
document.addEventListener('DOMContentLoaded', function() {
    let resources = { wood: 0, stone: 0 };
    let upgrades = {
        axe: { level: 0, cost: 100, nextCostIncrease: 250, isAvailable: false },
        pickaxe: { level: 0, cost: 100, nextCostIncrease: 250, isAvailable: false }
    };

    function updateDisplay() {
    document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
    document.getElementById('stone').textContent = `Stone: ${resources.stone}`;
    
    // Ensure the stone gathering and button are shown correctly at 500 wood
    if (resources.wood >= 500 && document.getElementById('stone').style.display === 'none') {
        document.getElementById('stone').style.display = 'block';
        document.getElementById('stoneButton').style.display = 'inline';
    }

    // Show the axe upgrade button only when the player has enough wood and it hasn't been shown before
    if (resources.wood >= 100 && !upgrades.axe.isAvailable) {
        document.getElementById('axeButton').style.display = 'inline';
        upgrades.axe.isAvailable = true; // Ensures this block doesn't run again unnecessarily
    }

    document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
    document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
}

        if (resources.stone >= upgrades.pickaxe.cost && !upgrades.pickaxe.isAvailable) {
            document.getElementById('pickaxeButton').style.display = 'inline';
            upgrades.pickaxe.isAvailable = true;
        }

        document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
        document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
    }

    document.getElementById('woodButton').addEventListener('click', function() {
    resources.wood += 1 + upgrades.axe.level; // Increment wood by 1 plus the level of the axe upgrade
    updateDisplay(); // Update UI elements based on new resource counts
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
            upgrades.axe.nextCostIncrease *= 2; // Double the next cost increase
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
            upgrades.pickaxe.nextCostIncrease *= 2; // Double the next cost increase
            updateDisplay();
        } else {
            alert('Not enough stone to upgrade the pickaxe!');
        }
    });

    updateDisplay();
});
