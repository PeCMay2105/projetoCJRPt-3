 areaPosts = document.getElementById("areaPosts")

posts = [
    {
        "id": "0",
        "flag": "1",
        "nome": "joãozin gameplay",
        "foto": "./assets/img/shinji.jpg",
        "fotoPost": "./assets/img/R.jpg",
        "texto": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur recusandae soluta laborum voluptas, dolores fuga ad maiores impedit doloribus officia, totam molestiae deserunt explicabo enim nisi corporis amet harum voluptate.",
        "data": "16/11/2023"
    },
    {
        "id": "0",
        "flag": "2",
        "nome": "joãozinha tiktoker",
        "foto": "./assets/img/asuka.jpg",
        "fotoPost": "./assets/img/neon-genesis-evangelion-evas-wallpaper-2.jpg",
        "texto": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur recusandae soluta laborum voluptas, dolores fuga ad maiores impedit doloribus officia, totam molestiae deserunt explicabo enim nisi corporis amet harum voluptate.",
        "data": "16/11/2023"
    },

]

posts.forEach(objeto => {
    if (objeto.flag === "2") {
        areaPosts.innerHTML += `
        <div class="comment post white-blue-bg">
            <div class="info-person">
                <img class="img-person"  src="${objeto.foto}" alt="foto de perfil">
                <h3>${objeto.nome}</h3>
                <p>${objeto.data}</p>
            </div>
            <div class="text">
                <p>${objeto.texto}</p>
                <img class="img-post" src="${objeto.fotoPost}" alt="imagem da postagem">
            </div>
        </div>`;
    } else {
        areaPosts.innerHTML += `
        <div class="comment post white-blue-bg">
            <div class="info-person">
                <a href="" class="a-img"><img class="img-person" src="${objeto.foto}" alt="foto de perfil"></a>
                <h3>${objeto.nome}</h3>
                <p>${objeto.data}</p>
                <div class="trash">
                    <a href="" class="a-img"><img src="assets/img/trash-2.svg" alt="icone de lixeira"></a>
                </div>
            </div>

            <div class="text">
                <p>${objeto.texto}</p>
                <img class="img-post" src="${objeto.fotoPost}" alt="imagem da postagem">
            </div>

            <div class="vector">
                <button type="button" class="button-img" id="open-modal">
                    <img src="assets/img/Vector.svg" alt="Ícone de editar">
                </button> 
            </div>

        </div>`
    }
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
