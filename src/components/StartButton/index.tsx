import * as S from "./style";
import logo from "../../assets/img/cinturao_iniciar.png";
import { useEffect, useState } from "react";
import Buttons from "components/ButtonRedLarge";
import { Room } from "./type";
import { useLocation, useNavigate } from "react-router-dom";
import { RoomServices, RoomServicesStartParams } from "services/roomServices";
import { RoutePath } from "types/routes";
import Logo from "components/Logo";

interface StartButtonParams {
  begin: boolean;
}

const StartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [values, setValues] = useState<Room>({
    id: "",
    number: null,
    maxCards: 3,
    limitPrizeDraw: 75,
    limitRecord: 0,
    limitUsers: 2,
    prizeOrder: [],
    price: 10,
    frequency: 7,
    historic: [],
  });
  const navigate = useNavigate();
  const status = useLocation();

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
      navigate(RoutePath.HOMEPAGE);
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
    const audio = new Audio(time);
    audio.play();
    Swal.fire({
      imageUrl: " https://c.tenor.com/HC_g_9HMXB0AAAAd/its-time-ufc.gif ",
      imageWidth: 520,
      imageHeight: 300,
      timer: 7000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: "rgba(0,0,0,0)",
      color: "rgba(0,0,0,0)",
    });

    // tenta iniciar uma sala
    const resp = await RoomServices.start(_params);

    if (resp.room) {
      const postData = {
        room: {
          id: resp.room.id,
          number: resp.room.number,
          maxCards: resp.room.maxCards,
          limitPrizeDraw: resp.room.limitPrizeDraw,
          limitRecord: resp.room.limitRecord,
          limitUsers: resp.room.limitUsers,
          prizeOrder: resp.room.prizeOrder,
          price: resp.room.price,
          frequency: resp.room.frequency,
        },
        vetor: resp.cards,
      };
      setTimeout(() => {
        navigate("/bingo", { state: postData });
      }, 3000);
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

  function isBegin() {
    let StartParams = status.state as StartButtonParams;

    if (!status.state) {
      return true;
    }

    return StartParams.begin;
  }

  useEffect(() => {
    tokenVerify();

    if (!isBegin()) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      {isBegin() && (
        <S.StartButton onClick={toggleModal}>
          <img src={logo} />
        </S.StartButton>
      )}

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
            <S.Title> CONFIGURACAO </S.Title>

            <S.FormGroup>
              <label>
                {" "}
                Número Cartelas (de 1 a 3) <span id="resultCartela">0</span>
              </label>
              <input
                name="maxCards"
                value={values.maxCards}
                type="range"
                min="1"
                max="3"
                required
                onChange={handleChangesValues}
                id="cartelas"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label> Tempo Próxima Bola (de 1 a 10 s.) </label>
              <input
                name="frequency"
                value={values.frequency}
                type="range"
                min="1"
                max="10"
                onChange={handleChangesValues}
                id="timer"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label> Limite Sorteios (de 10 a 75) </label>
              <input
                name="limitPrizeDraw"
                value={values.limitPrizeDraw}
                type="range"
                min="10"
                max="75"
                onChange={handleChangesValues}
                id="sorteio"
              />
            </S.FormGroup>

            <S.ButtonBox>
              {/* <Buttons value={"compartilhar"} type={"button"} /> */}
              <Buttons value={"Jogar"} type={"button"} onClick={play} />
            </S.ButtonBox>
          </S.Form>

          <S.CloseModalButton
            aria-label="Close modal"
            onClick={() => setIsOpen(false)}
          />
        </S.Content>
      </S.StyledModal>
    </>
  );
};

export default StartButton;
