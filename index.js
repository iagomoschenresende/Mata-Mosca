var altura = window.innerHeight;
var largura = window.innerWidth;
var vidas = 1
var tempo = 30
var criaMosquitoTempo = 1500;
var nivel = window.location.search
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 750;
}

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro);
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)

function ajusteTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajusteTamanho();

function positionRandom() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "coracao_vazio.png"

            vidas++;
        }
    }
    var aleatoriaX = Math.floor(Math.random() * (largura - 90)); // Subtrai 90 para garantir que a imagem não ultrapasse os limites da tela
    var aleatoriaY = Math.floor(Math.random() * (altura - 90)); // Subtrai 90 para garantir que a imagem não ultrapasse os limites da tela

    console.log(aleatoriaX, aleatoriaY);

    var mosquito = document.createElement('img');
    mosquito.src = 'mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = aleatoriaX + 'px';
    mosquito.style.top = aleatoriaY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito);
}

positionRandom();

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}

