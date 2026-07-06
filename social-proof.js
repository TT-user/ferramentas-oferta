(function () {
  var nomes = [
    "João", "Pedro", "Lucas", "Gabriel", "Matheus", "Rafael", "Guilherme", "Felipe", "Bruno", "Gustavo",
    "Rodrigo", "Thiago", "Diego", "Leonardo", "Vinicius", "Marcelo", "Eduardo", "Ricardo", "Fernando", "Carlos",
    "Paulo", "André", "Marcos", "Daniel", "Alexandre", "Fábio", "Renato", "Anderson", "Sergio", "Roberto",
    "Adriano", "Cesar", "Cristiano", "Douglas", "Emerson", "Everton", "Fabricio", "Gilberto", "Henrique", "Igor",
    "Jefferson", "Jonas", "José", "Júlio", "Kaique", "Leandro", "Luan", "Luiz", "Mateus", "Mauricio",
    "Nelson", "Nicolas", "Otávio", "Patrick", "Rogério", "Samuel", "Tiago", "Valdir", "Vitor", "Wagner",
    "Wesley", "William", "Alan", "Alexsandro", "Alisson", "Antônio", "Arthur", "Augusto", "Caio", "Caique",
    "Danilo", "Davi", "Edson", "Elias", "Enzo", "Erick", "Ezequiel", "Fabiano", "Flavio", "Francisco",
    "Geraldo", "Heitor", "Hugo", "Ian", "Ivan", "Jean", "Joaquim", "Jorge", "Juan", "Kevin",
    "Lauro", "Lucio", "Manoel", "Marlon", "Miguel", "Murilo", "Nathan", "Norberto", "Osvaldo", "Wallace"
  ];

  var textosEntrada = [
    "entrou agora",
    "entrou no grupo agora",
    "acabou de entrar no grupo",
    "acabou de entrar"
  ];

  var textosEconomia = [
    "economizou com as ofertas do grupo",
    "economizou R$VALOR com as ofertas do grupo",
    "aproveitou uma oferta agora",
    "garantiu um desconto agora"
  ];

  function valorAleatorio() {
    var valores = [23, 35, 42, 58, 67, 75, 89, 94, 110, 130, 148, 165];
    return valores[Math.floor(Math.random() * valores.length)];
  }

  function textoAleatorio() {
    var todos = textosEntrada.concat(textosEconomia);
    var texto = todos[Math.floor(Math.random() * todos.length)];
    return texto.replace("VALOR", valorAleatorio());
  }

  var container = document.getElementById("social-proof-join");
  if (!container) return;

  var indiceAnterior = -1;

  function proximoNome() {
    var indice;
    do {
      indice = Math.floor(Math.random() * nomes.length);
    } while (indice === indiceAnterior && nomes.length > 1);
    indiceAnterior = indice;
    return nomes[indice];
  }

  function mostrarToast() {
    var nome = proximoNome();
    var texto = textoAleatorio();

    var toast = document.createElement("div");
    toast.className = "toast toast-join";
    toast.innerHTML =
      '<span class="toast-avatar">' + nome.charAt(0) + '</span>' +
      '<span class="toast-texto"><strong>' + nome + '</strong> ' + texto + '</span>';

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
