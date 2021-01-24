let lista_computadores = JSON.parse(localStorage.getItem("computadores"));

let items_lista = document.getElementById("items_lista");

for (let i = 0; i < lista_computadores.length; i++) {
  item = lista_computadores[i];
  let article = document.createElement("article");
  if (item.preco_promocao) {
    article.innerHTML = `<img src=${item.link_imagem} alt=${item.titulo}/>
    <div class="produto-info">
        <p>${item.titulo}</p>
        <div class="valores"><p class="preco_antigo">${item.preco} €</p><p>${item.preco_promocao} €</p></div>
        <div class="buttons">
            <button onclick='detalhes("${item.titulo}")'>Ver detalhes</button>
            <button onclick='adicionar_carrinho("${item.titulo}", "${item.preco}")'>Comprar</button>
        </div>
    </div>`;
  } else {
    article.innerHTML = `<img src=${item.link_imagem} alt=${item.titulo}/>
    <div class="produto-info">
        <p>${item.titulo}</p>
        <div class="valores"><p>${item.preco} €</p></div>
        <div class="buttons">
            <button onclick='detalhes("${item.titulo}")'>Ver detalhes</button>
            <button onclick='adicionar_carrinho("${item.titulo}", "${item.preco}")'>Comprar</button>
        </div>
    </div>`;
  }
  items_lista.append(article);
}

function detalhes(produto) {
  localStorage.setItem("produto_visualizar", produto);
  location.href = "http://127.0.0.1:5500/rotas/info-produto/index.html";
}

function adicionar_carrinho(produto, preco) {
  let lista_users = JSON.parse(localStorage.getItem("utilizadores"));
  lista_users.forEach((user) => {
    if (user["a_usar"] === true) {
      carrinho = user.carrinho ? user.carrinho : [];
      user.carrinho = [...carrinho, { produto, preco }];
    }
  });
  localStorage.setItem("utilizadores", JSON.stringify(lista_users));
}
