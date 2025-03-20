import { CarBluePrint } from "./car_blueprint.mjs";

new CarBluePrint("red", "V8", "gas", "Tesla").logCarProperties();


const zeleneAuticko = new CarBluePrint("green", "BMM", "diesel", "Zelene auticko");
zeleneAuticko.logCarProperties();



const electricCar = new CarBluePrint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();

electricCar.repaint("Růžová");
electricCar.logCarProperties();

console.log(electricCar.getColor());