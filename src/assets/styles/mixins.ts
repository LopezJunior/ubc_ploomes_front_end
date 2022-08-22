import { css } from "styled-components";
import { constants } from "./constants";
import { colors } from "./colors";

const modalStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  color: ${colors.textColorRed};
`;

const buttonSmall = () => css`
  width: 180px;
  height: 37px;
  font-size: 30px;
  border-radius: 3px;
  font-weight: 400;
  font-family: ${constants.bodyFontFamily};
  border: none;
`;

const buttonLarge = () => css`
	width: 150px;
	height: 41px;
	font-size: 20px;
	border-radius: 3px;
	font-weight: 400;
	font-family: ${constants.bodyFontFamily};
	border: none;
`;

const buttonWhite = () => css`
  width: 230px;
  height: 70px;
  font-size: 60px;
  border-radius: 3px;
  font-weight: 400;
  font-family: ${constants.bodyFontFamily};
  border: none;
`;

const input = () => css` 
    width: 90%;
    height: 54px;
    font-family: ${constants.bodyFontFamily};  
    color: ${colors.textColorRed};  
    font-size: 14px;
    border: none;
    border-bottom: 1px solid red;
		:focus {
  	  outline: 0;
		}
		::placeholder {
      color: ${colors.textColorRed};  
		}
`;

export const mixins = {
  modalStyle,
  buttonSmall,
  buttonWhite,
	buttonLarge,
  input,
};
