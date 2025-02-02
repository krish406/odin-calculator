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
let current_number = 1;
let num1_decimal_placed = false;
let num2_decimal_placed = false;
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

function process_num(num, float){
    if(float == true){
        return parseFloat(num);
    }

    else {
        return parseInt(num);
    }
}

function roundNumber(num){
    return Math.round(num * Math.pow(10, 7)) / Math.pow(10, 7);
}


let calc_btns = document.querySelectorAll(".calc-buttons > button");

calc_btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(current_number === 1){
            if(!(isNaN(parseInt(button.textContent)))){
                num1 += button.textContent;
            }
        
            if(button.textContent === '.' && num1_decimal_placed == false){
                num1_decimal_placed = true;
                num1 += button.textContent;
            }

            display.textContent = num1.substring(0, 9);
            //todo potentially
            //sliding window mechanic using difference between start and length
        }

        else if(current_number === 2){
            if(!(isNaN(parseInt(button.textContent)))){
                num2 += button.textContent;
            }
        
            if(button.textContent === '.' && num2_decimal_placed == false){
                num2_decimal_placed = true;
                num2 += button.textContent;
            }

            display.textContent = num2.substring(0, 9);
        }

        if(button.textContent === '='){
            if(num1 && num2){
                let answer = operate(operation, process_num(num1, num1_decimal_placed), process_num(num2, num2_decimal_placed))
                console.log(answer);
                num1 = `${answer}`;
                num2 = '';
                operation = '';
    
                if(Number.isInteger(answer)){
                    num1_decimal_placed = false;
                    console.log('answer is not a float');
                }
    
                else{
                    num1_decimal_placed = true;
                }
                
                num2_decimal_placed = false;
                current_number = 1;
            }

            display.textContent = num1.substring(0, 9);
        }

        console.log(`num1 is ${num1}`);
        console.log(`num2 is ${num2}`);

    });
})

let operator_btns = document.querySelectorAll(".operators-list > button");

operator_btns.forEach((button) => {
    button.addEventListener('click', () => {
        if(current_number == 1){
            current_number = 2;
        }

        if(num1 && num2){
            let answer = operate(operation, process_num(num1, num1_decimal_placed), process_num(num2, num2_decimal_placed))
            console.log(answer);
            num1 = `${answer}`;
            num2 = '';
            operation = '';

            if(Number.isInteger(answer)){
                num1_decimal_placed = false;
                console.log('answer is not a float');
            }

            else{
                num1_decimal_placed = true;
            }
            
            num2_decimal_placed = false;
        }

        operation = button.textContent;
        display.textContent = roundNumber(num1) + operation;
    })
})

