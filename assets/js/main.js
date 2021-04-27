/* // l'utente inserisce due numeri in success con prompt

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
 */

/* //Snack 2:

//L’utente inserisce due parole in successione, con due prompt.
var word_1 = prompt("Inserisci una parola");
var word_2 = prompt("Inserisci un'altra parola");

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (word_1.length > word_2.length) {
    console.log(word_2, word_1)
} else if (word_2.length > word_1.length) {
    console.log(word_1, word_2)
} else console.log("Pari")
 */



/* //Snack 3:
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var number_10 = Number(prompt("Insert a number"));
var number_11 = Number(prompt("Insert a number"));
var number_12 = Number(prompt("Insert a number"));
var number_13 = Number(prompt("Insert a number"));
var number_14 = Number(prompt("Insert a number"));
var number_15 = Number(prompt("Insert a number"));
var number_16 = Number(prompt("Insert a number"));
var number_17 = Number(prompt("Insert a number"));
var number_18 = Number(prompt("Insert a number"));
var number_19 = Number(prompt("Insert a number"));

//Il programma stampa la somma di tutti i numeri inseriti. 
var total = number_10 + number_11 + number_12 + number_13 + number_14 + number_15 + number_16 + number_17 + number_18 + number_19;
console.log(total)

// correzione

var number_10 = Number(prompt("Insert a number"));
var sum = 0;
for (var i = 0; i < 10; i++){
    var user_number = Number(prompt("Insert a number"));
    sum += user_number
}
console.log(sum);
 */

// Snack 4:
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var userEmail = prompt("Scopri subito se puoi partecipare alla festa inserendo il tuo nome!");
var invitedUsers = ["Davide", "Alessandra", "Miranda", "Franco", "Nicol Bolas"];
var invited = false;
var message;


for (var i = 0; i < invitedUsers.length; i++) {
    var insertName = invitedUsers[i];
    if (insertName == userEmail) {
        invited = true;
    }
}

if (invited) {
    alert("Benvenuto alla festa del grande Gatsby");
} else {
    alert("Non sei ben accetto alla festa del Grande Gatsby");
}