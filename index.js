var Word = require("./word");
var inquirer = require("inquirer");

// *************************************************************************************************************************************************
// Initialization
// *************************************************************************************************************************************************
// these need to be anchored outside the recursion so they can keep their values through multiple guesses
var guessList = "";
// this determines which word object is chosen on Word.js
var index = Math.random();
var guess = "6";
// calling the functionality of the other pages without the game data yet
var theWord = new Word(null,guessList,index);
// printing the description of the hidden word
console.log("description: ",theWord.letterWordDescription);
// printing the spaces instead of the letters
theWord.print();

// *************************************************************************************************************************************************
// And now we play
// *************************************************************************************************************************************************

function play(){
    console.log("\n\n\n*************************************\n++++++++++++++++++++++++++++++++++++++\n*************************************")
    // This is a game of hangman
    // The switch determines the body parts to display depending on how many guesses are left
    // The body part functions are defined below
    switch(guess){
        case 6:
            blank();
            break
        case 5:
            head();
            break
        case 4:
            head();
            body();
            break
        case 3:
            head();
            leftArm();
            break
        case 2:
            head();
            leftRightArm();
            break
        case 1:
            head();
            leftRightArm();
            leftLeg();
            break
        case 0:
            head();
            leftRightArm();
            leftRightLeg();
            break
    }
    function head(){
        console.log("\n   #########\n  #         #\n  @  0   0  @\n  |    5    |\n  |  #####  /\n   |  UUU  /\n    |__:__/");
    }
    function body(){
        console.log("    =======\n    |     |\n    |     |\n    |     |\n    |     |\n    |_____|")
    }
    function leftArm(){
        console.log("(8) =======\n(8) |     |\n(8) |     |\n(8) |     |\n    |     |\n    |_____|\n")
    }
    function leftRightArm(){
        console.log("(8) ======= (8)\n(8) |     | (8)\n(8) |     | (8)\n(8) |     | (8)\n    |     |\n    |_____|\n")
    }
    function leftLeg(){
        console.log("{88}\n{88}\n{88}\n{88}\n{88}\n{88}\n{88}\n")
    }
    function leftRightLeg(){
        console.log("{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n")
    }

    // *********************************************************************************************************************************************
    // give 'em a hint so they're not wandering in the dark
    console.log("\nHint: " + theWord.letterWordDescription + "\n");
    
    // what letter will they guess? Time to find out
    if(guess>=0){
        inquirer.prompt([{
            type: "input",
            name: "input",
            message: "any letter"
        }]).then(function(input){
            var input = input.input;
            // log the guess
            console.log("your guess: ",input);
            // only take a guess away if it's not correct
            if(!theWord.letterWordName.includes(input)){
                guess --;
            }
            if(input.length===0){
                // the last [if statement] takes us to the end so entering a blank guess will bypass the game at this point
                console.log("done");
            }else if(input.length>1){
                // guessing more than one letter at a time is not allowed
                console.log("whoa! one letter at a time");
                play();
            }else{
                // the magic starts here
                console.log("guesses left: ",guess);
                var word = new Word(input,guessList,index);
                word.print();
                guessList += input;
                console.log("guess list: ",guessList);
                if(word.finished){
                    word.ending(true,word.letterWordName);
                }else{
                    play();
                }
            }
        })
    }else{
        theWord.ending(false,theWord.letterWordName);
    }
}

play();