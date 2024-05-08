// const numero = 0;
// const numeroPar = (numero % 2) === 0;

// if(numeroPar) {
//     console.log('Par')
// }else{
//     console.log('Impar')
// }


// 1 igual(=) atribuição
// 2 igual(=) igualdade (atribuição) ignora o tipo da variavel 
// 3 igual(=) igualdedade porem ele verifica o tipo da varialvel 
const numero = 5;
const numeroDivisivelPor5= (numero % 5) === 0;

if(numero === 0){
    console.log('numero invalido');
}else if (numero === 5){
    console.log('O número é invalidado')
}else if(numeroDivisivelPor5) {
    console.log('Sim')
}else{
    console.log('Não')
}




