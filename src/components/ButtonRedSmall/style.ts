import styled, { css } from 'styled-components';

export const ButtonRedSmall = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonSmall}
		background-color: ${theme.colors.primaryColor};
		color: ${theme.colors.textColor};
		cursor: pointer;
		transition: all 0.2s;

		:hover {
			transform: scale(1.02);
		}
	`}
`;
