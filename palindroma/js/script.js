// **Palindroma**

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.




// chiedo un input let perchè magari viene sovrascritto
let userWord;

// diventerà l'equivalente array dalla stringa input di partenza
let userWordArray;

// voglio indicare un controllo sottoforma di condizione, finche non mi inserisce una stringa, non si va avanti

do {
  userWord = prompt("Inserisci una parola:");
    // se insisti a inserirmi un numero ti richiedo l'input corretto
  if (!isNaN(userWord)) {
    alert("Hai inserito un numero, inserisci una stringa valida.");
  }
} while (!isNaN(userWord));

console.table('Hai inserito la parola:', userWord ,typeof userWord);

// Trasformo ora la stringa alfabetica di partenza in un array con split()
userWordArray = userWord.split ('');
console.table('Ora la stringe viene trasformata in un array cosi composto:' , userWordArray);

// faccio il reverse conscio che mi sovrascrive l'array
userWordArray.reverse();
console.table(userWordArray.reverse());



// ritrasformo l'array in stringa
let userReverseWord = (userWordArray.reverse()).join('');
console.table(userReverseWord, userWord, typeof userReverseWord, typeof userWord);
    
  // inserisco un po di logica per vedere se funziona tutto
  if (userReverseWord === userWord) {
    console.log("la parola che hai inserito è palindroma" , typeof userReverseWord, typeof userWord);
  } else {
    console.log("la parola che hai inserito non è palindroma" , typeof userReverseWord, typeof userWord);    
  }



// /**
//  * Description Controlla se la parola inserita dall'utente è palindroma o meno
//  * @param {string} wordToCheck
//  * @returns {boolean} Return true se la parola inserita è palindroma
//  */
// function palindroma (wordToCheck) {
//     // voglio indrodurre un flag
//     let = isFalse;
    
// }