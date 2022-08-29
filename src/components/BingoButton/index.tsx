import React, { useEffect, useState, useContext } from "react";
import { RoomContext } from "Contexts/room";
import Api from "../../services/api";
import swal from "sweetalert";
import ButtonRedLarge from "components/ButtonRedLarge";

const BingoButton = () => {
  const context = useContext(RoomContext);

    const handleClick = async () => {
        const card = context?.getCards()[0];
        
        const card01 ={
            id: '01',
            'numeros': card?.vetor,
            'marcacao': card?.selecteds,
        }
        console.log('card 01:', card01 );
    
    // const card01 = {
    //   id: "01",
    //   marcacao: context?.selecteds,
    //   numeros: context?.getNumbers(),
    // };
    // console.log("card 01:", context);
    // try {
    //   const res = await Api.patch(
    //     `/Room/room/:${card01.id}}/checkBingo`,
    //     card01
    //   );
    //   return res.data;
    // } catch (error: any) {
    //   swal({
    //     title: "Error",
    //     text: `${error.message}`,
    //     icon: "error",
    //     timer: 6000,
    //   });
    //   return error;
    window.location.replace("http://localhost:3000/vitoria");
  };

  // return res.data;

  // useEffect( () => {
  // }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonRedLarge
          onClick={handleClick}
          value={"Vitoria!"}
          type={"button"}
        ></ButtonRedLarge>
      </div>
    </>
  );
};

export default BingoButton;
