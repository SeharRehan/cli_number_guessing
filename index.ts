#! /usr/bin/env node
import inquirer from "inquirer";

//computer will generate random number
//user input for random number
//compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guest a number between 1-6:",
    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number");
    
}
else{
    console.log("You guessed wrong number");
    
}