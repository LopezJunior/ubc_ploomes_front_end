import styled, { css } from "styled-components";

export const BoxCreateUser = styled.section`
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
			height: 88%;
			width: 35%;
		}
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

		@media (max-height: 700px) {
			margin-bottom: 1.5rem;
		}
	`}
`;

export const BoxCreateUserH2 = styled.h2`
	${() => css`
		font-size: 3rem;
		font-weight: 400;

		@media (max-height: 700px) {
			font-size: 1.8rem;
		}
	`}
`;

export const BoxCreateUserForm = styled.form`
	${() => css`
		width: 100%;
		height: 58%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
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

		@media (max-height: 700px) {
			margin-top: 0;
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
		height: 1.5rem;
		border: none;
		outline: 0;
		color: #000;
		font-size: 18px;
		margin: 3px;
	`}
`;
