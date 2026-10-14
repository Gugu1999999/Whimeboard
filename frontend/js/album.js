
const botaoAdicionar = document.getElementById("adicionar-estudo");
const formulario = document.getElementById("form-estudo");
const listaEstudos = document.getElementById("lista-estudos");
const mensagemVazia = document.getElementById("mensagem-vazia");

botaoAdicionar.addEventListener("click", () => {
    formulario.hidden = !formulario.hidden;
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo-estudo").value.trim();
    const assunto = document.getElementById("assunto-estudo").value.trim();
    const foto = document.getElementById("foto-estudo").files[0];
    const anotacoes = document.getElementById("anotacoes-estudo").value.trim();

    if (!titulo || !assunto || !foto) {
        return;
    }

    if (!foto.type.startsWith("image/")) {
        alert("Selecione um arquivo de imagem válido.");
        return;
    }

    const cartao = document.createElement("article");
    cartao.classList.add("cartao-estudo");

    const imagem = document.createElement("img");
    imagem.classList.add("foto-salva");
    imagem.src = URL.createObjectURL(foto);
    imagem.alt = titulo;

    const informacoes = document.createElement("div");
    informacoes.classList.add("informacoes-estudo");

    const tituloElemento = document.createElement("h3");
    tituloElemento.textContent = titulo;

    const assuntoElemento = document.createElement("p");
    assuntoElemento.textContent = assunto;

    const dataElemento = document.createElement("span");
    dataElemento.classList.add("data-estudo");
    dataElemento.textContent = new Date().toLocaleDateString("pt-BR");

    informacoes.append(tituloElemento, assuntoElemento, dataElemento);

    if (anotacoes) {
        const anotacoesElemento = document.createElement("p");
        anotacoesElemento.classList.add("anotacoes-estudo");
        anotacoesElemento.textContent = anotacoes;

        informacoes.appendChild(anotacoesElemento);
    }

    cartao.append(imagem, informacoes);
    listaEstudos.appendChild(cartao);

    mensagemVazia.hidden = true;
    formulario.reset();
    formulario.hidden = true;
});
