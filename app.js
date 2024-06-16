/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/

let firstNum = '';
let secondNum = '';
let operation = '';

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const input = event.target.innerText;
        if (button.classList.contains('number')) {
            updateDisplay(input);
        } else if (button.classList.contains('operator') || button.classList.contains('equals')) {
            calculate(input);
        }
    });
});

/*-------------------------------- Functions --------------------------------*/

function updateDisplay(input) {
    display.textContent += input;
}

function calculate(input) {
// Input calculations
    if (input === '=') {
        secondNum = display.textContent;
        let output;
        if (operation === '*') {
            output = Number(firstNum) * Number(secondNum);
        } else if (operation === '/') {
            output = Number(firstNum) / Number(secondNum);
        } else if (operation === '+') {
            output = Number(firstNum) + Number(secondNum); 
        } else if (operation === '-') {
            output = Number(firstNum) - Number(secondNum);
        }
        display.textContent = output;
        firstNum = '';
        secondNum = '';
        operation = '';
// Solve
     } else {
        firstNum = display.textContent;
        operation = input;
        display.textContent = '';
    }}

// Clear
function clear(input){
    if (input === 'C') {
    display.textContent = '';
    firstNum = '';
    secondNum = '';
    operation = '';
}}