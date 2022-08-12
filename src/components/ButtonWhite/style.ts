import styled, { css } from "styled-components";

export const ButtonWhite = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.buttonWhite}
    background-color: ${theme.colors.textColor};
    color: ${theme.colors.primaryColor};
    margin: 10px;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      transform: scale(1.02);
    }
  `}
`;
