import ButtonWhite from "components/ButtonWhite";
import * as S from "./style";

const LineButtons = () => {
  return (
    <S.LineButtons>
      <ButtonWhite value={"perfil"} type={"button"} />
      <ButtonWhite value={"ranking"} type={"button"} />
      <ButtonWhite value={"loja"} type={"button"} />
      <ButtonWhite value={"log out"} type={"button"} />
    </S.LineButtons>
  );
};

export default LineButtons;
