
const numbersDiv = document.querySelector('.numberButtons');
const signsDiv = document.querySelector('.signsButtons');
let numbers = "123456789.0=";
let signs = "+-*/";

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
createCalc();