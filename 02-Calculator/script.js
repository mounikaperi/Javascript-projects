// Input Entered
const userInput = document.getElementById('input-number');

//Operators
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');
const mulBtn = document.getElementById('btn-multiply');
const divBtn = document.getElementById('btn-divide');
const modBtn = document.getElementById('btn-modulus');
const equalToBtn = document.getElementById('btn-equalTo');

const currentCalculation = document.getElementById('current-calculation');
const result = document.getElementById('current-result');

let currentResult = 0;
let enteredNumber = 0;
let logEntries = [];

//To display the value of the button clicked on the text field
function display(valueClicked) {
    userInput.value += valueClicked;
    enteredNumber = parseInt(userInput.value);
}

function clearInput() {
    userInput.value = "";
}

function createAndWriteOutput(initialResult, operator, enteredNumber, currentResult) {
    const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
    outputTheResult(currentResult, calcDescription);
}

function outputTheResult(finalResult, description) {
    currentCalculation.textContent = description;
    result.textContent = finalResult;
}

function writeToLog(operator, previousResult, enteredNumber, newResult) {
    const logEntry = {
        operation: operator,
        previousResult: previousResult,
        enteredNumber: enteredNumber,
        newResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResults(calculationType) {
    const initialResult = currentResult;
    if (!['ADD', 'SUB', 'MUL', 'DIV', 'MOD'].includes(calculationType) || !enteredNumber) {
        return;
    }
    let operator;
    switch (calculationType) {
        case 'ADD':
            currentResult += enteredNumber;
            operator = '+';
            console.log(currentResult);
            break;
        case 'SUB':
            currentResult -= enteredNumber;
            operator = '-';
            console.log(currentResult);
            break;
        case 'MUL':
            currentResult *= enteredNumber;
            operator = '*';
            console.log(currentResult);
            break;
        case 'DIV':
            currentResult /= enteredNumber;
            operator = '/';
            console.log(currentResult);
            break;
        case 'MOD':
            currentResult %= enteredNumber;
            operator = '%';
            console.log(currentResult);
            break;
    }
    createAndWriteOutput(initialResult, operator, enteredNumber, currentResult);
    writeToLog(operator, initialResult, enteredNumber, currentResult);
    clearInput();
}

function addition() {
    calculateResults('ADD');
}
function subtraction() {
    calculateResults('SUB');
}
function multiplication() {
    calculateResults('MUL');
}
function division() {
    calculateResults('DIV');
}
function modulusOperation() {
    calculateResults('MOD');
}
addBtn.addEventListener('click', addition);
subBtn.addEventListener('click', subtraction);
mulBtn.addEventListener('click', multiplication);
divBtn.addEventListener('click', division);
modBtn.addEventListener('click', modulusOperation);