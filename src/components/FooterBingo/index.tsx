import ButtonRedLarge from "components/ButtonRedLarge";
import * as S from "./style";
import { useLocation } from "react-router-dom";
import { Room, RoomConfig } from "components/StartButton/type";
import { useEffect, useState } from "react";

const FooterBingo = () => {
  const status = useLocation();
  const [time, setTime] = useState(0);
	const [control, setControl] = useState<number>(0);

	async function getState() {
		let roomParams = status.state as RoomConfig;
		setTime(+roomParams.room.frequency);
	}

	useEffect(() => {
		getState();
	}, []);

	setTimeout(() => {
		if (control == 1 || control == 0) {
			setControl(time - 1);
		}
		if (control > 0) {
			let temp = control - 1;
			setControl(temp);
		}
	}, 1000);

  return (
    <S.TitleBingo>
      <S.StopWatch>
        <S.Number>{control}</S.Number>
        <S.Seconds>Segundos</S.Seconds>
      </S.StopWatch>
      <S.Title>UBC</S.Title>
      <ButtonRedLarge value={"reset"} type={"button"} />
    </S.TitleBingo>
  );
};

export default FooterBingo;
