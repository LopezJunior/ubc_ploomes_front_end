import * as S from './style';
import LineButtons from 'components/LineButtons';
import StartButton from 'components/StartButton';
import ButtonWhite from 'components/ButtonWhite';

const HomePage = () => {
	return (
		<S.HomePage>
			<S.HomeContent>
				<LineButtons />
				<StartButton />
				<ButtonWhite value={'Info'} type="button" />
			</S.HomeContent>
		</S.HomePage>
	);
};

export default HomePage;
