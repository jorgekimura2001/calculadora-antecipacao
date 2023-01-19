import { useApp } from "../../context";
import { ContainerStyled } from "./style";

const CardAmount = () => {
  const { values, isLoading, isClick} = useApp();
  
  let valuesToRenderOne: {}[] = values.filter(elem => {
    const valueNumber = [...Object.keys(elem)].join()
    return valueNumber === '1'
  })
  
  let valuesToRender: {}[] = values.filter(elem => {
    const valueNumber = [...Object.keys(elem)].join()
    return valueNumber !== '1'
  })

  return (
    <ContainerStyled>
    <div>
      <h2>
          Você receberá:
      </h2>
      <div className="blue-bar"></div>
    </div>
    <div className="values">
      {
        valuesToRenderOne.length > 0 ? valuesToRenderOne.map((elem, index) => {
          const value = +[...Object.values(elem)].join()
          return (
          <p key={index}>
            Amanhã: <span>R$ {(value / 100).toFixed(2).replace(".", ",")}</span>
          </p>
        )
        }) : 
        valuesToRenderOne.length === 0 && isLoading && (
        <p>Amanhã: <span>R$ 0,00</span></p>
      )
      }
      {
        valuesToRender.length > 0 ? valuesToRender.map((elem: {}, index: number) => {
          const value: any = [...Object.entries(elem)]
          return ( 
            <p key={index}>
                Em {value[0][0]} dias: <span>R${" "}{(+value[0][1] / 100).toFixed(2).replace(".", ",")}</span>
            </p>
          )
        }) :
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
