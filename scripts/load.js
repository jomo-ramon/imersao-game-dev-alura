function preload() {
    imagemCenario = loadImage("imagens/cenario/floresta.png");
    imagemCenario2 = loadImage("imagens/cenario/cenario3.png");
    imagemPersonagem = loadImage("imagens/personagem/correndo.png");
    imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("imagens/inimigos/troll.png");
    imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
    imagemGameOver = loadImage("imagens/assets/gameover3.jpg");
    imagemVida = loadImage("imagens/assets/coracao.png");
    imagemTelaInicial = loadImage("imagens/cenario/inicial.jpg");
    fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");
    fita = loadJSON("fita/fita.json");

    somDojogo = loadSound("sons/trilha_jogo.mp3");
    somDoPulo = loadSound("sons/somPulo.mp3");
    somErro = loadSound("sons/erro.mp3");

}