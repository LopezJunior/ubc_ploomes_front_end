import styled, { css } from "styled-components";

export const Parent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    width: 23%;
    height: 310px;
    border-radius: 10px;
    position: relative;
    bottom: -20%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    font-size: 30px;
    align-items: center;
  `}
`;
export const Number01 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const Number02 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;
export const Number03 = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;
export const Number04 = styled.div`
  grid-area: 4 / 1 / 5 / 2;
`;
export const Number05 = styled.div`
  grid-area: 5 / 1 / 6 / 2;
`;
export const Number06 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const Number07 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
export const Number08 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`;
export const Number09 = styled.div`
  grid-area: 4 / 2 / 5 / 3;
`;

export const Number10 = styled.div`
  grid-area: 5 / 2 / 6 / 3;
`;
export const Number11 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const Number12 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
`;
export const Number13 = styled.div`
  grid-area: 3 / 3 / 4 / 4;
`;
export const Number14 = styled.div`
  grid-area: 4 / 3 / 5 / 4;
`;
export const Number15 = styled.div`
  grid-area: 5 / 3 / 6 / 4;
`;
export const Number16 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const Number17 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
`;
export const Number18 = styled.div`
  grid-area: 3 / 4 / 4 / 5;
`;
export const Number19 = styled.div`
  grid-area: 4 / 4 / 5 / 5;
`;
export const Number20 = styled.div`
  grid-area: 5 / 4 / 6 / 5;
`;
export const Number21 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
export const Number22 = styled.div`
  grid-area: 2 / 5 / 3 / 6;
`;
export const Number23 = styled.div`
  grid-area: 3 / 5 / 4 / 6;
`;
export const Number24 = styled.div`
  grid-area: 4 / 5 / 5 / 6;
`;
export const Number25 = styled.div`
  grid-area: 5 / 5 / 6 / 6;
`;
