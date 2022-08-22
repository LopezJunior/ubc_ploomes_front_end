import ButtonWhite from "components/ButtonWhite";
import * as S from "./style";
import Swal from "sweetalert2";
import "./style.css";

const LineButtons = () => {
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
        // Swal.fire("Desconectado!", "Você acabou de deslogar!", "success");
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };
  return (
    <S.LineButtons>
      <ButtonWhite value={"perfil"} type={"button"} />
      <ButtonWhite value={"ranking"} type={"button"} />
      <ButtonWhite value={"loja"} type={"button"} />
      <a onClick={teste}>
        <ButtonWhite value={"log out"} type={"button"} />
      </a>
    </S.LineButtons>
  );
};

export default LineButtons;
