import React, { useState } from "react";
import * as S from "./style"

function Config() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
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
        <S.ModalContent>

          <S.ImageBox>
            <S.Image src="assets/img/cinturao.png" />
          </S.ImageBox>

          <S.Form>
            <S.Title> CONFIGURAÇÃO </S.Title>

            <input id="num_cartelas" placeholder="Número De Cartelas"></input>
            <input id="prox_bola" placeholder="Tempo para Próxima Bola"></input>
            <input id="lim_sorteio" placeholder="Número De Sorteios"></input>
            
            <S.ButtonBox>
              <S.Button> Compartilhar </S.Button>
              <S.Button> Confirmar </S.Button>
            </S.ButtonBox>
            
          </S.Form>

          <S.CloseModalButton
            aria-label='Close modal'
            onClick={() => setIsOpen(false)}
          />          

        </S.ModalContent>

      </S.StyledModal>
    </div>
  );
}

export default Config;

/*
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/