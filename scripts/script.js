


function createCalc(){
for (i=0;i<numbers.length;i++){
    const number = document.createElement('button');
    number.textContent=numbers[i];
    number.id=numbers[i];
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
    return num1/num2;
}
function operate(num1=0,num2=0,func){
    return func(num1,num2);
}

function choiceOperation(sign){
    switch (sign){
        case "+":return add;
        case "-":return subtract;
        case "*":return multiply;
        case "/":return divide;
    }
}


const numbersDiv = document.querySelector('.numberButtons');
const signsDiv = document.querySelector('.signsButtons');
const inputField = document.querySelector('.result');
let chosenOperation="";


let transition = false;
let buffer = 0;
let numbers = [1,2,3,4,5,6,7,8,9,'AC',0,'=',];
let signs = "+-*/";
createCalc();
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => button.addEventListener('click',function(){

    if ('0123456789'.indexOf(button.textContent)!=-1){
        if (!transition){
        (inputField.value!="0")? inputField.value+=button.textContent:inputField.value=button.textContent;
        } else {
            transition=false;
            //buffer = operate(inputField.value,buffer,choiceOperation(chosenOperation));
            inputField.value=button.textContent;
            console.log(buffer);

        }
    } else if ('+-*/'.indexOf(button.textContent)!=-1){
        transition=true;
        buffer=+inputField.value;
        chosenOperation=button.textContent;
        console.log(buffer);
    } else if (button.textContent=="="){
        inputField.value=operate(buffer,inputField.value,choiceOperation(chosenOperation));
        console.log(buffer);
    } else if (button.textContent=="AC"){
        inputField.value="0";
        buffer=0;
        transition=false;
        chosenOperation="";
    }
    
            
        }));