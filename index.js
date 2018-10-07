var telegram = require("./sandbox");

console.log("index: ",telegram);

var Telegram = function(telegram){
    this.telegram = telegram
}

module.export = Telegram;