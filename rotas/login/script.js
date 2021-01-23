let login_form = document.getElementById("login_form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("form input[name=email]").value;
  let password = document.querySelector("form input[name=password]").value;

  let lista_users = localStorage.getItem("utilizadores");

  if (!lista_users) {
    alert("Tente criar uma conta primeiro");
  } else {
    let lista = JSON.parse(lista_users);
    let valores_iguais = lista.find(
      (elemento) => elemento.email === email && elemento.password === password
    );
    let existe_email = lista.find((elemento) => elemento.email == email);
    if (valores_iguais) {
      lista.forEach((elemento) => {
        if (elemento.email === email && elemento.password === password) {
          elemento["a_usar"] = true;
        }
      });
      localStorage.setItem("utilizadores", JSON.stringify(lista));
      location.href = "http://127.0.0.1:5500/rotas/main/index.html";
    } else if (existe_email) {
      alert("Tente outra vez");
    } else {
      alert("A conta não existe");
    }
  }
});
