let icon = document.getElementById("techbuy_icon");
let logout = document.getElementById("logout");

icon.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "http://127.0.0.1:5500/rotas/main/index.html";
});

logout.addEventListener("click", (e) => {
  e.preventDefault();
  let lista_users = JSON.parse(localStorage.getItem("utilizadores"));
  lista_users.forEach((elemento) => {
    if (elemento.a_usar) {
      elemento["a_usar"] = false;
    }
  });
  localStorage.setItem(
    "utilizadores",
    JSON.stringify(lista_users)
  );
  location.href = "http://127.0.0.1:5500/index.html";
});
