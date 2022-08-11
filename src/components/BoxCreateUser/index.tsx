import * as S from "./style";
import ButtonRedSmall from "components/ButtonRedSmall";
import { FaRegUserCircle as UserCicle } from "react-icons/fa";
import { RiLock2Line as Lock } from "react-icons/ri";

const BoxCreateUser = () => {
  return (
    <S.BoxCreateUser>
      <S.BoxCreateUserTitle>
        <div>
          <S.BoxCreateUserH2>Insira seus dados:</S.BoxCreateUserH2>
        </div>
      </S.BoxCreateUserTitle>
      <S.BoxCreateUserForm>
        <S.BoxCreateUserDivInput>
          <UserCicle />
          <label> username: </label>
          <S.BoxCreateUserInput type={"text"} />
        </S.BoxCreateUserDivInput>
        <S.BoxCreateUserDivInput>
          <Lock />
          <label> password: </label>
          <S.BoxCreateUserInput type={"password"} />
        </S.BoxCreateUserDivInput>

        <S.BoxCreateUserDivInput>
          <Lock />
          <label>confirm password: </label>
          <S.BoxCreateUserInput type={"password"} />
        </S.BoxCreateUserDivInput>

        <S.BoxCreateUserSubmit>
          <ButtonRedSmall value={"registre-se"} type={"submit"} />
        </S.BoxCreateUserSubmit>
      </S.BoxCreateUserForm>
    </S.BoxCreateUser>
  );
};

export default BoxCreateUser;
