import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"

function Navbar() {

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)
    
    function logout(){
        handleLogout()
        alert("O usuário foi desconectado com sucesso!")
        navigate("/")
    }

    return (
        <div className="bg-indigo-900 flex justify-between text-white py-4">
            <div className="text-xl font-bold">
                <Link to='/home'>Blog Pessoal</Link>
            </div>

            <div>
                
                <ul className="flex *:px-1" >

                        <li>Postagens</li>
                        <li>Tema</li>
                        <li>Cadastrar tema</li>
                    <li>Perfil</li>
                    <Link to= '' onClick={logout} className="hover:underline">
                        <li>Sair</li>
                    </Link>

                </ul>
            </div>
        </div>
        
)
}

export default Navbar