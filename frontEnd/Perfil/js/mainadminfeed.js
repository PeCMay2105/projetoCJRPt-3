// -----------------------------------------------------------------------------
//  Quando tiver os dados já no banco de dados alterar os meus campos do html/css
// const usuario = {
//     nome: "Fulano de Tal",
//     foto: "./caminho/para/foto.jpg",
//     cargo: "Desenvolvedor",
//     email: "fulano@example.com"

//   };
//   document.querySelector(".img-person-bar").src = usuario.foto;
//   document.querySelector(".nome_usuario").textContent = usuario.nome;
//   document.querySelector(".cargo").textContent = usuario.cargo;
//   document.querySelector(".email").textContent = usuario.email;
// -----------------------------------------------------------------  
areaPosts = document.getElementById("areaPosts")

posts = [
    {
        "id": "0",
        "flag": "1",
        "nome": "Fulano",
        "foto": "../Perfil/assets/img/riasg.jpg",
        "fotoPost": "../Perfil/assets/img/R.jpg",
        "texto": "Mirai Nikki é melhor, mas a abertura de evangelion é boa",
        "data": "19/11/2023"
    },
    {

        "id": "0",
        "nome": "Usuario",
        "foto": "../Perfil/assets/img/fotoDefault.png",
        "texto": "Texto longo de uma branca classe média alta sobre meritocracia",
        "data": "16/11/2023"

    },
    {
        "id": "0",
        "flag": "2",
        "nome": "ciclano",
        "foto": "../Perfil/assets/img/asuka.jpg",
        "fotoPost": "../Perfil/assets/img/neon-genesis-evangelion-evas-wallpaper-2.jpg",
        "texto": "lalala.",
        "data": "19/11/2023"
    },

]
function ajustarAlturaBarraPosts() {
    const areaPosts = document.getElementById("areaPosts");
    const alturaTotalPosts = areaPosts.scrollHeight;
    areaPosts.style.height = alturaTotalPosts + "px";
}


function criarNovoPost(texto, imagem) {
    let novoPostHTML = `
        <div class="comment post white-blue-bg">
            <div class="info-person">
                <a href="" class="a-img"><img class="img-person" src="../Perfil/assets/img/shinji.jpg" alt="foto de perfil"></a>
                <h3>Nome do Usuário</h3>
                <p>Data do Post</p>
                <div class="trash">
                    <a href="" class="a-img"><img src="../Perfil/assets/img/trash-2.svg" alt="icone de lixeira"></a>
                </div>
            </div>
            <div class="text">
                <p>${texto}</p>
                <img src="${imagem}" alt="Imagem do post">
            </div>
            <div class="vector">
                <button type="button" class="button-img" id="open-modal">
                    <img src="../Perfil/assets/img/balao-de-fala.svg" alt="Ícone de balão">
                </button>
            </div>
        </div>`;

    areaPosts.innerHTML += novoPostHTML;
}

// Mantenha o código existente para exibir os posts
posts.forEach(objeto => {
    let postHTML = `
        <div class="comment post white-blue-bg">
            <div class="info-person">
                <a href="" class="a-img"><img class="img-person" src="${objeto.foto}" alt="foto de perfil"></a>
                <h3>${objeto.nome}</h3>
                <p>${objeto.data}</p>
                <div class="trash">
                    <a href="" class="a-img"><img src="../Perfil/assets/img/trash-2.svg" alt="icone de lixeira"></a>
                </div>
            </div>
            <div class="text">
                <p>${objeto.texto}</p>
                <img class="img-post" src="${objeto.fotoPost}" alt="imagem da postagem">
            </div>
            <div class="vector">
                <button type="button" class="button-img" id="open-modal">
                    <img src="../Perfil/assets/img/balao-de-fala.svg" alt="Ícone de balão">
                </button>
            </div>
        </div>`;
    areaPosts.innerHTML += postHTML;

});
window.addEventListener("load", () => {
    ajustarAlturaBarraPosts();
});



const opemModal = document.querySelectorAll(".button-img");
const closeModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

var simplemde = new SimpleMDE({ element: document.getElementById("editorMarkdown") });

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))

};

[closeModal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());

});

opemModal.forEach((el) => {
    el.addEventListener("click", () => toggleModal());

});

function enviarPost() {
    const conteudoMarkdown = simplemde.value();

    console.log('Post enviado com sucesso');

    // Renderiza o conteúdo Markdown para HTML
    var md = window.markdownit();
    var result = md.render(conteudoMarkdown);

    const elementoDoModal = document.getElementById('text');

    // Defina o conteúdo desse elemento como o conteúdo renderizado
    elementoDoModal.innerHTML = result;
} 