(function () {
  var entradas = [
    { nome: "Thais", texto: "entrou agora" },
    { nome: "Camila", texto: "entrou agora" },
    { nome: "Juliana", texto: "entrou agora" },
    { nome: "Fernanda", texto: "entrou agora" },
    { nome: "Patrícia", texto: "entrou agora" }
  ];

  var container = document.getElementById("social-proof-join");
  if (!container) return;

  var indiceAnterior = -1;

  function proximoEvento() {
    var indice;
    do {
      indice = Math.floor(Math.random() * entradas.length);
    } while (indice === indiceAnterior && entradas.length > 1);
    indiceAnterior = indice;
    return entradas[indice];
  }

  function mostrarToast() {
    var evento = proximoEvento();

    var toast = document.createElement("div");
    toast.className = "toast toast-join";
    toast.innerHTML =
      '<span class="toast-avatar">' + evento.nome.charAt(0) + '</span>' +
      '<span class="toast-texto"><strong>' + evento.nome + '</strong> ' + evento.texto + '</span>';

    container.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add("toast-visivel");
    });

    setTimeout(function () {
      toast.classList.add("toast-saindo");
      toast.classList.remove("toast-visivel");
      setTimeout(function () {
        toast.remove();
      }, 900);
    }, 3800);
  }

  setTimeout(mostrarToast, 2500);
  setInterval(mostrarToast, 6500);
})();
