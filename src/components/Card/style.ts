import styled, { css } from "styled-components";

export const Parent = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.textColorRed};
		font-family: ${theme.constants.bodyFontFamily};
		background-color: white;
		width: 22%;
		height: 48%;
		border-radius: 10px;
		position: relative;
		bottom: -17%;
		margin-left: 20px;
	`}
`;

export const Ball = styled.div`
	margin-left: -1px;
	display: grid;
	grid-template-columns: repeat(5, 2fr);
	grid-template-rows: repeat(5, 2fr);
	grid-column-gap: 1px;
	grid-row-gap: 1px;
	font-size: 45px;
	text-align: center;

	@media (min-height: 700px) {
		grid-column-gap: 1px;
		grid-row-gap: 20px;
		font-size: 55px;
	}
`;

export const Title = styled.div`
	${({ theme }) => css`
		margin: 5px;
		text-align: center;
		font-size: 60px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		height: 17%;
		border-bottom: 1px solid ${theme.colors.textColorRed};
	`}
`;

export const TitleB = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;
export const TitleI = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const TitleN = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`;
export const TitleG = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const TitleO = styled.div`
  grid-area: 1 / 5 / 2 / 6;
`;
