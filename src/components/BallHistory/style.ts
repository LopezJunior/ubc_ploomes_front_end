import styled, { css } from "styled-components";

export const HistoryContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    margin-top: 10px;
    height: 60px;
    width: 90%;
  `}
`;

export const BallDraw = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColorOpacity};
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 50px;
  `}
`;
export const Ball = styled.span`
  font-size: 90px;
  position: absolute;
  left: 48%;
`;
