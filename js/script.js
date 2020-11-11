// NOTE: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.

var richiestaKm = prompt("Inserisci i km che vuoi percorrere");

var aNNi = prompt("Inserisci la tua età");

var minOMagg = "";
if (aNNi < 18) {
  minOMagg = "minorenne";
} else {
  minOMagg = "maggiorenne";
}
console.log(minOMagg)

var prezzoAlKm = 0.21;

var prezzoIntero = richiestaKm * prezzoAlKm;
console.log(prezzoIntero);



function percentage(num, per)
{
  return (num/100)*per;
}

console.log(percentage(1000, 47.12));
