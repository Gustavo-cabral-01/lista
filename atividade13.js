function trocar(frutas, novaFruta) {
    
    frutas.splice(1, 1, novaFruta)
    return frutas
}

let frutas = ['banana', 'limão', 'manga', 'morango']
let novaFruta = 'goiaba'

let resultado = trocar(frutas, novaFruta )
console.log(resultado);
