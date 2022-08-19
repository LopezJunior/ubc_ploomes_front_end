import styled, { css } from 'styled-components';
import Modal from 'styled-react-modal';
import { BaseModalBackground } from 'styled-react-modal';

export const InfoModal = styled.section`
	${({ theme }) => css`
		font-family: ${theme.constants.infoFontFamily};
	`}
`;

export const Button = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonWhite}
		background-color: ${theme.colors.textColor};
		color: ${theme.colors.primaryColor};
		margin: 10px;
		cursor: pointer;
		transition: all 0.2s;

		:hover {
			transform: scale(1.02);
		}
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

export const Content = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primaryColor};
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		padding: 10px;
		text-align: center;
	`}

	h2 {
		font-size: 36px;
	}

	article {
		font-size: 18px;
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 100px;
	margin-top: 15px;

	img {
		width: 100px;
	}

	svg {
		width: 60px;
		height: 60px;
		cursor: pointer;
	}
`;

export const FadingBackground = styled(BaseModalBackground)`
	transition: all 0.3s ease-in-out;
`;
