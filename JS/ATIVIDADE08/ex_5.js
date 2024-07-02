function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

// Exemplo de uso:
const dataNascimento = '1994-05-20'; // Substitua pela data de nascimento desejada
const idadeAtualizada = calcularIdade(dataNascimento);

console.log(`A idade atualizada é: ${idadeAtualizada} anos.`);
