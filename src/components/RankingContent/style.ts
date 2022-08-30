import styled, { css } from "styled-components";

export const FullRanking = styled.div`
  width: 50%;
  height: 95%;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: hidden;
`;

export const RankingFrame = styled.div`
  width: 100%;
  height: 10%;
  font-size: 35px;
  /* border: 1px solid black; */
  border-bottom: 1px solid black;
  /* border-radius: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RankingName = styled.span`
  margin-left: 50px;
  /* overflow-y: scroll; */
`;
export const RankingMoney = styled.span`
  margin-right: 50px;
`;
