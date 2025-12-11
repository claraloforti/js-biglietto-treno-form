// PROGRAMMA PER GENERARE PREZZO DEL BIGLIETTO DEL TRENO
// Il programma dovrà chiedere all'utente il numero dei km che vuole percorrere e l'età del passeggero.

// DATI:
// Il prezzo del biglietto è definito in base ai km (0.21€ al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali). 

// Seleziono gli elementi di input
const nomeCognome = document.getElementById("nome-user");
const numKm = document.getElementById("km-user");
const userAge = document.getElementById("eta-user");
// Seleziono il form
const form = document.querySelector('form');
// Seleziono gli elementi della tabella
const outputNome = document.getElementById("output-nome");
const outputOfferta = document.getElementById("output-offerta");
const outputPrezzo = document.getElementById("output-prezzo");

// ELABORAZIONE
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeCognome.value.trim();
    const km = parseFloat(numKm.value);
    const eta = userAge.value;
    // Dichiaro prezzo base e moltiplico il numero dei km per 0.21 per ottenerlo
    let price = km * 0.21;
    let offerta = "Tariffa Standard";

    // Se l'utente è minorenne, applico uno sconto del 20% al prezzo
    if (eta === "minorenne") {
        price *= 0.8;
        offerta = "Sconto del 20% applicato per i minorenni";
    } else if (eta === "over-65") { // Se l'utente è over 65, applico uno sconto del 40% al prezzo
        price *= 0.6;
        offerta = "Sconto del 40% applicato per gli over 65";
    }

    // OUTPUT TABELLA
    outputNome.innerText = nome;
    outputOfferta.innerText = offerta;
    outputPrezzo.innerText = `${price.toFixed(2)} €`;
})