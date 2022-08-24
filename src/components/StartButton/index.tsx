import * as S from "./style";
import logo from "../../assets/img/cinturao_iniciar.png";
import { useEffect, useState } from "react";
import Buttons from "components/ButtonRedLarge";
import Logo from "components/Logo";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import { RoomServices, RoomServicesStartParams } from "services/roomServices";
import { Room } from "./type";
import Swal from "sweetalert2";

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [values, setValues] = useState<Room>({
    id: "",
    number: null,
    maxCards: "3",
    limitPrizeDraw: "75",
    limitRecord: "",
    limitUsers: "2",
    price: "10",
    frequency: "10",
    historic: [],
  });
  const navigate = useNavigate();

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

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: Room) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  async function play() {
    const _params: RoomServicesStartParams = {
      limitPrizeDraw: +values.limitPrizeDraw,
      maxCards: +values.maxCards,
      frequency: +values.frequency,
    };

    // tenta iniciar uma sala
    const resp = await RoomServices.start(_params);

    if (resp.room) {
      const postData = {
        room: resp.room,
        vetor: resp.card.vetor,
      };
      navigate("/bingo", { state: postData });
    }
    return;
  }

  async function tokenVerify() {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate(RoutePath.AUTHLOGIN);
      return;
    }
  }

  useEffect(() => {
    tokenVerify();
  }, []);

  let modalInfo = () => {
    Swal.fire({
      icon: "question",
      title: "Configurações de jogo:",
      text: `-Numero de cartelas: Escolha a quantidades de cartelas para utilizar durante o jogo                           
      -Tempo Próxima bola: Escolha o tempo(segundos) de intervalo para sorteios de novas bolas
      -Limite sorteios: Para aumentar a dificuldade, é possivel escolher uma quantidade maxima de bolas sorteadas!
      `,
      // footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  return (
    <div>
      <S.StartButton onClick={toggleModal}>
        <img src={logo} />
      </S.StartButton>

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
            <Logo />
          </S.ImageBox>

          <S.Form>
            <S.LineTitle>
              <S.Info onClick={modalInfo}>?</S.Info>
              <S.Title> CONFIGURACAO </S.Title>
            </S.LineTitle>

            <S.FormGroup>
              <label> Número Cartelas: </label>
              <input
                name="maxCards"
                value={values.maxCards}
                required
                onChange={handleChangesValues}
              />
            </S.FormGroup>

            <S.FormGroup>
              <label> Tempo Próxima Bola (segundos) </label>
              <input
                name="frequency"
                value={values.frequency}
                onChange={handleChangesValues}
              />
            </S.FormGroup>

            <S.FormGroup>
              <label> Limite Sorteios </label>
              <input
                name="limitPrizeDraw"
                value={values.limitPrizeDraw}
                onChange={handleChangesValues}
              />
            </S.FormGroup>

            <S.ButtonBox>
              <Buttons value={"compartilhar"} type={"button"} />
              <Buttons value={"Jogar"} type={"button"} onClick={play} />
            </S.ButtonBox>
          </S.Form>

          <S.CloseModalButton
            aria-label="Close modal"
            onClick={() => setIsOpen(false)}
          />
        </S.Content>
      </S.StyledModal>
    </div>
  );
};

export default StartButton;
