import styled, { css } from "styled-components";

export const HistoryContainer = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.textColorRed};
		font-family: ${theme.constants.bodyFontFamily};
		margin-top: 0.7rem;
		background-color: white;
		height: 10%;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	`}
`;

export const BallDraw = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColorOpacity};
    font-family: ${theme.constants.bodyFontFamily};
    font-size: 50px;
  `}
`;
export const Ball = styled.span`
  font-size: 80px;
  position: absolute;
  left: 48%;
`;
