import * as S from './style';

import { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonSmallProps = {
	value: string;
} & ButtonType;

const ButtonRedSmall = ({ value, ...props }: ButtonSmallProps) => {
	return <S.ButtonRedSmall {...props}>{value}</S.ButtonRedSmall>;
};

export default ButtonRedSmall;
