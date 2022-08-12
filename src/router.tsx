import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import AuthLogin from "pages/AuthLogin";
import CreateUser from "pages/CreateUser";
import Config from 'pages/Config';
import HomePage from "pages/Homepage";

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.ROOT} element={''} />
      <Route path={RoutePath.HOMEPAGE} element={<HomePage />} />
			<Route path={RoutePath.AUTHLOGIN} element={<AuthLogin />} />
    	<Route path={RoutePath.CREATEUSER} element={<CreateUser />} />
			<Route path={RoutePath.CONFIG} element={ <Config /> } />
		</Routes>
	);
};

export default Router;
