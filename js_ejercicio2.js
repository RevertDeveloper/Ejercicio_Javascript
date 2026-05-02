const countClicksButton = document.getElementById('count-clicks-button');
const clickCounter = document.getElementById('click-counter');

let totalClicks = 0;

countClicksButton.addEventListener('click', () => {
    totalClicks += 1;
    clickCounter.textContent = `Clics: ${totalClicks}`;
});