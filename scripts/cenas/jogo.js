class Jogo {
    constructor() {
        this.indice = 0;
        this.velocimetro = 10;
        this.mapa = fita.mapa;
    }

    setup() {

        cenario = new Cenario(imagemCenario, 4);
        segundaFase = new Cenario(imagemCenario2, 4);
        // segundafase = new Segunda(imagemCenario2, 4);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        pontuacao = new Pontuacao();
        gameOver = new GameOver();
        vida = new Vida(fita.configuracoes.vidaInicial, fita.configuracoes.vidaMaxima);

        //Inimigo
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
        //Inimigo Grande
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
        //Inimigo Voador
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

    }

    keyPressed() {
        if (key === 'ArrowUp' || key === 'w' || keyCode === 32) {
            personagem.pula();
            somDoPulo.play();
        }

        if (keyCode === 13) {
            window.location.reload();
        }

    }

    draw() {
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;
        frameRate(cont);
        // console.log(cont);

        if (cont > 100) {
            segundaFase.exibe();
            segundaFase.move();
        } else {
            //Exibe Cenario = Background
            cenario.exibe();
            cenario.move();
        }


        vida.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        cont = cont + 0.1;
        // console.log(cont);
        //Exibe Personagem
        personagem.exibe();
        personagem.aplicaGravidade();

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            this.velocimetro++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }
        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornaInvencivel();
            if (vida.vidas === 0) {
                gameOver.draw();
                somErro.play();
                noLoop();
            }
        }
    }

}
