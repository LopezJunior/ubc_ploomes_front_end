import styled, { css } from "styled-components";

export const Logo = styled.div`
  ${() => css`
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    img {
      width: 100%;
    }
  `}
`;
