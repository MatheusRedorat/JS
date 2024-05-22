class Celular {
    constructor(modelo, marca, memoria,) {
        this.modelo = modelo;
        this.marca = marca;
        this.memoria = memoria;
    }
};

class CelularGamer extends Celular {
    constructor(modelo, marca, memoria, tela , rgb) {
        super(modelo, marca, memoria)
        this.tela = tela;
        this.rgb = rgb;
    }
}

let celular1 = new CelularGamer('Iphone 15 pro max', 'Apple', '128GB', '120hz', false)
console.log(celular1);

class GamerPremium extends CelularGamer {
    constructor (modelo, marca, memoria, tela, rgb, cooler) {
        super(modelo,marca,memoria,tela,rgb)
        this.cooler = cooler;
    }
}
let celular2 = new GamerPremium ("RedMagicPro", "Nubia", "32GB", "240hz", true, true);
console.log(celular2);
