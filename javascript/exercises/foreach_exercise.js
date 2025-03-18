/*
Cvičení - forEach (⌛5:00)
Vytvořte ve složce: javascript/exercises soubor: foreach_exercise.js.
Vytvořte array: usernames.
Tuto array naplňte alespoň pěti string hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array usernames.
*/


const usernames = [
    "Anička",
    "Jirka",
    "Alžběta",
    "Pepík",
    "Petr",
];

usernames.forEach((username) => {
    console.log(`Uživatel: ${username}`);
});

