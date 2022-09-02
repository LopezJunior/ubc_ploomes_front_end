import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 13%;
  height: 80%;
  padding-top: 10px;
  background: white;
  border-radius: 20px;
`;

export const ActionButton = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 90%;
    height: 36%;
    transition: all 0.2s;

    :hover {
      transform: scale(1.02);
    }
  `}
`;

export const ImageBox = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-height: 60%;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  `}
`;

export const ButtonTitle = styled.h3`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin: 0px;
    font-size: 40px;
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
  `}
`;
