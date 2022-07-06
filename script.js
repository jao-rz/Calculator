const buttonsContainer = document.querySelector('.buttonsContainer');
const display = document.querySelector('.display');

const createButtons = () => {
    for(i = 1; i <= 5; i++) {
        this["row" + i] = document.createElement('div');
        this["row" + i].classList.add('row');
        this["row" + i].classList.add('row' + `${i}`);
        buttonsContainer.appendChild(this["row" + i]);
        for(j = 1; j <= 4; j++) {
            let button = document.createElement('button');
            button.classList.add('button');
            button.classList.add('button' + `${j}`);
            this["row" + i].appendChild(button);    
        };
    };
};

createButtons();

const buttons = document.querySelectorAll('button');

const cButton = document.querySelector('.row1 .button1');
cButton.textContent = 'C';

const positiveNegativeButton = document.querySelector('.row1 .button2');
positiveNegativeButton.textContent = '+/-';

const percentButton = document.querySelector('.row1 .button3');
percentButton.textContent = '%';

const divideButton = document.querySelector('.row1 .button4');
divideButton.textContent = '/';

const sevenButton = document.querySelector('.row2 .button1');
sevenButton.textContent = '7';

const eightButton = document.querySelector('.row2 .button2');
eightButton.textContent = '8';

const nineButton = document.querySelector('.row2 .button3');
nineButton.textContent = '9';

const multiplyButton = document.querySelector('.row2 .button4');
multiplyButton.textContent = 'X';

const fourButton = document.querySelector('.row3 .button1');
fourButton.textContent = '4';

const fiveButton = document.querySelector('.row3 .button2');
fiveButton.textContent = '5';

const sixButton = document.querySelector('.row3 .button3');
sixButton.textContent = '6';

const subtractButton = document.querySelector('.row3 .button4');
subtractButton.textContent = '-';

const oneButton = document.querySelector('.row4 .button1');
oneButton.textContent = '1';

const twoButton = document.querySelector('.row4 .button2');
twoButton.textContent = '2';

const threeButton = document.querySelector('.row4 .button3');
threeButton.textContent = '3';

const addButton = document.querySelector('.row4 .button4');
addButton.textContent = '+';

const zeroButton = document.querySelector('.row5 .button1');
zeroButton.textContent = '0';

const periodButton = document.querySelector('.row5 .button2');
periodButton.textContent = '.';

const backspaceButton = document.querySelector('.row5 .button3');
backspaceButton.textContent = 'E';

const operateButton = document.querySelector('.row5 .button4');
operateButton.textContent = '=';

buttons.forEach(button => button.addEventListener('click', (event)=>{
    display.textContent= event.target.textContent;
}));


const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = (operator, a, b) => {
    if (operator == '+') {return add(a, b)};
    if (operator == '-') {return subtract(a, b)};
    if (operator == '*') {return multiply(a, b)};
    if (operator == '/') {return divide(a, b)};
};


