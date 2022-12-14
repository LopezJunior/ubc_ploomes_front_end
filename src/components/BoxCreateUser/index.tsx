import * as S from "./style";
import ButtonRedSmall from "components/ButtonRedSmall";
import { FaRegUserCircle as UserCicle } from "react-icons/fa";
import { RiLock2Line as Lock } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RegisterService } from "services/authService";
import { RegisterUser } from "types/interfaces";
import swal from "sweetalert";

const BoxCreateUser = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<RegisterUser>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterUser) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: "Error!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 6000,
      });
    }

    localStorage.setItem("jwt", jwt);
    swal({
      title: "Usuário cadastrado com sucesso!",
      icon: "success",
      timer: 6000,
    });

    navigate("/login");
  };

  console.log(values);

  return (
    <S.BoxCreateUser>
      <S.BoxCreateUserTitle>
        <div>
          <S.BoxCreateUserH2>Insira seus dados:</S.BoxCreateUserH2>
        </div>
      </S.BoxCreateUserTitle>
      <S.BoxCreateUserForm onSubmit={handleRegisterUser}>
        <S.BoxCreateUserDivInput>
          <UserCicle />
          <label> nickname: </label>
          <S.BoxCreateUserInput
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChangesValues}
          />
        </S.BoxCreateUserDivInput>
        <S.BoxCreateUserDivInput>
          <AiOutlineMail />
          <label> email: </label>
          <S.BoxCreateUserInput
            type="string"
            name="email"
            id="email"
            required
            onChange={handleChangesValues}
          />
        </S.BoxCreateUserDivInput>
        <S.BoxCreateUserDivInput>
          <Lock />
          <label> password: </label>
          <S.BoxCreateUserInput
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChangesValues}
          />
        </S.BoxCreateUserDivInput>

        <S.BoxCreateUserDivInput>
          <Lock />
          <label>confirm password: </label>
          <S.BoxCreateUserInput
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            onChange={handleChangesValues}
          />
        </S.BoxCreateUserDivInput>

        <S.BoxCreateUserSubmit>
          <ButtonRedSmall value={"registre-se"} type={"submit"} />
        </S.BoxCreateUserSubmit>
      </S.BoxCreateUserForm>
    </S.BoxCreateUser>
  );
};

export default BoxCreateUser;
