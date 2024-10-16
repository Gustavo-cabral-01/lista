class Fila {
    constructor() {
        this.itens = [];
    }

    
    adicionar(item) {
        this.itens.push(item);
    }

    remover() {
        if (this.estaVazia()) {
            return console.log("A fila está vazia!")
        }
        return this.itens.pop()

    }
       
    estaVazia() {
        return this.itens.length == 0;
    }

    mostrarFila() {
        return this.itens;
    }
}

const fila = new Fila();
fila.adicionar("Fifo");
fila.adicionar("First In");
fila.adicionar("First Out");

console.log(fila.mostrarFila());

console.log("removido", fila.remover()); 
console.log(fila.mostrarFila()); 

console.log("removido", fila.remover()); 
console.log("removido", fila.remover()); 
console.log(fila.remover()); 
