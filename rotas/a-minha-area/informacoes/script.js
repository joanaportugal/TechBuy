let lista_users = JSON.parse(localStorage.getItem("utilizadores"));
user = {};

lista_users.forEach((elemento) => {
  if (elemento.a_usar === true) {
    user = elemento;
  }
});

user_nome = user.nome ? user.nome : "";
user_email = user.email;
user_morada = user.morada ? user.morada : "";
user_telefone = user.telefone ? user.telefone : "";
user_cartoes = user.cartoes ? user.cartoes : [];

document.getElementById("nome").value = user_nome;
document.getElementById("email").value = user_email;
document.getElementById("morada").value = user_morada;
document.getElementById("telefone").value = user_telefone;

if (user_cartoes.length != 0) {
  lista_cartoes = document.getElementById("lista_cartoes");
  for (let i = 0; i < user_cartoes.length; i++) {
    let elemento = document.createElement("article");
    let cartao = user_cartoes[i];
    let nr_cartao = cartao.nr_cartao;
    ultimos_digitos = nr_cartao.slice(-4);
    let validade = cartao.validade;

    elemento.innerHTML = `<article><p>Cartão que acaba em ${ultimos_digitos}</p><p>Validade: ${validade}</p></article>`;
    lista_cartoes.append(elemento);
  }
}

document.getElementById("atualizar").addEventListener("click", (e) => {
  e.preventDefault();
  lista_users.forEach((elemento) => {
    if (elemento.a_usar === true) {
      elemento.nome = document.getElementById("nome").value;
      elemento.morada = document.getElementById("morada").value;
      elemento.telefone = document.getElementById("telefone").value;
    }
  });
  localStorage.setItem("utilizadores", JSON.stringify(lista_users));
  location.href =
    "http://127.0.0.1:5500/rotas/a-minha-area/informacoes/index.html";
});

document.getElementById("adicionar_cartao").addEventListener("click", (e) => {
  e.preventDefault();
  lista_users.forEach((elemento) => {
    if (elemento.a_usar === true) {
      nr_cartao = 0;
      validade_mes = "0";
      validade_ano = "0";
      while (!nr_cartao || nr_cartao.toString().length != 16) {
        nr_cartao = prompt(
          "Insira o número de cartão(sem espaços)\nModelo: ################",
          ""
        );
      }
      while (
        !validade_mes ||
        parseInt(validade_mes) < 1 ||
        parseInt(validade_mes) > 12
      ) {
        validade_mes = prompt("Qual é o mês de validade", "");
      }
      while (!validade_ano || parseInt(validade_ano) < 2021) {
        validade_ano = prompt("Qual é o ano de validade", "");
      }
      novo_cartao = { nr_cartao, validade: validade_mes + "/" + validade_ano };
      user_cartoes = [...user_cartoes, novo_cartao];
      elemento.cartoes = user_cartoes;
    }
  });
  localStorage.setItem("utilizadores", JSON.stringify(lista_users));
  location.href =
    "http://127.0.0.1:5500/rotas/a-minha-area/informacoes/index.html";
});

console.log(user);
