import BoxLogin from 'components/BoxLogin';
import * as S from './style';
import Logo from 'components/Logo';
import { RoutePath } from 'types/routes';
import { useNavigate } from 'react-router-dom';

const AuthLogin = () => {
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate(RoutePath.HOMEPAGE);
	};

	return (
		<S.AuthLogin>
			<S.LoginContent>
				<Logo />
				<BoxLogin onSubmitData={handleSubmit} />
			</S.LoginContent>
		</S.AuthLogin>
	);
};

export default AuthLogin;
