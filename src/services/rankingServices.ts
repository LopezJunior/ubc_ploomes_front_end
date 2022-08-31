import Api from "./api";
import swal from "sweetalert";
import { Vetor } from "components/StartButton/type";

export const RankingService = {
  start: async () => {
    try {
      const res = await Api.get("/ranking/filterByMoney");

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
