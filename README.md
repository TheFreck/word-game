# word-game
### using Node.js
This application uses a javaScript page called Letters to determine whether a letter has been guessed or if it is correct or not

A second page called Word holds the list of words and a guess for each one

Word calls on Letters to spell out the word, substituting an underscore if that letter hasn't been guessed yet

The main page called Index calls on Word to display the word spaces and a description and handles the flow of the game. Once the word has either been guessed or the player has run out of choices a game end prototype function in the Words page will display the appropriate congratulations or chastisement
