import axios from "axios";

const api = axios.create({
    baseURL: "https://blogpessoal-fkop.onrender.com",
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.post(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const login = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.post(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}