import React, { useState } from "react";
import * as S from "./style"
import { RoomServices } from 'services/roomServices'

function Config() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function restart() {

    // RoomServices.start()

    setIsOpen(false);
  }

  function sair() {
    setIsOpen(false);
  }

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
      <button onClick={toggleModal}> Open modal </button>
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

          <S.Header>

            <S.WhiteSmallBox> 
                <S.Text> 32 </S.Text> 
                <S.Text> número  </S.Text> 
                <S.Text> sorteios </S.Text> 
            </S.WhiteSmallBox> 

            <S.WhiteLargeBox>
              <S.Text> infelizemente não foi desta vez, você foi nocauteado, mas pode tentar novamente!! </S.Text> 
            </S.WhiteLargeBox>

            <S.WhiteSmallBox> 
              <S.Text> 10:32 </S.Text> 
              <S.Text> tempo  </S.Text> 
              <S.Text> partida </S.Text> 
            </S.WhiteSmallBox> 

          </S.Header>

          <S.CloseModalButton
              aria-label='Close modal'
              onClick={() => setIsOpen(false)}
          />          

          <S.ImageBox>
            <S.Image src="assets/img/gloves.png" />
          </S.ImageBox>

          <S.Footer>
            <S.buttonWhite onClick={restart}>restart</S.buttonWhite>
            <S.buttonWhite onClick={sair} >sair</S.buttonWhite>
          </S.Footer>
            
        </S.ModalContent>

      </S.StyledModal>
    </div>
  );
}

export default Config;

