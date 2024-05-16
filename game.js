// Global variables to track game state
let pearls = 0;
let wood = 0;
let stones = 0;
let morale = "neutral";

// Function to collect pearls every second
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

// Initialize pearl collection timer
setInterval(collectPearls, 1000);

// Function to trigger a decision-making pop-up
function promptDecision() {
    let choice = prompt("Choose an action:\n1. Collect Wood\n2. Collect Stones\n3. Lay Down and Cry", "Enter 1, 2, or 3");
    if (choice) {  // Check if choice is not null (i.e., the user didn't just cancel the prompt)
        makeChoice(parseInt(choice));
    } else {
        document.getElementById('story').textContent = "No action taken.";
    }
}

// Function handling choices made by the player based on the pop-up input
function makeChoice(option) {
    try {
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
            default:
                document.getElementById('story').textContent = "Invalid choice. Please choose 1, 2, or 3.";
                setTimeout(promptDecision, 1000);  // Re-prompt after a delay if invalid input
                return;  // Exit function to avoid updating status if invalid
        }
        updateStatus();
    } catch (error) {
        console.error('Error processing choice:', error);
        document.getElementById('story').textContent = "An error occurred. Please try again.";
    }
}

// Optionally, trigger the decision prompt manually or via another UI element or game event
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(promptDecision, 3000);  // Wait 3 seconds after game loads to start prompting
});
// Get the modal
var modal = document.getElementById("choiceModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function showChoices() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showChoices, 3000); // Show choices after 3 seconds
});
