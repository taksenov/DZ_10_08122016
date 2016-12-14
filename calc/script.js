// ДЗ 3 (делать не обязательно, но очень желательно)
//
// Написать функцию 'calculator', которая имеет один параметр - 'firstNumber'
// 'firstNumber' - это число, с которым будут производиться действия
// Функция 'calculator' должна возвращать объект, у которого должно быть несколько методов.
// Каждая из этих функций принимает неограниченное количество аргументов и производит
// какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
// - 'sum' - складывает 'firstNumber' с переданным аргументами
// - 'dif' - вычитает из 'firstNumber' переданные аргументы
// - 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции
//           делится на второй переданный аргумент (если он есть) и так далее
// - 'mul' - умножает 'firstNumber' на первый переданный аргумент.
//           Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
// Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю

function Calculator( firstNumber ) {
    // Сумма
    this.sum = function () {
        var methodInputValue = firstNumber;
        for (var i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue + arguments[i];
        }
        return methodInputValue;
    };
    //sum

    // Вычитание
    this.dif = function () {
        var methodInputValue = firstNumber;
        for (var i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue - arguments[i];
        }
        return methodInputValue;
    };
    //dif

    // Произведение
    this.mul = function () {
        var methodInputValue = firstNumber;
        for (var i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue * arguments[i];
        }
        return methodInputValue;
    };
    //mul

    // Деление
    this.div = function () {
        var methodInputValue = firstNumber;
        for (var i = 0; i < arguments.length; i++) {
            try {
                if (  arguments[i] === 0 ) {
                    throw new Error('DIVIDE_BY_ZERO');
                }
                methodInputValue = methodInputValue / arguments[i];
            } catch (e) {
                if ( e.message === 'DIVIDE_BY_ZERO' ) {
                    console.log('Попытка поделить на ноль.');
                    return false;
                } else {
                    console.log('Ошибка деления!');
                    return false;
                }
            }
        }
        return methodInputValue;
    };
    //div

}

var myCalculator2 = new Calculator(100);

console.log(myCalculator2); //вернет Объект

console.log('-----------');

console.log(myCalculator2.sum(1, 2, 3)); //вернет 106
console.log(myCalculator2.dif(10, 20)); //вернет 70
console.log(myCalculator2.div(2, 2)); //вернет 25
console.log(myCalculator2.mul(2, 2)); //вернет 400

console.log('-----------');

console.log(myCalculator2.div(2, 2, 3, 0, 5)); //вернет Ошибку Деления на ноль!
