import { Post }  from '../model/Post.js';
import {PrismaClient} from "@prisma/client"

const Client = new PrismaClient()

export class comentarioControllers{


    async novoComentario(texto,id){
        console.log(id)
        const Post = await Client.Post.findUnique({
            where:{
                "id": id
            }
        })
        const comentario = await Client.Comentario.create({
            data:{
                texto:texto,
                PostId:Post.id
            }
        })
        return comentario
    }
}