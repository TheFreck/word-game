var Word = require("./word");
var inquirer = require("inquirer");



var guessList = "";
var index = Math.random();
var guess = "11";
var theWord = new Word(null,guessList,index);
console.log("description: ",theWord.letterWordDescription);
theWord.print();

function play(){
    if(guess>=0){
        inquirer.prompt([{
            type: "input",
            name: "input",
            message: "any letter"
        }]).then(function(input){
            var input = input.input;
            console.log(input);
            if(input.length>1){
                console.log("whoa! one letter at a time");
                play();
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
                    play();
                }
            }
        })
    }else{
        theWord.ending(false,theWord.letterWordName);
    }
}

play();