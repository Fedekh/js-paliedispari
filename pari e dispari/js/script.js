
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.





let userNumber;
// Chiedo all'utente di inserire un numero intero comrpeso tra 1 e 5, no caratteri, no numeri giganti ne negativi
do {
    userNumber = parseInt(prompt("Inserisci gentilmente un numero intero a 1 a 5 compresi"));
    if ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber))) {
        alert('Non hai inserito correttamente il numero. Un numero da 1 a 5 compresi gentilmente')
        console.log(userNumber);
    } 
} while ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber)));
console.log ("il tuo numero è:", userNumber, typeof userNumber);


// sto testando senza funzioni , la funzione di default di js
let rdmNumb = Math.floor((Math.random() * 5) + 1);
console.log("il numero casuale appioppato al pc è:", rdmNumb, typeof rdmNumb);

// somma dei 2 numeri
let sum = userNumber + rdmNumb;
console.log("la somma tra i 2 numeri è:", sum, typeof sum);

// condizione di pari e dispari e stampa
if (sum % 2 === 0 ) {
    console.log("la somma dei 2 numeri è pari", sum);
}else {
    console.log("la somma dei 2 numeri è dispari", sum);
}