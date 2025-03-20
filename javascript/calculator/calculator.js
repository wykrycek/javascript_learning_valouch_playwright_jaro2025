/*
Branch: hw4_calculator
Do nové branch viz výše vytvoř nový program kalkulačky, který bude:
sečte: 565 + 584
odečte: 474 - 520
znásobí: 5822 * 65
Vydělí: 632 / 6
Výsledky vypíše do konzole.

Výsledky nacommituj a pushni do GitHub. Vytvoř PR na lektora.

*/

// functions

function secti(a, b) {
    console.log(`Součet ${a} + ${b} je: `);
    return a + b;
}

function odecti(a, b) {
    console.log(`Odečet ${a} - ${b} je: `);
    return a - b;
}

function vynasob(a, b) {
    console.log(`Násobení ${a} * ${b} je: `);
    return a * b;
}

function vydel(a, b) {
    if (b === 0) {
        console.log("Nelze dělit nulou")
        return NaN;
    }
    console.log(`Dělení ${a} / ${b} je: `);
    return a / b;
}

secti(565, 584);
odecti(474, 520);
vynasob(5822, 65);
vydel(632, 6);






// Hraju si...

// consts object

const constCalculator = {
    secti: (a, b) => a + b,
    odecti: (a, b) => a - b,
    vynasob: (a, b) => a * b,
    vydel: (a, b) => a / b
};

console.log(`Součet 565 + 584 je: ${constCalculator.secti(565, 584)}`);
console.log(`Odečet 474 - 520 je: ${constCalculator.odecti(474, 520)}`);
console.log(`Násobení 5822 * 65 je: ${constCalculator.vynasob(5822, 65)}`);
console.log(`Dělení 632 / 6 je: ${constCalculator.vydel(632, 6)}`);



// const object function

const calculator = {
    debugging: true,
    validing: true,
    rounding: 2,
    numberA: 0,
    numberB: 0,
    calledOperator: '',

    secti: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'add';
        return this.responser((a, b) => a + b);
    },
    odecti: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'subtract';
        return this.responser((a, b) => a - b);
    },
    vynasob: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'multiply';
        return this.responser((a, b) => a * b);
    },
    vydel: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'divide';
        return this.responser((a, b) => a / b);
    },
    umocni: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'power';
        return this.responser((a, b) => a ** b);
    },
    odmocni: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'root';
        return this.responser((a, b) => a ** (1 / b));
    },
    logaritmuj: function (a, b) {
        this.numberA = a;
        this.numberB = b;
        this.calledOperator = 'log';
        return this.responser((a, b) => Math.log(a) / Math.log(b));
    },
    validator: function (a, b) {
        return typeof a === 'number' && typeof b === 'number';
    },
    responser: function (operation) {
        if (this.validing) {
            // validator
            if (!this.validator(this.numberA, this.numberB)) {
                if (this.debugging) {
                    console.debug(`[Debug, calculator] Neplatná vstupní hodnota ${this.numberA} (type: ${typeof this.numberA}), ${this.numberB} (type: ${typeof this.numberB}) pro opeaci "${this.calledOperator}"`);
                }
                return NaN;
            }
            // dělení nulou
            if (this.calledOperator === 'divide' && this.numberB === 0) {
                if (this.debugging) {
                    console.debug(`[Debug, calculator] Nelze delit nulou`);
                }
                return NaN;
            }
            // odmocnění záporného čísla
            if (this.calledOperator === 'root' && this.numberA < 0) {
                if (this.debugging) {
                    console.debug(`[Debug, calculator] Nelze odmocnit záporné číslo`);
                }
                return NaN;
            }
            // logaritmus vyžaduje kladné číselné vstupy a základ nesmí bít 1.
            if (this.calledOperator === 'log' && this.numberA <= 0 && this.numberB === 1) {
                if (this.debugging) {
                    console.debug(`[Debug, calculator] Logaritmus vyžaduje kladné číselné vstupy a základ nesmí bít 1.`);
                }
                return NaN;
            }
        }

        // Tolik práce jen kvůli tomuto výpočtu...
        const result = operation(this.numberA, this.numberB);

        if (this.debugging) {
            if (this.calledOperator === 'add') {
                console.debug(`[Debug, calculator] Součet ${this.numberA} + ${this.numberB} je: ${result}`);
            } else if (this.calledOperator === 'subtract') {
                console.debug(`[Debug, calculator] Odečet ${this.numberA} - ${this.numberB} je: ${result}`);
            } else if (this.calledOperator === 'multiply') {
                console.debug(`[Debug, calculator] Násobení ${this.numberA} * ${this.numberB} je: ${result}`);
            } else if (this.calledOperator === 'divide') {
                console.debug(`[Debug, calculator] Dělení ${this.numberA} / ${this.numberB} je: ${result}`);
            } else if (this.calledOperator === 'power') {
                console.debug(`[Debug, calculator] Mocnina ${this.numberA} ^ ${this.numberB} je: ${result}`);
            } else if (this.calledOperator === 'root') {
                console.debug(`[Debug, calculator] Odmocnění ${this.numberB} √ ${this.numberA} je: ${result}`);
            } else if (this.calledOperator === 'log') {
                console.debug(`[Debug, calculator] Logaritmus ${this.numberB} ㏒ ${this.numberA} je: ${result}`);
            }
        }

        // return this.rounding ? result.toFixed(this.rounding) : result; // fixní float i když není potřeba
        return this.rounding ? Math.round(result * Math.pow(10, this.rounding)) / Math.pow(10, this.rounding) : result;
    }
};

console.log(`Součet 565 + 584 je: ${calculator.secti(15, 48)}`);
console.log(`Odečet 474 - 520 je: ${calculator.odecti(98, 41)}`);
console.log(`Násobení 5822 * 65 je: ${calculator.vynasob(54, 30)}`);
console.log(`Dělení 632 / 6 je: ${calculator.vydel(88, 6)}`);
console.log(`Mocnina 2 ^ 8 je: ${calculator.umocni(2, 8)}`);
console.log(`Odmocnina 2 √ 2160 je: ${calculator.odmocni(2160, 2)}`);
console.log(`Logaritmus 5 ㏒ 565 je: ${calculator.logaritmuj(565, 5)}`);

console.log(`Součet 565 + 584 je: ${calculator.secti(565, "584")}`);
console.log(`Odečet 474 - 520 je: ${calculator.odecti(true, 520)}`);
console.log(`Násobení 5822 * 65 je: ${calculator.vynasob(Infinity, -Infinity)}`);
console.log(`Dělení 632 / 0 je: ${calculator.vydel(632, 0)}`);
console.log(`Mocnina 2 ^ -8 je: ${calculator.umocni(2, -8)}`);
console.log(`Odmocnina 2 √ -2 je: ${calculator.odmocni(-2, 2)}`);
console.log(`Logaritmus 5 ㏒ 0 je: ${calculator.logaritmuj(0, 5)}`);



// class object

/*
Vytvoř třídu Calculator, která bude mít metody:
    Sečíst (add)
    Odečíst (subtract)
    Násobit (multiple)
    Dělit (divide)
Metody budou mít vždy 2 parametry: a, b (nedávejte je do konstruktoru!)
Metoda budou vracet výsledek (pomocí return).
Následně vytvoř kód, který bude inicializovat (vytvoří objekt) Calculator.
Bude vypisovat výsledky do konzole:
    Sečíst  14 + 41
    Odečíst 174 - 32
    Násobit  47 * 50
    Dělit 125 / 7
(Objekt Calculator stačí jen jeden).
*/

class Calculator {
    constructor(debugging = false, validing = false, rounding = false) {
        this.debugging = debugging;
        this.validing = validing;
        this.rounding = rounding;
    }
    add(a, b) {
        return this.calculate(a, b, (a, b) => a + b, "add");
    }
    subtract(a, b) {
        return this.calculate(a, b, (a, b) => a - b, "subtract");
    }
    multiply(a, b) {
        return this.calculate(a, b, (a, b) => a * b, "multiply");
    }
    divide(a, b) {
        return this.calculate(a, b, (a, b) => a / b, "divide");
    }
    isValidNumber(a, b) {
        return typeof a === 'number' && typeof b === 'number';
    }
    calculate(a, b, operation, operationName) {
        if (this.validing) {
            if (!this.isValidNumber(a, b)) {
                if (this.debugging) console.error(`[Error, Calculator] Neplatná vstupní hodnota ${a} (typ: ${typeof a}) nebo ${b} (typ: ${typeof b})!`);
                return NaN;
            }
            if (operationName === 'divide' && b === 0) {
                if (this.debugging) console.error(`[Error, Calculator] Nelze delit nulou!`);
                return NaN;
            }
        }
        const result = operation(a, b);
        if (this.debugging) {
            console.debug(`[Debug, Calculator] ${operationName} ${a} a ${b} je: ${result}`);
        }
        return this.rounding ? Math.round(result * Math.pow(10, this.rounding)) / Math.pow(10, this.rounding) : result;
    }
}

const classCalculator = new Calculator(true, true, 4);

console.log(`Součet 14 + 41 je: ${classCalculator.add(14, 41)}`);
console.log(`Odečet 174 - 32 je: ${classCalculator.subtract(174, 32)}`);
console.log(`Násobení 47 * 50 je: ${classCalculator.multiply(47, 50)}`);
console.log(`Dělení 125 / 7 je: ${classCalculator.divide(125, 7)}`);

// testování
console.log(`Součet 14 + "41" je: ${classCalculator.add(14, "41")}`);
console.log(`Odečet true - 32 je: ${classCalculator.subtract(true, 32)}`);
console.log(`Násobení Infinity * -Infinity je: ${classCalculator.multiply(Infinity, -Infinity)}`);
console.log(`Dělení 125 / 0 je: ${classCalculator.divide(125, 0)}`);