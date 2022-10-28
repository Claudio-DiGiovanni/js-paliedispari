const userWord = prompt("inserisci una parola");
console.log(palindromo(userWord));

function palindromo(word) {
    let parolaDivisa = word.split("");
    parolaDivisa = parolaDivisa.reverse();
    let parolaInvertita = parolaDivisa.join("");
    console.log(word);
    console.log(parolaInvertita);
    if (word === parolaInvertita) {
        return "palindromo";
    } else {
        return "non è palindromo";
    }
}

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
while (userNumber < 1 || userNumber > 5) {
    alert("il numero inserito non è valido")
    userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
}
const winner = prompt("Pari o Dispari?")

const computerNumber = getRandomIntInclusive(1, 5);

const scelta = pariDispari(userNumber, computerNumber)

if (winner === scelta) {
    console.log("Hai vinto")
} else {
    console.log("Hai perso")
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pariDispari (num1, num2) {
    console.log(num1)
    console.log(num2)
    let result = num1 + num2
    console.log(result)

    if (result % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}