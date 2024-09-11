const moonElement = document.getElementById('moon');
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');

const moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
let currentPhase = 0;
let intervalId;
let animationSpeed = 300;

function animateMoon() {
    moonElement.textContent = moonPhases[currentPhase];
    currentPhase = (currentPhase + 1) % moonPhases.length;
}

function updateAnimationSpeed() {
    clearInterval(intervalId); // Clear existing interval
    intervalId = setInterval(animateMoon, animationSpeed); // Set new interval
}

speedRange.addEventListener('input', function () {
    animationSpeed = parseInt(speedRange.value);
    speedValue.textContent = `${animationSpeed}ms`;
    updateAnimationSpeed(); // Update speed dynamically
});

intervalId = setInterval(animateMoon, animationSpeed); // Start animation with default speed
