const passwordLengthInput = document.getElementById('password-length');
const generatePasswordButton = document.getElementById('generate-password-button');
const passwordResult = document.getElementById('password-result');

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?';
    let password = '';

    for (let index = 0; index < length; index += 1) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

generatePasswordButton.addEventListener('click', () => {
    const length = Number(passwordLengthInput.value);

    if (!passwordLengthInput.value || length < 4) {
        passwordResult.textContent = 'La longitud debe ser mayor o igual a 4.';
        return;
    }

    passwordResult.textContent = `Contrasena: ${generatePassword(length)}`;
});