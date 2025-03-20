/*
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: javascript/exercises, název souboru: calculator.js
Vytvoř 4 funkce: add, subtract, multiply, divide, které budou mít 2 parametry (2 čísla)
Funkce také zapíší výsledek do konzole.
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6

*/


function secti(a, b) {
    let result = a + b;
    console.log(`Součet ${a} + ${b} je: ${result}`);
    return result;
}

function odecti(a, b) {
    let result = a - b;
    console.log(`Odečet ${a} - ${b} je: ${result}`);
    return result;
}

function vynasob(a, b) {
    let result = a * b;
    console.log(`Násobení ${a} * ${b} je: ${result}`);
    return result;
}

function vydel(a, b) {
    let result;
    if (b === 0) {
        result = NaN;
        console.error(`Chyba: Nelze dělit nulou!`);
    }
    else {
        result = a / b;
    }
    console.log(`Dělení ${a} / ${b} je: ${result}`);
    return result;
}

function umocni(a, b) {
    let result;
    if (typeof a !== "number" || typeof b !== "number") {
        console.error("Chyba: Umocnění vyžaduje číselné vstupy.");
        result = NaN;
    } else {
        let result = a ** b;
    }
    console.log(`Mocnina ${a} ^ ${b} = ${result}`);
    return result;
}

function odmocni(a, b = 2) {
    let result;
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
        console.error("Chyba: Odmocnění vyžaduje číselné vstupy a odmocnitel nesmí být nula.");
        result = NaN;
    } else if (a < 0 && b % 2 === 0) {
        console.error("Chyba: Nelze počítat sudou odmocninu ze záporného čísla.");
        result = NaN;
    } else {
        result = a ** (1 / b);
    }
    console.log(`Odmocnina ${b} √ ${a} = ${result}`);
    return result;
}

function logaritmuj(a, b = 10) {
    let result;
    if (typeof a !== "number" || typeof b !== "number" || a <= 0 || b <= 0 || b === 1) {
        console.error("Chyba: Logaritmus vyžaduje kladné číselné vstupy a základ nesmí být 1.");
        result = NaN;
    } else {
        result = Math.log(a) / Math.log(b);
    }
    console.log(`Logaritmus ${b} ㏒ ${a} = ${result}`);
    return result;
}


secti(15, 48);
odecti(98, 41);
vynasob(54, 30);
vydel(88, 6);
vydel(88, 0);
umocni(2, 8);
umocni(2, 3);
odmocni(9, 2);
odmocni(-8, 3);
odmocni(-16, 2);
odmocni(2, 2048);
logaritmuj(100);
logaritmuj(565, 5);
logaritmuj(8, 2);
logaritmuj(-10, 2);
logaritmuj(10, 1);


// Hraju si...


// Karkulačka v konstantě

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