import PicCredits from "../../components/credits/PicCredits";
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
      <>
        <div className="bg-slate-900 flex justify-center">
          <div className="container grid grid-cols-2 text-white">
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className="text-4xl font-bold">Fale sobre o que estiver pensando!</h2>
              <p className="text-xl">
                Expresse aqui seus pensamentos e opiniões
              </p>

              <div className="flex justify-around gap-4">
                <div className="flex justify-around gap-4">
                  <ModalPostagem />
                </div>
              </div>
            </div>

            <div className="flex object-fill justify-center">
              <img
                src="https://ik.imagekit.io/lidskey/vista-aerea-de-computador-laptop-ligado-madeira-tabela-passatempo-fotografia-conceito_53876-30614.jpg_t=st=1727724924~exp=1727728524~hmac=a544de00c8a42d9ad8b6421757b4486eaa7d3c95a91e1e136cd1bfc1d162cecd&w=900?updatedAt=1727725496350"
                alt="Imagem Página Home"
                className="w-2/3"
              />
            </div>
          </div>
        </div>

        <ListaPostagens />

        <PicCredits />
      </>
    );
}

export default Home