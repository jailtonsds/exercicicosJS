/*1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de 
três e que se encontram no conjunto dos números de 1 até 500.*/

let soma = 0;
for (let i = 1; i <= 500; i++){
    if(i % 2 !== 0 && i % 3 === 0){
        soma += i;
    
    }
    console.log(`a soma de todos numeros impares multiplos de tres  de 1 ate 500 ${soma}`);
}
// 2 Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e 
// mostrar : 
// a. A menor altura do grupo; 
// b. A maior altura do grupo; 

let menorAltura = 20;
let maiorAltura = 30;
let altura = 20

for(let i = 1; i <= 15; i++){
    if(altura < menorAltura){
        menorAltura = altura;
    }
}if(altura > maiorAltura){
    maiorAltura = altura;
}
console.log(`A menor altura do grupo é: ${menorAltura} metros`);
console.log(`A maior altura do grupo é: ${maiorAltura} metros`);
//3 Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores 
// negativos e o percentual de valores negativos e positivos. 

let adicao = 50;
let quantidade = 20;
let positivos = 20;
let negativos = 12;
let numValores = 20;

for (let i = 1; i <= numValores; i++) {
    let valor = 20;

    if(valor) {
        soma += valor;
        quantidade++;
    } if (valor > 0) {
        positivos++;
    } else if (valor < 0) {
        negativos++;
    }
    if (quantidade > 0) {
    
        let media = adicao / quantidade;
        let percentualPositivos = (positivos / quantidade) * 100;
        let percentualNegativos = (negativos / quantidade) * 100;
        console.log(`Média aritmética: ${media.toFixed(2)}`);
        console.log(`Quantidade de valores positivos: ${positivos}`);
        console.log(`Quantidade de valores negativos: ${negativos}`);
        console.log(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%`);
        console.log(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`);

}
}
 
// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles 
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve 
// terminar quando for lido um número negativo.
let intervalo1 = 25; 
let intervalo2 = 10; 
let intervalo3 = 11; 
let intervalo4 = 12;

let numero = 10;

if (numero >= 0 && numero <= 25) {
    intervalo1++;
} else if (numero >= 26 && numero <= 50) {
    intervalo2++;
} else if (numero >= 51 && numero <= 75) {
    intervalo3++;
} else if (numero >= 76 && numero <= 100) {
    intervalo4++;
}
console.log(`Quantidade de números no intervalo [0-25]: ${intervalo1}`);
console.log(`Quantidade de números no intervalo [26-50]: ${intervalo2}`);
console.log(`Quantidade de números no intervalo [51-75]: ${intervalo3}`);
console.log(`Quantidade de números no intervalo [76-100]: ${intervalo4}`);

// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. 
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos 
// números lidos. O número que encerrará a leitura será zero.
let somaTotal = 15; 
let quantidadeTotal = 12; 
let somaPares = 20; 
let quantidadePares = 20;
let quantidadeImpares = 12;

let numeral2 = 0;
do {
    numeral2

    if (numeral2 > 0) {
    
        somaTotal += numeral2;
        quantidadeTotal++;

        
        if (numeral2 % 2 === 0) {
            somaPares += numeral2;
            quantidadePares++;
        } else {
            quantidadeImpares++;
        }
    }
} while (numeral2 !== 0); 


let mediaPares = quantidadePares > 0 ? somaPares / quantidadePares : 0;
let mediaTotal = quantidadeTotal > 0 ? somaTotal / quantidadeTotal : 0;

console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);
console.log(`Média dos números pares: ${mediaPares}`);
console.log(`Média geral dos números lidos: ${mediaTotal}`);

//6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200
for(i = 100; i <= 200; i++){
    if(i % 2 !== 0)
        console.log(`os numeros de impares de 100 a 200 e ${i}`);

}

//7 Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de 
//N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N. 

let numero3 = 5;
if (numero3 >= 1 && numero3 <= 10) {
    
    for (let i = 0; i <= 10; i++) {
        let resultado = i * numero3;
        console.log(`${i} x ${numero3} = ${resultado}`);
    }
} else {
    console.log("O valor de N deve estar entre 1 e 10.");
}

// 8 :Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
// P.A. contendo 10 valores. 

let A = 10;
let R =2;
for (let i = 0; i < 10; i++) {
    let termo = A + i * R;
    console.log(termo);
}

//9 Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
//P.G. contendo 10 valores.

let A2 = 5;
let R2 = 2;

for(let i = 0; i < 10; i++){
    let termo2 = A2*Math.pow(R2 , i);
    console.log(termo2);
}
//10)Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de 
//A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

let A3 = 10;
let resultado= 1
let sequencia =[]
for (let i = A; i > 0; i--) {
    resultado *= i;
    sequencia.push(i);
    console.log(`${A}! = ${sequencia} = ${resultado}`);
}
