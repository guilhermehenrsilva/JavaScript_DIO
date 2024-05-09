/* 
Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre
da faculdade calcule e imprima a sua média e a sua classificação confome a tabela abaixo
Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação 
Média menor que 5,  reprovado;
Média entre 5 e 7 , recuperação;
média acima de 7, passou o semestre 

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

let classificacao;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    classificacao = 'Reprovado';
} else if (media <= 7) {
    classificacao = 'Recuperação'
} else {
    classificacao = 'Passou o Semestre'
}

console.log('média da nota do aluno é', media.toFixed(2), 'e seu estado é', classificacao)

