import BoxLogin from 'components/BoxLogin';
import * as S from './style';
import logo from '../../assets/img/logo_cinturao.png';

const AuthLogin = () => {
	return (
		<S.AuthLogin>
			<S.LoginContent>
				<img src={logo} alt="" />
				<BoxLogin />
			</S.LoginContent>
		</S.AuthLogin>
	);
};

export default AuthLogin;
