// NOTE: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.
var prezzoAlKm = 0.21;

var richiestaKm = prompt("Inserisci i km che vuoi percorrere");


var anni = prompt("Inserisci la tua età");

var prezzoIntero = richiestaKm * prezzoAlKm;
console.log(prezzoIntero);


var sconto = 0;

if (anni < 18) {
  sconto = (prezzoIntero * 20 ) / 100;

} else if (anni > 65) {
  sconto = (prezzoIntero * 40) / 100;
}

var prezzoFinale = prezzoIntero - sconto;
console.log(prezzoFinale);






console.log(minOMagg)







console.log(percentage(1000, 47.12));
