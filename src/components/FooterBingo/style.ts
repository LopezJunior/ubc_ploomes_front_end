import styled, { css } from "styled-components";

export const TitleBingo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    border-radius: 10px;
    width: 80%;
    height: 110px;
    margin-left: 10%;
  `}
`;
export const StopWatch = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 110px;
`;
export const Number = styled.span`
  font-size: 80px;
`;
export const Seconds = styled.span`
  font-size: 30px;
`;
