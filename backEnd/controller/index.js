//import { publicacoes } from "../model/publicacoes.js";
import { Usuario } from "../model/Usuario.js"
import { Router } from "express";

<<<<<<< HEAD
import app from "../server/app.js";
import client from "./prisma/client.js"

app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/novoUsuario",(req,res)=>{
    const {nome,email,senha,foto,bio} = req.body
    res.send(201).json(req.body)

})
=======
const router = Router();

let user = new Usuario()
//let pubs = new publicacoes()
const postsExistentes = pubs.posts

router.post("/newUser",async (req,res)=>{
    console.log("rota funcionando")
    const {Nome,email,senha,foto} = req.body;
    try{
        const newUser = await user.novoUsuario(Nome,email,senha,foto)
        res.status(201).json(newUser)
    }
    catch(e){
        console.log(e)
        console.log("Não foi possível adicionar o usuário")
    }

})

router.get("/usuarios", async (req,res)=>{
    const usuarios = await user.listaUsuarios
    res.status(200).json(usuarios)
})

router.delete("/deleteuser/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const message = await user.removerUsuario(id);
        res.status(200).json({ message });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
})
/*
router.post("/newPost",(req,res)=>{

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
*/
export default router;
>>>>>>> 31559985aac5e596cfc4b8b05cd16bb8af82345f
