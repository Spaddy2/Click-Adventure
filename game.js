// game.js
document.addEventListener('DOMContentLoaded', function() {
    let resources = { wood: 0, stone: 0 };
    let houses = 0;
    let travelers = 0;
    let houseCost = 500;

    function updateDisplay() {
        document.getElementById('wood').textContent = `Wood: ${resources.wood}`;
        document.getElementById('stone').textContent = `Stone: ${resources.stone}`;
        document.getElementById('buildHouseButton').textContent = `Build House - Cost: ${houseCost} Wood`;

        // Unlock stone gathering at 500 wood
        if (resources.wood >= 500) {
            document.getElementById('stone').style.display = 'block';
            document.getElementById('stoneButton').style.display = 'block';
        }

        if (resources.wood >= 50) {
            document.getElementById('villageContainer').style.display = 'block';
        }
    }

    document.getElementById('woodButton').addEventListener('click', function() {
        resources.wood += 1;
        updateDisplay();
    });

    document.getElementById('stoneButton').addEventListener('click', function() {
        resources.stone += 1;
        updateDisplay();
    });

    // Existing code for upgrades and housing...
    updateDisplay();
});
