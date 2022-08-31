import React, { useState, useEffect, useContext } from "react";
import * as S from "./style"
import { RoomServices } from 'services/roomServices'
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import { RoomContext } from "Contexts/room";
import moment from "moment";

interface DefeatParams  {
  drawn_numbers: number;
  game_time: number;
  callRestart: () => void;
  callGetout: () => void;
}


const Defeat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const context = useContext( RoomContext );
  const navigate = useNavigate();
  let t = context?.getTime()! ;

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

  async function roomLoad() {
    //const response = await RoomServices.getRoom( game.roomId );
    //setGame( response );
  };

  function restart() {
    setIsOpen(false);

    navigate(RoutePath.HOMEPAGE, { state: { begin: false } } );
  }

  function sair() {
    setIsOpen(false);

    navigate(RoutePath.HOMEPAGE );
  }


  useEffect( () => {

    var ms = moment(new Date,"DD/MM/YYYY HH:mm:ss").diff(moment(t,"DD/MM/YYYY HH:mm:ss"));

    console.log( 'ms:', ms);
    console.log( 'ms:', moment(ms).format("h:mm:ss") );
    

  }, [] );

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
                <S.Text> {1} </S.Text> 
                <S.Text> número  </S.Text> 
                <S.Text> sorteados </S.Text> 
            </S.WhiteSmallBox> 

            <S.WhiteLargeBox>
              <S.Text> infelizemente não foi desta vez, você foi nocauteado, mas pode tentar novamente!! </S.Text> 
            </S.WhiteLargeBox>

            <S.WhiteSmallBox> 
              <S.Text> { moment( t ).format("mm:ss") } </S.Text>
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
