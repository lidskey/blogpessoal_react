



function Home() {
  return (
      <div style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          
      }}>
          <div>
              <div style={{
                  width: "80vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
              }}>
                  <h2>Seja bem vinde!</h2>
                  <p>Expresse aqui seus pensamentos e opiniões</p>
              </div>
              <div style={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  
              }}>
              <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem da Página Home" width="400px">
                  </img>
              </div>
          </div>
    </div>
  )
}

export default Home