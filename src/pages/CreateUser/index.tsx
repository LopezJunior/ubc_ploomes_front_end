import * as S from "./style";
import logo from "../../assets/img/logo_cinturao.png";
import BoxCreateUser from "components/BoxCreateUser";

const CreateUser = () => {
  return (
    <S.CreateUser>
      <S.CreateUserContent>
        <img src={logo} alt="" />
        <BoxCreateUser />
      </S.CreateUserContent>
    </S.CreateUser>
  );
};

export default CreateUser;
