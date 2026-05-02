const textCounterInput = document.getElementById('text-counter-input');
const characterCount = document.getElementById('character-count');
const wordCount = document.getElementById('word-count');

textCounterInput.addEventListener('input', () => {
    const text = textCounterInput.value;
    const characters = text.replace(/[\s\n]/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

    characterCount.textContent = `Caracteres: ${characters}`;
    wordCount.textContent = `Palabras: ${words}`;
});