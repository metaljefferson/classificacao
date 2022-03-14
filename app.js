var saopaulo = { nome: "Sao Paulo", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var corinthians = { nome: "Corinthians", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var palmeiras = { nome: "Palmeiras", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

saopaulo.pontos = calculaPontos(saopaulo);
corinthians.pontos = calculaPontos(corinthians);
palmeiras.pontos = calculaPontos(palmeiras);

var jogadores = [saopaulo, corinthians, palmeiras]



function exibeJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitoria</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
        jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}