

function Letter(guess,word,guessList,bool){
    this.guess = guess;
    this.word = word;
    this.guessList = guessList;
    this.bool = bool;
}

Letter.prototype.guessedYet = function(guess,guessList){
    if(guessList.includes(guess)){
        return true;
    }else{
        return false;
    };
};


Letter.prototype.inWord = function(guess,correct,guessList){
    
    if(this.guessedYet(correct,guessList)){
        this.bool = true;
        return " " + correct;
    }else if(guess===correct){
        this.bool = true;
        return " " + correct;
    }else{
        this.bool = false;
        return " _";
    }
}


module.exports = Letter;

