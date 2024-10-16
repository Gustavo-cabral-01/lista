const numeros = [7, 19, 9, 23, 33];

function soma(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}

const resultado = soma(numeros);
console.log(resultado);