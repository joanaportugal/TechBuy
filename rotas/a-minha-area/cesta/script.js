let utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

let utilizador = utilizadores.find((user) => user.a_usar);

let utilizador_carrinho = utilizador.carrinho;

let section_produtos = document.getElementById("lista_produtos");

section_produtos.innerHTML = "";

utilizador_carrinho.forEach((produto) => {
  section_produtos.innerHTML += `<p><span>${produto.produto}</span><span>Valor: ${produto.preco} €</span></p>`;
});

section_produtos.innerHTML += `<button onclick='comprar()'>Comprar</button>`;

function comprar() {
  if (utilizador.nome && utilizador.morada && utilizador.telefone && utilizador.cartoes) {
    location.href =
      "http://127.0.0.1:5500/rotas/a-minha-area/encomendar/index.html";
  } else {
    alert(
      "Preencha primeiro as informações em falta para proceder com a encomenda."
    );
    location.href =
      "http://127.0.0.1:5500/rotas/a-minha-area/informacoes/index.html";
  }
}
