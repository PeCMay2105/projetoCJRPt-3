import express from "express"
import app from "../../backEnd/server/app.js"
import { UsuarioController } from "./usuarioControllers.js"
import { postControllers } from "./postsControllers.js"
import { comentarioControllers } from "./comentarioControllers.js"

const controladorDeUsuario = new UsuarioController()
const controladorDePost = new postControllers()
const controladorDeComment = new comentarioControllers()
app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/novoUsuario",(req,res)=>{
    const {nome,email,senha,bio,adm} = req.body
    const result = controladorDeUsuario.criarUsuario(nome,email,senha,foto,bio,adm)
    res.send(201).json(result)
})

app.post("/newPost",(req,res)=>{
    const {usuarioMail,texto,temImg} = req.body
    try{
        const post = controladorDePost.novoPost(usuarioMail,texto,temImg)
        res.send(201).json(post)
    }catch(error){
        console.log(error)
    }
})

app.post("/newComment",(req,res)=>{
    const {texto,postId} = req.body
    try{
        const comment = controladorDeComment.novoComentario(texto,postId)
        res.send(201).json(comment)
    }catch(error){
        console.log(error)
    }
})