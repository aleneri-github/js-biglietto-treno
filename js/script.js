// NOTE: PREZZO AL KM
var prezzoAlKm = 0.21;
// NOTE: KM INSERITI DALL'UTENTE
var richiestaKm = prompt("Inserisci i km che vuoi percorrere");
// ETA' INSERITA DALL'UTENTE
var anni = prompt("Inserisci la tua età");
// CALCOLO PREZZO INTERO
var prezzoIntero = richiestaKm * prezzoAlKm;
console.log(prezzoIntero);
// VARIABILE SCONTO
var sconto = 0;
// SCONTO UNDER18
if (anni < 18) {
  sconto = (prezzoIntero * 20 ) / 100;
// SCONTO OVER65
} else if (anni > 65) {
  sconto = (prezzoIntero * 40) / 100;
}
// PREZZO SCONTATO
var prezzoFinale = prezzoIntero - sconto;
console.log(prezzoFinale);
