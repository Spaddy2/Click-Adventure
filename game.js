const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spin');
const teamInputs = document.querySelectorAll('.team input');

const teams = [
    'Cardinals', 'Chaser 1', 'Ravens', 'Bills',
    'Chaser 6', 'Bears', 'Bengals', 'Browns',
    'Cowboys', 'Broncos', 'Chaser 2', 'Packers',
    'Chaser 5', 'Chaser 4', 'Jaguars', 'Chiefs',
    'Raiders', 'Chargers', 'Chaser 3', 'Dolphins',
    'Vikings', 'Patriots', 'Saints', 'Giants',
    'Jets', 'Eagles', 'Steelers', '49ers',
    'Seahawks', 'Buccaneers', 'Titans', 'Commanders'
];

const drawWheel = () => {
    const totalOdds = Array.from(teamInputs).reduce((sum, input) => sum + Number(input.value), 0);
    let startAngle = 0;

    teams.forEach((team, index) => {
        const teamOdds = Number(teamInputs[index].value);
        const sliceAngle = (teamOdds / totalOdds) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = `hsl(${(index / teams.length) * 360}, 100%, 50%)`;
        ctx.fill();

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(team, canvas.width / 2 - 10, 0);
        ctx.restore();

        startAngle += sliceAngle;
    });
};

const spinWheel = () => {
    const totalOdds = Array.from(teamInputs).reduce((sum, input) => sum + Number(input.value), 0);
    const randomAngle = Math.random() * totalOdds;
    let cumulativeOdds = 0;

    for (let i = 0; i < teams.length; i++) {
        cumulativeOdds += Number(teamInputs[i].value);
        if (randomAngle < cumulativeOdds) {
            alert(`The wheel landed on: ${teams[i]}`);
            break;
        }
    }
};

spinButton.addEventListener('click', spinWheel);
teamInputs.forEach(input => input.addEventListener('input', drawWheel));

drawWheel();
