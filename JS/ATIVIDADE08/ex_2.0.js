let idade;
do {
    idade = parseInt(prompt("Insira sua idade:"));
} while (idade <= 0);

console.log(`Idade válida inserida: ${idade}`);
