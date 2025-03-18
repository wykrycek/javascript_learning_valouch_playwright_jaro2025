const cities = [
    "Praha",
    "Brno",
    "Ostrava",
    "Plzen",
    "Liberec",
    "Olomouc",
    "Usti nad Labem",
    "Pardubice",
    "Kladno",
    "Hradec Kralove",
    "Kutna Hora",
    "Mlada Boleslav",
    "Teplice",
    "Chomutov",
    "Jihlava",
    "Zlin",
    "Karlovy Vary",
    "Pisek",
    "Usti nad Orlici",
    "Hradec Kralove"
];

console.log(cities[1]);

const printCity = "Brno";

console.log(cities.indexOf(printCity));


// * Cyklení array ve foru
for (let i = 0; i < cities.length; i++) {
    console.log(`Město: ${cities[i]}`);
}