const frutas = ['maçã', 'laranja', 'banana'];
const resultado = ordenarFrutas(frutas);

function ordenarFrutas(frutas) {
    return frutas.sort((a, b) => {
       
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] < b[i]) return -1; 
            if (a[i] > b[i]) return 1;  
        }
        
        return a.length - b.length;
    });
}
console.log(resultado); 
