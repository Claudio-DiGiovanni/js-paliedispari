const userWord = prompt("inserisci una parola");
console.log(palindromo(userWord))

function palindromo(word) {
    let parolaDivisa = word.split("");
    parolaDivisa = parolaDivisa.reverse();
    let parolaInvertita = parolaDivisa.join("")
    
    if (word === parolaInvertita) {
        return "palindromo"
    } else {
        return "non è palindromo"
    }
}