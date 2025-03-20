import { BikeTemplate } from './bike_template.mjs';

const bikes = [
    { type: "mountain", color: "red" },
    { type: "road", color: "blue" },
    { type: "touring", color: "green" },
];

bikes.forEach(bike => {
    new BikeTemplate(bike.type, bike.color).logBikeProperties();
});