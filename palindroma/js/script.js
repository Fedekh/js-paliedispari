// **Palindroma**

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.


// chiedo un input let perchè magari viene sovrascritto
let userWord;

// voglio indicare un controllo sottoforma di condizione, finche non mi inserisce una stringa, non si va avanti, non deve inserire nemmeno combinazioni di lettere e numeri
do {
  userWord = prompt("Inserisci una parola:");
  // se insisti a inserirmi un numero ti richiedo l'input corretto
  if (!/^[a-zA-Z]+$/.test(userWord)) {
    alert("Inserisci una stringa valida, senza numeri o caratteri speciali.");
  }
} while (!/^[a-zA-Z]+$/.test(userWord));

/**
 * palindroma Controlla se la parola inserita dall'utente è palindroma o meno
 * @param {string} wordToCheck
 * @returns {boolean} Return true se la parola inserita è palindroma
 */
function palindroma (wordToCheck) {
  // trasformo la parola in input in minuscolo per ignorare il case sensitive
  let userWordArray = wordToCheck.toLowerCase().split('');
  let userReverseWord = userWordArray.reverse().join('');
  return userReverseWord === wordToCheck.toLowerCase();
}


// Manipolazione dom lieve

let output = document.createElement("h3");
output.classList.add("margin");
const wrapper = document.querySelector(".wrapper");
wrapper.append(output);
let result;

if (palindroma(userWord)) {  
  console.log(`La parola ${userWord} è palindroma.`);
  result = `La parola ${userWord} è palindroma.`;
} else {
  console.log(`La parola ${userWord} NON è palindroma.`);
  result = `La parola ${userWord} NON è palindroma.`;

}


output.innerHTML = result;