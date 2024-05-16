function sayMyName(name){
    console.log('Your name is:' + name);
}

sayMyName('Guilherme');
sayMyName('Henrique');

console.log('------------------------------------------')

function quadrado(valor){
    return valor * valor
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)

console.log(quadrado(10) + quadrado(10));

console.log('------------------------------------------')


function incrementarJuros(valor,porcentualJuros){
    const valorDeCrescimo = (porcentualJuros / 100) * valor;
    return valor + valorDeCrescimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));