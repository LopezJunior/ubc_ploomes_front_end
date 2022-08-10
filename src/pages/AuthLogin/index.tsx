import BoxLogin from 'components/BoxLogin';
import * as S from './style';
import Logo from '../../assets/img/logo_cinturao.png';

const AuthLogin = () => {
	return (
		<S.AuthLogin>
			<S.LoginContent>
				<img src={Logo} alt="" />
				<BoxLogin />
			</S.LoginContent>
		</S.AuthLogin>
	);
};

export default AuthLogin;
