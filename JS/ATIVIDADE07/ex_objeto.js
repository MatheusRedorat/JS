class Carro {
    constructor (marca,modelo,ano,cor) {
        this.marca = marca
        this.modelo = modelo 
        this.ano = ano
        this.cor = cor
    }

    modeloCarro() {
        console.log(`o modelo do carro é: ${this.modelo} da marca ${this.marca} do ano ${this.ano}`);

    }

    somBuzina() {
        return `Bip Bip`
    }
};

let carro1 = new Carro ('Honda', 'Civic', 2023, 'Cinza')
let carro2 = new Carro ('CRV', 'Honda', 'Preto', 2018)

carro1.modeloCarro();
console.log(carro1.somBuzina());