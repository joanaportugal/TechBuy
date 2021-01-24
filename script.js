let melhores_ofertas_imagens = document.getElementById(
  "melhores_ofertas_imagens"
);

let lista_computadores = JSON.parse(localStorage.getItem("computadores"));
let lista_telemoveis = JSON.parse(localStorage.getItem("telemóveis"));

let filtro_computadores = lista_computadores.filter(
  (computador) => computador.preco_promocao
);

let filtro_telemoveis = lista_telemoveis.filter(
  (telemovel) => telemovel.preco_promocao
);

let indice = 0;
let lista = filtro_computadores;

for (let i = 0; i < 8; i++) {
  if (i === 4) {
    indice = 0;
    lista = filtro_telemoveis;
  }
  item = lista[indice];
  let elemento = document.createElement("a");
  elemento.innerHTML = `<a href="#"><img src=${item.link_imagem} alt=${item.titulo}/></a>`;
  melhores_ofertas_imagens.append(elemento);
  indice++;
}
