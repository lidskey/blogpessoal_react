import Postagem from "./Postagem"

export default interface Usuario{
    id: number
    nome: string
    usuario: string
    foto: string
    senha: string
    postagem?: Postagem | null /* ? indica q é opcional */
}