function setup() {
    createCanvas(windowWidth, windowHeight);
    somDojogo.loop();

    jogo = new Jogo();
    jogo.setup();

    telaInicial = new TelaInicial();
    cenas = {
        jogo,
        telaInicial
    }
    botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
    // botaoGameover = new BotaoGerenciador('Iniciar', widht / 2, height / 2);
}

function keyPressed() {
    jogo.keyPressed(key);
}

function draw() {
    cenas[cenaAtual].draw();
}