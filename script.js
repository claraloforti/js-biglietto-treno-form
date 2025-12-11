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
// Seleziono bottone "Annulla"
const btnAnnulla = document.getElementById("btn-annulla");
// Seleziono gli elementi della tabella
const outputNome = document.getElementById("output-nome");
const outputOfferta = document.getElementById("output-offerta");
const outputPrezzo = document.getElementById("output-prezzo");

// Gestisco visibilità iniziale della tabella
const previewTable = document.querySelector(".tuo-biglietto");
previewTable.classList.add("d-none");

// ELABORAZIONE
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeCognome.value.trim();
    const eta = userAge.value;
    let km = parseFloat(numKm.value);
    // Dichiaro prezzo base e moltiplico il numero dei km per 0.21 per ottenerlo
    let price = km * 0.21; // prezzo standard 
    let offerta = "Tariffa Standard"; // offerta standard

    // Se km non è un numero o è inferiore o uguale a 0 continua a chiederlo
    if (isNaN(km) || km <= 0) {
        alert("Inserisci un numero valido di km");
        numKm.value = "";
        return;
    }

    // Se l'utente è minorenne, applico uno sconto del 20% al prezzo
    if (eta === "minorenne") { // se il value è minorenne
        price *= 0.8;
        offerta = "Sconto del 20% applicato per i minorenni";
    } else if (eta === "over-65") { // Se l'utente è over 65 (il value è over-65), applico uno sconto del 40% al prezzo
        price *= 0.6;
        offerta = "Sconto del 40% applicato per gli over 65";
    } // altrimenti resta com'è, cioè il value è maggiorenne quindi price e offerta restano standard

    // Rendo la tabella visibile dopo il submit
    previewTable.classList.remove("d-none");

    // OUTPUT TABELLA
    outputNome.innerText = nome;
    outputOfferta.innerText = offerta;
    outputPrezzo.innerText = `${price.toFixed(2)} €`;

    // Pulisco i campi del form dopo l'invio
    form.reset();
})

// Evento che svuota i campi e nasconde la tabella al click del bottone "Annulla"
btnAnnulla.addEventListener("click", () => {
    form.reset();
    previewTable.classList.add("d-none");
})