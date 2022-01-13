//Faça um programa que preencha um vetor com 6 valores distintos digitados pelo usuário. 
//Em seguida, exiba o maior e o menor valor do vetor, indicando em qual posição eles se encontram. 
//Depois, imprima os itens no vetor em ordem crescente.

let vector = [];
let high = 0;
let low = 0;
let highPosition = 0;
let lowPosition = 0;

for (let i = 0; i < 6; i++) {
    vector[i] = parseInt(prompt("Digite um valor: "));
};

for (let i = 0; i < 6; i++) {
    if (vector[i] > high) {
      high = vector[i];
        highPosition = i;
    };
};

for (let i = 0; i < 6; i++) {
    if (vector[i] < low) {
        low = vector[i];
        lowPosition = i;
    };
};

console.log("Maior valor: " + high + " na posição: " + highPosition);
console.log("low valor: " + low + " na posição: " + lowPosition);

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (vector[i] < vector[j]) {
            let aux = vector[i];
            vector[i] = vector[j];
            vector[j] = aux;
        };
    };
}; 
console.log("Vetor em ordem crescente: " + vector);
