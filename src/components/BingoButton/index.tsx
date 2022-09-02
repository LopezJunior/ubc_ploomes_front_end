import React, { useEffect, useState, useContext } from "react";
import { RoomContext } from "Contexts/room";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import * as S from "./style";
import tool from "../../assets/img/tool.png";
import sino from "../../assets/img/sino.png";
import {
  RoomServices,
  RoomServicesCheckBingoParams,
} from "services/roomServices";
import { RoutePath } from "types/routes";

const BingoButton = () => {
  const [errors, setErrors] = useState(3);
  const context = useContext(RoomContext);
  const navigate = useNavigate();

  async function handleBingoClick() {
    const room = context?.room()!;
    const cards = context?.getCards();
    const postCards: RoomServicesCheckBingoParams[] = [];

    cards?.map((card, index) => {
      let _card = {
        id: card.id,
        vetor: card.vetor,
        markings: card.selecteds,
      };
      if (card.selecteds && card.selecteds.length > 4) {
        postCards.push(_card);
      }
    });

    if (postCards.length === 0) {
      swal({
        title: "Marcar Cartelas",
        text: "Número insuficiente de marcações na(s) cartela(s) !",
        icon: "warning",
      });
      return;
    }

    //
    let drawNumbers = context?.getDrawNumbers()!;
    let gameTime = context?.getGameTime();

    //console.log('draw numbers:', drawNumbers );

    // envia dados da sala e das cartelas para o backend
    console.log(drawNumbers);
    const resp = await RoomServices.checkBingo(room, drawNumbers, postCards);

    if (resp.KO) {
      console.log("vitoria", resp);
      navigate(RoutePath.VICTORYMODAL, {
        state: {
          resp: resp,
          gameTime: gameTime,
          drawNumbers: drawNumbers.length,
        },
      });
    } else {
      setErrors(errors - 1);
      if (errors > 0) {
        Swal.fire({
          icon: "error",
          title: `Numeros incorretos: `,
          text: ` Você não marcou os numeros corretamente, 
          e como punição não podera mais acessar estas
           funções por 3 segundos 
          Erros restantes: ${errors - 1}`,
          timer: 5000,
          showConfirmButton: false,
        });
        let div: any = document.querySelector("#full");
        div.style.display = "none";
        setTimeout(() => {
          div.style.display = "flex";
        }, 30000);
      } else
        navigate(RoutePath.DEFEATMODAL, {
          state: { gameTime: gameTime, drawNumbers: drawNumbers.length },
        });
    }
    return;
  }

  // envia dados da sala e das cartelas para o backend
  //   const resp = await RoomServices.checkBingo(room, postCards);

  //   //
  //   let drawNumbers = context?.getDrawNumbers();
  //   let gameTime = context?.getGameTime();

  //   if (resp.KO == true) {
  //     console.log("ganhour", room);
  //     navigate(RoutePath.VICTORYMODAL, {
  //       state: { gameTime: gameTime, drawNumbers: drawNumbers },
  //     });
  //   } else {
  //     console.log(resp, "perdeu");
  //     // navigate(RoutePath.DEFEATMODAL, {
  //     //   state: { gameTime: gameTime, drawNumbers: drawNumbers },
  //     // });
  //   }
  //   return;
  // }

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
      <S.Content id="full">
        <S.ActionButton>
          <S.ImageBox>
            <S.Image
              src={sino}
              onClick={handleBingoClick}
              title={"Clique para verificar o bingo"}
            />
          </S.ImageBox>
          <S.ButtonTitle>{"Bingo"}</S.ButtonTitle>
        </S.ActionButton>

        <S.ActionButton>
          <S.ImageBox>
            <S.Image
              src={tool}
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
