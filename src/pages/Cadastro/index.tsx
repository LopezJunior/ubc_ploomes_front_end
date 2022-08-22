import * as S from './style';
import BoxCreateUser from 'components/BoxCreateUser';
import Logo from 'components/Logo';

const CreateUser = () => {
	return (
		<S.CreateUser>
			<S.CreateUserContent>
				<Logo />
				<BoxCreateUser />
			</S.CreateUserContent>
		</S.CreateUser>
	);
};

export default CreateUser;
