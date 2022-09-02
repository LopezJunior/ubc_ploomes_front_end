import * as S from "./style";
import sound from "../../assets/audio/sound.mp3";
import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
  value: string;
} & ButtonType;

const ButtonWhite = ({ value }: ButtonSmallProps) => {
  const audio = new Audio(sound);
  return <S.ButtonWhite onClick={() => audio.play()}>{value}</S.ButtonWhite>;
};

export default ButtonWhite;
