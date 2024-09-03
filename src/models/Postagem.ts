import Tema from "./Tema"
import Usuario from "./Usuario"

export default interface Postagem {
    id: number
    titulo: string
    texto: string
    data: string
    descricao: Tema | null
    usuario: Usuario | null

}