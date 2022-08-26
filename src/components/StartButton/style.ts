import styled, { css } from "styled-components";
import Modal from "styled-react-modal";
import { BaseModalBackground } from "styled-react-modal";
import { MdClose } from "react-icons/md";

export const StartButton = styled.a`
  display: flex;
  justify-content: center;
  height: 220px;
  width: 400px;
  transition: all 0.2s;

  img {
    height: 220px;
    width: 420px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

/*
export const Conteiner = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`}
`;

export const Overlay = styled.div`
	${({ theme }) => css`
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
*/

export const StyledModal = Modal.styled`
	${({}) => css`
    position: absolute;
    width: 60%;
    height: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("assets/img/fundo-textura-vermelho.jpg");
    width: 100%;
    height: 100%;
    gap: calc(100% - 90%);
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
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
  `}
`;


export const Form = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 40%;
		height: 80%;
		background-color: white;
		border: 0px solid blue;
		gap: 25px;
		label {
			font-family: ${theme.constants.bodyFontFamily};  
			color: ${theme.colors.textColorRed};  
			font-size: 16px;
		}
	`}
`;

export const FormGroup = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 90%;
		label {
			font-family: ${theme.constants.bodyFontFamily};  
			color: ${theme.colors.textColorRed};  
			font-size: 16px;
		}
		input {
			width: 90%;
			height: 28px;
			font-family: ${theme.constants.bodyFontFamily};  
			color: ${theme.colors.textColorRed};  
			font-size: 16px;
			border: none;
			border-bottom: 3px solid ${theme.colors.primaryColor};
			:focus {
				outline: 0;
			}
			::placeholder {
				color: ${theme.colors.textColorRed};  
			}
		}
	`}
`;

export const ButtonBox = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40%;
    gap: 05px;
  `}
`;

export const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 10;
  cursor: pointer;
`;

export const FadingBackground = styled(BaseModalBackground)`
  transition: all 0.3s ease-in-out;
`;


/*------------------------------------*/
// PADRONIZAÇÃO DE COMPONENTS
/*------------------------------------*/

export const BoxCreateUserDivInput = styled.div`
  ${({ theme }) => css`
    width: 75%;
    border-bottom: 4px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }

    label {
      max-width: 75px;
      margin: 0 10px 0 10px;
    }
  `}
`;

export const BoxCreateUserInput = styled.input`
  ${({ theme }) => css`
    border: 1px solid;
    width: 70%;
    height: 25px;
    border: none;
    outline: 0;
    color: #000;
    font-size: 18px;
    margin: 3px;
  `}
`;