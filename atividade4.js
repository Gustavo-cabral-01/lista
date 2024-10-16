numero = 5

function fatorial(nun) {
     fatorial = 1;
    for (let i = nun; i > 1; i--) {
      fatorial *= i; 
    }
    return fatorial;
  }
  const resultado = fatorial(numero);
  console.log(`o fatorial  de ${numero} é: ${resultado}`);