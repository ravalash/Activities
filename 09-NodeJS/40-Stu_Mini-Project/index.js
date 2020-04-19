const fs = require("fs").promises;
const inquirer = require("inquirer");
const util = require('util');

async function getInput(){
    const userInput = await inquirer.prompt([
        {message: "What is your name?", name: "name" },
        {message: "Where are you from", name: "location"},
        {message: "What is your favorite food?", name: "location"},
    ])
    console.log (userInput);
}

getInput();