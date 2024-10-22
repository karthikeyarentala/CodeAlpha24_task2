function appendToInput(value) {
    document.getElementById('textfield').value += value;
}

function clearInput() {
    document.getElementById('textfield').value = '';
}

function calculate() {
    const inputField = document.getElementById('textfield');
    try {
        inputField.value = eval(inputField.value);
    } catch (e) {
        inputField.value = 'Error';
    }
}