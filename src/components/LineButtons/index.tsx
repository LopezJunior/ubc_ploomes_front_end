import ButtonWhite from "components/ButtonWhite";
import * as S from "./style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./style.css";
import icon from "../../assets/img/icon.png";

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
  let nome = "Ranatinho alexandro vascaino";
  let profileUser = () => {
    Swal.fire({
      title: `Nome: ${nome} Carteira: R$ 100.00 `,
      width: 600,
      // padding: "1em",
      color: "rgb(158,56,40)",
      imageUrl: "https://i.imgur.com/JtSKbxe.png",
      // background: "#fff url(../../assets/img/icon.png)",
      backdrop: `
        rgba(186,95,95,0.4)
      `,
    });
  };
  return (
    <S.LineButtons>
      <a onClick={profileUser}>
        <ButtonWhite value={"perfil"} type={"button"} />
      </a>
      <ButtonWhite value={"ranking"} type={"button"} />
      {/* <ButtonWhite value={"loja"} type={"button"} /> */}
      <a onClick={teste}>
        <ButtonWhite value={"log out"} type={"button"} />
      </a>
    </S.LineButtons>
  );
};

export default LineButtons;
