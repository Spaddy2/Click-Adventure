// game.js
document.addEventListener('DOMContentLoaded', function() {
    let resources = { wood: 0, stone: 0 };
    let upgrades = { axe: { level: 0, cost: 100 }, pickaxe: { level: 0, cost: 100 } };

    function updateDisplay() {
        document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
        document.getElementById('stone').textContent = `Stone: ${resources.stone}`;
        document.getElementById('axeButton').textContent = `Upgrade Axe - Cost: ${upgrades.axe.cost} Wood`;
        document.getElementById('pickaxeButton').textContent = `Upgrade Pickaxe - Cost: ${upgrades.pickaxe.cost} Stone`;
    }

    document.getElementById('woodButton').addEventListener('click', () => gatherResource('wood'));
    document.getElementById('stoneButton').addEventListener('click', () => gatherResource('stone'));
    document.getElementById('axeButton').addEventListener('click', () => buyUpgrade('axe'));
    document.getElementById('pickaxeButton').addEventListener('click', () => buyUpgrade('pickaxe'));
    document.getElementById('buildShelterButton').addEventListener('click', buildShelter);

    function gatherResource(type) {
        resources[type] += 1 + (type === 'wood' ? upgrades.axe.level : upgrades.pickaxe.level);
        updateDisplay();
    }

    function buyUpgrade(type) {
        let tool = type === 'axe' ? 'wood' : 'stone';
        if (resources[tool] >= upgrades[type].cost) {
            resources[tool] -= upgrades[type].cost;
            upgrades[type].level++;
            upgrades[type].cost *= 2; // Doubles the cost for next upgrade
            updateDisplay();
        } else {
            alert('Not enough resources!');
        }
    }

    function buildShelter() {
        if (resources.wood >= 200 && resources.stone >= 100) {
            resources.wood -= 200;
            resources.stone -= 100;
            alert('Shelter built!');
            updateDisplay();
        } else {
            alert('Not enough resources to build a shelter!');
        }
    }

    updateDisplay();
});
