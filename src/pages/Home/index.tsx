import * as S from "./style";
import LineButtons from "components/LineButtons";
import StartButton from "components/StartButton";
import InfoModal from "components/InfoModal";
import Add from "components/Add";
import Wallet from "components/Wallet";

const HomePage = () => {
  return (
    <S.HomePage>
      <S.HomeContent>
        <LineButtons />
        <StartButton />
        <S.Footer>
          <Add />
          <InfoModal />
          <Wallet />
        </S.Footer>
      </S.HomeContent>
    </S.HomePage>
  );
};

export default HomePage;
