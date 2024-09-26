// script.js
document.getElementById('drawButton').addEventListener('click', drawStars);
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function drawStars() {
    const starCount = parseInt(document.getElementById('starCount').value);
    const errorElement = document.getElementById('error');
    const starMessage = document.getElementById('starMessage');

    // Clear previous errors and messages
    errorElement.textContent = '';
    starMessage.textContent = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars = [];

    if (isNaN(starCount) || starCount <= 0) {
        errorElement.textContent = '* Invalid Input';
        return;
    }

    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * (canvas.width - 20) + 10;
        const y = Math.random() * (canvas.height - 20) + 10;
        drawStar(x, y, 5, 10, 5);
        stars.push({ x, y, radius: 10, number: i + 1 });
    }
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffd700';
    ctx.stroke();
    ctx.fillStyle = '#ffd700';
    ctx.fill();
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const dx = x - star.x;
        const dy = y - star.y;
        if (Math.sqrt(dx * dx + dy * dy) < star.radius) {
            document.getElementById('starMessage').textContent = `You clicked on star number: ${star.number}`;
            break;
        }
    }
});
