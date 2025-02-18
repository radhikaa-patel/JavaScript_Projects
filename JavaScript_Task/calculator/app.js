const display = document.getElementById('display');

let currentInput = "";


document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', function () {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function () {
        currentInput += " " + button.textContent + " ";
        display.value = currentInput;
    });
});

document.getElementById('clear').addEventListener('click', function () {
    currentInput = "";
    display.value = "";
});


document.getElementById('equal').addEventListener('click', function () {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
});
