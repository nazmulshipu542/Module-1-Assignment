const prompt =require("prompt-sync")();
var price;
price = parseInt(prompt("enter your price: "));
if(price < 50){
    console.log("Total price is: ", price, "No discount available");
}

else if(price>=50 && price<=100){
    var discount1 = (5/100)*price;
    price = price - discount1;
    console.log("Total price is: ", price, "You got 5% discount");
}

else if(price>=100 && price <=200){
    var discount2 = (10/100)*price;
    price = price - discount2;
    console.log("Total price is: ", price, "You got 10% discount");
}

else if(price>200){
    var discount3 = (15/100)*price;
    price = price - discount3;
    console.log("Total price is:", price, "You got 15% discount");
}

else{
    cosole.log(price);
}


//console.log(price);