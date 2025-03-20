export class CarBluePrint {
    constructor(color, engine, fuel, carName) {
        this.color = color;
        this.engine = engine;
        this.fuel = fuel;
        this.carName = carName;
        this.wheels = 4;

        this.logDivider();
        console.log("Car class constructed...");
        this.logDivider();

        console.log(`||`
            +`\n|| Color: ${this.color}`
            +`\n|| Engine: ${this.engine}`
            +`\n|| Fuel: ${this.fuel}`
            +`\n|| Car Name: ${this.carName}`
            +`\n|| Wheels: ${this.wheels}`
        +`\n||`);
    }

    logCarProperties() {
        this.logDivider();

        this.logDivider();
        console.log("Car properties...");
        this.logDivider();

        console.log(`
            Color: ${this.color}
            Engine: ${this.engine}
            Fuel: ${this.fuel}
            Car Name: ${this.carName}
            Wheels: ${this.wheels}
        `);
    }

    logDivider() {
        console.log("------------");
    }

    repaint(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}