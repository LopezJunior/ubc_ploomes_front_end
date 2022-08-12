import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import AuthLogin from "pages/AuthLogin";
import CreateUser from "pages/CreateUser";
import Config from 'pages/Config';

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.ROOT} element={''} />
			<Route path={RoutePath.HOMEPAGE} element={''} />
			<Route path={RoutePath.AUTHLOGIN} element={<AuthLogin />} />
      		<Route path={RoutePath.CREATEUSER} element={<CreateUser />} />
			<Route path={RoutePath.CONFIG} element={ <Config /> } />
		</Routes>
	);
};

export default Router;
