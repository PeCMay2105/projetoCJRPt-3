
import app from "../server/app.js";
import client from "./prisma/client.js"

app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000")
})

app.post("/novoUsuario",(req,res)=>{
    const {nome,email,senha,foto,bio} = req.body
    res.send(201).json(req.body)

})
