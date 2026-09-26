let pedidos = [];

const listaPedidos = document.getElementById("listaPedidos");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarPedidos() {
    try {

        status.textContent = "Carregando pedidos. . .";
        const resposta = await fetch("./pedidos.json")

        if (!resposta.ok) {
            throw new Error("Não foi possivel carregar o JSON.");
            
        }

        pedidos = await resposta.json();
    } catch (erro) {

        status.textContent = `Erro: ${erro.message}`;
    }
}
function mostrarPedidos(lista){
    listaPedidos.innerHTML = "";

    lista.forEach((cliente) => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <h2>${cliente.nome}</h2>
        <p><strong>Produto:</strong> ${cliente.produto}</p>
        <p><strong>Local:</strong> ${cliente.local}</p>
        <p><strong>Valor:</strong> ${cliente.valor}</p>
        <p><strong>Status:</strong> ${cliente.status}</p>
        <p><strong>FormaPagamento:</strong> ${cliente.formapagamento}</p>
        `;
        listaPedidos.appendChild(card);
    });

}

btnBuscar.addEventListener("click", () => {
    status.textContent = `${pedidos.length} pedidos carregados.`;
    mostrarPedidos(pedidos);
});

carregarPedidos();

