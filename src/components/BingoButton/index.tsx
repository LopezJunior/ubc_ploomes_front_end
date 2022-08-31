import React, { useEffect, useState, useContext } from "react";
import { RoomContext } from "Contexts/room";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import * as S  from "./style"
import { RoomServices, RoomServicesCheckBingoParams } from "services/roomServices";
import { RoutePath } from "types/routes";


const BingoButton = () => {
  const context = useContext(RoomContext);
  const navigate = useNavigate();

    async function handleBingoClick() {
      const room =context?.room()!;
      const cards = context?.getCards();
      const postCards: RoomServicesCheckBingoParams[] = [];

      cards?.map((card, index) => {
        let _card = {
          id: card.id,
          vetor: card.vetor,
          markings: card.selecteds,
        };
        if( card.selecteds ) {
          postCards.push(_card);
        }
      });

      if( postCards.length === 0 ) {
        swal({
          title: "Marcar Cartelas",
          text: "Marque alguma cartela primeiro !",
          icon: "warning",
        });
        return;
      }

      // envia dados da sala e das cartelas para o backend
      const resp = await RoomServices.checkBingo( room, postCards );

      //
      let drawNumbers =context?.getDrawNumbers();
      let gameTime =context?.getGameTime();

      //console.log('draw numbers:', drawNumbers );

      if( resp.ko ) {
        navigate( RoutePath.VICTORYMODAL, { state: { gameTime: gameTime, drawNumbers: drawNumbers } } );
      } else {
        navigate( RoutePath.DEFEATMODAL, { state: { gameTime: gameTime, drawNumbers: drawNumbers } } );
      }
      return;
  }

  const handleGetoutClick = () => {
    swal({
      title: "Sair Do Jogo",
      text: "Você realmente quer sair do jogo?",
      icon: "warning",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      if (resp) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <S.Content>
        <S.ActionButton>
          <S.ImageBox>
            <S.Image
              src="assets/img/bingo.png"
              onClick={handleBingoClick}
              title={"Clique para verificar o bingo"}
            />
          </S.ImageBox>
          <S.ButtonTitle>{"Bingo"}</S.ButtonTitle>
        </S.ActionButton>

        <S.ActionButton>
          <S.ImageBox>
            <S.Image
              src="assets/img/desistir.png"
              onClick={handleGetoutClick}
              title={"Clique para terminar o jogo"}
            />
          </S.ImageBox>
          <S.ButtonTitle>{"Desistir"}</S.ButtonTitle>
        </S.ActionButton>
      </S.Content>
    </>
  );
};

export default BingoButton;
