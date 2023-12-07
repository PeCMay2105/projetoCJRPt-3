import { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();


export class publicacoes{

    

    novoPost(usuario,texto,temImg,imagem,UsuarioId){
        const criaPost = ()=>{
            posts.push(new Post(usuario,texto,UsuarioId,temImg,imagem))
        }

    }

    
    listaPosts(){
        return posts
    }
}
