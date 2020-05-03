require('dotenv').config();

// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Display a message once the bot has started
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", msg => {
    // Create a const with the msg.content but in lower case
    const msgToLower = msg.content.toLowerCase();
    // Create a gamearray with 3 strings
    const gameArray = ["rock", "paper", "scissors"];
    // Create a variable and store the number 3
    const multiply = 3;
    // A smarter way of checking user input
    const inputArray = ["!rock", "!paper", "!scissors"];
    // A smarter way of responding who won..
    const wonArray = ["It's a draw!", "The computer wins!", "You win!"];
    // Also add a smarter way of displaying what the user has chosen
    const chosenArray = ["You've chosen rock!", "You've chosen paper!", "You've chosen scissors!"];
    // A smarter way of writing "Pc has chosen: "
    const pcChosen = "Pc has chosen: ";

    // Check if the user input is !rock
    if (msgToLower === inputArray[0]){
        // Print a visual message (in-efficient)
        msg.reply(chosenArray[0]);
        // Create a random number between 0-2
        const random = Math.floor(Math.random() * multiply);
        // Select an item from the array with the random generated number
        const pcSelect = gameArray[random];
        // print a message letting the user know what the computer choice is (in-efficient)
        msg.reply(pcChosen + pcSelect);
        // if the pc selected rock
        if (pcSelect === gameArray[0]){
            msg.reply(wonArray[0]);
        }
        // if the pc selected paper
        else if (pcSelect === gameArray[1]){
            msg.reply(wonArray[1]);
        }
        // if the pc selected scissors
        else if (pcSelect === gameArray[2]){
            msg.reply(wonArray[2]);
        }
    }

    // Check if the user input is !paper
    else if (msgToLower === inputArray[1]){
        // Print a visual message (in-efficient)
        msg.reply(chosenArray[1]);
        // Create a random number between 0-2
        const random = Math.floor(Math.random() * multiply);
        // Select an item from the array with the random generated number
        const pcSelect = gameArray[random];
        // print a message letting the user know what the computer choice is (in-efficient)
        msg.reply(pcChosen + pcSelect);
        // if the pc selected rock
        if (pcSelect === gameArray[0]){
            msg.reply(wonArray[2]);
        }
        // if the pc selected paper
        else if (pcSelect === gameArray[1]){
            msg.reply(wonArray[0]);
        }
        // if the pc selected scissors
        else if (pcSelect === gameArray[2]){
            msg.reply(wonArray[1]);
        }
    }

    // Check if the user input is !scissors
    else if (msgToLower === inputArray[2]){
        // Print a visual message (in-efficient)
        msg.reply(chosenArray[2]);
        // Create a random number between 0-2
        const random = Math.floor(Math.random() * multiply);
        // Select an item from the array with the random generated number
        const pcSelect = gameArray[random];
        // print a message letting the user know what the computer choice is (in-efficient)
        msg.reply(pcChosen + pcSelect);
        // if the pc selected rock
        if (pcSelect === gameArray[0]){
            msg.reply(wonArray[1]);
        }
        // if the pc selected paper
        else if (pcSelect === gameArray[1]){
            msg.reply(wonArray[2]);
        }
        // if the pc selected scissors
        else if (pcSelect === gameArray[2]){
            msg.reply(wonArray[0]);
        }
    }
});

// Log in the bot with the token
client.login(process.env.TOKEN);