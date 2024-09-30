import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import AuthContext from "../../contexts/AuthContext";
import { ReactNode, useContext } from "react";

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode;

    if (usuario.token !== "") {

        component = (
          <div className="bg-slate-900 flex justify-center text-white py-8 text-center">
            <div className="text-xl-3">
              <p className="font-bold">
                Desenvolvido por Liara Cristina {data}
              </p>
              <p className="font-thin">Acesse minhas redes sociais</p>

              <div className="flex justify-center gap-2">
                <a
                  href="https://github.com/lidskey"
                  aria-label="Github"
                  rel="noopener"
                >
                  <GithubLogo size={34} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/liara-cristina-939313128/"
                  aria-label="Linkedin"
                  rel="noopener"
                />
                <LinkedinLogo size={34} weight="bold" />
              </div>
            </div>
          </div>
        );
    }
    
    return <>{component}</>;

  
}
export default Footer