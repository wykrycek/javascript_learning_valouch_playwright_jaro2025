const firstNames = ["Jirka", "Alžběta", "Pepík"];
const lastNames = ["Novák", "Borovička", "Prdík"];

firstNames.forEach((firstName, index) => {
    console.log(`${firstName}, ${lastNames[index]}`);
});


// Toying with objects

const names = [
    {
        firstName: "Jirka",
        lastName: "Novák",
    },
    {
        firstName: "Alžběta",
        lastName: "Borovička",
    },
    {
        firstName: "Pepík",
        lastName: "Prdík",
    },
];

names.forEach((name) => {
    console.log(`${name.firstName}, ${name.lastName}`);
});


let generatedNames = [];

for (let i = 0; i < 10; i++) {
    generatedNames.push({
        firstName: `Jirka${i}`,
        lastName: `Novák${i}`,
    });
}
console.log(generatedNames);