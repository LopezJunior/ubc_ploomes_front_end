import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 80%;
    height: 80%;
    gap: 25px;
    margin: 0 auto;
    border: 0px solid blue;
  `}
`;

export const Parent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    width: 30%;
    height: 90%;
    border-radius: 10px;
  `}
`;

export const Ball = styled.div`
  margin-left: -1px;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: repeat(5, 2fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  font-size: 45px;
  text-align: center;
  cursor: pointer;

  @media (min-height: 700px) {
    grid-column-gap: 1px;
    grid-row-gap: 20px;
    font-size: 55px;
  }

  div.Number1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  div.Number2 {
    grid-area: 2 / 1 / 3 / 2;
  }

  div.Number3 {
    grid-area: 3 / 1 / 4 / 2;
  }

  div.Number4 {
    grid-area: 4 / 1 / 5 / 2;
  }

  div.Number5 {
    grid-area: 5 / 1 / 6 / 2;
  }

  div.Number6 {
    grid-area: 1 / 2 / 2 / 3;
  }

  div.Number7 {
    grid-area: 2 / 2 / 3 / 3;
  }

  div.Number8 {
    grid-area: 3 / 2 / 4 / 3;
  }

  div.Number9 {
    grid-area: 4 / 2 / 5 / 3;
  }

  div.Number10 {
    grid-area: 5 / 2 / 6 / 3;
  }

  div.Number11 {
    grid-area: 1 / 3 / 2 / 4;
  }

  div.Number12 {
    grid-area: 2 / 3 / 3 / 4;
  }

  div.Number13 {
    grid-area: 3 / 3 / 4 / 4;
  }

  div.Number14 {
    grid-area: 4 / 3 / 5 / 4;
  }

  div.Number15 {
    grid-area: 5 / 3 / 6 / 4;
  }

  div.Number16 {
    grid-area: 1 / 4 / 2 / 5;
  }

  div.Number17 {
    grid-area: 2 / 4 / 3 / 5;
  }

  div.Number18 {
    grid-area: 3 / 4 / 4 / 5;
  }

  div.Number19 {
    grid-area: 4 / 4 / 5 / 5;
  }

  div.Number20 {
    grid-area: 5 / 4 / 6 / 5;
  }

  div.Number21 {
    grid-area: 1 / 5 / 2 / 6;
  }

  div.Number22 {
    grid-area: 2 / 5 / 3 / 6;
  }

  div.Number23 {
    grid-area: 3 / 5 / 4 / 6;
  }

  div.Number24 {
    grid-area: 4 / 5 / 5 / 6;
  }

  div.Number25 {
    grid-area: 5 / 5 / 6 / 6;
  }

  div.select {
  }

  div.selected {
    ${({ theme }) => css`
      background-color: ${theme.colors.textColorRed};
      color: white;
      border-radius: 10px;
      /* width: 60px; */
    `}
  }
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
    height: 17%;
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
