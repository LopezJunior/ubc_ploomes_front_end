import * as S from "./style";
import logo from "../../assets/img/cinturao_iniciar.png";
import { useEffect, useState } from 'react';
import Buttons from 'components/ButtonRedLarge';
import Logo from 'components/Logo';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'types/routes';

const StartButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);
	const navigate = useNavigate();

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

	function jogar() {
		navigate('/bingo');
		return;
	}

	async function tokenVerify() {
		const token = localStorage.getItem('jwt');
		if (!token) {
			navigate(RoutePath.AUTHLOGIN);
			return;
		}
	}

	useEffect(() => {
		tokenVerify();
	}, []);

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
						<Logo />
					</S.ImageBox>

					<S.Form>
						<S.Title> CONFIGURACAO </S.Title>

						<input id="n_cartelas" placeholder="Numero De Cartelas"></input>
						<input
							id="proxima_bola"
							placeholder="Tempo para Proxima Bola"
						></input>
						<input id="limite_sorteio" placeholder="Numero De Sorteios"></input>

						<S.ButtonBox>
							<Buttons value={'compartilhar'} type={'button'} />
							<Buttons value={'Iniciar Jogo'} type={'button'} onClick={jogar} />
						</S.ButtonBox>
					</S.Form>

					<S.CloseModalButton
						aria-label="Close modal"
						onClick={() => setIsOpen(false)}
					/>
				</S.Content>
			</S.StyledModal>
		</div>
	);
};

export default StartButton;
