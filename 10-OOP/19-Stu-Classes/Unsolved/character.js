class Character {
  constructor(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    return this.hitpoints>0 ? true : false;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponent.name} for ${this.strength} damage\n${opponent.name} has ${opponent.hitpoints} hit points remaining.`);
    console.log(opponent.isAlive ? `${opponent.name} is still alive!` : `${opponent.name} has died!`);
  }
}

// Create two unique characters using the "character" class
const rigby = new Character("Rigby", 25, 80);
const darhoth = new Character("Darhoth", 22, 105);


let attacker = rigby;
let defender = darhoth;
let placeholder = "";

// Create an interval that alternates attacks every 2000 milliseconds

const tradeAttacks = setInterval(()=>{
  if (!attacker.isAlive || !defender.isAlive()){
    clearInterval(tradeAttacks);
    return;
  }
  attacker.attack(defender);
  placeholder = defender;
  defender = attacker;
  attacker = placeholder;


}, 2000)
