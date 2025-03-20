export class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            return NaN;
        }
        return a / b;
    }
}





// Hraju si...

// Vylepšená kalkulačka


export class Calculator2 {
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
    power(a, b = 2) {
        return this.calculate(a, b, (a, b) => a ** b, "power");
    }
    sqrt(a, b = 2) {
        return this.calculate(a, b, (a, b) => a ** (1 / b), "sqrt");
    }
    log(a, b = 10) {
        return this.calculate(a, b, (a, b) => Math.log(a) / Math.log(b), "log");
    }

    isValidNumber(a, b) {
        return typeof a === "number" && typeof b === "number";
    }

    calculate(a, b, operation, operationName) {
        if (this.validing) {
            // Kontrola validity vstupních hodnot
            if (!this.isValidNumber(a, b)) {
                if (this.debugging) console.error(`[Error, Calculator] Neplatná vstupní hodnota ${a} (typ: ${typeof a}) nebo ${b} (typ: ${typeof b})!`);
                return NaN;
            }
            // Kontrola dělení nulou
            if (operationName === "divide" && b === 0) {
                if (this.debugging) console.error(`[Error, Calculator] Nelze delit nulou!`);
                return NaN;
            }
            // Kontrola odmocnění záporného čísla
            if (operationName === "sqrt" && a < 0) {
                if (this.debugging) console.error(`[Error, Calculator] Nelze odmocnit záporné číslo!`);
                return NaN;
            }
            // Kontrola logaritmus vyžaduje kladné číselné vstupy a základ nesmí být 1.
            if (operationName === "log" && a <= 0 && b === 1) {
                if (this.debugging) console.error(`[Error, Calculator] Logaritmus vyžaduje kladné číselné vstupy a základ nesmí být 1.`);
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