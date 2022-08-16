import * as S from "./style";
import logo from "../../assets/img/logo_cinturao.png";
import BoxCreateUser from "components/BoxCreateUser";
import React, { useState } from "react";
import { RegisterUser } from "types/interfaces";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "services/authService";
import swal from "sweetalert";
import { FaRegUserCircle as UserCicle } from "react-icons/fa";
import { RiLock2Line as Lock } from "react-icons/ri";
import ButtonRedSmall from "components/ButtonRedSmall";

const CreateUser = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<RegisterUser>({
    username: "",
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
