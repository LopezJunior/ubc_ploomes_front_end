import ButtonWhite from "components/ButtonWhite";
import * as S from "./style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Profiles } from "services/profileServices";

const LineButtons = () => {
  const navigation = useNavigate();
  let teste = () => {
    Swal.fire({
      title: "Você Tem certeza?",
      text: "Assim que sair sera desconectado, sera presciso logar novamente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deslogar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  async function setUser() {
    const user = await Profiles.start();
    return Swal.fire({
      title: `Nome: ${user?.data.name} </br> Champions Points:  ${user?.data.wallet} `,
      width: 600,
      color: "rgb(158,56,40)",
      imageUrl: "https://i.imgur.com/JtSKbxe.png",
      backdrop: `
          rgba(186,95,95,0.4)
        `,
    });
  }

  return (
    <S.LineButtons>
      <a onClick={() => setUser()}>
        <ButtonWhite value={"perfil"} type={"button"} />
      </a>
      <a onClick={() => navigation("/ranking")}>
        <ButtonWhite value={"ranking"} type={"button"} />
      </a>
      <a onClick={teste}>
        <ButtonWhite value={"log out"} type={"button"} />
      </a>
    </S.LineButtons>
  );
};

export default LineButtons;
