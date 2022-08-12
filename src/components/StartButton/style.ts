import styled, { css } from "styled-components";

export const StartButton = styled.a`
  display: flex;
  justify-content: center;
  height: 220px;
  width: 400px;
  transition: all 0.2s;

  img {
    height: 220px;
    width: 420px;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
