/*
exemplo como deve ser organizado o cód
function calcularJuros(){
    console.log('Certo')
}


function main(){
    console.log('Programa Principal');
    calcularJuros();
}


main();*/ 

/*O IMC - indice de massa corporal é um criterio da organização mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta
formula do IMC
IMC = peso / (altura * altura)
elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo
IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso; 
- Acima de 40 Obesidade Grave*/

function calcularImc(peso, altura){
return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <=25 )  {
        return 'Peso Normal';
    } else if (imc >= 25 && imc <= 30) {
       return 'Acima do peso';
    } else if (imc >= 30 && imc <=40){
        return 'Obeso';
    } else {
        return'Obesidade Grave';
    }
        
}

(function (){
    const peso = 130;
    const altura = 1.80;
    const imc = calcularImc(peso, altura);
    console.log('O IMC do paciente é:',imc.toFixed(2),'e sua condição é',classificarImc());
})();
