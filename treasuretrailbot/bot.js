require('dotenv').config();

// Require discord.js package
const Discord = require("discord.js");


// Create a new client using the new keyword
const client = new Discord.Client();

// Display a message once the bot has started
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", async msg =>{
    // Write if statement if the message includes a specific word
    if (msg.content.includes("!treasuretrove")){
        // Split the string
        var decodeMessage = msg.content.split(" ");
        // The variable with the split string contents is now an array

        // Console log the data
        console.log(decodeMessage);

        // attempt to convert second item in array to a number
        var correctNumber = Number(decodeMessage[1]);

        // Console log the data
        console.log(correctNumber);

        // Run math.floor on the second index to even out the number
        correctNumber = Math.floor(correctNumber);

        // Console log the data
        console.log(correctNumber);

        // Only run code if the first item in the array is !treasuretrove and the second is a number between 1 and 10000
        if (decodeMessage[0] === "!treasuretrove" && Number(correctNumber) && correctNumber < 10001 && correctNumber > 0 && decodeMessage.length == 2){
            var rangerbootsDropRate = 333;
            var wizardbootsDropRate = 666;
            var holysandalsDropRate = 999;
            var itemsFromClue = 0;
            var rollOnTable = 0;
            var totalRangerBoots = 0;
            var totalWizardBoots = 0;
            var totalHolySandals = 0;

            // For loop that creates rolls on the medium clue table
            for (var i = 0; i < correctNumber; i++){
                var itemsEachClue = Math.floor((Math.random() * 3) + 3);
                itemsFromClue += itemsEachClue;
            }

            // Log the amount of items from the clue scrolls
            console.log(itemsFromClue);

            // For loop for each item roll
            for (var i = 0; i < itemsFromClue; i++){
                rollOnTable = Math.floor((Math.random() * 1000) + 1);
                
                if (rollOnTable === rangerbootsDropRate){
                    totalRangerBoots++;
                }
                else if (rollOnTable === wizardbootsDropRate){
                    totalWizardBoots++;
                }
                else if (rollOnTable === holysandalsDropRate){
                    totalHolySandals++;
                }
            }
            msg.reply("You opend " + correctNumber + " treasure troves.\nAnd you rolled " + itemsFromClue + " items in total.\n"
            + "And you got " + totalRangerBoots + " Ranger boots " + totalWizardBoots + " Wizard boots " + totalHolySandals + " Holy sandals.");
        }
    }
});

// Log in the bot with the token
client.login(process.env.TOKEN);