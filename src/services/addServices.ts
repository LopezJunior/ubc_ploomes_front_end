import Api from "./api";
import swal from "sweetalert";

export const AddCoins = {
  start: async () => {
    try {
      const res = await Api.get("/ad", { method: "GET" });
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
