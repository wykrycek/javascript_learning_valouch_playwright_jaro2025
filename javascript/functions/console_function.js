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


function printName(name) {
    console.log(name);
}

const names = [
    "Jirka",
    "Alžběta",
    "Pepík",
];

names.forEach(printName);