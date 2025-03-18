// lcohol_eligibility.js
// conditions


const actualAge = 17;
const drinkingAgeLimit = 18;
const fullName = "Pepa Alkoholik";
const isMinor = (age, limit) => age < limit;
const isAdult = (age, limit) => age >= limit;
const isValidAge = (age) => typeof age === "number" && age > 0;


if (actualAge >= drinkingAgeLimit) {
    console.log(fullName + " is eligible for alcohol.");
}

if (isMinor(actualAge, drinkingAgeLimit)) {
    console.log(fullName + " is not eligible for alcohol.");
}

if (isAdult(actualAge, drinkingAgeLimit)) {
    console.log(fullName + " is eligible for alcohol.");
}


const peoples = [
    { name: "Pepa Alkoholik", age: 17 },
    { name: "Bertík Blbounek", age: 18 },
    { name: "Soňa Slípka", age: 16 },
    { name: "Táňa Vodná", age: 20 },
    { name: "Janík Zlatan", age: "21" },
    { name: "Kája Houbař", age: -1 },
    { name: "Áňa Tanečková", age: false },
];

peoples.forEach((person) => {
    if (isValidAge(person.age)) {
        if (isAdult(person.age, drinkingAgeLimit)) {
            console.log(`${person.name} is eligible for alcohol.`);
        } else if (isValidAge(person.age)) {
            console.log(`${person.name} is not eligible for alcohol. Is missed ${drinkingAgeLimit - person.age} years.`);
        } 
    } else {
        console.error(`CHYBA: ${person.name} is not valid age. (${typeof person.age})`);
    }
});