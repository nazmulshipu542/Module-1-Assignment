const prompt = require("prompt-sync")();
var marks;
marks = parseInt(prompt("enter your number: "));
switch(true){
    
    case(marks<=100 && marks>=90):
        console.log("You got A.");
    break;

    case(marks<90 && marks>=80):
        console.log("You got B.");
    break;

    case(marks<80 && marks>=70):
        console.log("You got C.");
    break;

    case(marks<70 && marks>=60):
        console.log("You got D.");
    break;

    default:
        console.log("You got F.")
}



//console.log("marks is:", marks);