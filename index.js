var Letters = require("./letters");
var Word = require("./word");
var inquirer = require("inquirer");



var guessList = "";
var count = 0;
var index = Math.random();
// console.log("random word index: ",index);
var guess = "11";

// var word = new Word(guess,guessList,index);
// console.log("last word: ",word.guess);


function testEnvironment(){
    var theWord = new Word(null,guessList,index);
    if(guess>=0){
        console.log("description: ",theWord.letterWordDescription);
        theWord.print();
        inquirer.prompt([{
            type: "input",
            name: "input",
            message: "any letter"
        }]).then(function(input){
            var input = input.input;
            console.log(input);
            if(input.length>1){
                console.log("whoa! one letter at a time");
                testEnvironment();
            }else if(input.length===0){
                console.log("done");
            }else{
                guess --;
                var word = new Word(input,guessList,index);
                word.print();
                guessList += input;
                console.log("guess list: ",guessList);
                if(word.finished){
                    word.ending(true,word.letterWordName);
                }else{
                    testEnvironment();
                }
            }
            
        })
    }else{
        theWord.ending(false,theWord.letterWordName);
    }
}

testEnvironment();


// create a new Word object with the current letter guessed, the list of guesses already made and the index identifying the word.
// the word page will look at the guess and the word to determine if it has already been guessed and if it is in the word.
// the word page then returns an object which includes the word remade with spaces or letters depending on whether they've been guessed.




// function gameOver(outcome,word){
//     if(outcome===true){
//         console.log("**********************************\n\nYay!!! You\'re the big winner!\n\n************\n***********************\n*********************\n**************")
//     }else{
//         console.log("Dang! the word was: " + word);
//     }
// }

// play();
