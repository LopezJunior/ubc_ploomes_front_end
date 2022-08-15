import * as S from './style';

import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
	value: string;
} & ButtonType;

const ButtonRedLarge = ({ value, ...props }: ButtonSmallProps) => {
	return <S.ButtonRedLarge {...props}>{value}</S.ButtonRedLarge>;
};

export default ButtonRedLarge;
