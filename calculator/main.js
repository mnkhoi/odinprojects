let cur = "";
let past = "";
let funct = undefined;

const curText = document.querySelector('.current');
const lastText = document.querySelector('.last');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');


numbers.forEach((number) => number.addEventListener('click', () => {
    appendNumber(number.textContent);
    updateScreen();
}));
del.addEventListener('click', () => delFunc());
clear.addEventListener('click', () => {
    clearFunc();
    updateScreen();
});
operators.forEach((operation) => operation.addEventListener('click', () => {
    changeOperation(operation);
    updateScreen();
}));
equal.addEventListener('click', () => {
    compute();
    updateScreen();
});

function appendNumber(number) {
    if(!'0123456789.'.includes(number)) return;
    if(number === '.' && cur.includes('.')) return;
    cur += number.toString();
}

function changeOperation(operation){
    if (cur === '') return;
    if (past !== ''){
        compute();
    }
    funct = operation.textContent || operation;
    past = cur;
    cur = '';
}

function updateScreen(){
    curText.textContent = cur;
    lastText.textContent = past;
    if(funct !== undefined){
        if (funct === '*') funct = 'x';
        lastText.textContent += " " + funct;
    }
}

function delFunc(){
    cur = cur.substring(0,cur.length - 1);
    curText.textContent = cur;
};

function compute() {
    let temp;
    switch (funct) {
        case '+':
            temp = parseFloat(cur) + parseFloat(past);
            break;
        case '-':
            temp = parseFloat(past) - parseFloat(cur);
            break;
        case 'x':
            temp = parseFloat(cur) * parseFloat(past);
            break;
        case '*':
            temp = parseFloat(cur) * parseFloat(past);
            break;
        case '/':
            temp = parseFloat(past) / parseFloat(cur);
            break;
        default:
            return;
    }
    funct = undefined;
    past = '';
    cur = temp.toString();
};

function clearFunc(){
    cur = "";
    past = "";
    funct = undefined;
}

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if('0123456789.'.includes(e.key)){
        appendNumber(e.key);
    }else if('/*-+'.includes(e.key)){
        changeOperation(e.key);
    }else if('Backspace'.includes(e.key)){
        delFunc();
    }else if('Escape'.includes(e.key)){
        clearFunc();
    }else if('Enter'.includes(e.key)){
        compute();
    }
    updateScreen();
});