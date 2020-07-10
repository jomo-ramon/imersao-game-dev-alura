class GameOver {
    constructor() {

    }
    draw() {
        this._imagemDeFundo();
        this._texto();
    }

    _imagemDeFundo() {
        image(imagemGameOver, 0, 0, width, height);
    }

    _texto() {
        image(imagemGameOver, 0, 0, width, height);
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        fill('white');
        stroke('red');
        textSize(50);
        text('Clique em iniciar para tentar novamente', width / 2, height / 3.5 * 2);
        textAlign(CENTER);
        textSize(150);
        fill('white');
        stroke('red');
        text('Game Over', width / 2, height / 3.5 * 1.2);

    }


}