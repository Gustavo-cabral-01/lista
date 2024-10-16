function numeroPrimo(num) {
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return "nao é primo"; 
        }
        else
            return "é primo"
    }
}

console.log(numeroPrimo(11)); 
console.log(numeroPrimo(20));  
console.log(numeroPrimo(31));  
console.log(numeroPrimo(30)); 
console.log(numeroPrimo(58)); 
console.log(numeroPrimo(79)); 