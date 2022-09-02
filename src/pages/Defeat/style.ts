import styled, { css } from "styled-components";
import Modal from "styled-react-modal";
import { BaseModalBackground } from "styled-react-modal";
import { MdClose } from "react-icons/md";

export const Defeat = styled.main`
  ${({}) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vh;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    //background-image: url('assets/img/fundo-textura-vermelho.jpg');
    width: 90%;
    height: 90%;
  `}
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
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: calc(100% - 10px);
    border-radius: 3px;
    background-color: white;
    border: none;
    text-align: center;
  `}
`;

export const WhiteSmallBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 04px;
    width: 180px;
    height: 160px;
    border-radius: 3px;
    background-color: ${theme.colors.textColor};
    border: none;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 10;
    font-family: ${theme.constants.bodyFontFamily};
    color: ${theme.colors.textColorRed};
  `}
`;

export const Number = styled.span`
  ${({ theme }) => css`
    font-size: 5rem;
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
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    padding-left: 25px;
    padding-right: 25px;
    gap: calc(67% - 100px);
  `}
`;

export const buttonWhite = styled.button`
  ${({ theme }) => css`
    width: 180px;
    height: 70px;
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
