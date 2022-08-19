import * as S from "./style";
import logo from "../../assets/img/cinturao_iniciar.png";
import { useState } from 'react';
import Buttons from 'components/ButtonRedLarge';

const StartButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);

	function toggleModal() {
		//setOpacity(0);
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
		<div>
			<S.StartButton onClick={toggleModal}>
				<img src={logo} />
			</S.StartButton>

			<S.StyledModal
				isOpen={isOpen}
				afterOpen={afterOpen}
				beforeClose={beforeClose}
				onBackgroundClick={toggleModal}
				onEscapeKeydown={toggleModal}
				/*opacity={opacity}*/
				backgroundProps={{ opacity }}
			>
				<S.Content>
					<S.ImageBox>
						<S.Image src="assets/img/ufc-cinturao.png" />
					</S.ImageBox>

					<S.Form>
						<S.Title> CONFIGURAÇÃO </S.Title>

						<input id="n_cartelas" placeholder="Número De Cartelas"></input>
						<input
							id="proxima_bola"
							placeholder="Tempo para Próxima Bola"
						></input>
						<input id="limite_sorteio" placeholder="Número De Sorteios"></input>

						<S.ButtonBox>
							<Buttons value={'compartilhar'} type={'button'} />
							<Buttons value={'Iniciar Jogo'} type={'button'} />
						</S.ButtonBox>
					</S.Form>

					<S.CloseModalButton
						aria-label='Close modal'
						onClick={() => setIsOpen(false)}
					/>
				</S.Content>

			</S.StyledModal>
		</div>
	);
};

export default StartButton;
