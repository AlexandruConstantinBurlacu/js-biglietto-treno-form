// asking user how many km he wants to travel

// const KmToTravel = Number( prompt("Quanti chilometri desideri percorrere?") );

// const KmToTravel = Number;

// document.getElementById("km").innerHTML = KmToTravel;

const KmToTravel = document.getElementById("km").value;

// asking user what's his age

// const Age = Number( prompt("Qual è la tua età?") );

// const Age = Number;

const Age = document.getElementById("your-age").value;

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


const priceElement = document.querySelector('#ticket-total-price');

const buttonElement = document.querySelector('#calcola');

buttonElement.addEventListener('click',
    function() {
        document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
        priceElement = finalPrice.value;
    }
)

document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
