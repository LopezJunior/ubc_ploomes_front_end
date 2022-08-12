import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import ConfigStyled from 'pages/ConfigStyled';
import AuthLogin from "pages/AuthLogin";
import CreateUser from "pages/CreateUser";
import HomePage from "pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<ConfigStyled />} />
      <Route path={RoutePath.HOMEPAGE} element={<HomePage />} />
      <Route path={RoutePath.AUTHLOGIN} element={<AuthLogin />} />

export default Router;
