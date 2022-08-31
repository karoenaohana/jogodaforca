var biblioteca = [
    {
        palavra: "impeachemant", dica: "Dilma sofreu..."
    },
    {
        palavra: "petista", dica: "Filiado do PT..."
    },
    {
        palavra: "golpe", dica: "Em 2016 foi..."
    },
    {
        palavra: "feminismo", dica: "Movimento social que busca igualdade entre os gêneros..."
    },
    {
        palavra: "democracia", dica: "governo do povo..."
    },
    {
        palavra: "corrupcao", dica: "ato de corromper com a finalidade de obter vantagens por meios considerados ilegais ou ilícitos...."
    },
    {
        palavra: "rachadinha", dica: "transferência de salários de assessores para o parlamentar ou secretário a partir de um acordo pré-estabelecido ou como exigência para a função..."
    },
    {
        palavra: "charlatanismo", dica: "a prática do charlatão..."
    },
    {
        palavra: "brasil", dica: "Pátria amada..."
    },
    {
        palavra: "prevaricaco", dica: "crime cometido por um funcionário público que usa o seu cargo e poder para satisfazer interesses pessoais, atrasando ou deixando de praticar as suas funções de ofício..."
    },
    {
        palavra: "genocidio", dica: "Crime cometido com a intenção de aniquilar um grupo humano, nacional, étnico, racial ou religioso..."
    },
    {
        palavra: "rebeliao", dica: "contestações subversivas da ordem vigente..."
    },
    {
        palavra: "revolucao", dica: "período marcado por perturbação na ordem social..."
    },
    {
        palavra: "fascista", dica: "adepto ao fascismo..."
    },
    {
        palavra: "forabolsonaro", dica: "F0R4 B0L50N4R0 G3N0C1D4!..."
    },
];
var quantidade = biblioteca.length - 1;
var pos = Math.round(Math.random() * quantidade);
var palavra = biblioteca[pos]["palavra"];
var tam = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 7;
var erros = 0;
var desenhos = [];
var acertou = false;
var jogando = false;

function defineLetras(L) {
    var obj;
    for (var i = 0; i < 20; i++) {
        obj = document.getElementById("letra" + i).value = " ";
        obj = document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < L; i++) {
        obj = document.getElementById("letra" + i).style.display = "inline-block";
    }
}

function jogar() {
    //jog=document.getElementById("letraJ");
    jog.focus();
    if (jog.value == "") {
        alert("Digite uma letra");
    } else {
        if (jogando) {
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra = jog.value;
            jog.value = "";
            acertou = false;
            pesq = palavra.match(letra);
            while (pesq != null) {
                letraTmp = palavra.search(letra);
                obj = document.getElementById("letra" + letraTmp).value = letra;
                palavra = palavra.replace(letra, '0');
                acertos++;
                pesq = palavra.match(letra);
                acertou = true;
            }
            if (!acertou) {
                document.getElementById("dvletrasdigitadas").innerHTML += letra.toUpperCase() + " ";
                erros++;
                if (erros < 7) {
                    desenhos[erros].style.display = "block";
                } else {
                    document.getElementById("cabeca").src = "cabeca2.png";
                    document.getElementById("dvmsg").innerHTML = "PERDEU";
                    jogando = false;
                }
            }
            if (acertos == tam) {
                document.getElementById("dvmsg").innerHTML = "";
                document.getElementById("dvmsg").innerHTML = "GANHOU";
                jogando = false;
            }
        }
    }
}

function inicia() {
    jogando = true;
    jog = document.getElementById("letraJ");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erros = 0;
    acertos = false;
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    pos = Math.round(Math.random() * quantidade);
    palavra = biblioteca[pos]["palavra"];
    tam = palavra.length;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML = "";
    desenhos[1] = document.getElementById("cabeca");
    desenhos[2] = document.getElementById("corpo");
    desenhos[3] = document.getElementById("bracoE");
    desenhos[4] = document.getElementById("bracoD");
    desenhos[5] = document.getElementById("pernaE");
    desenhos[6] = document.getElementById("pernaD");
    document.getElementById("cabeca").src = "cabeca1.png";
    for (var i = 1; i < 7; i++) {
        desenhos[i].style.display = "none";
    }
}

function dica() {
    alert(biblioteca[pos]["dica"]);
    jog.focus();
}

window.addEventListener("load", inicia);
