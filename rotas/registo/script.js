let registo_form = document.getElementById("registo_form");

registo_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("form input[name=username]").value;
  let email = document.querySelector("form input[name=email]").value;
  let password = document.querySelector("form input[name=password]").value;
  let c_password = document.querySelector("form input[name=c_password]").value;

  if (password !== c_password) {
    alert("As duas passwords são diferentes");
  } else {
    let object = { username, email, password };
    let lista_users = localStorage.getItem("utilizadores");
    if (lista_users) {
      let lista = JSON.parse(lista_users);
      let valores_iguais = lista.find(
        (elemento) =>
          elemento.username === object.username ||
          elemento.email === object.email
      );
      if (valores_iguais) {
        alert("O username ou email já estão a ser usados");
      } else {
        object = {...object, "a_usar": true}
        lista = [...lista, object];
        localStorage.setItem("utilizadores", JSON.stringify(lista));
        location.href = "http://127.0.0.1:5500/rotas/main/index.html";
      }
    } else {
      let item = [{...object, "a_usar": true}];
      localStorage.setItem("utilizadores", JSON.stringify(item));
      location.href = "http://127.0.0.1:5500/rotas/main/index.html";
    }
  }
});
