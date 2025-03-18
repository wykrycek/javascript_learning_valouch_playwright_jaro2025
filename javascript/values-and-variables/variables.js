let firstName = "Jirka"; // ? Deklarace a inicializace proměnné
let lastName; // ? Pouze deklarace, hodnota je nyní undefined (nenastavená)

lastName = "Novák";

// let lastName = "Novák" // ? Nemůžu udělat, proměnnou deklaruji pouze jednou
console.log(firstName);
console.log(lastName);

firstName = "Alžběta";

console.log(firstName);
console.error(firstName.toUpperCase());
console.debug(firstName.toLowerCase());

firstName = "Pepík";

console.log(firstName);

let day = 19;
let month = 9;
let year = 2022;

console.log(`${day}.${month}.${year}`);


// * Chování proměnné let

let outside = "VenkovníProměnná"; // ? Promměnná outside vstupuje do bloků v tomto souboru
{
  console.log(outside);
  let inside = "Vnitřní proměnná"; // ? Proměnná inside existuje pouze uvnitř bloku, mimo neexistuje
}
// console.log(inside); // ! CHYBA, proměnná inside neexistuje mimo blok


// let lastName = "Novák" // ? Nemůžu udělat, proměnnou deklaruji pouze jednou (jedná se o tzv. redeklaraci, která u let proměnné není umožněna)

// * Chování proměnné var
// ! Var není doporučené používat v nových programech, je zastaralá a může vést k chybám (lidské chyby)!
{
  var insideVar = "Vnitřní Var";
}
console.log(insideVar); // ? Proměnné var můžu použít i mimo blok kódu
var insideVar = "Tak a jsem redeklarovaný";
console.log(insideVar);
insideVar = "Jiná hodnota";
var declaredVar; // ? je možná deklarace bez inicializace

// * Chování proměnné const
//const declaredConst; // ! Chyba, constantu musím vždy inicializovat spolu s deklarací.
const changeConst = "Nejdu změnit";
// changeConst = "Cha cha! Změněno!";
console.log(changeConst);

{
  const insideConst = "Vnitřní const";
}
console.log(insideConst); // ! Chyba: ReferenceError: insideConst is not defined


/*
jsem 
více-
řádková

poznámka
*/


