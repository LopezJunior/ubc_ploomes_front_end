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
          <h2>Academia UBC</h2>
          <article>
            Seja bem vindo ao UBC! Eu serei o seu treinador.
            <br /> Você quer competir conosco?? Hahahaha!!<br/>
            Você ainda precisa treinar muito na nossa academia antes de disputar com alguém. 
            Por enquanto você só vai lutar contra o seu reflexo, esse é o caminho do auto-desenvolvimento.
            <br/><br/>
            <b>Arrume um espaço para você:</b>
            <br/>
            Escolha quantas cartelas você precisa (1 a 3), a velocidade do sorteio (1s a 10s) e quantas 
            bolas serão suficientes para você Bingar (limite de sorteio)!!
          </article><br/>
          {/* <h3>Presta atenção!!</h3> */}
          <article>
          <b>Presta atenção!!</b>
            <br/>
            Você pode marcar a sua cartela à vontade, mas não adianta roubar no jogo, 
            os juízes consideram apenas os números marcados que já foram sorteados. 
          </article>
          {/* <article>Bolas ou Pedras: 75</article> */}
          {/* <article> */}
            {/* Cartela: grande com 25 espaços */}
            {/* <br /> */}
            {/* 25 espaços livres a preencher conforme sorteio das bolas(ou pedras). */}
          {/* </article> */}
          {/* <article> */}
            {/* Poderes ou Powerups: são elementos específicos que podem agilizar e */}
            {/* Formas de vencer: Marcando 5 numeros na diagonal, vertical ou */}
            {/* Horizontal */}
            {/* <br /> */}
            {/* melhorar a sua jogada. */}
          {/* </article> */}
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
