// informar o codigo promocional 
var codigoPromocional = prompt("Por favor, informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):")

// Variavel para armazenar o valor do desconto
var desconto = 0;

// Usando a estrutura switch para identificar o código promocional e aplicar o desconto correspondente
switch (codigoPromocional) {
    case "desc1":
        desconto = 0.05;
        break;

    case "desc2":
        desconto = 0.10;
        break;

    case "desc3":
        desconto = 0.15;
        break;

    case "desc4":
        desconto = 0.20;
        break;

    case "desc5":
        desconto = 0.25;
        break;

    default:
        alert("Codigo promocional invalido")
        break;
}

// exibindo o desconto aplicado
if (desconto > 0) {
    alert("Desconto de " + (desconto * 100) + "% aplicado com sucesso");
} else {
    alert("nenhum desconto aplicado");
}