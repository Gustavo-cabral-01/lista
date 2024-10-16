function Matriz(matriz) {
     soma = 0;

    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }
    }

    return soma
}

let matriz = [
    [9, 22, 7, 16],
    [4, 52, 11, 9],
    [27, 1, 12, 3]
]
console.log(Matriz(matriz));
