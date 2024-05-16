const mediaAluno = (n1 = 0, n2 = 0, n3 = 0) => {
    let media = (n1 + n2 + n3) /3;
    return media;
}
console.log(`Media do aluno é: ${mediaAluno(9,8,7)}`);