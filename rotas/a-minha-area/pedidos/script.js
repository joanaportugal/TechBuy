let utilizadores = JSON.parse(localStorage.getItem("utilizadores"));

let utilizador = utilizadores.find((user) => user.a_usar);

let section_encomendas = document.getElementById("lista_encomendas");

utilizador.encomendas.forEach((encomenda, index) => {
  let article = document.createElement("article");
  article.innerHTML = `<p>
    <span>Encomenda nº ${index + 1}</span>
    <span>Total: ${encomenda.total} €</span>
    <span>Morada: ${encomenda.morada}</span>
    <span>Cartão de pagamento: ${encomenda.pagamento}</span>
    <span>Email de contacto: ${encomenda.contacto_email}</span>
    <span>Telefone de contacto: ${encomenda.contacto_telefone}</span>
    
    </p>`;
  section_encomendas.append(article);
});
