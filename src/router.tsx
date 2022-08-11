import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import ConfigStyled from 'pages/ConfigStyled';

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.ROOT} element={ <ConfigStyled /> } />
			<Route path={RoutePath.HOMEPAGE} element={''} />
			<Route path={RoutePath.AUTHLOGIN} element={''} />
		</Routes>
	);
};

export default Router;
