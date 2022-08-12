import styled, { css } from "styled-components";
import Modal from "styled-react-modal";
import { BaseModalBackground } from "styled-react-modal";
import './style.css';

export const Conteiner = styled.div`
	${({theme}) => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
        align-items: center;
	`}
`;

export const Overlay = styled.div`
	${({theme}) => css`
		position: fixed;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 2;
		cursor: pointer;
	`}
`;

export const StyledModal = Modal.styled`
	${({}) => css`
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 360px;
		transform: translate(-50%, -50%);
		background-color: white;
	`}
`;

export const Content = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		align-items: center;
  		background-image: url('assets/img/fundo-textura-vermelho.jpg');
  		width: 100%;
		height: 100%;
		gap: 15px;
  	`}
`;

export const ImageBox = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40%;
  		height: 50%;
	`}
`;

export const Image = styled.img`
	${({theme}) => css`
		width: 100%;
  		height: 100%;
		object-fit: cover;
  `}
`;

export const Title = styled.h2`
	${({theme}) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 20%;
		color: ${theme.colors.textColorRed};
		font-family: 'Teko'; 
	`}
`;
/*${constants.bodyFontFamily};*/

export const Form = styled.form`
	${({theme}) => css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 40%;
		height: 80%;
		background-color: white;
		font-family: 'Teko'; 
		font-size: 14px;
		border: 0px solid blue;
		gap: 15px;
		input {
			width: 80%;
			height: 54px;
			font-family: 'Teko'; 
			font-size: 14px;
		}
	`}
`;

export const FormGroup = styled.div`
	${({theme}) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 100%;	
	`}
`;

export const ButtonBox = styled.div`
	${() => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 80%;	
		height: 40%;
		gap:05px;
  `}
`;

export const Button = styled.button`
	${({theme}) => css`
		width: 100%;
		height: 41px;
		border-radius: 0;
		color: ${theme.colors.textColor};
		background-color: ${theme.colors.primaryColor};
		font-family: 'TEKO'; 
		font-size: 14px;
		cursor: pointer;
	`}
`;

export const footer = styled.div`
	${({theme}) => css`
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width:100%;
		height: 20%;
		gap: 05px;
	`}
`;

/*
const FadingBackground = styled(BaseModalBackground)`
  //opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
*/

export const FadingBackground = styled(BaseModalBackground)`
  transition: all 0.3s ease-in-out;
`;
