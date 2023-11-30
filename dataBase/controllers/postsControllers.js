import { Post } from "../../backEnd/model/Post.js";
import {PrismaClient} from "@prisma/client"

const Client = new PrismaClient()

export class postControllers{


    async novoPost(usuarioMail,texto,temImg,imagem){
        const User = await Client.Usuario.findUnique({
            where:{
                "email": usuarioMail
            }
        })
        console.log("id do usuario: ")
        console.log(User.id)
        const post = new Post(usuarioMail,texto,temImg,imagem)
        const newPost = await Client.Post.create({
            data:{
                texto:texto,
                imagem:temImg,
                //conteudoImagem:imagem,
                UsuarioId:User.id
            }
        })
        return newPost
    }
    async retornaPosts(){
        const posts = await Client.Post.select.findMany()
    }
}