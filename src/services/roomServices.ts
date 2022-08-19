import Api from "./api";
import swal from "sweetalert";
import { ProfilesTypes } from "types/interfaces";

export const RoomServices = {
  start: async () => {
    try {
      const res = await Api.post("/room/start", { method: "POST" });
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

  getRoom: async (id: string) => {
    try {
      const res = await Api.get(`/room/${id}`, { method: "GET" });

      return res.data;

    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
      return error;
    }
  },

};
