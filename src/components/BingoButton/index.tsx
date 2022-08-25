import React, { useEffect, useState, useContext } from "react";
import { RoomContext } from "Contexts/room";
import Api from "../../services/api";
import swal from "sweetalert";

const BingoButton = () => {
  const context = useContext(RoomContext);

  const handleClick = async () => {
    const card01 = {
      id: "01",
      marcacao: context?.selecteds,
      numeros: context?.getNumbers(),
    };
    console.log("card 01:", RoomContext);

    try {
      const res = await Api.post(`/Room/room/checkBingo`, card01);

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
  };

  // return res.data;

  // useEffect( () => {
  // }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleClick}>Bingo</button>
      </div>
    </>
  );
};

export default BingoButton;
