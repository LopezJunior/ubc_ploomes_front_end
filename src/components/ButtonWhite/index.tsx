import * as S from "./style";

import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
  value: string;
} & ButtonType;

const ButtonWhite = ({ value }: ButtonSmallProps) => {
  return <S.ButtonWhite>{value}</S.ButtonWhite>;
};

export default ButtonWhite;
