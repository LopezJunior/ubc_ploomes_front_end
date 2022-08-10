import * as S from './style';
import ButtonRedSmall from 'components/ButtonRedSmall';
import { Link } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import { FaRegUserCircle as UserCicle } from 'react-icons/fa';
import { RiLock2Line as Lock } from 'react-icons/ri';

const BoxLogin = () => {
	return (
		<S.BoxLogin>
			<S.BoxLoginTitle>
				<div>
					<S.BoxLoginH2>Fala Mano(A), Bem Vindo!</S.BoxLoginH2>
					<S.BoxLoginH3>
						Primeira vez por aqui?{' '}
						<Link to={RoutePath.CREATEUSER}>Cadastre-se</Link>
					</S.BoxLoginH3>
				</div>
			</S.BoxLoginTitle>
			<S.BoxLoginForm>
				<S.BoxLoginDivInput>
					<UserCicle />
					<label> username: </label>
					<S.BoxLoginInput type={'text'} />
				</S.BoxLoginDivInput>
				<S.BoxLoginDivInput>
					<Lock />
					<label> password: </label>
					<S.BoxLoginInput type={'password'} />
				</S.BoxLoginDivInput>
				<S.BoxLoginSubmit>
					<ButtonRedSmall value={'login'} type={'submit'} />
					<Link to={RoutePath.USERFORGOTPASSWORD}>Esqueceu a senha?</Link>
				</S.BoxLoginSubmit>
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
