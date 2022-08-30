import * as S from './style';
import LineButtons from 'components/LineButtons';
import StartButton from 'components/StartButton';
import InfoModal from 'components/InfoModal';

const HomePage = () => {
	return (
		<S.HomePage>
			<S.HomeContent>
				<LineButtons />
				<StartButton />
				<InfoModal />
			</S.HomeContent>
		</S.HomePage>
	);
};

export default HomePage;
