class TelaInicial {
    constructor() {}
    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        fill('white');
        stroke('red');
        textSize(150);
        text('As aventuras de', width / 2, height / 3.3);
        textSize(150);
        text('Hipsta', width / 2, height / 2.2);

        textSize(30);
        text('Para pular aperte a seta para cima, w ou espaco', width / 2, height / 1.8);
        textSize(30);
        text('A Bruxa tem um jump de 3x pulos por vez', width / 2, height / 1.6);

    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}
