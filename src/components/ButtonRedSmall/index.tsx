import sound from "../../assets/audios/sound.mp3";
import * as S from "./style";

import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
  value: string;
} & ButtonType;

const ButtonRedSmall = ({ value, ...props }: ButtonSmallProps) => {
  let play = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <S.ButtonRedSmall onClick={play} {...props}>
      {value}
    </S.ButtonRedSmall>
  );
};

export default ButtonRedSmall;
