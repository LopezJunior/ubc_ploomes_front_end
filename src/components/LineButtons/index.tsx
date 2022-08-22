import ButtonWhite from "components/ButtonWhite";
import { Console } from "console";
import { Link } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

const LineButtons = () => {
  let logOut = () => {
    localStorage.clear();
  };
  return (
    <S.LineButtons>
      <ButtonWhite value={"perfil"} type={"button"} />
      <ButtonWhite value={"ranking"} type={"button"} />
      <ButtonWhite value={"loja"} type={"button"} />
      <Link onClick={logOut} to={RoutePath.AUTHLOGIN}>
        <ButtonWhite value={"log out"} type={"button"} />
      </Link>
    </S.LineButtons>
  );
};

export default LineButtons;
