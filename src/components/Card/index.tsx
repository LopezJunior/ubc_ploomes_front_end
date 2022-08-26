import React, { useState, useEffect, useContext } from "react";
import * as S from "./style";
import { RoomContext } from "Contexts/room";

const Card = () => {
  const [numbersSort, setNumberSort] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [isSelect, setIsSelect] = useState(() => numbersSort.map(() => false));
  //const [numberList, setNumberList] = useState<any[]>([]);
  const context = useContext(RoomContext);

  async function setNumbers() {
    setNumberSort(context?.getNumbers()!);
  }

  useEffect(() => {
    setNumbers();
  }, []);

  return (
    <>
      <S.Parent>
        <S.Title>
          <S.TitleB>b</S.TitleB>
          <S.TitleI>i</S.TitleI>
          <S.TitleN>n</S.TitleN>
          <S.TitleG>g</S.TitleG>
          <S.TitleO>o</S.TitleO>
        </S.Title>
        <S.Ball>
          {numbersSort.map<React.ReactNode>((n: any, index) => {
            return (
              <div
                key={index}
                className={`Number${index + 1}`}
                onClick={() => {
                  setIsSelect(
                    isSelect.map((bool, j) => {
                      if (j === index) {
                        const isDuplicate = context?.selecteds.findIndex(
                          (num) => num === n
                        );
                        if (isDuplicate === -1) {
                          //setNumberList((numberList) => [...numberList, n]);
                          context?.setSelecteds(n);
                        }
                        return true;
                      } else {
                        return bool;
                      }
                    })
                  );
                }}
              >
                <div className={`${isSelect[index] ? "selected" : ""}`}>
                  {n}
                  {/*console.log(numberList)*/}
                </div>
              </div>
            );
          })}
        </S.Ball>
      </S.Parent>
    </>
  );
};

export default Card;