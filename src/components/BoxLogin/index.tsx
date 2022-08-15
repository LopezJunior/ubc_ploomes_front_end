import * as S from "./style";
import ButtonRedSmall from "components/ButtonRedSmall";
import { Link } from "react-router-dom";
import { RoutePath } from "types/routes";
import { FaRegUserCircle as UserCicle } from "react-icons/fa";
import { RiLock2Line as Lock } from "react-icons/ri";
import { HTMLAttributes, useState } from 'react';

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
	onSubmitData: (data: { nickname: string; password: string }) => void;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData }: BoxLoginProps) => {
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (): void => {
		const data = { nickname, password };
		onSubmitData(data);
	};
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
					<S.BoxLoginInput
						type="text"
						value={nickname}
						onChange={({ target }) => setNickname(target.value)}
					/>
				</S.BoxLoginDivInput>
				<S.BoxLoginDivInput>
					<Lock />
					<label> password: </label>
					<S.BoxLoginInput
						type="password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
				</S.BoxLoginDivInput>
				<S.BoxLoginSubmit>
					<ButtonRedSmall
						value={'login'}
						type={'button'}
						onClick={handleSubmit}
					/>
				</S.BoxLoginSubmit>
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;
