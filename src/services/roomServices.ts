import Api from "./api";
import swal from "sweetalert";
import { ProfilesTypes } from "types/interfaces";

export const RoomServices = {
  start: async () => {
    try {
      const res = await Api.get("/room/start", { method: "POST" });
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
