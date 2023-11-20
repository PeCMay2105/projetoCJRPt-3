import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()


// função de criar post recebe um usuario, um conteudo para o post, o booleano que indica se tem imagem associada e a imagem
async function NewPost(usuario,texto,temImg,img){
    await prisma.Post.create({
        data:{
            texto:texto,
            imagem:temImg,
            conteudoImagem:img,
            usuario:usuario
        }
    })
}

async function NewUser(Nome,email,senha,adm,foto,bio){
    await prisma.Usuario.create({
        data:{
            nome:Nome,
            email:email,
            senha:senha,
            adm:adm,
            foto:foto,
            bio:bio
        }
    })
}

export default prisma;