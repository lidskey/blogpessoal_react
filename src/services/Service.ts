import axios from "axios";

const api = axios.create({
    baseURL: "import.meta.env.VITE_API_URL",
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.post(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const login = async (url: string, dados: Object, setDados: Function) => { //envia a requisição backend
    const resposta = await api.post(url, dados) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const buscar = async (url: string, setDados: Function, header: Object) => { //envia a requisição backend
    const resposta = await api.get(url, header) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

//função que envia requisições do tipo post com o token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
}

//função que envia requisições do tipo put com o token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => { //envia a requisição backend
    const resposta = await api.put(url, dados, header) //retorna
    setDados(resposta.data)  //retorna a atualização de estado
}

export const deletar = async (url: string, header: Object) => { 
    await api.delete(url, header) 
}