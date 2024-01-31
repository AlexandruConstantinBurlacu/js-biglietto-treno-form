// asking user how many km he wants to travel

// const KmToTravel = Number( prompt("Quanti chilometri desideri percorrere?") );

// const KmToTravel = Number;

// document.getElementById("km").innerHTML = KmToTravel;

const KmToTravel = document.getElementById("km");

// asking user what's his age

// const Age = Number( prompt("Qual è la tua età?") );

// const Age = Number;

const Age = document.getElementById("your-age");

// document.getElementById("your-age").innerHTML = Age;


// Generating base price



let standardPrice;


let finalPrice;




const priceElement = document.querySelector("#ticket-total-price");




const buttonElement = document.getElementById("calcola");

buttonElement.addEventListener("click",
    function() {
        
        standardPrice = 0.21 * KmToTravel.value;

        finalPrice = standardPrice;

        if(Age.value < 18) {
            finalPrice = standardPrice - standardPrice * 0.2;
        } else if (Age.value >= 65) {
            finalPrice = standardPrice - standardPrice * 0.4;
        } else {
            finalPrice = standardPrice
        }

        finalPrice = finalPrice.toFixed(2);

        console.log(finalPrice);

        



        document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;

        // priceElement.innerHTML = 'il tuo prezzo e di ${finalPrice}';
        
    }

    

)

// document.getElementById("ticket-total-price").innerHTML = "€ " + finalPrice;
