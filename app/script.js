class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { // Constructor function
        this.previousOperandTextElement = previousOperandTextElement; // Set previousOperandTextElement property to previousOperandTextElement parameter
        this.currentOperandTextElement = currentOperandTextElement; // Set currentOperandTextElement property to currentOperandTextElement parameter
        this.clear(); // Call clear method
    }

    clear() { // Clear method
        this.currentOperand = ''; // Set currentOperand property to empty string
        this.previousOperand = ''; // Set previousOperand property to empty string
        this.operation = undefined; // Set operation property to undefined
    }

    delete() { // Delete method
        this.currentOperand = this.currentOperand.toString().slice(0, -1); // Set currentOperand property to currentOperand property converted to string and sliced from the first character to the second to last character
    }

    appendNumber(number) { // Append number method
        if (number === '.' && this.currentOperand.includes('.')) return; // If number is a decimal and currentOperand property includes a decimal, return
        this.currentOperand = this.currentOperand.toString() + number.toString(); // Set currentOperand property to currentOperand property converted to string and added to number property converted to string
    }

    chooseOperation(operation) { // Choose operation method
        if (this.currentOperand === '') return; // If currentOperand property is empty, return
        if (this.previousOperand !== '') { // If previousOperand property is not empty
            this.compute(); // Call compute method
        }
        this.operation = operation; // Set operation property to operation parameter
        this.previousOperand = this.currentOperand; // Set previousOperand property to currentOperand property
        this.currentOperand = ''; // Set currentOperand property to empty string
    }

    compute() { // Compute method
        let computation; // Declare computation variable
        const prev = parseFloat(this.previousOperand); // Declare prev variable and set it to previousOperand property converted to number
        const current = parseFloat(this.currentOperand); // Declare current variable and set it to currentOperand property converted to number
        if (isNaN(prev) || isNaN(current)) return; // If prev or current variables are not numbers, return
        switch (this.operation) { // Switch statement
            case '+': // If operation property is +
                computation = prev + current; // Set computation variable to prev variable plus
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]'); // Select all buttons with data-number attribute
const operationButtons = document.querySelectorAll('[data-operation]'); // Select all buttons with data-operation attribute
const equalsButton = document.querySelector('[data-equals]'); // Select button with data-equals attribute
const deleteButton = document.querySelector('[data-delete]'); // Select button with data-delete attribute
const allClearButton = document.querySelector('[data-all-clear]'); // Select button with data-all-clear attribute
const previousOperandTextElement = document.querySelector('[data-previous-operand]'); // Select element with data-previous-operand attribute
const currentOperandTextElement = document.querySelector('[data-current-operand]'); // Select element with data-current-operand attribute

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement); // Create new instance of Calculator class

numberButtons.forEach(button => { // For each button in numberButtons array
    button.addEventListener('click', () => { // Add event listener for click event
        calculator.appendNumber(button.innerText); // Call appendNumber method with button inner text as parameter
        calculator.updateDisplay(); // Call updateDisplay method
    })
})

operationButtons.forEach(button => { // For each button in operationButtons array
    button.addEventListener('click', () => { // Add event listener for click event
        calculator.chooseOperation(button.innerText); // Call chooseOperation method with button inner text as parameter
        calculator.updateDisplay(); // Call updateDisplay method
    })
})