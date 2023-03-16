
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const wrapper = document.querySelector (".wrapper");


let userNumber;
// Chiedo all'utente di inserire un numero intero comrpeso tra 1 e 5, no caratteri, no numeri giganti ne negativi
do {
    userNumber = parseInt(prompt("Inserisci gentilmente un numero intero a 1 a 5 compresi"));
    if ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber))) {
        alert('Non hai inserito correttamente il numero. Un numero da 1 a 5 compresi gentilmente')
        console.log(userNumber);
    } 
} while ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber)));
console.log ("il tuo numero è:", userNumber);



// richiamo funzione randomic
let rdmNumb = randomic ();
console.log("il numero casuale appioppato al pc è:", rdmNumb);

// somma dei 2 numeri
let sum = userNumber + rdmNumb;
console.log("La somma dei due numeri, quindi, è ", sum);

//richiamo funzione per vedere se la somma è pari o meno
let totalResult = disparity (sum);
console.log(totalResult);

// FUNZIONE PER IL RANDOM NUMBER PC
/**
 * randomic: appioppa un numero random tra 1 e 5 al pc
 * * @returns {number} Return numero randomico per il pc
 */
function randomic () {
    return Math.floor((Math.random() * 5) + 1); //non ci sono valori in ingresso, ma solo un return
  }



// FUNZIONE PER IL CONTROLLO PARITA' o DISPARITa' NELLA SOMMA DEI 2 NUMERI
  /**
 * disparity Controlla se la somma dei 2 numeri è pari o meno
 * @param {number} numToCheck * //inserito un numero, vediamo se il resto della divisione per 2 è uguale a 0 o meno
 * @returns {boolean} Return true se SUM è pari
 */
function disparity (numToCheck) {
    let result ;
    if (numToCheck % 2 === 0 ) {
      result = "la somma dei due numeri è pari : " + numToCheck;               
    }else {
      result = "la somma dei due numeri è dispari : " + numToCheck;       
    }
      return result;
    }
          


//   MANIPOLAZIONE DOM PER ABBELLIMENTO

let userInput = document.createElement ("h2");
userInput.classList.add("user-input");
let pcInput = document.createElement ("h2");
pcInput.classList.add("pc-input");
let outSum = document.createElement ("h2");
outSum.classList.add("out-sum");
let outParity = document.createElement ("h2"); 
outParity.classList.add("parity");

userInput.innerText = "Hai scelto : " + userNumber;
wrapper.append(userInput);

pcInput.innerText = "Al pc è stato appioppato : " + rdmNumb;
wrapper.append(pcInput);

outSum.innerText = "La somma dei due numeri è : " + sum;
wrapper.append(outSum);

outParity.innerText = "Quindi " + totalResult;
wrapper.append(outParity);





 