//Escreva um programa que lê 2 matrizes A e B, cada uma com 3 linhas e 2 colunas. 
//Construir uma matriz C de mesma dimensão (3x2) onde C é formada pela soma dos elementos da matriz A 
//com os elementos da matriz B (exemplo: C[1][1] = A[1][1] + B[1][1]). Apresentar ao final as 3 matrizes (A, B e C).

let matrizA = [ [0, 1], [1, 2], [2, 3] ];
let matrizB = [ [1, 2], [2, 3], [3, 4] ];
let matrizC = [ [0, 0], [0, 0], [0, 0] ];

for(let row=0 ; row<3 ; row++){
  for(let col=0; col<2 ; col++){
    matrizC[row][col] = matrizA[row][col] + matrizB[row][col];
  }
}

console.log(matrizC);