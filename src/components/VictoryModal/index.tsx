import * as S from './style';
import fighter from '../../assets/img/fighter.png';
import { RoutePath } from 'types/routes';
import { useNavigate } from 'react-router-dom';

const VictoryModal = () => {
	const navigate = useNavigate();

	function restart() {
	
		navigate(RoutePath.HOMEPAGE, { state: { begin: false } } );
	  }
	
	  function sair() {
	
		navigate(RoutePath.HOMEPAGE );
	  }

	return (
		<S.VictoryModal>
			<S.Top>
				<S.Cartela>
					<p>Cartela Premiada</p>
				</S.Cartela>
				<S.Vitoria>
					<article>
						Parabens!! <br />
						Voce Bingou e Levou <br />O Cinturao Para Casa
					</article>
				</S.Vitoria>
				<S.Tempo>
					<h2>12:30</h2>
					<h3>Tempo da partita</h3>
				</S.Tempo>
			</S.Top>
			<S.Content>
				<S.Numeros>
					<h2>33</h2>
					<h3>Numeros Sorteados</h3>
				</S.Numeros>
				<S.Image src={fighter} alt="" />
			</S.Content>
			<S.Footer>
				<S.Buttons onClick={restart}>Restart</S.Buttons>
				<S.Buttons onClick={sair}>Sair</S.Buttons>
			</S.Footer>
		</S.VictoryModal>
	);
};

export default VictoryModal;
