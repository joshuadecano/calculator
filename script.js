const container = document.querySelector('.container');


let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'X':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

const input = document.querySelector('.input');
const holder = document.querySelector('.holder');
const result = document.querySelector('.result');
holder.textContent = '';
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className == 'operator') {
            if (holder.textContent != '') {
                secondNumber = input.textContent;
                let temp = Math.round(operate(operator, Number(firstNumber), Number(secondNumber))*100)/100;
                result.textContent = ''
                input.textContent = '';
                holder.textContent = temp + button.textContent;
                result.textContent = firstNumber + operator + secondNumber + '=' + 
                                    temp;
                firstNumber = temp;
                operator = button.textContent;
            }
        else {
            operator = button.textContent;
            holder.textContent = input.textContent + button.textContent;
            firstNumber = input.textContent;
            input.textContent = '';
        }
        }
        else if (button.id == 'equal') {
            result.textContent = '';
            if (input.textContent != '' && holder.textContent != '') {
                secondNumber = input.textContent;
                input.textContent = '';
                holder.textContent = '';
                result.textContent = firstNumber + operator + secondNumber + '=' + 
                                    Math.round(operate(operator, Number(firstNumber), Number(secondNumber))*100)/100;
            }
        }
        else if (button.id == 'clear') {
            firstNumber = 0;
            secondNumber = 0;
            operator = '';
            input.textContent = '';
            holder.textContent = '';
            result.textContent = '';
        }

        else if (button.id == 'backspace') {
            if (input.textContent > 0) {
                input.textContent = input.textContent.substring(0, input.textContent.length - 1);
            }
        }
        else {
            input.textContent = input.textContent + button.textContent;
        }

    });
});