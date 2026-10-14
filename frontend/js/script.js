
const botaoAdicionar = document.getElementById("adicionar-estudo");
const formulario = document.getElementById("form-album");
const listaAlbuns = document.querySelector(".lista-estudos");

botaoAdicionar.addEventListener("click", () => {
    formulario.hidden = !formulario.hidden;
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome-album").value.trim();
    const descricao = document.getElementById("descricao-novo-album").value.trim();

    if (!nome || !descricao) {
        return;
    }

    const cartao = document.createElement("article");
    cartao.classList.add("cartao-estudo");
    cartao.setAttribute("tabindex", "0");
    cartao.setAttribute("role", "button");

    const capa = document.createElement("div");
    capa.classList.add("imagem-estudo", "capa-album");

    const icone = document.createElement("span");
    icone.textContent = "📚";
    capa.appendChild(icone);

    const informacoes = document.createElement("div");
    informacoes.classList.add("informacoes-estudo");

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    const textoDescricao = document.createElement("p");
    textoDescricao.textContent = descricao;

    const etiqueta = document.createElement("span");
    etiqueta.classList.add("data-estudo");
    etiqueta.textContent = "Meu álbum de estudos";

    informacoes.append(titulo, textoDescricao, etiqueta);
    cartao.append(capa, informacoes);
    listaAlbuns.appendChild(cartao);

    formulario.reset();
    formulario.hidden = true;
});

listaAlbuns.addEventListener("click", (evento) => {
    const cartao = evento.target.closest(".cartao-estudo");

    if (!cartao) {
        return;
    }

    
    const titulo = cartao.querySelector("h3").textContent;
    const descricao = cartao.querySelector(".informacoes-estudo p").textContent;

    const id = titulo.toLowerCase().trim().replace(/\s+/g, "-");

    const parametros = new URLSearchParams({
        id,
        titulo,
        descricao
    });

window.location.href = `album.html?${parametros.toString()}`});
