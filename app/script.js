class Calculator {
    constructor(previousOperandandTextElement, currentOperandandTextElement) { // Constructor function
       this.previousOperandandTextElement = previousOperandandTextElement; // Set previousOperandTextElement property to previousOperandTextElement parameter
       this.currentOperandandTextElement = currentOperandandTextElement; // Set currentOperandTextElement property to currentOperandTextElement parameter
       this.clear(); // Call clear method
    }
 
    clear() {
       this.currentOperand = ""; // Set currentOperand property to empty string
       this.previousOperand = ""; // Set previousOperand property to empty string
       this.operation = undefined; // Set operation property to undefined
    }
 
    delete() {
       this.currentOperand = this.currentOperand.toString().slice(0, -1); // Set currentOperand property to currentOperand property converted to string and sliced from the first character to the second to last character
    }
 
    appendNumber(number) {
       console.log("appendNumber: " + number); // Append number method
       if (number === "." && this.currentOperand.includes(".")) return; // If number is a decimal and currentOperand property includes a decimal, return
       this.currentOperand = this.currentOperand.toString() + number.toString(); // Set currentOperand property to currentOperand property converted to string and added to number property converted to string
    }
 
    chooseOperation(operation) { // Choose operation method
       console.log("chooseOperation: " + operation); // If currentOperand property is empty, return
       if (this.currentOperand === "") return; // If previousOperand property is not empty
 
       if (this.previousOperand !== "") { // If previousOperand property is not empty
          this.compute(); // Call compute method
       }
       this.operation = operation; // Set operation property to operation parameter
       this.previousOperand = this.currentOperand; // Set previousOperand property to currentOperand property
       this.currentOperand = ""; // Set currentOperand property to empty string
    }
 
    compute() {
       let computation; // Declare computation variable
       const prev = parseFloat(this.previousOperand); // Declare prev variable and set it to previousOperand property converted to number
       const current = parseFloat(this.currentOperand); // Declare current variable and set it to currentOperand property converted to number
       if (isNaN(prev) || isNaN(current)) return; // If prev or current variables are not numbers, return
       switch (this.operation) { // Switch statement
          case "+":
             computation = prev + current; 
             break;
          case "-":
             computation = prev - current;
             break;
          case "*":
             computation = prev * current;
             break;
          case "÷":
             computation = prev / current;
             break;
          default:
             return;
       }
       this.currentOperand = computation; // Set currentOperand property to computation variable
       this.operation = undefined; // Set operation property to undefined
       this.previousOperand = ""; // Set previousOperand property to empty string
    }
 
    getDisplayNumber(number) { // Get display number method
       const stringNumber = number.toString(); // Declare stringNumber variable and set it to number parameter converted to string
       const integerDigits = parseFloat(stringNumber.split(".")[0]); // Declare integerDigits variable and set it to stringNumber variable split at decimal point and first item converted to number
       const decimalDigits = stringNumber.split(".")[1]; // Declare decimalDigits variable and set it to stringNumber variable split at decimal point and second item
       let integerDisplay; // Declare integerDisplay variable
       if (isNaN(integerDigits)) { // If integerDigits variable is not a number
          integerDisplay = "0"; // Set integerDisplay variable to 0
       } else {
          integerDisplay = integerDigits.toLocaleString("en", { // Set integerDisplay variable to integerDigits variable converted to locale string
             maximumFractionDigits: 0, // Set maximumFractionDigits property to 0
          });
       }
       if (decimalDigits != null) { // If decimalDigits variable is not null
          return `${integerDisplay}.${decimalDigits}`; // Return integerDisplay variable plus decimalDigits variable
       } else {
          return integerDisplay; // Return integerDisplay variable
       }
 
       /*const floatNumber = parseFloat(number)
         if (isNaN(floatNumber)) return ''
         return floatNumber.toLocaleString('en')*/
    }
 
    updateDisplay() {
       console.log("Updating display"); // Update display method
       this.currentOperandandTextElement.innerText = this.getDisplayNumber(this.currentOperand); // Set currentOperandTextElement inner text to currentOperand property
       if (this.operation != null) { // If operation property is not null
          this.previousOperandandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`; // Set previousOperandTextElement inner text to previousOperand property plus operation property
       } else { 
          this.previousOperandandTextElement.innerText = ""; // Set previousOperandTextElement inner text to empty string
       }
    }
 }
 
 const numberButtons = document.querySelectorAll("[data-number]"); // Select all buttons with data-number attribute
 const operationButtons = document.querySelectorAll("[data-operation]"); // Select all buttons with data-operation attribute
 const equalsButton = document.querySelector("[data-equals]"); // Select button with data-equals attribute
 const deleteButton = document.querySelector("[data-delete]"); // Select button with data-delete attribute
 const allClearButton = document.querySelector("[data-all-clear]"); // Select button with data-all-clear attribute
 const previousOperandandTextElement = document.querySelector("[data-previous-operand]"); // Select element with data-previous-operand attribute
 const currentOperandandTextElement = document.querySelector("[data-current-operand]"); // Select element with data-current-operand attribute

 const calculator = new Calculator(previousOperandandTextElement, currentOperandandTextElement); // Create new instance of Calculator class
 
 numberButtons.forEach((button) => { // For each button in numberButtons array
    button.addEventListener("click", () => { // Add event listener for click event
       console.log("numberButtons:                 " + button.innerText); // Call appendNumber method with button inner text as parameter
       calculator.appendNumber(button.innerText); // Call appendNumber method with button inner text as parameter
       calculator.updateDisplay(); // Call updateDisplay method
    });
 });
 
 operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
       console.log("operationButtons:                   " + button.innerText);
       calculator.chooseOperation(button.innerText);
       calculator.updateDisplay();
    });
 });
 
 equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
 });
 
 allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
 });
 
 deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
 });