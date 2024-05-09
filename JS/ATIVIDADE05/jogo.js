const numeroSorteado = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

while (true) {
    const palpite = parseInt(prompt("Adivinhe o número 1 a 10"));

    tentativas++;
    if (palpite === numeroSorteado) {
        alert (`Parabéns! Você acertou!`)
        break;
    } else {
        alert ("Tente novamente!")
    }
}