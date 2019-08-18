const textView = document.getElementById('textview'),
    numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clean = document.getElementById('ac'),
    result = document.getElementById('result');

result.addEventListener('click', function (e) {
    console.log(e.target.value);
});
clean.addEventListener('click', clear);

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', numPress);
}
decimalBtn.addEventListener('click', decimal);

for (let i = 0; i < operations.length; i++) {
    let operator = operations[i];

    operator.addEventListener('click', operation);
}

function numPress(e) {
    console.log(e.target.value);
}
function operation(e) {
    console.log(e.target.value);
}
function decimal(e) {
    console.log(e.target.value, e.srcElement.id);
}
function clear(e) {
    console.log(e.target.value, e.srcElement.id);
}
function result(e) {

}
function insert(num) {

    if (!num || num === undefined || isNaN(num) || num === null) {
        return '-1';
    }

    if (typeof num === 'number') {
        if (textView.value === 0) {
            textView.value = '';
            let count = 1;
            textView.value = textView.value + num;
            console.log(textView.length);
            /*if (plus() || minus() || multiply() || divide() count % 2 != 0 ) {
                count++;

            }*/
        } else if (textView.value > 0) {
            textView.value = textView.value + num;
        }
    }
};

function equal() {
    let exp = document.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
};

function cleanField() {
    textView.value = 0;
}

const onChange = e => {
    if (!e || !e.target || !e.target.value){
        return
    }

    const handledValue = parseFloat(e.target.value);

    if(isNaN(handledValue)){
        return;
    }
    setModelNumberValue(handledValue);
};

const setModelNumberValue = value => {
    if (!value){
        return;
    }
    model.firstOperand = value;

};
// const init = () => {
//     let numberElement = document.getElementById('textview');
//
//     //создали слушатель по изменению в инпуте
//     numberElement.addEventListener('change', onChange);
//
// };
// init();
function plus() {
    textView.value = Number(firstOperand.value) + Number(secondOperand);
}
function minus() {
    textView.value = Number(firstOperand) - Number(secondOperand);
}
function multiply() {
    textView.value = Number(firstOperand) * Number(secondOperand);
}
function divide() {
    textView.value = Number(firstOperand) / Number(secondOperand);
}

// const onChange = e => {
//     if (!e || !e.target || !e.target.value){
//         return
//     }
//
//     const handledValue = parseFloat(e.target.value);
//
//     if(isNaN(handledValue)){
//         return;
//     }
//     setModelNumberValue(handledValue);
// };

// const setModelNumberValue = value =>{
//     if (!value){
//         return;
//     }
//     model.number = value;
//
// };


// const init = () => {
//     numberElement = document.getElementById('numberInput');
//
//     //создали слушатель по изменению в инпуте
//     numberElement.addEventListener('change', onChange, true);
// };
// init();
// clean.addEventListener('click', () => {
//     textView.value = 0;
// });


// "-if you wanna to add button "<" back or last-clear for calculator, you should use next code of js"
// function back(){
// 	var exp = document.textview.value;
// 	document.form.textview.value = exp.substring(0, exp.lenth-1);
// }