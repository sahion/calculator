


function createCalc(){
for (i=0;i<numbers.length;i++){
    const number = document.createElement('button');
    number.textContent=numbers[i];
    number.id="btn"+numbers[i];
    number.classList.add("btn");
    numbersDiv.appendChild(number);
}
for (i=0;i<signs.length;i++){
    const sign = document.createElement('button');
    sign.textContent=signs[i];
    sign.id=signs[i];
    sign.classList.add("btn");
    signsDiv.appendChild(sign);
}
}
function add(num1,num2){
    return +num1+parseInt(num2);
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return (num2!=0)? Math.floor(num1/num2*100)/100:(alert("You shouldn't divide by zero") || num1);
}
function operate(num1=0,num2=0,func){
    return (func) ?  func(num1,num2): 0;
}

function choiceOperation(sign){
    switch (sign){
        case "+":return add;
        case "-":return subtract;
        case "*":return multiply;
        case "/":return divide;
    }
}

function pressNumber(e){
    if (!transition){
        (inputField.value!="0")? inputField.value+=e.target.textContent:inputField.value=e.target.textContent;
        } else {
            transition=false;

            inputField.value+=e.target.textContent;
            

        }
}
function pressSign(e){
   if (inputField.value.includes("+") || inputField.value.includes("-") || inputField.value.includes("*") || inputField.value.includes("/")){
       secondOperand=inputField.value.slice(inputField.value.indexOf(`${chosenOperation} `)+2);
       firstOperand = (secondOperand)  ? operate(firstOperand,secondOperand,choiceOperation(chosenOperation)) :firstOperand;
       chosenOperation=e.target.textContent;
       inputField.value=firstOperand+" " +chosenOperation+ " ";
   } else {
    firstOperand=inputField.value;
    transition = true;
    chosenOperation=e.target.textContent;
    inputField.value+=` ${chosenOperation} `;

}
}

function pressEqual(e) {
    if (inputField.value.includes("+") || inputField.value.includes("-") || inputField.value.includes("*") || inputField.value.includes("/")){
    secondOperand=inputField.value.slice(inputField.value.indexOf(`${chosenOperation} `)+2);   
    }
    firstOperand = (secondOperand)  ? operate(firstOperand,secondOperand,choiceOperation(chosenOperation)) :firstOperand;
    inputField.value = firstOperand; 
}

function pressAC(e) {
    firstOperand=0;
    secondOperand=0;
    chosenOperation="";
    inputField.value="0";
    transition=false;
}


function addDot(e){
    if (!inputField.value.includes(".") && '0123456789'.includes(inputField.value[inputField.value.length-1]))
    inputField.value+=".";
}

function deleteLastNumber(e){
    if ('0123456789'.includes(inputField.value[inputField.value.length-1]))
    inputField.value=inputField.value.slice(0,inputField.value.length-1);
}


function btnClick(e){

    if ('0123456789'.indexOf(e.target.textContent)!=-1)
        pressNumber(e);
    else if ('+-*/'.indexOf(e.target.textContent)!=-1)
        pressSign(e);
    else if (e.target.textContent=="=")
        pressEqual(e);
    else if (e.target.textContent=="AC")
        pressAC(e);
    else if (e.target.textContent=="<--")
        deleteLastNumber(e);
    else if (e.target.textContent==".")
        addDot(e);
        
  
}



const numbersDiv = document.querySelector('.numberButtons');
const signsDiv = document.querySelector('.signsButtons');
const inputField = document.querySelector('.result');


let chosenOperation;
let firstOperand;
let secondOperand;
let transition = false;
let numbers = ['AC','<--',1,2,3,4,5,6,7,8,9,'.',0];
let signs = "+-*/=";
createCalc();
const buttons = document.querySelectorAll('.btn');




buttons.forEach(button => button.addEventListener('click',btnClick));



