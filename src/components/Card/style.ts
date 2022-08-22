import styled, { css } from "styled-components";

export const Parent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    width: 22%;
    height: 310px;
    border-radius: 10px;
    position: relative;
    bottom: -20%;
    margin-left: 20px;
  `}
`;

export const Ball = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  font-size: 45px;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    margin: 5px;
    text-align: center;
    font-size: 60px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 50px;
    border-bottom: 1px solid ${theme.colors.textColorRed};
  `}
`;

export const TitleB = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const TitleI = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const TitleN = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const TitleG = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const TitleO = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
