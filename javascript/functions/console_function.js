// console_function.js
// functions

function logHelloWorld() {
  console.log("---------------");
  console.log("Ahoj JS světe!");
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();
logHelloWorld();




// Toying with functions

const names = [
    "Jirka",
    "Alžběta",
    "Pepík",
];

function printName(name) {
    console.log(name);
}

names.forEach(printName);



function logText(textParameter) {
  // ? Parametr vs argument
  // parametr je "proměnná" funkce a argument do ní přiřazujeme
  // logText("argument"); uvnitř funkce se děje: textParameter = "argument"
  let date = new Date().toLocaleString();
  console.log(`[${date}] Zalování: ${textParameter}`);
}

logText("Ahoj JS světe!");