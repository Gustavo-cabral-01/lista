numero = 5

function somaAteN(num) {
     soma = 0;
    for (let  i = 1; i <= num; i++) {
      soma += i; 
    }
    return soma;
  }
  const resultado = somaAteN(numero);
  console.log(`a soma de 1 até ${numero} é: ${resultado}`);
  
  