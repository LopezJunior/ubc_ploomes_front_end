import sound from "../../assets/audio/sound.mp3";
import * as S from "./style";

import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
  value: string;
} & ButtonType;

const ButtonRedSmall = ({ value, ...props }: ButtonSmallProps) => {
  const audio = new Audio(sound);
  return (
    <S.ButtonRedSmall onClick={() => audio.play()} {...props}>
      {value}
    </S.ButtonRedSmall>
  );
};

export default ButtonRedSmall;
