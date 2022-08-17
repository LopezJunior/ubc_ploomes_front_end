import * as S from './style';
import { useState } from 'react';
import Logo from 'components/Logo';
import { FiLogOut as Exit } from 'react-icons/fi';

const InfoModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);

	function toggleModal() {
		setIsOpen(!isOpen);
	}

	function afterOpen() {
		setTimeout(() => {
			setOpacity(1);
		}, 100);
	}

	function beforeClose() {
		return new Promise((resolve) => {
			setOpacity(0);
			setTimeout(resolve, 300);
		});
	}
	return (
		<>
			<S.Button onClick={toggleModal}>Info</S.Button>
			<S.StyledModal
				isOpen={isOpen}
				afterOpen={afterOpen}
				beforeClose={beforeClose}
				onBackgroundClick={toggleModal}
				onEscapeKeydown={toggleModal}
				backgroundProps={{ opacity }}
			>
				<S.Content>
					<h2>INFORMAÇÕES sobre o Bingo:</h2>
					<article>
						No Jogo, Bolas numeradas dentro de um globo são sorteadas
						individualmente. O bingo possui uma grande variedade de regras e
						diferentes formas de vencer, pradões e marcações de pontuação, mas é
						muito simples e fácil de jogar.
					</article>
					<h2>DEFINIÇÕES:</h2>
					<article>Jogadores: sem Limite de usuários</article>
					<article>Boals ou Pedras: 75</article>
					<article>
						Cartela: grande com 25 espaços, sendo 1 espaço central já preenchido
						(coringa)
						<br />e 24 espaços livres a preencher conforme sorteio das bolas(ou
						pedras).
					</article>
					<article>
						Poderes ou Powerups: são elementos específicos que podem agilizar e
						<br />
						melhorar a sua jogada.
					</article>
					<p>Falaremos mais deles adiante.</p>
					<S.Footer>
						<Logo />
						<Exit />
					</S.Footer>
				</S.Content>
			</S.StyledModal>
		</>
	);
};

export default InfoModal;
