let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let memory = "";

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

//All Cancel
document.addEventListener('click', function(){
    document.getElementById("cancel").onclick = ()=>{
       memory = "";
       document.querySelector(".display").innerHTML = memory;
    }
});

//Backspace
document.addEventListener('click', function(){
    document.getElementById("backspace").onclick = ()=>{
       memory = memory.slice(0,-1);
       document.querySelector(".display").innerHTML = memory;
    }
});

//Equals
document.addEventListener('click', function(){
    document.getElementById("=").onclick = ()=>{
        equals();
    }
});

//numbers
numbers.forEach((number) => {
    number.addEventListener('click', (e) => getVal(e));
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => getVal(e));
});

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return 'Select an operator';
    }
}

function getVal(e){
    memory = memory + e.target.innerHTML;
    document.querySelector(".display").innerHTML = memory;
}

function equals(){
    let answer = memory.split(" ");

    try {
        while(answer.length != 1){
            test = answer.some(op => op === "×" || op === "÷");
            test2 = answer.some(op => op === "+" || op === "-");

            //multiply & divide
            while(test){
                if(answer.includes("×")){
                    index = answer.indexOf("×");
                    value = operate("×", parseFloat(answer[index-1]), parseFloat(answer[index+1]));
                    answer.splice(index-1, 3, value);
                    console.log(value);
                    console.log(answer);
                }else if(answer.includes("÷")){
                    index = answer.indexOf("÷");
                    value = operate("÷", parseFloat(answer[index-1]), parseFloat(answer[index+1]));
                    answer.splice(index-1, 3, value);
                    console.log(value);
                    console.log(answer);
                }else{
                    test = false;
                }
                console.log(test);
            }

            //add and subtract
            while(test2){
                if(answer.includes("+")){
                    index = answer.indexOf("+");
                    value = operate("+", parseFloat(answer[index-1]), parseFloat(answer[index+1]));
                    answer.splice(index-1, 3, value);
                    console.log(value);
                    console.log(answer);
                }else if(answer.includes("-")){
                    index = answer.indexOf("-");
                    value = operate("-", parseFloat(answer[index-1]), parseFloat(answer[index+1]));
                    answer.splice(index-1, 3, value);
                    console.log(value);
                    console.log(answer);
                }else{
                    test2 = false;
                }
                console.log(test2);
            }
        }

        console.log(answer.length);
        console.log(test);

        document.querySelector(".display").innerHTML = answer[0];
        
    } catch (error) {
        document.querySelector(".display").innerHTML =  "Error"
    }
}