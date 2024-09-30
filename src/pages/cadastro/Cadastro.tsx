

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Cadastro.tsx'
import Usuario from '../../models/Usuario.ts'
import { useNavigate } from 'react-router-dom'
import { cadastrarUsuario } from '../../services/Service.ts';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlerta } from '../../utils/ToastAlerta.ts';
import PicCredits from '../../components/credits/PicCredits.tsx';

function Cadastro() {
  //hook useNavigate para redirecionar rotas
  const navigate = useNavigate();

  //estado que vai guardar a confirmação da senha
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  //estado que vai indiciar quando a animação loader será crregada
  const [isLoading, setIsLoading] = useState<boolean>(false)

  //estado que vai guardar os dados do meu usuario
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
  })


  //useEffect para monitorar o estado usuario
  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  //redireciona para o componente login (rota /login)
  function retornar() {
    navigate('/login')
  }


  //função que atualiza as propriedades do estado usuario
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }


  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) { //dispara o form para o back
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {

        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        ToastAlerta("Usuário Cadastrado com Sucesso!", 'sucesso')

      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro')

      }

    } else {
      ToastAlerta("Dados inconsistentes! Verifique as informações do Cadastro.", 'erro')
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }
    setIsLoading(false)
  }



  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="lg:block hidden fundoCadastro">
          {" "}
          <img
            className="w-full object-cover border-2 border-slate-900"
            src="https://ik.imagekit.io/lidskey/maos-com-laptop-na-mesa-de-madeira-no-cafe-cafe_53876-16124.jpg_t=st=1727725375~exp=1727728975~hmac=60f1cf08917e4dd8e8e54b2d95eb825569f1a5489a97bb9334aff92fe53c151d&w=740?updatedAt=1727725469185"
            alt="Login Blog"
          />
        </div>

        <form
          onSubmit={cadastrarNovoUsuario}
          className="flex justify-center items-center flex-col w-2/3 gap-3"
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Url da foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded text-white bg-slate-900 hover:bg-yellow-500 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>

            <button
              className="rounded text-white bg-slate-900 hover:bg-yellow-500 w-1/2 py-2 flex justify-center"
              type="submit"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
      <PicCredits />
    </>
  );
}

export default Cadastro