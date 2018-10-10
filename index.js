var Word = require("./word");
var inquirer = require("inquirer");



var guessList = "";
var index = Math.random();
var guess = "6";
var theWord = new Word(null,guessList,index);
console.log("description: ",theWord.letterWordDescription);
theWord.print();

function play(){
    switch(guess){
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
            rightArm();
            break
        case 1:
            head();
            rightArm();
            leftLeg();
            break
        case 0:
            head();
            rightArm();
            rightLeg();
            break
    }
    console.log("\nHint: " + theWord.letterWordDescription + "\n");
    if(guess>=0){
        inquirer.prompt([{
            type: "input",
            name: "input",
            message: "any letter"
        }]).then(function(input){
            var input = input.input;
            console.log("your guess: ",input);
            if(!theWord.letterWordName.includes(input)){
                guess --;
            }
            if(input.length>1){
                console.log("whoa! one letter at a time");
                play();
            }else if(input.length===0){
                console.log("done");
            }else{
                
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



function head(){
    console.log("\n   #########\n  #         #\n  @  0   0  @\n  |    5    |\n  |  #####  /\n   |  ---  /\n    ^^^^^^^");
}
function body(){
    console.log("    =======\n    |     |\n    |     |\n    |     |\n    |     |\n    |_____|")
}
function leftArm(){
    console.log("(8) =======\n(8) |     |\n(8) |     |\n(8) |     |\n    |     |\n    |_____|\n")
}
function rightArm(){
    console.log("(8) ======= (8)\n(8) |     | (8)\n(8) |     | (8)\n(8) |     | (8)\n    |     |\n    |_____|\n")
}
function leftLeg(){
    console.log("{88}\n{88}\n{88}\n{88}\n{88}\n{88}\n{88}\n")
}
function rightLeg(){
    console.log("{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n{88}       {88}\n")
}

