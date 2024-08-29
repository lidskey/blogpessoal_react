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

                        <li className="hover:underline">Postagens</li>
                    <li> <Link to='/temas' className='hover:underline'>Tema</Link></li>
                    <li><Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link></li>
                    <li className="hover:underline">Perfil</li>
                    <Link to= '' onClick={logout} className="hover:underline">
                        <li>Sair</li>
                    </Link>

                </ul>
            </div>
        </div>
        
)
}

export default Navbar