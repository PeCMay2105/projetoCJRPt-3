import { Post } from "./Post.js"
import { Usuario } from "./Usuario.js"

 export class publicacoes{
    usuarios = []
    posts = []
    novoUsuario(Nome,email,senha,foto,bio){

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
    }

    novoPost(usuario,texto,temImg,imagem){
        const criaPost = ()=>{
            posts.push(new Post(usuario,texto,temImg,imagem))
        }

    }

    listaUsuarios(){
        return usuarios
    }
    listaPosts(){
        return posts
    }
}