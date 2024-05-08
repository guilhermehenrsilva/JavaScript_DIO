const combustivelEtanol = 3.42;
const combustivelGasolina = 5.79;
let combustivelCarro;
let distancia;
let media;
const carroKM = 10;

distancia = 379;
combustivelCarro = 'Etanol';


if (combustivelCarro === 'Gasolina') {

    mediaCombustivel = distancia / carroKM;
    precoTotalComb = mediaCombustivel * combustivelGasolina;
} else {
    mediaCombustivel = distancia / carroKM;
    precoTotalComb = mediaCombustivel * combustivelEtanol;
}







console.log('A viajem tem', distancia, "KM, o combustivel está com", combustivelCarro, "R$",
    "iremos gastar em combustivel uma média de", mediaCombustivel,
    "por KM, totalizando assim, um total gasto de", precoTotalComb.toFixed(2))
