// game.js
document.addEventListener('DOMContentLoaded', function() {
    let resources = { wood: 0, stone: 0 };
    let upgrades = {
        axe: { level: 0, cost: 100, nextCostIncrease: 250 },
        pickaxe: { level: 0, cost: 100, nextCostIncrease: 250 }
    };

    function updateDisplay() {
        document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
        document.getElementById('stone').textContent = `Stone: ${resources.stone}`;
        if (resources.wood >= 100) {
            document.getElementById('axeButton').style.display = 'inline';
            document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
        }
        if (resources.stone >= 100) {
            document.getElementById('pickaxeButton').style.display = 'inline';
            document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
        }
    }

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
