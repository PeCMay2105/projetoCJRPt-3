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
console.log("Perfil_Deslogado")
areaPosts = document.getElementById("areaPosts")
console.log(areaPosts)
posts = [
    {
        "id": "0",
        "nome": "Usuario",
        "foto": "./assets/img/fotoDefault.png",
        "texto": "Texto longo de uma branca classe média alta sobre meritocracia",
        "data": "16/11/2023"
    },
    {
        "id": "0",
        "nome": "Usuario",
        "foto": "./assets/img/fotoDefault.png",
        "texto": "Outro branco reclamando da vida sendo que ele é sustentado pelos pais e não tem 1 boleto pra pagar",
        "data": "16/11/2023"
    },

]

posts.forEach(objeto => {
    areaPosts.innerHTML += `<div class="post">
        <div class="NomeEFoto">
            <img src="${objeto.foto}" class="fotoPost">
            <h3 class="nomePost">${objeto.nome}</h3>
            <p class="data">${objeto.data}</p>
        </div>
        <div class="box">    
            <div class="text">
                <h2 class="texto">${objeto.texto}</h2>
            </div>
            <div class="icones">
                
            </div>
        </div>
    </div>`;

    // Auto ajuste da altura do painel de fundo 
    const novoConteudoHeight = areaPosts.clientHeight; // altura do novo post adicionado
    areaPosts.style.minHeight = `${novoConteudoHeight}px`;
});