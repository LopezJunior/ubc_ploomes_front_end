import BoxLogin from "components/BoxLogin";
import * as S from "./style";
import Logo from "components/Logo";
const AuthLogin = () => {
  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   navigate(RoutePath.HOMEPAGE);
  // };
  return (
    <S.AuthLogin>
      <S.LoginContent>
        <Logo />
        <BoxLogin />
      </S.LoginContent>
    </S.AuthLogin>
  );
};

export default AuthLogin;
