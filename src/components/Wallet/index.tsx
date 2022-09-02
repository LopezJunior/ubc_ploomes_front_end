import * as S from "./style";
import ButtonWhite from "components/ButtonWhite";
import { Profiles } from "services/profileServices";
import Swal from "sweetalert2";
import coin from "../../assets/img/coin.png";

const Wallet = () => {
  async function viewWallet() {
    const user = await Profiles.start();
    return Swal.fire({
      title: `CHAMPIONS POINTS:  ${user?.data.wallet} `,
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
      <ButtonWhite value={"Carteira"} type={"button"} />
    </a>
  );
};

export default Wallet;
