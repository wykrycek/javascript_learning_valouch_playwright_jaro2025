import { Calculator } from "./Calculator.mjs";
import { Calculator2 } from "./Calculator.mjs";


const calculator = new Calculator();


console.log(`Součet 14 + 41 je: ${calculator.add(14, 41)}`);
console.log(`Odečet 174 - 32 je: ${calculator.subtract(174, 32)}`);
console.log(`Násobení 47 * 50 je: ${calculator.multiply(47, 50)}`);
console.log(`Dělení 125 / 7 je: ${calculator.divide(125, 7)}`);
console.log(`Dělení 125 / 0 je: ${calculator.divide(125, 0)}`);





// vylepšená verze...

/*
* @param {boolean} debigging; default: false    // de/altivuje výpis do konzole
* @param {boolean} validing; default: false     // de/altivuje kontrolu vstupních dat
* @param {number} rounding; default: 2          // počet desetinných míst (bez fixní délky)
*/
const calculator2 = new Calculator2(true, true, 4);


console.log(`Součet 14 + 41 je: ${calculator2.add(14, 41)}`);
console.log(`Odečet 174 - 32 je: ${calculator2.subtract(174, 32)}`);
console.log(`Násobení 47 * 50 je: ${calculator2.multiply(47, 50)}`);
console.log(`Dělení 125 / 7 je: ${calculator2.divide(125, 7)}`);
console.log(`Dělení 125 / 0 je: ${calculator2.divide(125, 0)}`);
console.log(`Mocnina 2 ^ 8 je: ${calculator2.power(2, 8)}`);
console.log(`Odmocnina 11 √ 2048 je: ${calculator2.sqrt(2048, 11)}`);
console.log(`Odmocnina 2 √ -2 je: ${calculator2.sqrt(-2, 2)}`);
console.log(`Logaritmus 5 ㏒ 565 je: ${calculator2.log(565, 5)}`);
console.log(`Logaritmus 5 ㏒ 0 je: ${calculator2.log(0, 5)}`);