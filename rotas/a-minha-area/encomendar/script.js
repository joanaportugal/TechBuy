let lista = JSON.parse(localStorage.getItem("utilizadores"));

let utilizador = lista.find((user) => user.a_usar == true);

document.getElementById("email").value = utilizador.email;
document.getElementById("nome").value = utilizador.nome;
document.getElementById("morada").value = utilizador.morada;
document.getElementById("telefone").value = utilizador.telefone;

let lista_cartoes_select = document.getElementById("lista_cartoes");

utilizador.cartoes.forEach((cartao) => {
  let op = document.createElement("option");
  op.textContent = cartao.nr_cartao;
  op.value = cartao.nr_cartao;
  lista_cartoes_select.append(op);
});

let lista_produtos_fieldset = document.getElementById("lista_produtos");

let total = 0;

utilizador.carrinho.forEach((produto) => {
  total += produto.preco;
  let p = document.createElement("p");
  p.innerHTML = `<span>${produto.produto}</span><span>Valor: ${produto.preco} €</span>`;
  lista_produtos_fieldset.append(p);
});

let p = document.createElement("p");
p.id = "valor_total";
p.innerHTML = `<b>Total: ${total} €</b>`;
lista_produtos_fieldset.append(p);

let comprar_encomenda = document.getElementById("comprar_encomenda");

comprar_encomenda.addEventListener("click", (e) => {
  e.preventDefault()
  if (lista_cartoes_select.value) {
    let nova_lista = []
    for (let i = 0; i < lista.length; i++) {
      let user = lista[i]
      if (user.a_usar == true) {
        let encomendas = user.encomendas ? user.encomendas : [];
        let nova_encomenda = {
          morada: user.morada,
          contacto_email: user.email,
          contacto_telefone: user.telefone,
          pagamento: lista_cartoes_select.value,
        };
        user.encomendas = [...encomendas, nova_encomenda];
        delete user.carrinho;
      }
      nova_lista = [...nova_lista, user]
    }
    localStorage.setItem("utilizadores", JSON.stringify(nova_lista));
    alert("Obrigada pela compra");
    location.href = "http://127.0.0.1:5500/rotas/main/index.html";
  } else {
    alert("Escolha um cartão de pagamento");
  }
});
