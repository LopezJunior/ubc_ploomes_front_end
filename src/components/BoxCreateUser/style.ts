import styled, { css } from "styled-components";

export const BoxCreateUser = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: #fff;
    width: 567px;
    height: 590px;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  `}
`;

export const BoxCreateUserTitle = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 28%;
    justify-content: center;
    align-items: center;
  `}
`;

export const BoxCreateUserH2 = styled.h2`
  ${() => css`
    font-size: 50px;
    font-weight: 400;
  `}
`;

export const BoxCreateUserH3 = styled.h3`
  ${({ theme }) => css`
    margin-top: -2rem;
    font-size: 18px;
    font-weight: 400;

    a {
      text-decoration: none;
      color: ${theme.colors.textColorRed};
    }

    a:hover {
      color: ${theme.colors.primaryColorOpacity};
    }
  `}
`;

export const BoxCreateUserForm = styled.div`
  ${() => css`
    width: 100%;
    height: 58%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  `}
`;

export const BoxCreateUserSubmit = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;

    a {
      text-decoration: none;
      color: ${theme.colors.textColorRed};
    }

    a:hover {
      color: ${theme.colors.primaryColorOpacity};
    }
  `}
`;

export const BoxCreateUserDivInput = styled.div`
  ${({ theme }) => css`
    width: 75%;
    border-bottom: 4px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
    }

    label {
      max-width: 75px;
      margin: 0 10px 0 10px;
    }
  `}
`;

export const BoxCreateUserInput = styled.input`
  ${({ theme }) => css`
    border: 1px solid;
    width: 70%;
    height: 25px;
    border: none;
    outline: 0;
    color: #000;
    font-size: 18px;
    margin: 3px;
  `}
`;
