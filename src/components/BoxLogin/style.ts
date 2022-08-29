import styled, { css } from "styled-components";

export const BoxLogin = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.textColorRed};
    font-family: ${theme.constants.bodyFontFamily};
    background-color: #fff;
    width: 30%;
    height: 70%;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (max-height: 700px) {
      width: 35%;
      height: 75%;
    }
  `}
`;

export const BoxLoginTitle = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 28%;
    justify-content: center;
    align-items: center;
  `}
`;

export const BoxLoginH2 = styled.h2`
  ${() => css`
    font-size: 2.8rem;
    font-weight: 400;
  `}

  @media (max-height: 700px) {
    font-size: 1.5rem;
  }
`;

export const BoxLoginH3 = styled.h3`
  ${({ theme }) => css`
    margin-top: -2rem;
    font-size: 1.1rem;
    font-weight: 400;

    a {
      text-decoration: none;
      color: ${theme.colors.textColorRed};
    }

    a:hover {
      color: ${theme.colors.primaryColorOpacity};
    }

    @media (max-height: 700px) {
      margin-top: -1rem;
      font-size: 1rem;
    }
  `}
`;

export const BoxLoginForm = styled.form`
  ${() => css`
    width: 100%;
    height: 58%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    @media (max-height: 700px) {
      margin-top: 1.5rem;
    }
  `}
`;

export const BoxLoginSubmit = styled.div`
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

export const BoxLoginDivInput = styled.div`
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
      margin: 0 10px 0 10px;
    }
  `}
`;

export const BoxLoginInput = styled.input`
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
