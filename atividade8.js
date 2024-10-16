const numeros = [1, 3, 5, 6, 9, 12];

function multiplos(numeros) {
    const multiplos = numeros.filter(num => num % 3 == 0); 
    const total = multiplos.length; 

    
    console.log(`Múltiplos de 3: ${multiplos.join()}`);
    console.log(`Total: ${total}`);
}

multiplos(numeros);
