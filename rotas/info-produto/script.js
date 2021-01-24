let main = document.getElementsByTagName("main")[0];

let lista_computadores = JSON.parse(localStorage.getItem("computadores"));
let lista_telemoveis = JSON.parse(localStorage.getItem("telemóveis"));
let item = localStorage.getItem("produto_visualizar");

let procura_computadores = lista_computadores.find(
  (computador) => computador.titulo === item
);
let procura_telemoveis = lista_telemoveis.find(
  (telemovel) => telemovel.titulo === item
);

let section = document.createElement("section");

if (procura_computadores) {
  section.innerHTML = `
    <h1>${procura_computadores.titulo}</h1>
    <div id="info_principal">
      <img src=${procura_computadores.link_imagem} alt=${procura_computadores.titulo}/>
      <div id="precos">
      ${
        procura_computadores.preco_promocao
          ? `<p><span id="preco_antigo">${procura_computadores.preco} €</span><span>${procura_computadores.preco_promocao} €</span></p>`
          : `<p>${procura_computadores.preco} €</p>`
      }
        <button onclick='adicionar_carrinho("${procura_computadores.titulo}",${procura_computadores.preco_promocao ?
          procura_computadores.preco_promocao : procura_computadores.preco})'>Adicionar ao carrinho</button>
      </div>
    </div>
    <article>
      <h2>Descrição</h2>
      <p><span>Autonomia</span> <span>${procura_computadores.autonomia}</span></p>
      <p><span>CPU</span> <span>${procura_computadores.cpu}</span></p>
      <p><span>Número de <br/>núcleos Core</span> <span>${procura_computadores.nr_cores}</span></p>
      <p><span>Memória RAM</span> <span>${procura_computadores.mRam}</span></p>
      <p><span>Armazenamento</span> <span>${procura_computadores.armazenamento}</span></p>
      <p><span>Gráfica</span> <span>${procura_computadores.grafica}</span></p>
      <p><span>Diagonal do <br />Ecrã</span> <span>${procura_computadores.dimensao_ecra}</span></p>
    </article>
    `;
} else {
  section.innerHTML = `
    <h1>${procura_telemoveis.titulo}</h1>
    <div id="info_principal">
      <img src=${procura_telemoveis.link_imagem} alt=${procura_telemoveis.titulo} />
      <div id="precos">
      ${
        procura_telemoveis.preco_promocao
          ? `<p><span id="preco_antigo">${procura_telemoveis.preco} €</span><span>${procura_telemoveis.preco_promocao} €</span></p>`
          : `<p>${procura_telemoveis.preco} €</p>`
      }
        <button onclick='adicionar_carrinho("${procura_telemoveis.titulo}", ${procura_telemoveis.preco_promocao ?
        procura_telemoveis.preco_promocao : procura_telemoveis.preco})'>Adicionar ao carrinho</button>
      </div>
    </div>
    <article>
      <h2>Descrição</h2>
      <p><span>Memória RAM</span> <span>${procura_telemoveis.dimensao_ecra}</span></p>
      <p><span>Memória Interna</span> <span>${procura_telemoveis.memoria_interna}</span></p>
      <p><span>Memória RAM</span> <span>${procura_telemoveis.memoria_ram}</span></p>
      <p><span>Diagonal do <br />Ecrã</span> <span>${procura_telemoveis.dimensao_ecra}</span></p>
      <p><span>Resolução Câmara<br />Frontal</span> <span>${procura_telemoveis.resolucao_camera_frontal}</span></p>
      <p><span>Resolução Câmara<br />Traseira</span> <span>${procura_telemoveis.resolucao_camera_traseira}</span></p>
    </article>
    `;
}

main.append(section);

function adicionar_carrinho(produto, preco) {
  let lista_users = JSON.parse(localStorage.getItem("utilizadores"));
  lista_users.forEach((user) => {
    if (user["a_usar"] === true) {
      carrinho = user.carrinho ? user.carrinho : [];
      user.carrinho = [...carrinho, {produto, preco}];
    }
  });
  localStorage.setItem("utilizadores", JSON.stringify(lista_users))
}
