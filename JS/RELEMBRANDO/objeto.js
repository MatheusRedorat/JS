let celular1 = {
    marca: "Iphone",
    modelo: "Iphone 15 pro Max",
    ano: 2024,
    tela: {
        tamanho: "6.69 polegadas",
    }
};

class Celular {
    constructor(modelo, marca, ano, tela) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.tela = tela;
    }

    desbloquearCel() {
        console.log(`celular desbloqueado`);
    }
};

let celular2 = new Celular('Iphone 15 pro Max', 'Iphone', '2024', '6.69')
celular2.desbloquearCel();

// console.log(celular1);
// console.log(celular2);