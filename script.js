// PROGRAMMA PER GENERARE PREZZO DEL BIGLIETTO DEL TRENO
// Il programma dovrà chiedere all'utente il numero dei km che vuole percorrere e l'età del passeggero.

// DATI:
// Il prezzo del biglietto è definito in base ai km (0.21€ al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali). 

// Seleziono gli elementi di input
const nomeCognome = document.getElementById("nome");
const kmDaPercorrere = document.getElementById("km");
const etaPasseggero = document.getElementById("eta");
// Seleziono il form
const form = document.querySelector('form');
// Dichiaro prezzo e moltiplico il numero dei km per 0.21 per ottenerlo
let price = numKm * 0.21;

// ELABORAZIONE
form.addEventListener("submit")



// Se l'utente è minorenne, applico uno sconto del 20% al prezzo
if (userAge < 18) {
    price *= 0.8;
} else if (userAge > 65) { // Se l'utente è over 65, applico uno sconto del 40% al prezzo
    price *= 0.6;
}

// OUTPUT
document.getElementById("ticketprice").innerText = "Il prezzo del tuo biglietto è: " + price.toLocaleString("it-IT", { style: "currency", currency: "EUR" });







// PER VERIFICARE:
// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60