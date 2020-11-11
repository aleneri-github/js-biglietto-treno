// NOTE: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

var richiestaKm = prompt("Inserisci i km che vuoi percorrere");
// richiesta km da percorrere
var aNNi = prompt("Inserisci la tua età");

var prezzoAlKm = 0.21;

var prezzoIntero = richiestaKm * prezzoAlKm;
console.log(prezzoIntero)
// richiesta età passeggero

// prezzo del Biglietto

// sconto 20% minorenni

// sconto 40% over 65
