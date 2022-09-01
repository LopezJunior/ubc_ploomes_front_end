import React, { useState, useEffect, useContext } from "react";
import * as S from "./style"
import { RoomServices } from 'services/roomServices'
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import { RoomContext } from "Contexts/room";

interface DefeatStateParams  {
  gameTime: string;
  drawNumbers: string;
}

const Defeat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();
  const status = useLocation()

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
      navigate(RoutePath.HOMEPAGE);
    });
  }

  function restart() {
    setIsOpen(false);

    navigate(RoutePath.HOMEPAGE, { state: { begin: false } } );
  }

  function sair() {
    setIsOpen(false);

    navigate(RoutePath.HOMEPAGE );
  }

	function geDrawNumber() {
		let params =status.state as DefeatStateParams;

    return params.drawNumbers;
  }		

  function geGameTime() {
		let params =status.state as DefeatStateParams;

		return params.gameTime;
  }	

  return (
    <div>

      {/* <button onClick={toggleModal}> Open modal </button> */}

      <S.StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ opacity }} 
        >
        <S.ModalContent>

          <S.Header>
            
            <S.WhiteSmallBox> 
                <S.Text> {geDrawNumber()} </S.Text> 
                <S.Text> número  </S.Text> 
                <S.Text> sorteados </S.Text> 
            </S.WhiteSmallBox> 

            <S.WhiteLargeBox>
              <S.Text> infelizemente não foi desta vez, você foi nocauteado, mas pode tentar novamente!! </S.Text> 
            </S.WhiteLargeBox>

            <S.WhiteSmallBox> 
              <S.Text> {geGameTime()} </S.Text> 
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

export default Defeat;
