

const numberButtons = document.querySelectorAll('[data-number]'); // Select all buttons with data-number attribute
const operationButtons = document.querySelectorAll('[data-operation]'); // Select all buttons with data-operation attribute
const equalsButton = document.querySelector('[data-equals]'); // Select button with data-equals attribute
const deleteButton = document.querySelector('[data-delete]'); // Select button with data-delete attribute
const allClearButton = document.querySelector('[data-all-clear]'); // Select button with data-all-clear attribute
const previousOperandTextElement = document.querySelector('[data-previous-operand]'); // Select element with data-previous-operand attribute
const currentOperandTextElement = document.querySelector('[data-current-operand]'); // Select element with data-current-operand attribute

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); // Create new instance of Calculator class

