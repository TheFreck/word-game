
var input = process.argv;
var message = "";
for(i=2; i<input.length; i++){
    message += input[i];
}

console.log("sandbox: ",message);

var Message = function(kernal){
    this.kernal = kernal;
}

module.exports = Message;

var index = require("./index");

console.log(index);