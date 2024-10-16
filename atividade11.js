const numeros = [1, 19, 4, 17, 6, 37];

function quadradoDosNumeros(numeros) {
    return numeros
        .filter(num => num > 10) 
        .map(num => num * num)
}

const resultado = quadradoDosNumeros(numeros);
console.log(resultado);