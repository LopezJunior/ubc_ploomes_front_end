import * as S from "./style";
import sound from "../../assets/audio/sound.mp3";

import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
  value: string;
} & ButtonType;

const ButtonRedLarge = ({ value, ...props }: ButtonSmallProps) => {
  const audio = new Audio(sound);
  return (
    <S.ButtonRedLarge onClick={() => audio.play()} {...props}>
      {value}
    </S.ButtonRedLarge>
  );
};

export default ButtonRedLarge;
