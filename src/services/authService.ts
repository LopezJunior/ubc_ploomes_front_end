import Api from "./api";
import swal from "sweetalert";
import { UserLogin, RegisterUser } from "../types/interfaces";

export const loginService = {
  Login: async (values: UserLogin) => {
    try {
      const res = await Api.post("/auth", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};

export const RegisterService = {
  Register: async (values: RegisterUser) => {
    try {
      const res = await Api.post("/user", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
