import { Post } from "../../backEnd/model/Post.js";
import {PrismaClient} from "@prisma/client"

const Client = new PrismaClient()

export class postControllers{


    async novoPost(usuarioMail,texto,temImg,imagem,UsuarioId){
        User = await Client.Usuario.findUnique({
            where:{
                email: usuarioMail
            }
        })
        const post = new Post(usuarioMail,texto,temImg,imagem,UsuarioId)
        const newPost = await Client.Post.create({
            data:{
                texto:post.texto,
                usuario:user,
                UsuarioId:post.UsuarioId,
                imagem:temImg,
                conteudoImagem:imagem,
                usuarioId:user.id
            }
        })
        return newPost
    }
}