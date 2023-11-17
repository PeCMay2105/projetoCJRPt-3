
import app from "../server/app.js";
import { Post } from "../model/Post.js";
import { publicacoes } from "../model/publicacoes.js";

let pubs = new publicacoes()
const postsExistentes = pubs.posts


app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/newUser",(req,res)=>{
    console.log("rota funcionando")
    const {Nome,email,senha,foto} = req.body;
    try{
        const user = pubs.novoUsuario(Nome,email,senha,foto)
        res.status(201).json(user)
    }
    catch(e){
        console.log(e)
        console.log("Não foi possível adicionar o usuário")
    }

})

app.post("/newPost",(req,res)=>{

    const {usuario,texto,temFoto,foto} = req.body
    try{
        const post = pubs.novoPost(usuario,texto,temFoto,foto)
        res.status(201).json(post)
    }
    catch(erro){
        res.status(400)
        console.log(erro)

    }
})

app.get("/usuarios", (req,res)=>{
    const usuarios = pubs.listaUsuarios
    res.status(200).json(usuarios)
})