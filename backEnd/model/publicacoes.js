import { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();


export class publicacoes{
    usuarios = []
    posts = []
    

    novoPost(usuario,texto,temImg,imagem){
        const criaPost = ()=>{
            posts.push(new Post(usuario,texto,temImg,imagem))
        }

    }

    
    listaPosts(){
        return posts
    }
}
