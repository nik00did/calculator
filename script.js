let display = document.getElementById('display'),
    numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clean = document.getElementById('ac'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

clean.addEventListener('click', function (e) {
    clear(e.target.value);
});

display.addEventListener('change', function (e) {
    if (display.value === undefined) {
        clear(e);
    }
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
    if (MemoryNewNumber) {
        display.value = num;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = num;
        } else {
            if (display.value.length < 8) {
                display.value += num;
            }
        }

        if (display.value.length > 8) {
            display.value = -1;
        }
    }

}

function operation(e) {
    let localOperationMemory = parseFloat(display.value);


    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += localOperationMemory;
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= localOperationMemory;
        } else if (MemoryPendingOperation === 'X') {
            MemoryCurrentNumber *= localOperationMemory;
        } else if (MemoryPendingOperation === '÷') {
            MemoryCurrentNumber /= localOperationMemory;
        } else {
            MemoryCurrentNumber = localOperationMemory;
        }

        display.value = MemoryCurrentNumber;

        if((MemoryCurrentNumber.toString() === 'Infinity') || (MemoryCurrentNumber.toString().length > 8)) {
            MemoryCurrentNumber = -1;
            disabledBtnTrue()
        }

        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = e;
        setDataToModel(MemoryCurrentNumber, localOperationMemory, display.value, e)
    }
}

function decimal(e) {

    let localDecimalMemory = display.value;
    if (MemoryNewNumber) {
        localDecimalMemory = '0. ';
        MemoryNewNumber = false;
    } else {
        if ((localDecimalMemory.indexOf('.') === -1) && localDecimalMemory.length < 7) {
            localDecimalMemory += '.';
        }
    }

    display.value = localDecimalMemory;
}

function clear(e) {
    display.value = 0;
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
    disabledBtnFalse();
}

function disabledBtnFalse() {
    let btn = document.getElementsByTagName('input');

    for (let input of btn) {
        if (input.value !== "C/CE") {
            input.disabled = false;
        }
    }
}

function disabledBtnTrue() {
    let btn = document.getElementsByTagName('input');

    for (let input of btn) {
        if (input.value !== "C/CE") {
            input.disabled = true;
        }
    }
}

function setDataToModel(firstOperand, secondOperand, result, operator) {
    
    if (!operator || operator === '=') {
        return;
    }

    let data = {
        firstOperand: firstOperand,
        secondOperand: secondOperand,
        result: result,
        operator: operator
    }

    model.push(data);
    
}








const onChange = e => {
    if (!e || !e.target || !e.target.value) {
        return
    }

    const handledValue = parseFloat(e.target.value);

    if (isNaN(handledValue)) {
        return;
    }
    setModelNumberValue(handledValue);
};

const setModelNumberValue = value => {
    if (!value) {
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
