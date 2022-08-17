import Api from "./api";
import swal from "sweetalert";
import { ProfilesTypes } from "types/interfaces";

export const Profiles = {
  ProfilesUser: async () => {
    try {
      const res = await Api.get("/profile", { method: "GET" });
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

  EditProfile: async (id: string, profile: ProfilesTypes) => {
    try {
      const res = await Api.patch(`/profile/${id}`, profile);
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
