import { css } from 'styled-components';
import { constants } from './constants';
import { colors } from './colors';

const modalStyle = () => css`
	font-family: ${constants.bodyFontFamily};
	color: ${colors.textColorRed};
`;

export const mixins = {
	modalStyle,
};
