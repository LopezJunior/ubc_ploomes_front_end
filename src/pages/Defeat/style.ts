import styled, { css } from "styled-components";
import Modal from "styled-react-modal";
import { BaseModalBackground } from "styled-react-modal";
import { MdClose } from "react-icons/md";

export const StyledModal = Modal.styled`
		position: absolute;
		width: 70%;
		height: 550px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: url("assets/img/fundo-textura-vermelho.jpg");
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: calc(100% - 30px);
  height: 30%;
  border: 0px solid red;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border: 0px solid red;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WhiteLargeBox = styled.div`
  width: 360px;
  height: calc(100% - 10px);
  border-radius: 3px;
  background-color: white;
  border: none;
  text-align: center;
  padding-top: 16px;
`;

export const WhiteSmallBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 04px;
    width: 180px;
    height: 90px;
    border-radius: 3px;
    background-color: ${theme.colors.textColor};
    border: none;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 28px;
    font-weight: 10;
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.textColorRed};
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding-left: 25px;
  padding-right: 25px;
`;

export const buttonWhite = styled.button`
  ${({ theme }) => css`
    width: 180px;
    height: 90px;
    border-radius: 3px;
    background-color: ${theme.colors.textColor};
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 28px;
    font-weight: 10;
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.textColorRed};
  `}
`;

export const Background = styled(BaseModalBackground)`
  transition: all 0.3s ease-in-out;
`;
