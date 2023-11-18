// -----------------------------------------------------------------------------
//  Quando tiver os dados já no banco de dados alterar os meus campos do html/css
// const usuario = {
//     nome: "Fulano de Tal",
//     foto: "./caminho/para/foto.jpg",
//     cargo: "Desenvolvedor",
//     email: "fulano@example.com"
//   };
//   document.querySelector(".foto_usuario").src = usuario.foto;
//   document.querySelector(".nome_usuario").textContent = usuario.nome;
//   document.querySelector(".cargo").textContent = usuario.cargo;
//   document.querySelector(".email").textContent = usuario.email;
// -----------------------------------------------------------------  
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
    if (objeto.flag === "2"){
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
    }else{
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
                <a href="" class="a-img"><img src="assets/img/Vector.svg" alt="icone de editar"></a>
            </div>

        </div>`
    }
    

    // Auto ajuste da altura do painel de fundo 
    //const novoConteudoHeight = areaPosts.clientHeight; // altura do novo post adicionado
    //areaPosts.style.minHeight = `${novoConteudoHeight}px`;
});

