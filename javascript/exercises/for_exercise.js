/*
Vytvoř ve složce javascript/exercices nový JS soubor: for_exercise.js
Do skriptu vytvoř:
For cyklus (25 běhů), který bude vypisovat do konzole:
“Běhám: “ + čísloBěhu



*/

for (let i = 0; i < 25; i++) {
    console.log("Běhám: " + i);
}

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log("Běhám: " + i);
    }
}