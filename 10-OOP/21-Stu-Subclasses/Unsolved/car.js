const Vehicle = require("./vehicle");
class Car extends Vehicle {
    constructor(color, passengers, id, wheels, sound) {
        super(id, wheels, sound);
        this.color = color;
        this.passengers = passengers;
    }
    checkPassengers() {
        console.log(this.passengers.length > 4 ? "There are too many passengers for this car!" : `This car is safe to drive with ${this.passengers.length} passengers`);
    }
}
const Honda = new Car("Black", ["Mary", "Adam", "Jonathan"], "Honda", 4, "Honk Honk!!!");
Honda.printInfo();
Honda.useHorn();
Honda.checkPassengers();