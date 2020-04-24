class Character {
    constructor(name, profession, age, strength, hitPoints) {
        this.name = name;
        this.profession = profession;
        this.age = age;
        this.strength = strength;
        this.hitPoints = hitPoints;
    }
}


class Animal {
    constructor(raining, noise) {
        this.raining = raining;
        this.noise = noise;
        this.makeNoise = function () {
            if (this.raining === true) {
                console.log(this.noise);
            }
        };
    }
}

Character.prototype.printStats = function() {
    console.log(`Character Info\nName: ${this.name}\nProfession: ${this.profession}\nAge: ${this.age}\nStrength: ${this.strength}\nHP: ${this.hitPoints}\n`);
}

Character.prototype.isAlive = function() {
    return this.hitPoints > 0 ? true : false;
}

Character.prototype.attack = function(target){
    target.hitPoints -= this.strength;
    console.log(`${this.name} attacks ${target.name} for ${this.strength} damage`);
    console.log(target.isAlive() ? `${target.name} has ${target.hitPoints} HP remaining\n` : `${target.name} has been slain!\n`);
}

Character.prototype.levelUp = function(){
    this.age += 1;
    this.strength +=5;
    this.hitPoints +=25;
    console.log(`${target.name} has leveled up`);
    this.printStats();
}

const Rigby = new Character("Rigby", "Fighter", 30, 20, 65);
const Darhoth = new Character("Darhoth", "Cleric", 22, 15, 55);


Darhoth.printStats();

Rigby.attack(Darhoth);
Rigby.attack(Darhoth);
Rigby.attack(Darhoth);


Darhoth.printStats();
