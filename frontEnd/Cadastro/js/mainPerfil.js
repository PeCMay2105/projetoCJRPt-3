// document.getElementById('imagemPerfil').addEventListener('click', function () {
//     document.getElementById('seletorDeArquivo').click();
// });
// document.getElementById('seletorDeArquivo').addEventListener('change', function () {
//     var file = this.files[0];
//     if (file) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             document.getElementById('imagemPerfil').src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// });

// Para a ação de clique na imagem
var imagensPerfil = document.querySelectorAll('#imagemPerfil, #imagemPerfil1');
imagensPerfil.forEach(function (imagemPerfil) {
    imagemPerfil.addEventListener('click', function () {
        document.getElementById('seletorDeArquivo').click();
    });
});

// Mudar quando a imagem for selecionada
document.getElementById('seletorDeArquivo').addEventListener('change', function () {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.querySelectorAll('#imagemPerfil, #imagemPerfil1').forEach(function (imagemPerfil) {
                imagemPerfil.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
}); 

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('Nome').value;
    const senha = document.getElementById('Senha').value;
    const email = document.getElementById('Email').value;
    const bio = document.getElementById('Bio').value;
    const adm = document.getElementById('Cargo').value;

    const obj ={
        nome: nome,
        email: email,
        senha: senha,
        bio: bio,
        adm: adm
    }
    const url = 'http://localhost:3000/novoUsuario';
    try{
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        }) 
    }catch (error) {
        console.log(error)
    }
    

});




