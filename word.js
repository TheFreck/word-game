var Letters = require("./letters");

var wordList = [{
    name: "baracuda",
    description: "a fishy song by the rock band Heart"
},{
    name: "pancake",
    description: "a tasty breakfast treat"
},{
    name: "oregano",
    description: "a nummy mediterranian herb"
},{
    name: "pumpernickel",
    description: "dark and delish bread"
},{
    name: "stampede",
    description: "cattle run amok"
},{
    name: "computer",
    description: "it does what it's told until they all take over"
},{
    name: "internet",
    description: "everyone is so close now"
},{
    name: "discovery",
    description: "Eureka!!!"
},{
    name: "remarkable",
    description: "can be 'checked off' a second time"
},{
    name: "discombobulate",
    description: "befuddled"
},{
    name: "ridiculous",
    description: "they're all gonna laugh at you!!!"
},{
    name: "personify",
    description: "you do it; they do it; I'm doing it right now"
}]

var letterGuess = "";
var letterWord = "";
var letterGuessList = "";
var letterWordName = "";

function Word(guess,guessList,wordIndex){
    this.guess = guess;
    this.guessList = guessList;
    this.wordIndex - wordIndex;
    letterGuess = this.guess;
    letterWord = wordList[Math.floor(wordIndex*wordList.length)];
    letterWordName = letterWord.name;
    this.letterWordName = letterWordName;
    letterWordDescription = letterWord.description;
    this.letterWordDescription = letterWordDescription;
    letterGuessList = this.guessList;
    this.finished = false;};

Word.prototype.print = function(){
    var pops = 0;
    if(letter.guessedYet(letterGuess,letterGuessList)){
        console.log("you've already guessed that one");
    }else{
        var printWord = "";
        for(i=0; i<letterWordName.length; i++){
            printWord += " " + letter.inWord(letterGuess,letterWordName[i],letterGuessList);
            if(letter.bool){pops ++};
        }
        console.log("correct letters: ",pops);
        console.log(printWord);
        if(pops===letterWordName.length){
            this.finished = true;
        }
    }
}

var letter = new Letters(letterGuess,letterWordName,letterGuessList);

Word.prototype.ending = function(bool,word){
    if(bool){
        console.log("\n**************************\n\nCongratulations!!! You\'re the winner!!!\n\n********************************\n********************")
    }else{
        console.log("\n**************************\n\nTough luck. The word was " + word + "\n\n********************************\n********************")
    }
}

module.exports = Word;