
// **********************************************************************************************************************************************
// the constructor and its methods
// **********************************************************************************************************************************************
 
function Letter(guess,word,guessList,bool){
    this.guess = guess;
    this.word = word;
    this.guessList = guessList;
    this.bool = bool;
}

// tells us if the letter has been guessed yet
Letter.prototype.guessedYet = function(guess,guessList){
    if(guessList.includes(guess)){
        return true;
    }else{
        return false;
    };
};

// tells us if the letter is in the word
// called each time it iterates through the word comparing the guess to the correct letter and the list of past guesses 
Letter.prototype.inWord = function(guess,correct,guessList){
    if(this.guessedYet(correct,guessList)){
        // if the correct letter for this place in the word has already been guessed it will display the letter in future calls
        this.bool = true;
        return " " + correct;
    }else if(guess===correct){
        // if the guess is correct
        this.bool = true;
        return " " + correct;
    }else{
        // if the correct letter has not been guessed yet including by the current guess
        this.bool = false;
        return " _";
    }
}


module.exports = Letter;

