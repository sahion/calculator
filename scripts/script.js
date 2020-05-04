


function createCalc(){

    
    
   
for (i=0;i<numbers.length;i++){
    const number = document.createElement('button');
    number.textContent=numbers[i];
    number.id="btn"+numbers[i];
    number.classList.add("btn");
    numbersDiv.appendChild(number);

    switch (numbers[i]){
    case 0: number.setAttribute('data-key',96); break;
    case 1: number.setAttribute('data-key',97); break;
    case 2: number.setAttribute('data-key',98); break;
    case 3: number.setAttribute('data-key',99); break;
    case 4: number.setAttribute('data-key',100); break;
    case 5: number.setAttribute('data-key',101); break;
    case 6: number.setAttribute('data-key',102); break;
    case 7: number.setAttribute('data-key',103); break;
    case 8: number.setAttribute('data-key',104); break;
    case 9: number.setAttribute('data-key',105); break;
    case "AC":number.setAttribute('data-key',65); break;
    case "<--":number.setAttribute('data-key',8); break;
    case '.':number.setAttribute('data-key',110); break;
    
    }

}
for (i=0;i<signs.length;i++){
    const sign = document.createElement('button');
    sign.textContent=signs[i];
    sign.id=signs[i];
    sign.classList.add("btn");
    signsDiv.appendChild(sign);
    switch (signs[i]){
        case "+": sign.setAttribute('data-key',107); break;
        case "-": sign.setAttribute('data-key',109); break;
        case "*": sign.setAttribute('data-key',106); break;
        case "/": sign.setAttribute('data-key',111); break;
        case "=": sign.setAttribute('data-key',13); break;
}



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
        (inputField.value!="0")? inputField.value+=e.textContent:inputField.value=e.textContent;
        } else {
            transition=false;

            inputField.value+=e.textContent;
            

        }
}
function pressSign(e){
   if (inputField.value.includes("+") || inputField.value.includes("-") || inputField.value.includes("*") || inputField.value.includes("/")){
       secondOperand=inputField.value.slice(inputField.value.indexOf(`${chosenOperation} `)+2);
       firstOperand = (secondOperand)  ? operate(firstOperand,secondOperand,choiceOperation(chosenOperation)) :firstOperand;
       chosenOperation=e.textContent;
       inputField.value=firstOperand+" " +chosenOperation+ " ";
   } else {
    firstOperand=inputField.value;
    transition = true;
    chosenOperation=e.textContent;
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

    e = (e.target) ? e.target: e;
    if ('0123456789'.indexOf(e.textContent)!=-1)
        pressNumber(e);
    else if ('+-*/'.indexOf(e.textContent)!=-1)
        pressSign(e);
    else if (e.textContent=="=")
        pressEqual(e);
    else if (e.textContent=="AC")
        pressAC(e);
    else if (e.textContent=="<--")
        deleteLastNumber(e);
    else if (e.textContent==".")
        addDot(e);
        
  
}

function btnDown (e){
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    if (key)
    btnClick(key);
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
window.addEventListener('keydown',btnDown);






