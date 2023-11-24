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




