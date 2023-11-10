
console.log("teste")
areaPosts = document.getElementById("areaPosts")
console.log(areaPosts)
posts = [
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
    {
        "id":"0",
        "nome": "Usuario",
        "foto":"../assets/fotoDefault.png",
        "texto":"Cjr é top",
        "data":"09/10/2023"
    },
]

// quando o backend estiver pronto esse objeto vai ser dinamico de acordo com as mensagens do feed


posts.forEach(objeto => 
     areaPosts.innerHTML += `<div class="post" >
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
             <img class="comentario" src="./assets/balao-de-fala.png">
             <img class="editar" src="./assets/editar-texto.png">
         </div>
     </div>
 </div>`
)