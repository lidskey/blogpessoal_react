import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormularioTema from "./components/temas/formtema/FormularioTema"
import DeletarTema from "./components/temas/deletartema/DeletarTema"


function App() {
  //código typescript
  
 
  return (
    //o return tem oq vai aparecer na tela
    //codigo tsx equivalente a html e css
    <>
     
        <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormularioTema />} />
              <Route path="/editartema/:id" element={<FormularioTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
      <Footer />
        </BrowserRouter>
      </AuthProvider>
          
    </>

  )
}

export default App
