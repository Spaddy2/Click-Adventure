const teams = [
    "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills",
    "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
    "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
    "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs",
    "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins",
    "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
    "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
    "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders"
];

let odds = teams.reduce((acc, team) => {
    acc[team] = 1;
    return acc;
}, {});

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');
const setOddsButton = document.getElementById('setOddsButton');
const removeTeamButton = document.getElementById('removeTeamButton');
const teamNameInput = document.getElementById('teamName');
const teamOddsInput = document.getElementById('teamOdds');
const removeTeamNameInput = document.getElementById('removeTeamName');
const teamsList = document.getElementById('teams');

const drawWheel = () => {
    const totalOdds = Object.values(odds).reduce((acc, odd) => acc + odd, 0);
    const anglePerOdd = (2 * Math.PI) / totalOdds;
    let startAngle = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    teams.forEach(team => {
        if (odds[team]) {
            const endAngle = startAngle + (anglePerOdd * odds[team]);
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, endAngle);
            ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);
            ctx.fill();
            ctx.stroke();
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((startAngle + endAngle) / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "#000";
            ctx.fillText(team, canvas.width / 2 - 10, 10);
            ctx.restore();
            startAngle = endAngle;
        }
    });
};

const updateTeamsList = () => {
    teamsList.innerHTML = '';
    teams.forEach(team => {
        if (odds[team]) {
            const li = document.createElement('li');
            li.textContent = `${team}: ${odds[team]} entries`;
            teamsList.appendChild(li);
        }
    });
};

const spinWheel = () => {
    const totalOdds = Object.values(odds).reduce((acc, odd) => acc + odd, 0);
    const randomOdd = Math.floor(Math.random() * totalOdds);
    let cumulativeOdds = 0;
    let selectedTeam = '';

    for (let team in odds) {
        if (odds[team]) {
            cumulativeOdds += odds[team];
            if (randomOdd < cumulativeOdds) {
                selectedTeam = team;
                break;
            }
        }
    }

    alert(`Selected team: ${selectedTeam}`);
};

spinButton.addEventListener('click', spinWheel);

setOddsButton.addEventListener('click', () => {
    const team = teamNameInput.value;
    const newOdds = parseInt(teamOddsInput.value);

    if (team && newOdds > 0 && teams.includes(team)) {
        odds[team] = newOdds;
        drawWheel();
        updateTeamsList();
    } else {
        alert('Please enter a valid team name and odds.');
    }
});

removeTeamButton.addEventListener('click', () => {
    const team = removeTeamNameInput.value;

    if (team && teams.includes(team)) {
        odds[team] = 0;
        drawWheel();
        updateTeamsList();
    } else {
        alert('Please enter a valid team name.');
    }
});

drawWheel();
updateTeamsList();
