import * as S from "./style";
import ButtonWhite from "components/ButtonWhite";
import { AddCoins } from "services/addServices";
import Swal from "sweetalert2";
import coin from "../../assets/img/coin.png";

const Add = () => {
  async function viewWallet() {
    const user = await AddCoins.start();
    return Swal.fire({
      title: `Foi Adicionado 100 Chanpions Points em sua carteira `,
      width: 600,
      color: "rgb(158,56,40)",
      imageUrl: `${coin}`,
      imageHeight: 200,
      backdrop: `
          rgba(186,95,95,0.4)
        `,
    });
  }

  return (
    <a onClick={() => viewWallet()}>
      <ButtonWhite value={"Pontos"} type={"button"} />
    </a>
  );
};

export default Add;
