import express from "express"
import app from "../../backEnd/server/app.js"
import { UsuarioController } from "./usuarioControllers.js"

const controladorDeUsuario = new UsuarioController()


app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/novoUsuario",(req,res)=>{
    const {nome,email,senha,bio,adm} = req.body
    const result = controladorDeUsuario.criarUsuario(nome,email,senha,foto,bio,adm)
    res.send(201).json(result)
})