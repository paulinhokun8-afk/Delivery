const nomes = ["Bruna", "gustavo", "Davi", "Luisa", "mariana", "Fabio"];

let totalMaiusculas = 0;
let totalMinusculas = 0;
const nomesMinusculos = [];
const nomesMaisculos = [];

nomes.forEach(nome => {
    if (nome) {
        let primeiraLetra = nome[0];

        if(primeiraLetra === primeiraLetra.toUpperCase()) {
            totalMaiusculas++;
            nomesMaisculos.push(nome);
        } else {
            totalMinusculas++;
            nomesMinusculos.push(nome);
        }
    }
});

console.log("   RELATÓRIO DE NOMES   ");
console.log(`Quantidade de maiúsculas: ${totalMaiusculas} -> Nomes:`, nomesMaisculos);
console.log(`Quantidade de minúsculas: ${totalMinusculas} -> Nomes:`,);