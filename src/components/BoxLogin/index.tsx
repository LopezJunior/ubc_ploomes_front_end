import * as S from "./style";
import ButtonRedSmall from "components/ButtonRedSmall";
import { Link } from "react-router-dom";
import { RoutePath } from "types/routes";
import { FaRegUserCircle as UserCicle } from "react-icons/fa";
import { RiLock2Line as Lock } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { HTMLAttributes, useState } from "react";
import { UserLogin } from "types/interfaces";
import { useNavigate } from "react-router-dom";
import { loginService } from "services/authService";
import swal from "sweetalert";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

// export type BoxLoginProps = {
//   onSubmitData: (data: { nickname: string; password: string }) => void;
// } & BoxLoginType;

const BoxLogin = () => {
  const navigation = useNavigate();

  const [values, setValues] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await loginService.Login(values);

    if (!response) {
      swal({
        title: "Erro de login",
        text: "Usuário e/ou senha inválidos",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;
    // const userId = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      //   localStorage.setItem("userId", userId);
      swal({
        title: "Bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigation("/");
    }
  };
  return (
    <S.BoxLogin>
      <S.BoxLoginTitle>
        <div>
          <S.BoxLoginH2>Fala Mano(A), Bem Vindo!</S.BoxLoginH2>
          <S.BoxLoginH3>
            Primeira vez por aqui?{" "}
            <Link to={RoutePath.CREATEUSER}>Cadastre-se</Link>
          </S.BoxLoginH3>
        </div>
      </S.BoxLoginTitle>
      <S.BoxLoginForm onSubmit={handleLogin}>
        <S.BoxLoginDivInput>
          <AiOutlineMail />
          <label> email: </label>
          <S.BoxLoginInput
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChangesValues}
          />
        </S.BoxLoginDivInput>
        <S.BoxLoginDivInput>
          <Lock />
          <label> password: </label>
          <S.BoxLoginInput
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChangesValues}
          />
        </S.BoxLoginDivInput>
        <S.BoxLoginSubmit>
          <ButtonRedSmall value={"login"} type={"submit"} />
        </S.BoxLoginSubmit>
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
