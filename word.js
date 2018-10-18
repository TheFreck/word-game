var Letters = require("./letters");
var letter = new Letters(letterGuess,letterWordName,letterGuessList);

// **********************************************************************************************************************************************
// The word objects contain both the word and a description
// Building this out could include unique phrases for each word to display at the end of the game depending on whether they win or lose
// Building this out by linking to a database to store the word objects would increase the capacity of the word list indefinitely
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
    description: "befuddle"
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

// the constructification of the word
function Word(guess,guessList,wordIndex){
    // everything put inside here becomes accessible inside index.js
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
    this.finished = false;
};

// prints the word including spaces for unguessed letters
Word.prototype.print = function(){
    // pops is how many letters in the word have been guessed each time it goes to print the word
    // when the number of pops equals the length of the word then every letter has been guessed and the game is won
    var pops = 0;
    if(letter.guessedYet(letterGuess,letterGuessList)){
        console.log("\n====================\nyou've already guessed that one\n*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");
    }
    var printWord = "";
    // building the word to print one letter at a time
    for(i=0; i<letterWordName.length; i++){
        printWord += " " + letter.inWord(letterGuess,letterWordName[i],letterGuessList);
        if(letter.bool){pops ++};
    }
    console.log("correct letters: ",pops);
    console.log("\n***********************************************************************\n")
    console.log(printWord);
    console.log("\n***********************************************************************\n")
    if(pops===letterWordName.length){
        this.finished = true;
    }   
}


// it's the end of the game as we know it and I feel fine
Word.prototype.ending = function(bool,word){
    if(bool){
        console.log("\n**************************\n\nCongratulations!!! You\'re the winner!!!\n\n********************************\n********************")
    }else{
        this.drop();
        console.log("\n**************************\n\nTough luck. The word was " + word + "\n\n********************************\n********************")
    }
}

module.exports = Word;


Word.prototype.head = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777");
}
Word.prototype.body = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n    =======                                777777\n    |     |                                777777\n    |     |                                777777\n    |     |                                777777\n    |     |                                777777\n    |_____|                                777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777")
}
Word.prototype.leftArm = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n(8) =======                                777777\n(8) |     |                                777777\n(8) |     |                                777777\n(8) |     |                                777777\n    |     |                                777777\n    |_____|                                777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777")
}
Word.prototype.leftRightArm = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n(8) ======= (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n    |     |                                777777\n    |_____|                                777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777")
}
Word.prototype.leftLeg = function(){
    console.log(" 777777777777777777777777777777777777777777777777\n  777777777777777777777777777777777777777777777777\n                                            777777\n                                            777777\n    #########                               777777\n   #         #                              777777\n   @  0   0  @                              777777\n   |    5    |                              777777\n   |  #####  /                              777777\n    |  UUU  /                               777777\n     |__:__/                                777777\n (8) ======= (8)                            777777\n (8) |     | (8)                            777777\n (8) |     | (8)                            777777\n (8) |     | (8)                            777777\n     |     |                                777777\n     |_____|                                777777\n {88}                                       777777\n {88}                                       777777\n {88}                                       777777\n {88}                                       777777\n {88}                                       777777\n {88}                                       777777\n {88}                                       777777\n                                            777777\n                                            777777\n                                            777777\n                                            777777\n                                            777777");
}
Word.prototype.leftRightLeg = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n(8) ======= (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n    |     |                                777777\n    |_____|                                777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777")
}
Word.prototype.blank = function(){
    console.log("777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777\n                                           777777");
}
Word.prototype.drop = function(){
    console.log(" 777777777777777777777777777777777777777777777777\n 777777777777777777777777777777777777777777777777\n                                           777777\n                                           777777\n   #########                               777777\n  #         #                              777777\n  @  0   0  @                              777777\n  |    5    |                              777777\n  |  #####  /                              777777\n   |  UUU  /                               777777\n    |__:__/                                777777\n                                           777777\n    =======                                777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n(8) |     | (8)                            777777\n    |_____|                                777777\n                                           777777\n                                           777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n{88}       {88}                            777777\n                                           777777\n                                           777777");
}

/* 


                                            









"777777777777777777777777777777777777777777777777\n
 777777777777777777777777777777777777777777777777\n
                                           777777\n
                                           777777\n
   #########                               777777\n
  #         #                              777777\n
  @  0   0  @                              777777\n
  |    5    |                              777777\n
  |  #####  /                              777777\n
   |  UUU  /                               777777\n
    |__:__/                                777777\n
(8) ======= (8)                            777777\n
(8) |     | (8)                            777777\n
(8) |     | (8)                            777777\n
(8) |     | (8)                            777777\n
    |     |                                777777\n
    |_____|                                777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
{88}       {88}                            777777\n
                                           777777\n
                                           777777\n
                                           777777\n
                                           777777\n
                                           777777"
    */
                                            
                                            
                                            
                                            

