import React, { useEffect, useState, useContext } from "react";
import { RoomContext  } from "Contexts/room";

const BingoButton = () => {
    const context = useContext( RoomContext );

    const handleClick = () => {
        const card01 ={
            id: '01',
            'numeros': context?.getNumbers(),
            'marcacao': context?.selecteds,
        }
        console.log('card 01:', card01 );

    }

    useEffect( () => {
    }, []);

    return (
      <>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button onClick={handleClick}>Bingo</button>
        </div>
      </>
    );
  };
  
  export default BingoButton;
  