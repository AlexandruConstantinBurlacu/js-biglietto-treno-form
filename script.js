// asking user how many km he wants to travel

// const KmToTravel = Number( prompt("Quanti chilometri desideri percorrere?") );

const KmToTravel = Number;

// document.getElementById("km").innerHTML = KmToTravel;

const inputElement = document.querySelector("#km");

// asking user what's his age

// const Age = Number( prompt("Qual è la tua età?") );

const Age = Number;

document.getElementById("your-age").innerHTML = Age;


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


const buttonElement = document.querySelector("#calcola");

buttonElement.addEventListener('click'),
    function() {
        document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
    }


document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
