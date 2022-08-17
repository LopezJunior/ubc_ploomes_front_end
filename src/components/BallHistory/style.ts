import styled, { css } from "styled-components";

export const HistoryContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    margin-top: 10px;
    background-color: white;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  font-size: 80px;
`;
