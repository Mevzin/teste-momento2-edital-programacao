//Escreva um programa que, dada uma matrix 3x3, armazena em cada posição da matriz, 
//a soma dos valores da linha e coluna que definem a posição. 
//Por exemplo, na posição [1][2] você deverá armazenar o valor 1+2 = 3 e assim por diante. Imprima a matriz na tela.

let matriz = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4]
];

for(let row=0 ; row<3 ; row++){
  for(let col=0; col<3 ; col++){
    console.log("Linha: "+ row + ", Coluna: "+ col + ", Valor: " + matriz[row][col]);
  }
}