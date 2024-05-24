const teams = [
    'Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills',
    'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns',
    'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers',
    'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs',
    'Las Vegas Raiders', 'Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins',
    'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants',
    'New York Jets', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers',
    'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Commanders'
];

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const teamOddsContainer = document.getElementById('teamOdds');
const spinButton = document.getElementById('spinButton');

const odds = new Array(teams.length).fill(1);

let startAngle = 0;
let spinAngle = 0;
let spinTimeout = null;

function drawWheel() {
    const totalOdds = odds.reduce((a, b) => a + b, 0);
    const anglePer
