import styled, { css } from 'styled-components';
import Modal from 'styled-react-modal';
import { BaseModalBackground } from 'styled-react-modal';

export const VictoryModal = styled.section`
	${({ theme }) => css`
		font-family: ${theme.constants.bodyFontFamily};
		width: 100vw;
		height: 100vh;
	`}
`;

export const Top = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		width: 100%;
		height: 40%;
		top: 10px;
		position: absolute;
		color: ${theme.colors.primaryColor};
	`}
`;

export const Content = styled.section`
	${({ theme }) => css`
		color: ${theme.colors.primaryColor};
		display: flex;
		width: 100%;
		position: absolute;
		bottom: 10px;
	`}
`;

export const Image = styled.img`
	justify-self: center;
	align-self: center;
	width: 30%;
	position: relative;
	bottom: 25px;
	left: 22%;
`;

export const Footer = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primaryColor};
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 90%;
		height: 40%;
		bottom: 2rem;
		position: absolute;
		left: 5rem;
	`}
`;

export const Cartela = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 5px;
	width: 15%;
	height: 95%;
	align-items: center;
`;

export const Vitoria = styled.div`
	display: flex;
	background-color: #fff;
	border-radius: 5px;
	width: 45%;
	height: 90%;
	font-size: 4rem;
	text-align: center;
	align-items: center;
	justify-content: center;
`;

export const Tempo = styled.div`
	background-color: #fff;
	display: flex;
	border-radius: 5px;
	flex-direction: column;
	width: 15%;
	height: 60%;
	text-align: center;
	text-align: center;
	align-items: center;
	justify-content: center;

	h2 {
		font-size: 5rem;
		margin: 0;
	}

	h3 {
		font-size: 2rem;
		margin: 0;
	}
`;

export const Numeros = styled.div`
	position: relative;
	background-color: #fff;
	border-radius: 5px;
	width: 160px;
	height: 160px;
	left: 6%;
	text-align: center;

	h2 {
		font-size: 5rem;
		margin: 0;
	}

	h3 {
		font-size: 1.8rem;
		margin: 0;
	}
`;

export const Buttons = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.textColor};
		color: ${theme.colors.primaryColor};
		font-family: ${theme.constants.bodyFontFamily};
		text-transform: uppercase;
		border: none;
		cursor: pointer;
		width: 12rem;
		height: 4rem;
		font-size: 3rem;
	`}
`;

export const Overlay = styled.div`
	${() => css`
		position: fixed;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2;
		cursor: pointer;
	`}
`;

export const StyledModal = Modal.styled`
	${() => css`
		position: absolute;
		top: 50%;
		left: 50%;
		width: 45%;
		height: 90%;
		transform: translate(-50%, -50%);
		background-color: white;
		border-radius: 8px;
	`}
`;

export const FadingBackground = styled(BaseModalBackground)`
	transition: all 0.3s ease-in-out;
`;
