import React, { useState } from "react";
import * as S from "./style"

function ConfigStyled() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    //setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <div>
      <button onClick={toggleModal}>Open modal</button>
      <S.StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        /*opacity={opacity}*/
        backgroundProps={{ opacity }} 
        >
        <S.Content>

          <S.ImageBox>
            <S.Image src="assets/img/ufc-cinturao.png" />
          </S.ImageBox>

          <S.Form>
            <S.Title> CONFIGURAÇÃO </S.Title>

            <input id="n_cartelas" placeholder="Número De Cartelas"></input>
            <input id="proxima_bola" placeholder="Tempo para Próxima Bola"></input>
            <input id="limite_sorteio" placeholder="Número De Sorteios"></input>
            
            <S.ButtonBox>
              <S.Button> Compartilhar </S.Button>
              <S.Button> Iniciar Jogo </S.Button>
            </S.ButtonBox>
            
          </S.Form>

        </S.Content>

      </S.StyledModal>
    </div>
  );
}

export default ConfigStyled;


/*
function App() {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <div className="App">
        <h1>Hello styled-react-modal</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FancyModalButton />
      </div>
    </ModalProvider>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/