import { Post } from "../../backEnd/model/Post.js";
import {PrismaClient} from "@prisma/client"

const Client = new PrismaClient()

export class comentarioControllers{


    async novoComentario(texto,id){
        const Post = await Client.Post.findUnique({
            where:{
                "postId": id
            }
        })
        const comentario = await Client.Post.create({
            data:{
                texto:texto,
                postId:Post.id
            }
        })
        return comentario
    }
}