import styled, { css } from "styled-components";

export const FullRanking = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    width: 50%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    overflow: hidden;
  `}
`;

export const RankingFrame = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 10%;
    font-size: 35px;
    /* border: 1px solid black; */
    /* border-bottom: 1px solid black; */
    /* border-radius: 20px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.primaryColorOpacity};
  `}
`;

export const RankingName = styled.span`
  /* margin-left: 50px; */
  /* overflow-y: scroll; */
`;
export const RankingMoney = styled.span`
  margin-right: 50px;
`;

export const Img = styled.img`
  margin-top: 5px;
  height: 40px;
  margin-left: 20px;
`;

export const ContentLeft = styled.span``;
export const ContentRight = styled.span`
  /* display: flex;
  justify-content: right; */
`;

export const Logo = styled.img``;
