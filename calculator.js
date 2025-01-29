let calc_btns = document.querySelector(".calc-buttons");
let operators_list = document.querySelector(".operators-list");

let del = ['AC', 'DEL', 'EXP'];
let numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
let modifiers = ['.', '='];
let operators = ['%', '/', '*', '-', '+'];

for(let i = 0; i < del.length; i++){
    let new_button = document.createElement("button");
    new_button.className = "del";
    new_button.textContent = del[i];
    calc_btns.appendChild(new_button);
}

for(let i = 0; i < numbers.length; i++){
    let new_button = document.createElement("button");
    new_button.className = "number-btn";
    new_button.textContent = numbers[i];
    calc_btns.appendChild(new_button);
}

for(let i = 0; i < modifiers.length; i++){
    let new_button = document.createElement("button");
    new_button.className = "modifier";
    new_button.textContent = modifiers[i];
    calc_btns.appendChild(new_button);
}

for(let i = 0; i < operators.length; i++){
    let new_button = document.createElement("button");
    new_button.className = "operator";
    new_button.textContent = operators[i];
    operators_list.appendChild(new_button);
}

let num1 = 2;
let operation = '/';
let num2 = 0.5;

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        
        case '-':
            return subtract(num1, num2);
        
        case '*':
            return multiply(num1, num2);
        
        case '/':
            return divide(num1, num2);
        
        default:
            return 'Invalid Operation'
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 == 0){
        return "NO";
    }
    else{
        return num1/num2;
    }
}
