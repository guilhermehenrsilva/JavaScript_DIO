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

const peso = 130;
const altura = 1.80;

let condicao;

let imc = peso / (altura * altura);


if (imc < 18.5) {
    condicao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <=25 )  {
    condicao = 'Peso Normal';
} else if (imc >= 25 && imc <= 30) {
    condicao = 'Acima do peso';
} else if (imc >= 30 && imc <=40){
    condicao = 'Obeso';
} else {
    condicao = 'Obesidade Grave';
}
    

 console.log('O IMC do paciente é:',imc.toFixed(2),'e sua condição é',condicao);