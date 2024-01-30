// asking user how many km he wants to travel

// const KmToTravel = Number( prompt("Quanti chilometri desideri percorrere?") );

// document.getElementById("km").innerHTML = KmToTravel;

// asking user what's his age

// const Age = Number( prompt("Qual è la tua età?") );

// document.getElementById("your-age").innerHTML = Age;


// Generating base price

const standardPrice = 0.21 * KmToTravel;




let finalPrice;

if(Age < 18) {
    finalPrice = standardPrice - standardPrice * 0.2;
} else if (Age >= 65) {
    finalPrice = standardPrice - standardPrice * 0.4;
} else {
    finalPrice = standardPrice
}





console.log( finalPrice );
console.log( "€ " + finalPrice.toFixed(2) );




document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
