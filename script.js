const buttonsContainer = document.querySelector('.buttonsContainer');
const display = document.querySelector('.display');

//create 5 rows, add four buttons to each row
const createButtons = () => {
    for(i = 1; i <= 5; i++) {
        rowNumber = i;
        this["row" + rowNumber] = document.createElement('div');
        this["row" + rowNumber].classList.add('row');
        this["row" + rowNumber].classList.add('row' + `${rowNumber}`);
        buttonsContainer.appendChild(this["row" + rowNumber]);
        for(j = 1; j <= 4; j++) {
            columnNumber = j;
            let button = document.createElement('button');
            button.classList.add('button');
            button.classList.add('button' + `${columnNumber}`);
            this["row" + rowNumber].appendChild(button);    
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
percentButton.classList.add('percentButton');

const divideButton = document.querySelector('.row1 .button4');
divideButton.textContent = ' / ';
divideButton.classList.add('isOperator');

const sevenButton = document.querySelector('.row2 .button1');
sevenButton.textContent = '7';
sevenButton.classList.add('isNumber');

const eightButton = document.querySelector('.row2 .button2');
eightButton.textContent = '8';
eightButton.classList.add('isNumber');

const nineButton = document.querySelector('.row2 .button3');
nineButton.textContent = '9';
nineButton.classList.add('isNumber');

const multiplyButton = document.querySelector('.row2 .button4');
multiplyButton.textContent = ' x ';
multiplyButton.classList.add('isOperator');

const fourButton = document.querySelector('.row3 .button1');
fourButton.textContent = '4';
fourButton.classList.add('isNumber');

const fiveButton = document.querySelector('.row3 .button2');
fiveButton.textContent = '5';
fiveButton.classList.add('isNumber');

const sixButton = document.querySelector('.row3 .button3');
sixButton.textContent = '6';
sixButton.classList.add('isNumber');

const subtractButton = document.querySelector('.row3 .button4');
subtractButton.textContent = ' - ';
subtractButton.classList.add('isOperator');

const oneButton = document.querySelector('.row4 .button1');
oneButton.textContent = '1';
oneButton.classList.add('isNumber')

const twoButton = document.querySelector('.row4 .button2');
twoButton.textContent = '2';
twoButton.classList.add('isNumber')

const threeButton = document.querySelector('.row4 .button3');
threeButton.textContent = '3';
threeButton.classList.add('isNumber')

const addButton = document.querySelector('.row4 .button4');
addButton.textContent = ' + ';
addButton.classList.add('isOperator');

const zeroButton = document.querySelector('.row5 .button1');
zeroButton.textContent = '0';
zeroButton.classList.add('isNumber')

const decimalPeriodButton = document.querySelector('.row5 .button2');
decimalPeriodButton.textContent = '.';
decimalPeriodButton.classList.add('isDecimalPeriod');

const backspaceButton = document.querySelector('.row5 .button3');
backspaceButton.textContent = 'E';

const operateButton = document.querySelector('.row5 .button4');
operateButton.textContent = '=';

var operators = [' + ', ' - ', ' / ', ' x '];

buttons.forEach(button => button.addEventListener('click', (event)=>{
    let clickedButton = event.target; 
    let clickedButtonisNumber = clickedButton.classList.contains('isNumber');
    let clickedButtonisOperator = clickedButton.classList.contains('isOperator');
    var expressionFromDisplay = display.textContent;
    var expressionParts = separateExpressionIntoParts(expressionFromDisplay);
    if (expressionFromDisplay.length == 200) {
        alert("You can't have more than 200 characters.")
    }else {
        lastElementOfExpressionIsNumber = () => {
            return isNaN(expressionParts[expressionParts.length - 1]) == false;
        }
        if (expressionParts == null) {expressionParts = []}; 
        var lastElementOfExpressionIsOperator = operators.includes(expressionParts[expressionParts.length - 1])
        if (clickedButtonisOperator && expressionParts.length != 0) {
            if (expressionParts[expressionParts.length - 1] == '-'){
                return;
            }else if (lastElementOfExpressionIsOperator) {
                expressionParts[expressionParts.length - 1] = clickedButton.textContent; 
            }else {
                expressionParts.push(clickedButton.textContent);
            }; 
        }else if (clickedButtonisNumber) {
            if (display.textContent == '') {
                expressionParts.push(clickedButton.textContent);
            }else if (expressionParts[expressionParts.length - 1].includes('%')) {
                return;
            }else{
                expressionParts.push(clickedButton.textContent);
            } 
        }else if (clickedButton == positiveNegativeButton) {
            if (expressionParts[expressionParts.length - 1] == '-') {
                expressionParts.pop();
            }else if (lastElementOfExpressionIsNumber() && lastElementOfExpressionIsOperator == false) {
                expressionParts[expressionParts.length - 1] = -(expressionParts[expressionParts.length - 1]);
            }else {
                expressionParts.push('-');
            }
        }else if (clickedButton == cButton) {
            expressionParts.length = 0;
        }else if (clickedButton == backspaceButton) {
            lastElementOfExpression = expressionParts[expressionParts.length - 1];
            arrayOfLastElementCharacters = lastElementOfExpression.match(/[0-9] | - | x | \+ | \/ |.|%/g);
            arrayOfLastElementCharacters.pop();
            expressionParts[expressionParts.length - 1] = arrayOfLastElementCharacters.join('');
        }else if (clickedButton == decimalPeriodButton) {
            if (display.textContent == '') {
                expressionParts.push('.')
            }else if (expressionParts[expressionParts.length - 1].includes('.') | expressionParts[expressionParts.length - 1].includes('%')){
                return;
            } else {expressionParts.push('.')};
        }else if (clickedButton == percentButton) {
            if (expressionParts[expressionParts.length - 1].includes('%')){
                return;
            }else if (lastElementOfExpressionIsNumber()) {
                expressionParts[expressionParts.length - 1] += '%'}
        }else if(clickedButton == operateButton) {
            operate();
        };
        console.log(expressionParts);
        console.log(lastElementOfExpressionIsNumber());
        display.textContent = expressionParts.join('');
        var expressionParts = separateExpressionIntoParts(expressionFromDisplay);
    };
    function separateExpressionIntoParts(expression) {
        return expression.match(/\S+| \/ | \+ | \x | - /g);  
    };
    function operate() {
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
        var result = undefined;
        let expressionPartToBeCalculated = expressionParts.splice(0,3);
        let a = parseInt(expressionPartToBeCalculated[0]);
        let b = parseInt(expressionPartToBeCalculated[2]);
        let operator = expressionPartToBeCalculated[1];
        if (operator == ' + ') {
            result = add(a, b);
        }else if (operator == ' - ') {
            result = subtract(a, b)
        }else if (operator == ' x ') {
            result = multiply(a, b);
        }else if (operator == ' / ') {
            result = divide(a, b);
        };
        return expressionParts.unshift(result);
    };    
}));
