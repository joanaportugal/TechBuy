let lista_telemoveis = JSON.parse(localStorage.getItem("telemóveis"));

let items_lista = document.getElementById("items_lista");

for (let i = 0; i < lista_telemoveis.length; i++) {
  item = lista_telemoveis[i];
  let article = document.createElement("article");
  if (item.preco_promocao) {
    article.innerHTML = `<img src=${item.link_imagem} alt=${item.titulo}/>
    <div class="produto-info">
        <p>${item.titulo}</p>
        <div class="valores"><p class="preco_antigo">${item.preco} €</p><p>${item.preco_promocao} €</p></div>
        <div class="buttons">
            <button onclick='detalhes("${item.titulo}")'>Ver detalhes</button>
            <button>Comprar</button>
        </div>
    </div>`;
  } else {
    article.innerHTML = `<img src=${item.link_imagem} alt=${item.titulo}/>
    <div class="produto-info">
        <p>${item.titulo}</p>
        <div class="valores"><p>${item.preco} €</p></div>
        <div class="buttons">
            <button onclick='detalhes("${item.titulo}")'>Ver detalhes</button>
            <button>Comprar</button>
        </div>
    </div>`;
  }
  items_lista.append(article);
}

function detalhes(produto) {
  localStorage.setItem("produto_visualizar", produto);
  location.href = "http://127.0.0.1:5500/rotas/info-produto/index.html";
}
