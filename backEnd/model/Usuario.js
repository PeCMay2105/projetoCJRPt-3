import { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();

export class Usuario {
    async novoUsuario(nome, email, senha, foto, bio) {
        return await prisma.Usuario.create({
            data: {
                nome,
                email,
                senha,
                foto,
                bio
            },
        }).catch(e => {
            if (e.code === 'P2002')
                throw new Error("Já existe um usuario cadastrado para esse email");

            throw e;
        });
    }

    async listaUsuarios() {
        return await prisma.Usuario.findMany();
    }

    async removerUsuario(id) {
        return await prisma.Usuario.delete({
            where: {
                id
            }
        }).catch(e => {
            if (e.code === 'P2025')
                throw new Error('Produto não encontrado')
            throw e;
        })
    }

    /*
        const criaUsuario = ()=>{
            if(this.usuarios[email]){
                throw new Error("Já existe um usuario cadastrado para esse email")
            }
            else{
                NovoUsuario = new Usuario(Nome,email,senha,foto,bio)
                this.usuarios[email] = NovoUsuario
                return novoUsuario
            }
        }
    */
}
