import { useState } from "react";
import { useApp } from "../../context";
import { ContainerStyled } from "./style";

const CardAmount = () => {
  const { values, isLoading } = useApp();

  const valuesList: [string, number][] = Object.entries(values);

  let valuesToRender = [];

  let valuesToRenderOne = [];

  for (let i = 0; i < valuesList.length; i++) {
    if (valuesList[i][0] === "1") {
      valuesToRenderOne.push(valuesList[i]);
    } else {
      valuesToRender.push(valuesList[i]);
    }
  }

  // console.log(valuesToRender)
  // console.log(values)

  return (
    <ContainerStyled>
    <div>
      <h2>
          Você receberá:
      </h2>
      <div className="blue-bar"></div>
    </div>
    <div className="values">
      {valuesToRenderOne.length > 0 ? (
        valuesToRenderOne.map((elem, index) => (
          <p key={index}>
            Amanhã: <span>R$ {(elem[1] / 100).toFixed(2).replace(".", ",")}</span>
          </p>
        ))
      ) : valuesToRenderOne.length === 0 && isLoading && (
        <p>Amanhã: <span>R$ 0,00</span></p>
      )}
      {
        valuesToRender.length > 0
            ? valuesToRender.map((elem, index) => (
                <p key={index}>
                Em {elem[0]} dias: <span>R${" "}{(elem[1] / 100).toFixed(2).replace(".", ",")}</span>
                </p>
            ))
            : 
            valuesToRender.length === 0 && isLoading &&
            <>
                <p>Em 15 dias: <span>R$ 0,00</span></p>    
                <p>Em 30 dias: <span>R$ 0,00</span></p>    
                <p>Em 90 dias: <span>R$ 0,00</span></p>    
            </>
        }
    </div>
    </ContainerStyled>
  );
};

export default CardAmount;
