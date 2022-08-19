import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";
import AuthLogin from "pages/AuthLogin" 
import CreateUser from "pages/CreateUser";
import HomePage from "pages/Homepage";

const Router = () => {
  return (
    <Routes>
      {/* <Route path={RoutePath.ROOT} element={<ConfigStyled />} /> */}
      <Route path={RoutePath.HOMEPAGE} element={<HomePage />} />
      <Route path={RoutePath.AUTHLOGIN} element={<AuthLogin />} />
      <Route path={RoutePath.CREATEUSER} element={<CreateUser />} />
    </Routes>
  );
};

export default Router;