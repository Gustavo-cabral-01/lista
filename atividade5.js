const numeros = [1, 2, 3, 4, 5, 6];

function dobrar(numeros) {
    return numeros
        .filter(num => num % 2 == 0)
        .map(num => num * 2)        
}
const resultado = dobrar(numeros);
console.log(resultado); 
