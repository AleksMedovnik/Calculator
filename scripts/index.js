// calculator
const calculator = document.getElementById('calculator');

// console.dir(calculator);

// console.log(calculator);


calculator.addEventListener('click', calculate);

function calculate() {
    let data = prompt('Привет! Я - калькулятор! Напишите выражение, которое хотите вычислить!', '');
    if (data === null) {
        alert('Ввод отменен!');
    } else {
        data = data.replace(/,/g, ".");

        try {
            let result = eval(data);
            if (data === '') {
                alert('Вы ничего не ввели!');
            } else if (result === Infinity || result === -Infinity) {
                alert('На ноль делить нельзя!');
            } else if (isNaN(result)) {
                showMessageError();
            } else {
                alert(`Поверьте, я точно знаю! Будет число:
                ${result}`);
            }
        } catch (err) {
            showMessageError();
        }

    }
};

function showMessageError() {
    alert(`Пожалуйста, введите корректное выражение! :)`);
}