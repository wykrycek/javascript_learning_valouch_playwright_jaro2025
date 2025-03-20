export class BikeTemplate {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    logBikeProperties() {
        console.log(`
            Bike type: ${this.type}
            Bike color: ${this.color}
        `);
    }
}