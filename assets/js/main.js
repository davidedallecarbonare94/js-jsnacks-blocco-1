// l'utente inserisce due numeri in success con prompt

var number_1 = Number(prompt("Inserisci un numero"));
var number_2 = Number(prompt("Inserisci un nuovo numero"));

// il software stampa il maggiore

if (number_1 === number_2) {
    console.log("Same number, try again")
} else if (number_1 > number_2) {
    console.log(number_1);
} else {
    console.log(number_2);
}


//Snack 2:

//L’utente inserisce due parole in successione, con due prompt.
var word_1 = prompt("Inserisci una parola");
var word_2 = prompt("Inserisci un'altra parola");

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (word_1.length > word_2.length) {
    console.log(word_2, word_1)
} else if (word_2.length > word_1.length) {
    console.log(word_1, word_2)
} else console.log("Pari")
