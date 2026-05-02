const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer-button');
const pauseTimerButton = document.getElementById('pause-timer-button');
const resetTimerButton = document.getElementById('reset-timer-button');

let totalSeconds = 0;
let timerInterval = null;

function formatTime(value) {
    return String(value).padStart(2, '0');
}

function updateTimerDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

startTimerButton.addEventListener('click', () => {
    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(() => {
        totalSeconds += 1;
        updateTimerDisplay();
    }, 1000);
});

pauseTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 0;
    updateTimerDisplay();
});