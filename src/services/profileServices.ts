import Api from "./api";
import swal from "sweetalert";
import { ProfilesTypes } from "types/interfaces";

export const Profiles = {
  start: async () => {
    try {
      const res = await Api.get("/myAccount", { method: "GET" });
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
