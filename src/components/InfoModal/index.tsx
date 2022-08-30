import * as S from "./style";
import { useState } from "react";
import Logo from "components/Logo";
import { FiLogOut as Exit } from "react-icons/fi";

const InfoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
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
    <S.InfoModal>
      <S.Button onClick={toggleModal}>Info</S.Button>
      <S.StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        backgroundProps={{ opacity }}
      >
        <S.Content>
          <h2>INFORMAÇÕES SOBRE O BINGO:</h2>
          <br />
          <article>
            No Jogo, Bolas numeradas dentro de um globo são sorteadas
            individualmente.
            <br />O bingo possui uma grande variedade de regras e diferentes
            formas de vencer, pradões e marcações de pontuação, mas é muito
            simples e fácil de jogar.
          </article>
          <h2>DEFINIÇÕES:</h2>
          <article>Jogadores: sem Limite de usuários</article>
          <article>Bolas ou Pedras: 75</article>
          <article>
            Cartela: grande com 25 espaços
            <br />
            25 espaços livres a preencher conforme sorteio das bolas(ou pedras).
          </article>
          <article>
            {/* Poderes ou Powerups: são elementos específicos que podem agilizar e */}
            Formas de vencer: Marcando 5 numeros na diagonal, vertical ou
            Horizontal
            <br />
            {/* melhorar a sua jogada. */}
          </article>
          {/* <p>Falaremos mais deles adiante.</p> */}
          <S.Footer>
            <Logo />
            <Exit onClick={toggleModal} />
          </S.Footer>
        </S.Content>
      </S.StyledModal>
    </S.InfoModal>
  );
};

export default InfoModal;
