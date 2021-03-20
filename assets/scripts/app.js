const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Get input from input field
function getNumberImput (){
    return parseInt(userInput.value);
}
// Generates description log (String)
function createOutput (operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; 
     outputResult (currentResult,  calcDescription); // From vendor file
}

function writeToLog (
    opIdent, 
    prevResult, 
    newNumber, 
    newResult )
{
    const logEntry = {
        operator: opIdent,
        prevResult: prevResult,
        number: newNumber,
        result: newResult,
    }
    logEntries.push (logEntry);
    console.log (logEntries);  
}

function calculateResult(calculationType){
    const enteredNumber = getNumberImput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    
    }
    
    createOutput(mathOperator, initialResult, enteredNumber);  
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

function add(){
    calculateResult ('ADD');
}

function subtract(){
    calculateResult ('SUBTRACT');
}

function multiply(){
    calculateResult ('MULTIPLY');
}

function divide(){
    calculateResult ('DIVIDE');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




