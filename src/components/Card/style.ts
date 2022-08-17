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
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    font-size: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${theme.colors.textColorRed};
  `}
`;
export const LineBingo = styled.div`
  margin-top: 10px;
  font-size: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center; ;
`;
export const Number1 = styled.span`
  ${({ theme }) => css`
    /* border-right: 1px solid ${theme.colors.textColorRed}; */
  `}
`;

export const Number2 = styled.span``;
export const Number3 = styled.span``;
export const Number4 = styled.span``;
export const Number5 = styled.span``;

export const Bingo1 = styled.span``;
export const Bingo2 = styled.span``;
export const Bingo3 = styled.span``;
export const Bingo4 = styled.span``;
export const Bingo5 = styled.span``;
