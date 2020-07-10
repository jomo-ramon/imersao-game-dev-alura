class Vida {
    constructor(maximoVida, inicialVida) {
        this.maximoVida = maximoVida;
        this.inicialVida = inicialVida;
        this.vidas = inicialVida;
        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);
            image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
        }
    }

    ganhaVida() {
        if (this.vidas < this.maximoVida) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }

}