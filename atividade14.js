function ehPalindromo(nomes) {
   
    let inve = nomes.replace(/\s+/g, '').toLowerCase();
    

    let invertida = inve.split('').reverse('').join('');
    
    return inve === invertida;
}

console.log(ehPalindromo("radar"));
console.log(ehPalindromo("ana")); 
console.log(ehPalindromo("lucas")); 
console.log(ehPalindromo("ovo")); 
console.log(ehPalindromo("maria")); 