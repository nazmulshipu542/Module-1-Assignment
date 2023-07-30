const prompt = require("prompt-sync")();
var num1;
num1 = parseInt(prompt("enter your number: "));
for(var i=1; i<11; i++){
    var multiplication = i*num1;
    console.log("Multiplication is: ", num1, "*", i, "=", multiplication);
}