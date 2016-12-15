'use strict';
// Взять калькулятор, который был сделан в контексте ДЗ от 8 ноября.
// (url: https://github.com/taksenov/ls-js-hm-2/tree/master/hm2_3 )
//
// Если домашнее задание не сделано, то сейчас необходимо сделать.
// Необходимо модифицировать калькулятор следующим образом:
// Превратить калькулятор в Класс (конструктор + прототип)
// Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
// SqrCalc должен расширять все методы оригинального калькулятора таким образом,
// чтобы возводить в квадрат результат всех расчетов. Например:
//
// let myCalculator = new SqlCalc(100);
//
// console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
// console.log(myCalculator.dif(10, 20)); //вернет 4 900
// console.log(myCalculator.div(2, 2)); //вернет 625
// console.log(myCalculator.mul(2, 2)); //вернет 160 000
//
// Обратите внимание, что не должно быть дублирования кода из методов
// оригинального калькулятора. Необходимо применить наследование.
// Задачу необходимо выполнить в двух вариантах: ES5 и ES6

// ES6 version =================================================================

// Класс Calculator ============================================================
class CalculatorES6 {
    constructor(number) {
        this.result = number;
    }
    // Сумма
    sum() {
        let methodInputValue = this.result;
        for (let i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue + arguments[i];
        }
        return methodInputValue;
    } //sum
    // Вычитание
    dif() {
        let methodInputValue = this.result;
        for (let i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue - arguments[i];
        }
        return methodInputValue;
    }
    //dif
    // Произведение
    mul() {
        let methodInputValue = this.result;
        for (let i = 0; i < arguments.length; i++) {
            methodInputValue = methodInputValue * arguments[i];
        }
        return methodInputValue;
    }
    //mul
    // Деление
    div() {
        let methodInputValue = this.result;
        for (let i = 0; i < arguments.length; i++) {
            if (  arguments[i] === 0 ) {
                throw new Error('DIVIDE_BY_ZERO');
            }
            methodInputValue = methodInputValue / arguments[i];
        }
        return methodInputValue;
    }
    //div
}
// Класс Calculator ============================================================

// Класс SqlCalc ===============================================================
class SqlCalcES6 extends CalculatorES6 {
    constructor(number) {
        super(number);
    }
    sum() {
        let methodInputValue = super.sum.apply(this, arguments);
        return methodInputValue * methodInputValue;
    } //sum
    // Вычитание
    dif() {
        let methodInputValue = super.dif.apply(this, arguments);
        return methodInputValue * methodInputValue;
    };
    //dif
    // Произведение
    mul() {
        let methodInputValue = super.mul.apply(this, arguments);
        return methodInputValue * methodInputValue;
    };
    //mul
    // Деление
    div() {
        let methodInputValue = super.div.apply(this, arguments);
        return methodInputValue * methodInputValue;
    };
    //div
}
// Класс SqlCalc ===============================================================

let myCalculator = new SqlCalcES6(100);

console.log('------[ES6 version]------');

console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));
try {
    console.log(myCalculator.div(2, 2, 3, 0, 5)); //вернет Ошибку Деления на ноль!
} catch (e) {
    if ( e.message === 'DIVIDE_BY_ZERO' ) {
        console.log('Попытка поделить на ноль.');
    } else {
        console.log('Ошибка деления!');
    }
}

console.log('------[ES6 version]------');
// ES6 version =================================================================

// ES5 version =================================================================
// inherit =====================================================================
function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    child.prototype.parent = parent;
};
// inherit =====================================================================

// Класс Calculator ============================================================
let Calculator = function( number ) {
    this.result = number;
};
// Сумма
Calculator.prototype.sum = function () {
    let methodInputValue = this.result;
    for (let i = 0; i < arguments.length; i++) {
        methodInputValue = methodInputValue + arguments[i];
    }
    return methodInputValue;
}; //sum
// Вычитание
Calculator.prototype.dif = function () {
    let methodInputValue = this.result;
    for (let i = 0; i < arguments.length; i++) {
        methodInputValue = methodInputValue - arguments[i];
    }
    return methodInputValue;
};
//dif
// Произведение
Calculator.prototype.mul = function () {
    let methodInputValue = this.result;
    for (let i = 0; i < arguments.length; i++) {
        methodInputValue = methodInputValue * arguments[i];
    }
    return methodInputValue;
};
//mul
// Деление
Calculator.prototype.div = function () {
    let methodInputValue = this.result;
    for (let i = 0; i < arguments.length; i++) {
        if (  arguments[i] === 0 ) {
            throw new Error('DIVIDE_BY_ZERO');
        }
        methodInputValue = methodInputValue / arguments[i];
    }
    return methodInputValue;
};
//div
// Класс Calculator ============================================================

// Класс SqlCalc ===============================================================
let SqlCalc = function( number ) {
    Calculator.call(this, number);
};

// Наследуем SqlCalc от Calculator =============================================
inherit(SqlCalc, Calculator);
// Наследуем SqlCalc от Calculator =============================================

// Сумма
SqlCalc.prototype.sum = function () {
    let methodInputValue = this.parent.prototype.sum.apply(this, arguments);
    return methodInputValue * methodInputValue;
}; //sum
// Вычитание
SqlCalc.prototype.dif = function () {
    let methodInputValue = this.parent.prototype.dif.apply(this, arguments);
    return methodInputValue * methodInputValue;
};
//dif
// Произведение
SqlCalc.prototype.mul = function () {
    let methodInputValue = this.parent.prototype.mul.apply(this, arguments);
    return methodInputValue * methodInputValue;
};
//mul
// Деление
SqlCalc.prototype.div = function () {
    let methodInputValue = this.parent.prototype.div.apply(this, arguments);
    return methodInputValue * methodInputValue;
};
//div
// Класс SqlCalc ===============================================================

let myCalculator2 = new SqlCalc(100);

console.log('------[ES5 version]------');

console.log(myCalculator2.sum(1, 2, 3));
console.log(myCalculator2.dif(10, 20));
console.log(myCalculator2.div(2, 2));
console.log(myCalculator2.mul(2, 2));
try {
    console.log(myCalculator2.div(2, 2, 3, 0, 5)); //вернет Ошибку Деления на ноль!
} catch (e) {
    if ( e.message === 'DIVIDE_BY_ZERO' ) {
        console.log('Попытка поделить на ноль.');
    } else {
        console.log('Ошибка деления!');
    }
}

console.log('------[ES5 version]------');
// ES5 version =================================================================
