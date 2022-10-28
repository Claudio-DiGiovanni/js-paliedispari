
const resultPalindrome = document.querySelector(".palindromo .result");
const palindromeForm = document.getElementById("palindrome");

palindromeForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const userWord = document.getElementById("user-word");
    resultPalindrome.innerHTML = palindromo(userWord.value)
    userWord.value = ""
} )



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









const pariDispariForm = document.getElementById("pari-dispari-form");

pariDispariForm.addEventListener("submit", function (event) {
    event.preventDefault()

    let userNumber =document.querySelector("#user-number");
    if (userNumber.value < 1 || userNumber.value > 5) {
        alert("il numero inserito non è valido")
        userNumber.value = ""
    } else {
        const choose = document.getElementById("choose").value;

        const computerNumber = parseInt(getRandomIntInclusive(1, 5));
        const winner = pariDispari(userNumber.value, computerNumber)

        document.querySelector(".computer-number").innerHTML = "Il numero del computer è: " + computerNumber


        const resultPariDispari = document.querySelector(".paridispari .result");

        if (choose === winner) {
        resultPariDispari.innerHTML = "Hai vinto" + (parseInt(userNumber.value) + computerNumber)
        
        } else {
        resultPariDispari.innerHTML = "Hai perso" + (parseInt(userNumber.value) + parseInt(computerNumber))
        
        }
        userNumber.value = ""
    }
    
    
})


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pariDispari (num1, num2) {
    console.log(num1)
    console.log(num2)
    let result = parseInt(num1) + parseInt(num2)
    console.log(result)

    if (result % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}