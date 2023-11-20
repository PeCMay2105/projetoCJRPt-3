import {PrismaClient} from "@prisma/client"



const Cliente = new PrismaClient()

export class UsuarioController{
    async criarUsuario(nome,email,senha,foto,bio,adm){
        
            const user = await Cliente.Usuario.create({
                data:{
                    nome:nome,
                    email:email,
                    senha:senha,
                    //foto:foto,
                    bio:bio,
                    adm:adm
                }
            })
            return user
        
    }
}