numero1 = 12
numero2 = 18


soma = numero1 + numero2;
function somas(){ 
console.log("a soma dos numeros é: " + soma);


if (numero1 > numero2) {
    console.log("o maior numero é: " + numero1);
} else if (numero2 > numero1) {
    console.log("o maior numero é: " + numero2);
} else {
    console.log("os numeros são iguais.");
}

if (soma % 2 == 0) {
    console.log("a soma deles é um numero par.");
} else {
    console.log("a soma deles é um numero impar.");
}  }
somas()