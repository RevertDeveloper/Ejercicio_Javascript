const firstNumberInput = document.getElementById('first-number');
const secondNumberInput = document.getElementById('second-number');
const calculatorResult = document.getElementById('calculator-result');
const operationButtons = document.querySelectorAll('[data-operation]');

function getInputValues() {
    const firstValue = firstNumberInput.value;
    const secondValue = secondNumberInput.value;

    if (firstValue === '' || secondValue === '') {
        return null;
    }

    return {
        firstNumber: Number(firstValue),
        secondNumber: Number(secondValue)
    };
}

function showResult(message) {
    calculatorResult.textContent = `Resultado: ${message}`;
}

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const values = getInputValues();

        if (!values) {
            showResult('Debes completar ambos campos.');
            return;
        }

        const { firstNumber, secondNumber } = values;
        const operation = button.dataset.operation;

        if (operation === 'sum') {
            showResult(firstNumber + secondNumber);
            return;
        }

        if (operation === 'subtract') {
            showResult(firstNumber - secondNumber);
            return;
        }

        if (operation === 'multiply') {
            showResult(firstNumber * secondNumber);
            return;
        }

        if (secondNumber === 0) {
            showResult('No se puede dividir entre cero.');
            return;
        }

        showResult(firstNumber / secondNumber);
    });
});