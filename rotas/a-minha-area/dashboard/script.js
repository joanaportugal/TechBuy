let info_btn = document.getElementById("info_btn");
let pedidos_btn = document.getElementById("pedidos_btn");
let cesta_btn = document.getElementById("cesta_btn");

info_btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href =
    "http://127.0.0.1:5500/rotas/a-minha-area/informacoes/index.html";
});

pedidos_btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "http://127.0.0.1:5500/rotas/a-minha-area/pedidos/index.html";
});

cesta_btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "http://127.0.0.1:5500/rotas/a-minha-area/cesta/index.html";
});
