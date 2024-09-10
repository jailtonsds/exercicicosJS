// 1 Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C. 
const a = 60;
const b = 60;
const c = 100
soma = (a + b);
if(soma < c){
    console.log (`a soma de a:${a} + e  b:${b}  e menor  c:${c}`)
}else {
    console.log (`a soma de a:${a} + b:${b}  não e menor  c:${c}`);

}
/*2  Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
estado civil seja “CASADA”, solicitar o tempo de casada (anos).*/

const nome = "jailton";
const sexo = "m";
const estadoCivil = "casada";

if(sexo == "f" && estadoCivil == "casada"){
    const tempoDeCasada = 20;
    console.log(`vc esta casa a: ${tempoDeCasada} anos`);

}else {
    console.log("vc não e feminino");
}

//3 Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

const numero = 16;

if(numero % 2 == 0){
    console.log(`numero ${numero} par`)

}else {
    console.log(`numero ${numero} impar`)
}

/*4 Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se 
somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.*/

const A = 5;
const B = 20;
if(A == B ){
   const c = A + B;
    console.log (`se são  iguais a soma e  ${c}`);
    

}else {
    const c = A * B;
    console.log(`não são iguais a multplicaao dois e e ${c}`);
}

/* 5  Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, 
imprimindo o resultado.*/

const n1 = 400;

if(n1 > 0){
    const dobro = n1 * 2;
    console.log(`o numero e posistivo ${dobro}` );
}else{
    const triplo = n1 * 3
    console.log(`se for negativo e o tripo ${triplo}`);
}

/*6 Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são 
VERDADEIROS ou FALSOS*/

const valor1 = true;
const valor2 = false;

if(valor1 === valor2){
    console.log("ambos são verdaeiros");

}else {
      console.log("ambos são falsos");
}
 /*7 Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, 
imprimir o resultado desta operação.*/

const numeral = 3;

if(numeral % 2 == 0){
    const soma = numeral + 5;
    console.log (soma)
}else {
    const multiplique = numeral * 8;
    console.log (multiplique);

}

 /*8 Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
 decrescente.*/

 const nn1 = 15;
 const nn2 = 35;
 const nn3 = 20;
 if(nn1 > nn2 && nn1 > nn3){
    maior = nn1;
    if(nn2 > nn3){
        meio = nn2;
        menor = nn3;
    }else {
        meio = nn3;
        menor = nn2;
    }
} else if (nn2 > nn3 && nn2 > nn3){
    maior = nn2;
    if(nn1 > nn3){
     meio = nn1;
     menor = nn3;
    }else {
     meio = nn3;
     menor = nn1;
    }
}else { 
    maior = nn3;
    if(nn1 > nn2){
     meio = nn1;
     menor = nn2;
    }else {
     meio = nn2;
     menor = nn1;
    }
}    
console.log(`${maior} e ${meio} e ${menor}`)

/*9 Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
calcule seu peso ideal, utilizando as seguintes fórmulas: */
//para homens: (72.7 * h) – 58; 
// para mulheres: (62.1 * h) – 44.7. 

const altura = 1.60;
const sexualidade = "m";

if(sexualidade == "m"){
    const calculeM = (72.7 * altura) - 58;
     console.log (Math.round(calculeM));

}else {
   const calculeF =(62.1 * altura) -58;
    console.log (Math.round(calculeF))
}

/* 10O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
 
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
com a tabela abaixo. 
IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso*/
const paciente = "jailton"
const peso = 80;
const alturaDaPessoa = 1.70;
imc = peso /(alturaDaPessoa * alturaDaPessoa);

if(imc < 18.5){
    console.log(`paciente ${paciente} esta com peso abaixo do normal o imc e  ${Math.round(imc)}`);
}else if(imc >= 18.5 && imc <= 25){
    console.log(`paciente ${paciente} esta com peso  normal o imc e ${Math.round(imc)}`);
}else if(imc >= 25 &&  imc <= 30){
    console.log(`paciente ${paciente} acima do peso  o imc e ${Math.round(imc)}`);

}else{
    console.log(`paciente ${paciente} obeso o imce e ${Math.round(imc)}`);

}

/*11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 
Código Condição de pagamento 
1 À vista em dinheiro ou cheque, recebe 10% de desconto 
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros 
4 Em duas vezes, preço normal de etiqueta mais juros de 10%*/

const precoEtiqueta = 90;
const condicaDePagamento = "mais vezes";
const qtdDeParcelas = 10
 

if(condicaDePagamento == "dinheiro" || condicaDePagamento == "cheque"){
    const dinheiroCheque = precoEtiqueta - (precoEtiqueta * 0.10);
    console.log(`valor produto fica ${dinheiroCheque}`);

}else if(condicaDePagamento == "a vista no cartão de credito"){
    const vistaCartaoCredito = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`valor produto fica ${vistaCartaoCredito}`);

}else if(condicaDePagamento == "duas vezes"){
    const duasVezes = precoEtiqueta / 2;
    console.log(`valor produto fica ${duasVezes}`);

}else {
    maisvezes = (precoEtiqueta + (precoEtiqueta * 0.10)) / qtdDeParcelas;
    console.log(`valor produto fica ${qtdDeParcelas}  de ${maisvezes}`);

}

/*12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
aproveitamento, usando a fórmula: 
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
Média de aproveitamento Conceito 
>= 90 A 
>= 75 e < 90 B 
>= 60 e < 75 C 
>= 40 e < 60 D 
< 40 E*/

const nomeDeInde = "jailton"
const nota1 = 5;
const nota2 = 5;
const nota3 = 2;
const mediaExer = 8;
const ma = (nota1 + (nota2 * 2 )+ (nota3  * 3)+ mediaExer)/7

if(ma >= 9){
    const conceito ="A"
    const status = "aprovado"
    console.log (` a media do ${nomeDeInde} q e ${Math.round(ma)} conceito e ${conceito} e status ${status}`)
}else if(ma >= 7.5){
    const conceito ="B"
    const status = "aprovado"
    console.log (` a media do ${nomeDeInde} q e ${Math.round(ma)} conceito e ${conceito} e status ${status}`)    
}else if(ma >= 6.0){
    const conceito ="C"
    const status = "aprovado"
    console.log (` a media do ${nomeDeInde} q e ${Math.round(ma)} conceito e ${conceito} e status ${status}`)
}else if(ma >= 4.0){
    const conceito ="D"
    const status = "reprovado"
    console.log (` a media do ${nomeDeInde} q e ${Math.round(ma)} conceito e ${conceito} e status ${status}`)
}else {
    const conceito ="E"
    const status = "reprovado"
    console.log (` a media do ${nomeDeInde} q e ${Math.round(ma)} conceito e ${conceito} e status ${status}`)

}
















 