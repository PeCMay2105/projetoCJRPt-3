import express from "express"
import app from "../../backEnd/server/app.js"
import { UsuarioController } from "./usuarioControllers.js"
import { postControllers } from "./postsControllers.js"

const controladorDeUsuario = new UsuarioController()
const controladorDePost = new postControllers()

app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/novoUsuario",(req,res)=>{
    const {nome,email,senha,bio,adm} = req.body
    const result = controladorDeUsuario.criarUsuario(nome,email,senha,foto,bio,adm)
    res.send(201).json(result)
})

app.post("newPost",(req,res)=>{
    const {usuarioMail,texto,temImg,imagem,UsuarioId} = req.body
    try{
        const post = controladorDePost.novoPost(usuarioMail,texto,temImg,imagem,UsuarioId)
        res.send(201).json(post)
    }catch(error){
        console.log(error)
    }
})