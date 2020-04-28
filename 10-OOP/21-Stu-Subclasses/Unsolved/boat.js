const Vehicle = require("./vehicle");
class Boat extends Vehicle {
    constructor(crew, id, wheels, sound) {
        super(id, wheels, sound);
        this.crew = crew;
    }
    crewSoundOff(){
        console.log("Crew sound off!");
        console.log(this.crew.join("\n"));
    }
}
const Yacht = new Boat(["Andy", "Sam", "Mike", "Jerry"], "Minnow", 0, "Aooooooooogah!!!");
Yacht.printInfo();
Yacht.crewSoundOff();
Yacht.useHorn();