let display = document.getElementById('display'),
    numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clean = document.getElementById('ac'),
    res = document.getElementById('result'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


res.addEventListener('click', function (e) {
    result(e.target.value);
});
clean.addEventListener('click', function (e) {
    clear(e.target.value);
});
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numPress(e.target.value);
    });
}
decimalBtn.addEventListener('click', function (e) {
    decimal(e.target.value);
});
for (let i = 0; i < operations.length; i++) {
    let operator = operations[i];
    operator.addEventListener('click', function (e) {
        operation(e.target.value)
    });
}
function numPress(num) {
    if (display.value === '0') {
        display.value = num;
    } else {
        display.value += num;
    }
}
function operation(e) {
    let localOperationMemory = display.value;


    if (MemoryNewNumber) {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (e === '+') {
            MemoryCurrentNumber += localOperationMemory;
        } else if (e === '-') {
            MemoryCurrentNumber -= localOperationMemory;
        } else if (e === '*') {
            MemoryCurrentNumber *= localOperationMemory;
        } else if (e === '/') {
            MemoryCurrentNumber /= localOperationMemory;
        } else {
            MemoryCurrentNumber = localOperationMemory;
        }

        display.value = MemoryCurrentNumber;
    }
}
function decimal(e) {
    console.log(e);
}
function clear(e) {
    console.log(e);
    display.value = 0;
}
function result(e) {
    operation(e)
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