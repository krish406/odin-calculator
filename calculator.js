let display = document.querySelector(".display");
let calc_btns_group = document.querySelector(".calc-buttons");
let operators_list = document.querySelector(".operators-list");

let calculator_buttons = [['AC', 'DEL', 'EXP'], ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'], ['.', '='], ['%', '/', '*', '-', '+']];

for(let i = 0; i < calculator_buttons.length; i++){
    for(let j = 0; j < calculator_buttons[i].length; j++){
        let new_button = document.createElement("button");
        new_button.textContent = calculator_buttons[i][j];

        if(i < 3){
            new_button.className = "left-button";
            calc_btns_group.appendChild(new_button);
        }

        else {
            new_button.className = "operator";
            operators_list.appendChild(new_button);
        }
    }
}

let num1 = '';
let operation = '';
let num2 = '';
let current_number = 2;
let decimal_placed = false;
let operator_selected = false;

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

let calc_btns = document.querySelectorAll(".calc-buttons > button");
calc_btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(current_number === 1){
            if(num1.length < 10){

                if(!(isNaN(parseInt(button.textContent)))){
                    num1 += button.textContent;
                }
        
                if(button.textContent === '.' && decimal_placed == false){
                    num1 += button.textContent;
                    decimal_placed = true;
                }
    
            }
            
        }

        else if(current_number === 2){
            if(num2.length < 10){

                if(!(isNaN(parseInt(button.textContent)))){
                    num2 += button.textContent;
                }
        
                if(button.textContent === '.' && decimal_placed == false){
                    num2 += button.textContent;
                    decimal_placed = true;
                }
    
            }
            
        }
    });
})

let operator_btns = document.querySelectorAll(".operators-list > button");

operator_btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator_selected === false){
            operation = button.textContent;
            operator_selected = true;
        }

        if(num1 && num2 && operator_selected){
            num1 = operate(operation, num1, num2);
            num2 = '';
            operation = '';
            operator_selected = false;
        }

        if(current_number === 1){
            current_number = 2;
            decimal_placed = false;
        }
    })
})
